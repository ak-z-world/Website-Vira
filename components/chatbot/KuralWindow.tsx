"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  COURSES,
  ChatMessage,
  FlowStep,
  LeadModel,
  clearChatStorage,
  loadChatHistory,
  loadLeadFromStorage,
  saveChatHistory,
  saveLeadToStorage,
  validateName,
  validatePhone,
} from "@/lib/chatbot/kuralFlow";
import { CourseItem, t, tArray } from "@/lib/chatbot/i18n";
import { generateKuralWhatsAppUrl } from "@/lib/chatbot/kuralWhatsapp";
import KuralBubble from "./KuralBubble";

interface KuralWindowProps {
  onClose: () => void;
}

export default function KuralWindow({ onClose }: KuralWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [step, setStep] = useState<FlowStep>("welcome");
  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");
  const [honeypot, setHoneypot] = useState<string>("");

  // Lead state tracking
  const [leadData, setLeadData] = useState<Partial<LeadModel>>({
    language: "en",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll on new messages or typing state change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Load existing history or start conversation
  useEffect(() => {
    const existingLead = loadLeadFromStorage();
    if (existingLead) {
      setLeadData(existingLead);
    }

    const history = loadChatHistory();
    if (history && history.messages.length > 0) {
      setMessages(history.messages);
      setStep(history.step);
    } else {
      // Initialize with welcome message
      const welcomeMsg: ChatMessage = {
        id: "msg-welcome-0",
        sender: "bot",
        text: t("messages.welcome"),
        timestamp: Date.now(),
      };
      setMessages([welcomeMsg]);
      setStep("welcome");
    }
  }, []);

  // Sync state to storage
  useEffect(() => {
    if (messages.length > 0) {
      saveChatHistory(messages, step);
    }
  }, [messages, step]);

  // Focus input when moving to name or phone step
  useEffect(() => {
    if (step === "askName" || step === "askPhone") {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [step]);

  /**
   * Helper to append a bot message with realistic typing delay (600ms)
   */
  const appendBotMessage = (
    text: string,
    extra?: Partial<ChatMessage>,
    onComplete?: () => void
  ) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const newBotMsg: ChatMessage = {
        id: `bot-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        sender: "bot",
        text,
        timestamp: Date.now(),
        ...extra,
      };
      setMessages((prev) => [...prev, newBotMsg]);
      if (onComplete) onComplete();
    }, 600);
  };

  /**
   * Helper to append a user message
   */
  const appendUserMessage = (text: string) => {
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      sender: "user",
      text,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);
  };

  /**
   * Step 1: Handle Course Selection
   */
  const handleSelectCourse = (course: CourseItem) => {
    appendUserMessage(course.name);
    setLeadData((prev) => ({
      ...prev,
      courseId: course.id,
      courseName: course.name,
      shortDesc: course.shortDesc,
      tags: course.tags,
      level: course.level,
    }));

    // Bot confirms course and attaches card, then prompts background
    appendBotMessage(
      t("messages.courseSelected", { course: course.name }),
      { courseCard: course },
      () => {
        setTimeout(() => {
          appendBotMessage(t("messages.askBackground"), {}, () => {
            setStep("askBackground");
          });
        }, 300);
      }
    );
  };

  /**
   * Step 2: Handle Background Selection
   */
  const handleSelectBackground = (background: string) => {
    appendUserMessage(background);
    setLeadData((prev) => ({ ...prev, background }));

    appendBotMessage(t("messages.askName"), {}, () => {
      setStep("askName");
    });
  };

  /**
   * Step 3: Handle Name Submission
   */
  const handleNameSubmit = (nameVal: string) => {
    const res = validateName(nameVal);
    if (!res.valid) {
      setInputError(res.error || t("validation.nameMinLength"));
      return;
    }

    setInputError("");
    setInputValue("");
    appendUserMessage(res.value);

    setLeadData((prev) => {
      const updated = { ...prev, name: res.value };
      appendBotMessage(
        t("messages.askPhone", {
          name: res.value,
          course: prev.courseName || "your chosen track",
        }),
        {},
        () => {
          setStep("askPhone");
        }
      );
      return updated;
    });
  };

  /**
   * Step 4: Handle Phone Submission
   */
  const handlePhoneSubmit = (phoneVal: string) => {
    const res = validatePhone(phoneVal);
    if (!res.valid) {
      setInputError(res.error || t("validation.phoneInvalid"));
      return;
    }

    setInputError("");
    setInputValue("");
    appendUserMessage(res.value);

    setLeadData((prev) => {
      const updated = { ...prev, phone: res.value };
      appendBotMessage(
        t("messages.askTiming", {
          course: prev.courseName || "your track",
        }),
        {},
        () => {
          setStep("askTiming");
        }
      );
      return updated;
    });
  };

  /**
   * Step 5: Handle Timing Selection
   */
  const handleSelectTiming = (timing: string) => {
    appendUserMessage(timing);
    setLeadData((prev) => {
      const updated = { ...prev, timing };

      // Step 6: Summary message
      appendBotMessage(
        t("messages.summary", {
          name: updated.name || "there",
          course: updated.courseName || "the track",
          shortDesc: updated.shortDesc || "",
          level: updated.level || "Industry standard",
          phone: updated.phone || "",
        }),
        { isSummary: true },
        () => {
          setStep("summary");
        }
      );
      return updated;
    });
  };

  /**
   * Step 6: Handle Final Delivery Choice & Dispatch Lead
   */
  const handleSelectDelivery = async (choice: string) => {
    appendUserMessage(choice);

    const sourceUrl =
      typeof window !== "undefined"
        ? window.location.href
        : "https://crackleap.vertexloop.in";

    const finalLead: LeadModel = {
      id: leadData.id || `LEAD-${Date.now().toString(36).toUpperCase()}`,
      name: leadData.name || "Anonymous",
      phone: leadData.phone || "",
      courseId: leadData.courseId || "python-agentic-ai-aws",
      courseName: leadData.courseName || "Python + Agentic AI + AWS",
      shortDesc: leadData.shortDesc || "",
      tags: leadData.tags || [],
      level: leadData.level || "Beginner to Advanced",
      background: leadData.background || "General",
      timing: leadData.timing || "Immediately",
      deliveryChoice: choice,
      language: "en",
      sourceUrl,
      createdAt: new Date().toISOString(),
    };

    saveLeadToStorage(finalLead);

    // Generate WhatsApp link
    const waUrl = generateKuralWhatsAppUrl({
      name: finalLead.name,
      background: finalLead.background,
      courseName: finalLead.courseName,
      shortDesc: finalLead.shortDesc,
      tags: finalLead.tags,
      timing: finalLead.timing,
      phone: finalLead.phone,
      sourceUrl: finalLead.sourceUrl,
    });

    // Send lead to /api/lead
    try {
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...finalLead,
          website: honeypot, // Honeypot field
        }),
      }).catch((e) => console.error("Lead submission error", e));
    } catch (e) {
      console.warn("Lead POST error", e);
    }

    // Determine final bot confirmation text
    let confirmationText = t("messages.confirmationWhatsapp", {
      name: finalLead.name,
      phone: finalLead.phone,
    });
    if (choice === "Send via Email") {
      confirmationText = t("messages.confirmationEmail", {
        name: finalLead.name,
        phone: finalLead.phone,
      });
    } else if (choice === "Both") {
      confirmationText = t("messages.confirmationBoth", {
        name: finalLead.name,
        phone: finalLead.phone,
      });
    }

    appendBotMessage(
      confirmationText,
      {
        whatsappUrl: choice !== "Send via Email" ? waUrl : undefined,
      },
      () => {
        setStep("complete");
      }
    );
  };

  /**
   * Restart Conversation
   */
  const handleRestart = () => {
    clearChatStorage();
    setLeadData({ language: "en" });
    setInputValue("");
    setInputError("");
    const welcomeMsg: ChatMessage = {
      id: `bot-restart-${Date.now()}`,
      sender: "bot",
      text: t("messages.restartGreeting"),
      timestamp: Date.now(),
    };
    setMessages([welcomeMsg]);
    setStep("welcome");
  };

  /**
   * Form submit router for text input
   */
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (step === "askName") {
      handleNameSubmit(inputValue);
    } else if (step === "askPhone") {
      handlePhoneSubmit(inputValue);
    } else {
      // General freeform submission (e.g. if user types during quick replies)
      setInputError("");
      const text = inputValue.trim();
      setInputValue("");
      appendUserMessage(text);
      appendBotMessage(t("messages.selectOptionPrompt"));
    }
  };

  // Determine quick replies to display for the active step
  const renderQuickReplies = () => {
    if (isTyping) return null;

    if (step === "welcome") {
      // Show Flagship + 3 others (first 4) + "View All Courses"
      const visibleCourses = showAllCourses ? COURSES : COURSES.slice(0, 4);

      return (
        <div className="flex flex-col gap-2.5 p-3.5 bg-white border-t border-purple-100">
          <div className="flex flex-wrap gap-2">
            {visibleCourses.map((c) => {
              const isSelected = leadData.courseId === c.id;
              const isFlagship = c.badge === "FLAGSHIP";

              return (
                <button
                  key={c.id}
                  onClick={() => handleSelectCourse(c)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[14px] font-semibold transition-all shadow-xs cursor-pointer min-h-[44px] ${
                    isSelected
                      ? "bg-[#5B21B6] text-white border-[1.5px] border-[#5B21B6] shadow-sm"
                      : "bg-white text-[#4C1D95] border-[1.5px] border-[#DDD6FE] hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  {isFlagship && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  )}
                  <span>{c.name}</span>
                </button>
              );
            })}

            {/* Toggle View All / View Fewer */}
            <button
              onClick={() => setShowAllCourses(!showAllCourses)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[13px] font-semibold text-[#6D28D9] bg-[#EDE9FE] hover:bg-[#DDD6FE] border-[1.5px] border-[#DDD6FE] transition-all cursor-pointer min-h-[44px]"
            >
              <span>
                {showAllCourses
                  ? t("options.viewFewerCourses")
                  : `${t("options.viewAllCourses")} (${COURSES.length})`}
              </span>
              <svg
                className={`w-3.5 h-3.5 transition-transform ${
                  showAllCourses ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      );
    }

    if (step === "askBackground") {
      const backgrounds = tArray("options.backgrounds");
      return (
        <div className="flex flex-wrap gap-2 p-3.5 bg-white border-t border-purple-100">
          {backgrounds.map((bg) => (
            <button
              key={bg}
              onClick={() => handleSelectBackground(bg)}
              className="inline-flex items-center px-4 py-2.5 rounded-full text-[14px] font-semibold bg-white text-[#4C1D95] border-[1.5px] border-[#DDD6FE] hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs cursor-pointer min-h-[44px]"
            >
              {bg}
            </button>
          ))}
        </div>
      );
    }

    if (step === "askTiming") {
      const timings = tArray("options.timing");
      return (
        <div className="flex flex-wrap gap-2 p-3.5 bg-white border-t border-purple-100">
          {timings.map((time) => (
            <button
              key={time}
              onClick={() => handleSelectTiming(time)}
              className="inline-flex items-center px-4 py-2.5 rounded-full text-[14px] font-semibold bg-white text-[#4C1D95] border-[1.5px] border-[#DDD6FE] hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs cursor-pointer min-h-[44px]"
            >
              {time}
            </button>
          ))}
        </div>
      );
    }

    if (step === "summary") {
      const deliveryOpts = tArray("options.delivery");
      return (
        <div className="flex flex-wrap gap-2 p-3.5 bg-white border-t border-purple-100">
          {deliveryOpts.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelectDelivery(opt)}
              className="inline-flex items-center px-4 py-2.5 rounded-full text-[14px] font-semibold bg-white text-[#4C1D95] border-[1.5px] border-[#DDD6FE] hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs cursor-pointer min-h-[44px]"
            >
              {opt}
            </button>
          ))}
        </div>
      );
    }

    if (step === "complete") {
      return (
        <div className="flex items-center justify-between gap-2 p-3.5 bg-white border-t border-purple-100">
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold text-[#6D28D9] bg-[#EDE9FE] border-[1.5px] border-[#DDD6FE] hover:bg-[#DDD6FE] transition-all cursor-pointer min-h-[42px]"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M1 4v6h6M23 20v-6h-6" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
            </svg>
            <span>{t("ui.exploreAnother")}</span>
          </button>
        </div>
      );
    }

    return null;
  };

  const getPlaceholder = () => {
    if (step === "askName") return t("ui.inputNamePlaceholder");
    if (step === "askPhone") return t("ui.inputPhonePlaceholder");
    return t("ui.inputPlaceholder");
  };

  const isTextInputStep = step === "askName" || step === "askPhone";

  return (
    <div className="flex flex-col h-full w-full bg-white select-none sm:select-auto">
      {/* ---------- HEADER (Height 64px, clean white, high contrast) ---------- */}
      <div className="h-16 px-4 bg-white border-b border-purple-100 flex items-center justify-between shrink-0 shadow-xs">
        <div className="flex items-center gap-3">
          {/* Logo Mark: Purple Square / Gradient */}
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#6D28D9] to-[#5B21B6] text-white flex items-center justify-center font-extrabold text-sm shadow-md ring-2 ring-purple-100">
              K
            </div>
            {/* Live Green Pulsing Indicator */}
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#10B981] ring-2 ring-white" />
          </div>

          <div className="flex flex-col leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-[16px] text-[#1E1B4B]">
                {t("brand.botTitle")}
              </span>
              <span className="text-[11px] bg-purple-100 text-[#6D28D9] px-2 py-0.5 rounded-full font-bold">
                {t("brand.brandName")}
              </span>
            </div>
            <span className="text-[12px] text-[#6B7280] font-medium mt-0.5">
              {t("brand.botSubtitle")}
            </span>
          </div>
        </div>

        {/* Action buttons: Restart & Close */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleRestart}
            title={t("ui.restart")}
            aria-label={t("ui.restart")}
            className="p-2 rounded-xl text-[#6B7280] hover:text-[#1E1B4B] hover:bg-purple-50 transition-colors cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M1 4v6h6M23 20v-6h-6" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
            </svg>
          </button>
          <button
            onClick={onClose}
            title={t("ui.close")}
            aria-label={t("ui.close")}
            className="p-2 rounded-xl text-[#6B7280] hover:text-[#1E1B4B] hover:bg-purple-50 transition-colors cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* ---------- MESSAGES CONTAINER (bg-[#FAF5FF]/50, padding 20px, gap 16px) ---------- */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 bg-[#FAF5FF]/50 overscroll-contain">
        {messages.map((m) => (
          <KuralBubble key={m.id} message={m} />
        ))}

        {/* Typing indicator (3 bouncing dots 600ms) */}
        {isTyping && (
          <div className="flex items-center gap-2.5 my-2">
            <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white flex items-center justify-center font-bold text-xs ring-2 ring-purple-100">
              K
            </div>
            <div className="bg-[#F5F3FF] border border-[#E9D5FF] rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-bounce" />
              <span
                className="w-2 h-2 rounded-full bg-[#7C3AED] animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-2 h-2 rounded-full bg-[#7C3AED] animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* ---------- QUICK REPLIES BAR ---------- */}
      {renderQuickReplies()}

      {/* ---------- INPUT BAR & FOOTER (Padding 16px, bg-white border-t border-purple-100) ---------- */}
      <div className="p-4 bg-white border-t border-purple-100 shrink-0">
        {inputError && (
          <div className="mb-2 px-3.5 py-1.5 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2">
            <svg
              className="w-4 h-4 shrink-0 text-rose-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="font-medium">{inputError}</span>
          </div>
        )}

        <form onSubmit={handleFormSubmit} className="relative w-full flex items-center">
          {/* Honeypot anti-spam field */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <input
            ref={inputRef}
            type={step === "askPhone" ? "tel" : "text"}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (inputError) setInputError("");
            }}
            placeholder={getPlaceholder()}
            disabled={!isTextInputStep && step === "complete"}
            className="w-full bg-white border-[1.5px] border-[#E9D5FF] rounded-full pl-4 pr-14 py-3 text-[14px] font-medium text-[#1E1B4B] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-200/50 transition-all disabled:opacity-60 shadow-xs"
          />

          <button
            type="submit"
            disabled={!inputValue.trim()}
            aria-label={t("ui.send")}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg
              className="w-4 h-4 translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        {/* Footer note: font 10px #9CA3AF, centered, white-space nowrap with overflow hidden on mobile */}
        <div className="pt-2 text-center px-1">
          <p className="text-[10px] text-[#9CA3AF] font-medium whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
            {t("brand.footerNote")}
          </p>
        </div>
      </div>
    </div>
  );
}
