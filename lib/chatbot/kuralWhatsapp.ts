/**
 * Kural WhatsApp Link Generator
 * Generates direct wa.me link with encoded lead context for CrackLeap engineering admissions.
 */

export interface WhatsAppLeadPayload {
  name: string;
  background: string;
  courseName: string;
  shortDesc: string;
  tags: string[] | string;
  timing: string;
  phone: string;
  sourceUrl?: string;
}

export const CRACKLEAP_WHATSAPP_NUMBER = "919445770160";

export function generateKuralWhatsAppUrl(payload: WhatsAppLeadPayload): string {
  const { name, background, courseName, shortDesc, timing, phone } = payload;
  const tagsStr = Array.isArray(payload.tags) ? payload.tags.join(", ") : payload.tags;
  const sourceUrl =
    payload.sourceUrl ||
    (typeof window !== "undefined" ? window.location.href : "https://crackleap.vertexloop.in");

  const message = `Hi CrackLeap Team, I'm ${name} (${background}). Interested in ${courseName} - ${shortDesc}. Tags: ${tagsStr}. Timing: ${timing}. Phone: ${phone}. Source: ${sourceUrl}`;

  return `https://wa.me/${CRACKLEAP_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
