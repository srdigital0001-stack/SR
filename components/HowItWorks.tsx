
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: "01", title: "Strategy Call", desc: "We understand your project, target areas, and budget goals." },
    { num: "02", title: "Funnel Setup", desc: "We build high-converting landing pages and ad copies." },
    { num: "03", title: "Lead Inflow", desc: "Ads go live on Google & Meta. Qualified leads start calling." },
    { num: "04", title: "Optimisation", desc: "We scale what works and cut what doesn't to maximize ROI." }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Scale Your Deals</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">From strategy to site visits in 4 clear steps.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="reveal flex flex-col items-center text-center relative z-10 group">
              <div className="w-20 h-20 rounded-full glass border-2 border-emerald-500/30 flex items-center justify-center text-3xl font-black text-emerald-500 mb-8 group-hover:emerald-glow transition-all">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
