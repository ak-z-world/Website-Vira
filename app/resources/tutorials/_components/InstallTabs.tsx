"use client";

import { useState } from "react";
import type { InstallStep } from "../_data/tutorials";

interface InstallTabsProps {
  installation: InstallStep[];
}

export default function InstallTabs({ installation }: InstallTabsProps) {
  const [activeOS, setActiveOS] = useState<InstallStep["os"]>(
    installation[0]?.os ?? "Ubuntu"
  );

  const active = installation.find((step) => step.os === activeOS) ?? installation[0];

  if (!active) return null;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {installation.map((step) => {
          const isActive = step.os === activeOS;
          return (
            <button
              key={step.os}
              type="button"
              onClick={() => setActiveOS(step.os)}
              aria-pressed={isActive}
              className={
                isActive
                  ? "px-5 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white shadow-md transition-all"
                  : "px-5 py-2 rounded-xl text-sm font-semibold bg-[#F4F5FA] border border-white/80 text-slate-600 shadow-[2px_2px_5px_#dcdde3,-2px_-2px_5px_#ffffff] hover:text-[#8B5CF6] transition-all"
              }
            >
              {step.os}
            </button>
          );
        })}
      </div>

      <div className="bg-[#F4F5FA] border border-white/80 rounded-2xl p-6 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff]">
        <ol className="space-y-4 mb-6">
          {active.steps.map((stepText, idx) => (
            <li key={idx} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F4F5FA] shadow-[inset_2px_2px_4px_#d1d3dc,inset_-2px_-2px_4px_#ffffff] text-[#8B5CF6] text-sm font-bold flex items-center justify-center">
                {idx + 1}
              </span>
              <span className="text-slate-700 font-medium leading-relaxed pt-0.5">{stepText}</span>
            </li>
          ))}
        </ol>

        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wide">
              Verify Installation
            </span>
            <span className="text-xs text-gray-500">bash</span>
          </div>
          <pre className="text-gray-100 font-mono text-sm p-5 overflow-x-auto whitespace-pre">
            <code>{active.command}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
