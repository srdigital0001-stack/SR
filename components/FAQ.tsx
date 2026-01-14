
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How fast will I see leads?", a: "Most of our real estate campaigns in Delhi NCR go live within 48 hours, and you start seeing your first inquiries within the first 24 hours of campaign activation." },
    { q: "Are the leads verified?", a: "Yes, we use OTP verification (on WhatsApp) and specific qualifying questions (Budget, Location, Intent) to filter out fake numbers and non-serious window shoppers." },
    { q: "Do you handle creative design?", a: "Absolutely. We provide premium high-conversion ad creatives, professional copywriting, and landing page designs optimized for the real estate sector." },
    { q: "What is the minimum budget required?", a: "While it depends on the project's scale, we generally recommend starting with at least ₹25,000 - ₹30,000 monthly ad spend to see meaningful results in Delhi NCR." },
    { q: "Is there a long-term contract?", a: "No, we believe in performance-based partnerships. We work on a monthly basis, and you can pause or cancel at any time if you're not satisfied." }
  ];

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Frequently Asked <span className="text-emerald-500">Questions</span></h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass border border-white/5 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-all focus:outline-none"
              >
                <span className="font-bold text-white text-lg pr-4">{faq.q}</span>
                <span className={`text-emerald-400 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
