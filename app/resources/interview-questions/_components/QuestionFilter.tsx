'use client';

import { useState } from 'react';
import { Question } from '../_data/interview-questions';

interface QuestionFilterProps {
  questions: Question[];
}

const DIFFICULTIES = [
  'All',
  'Beginner',
  'Intermediate',
  'Advanced',
  'Scenario',
  'System Design'
] as const;

const DIFFICULTY_COLORS: Record<string, { bg: string; text: string; border: string }> =
  {
    Beginner: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200'
    },
    Intermediate: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200'
    },
    Advanced: {
      bg: 'bg-rose-50',
      text: 'text-rose-700',
      border: 'border-rose-200'
    },
    Scenario: {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200'
    },
    'System Design': {
      bg: 'bg-violet-50',
      text: 'text-violet-700',
      border: 'border-violet-200'
    }
  };

export default function QuestionFilter({
  questions
}: QuestionFilterProps) {
  const [activeDifficulty, setActiveDifficulty] = useState<
    typeof DIFFICULTIES[number]
  >('All');

  const filteredQuestions =
    activeDifficulty === 'All'
      ? questions
      : questions.filter((q) => q.difficulty === activeDifficulty);

  // Count by difficulty
  const counts: Record<string, number> = {
    All: questions.length
  };
  DIFFICULTIES.slice(1).forEach((diff) => {
    counts[diff] = questions.filter((q) => q.difficulty === diff).length;
  });

  return (
    <div className="max-w-7xl mx-auto">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
        {DIFFICULTIES.map((difficulty) => {
          const isActive = activeDifficulty === difficulty;
          return (
            <button
              key={difficulty}
              onClick={() => setActiveDifficulty(difficulty)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white shadow-md'
                  : 'bg-[#F4F5FA] text-slate-700 border border-white/80 shadow-[2px_2px_5px_#dcdde3,-2px_-2px_5px_#ffffff] hover:text-[#8B5CF6]'
              }`}
            >
              {difficulty}{' '}
              <span className="text-xs font-semibold ml-1 opacity-80">({counts[difficulty]})</span>
            </button>
          );
        })}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 text-base">No questions found.</p>
          </div>
        ) : (
          filteredQuestions.map((question) => {
            const colors =
              DIFFICULTY_COLORS[
                question.difficulty as keyof typeof DIFFICULTY_COLORS
              ];
            return (
              <QuestionCard key={question.id} question={question} colors={colors} />
            );
          })
        )}
      </div>
    </div>
  );
}

interface QuestionCardProps {
  question: Question;
  colors: { bg: string; text: string; border: string };
}

function QuestionCard({ question, colors }: QuestionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#F4F5FA] border border-white/80 rounded-2xl p-6 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] hover:shadow-[8px_8px_18px_#d0d2dc,-8px_-8px_18px_#ffffff] transition-all">
      {/* Question Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-1">
          <p className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug">
            <span className="text-[#8B5CF6] mr-1.5">Q{question.id}:</span> {question.question}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {/* Difficulty Badge */}
            <span
              className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}
            >
              {question.difficulty}
            </span>

            {/* Category Chip */}
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              {question.category}
            </span>
          </div>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shadow-[2px_2px_5px_#dcdde3,-2px_-2px_5px_#ffffff] transition-all ${
            isExpanded ? 'bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] text-white' : 'bg-[#F4F5FA] text-slate-600 hover:text-[#8B5CF6]'
          }`}
          aria-label={isExpanded ? 'Collapse answer' : 'Expand answer'}
        >
          {isExpanded ? '▼' : '▶'}
        </button>
      </div>

      {/* Answer (Expandable) */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-slate-200/60 space-y-4">
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            <p>{question.answer}</p>
          </div>

          {/* Follow-up Question */}
          {question.followUp && (
            <div className="mt-4 pl-4 border-l-2 border-[#8B5CF6] bg-[#8B5CF6]/10 p-4 rounded-r-xl">
              <p className="text-xs sm:text-sm text-slate-700 italic">
                <span className="font-bold text-slate-900 not-italic">Follow-up:</span>{' '}
                {question.followUp}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}