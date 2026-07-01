import React from 'react';
import { Option } from './botConfig';

interface QuickRepliesProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

export default function QuickReplies({ options, onSelect }: QuickRepliesProps) {
  if (options.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 my-4 ml-10 max-w-[75%]">
      {options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(opt)}
          className="flex flex-col items-start px-4 py-3 bg-bot-bg shadow-neo-flat hover:shadow-neo-pressed transition-shadow duration-200 rounded-xl text-left text-sm text-bot-primary font-medium w-full"
        >
          {opt.label}
          {opt.subtext && (
            <span className="text-xs text-gray-500 font-normal mt-1">{opt.subtext}</span>
          )}
        </button>
      ))}
    </div>
  );
}