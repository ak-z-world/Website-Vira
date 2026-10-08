"use client";

import React from "react";

type P = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

function make(paths: React.ReactNode) {
  return function Icon({ size = 22, className }: P) {
    return (
      <svg {...base(size)} className={className}>
        {paths}
      </svg>
    );
  };
}

export const GraduationCapIcon = make(
  <>
    <path d="M22 9L12 4 2 9l10 5 10-5z" />
    <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
    <path d="M22 9v5" />
  </>
);
export const CodeIcon = make(
  <>
    <path d="M16 18l6-6-6-6" />
    <path d="M8 6l-6 6 6 6" />
  </>
);
export const CloudIcon = make(
  <>
    <path d="M17.5 19a4.5 4.5 0 0 0 .4-8.98 6 6 0 0 0-11.7 1.62A4 4 0 0 0 7 19h10.5z" />
  </>
);
export const CpuIcon = make(
  <>
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <rect x="9.5" y="9.5" width="5" height="5" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </>
);
export const UsersIcon = make(
  <>
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="10" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </>
);
export const CheckIcon = make(<path d="M20 6L9 17l-5-5" />);
export const ArrowRightIcon = make(
  <>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </>
);
export const MenuIcon = make(
  <>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </>
);
export const XIcon = make(
  <>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </>
);
export const MailIcon = make(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </>
);
export const PhoneIcon = make(
  <>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.25a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7a2 2 0 0 1 1.7 2z" />
  </>
);
export const MapPinIcon = make(
  <>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </>
);
export const AwardIcon = make(
  <>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 13l1.5 8-5-3-5 3 1.5-8" />
  </>
);
export const BriefcaseIcon = make(
  <>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 13h18" />
  </>
);
export const GlobeIcon = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15.3 15.3 0 0 1 0 18 15.3 15.3 0 0 1 0-18z" />
  </>
);
export const BuildingIcon = make(
  <>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M9 21v-4h6v4" />
    <path d="M8 7h2M8 11h2M14 7h2M14 11h2M8 15h2M14 15h2" />
  </>
);
export const ChatIcon = make(
  <>
    <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.6 8.6 0 0 1-3.8-.9L3 21l2-5.4a8.3 8.3 0 0 1-1-4.1A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z" />
  </>
);
export const LayersIcon = make(
  <>
    <path d="M12 2l10 5.5L12 13 2 7.5 12 2z" />
    <path d="M2 12.5L12 18l10-5.5" />
    <path d="M2 17.5L12 23l10-5.5" opacity="0.45" />
  </>
);
export const TerminalIcon = make(
  <>
    <path d="M4 17l6-5-6-5" />
    <path d="M12 19h8" />
  </>
);
export const DatabaseIcon = make(
  <>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </>
);
export const ChevronDownIcon = make(
  <>
    <path d="M6 9l6 6 6-6" />
  </>
);
export const SendIcon = make(
  <>
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
  </>
);
export const BookOpenIcon = make(
  <>
    <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2V4z" />
    <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7V4z" />
  </>
);
export const TargetIcon = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" />
  </>
);
export const ShieldIcon = make(
  <>
    <path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10z" />
    <path d="M9 11.5l2 2 4-4.5" />
  </>
);
export const ClockIcon = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </>
);
export const BrainIcon = make(
  <>
    <path d="M9.5 2a2.5 2.5 0 0 1 2.4 1.8A2.5 2.5 0 0 1 14.5 2a3 3 0 0 1 2.4 4.7 3 3 0 0 1 .6 4.3 3 3 0 0 1-.6 4.3A3 3 0 0 1 14.5 20a2.5 2.5 0 0 1-2.6 1.8A2.5 2.5 0 0 1 9.5 20a3 3 0 0 1-2.4-4.7 3 3 0 0 1-.6-4.3 3 3 0 0 1 .6-4.3A3 3 0 0 1 9.5 2z" />
    <path d="M12 4v16" opacity="0.4" />
  </>
);
export const ServerIcon = make(
  <>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" strokeWidth="2.4" />
  </>
);
export const RocketIcon = make(
  <>
    <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" />
    <path d="M14 4c3-2 7-2 7-2s0 4-2 7l-7 7-5-5 7-7z" />
    <circle cx="15" cy="9" r="1.6" />
    <path d="M14 4c-2 1-3.5 3-4 6" opacity="0.5" />
  </>
);
export const SparkIcon = make(
  <>
    <path d="M12 2v6M12 16v6M2 12h6M16 12h6" opacity="0.55" />
    <path d="M12 8l1.8 3.2L17 13l-3.2 1.8L12 18l-1.8-3.2L7 13l3.2-1.8L12 8z" />
  </>
);
