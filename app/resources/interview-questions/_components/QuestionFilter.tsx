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
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200'
    },
    Intermediate: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-700',
      border: 'border-yellow-200'
    },
    Advanced: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200'
    },
    Scenario: {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200'
    },
    'System Design': {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200'
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
      <div className="flex flex-wrap gap-3 mb-12">
        {DIFFICULTIES.map((difficulty) => {
          const isActive = activeDifficulty === difficulty;
          return (
            <button
              key={difficulty}
              onClick={() => setActiveDifficulty(difficulty)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                isActive
                  ? 'bg-blue-600 text-white border border-blue-600'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {difficulty}{' '}
              <span className="text-xs font-normal ml-1">({counts[difficulty]})</span>
            </button>
          );
        })}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No questions found.</p>
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
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      {/* Question Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-1">
          <p className="text-lg font-bold text-gray-900 mb-3">
            Q{question.id}: {question.question}
          </p>
          <div className="flex flex-wrap gap-3">
            {/* Difficulty Badge */}
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}
            >
              {question.difficulty}
            </span>

            {/* Category Chip */}
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
              {question.category}
            </span>
          </div>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-shrink-0 text-gray-500 hover:text-gray-700 transition-colors text-2xl"
          aria-label={isExpanded ? 'Collapse answer' : 'Expand answer'}
        >
          {isExpanded ? '▼' : '▶'}
        </button>
      </div>

      {/* Answer (Expandable) */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
          <div className="text-gray-700 leading-relaxed">
            <p>{question.answer}</p>
          </div>

          {/* Follow-up Question */}
          {question.followUp && (
            <div className="mt-4 pl-4 border-l-2 border-blue-300 bg-blue-50 p-4 rounded">
              <p className="text-sm text-gray-600 italic">
                <span className="font-semibold text-gray-900">Follow-up:</span>{' '}
                {question.followUp}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}