import React from "react";
import Image from "next/image";

interface MessageBubbleProps {
  sender: "bot" | "user";
  text: string;
}

export default function MessageBubble({ sender, text }: MessageBubbleProps) {
  const isBot = sender === "bot";

  return (
    <div
      className={`flex w-full mb-4 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && (
        <Image
          src="/assets/icons/bot_image.png"
          alt="Crack Leap Assistant"
          width={50}
          height={50}
          className="w-12 h-12 object-contain"
          priority
        />
      )}
      <div
        className={`px-4 py-3 max-w-[75%] whitespace-pre-wrap text-sm
        ${
          isBot
            ? "bg-bot-bg shadow-neo-flat text-gray-700 rounded-2xl rounded-tl-none"
            : "bg-bot-primary text-white shadow-lg rounded-2xl rounded-tr-none"
        }`}>
        {text}
      </div>
    </div>
  );
}
