"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import KuralWindow from "./KuralWindow";
import KuralLottieTrigger from "./KuralLottieTrigger";

export default function KuralWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 pointer-events-auto">
      {/* ---------- CHAT WINDOW POPUP ---------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className={`
              fixed z-50 flex flex-col overflow-hidden
              border border-purple-200/60 bg-white backdrop-blur-2xl
              shadow-[0_24px_64px_rgba(0,0,0,0.18)]
              
              /* 320px: Full-screen 100vw / 100dvh */
              inset-0 w-full h-[100dvh] rounded-none

              /* 375px - 640px: Floating modal with margins and rounded-2xl */
              min-[375px]:inset-auto min-[375px]:bottom-3 min-[375px]:right-3 min-[375px]:left-3 min-[375px]:top-3
              min-[375px]:w-[calc(100vw-24px)] min-[375px]:h-[calc(100dvh-24px)] min-[375px]:rounded-2xl

              /* 768px: 380x520 bottom-right 24px */
              md:left-auto md:top-auto md:bottom-6 md:right-6 md:w-[380px] md:h-[520px] md:rounded-2xl

              /* 1024px: 400x560 */
              lg:w-[400px] lg:h-[560px]

              /* 1440px+: 420x600 */
              2xl:w-[420px] 2xl:h-[600px]
            `}
            style={{
              paddingTop: "env(safe-area-inset-top, 0px)",
              paddingBottom: "env(safe-area-inset-bottom, 0px)",
            }}
          >
            <KuralWindow onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- ANIMATED LOTTIE ROBOT TRIGGER ---------- */}
      <KuralLottieTrigger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </div>
  );
}
