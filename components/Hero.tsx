
import React from 'react';
import FunnelVisual from './FunnelVisual';

const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/919211841593?text=Hi%20SR%20Digital!%20I%E2%80%99m%20a%20realtor%20in%20Delhi%20NCR.%20I%20want%20qualified%20leads.%20My%20area:%20____%20|%20Budget:%20____.%20Please%20share%20the%20free%20lead%20audit%20%2B%20plan.";

  return (
    <section className="relative px-4 py-16 md:py-28 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            #1 Real Estate Growth Partner in Delhi NCR
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-8 stagger-text tracking-tight">
            <span style={{ animationDelay: '0.1s' }}>Get</span>{' '}
            <span className="shine-text" style={{ animationDelay: '0.2s', display: 'inline-block' }}>Qualified</span>{' '}
            <span style={{ animationDelay: '0.3s' }}>Real</span>{' '}
            <span style={{ animationDelay: '0.4s' }}>Estate</span>{' '}
            <br className="hidden md:block" />
            <span style={{ animationDelay: '0.5s' }}>Leads</span>{' '}
            <span style={{ animationDelay: '0.6s' }}>in</span>{' '}
            <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" style={{ animationDelay: '0.7s' }}>Delhi</span>{' '}
            <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" style={{ animationDelay: '0.8s' }}>NCR</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            Stop chasing cold leads. We deploy high-intent <span className="text-white font-semibold">Google + Meta Ads</span> strategies that deliver live site visits and verified WhatsApp inquiries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { icon: '🎯', text: 'Hyper-Local Targeting', sub: 'Gurgaon, Noida, Delhi' },
              { icon: '🔥', text: 'Verified Inquiries', sub: 'OTP-Backed Leads' },
              { icon: '⚡', text: 'Instant Connection', sub: 'Direct WhatsApp Flow' },
              { icon: '💎', text: 'Premium Assets', sub: 'Luxury Project Focus' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-slate-200 text-sm font-bold leading-none mb-1">{item.text}</p>
                  <p className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all emerald-glow text-center overflow-hidden active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                GET FREE LEAD AUDIT
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-slate-900/50 hover:bg-slate-800 text-white font-bold rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all text-center flex items-center justify-center gap-2 active:scale-95"
            >
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WHATSAPP NOW
            </a>
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute -inset-10 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          <FunnelVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
