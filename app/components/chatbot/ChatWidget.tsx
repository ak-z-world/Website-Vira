"use client";

import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import { botFlow, Option } from "./botConfig";
import Image from "next/image";

// 1. Explicitly define the Message shape
export interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: Option[];
  showForm?: boolean;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // 2. Tell React to use the Message interface
  const [messages, setMessages] = useState<Message[]>([
    {
      id: Date.now().toString(),
      sender: "bot",
      text: botFlow["START"].message,
      options: botFlow["START"].options,
    },
  ]);

  const handleOptionSelect = (option: Option) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: option.label,
    };

    // 3. Use the spread operator instead of .concat() for cleaner type handling
    setMessages((prev) => [
      ...prev.map((msg) => ({ ...msg, options: undefined })),
      userMsg,
    ]);

    setIsTyping(true);

    setTimeout(() => {
      const nextNode = botFlow[option.nextNode];
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: nextNode.message,
        options: nextNode.options,
        showForm: nextNode.showForm,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleFormSuccess = () => {
    // Remove the form and send a thank you message
    setMessages((prev) => prev.map((msg) => ({ ...msg, showForm: false })));
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: "bot",
          text: "Thank you! Your details have been received. Our team will email you shortly.",
          options: [{ label: "Start Over", nextNode: "START" }],
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button & Text Prompt */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-3 sm:gap-4 z-50">
          
          {/* High-Visibility Text Bubble */}
          <div
            className="hidden sm:flex items-center gap-2 bg-[#F4F5FA] border border-white/80 px-4 py-2 rounded-full shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff] hover:shadow-[6px_6px_12px_#d0d2dc,-6px_-6px_12px_#ffffff] transition-all animate-float cursor-pointer"
            onClick={() => setIsOpen(true)}>
            
            {/* Pulsing Green Online Indicator */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>

            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Chat with <span className="text-[#8B5CF6] font-bold">Aura</span>{" "}
              ✨
            </span>
          </div>

          {/* High-Visibility Bot Button */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open chat with Aura"
            className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F4F5FA] border border-white/80 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] hover:shadow-[8px_8px_18px_#d0d2dc,-8px_-8px_18px_#ffffff] hover:-translate-y-0.5 transition-all duration-300 rounded-2xl flex items-center justify-center group">
            
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden p-1.5">
              <Image
                src="/assets/icons/bot_image.png"
                alt="Aura AI Assistant"
                width={50}
                height={50}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </button>
        </div>
      )}

      {/* Main Chat Interface */}
      {isOpen && (
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onClose={() => setIsOpen(false)}
          onOptionSelect={handleOptionSelect}
          onFormSuccess={handleFormSuccess}
        />
      )}
    </>
  );
}
