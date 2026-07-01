"use client";

import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import { botFlow, Option } from "./botConfig";
import Image from "next/image";

// 1. Explicitly define the Message shape
export interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: Option[];
  showForm?: boolean;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // 2. Tell React to use the Message interface
  const [messages, setMessages] = useState<Message[]>([
    {
      id: Date.now().toString(),
      sender: "bot",
      text: botFlow["START"].message,
      options: botFlow["START"].options,
    },
  ]);

  const handleOptionSelect = (option: Option) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: option.label,
    };

    // 3. Use the spread operator instead of .concat() for cleaner type handling
    setMessages((prev) => [
      ...prev.map((msg) => ({ ...msg, options: undefined })),
      userMsg,
    ]);

    setIsTyping(true);

    setTimeout(() => {
      const nextNode = botFlow[option.nextNode];
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: nextNode.message,
        options: nextNode.options,
        showForm: nextNode.showForm,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleFormSuccess = () => {
    // Remove the form and send a thank you message
    setMessages((prev) => prev.map((msg) => ({ ...msg, showForm: false })));
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: "bot",
          text: "Thank you! Your details have been received. Our team will email you shortly.",
          options: [{ label: "Start Over", nextNode: "START" }],
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button & Text Prompt */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 flex items-center gap-4 z-50">
          
          {/* High-Visibility Text Bubble */}
          <div
            className="hidden sm:flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-full shadow-xl hover:shadow-2xl transition-shadow animate-float cursor-pointer"
            onClick={() => setIsOpen(true)}>
            
            {/* Pulsing Green Online Indicator */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>

            <span className="text-sm font-medium text-gray-800">
              Chat with <span className="text-bot-primary font-bold">Aura</span>{" "}
              ✨
            </span>
          </div>

          {/* High-Visibility Bot Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-20 h-20 bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-[1.75rem] flex items-center justify-center group">
            
            {/* The Purple Inner Button (Unchanged) */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-bot-primary to-purple-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden p-1.5">
              <Image
                src="/assets/icons/bot_image.png"
                alt="Aura AI Assistant"
                width={50}
                height={50}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </button>
        </div>
      )}

      {/* Main Chat Interface */}
      {isOpen && (
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onClose={() => setIsOpen(false)}
          onOptionSelect={handleOptionSelect}
          onFormSuccess={handleFormSuccess}
        />
      )}
    </>
  );
}
