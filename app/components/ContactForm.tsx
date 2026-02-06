'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const courses = [
    'Select a course',
    'Python Full Stack Development',
    'DevOps Engineering',
    'React & Modern Frontend',
    'All Courses',
    'Not Sure - Need Guidance'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
      {isSubmitted ? (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. Our team will contact you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
          <p className="text-gray-600 mb-6">
            Fill out the form below and our team will contact you shortly
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF7A1E] focus:ring-2 focus:ring-[#FF7A1E]/20 outline-none transition"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF7A1E] focus:ring-2 focus:ring-[#FF7A1E]/20 outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF7A1E] focus:ring-2 focus:ring-[#FF7A1E]/20 outline-none transition"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interested Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF7A1E] focus:ring-2 focus:ring-[#FF7A1E]/20 outline-none transition"
                >
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF7A1E] focus:ring-2 focus:ring-[#FF7A1E]/20 outline-none transition"
                placeholder="Tell us about your requirements or questions..."
              ></textarea>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                id="consent"
                required
                className="rounded border-gray-300 text-[#FF7A1E] focus:ring-[#FF7A1E]"
              />
              <label htmlFor="consent">
                I agree to receive updates and promotional offers from CodeMasters Institute
              </label>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="btn w-full flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;