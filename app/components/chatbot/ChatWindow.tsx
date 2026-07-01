import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import QuickReplies from "./QuickReplies";
import LeadCaptureForm from "./LeadCaptureForm";
import { Option, botFlow } from "./botConfig";
import Image from "next/image";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: Option[];
  showForm?: boolean;
}

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
  onClose: () => void;
  onOptionSelect: (option: Option) => void;
  onFormSuccess: () => void;
}

export default function ChatWindow({
  messages,
  isTyping,
  onClose,
  onOptionSelect,
  onFormSuccess,
}: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-20 right-6 w-96 h-[600px] max-h-[80vh] bg-bot-bg shadow-neo-flat rounded-2xl flex flex-col overflow-hidden z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-bot-bg shadow-sm z-10">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/icons/bot_image.png"
            alt="Crack Leap Assistant"
            width={50}
            height={50}
            className="w-12 h-12 object-contain"
            priority
          />
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">
              Crack Leap Assistant
            </h3>
            <p className="text-xs text-green-500 font-medium">
              Online • Always here to help
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full shadow-neo-flat text-gray-500 hover:text-gray-800 flex items-center justify-center">
          ✕
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id}>
            <MessageBubble sender={msg.sender} text={msg.text} />
            {msg.sender === "bot" && msg.options && (
              <QuickReplies options={msg.options} onSelect={onOptionSelect} />
            )}
            {msg.sender === "bot" && msg.showForm && (
              <LeadCaptureForm onSuccess={onFormSuccess} />
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="w-8 h-8 rounded-full bg-bot-bg shadow-neo-sm flex items-center justify-center mr-2">
              🤖
            </div>
            <div className="px-4 py-3 bg-bot-bg shadow-neo-flat rounded-2xl rounded-tl-none flex items-center gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-xs text-gray-400 bg-bot-bg border-t border-gray-200">
        ⚡ Powered by Vertex Loop AI
      </div>
    </div>
  );
}
