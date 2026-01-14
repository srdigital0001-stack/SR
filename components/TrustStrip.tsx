
import React from 'react';

const TrustStrip: React.FC = () => {
  const items = [
    { label: "No Lock-in Contracts", color: "text-emerald-400" },
    { label: "48-Hour Launch", color: "text-cyan-400" },
    { label: "Real-time Tracking", color: "text-amber-400" },
    { label: "Lead Verification", color: "text-emerald-400" }
  ];

  const locations = ["Gurgaon", "Noida", "Delhi", "Ghaziabad", "Faridabad"];

  return (
    <div className="py-12 border-y border-white/5 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8 reveal">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 group cursor-default transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]`}>
                <svg className={`w-5 h-5 ${item.color} group-hover:scale-125 transition-transform duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-slate-300 font-semibold text-sm md:text-base group-hover:text-white transition-colors duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Location Tags */}
        <div className="flex flex-wrap justify-center gap-3 reveal" style={{ transitionDelay: '0.2s' }}>
          {locations.map((loc, i) => (
            <span 
              key={i} 
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold uppercase tracking-wider cursor-default transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400 hover:scale-110 active:scale-95"
            >
              {loc}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
