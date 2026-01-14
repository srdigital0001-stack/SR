
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      company: "DLF Preferred Partner, Gurgaon",
      quote: "SR Digital transformed our lead flow. We closed 3 luxury deals in the first month! The quality of inquiries from Gurgaon was exactly what we needed.",
      initials: "AS"
    },
    {
      name: "Priya Verma",
      company: "Noida Real Estate Experts",
      quote: "Verified WhatsApp leads are a absolute game changer. No more wasting time on junk calls. We finally have a predictable way to fill our site visit calendar.",
      initials: "PV"
    },
    {
      name: "Rajesh Khanna",
      company: "South Delhi Estates",
      quote: "The free ad audit was eye-opening. Our cost per lead dropped by 40% in just two weeks. Highly recommend SR Digital for any serious realtor in Delhi NCR.",
      initials: "RK"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-slate-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Success Stories from <span className="gold-text">Delhi NCR</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Real results for realtors who dared to scale their property business digitally.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="reveal glass p-8 rounded-[32px] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-600/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-emerald-500 text-xs font-medium uppercase tracking-wider">{t.company}</p>
                </div>
              </div>
              
              <div className="relative">
                <svg className="absolute -top-2 -left-2 w-8 h-8 text-white/5" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                </svg>
                <p className="text-slate-300 italic leading-relaxed relative z-10 pl-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 flex gap-1">
                {[...Array(5)].map((_, star) => (
                  <svg key={star} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
