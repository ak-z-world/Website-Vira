"use client";

import React, { useState, useEffect } from "react";
import { Lottie } from "lottie-react";
import { AnimatePresence, motion } from "framer-motion";
import robotWaving from "@/public/lottie/robot-waving.json";
import { t } from "@/lib/chatbot/i18n";

interface KuralLottieTriggerProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function KuralLottieTrigger({ onClick, isOpen }: KuralLottieTriggerProps) {
  const [showBubble, setShowBubble] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Speech bubble cycle: Pop in after 1s, hide after 6s, loop every 12s
  useEffect(() => {
    let hideTimer: NodeJS.Timeout;
    let cycleInterval: NodeJS.Timeout;

    // Show after 1s, hide after 6s (visible for 5s)
    const initialTimer = setTimeout(() => {
      setShowBubble(true);
      hideTimer = setTimeout(() => setShowBubble(false), 5000);
    }, 1000);

    // Re-show every 12s
    cycleInterval = setInterval(() => {
      setShowBubble(true);
      hideTimer = setTimeout(() => setShowBubble(false), 5000);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearInterval(cycleInterval);
    };
  }, []);

  // When the chat window is open, DO NOT render the trigger or any duplicate X button
  if (isOpen) {
    return null;
  }

  const bubbleVisible = showBubble || isHovered;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-auto select-none">
      {/* ---------- ATTRACT SPEECH BUBBLE ABOVE LOTTIE ---------- */}
      <AnimatePresence>
        {bubbleVisible && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={onClick}
            className="relative bg-white text-[#1E1B4B] text-[13px] sm:text-[14px] font-semibold rounded-2xl rounded-br-md shadow-lg border border-[#E9D5FF] px-4 py-2.5 max-w-[220px] sm:max-w-[270px] cursor-pointer hover:border-[#7C3AED] hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-1.5 leading-snug">
              <span>{t("ui.speechBubbleGreeting")}</span>
            </div>

            {/* Bubble Tail Pointing Down to Robot */}
            <div className="absolute -bottom-2 right-7 w-0 h-0 border-x-[7px] border-x-transparent border-t-[8px] border-t-white drop-shadow-xs" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- ROBOT + "CHAT WITH KURAL" PILL WRAPPER ---------- */}
      <div
        className="relative flex flex-col items-center gap-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Waving Robot Container (Bigger: 96px desktop / 88px laptop / 80px tablet / 72px mobile) */}
        <div
          onClick={onClick}
          className="relative cursor-pointer transition-transform duration-200 hover:scale-[1.08] active:scale-95 drop-shadow-[0_12px_32px_rgba(124,58,237,0.35)] w-[68px] h-[68px] min-[375px]:w-[72px] min-[375px]:h-[72px] md:w-[80px] md:h-[80px] lg:w-[88px] lg:h-[88px] 2xl:w-[96px] 2xl:h-[96px]"
        >
          {/* Real Animated Waving Robot from /public/lottie/robot-waving.json */}
          <Lottie
            src={robotWaving}
            loop={true}
            autoplay={true}
            className="w-full h-full object-contain select-none"
          />

          {/* 14px Green Live Dot with 3px White Border & Pulse Ripple at Top-Right */}
          <div className="absolute top-1 right-1 z-20 flex items-center justify-center pointer-events-none">
            <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-[#10B981] opacity-75 animate-ping" />
          </div>

          
        </div>        
      </div>
    </div>
  );
}
