import React, { useState } from 'react';

export default function LeadCaptureForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        onSuccess();
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ml-10 max-w-[80%] bg-bot-bg p-4 rounded-xl shadow-neo-flat flex flex-col gap-3">
      {/* Honeypot field - invisible to users, trips up spam bots */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      
      <input required type="text" name="name" placeholder="Full Name" className="w-full bg-transparent shadow-neo-pressed rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-bot-primary" />
      <input required type="email" name="email" placeholder="Email Address" className="w-full bg-transparent shadow-neo-pressed rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-bot-primary" />
      <input type="tel" name="phone" placeholder="Phone Number" className="w-full bg-transparent shadow-neo-pressed rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-bot-primary" />
      
      {/* Hidden inputs to satisfy your API requirements */}
      <input type="hidden" name="course" value="Chatbot Inquiry" />
      <input type="hidden" name="message" value="Automated lead captured via Crack Leap Assistant." />
      
      {error && <p className="text-red-500 text-xs">{error}</p>}
      
      <button 
        type="submit" 
        disabled={loading}
        className="mt-2 w-full bg-bot-primary text-white py-2 rounded-lg font-medium text-sm hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {loading ? 'Sending...' : 'Submit Details'}
      </button>
    </form>
  );
}