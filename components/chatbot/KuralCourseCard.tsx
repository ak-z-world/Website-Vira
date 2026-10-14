"use client";

import React from "react";
import { CourseItem, t } from "@/lib/chatbot/i18n";

interface KuralCourseCardProps {
  course: CourseItem;
  compact?: boolean;
}

export default function KuralCourseCard({ course }: KuralCourseCardProps) {
  const isFlagship = course.badge?.toUpperCase() === "FLAGSHIP" || course.id === "python-agentic-ai-aws";

  return (
    <div className="mt-3 mb-1.5 w-full rounded-xl border border-[#E9D5FF] bg-white p-3.5 shadow-xs transition-all hover:border-[#7C3AED] hover:shadow-md">
      {/* Header with Title and Flagship Badge */}
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-bold text-[#1E1B4B] text-[15px] leading-snug">
          {course.name}
        </h4>
        {isFlagship && (
          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider shadow-xs">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {course.badge || t("ui.flagship")}
          </span>
        )}
      </div>

      {/* Short Description with high-contrast text */}
      <p className="mt-2 text-[13px] text-[#334155] leading-relaxed font-medium">
        {course.shortDesc}
      </p>

      {/* Tags Pills */}
      <div className="mt-3 flex flex-wrap gap-1.5 items-center">
        {course.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md bg-[#F3E8FF] border border-[#DDD6FE] px-2.5 py-0.5 text-[11px] font-semibold text-[#5B21B6]"
          >
            {tag}
          </span>
        ))}
        {course.level && (
          <span className="ml-auto inline-flex items-center text-[10px] font-semibold text-[#475569] bg-gray-100 px-2 py-0.5 rounded-md">
            {course.level}
          </span>
        )}
      </div>
    </div>
  );
}
