import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const FunnelVisual: React.FC = () => {
  const [funnelImg, setFunnelImg] = useState<string | null>(null);

  useEffect(() => {
    const generateFunnelBg = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: [{ parts: [{ text: "Abstract architectural detail of a luxury modern glass skyscraper, architectural lines, teal and cyan glass reflections, soft morning light, minimalist, premium real estate aesthetic, high quality." }] }],
          config: {
            imageConfig: {
              aspectRatio: "1:1"
            }
          }
        });
        const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
        if (part?.inlineData?.data) {
          setFunnelImg(`data:image/png;base64,${part.inlineData.data}`);
        }
      } catch (e) {
        console.error("Funnel BG Generation failed", e);
      }
    };
    generateFunnelBg();
  }, []);

  return (
    <div className="relative glass rounded-[40px] p-6 md:p-10 border border-white/10 shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] overflow-hidden group">
      {/* Dynamic Background Glows */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-700"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-white font-bold text-lg tracking-tight">Conversion Engine</h3>
            <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em]">Proprietary SR Framework</p>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        <div className="relative perspective-1000">
          <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
            <defs>
              <pattern id="realEstatePattern" patternUnits="userSpaceOnUse" width="400" height="600">
                {funnelImg ? (
                  <image href={funnelImg} x="0" y="0" width="400" height="600" preserveAspectRatio="xMidYMid slice" opacity="0.3" />
                ) : (
                  <rect width="400" height="600" fill="#064e3b" opacity="0.5" />
                )}
              </pattern>

              <linearGradient id="funnelOverlay" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#020617" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#020617" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#020617" stopOpacity="0.8" />
              </linearGradient>
              
              <linearGradient id="goldShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#fff" >
                  <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>

              <filter id="glow-v2">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" className="animate-pulse" />
              </marker>
            </defs>

            {/* Stage 1: Ads */}
            <g className="transition-all duration-500 transform-gpu hover:translate-y-[-2px]">
              <path d="M40 20 H360 L335 95 H65 Z" fill="url(#realEstatePattern)" />
              <path d="M40 20 H360 L335 95 H65 Z" fill="url(#funnelOverlay)" />
              <path d="M40 20 H360 L335 95 H65 Z" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" fill="none" />
              <g transform="translate(160, 30)">
                 <path d="M12 12H21.5C21.8 12.8 22 13.8 22 15C22 20.5 18 23 14 23C9.5 23 6 19.5 6 15C6 10.5 9.5 7 14 7C16.5 7 18.5 8 20 9.5L17.5 12C16.5 11.5 15.5 11 14 11C11.5 11 9.5 13 9.5 15.5C9.5 18 11.5 20 14 20C16 20 17.5 19 18.5 17.5H14V14.5H21.5" fill="white" />
                 <path d="M38 12C38 14.2 36.2 16 34 16C31.8 16 30 14.2 30 12C30 9.8 31.8 8 34 8C35.5 8 36.5 9.5 38 12C39.5 14.5 40.5 16 42 16C44.2 16 46 14.2 46 12C46 9.8 44.2 8 42 8C39.8 8 38 9.8 38 12Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <text x="200" y="82" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" opacity="1" className="uppercase tracking-widest shadow-sm">Targeting + Creatives</text>
              <circle cx="200" cy="95" r="4" fill="#10b981" filter="url(#glow-v2)" className="animate-pulse" />
            </g>

            {/* Flow Line 1 */}
            <path d="M200 95 V125" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="animate-flow" markerEnd="url(#arrowhead)" />

            {/* Stage 2: Landing Page */}
            <g transform="translate(0, 120)">
              <path d="M80 20 H320 L295 95 H105 Z" fill="url(#realEstatePattern)" />
              <path d="M80 20 H320 L295 95 H105 Z" fill="url(#funnelOverlay)" />
              <path d="M80 20 H320 L295 95 H105 Z" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" fill="none" />
              <g transform="translate(180, 28)">
                 <rect x="0" y="4" width="40" height="28" rx="4" stroke="white" strokeWidth="2" />
                 <line x1="0" y1="12" x2="40" y2="12" stroke="white" strokeWidth="2" />
                 <path d="M12 20H28" stroke="white" strokeWidth="2" strokeLinecap="round" />
                 <path d="M12 26H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                 <circle cx="30" cy="23" r="4" fill="#10b981" filter="url(#glow-v2)" />
              </g>
              <text x="200" y="82" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" opacity="1" className="uppercase tracking-widest">High-Intent Leads</text>
              <circle cx="200" cy="95" r="4" fill="#10b981" filter="url(#glow-v2)" />
            </g>

            {/* Flow Line 2 */}
            <path d="M200 215 V245" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="animate-flow" markerEnd="url(#arrowhead)" />

            {/* Stage 3: Call / WhatsApp */}
            <g transform="translate(0, 240)">
              <path d="M120 20 H280 L260 95 H140 Z" fill="url(#realEstatePattern)" />
              <path d="M120 20 H280 L260 95 H140 Z" fill="url(#funnelOverlay)" />
              <path d="M120 20 H280 L260 95 H140 Z" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" fill="none" />
              <g transform="translate(182, 28)">
                 <path d="M4 14C4 18.5 7.5 22 12 22L12 26L16 22C20.5 22 24 18.5 24 14C24 9.5 20.5 6 16 6C11.5 6 8 9.5 8 14" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                 <circle cx="28" cy="10" r="4" stroke="white" strokeWidth="2" fill="none" />
                 <path d="M26 10L28 12L32 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <text x="200" y="82" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" opacity="1" className="uppercase tracking-widest">Lead Qualification</text>
              <circle cx="200" cy="95" r="4" fill="#10b981" filter="url(#glow-v2)" />
            </g>

            {/* Flow Line 3 */}
            <path d="M200 335 V365" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="animate-flow" markerEnd="url(#arrowhead)" />

            {/* Stage 4: Site Visit */}
            <g transform="translate(0, 360)">
              <path d="M150 20 H250 L235 95 H165 Z" fill="url(#realEstatePattern)" />
              <path d="M150 20 H250 L235 95 H165 Z" fill="url(#funnelOverlay)" />
              <path d="M150 20 H250 L235 95 H165 Z" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" fill="none" />
              <g transform="translate(184, 28)">
                 <path d="M2 30V10L16 2L30 10V30H2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                 <path d="M10 30V20H22V30" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                 <circle cx="16" cy="12" r="3" fill="#fbbf24" className="animate-pulse" />
              </g>
              <text x="200" y="82" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" opacity="1" className="uppercase tracking-widest">Follow-ups</text>
              <circle cx="200" cy="95" r="4" fill="#10b981" filter="url(#glow-v2)" />
            </g>

            {/* Final Conversion Node: DEAL CLOSED */}
            <g transform="translate(0, 485)">
              <circle cx="200" cy="35" r="45" fill="#fbbf24" opacity="0.1" className="animate-pulse-node" />
              <circle cx="200" cy="35" r="40" fill="url(#goldShimmer)" filter="url(#glow-v2)" className="hover:scale-110 transition-transform duration-500 cursor-pointer" />
              <g transform="translate(185, 20)">
                <circle cx="6" cy="6" r="5" stroke="black" strokeWidth="2.5"/>
                <path d="M11 11L25 25" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                <path d="M20 20L23 17" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                <path d="M23 23L26 20" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              </g>
              <text x="200" y="95" textAnchor="middle" fill="#fbbf24" fontSize="22" fontWeight="950" className="tracking-[0.2em] uppercase" style={{ filter: 'drop-shadow(0 0 10px rgba(251,191,36,0.5))' }}>DEAL CLOSED</text>
            </g>

            {/* Floating Interaction Particles */}
            <g opacity="0.4">
                <circle r="1.5" fill="#fff">
                    <animateMotion path="M100 50 Q150 250 200 500" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle r="1.5" fill="#10b981">
                    <animateMotion path="M300 50 Q250 250 200 500" dur="5s" repeatCount="indefinite" />
                </circle>
            </g>
          </svg>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Lead Input</p>
            <p className="text-2xl font-black text-white">450+ <span className="text-emerald-500 text-xs">/mo</span></p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Conversion</p>
            <p className="text-2xl font-black text-white">12x <span className="text-amber-500 text-xs">ROI</span></p>
          </div>
        </div>
      </div>
      
      {/* Decorative Shine Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30 shimmer-effect"></div>
    </div>
  );
};

export default FunnelVisual;