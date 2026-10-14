"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChatMessage } from "@/lib/chatbot/kuralFlow";
import KuralCourseCard from "./KuralCourseCard";
import { t } from "@/lib/chatbot/i18n";

interface KuralBubbleProps {
  message: ChatMessage;
}

export default function KuralBubble({ message }: KuralBubbleProps) {
  const isBot = message.sender === "bot";

  const timeString = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={`flex w-full gap-2.5 my-2 ${isBot ? "justify-start" : "justify-end"}`}
    >
      {/* Bot Avatar */}
      {isBot && (
        <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] via-[#6D28D9] to-[#5B21B6] text-white flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-purple-100 select-none">
          K
        </div>
      )}

      {/* Bubble Container */}
      <div
        className={`flex flex-col max-w-[88%] sm:max-w-[82%] ${
          isBot ? "items-start" : "items-end"
        }`}
      >
        <div
          className={`px-4 py-3 leading-[1.6] tracking-[0.1px] shadow-sm transition-all ${
            isBot
              ? "bg-[#F5F3FF] text-[#1E1B4B] text-[15px] font-medium rounded-2xl rounded-bl-sm border border-[#E9D5FF]"
              : "bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white text-[15px] font-medium rounded-2xl rounded-br-sm shadow-sm"
          }`}
        >
          {/* Main message text */}
          <p className="whitespace-pre-line break-words">{message.text}</p>

          {/* Embedded Course Card if attached */}
          {message.courseCard && <KuralCourseCard course={message.courseCard} />}

          {/* Embedded WhatsApp Link Button if summary / confirmation */}
          {message.whatsappUrl && (
            <div className="mt-3 pt-2.5 border-t border-purple-200/80 flex flex-col gap-2">
              <a
                href={message.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm py-2.5 px-4 shadow-sm hover:shadow transition-all text-center no-underline"
              >
                <svg
                  className="w-4 h-4 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{t("ui.openWhatsApp")}</span>
              </a>
            </div>
          )}
        </div>

        {/* Timestamp - WCAG visible #9CA3AF, 11px font-medium */}
        <span className="text-[11px] font-medium text-[#9CA3AF] mt-1 px-1">
          {timeString}
        </span>
      </div>
    </motion.div>
  );
}
