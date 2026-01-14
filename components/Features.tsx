
import React from 'react';

const Features: React.FC = () => {
  const cards = [
    { 
      title: "Google Ads Domination", 
      desc: "Target high-intent keywords like 'Luxury Apartments in Gurgaon' or 'Best Property in Noida'.",
      icon: <path d="M21 16.5V21h-6v-6h6v1.5zM3 16.5V21h6v-6H3v1.5zM3 3v4.5H9V3H3zM15 3v4.5h6V3h-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
    },
    { 
      title: "Meta Ads Retargeting", 
      desc: "Stay top-of-mind. Re-engage potential buyers who visited your site but didn't convert.",
      icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
    },
    { 
      title: "Direct WhatsApp Flow", 
      desc: "Skip the friction. Send leads directly to your WhatsApp with one click for faster deals.",
      icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L21 4.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
    },
    { 
      title: "Lead Qualification", 
      desc: "We filter the noise. Our landing pages ask the right questions to ensure serious buyers.",
      icon: <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
    },
    { 
      title: "Site Visit Strategy", 
      desc: "Our primary goal is to turn digital inquiries into physical site visits on your project.",
      icon: <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
    },
    { 
      title: "Performance Tracking", 
      desc: "Get weekly reports. Know exactly how much each lead costs and your ROAS.",
      icon: <path d="M12 20V10M18 20V4M6 20v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What You Get With <span className="text-emerald-500">SR Digital</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive digital marketing suite designed specifically for the aggressive Delhi NCR real estate market.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="reveal group p-8 rounded-3xl glass border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{card.icon}</svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
