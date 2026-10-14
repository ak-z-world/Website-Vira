// Kural Rule-Based State Machine Flow
// No LLM. Deterministic state transitions, input validation, and course catalog.

import { t, tArray, CourseItem } from "./i18n";

export type FlowStep =
  | "welcome"
  | "askBackground"
  | "askName"
  | "askPhone"
  | "askTiming"
  | "summary"
  | "complete";

export interface LeadModel {
  id: string;
  name: string;
  phone: string;
  courseId: string;
  courseName: string;
  shortDesc: string;
  tags: string[];
  level: string;
  background: string;
  timing: string;
  deliveryChoice?: string;
  language: "en"; // V2: can be "hi", "ta", etc.
  sourceUrl: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: number;
  courseCard?: CourseItem;
  whatsappUrl?: string;
  isSummary?: boolean;
}

export const COURSES: CourseItem[] = [
  {
    id: "python-agentic-ai-aws",
    name: "Python + Agentic AI + AWS",
    badge: "FLAGSHIP",
    shortDesc: "Our flagship track — from Python foundations to AI agents to cloud deployment.",
    tags: ["Python", "Agentic AI", "AWS"],
    level: "Beginner to Advanced",
  },
  {
    id: "python-django",
    name: "Python Django Development",
    shortDesc: "Backend engineering with Python and Django — APIs, databases and deployment.",
    tags: ["Python", "Django", "PostgreSQL", "REST APIs"],
    level: "Core Builder",
  },
  {
    id: "react-js",
    name: "React JS Development",
    shortDesc: "Modern frontend engineering — React, Next.js and TypeScript, production-style.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    level: "Core Builder",
  },
  {
    id: "aws-devops",
    name: "AWS & DevOps Engineering",
    shortDesc: "Cloud infrastructure and delivery — from EC2 to CI/CD to production.",
    tags: ["AWS", "Docker", "CI/CD", "Linux"],
    level: "Advanced",
  },
  {
    id: "python-fullstack",
    name: "Python Full Stack Development",
    shortDesc: "End-to-end product building — Python backend, React frontend, deployed live.",
    tags: ["Python", "Django", "React", "PostgreSQL"],
    level: "Advanced",
  },
  {
    id: "generative-ai",
    name: "Generative AI",
    shortDesc: "Applied GenAI engineering — LLMs, assistants and AI-powered features.",
    tags: ["Python", "LLMs", "PyTorch", "MLOps"],
    level: "Advanced",
  },
];

/**
 * Validate full name (minimum 3 characters, reasonable letters/spaces)
 */
export function validateName(raw: string): { valid: boolean; value: string; error?: string } {
  const trimmed = raw.trim();
  if (trimmed.length < 3) {
    return {
      valid: false,
      value: trimmed,
      error: t("validation.nameMinLength"),
    };
  }
  return { valid: true, value: trimmed };
}

/**
 * Validate 10-digit Indian phone number
 * Strips whitespace, hyphens, country code (+91), or leading zeros
 */
export function validatePhone(raw: string): { valid: boolean; value: string; error?: string } {
  let cleaned = raw.replace(/\D/g, "");

  // If starts with 91 and has 12 digits, strip 91
  if (cleaned.length === 12 && cleaned.startsWith("91")) {
    cleaned = cleaned.slice(2);
  } else if (cleaned.length === 11 && cleaned.startsWith("0")) {
    cleaned = cleaned.slice(1);
  }

  // 10 digits starting with 6, 7, 8, 9
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(cleaned)) {
    return {
      valid: false,
      value: cleaned,
      error: t("validation.phoneInvalid"),
    };
  }

  return { valid: true, value: cleaned };
}

/**
 * Lead LocalStorage persistence helpers
 */
const STORAGE_KEY_LEAD = "crackleap_kural_lead_v1";
const STORAGE_KEY_HISTORY = "crackleap_kural_history_v1";

export function saveLeadToStorage(lead: LeadModel) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_LEAD, JSON.stringify(lead));
  } catch (e) {
    console.warn("Could not save lead to localStorage", e);
  }
}

export function loadLeadFromStorage(): LeadModel | null {
  if (typeof window === "undefined") return null;
  try {
    const data = localStorage.getItem(STORAGE_KEY_LEAD);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function saveChatHistory(messages: ChatMessage[], step: FlowStep) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      STORAGE_KEY_HISTORY,
      JSON.stringify({ messages, step, updatedAt: Date.now() })
    );
  } catch (e) {
    console.warn("Could not save chat history", e);
  }
}

export function loadChatHistory(): { messages: ChatMessage[]; step: FlowStep } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Expire history older than 7 days
    if (parsed.updatedAt && Date.now() - parsed.updatedAt > 7 * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(STORAGE_KEY_HISTORY);
      return null;
    }
    return { messages: parsed.messages || [], step: parsed.step || "welcome" };
  } catch {
    return null;
  }
}

export function clearChatStorage() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY_HISTORY);
    localStorage.removeItem(STORAGE_KEY_LEAD);
  } catch (e) {
    console.warn("Could not clear chat storage", e);
  }
}
