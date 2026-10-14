"use client";

import dynamic from "next/dynamic";

// Dynamic import with SSR disabled for optimal client-side execution & zero hydration mismatch
const KuralWidget = dynamic(() => import("./KuralWidget"), {
  ssr: false,
});

export default function KuralChatbotClient() {
  return <KuralWidget />;
}
