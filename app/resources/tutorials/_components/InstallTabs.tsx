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
                  ? "px-5 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white transition-colors"
                  : "px-5 py-2 rounded-lg text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
              }
            >
              {step.os}
            </button>
          );
        })}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <ol className="space-y-4 mb-6">
          {active.steps.map((stepText, idx) => (
            <li key={idx} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold flex items-center justify-center">
                {idx + 1}
              </span>
              <span className="text-gray-700 leading-relaxed pt-0.5">{stepText}</span>
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
