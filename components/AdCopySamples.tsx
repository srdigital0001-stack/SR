
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AdCopySamples: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'google' | 'meta'>('google');
  const [images, setImages] = useState<{ [key: string]: string }>({});
  const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});

  const samples = {
    google: [
      {
        id: "g1",
        title: "Luxury 3/4 BHK in Gurgaon Sector 65",
        headline: "Luxury 3/4 BHK in Sector 65 | Starting at ₹3.5 Cr*",
        desc: "Ultra-luxury residences with golf course view. 5-star amenities, sky lounge & modular kitchen. Book a private site visit today. Zero brokerage.",
        extensions: ["Direct From Developer", "High ROI Potential", "Flexible Payment Plans"]
      },
      {
        id: "g2",
        title: "Premium Office Space in Noida",
        headline: "Invest in Premium Office Space | 12% Assured Returns*",
        desc: "Prime location in Sector 132, Noida Expressway. Modern architecture, high-speed elevators & ample parking. Units starting from 500 sq.ft.",
        extensions: ["Ready to Move", "High Rental Yield", "Close to Metro"]
      }
    ],
    meta: [
      {
        id: "m1",
        type: "image",
        title: "Image Ad: Lifestyle Hook",
        hook: "🏠 Wake up to the view you deserve in Gurgaon...",
        body: "Stop settling for ordinary. Presenting 'The Emerald Towers' in the heart of Sector 65. \n\n✅ Private Balconies\n✅ Olympic-sized Pool\n✅ 3-Tier Security\n\nOnly 5 units remaining at launch price!",
        cta: "Learn More",
        prompt: "Photorealistic 8k architectural shot of a ultra-luxury modern glass residential skyscraper in Gurgaon Sector 65, golden hour lighting, lush green landscaping at base, professional photography."
      },
      {
        id: "m2",
        type: "video",
        title: "Video Ad: Virtual Walkthrough",
        hook: "🎥 Take a 60-second tour of your future home!",
        body: "Experience luxury like never before. Watch the full walkthrough of our premium 4BHK Penthouse in Noida. \n\n📍 Location: Sector 150\n✨ Fully Furnished Options\n💎 Limited Edition Units\n\nClick below to get the full price list on WhatsApp.",
        cta: "Watch More",
        prompt: "Interior view of a high-end luxury penthouse living room in Noida Sector 150, floor to ceiling windows showing city skyline, italian marble floors, modern designer furniture, cinematic lighting, 8k."
      }
    ]
  };

  const generateImage = async (id: string, prompt: string) => {
    if (images[id] || loadingImages[id]) return;

    setLoadingImages(prev => ({ ...prev, [id]: true }));
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: [{ parts: [{ text: prompt }] }],
        config: {
            imageConfig: {
                aspectRatio: "16:9"
            }
        }
      });

      const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (part?.inlineData?.data) {
        const url = `data:image/png;base64,${part.inlineData.data}`;
        setImages(prev => ({ ...prev, [id]: url }));
      }
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoadingImages(prev => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    if (activeTab === 'meta') {
      samples.meta.forEach(sample => {
        generateImage(sample.id, sample.prompt);
      });
    }
  }, [activeTab]);

  const MetaVisual = ({ type, id }: { type: string, id: string }) => {
    const isLoading = loadingImages[id];
    const imageUrl = images[id];

    return (
      <div className="relative aspect-video bg-slate-800 rounded-xl mb-4 flex items-center justify-center overflow-hidden border border-white/5 shadow-inner">
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
             <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
             <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest animate-pulse">Generating Real Visual...</span>
          </div>
        ) : imageUrl ? (
          <>
            <img src={imageUrl} alt="Property Visual" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent flex items-center justify-center">
            <svg className="w-12 h-12 text-white/5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          </div>
        )}

        {type === 'video' && !isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 pulse-whatsapp cursor-pointer hover:bg-white/20 transition-all z-20">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
             </div>
          </div>
        )}

        {/* Labels */}
        {!isLoading && (
            <>
                <span className={`absolute top-4 ${type === 'video' ? 'right-4 bg-red-600' : 'left-4 bg-emerald-600'} text-[8px] font-bold text-white px-2 py-0.5 rounded uppercase z-10`}>
                    {type === 'video' ? 'Live Tour' : 'New Launch'}
                </span>
                {imageUrl && !isLoading && (
                    <div className="absolute bottom-4 left-4 z-10">
                        <div className="glass px-3 py-1.5 rounded-lg border border-white/10">
                            <p className="text-[8px] font-bold uppercase tracking-widest text-emerald-400 leading-none mb-0.5">Verified Asset</p>
                            <p className="text-sm font-black text-white leading-none">Gurgaon Portfolio</p>
                        </div>
                    </div>
                )}
            </>
        )}
      </div>
    );
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">High-Converting <span className="text-emerald-500">Ad Samples</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">We don't just run ads; we write copy that sells. Below are real-world samples featuring AI-generated hyper-realistic visuals for maximum CTR.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white/5 rounded-2xl border border-white/10">
            <button 
              onClick={() => setActiveTab('google')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'google' ? 'bg-emerald-600 text-white emerald-glow' : 'text-slate-400 hover:text-white'}`}
            >
              Google Search
            </button>
            <button 
              onClick={() => setActiveTab('meta')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'meta' ? 'bg-emerald-600 text-white emerald-glow' : 'text-slate-400 hover:text-white'}`}
            >
              Meta (FB/IG)
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 reveal">
          {activeTab === 'google' ? (
            samples.google.map((sample, i) => (
              <div key={i} className="glass p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-black bg-slate-700 px-1.5 py-0.5 rounded text-white">Ad</span>
                  <span className="text-xs text-slate-500">www.property-expert.com</span>
                </div>
                <h4 className="text-xl font-bold text-blue-400 mb-2 group-hover:underline cursor-pointer">{sample.headline}</h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{sample.desc}</p>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                  {sample.extensions.map((ext, j) => (
                    <span key={j} className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
                      <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                      {ext}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            samples.meta.map((sample, i) => (
              <div key={i} className="glass p-0 rounded-3xl border border-white/5 overflow-hidden transition-all hover:border-emerald-500/30">
                <div className="bg-slate-800/50 p-4 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xs">SR</div>
                    <div className="flex flex-col">
                      <span className="font-bold text-xs leading-none mb-0.5">SR Digital - Real Estate</span>
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">Sponsored</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-300 text-sm font-medium mb-3 whitespace-pre-line leading-relaxed">{sample.hook}</p>
                  
                  <MetaVisual type={sample.type} id={sample.id} />
                  
                  <p className="text-slate-400 text-xs mb-6 leading-relaxed whitespace-pre-line italic opacity-80">{sample.body}</p>
                  
                  <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest leading-none mb-1">SR Digital Premium</span>
                      <span className="font-bold text-white text-sm">Download Project Plan</span>
                    </div>
                    <button className="px-5 py-2.5 bg-slate-700 hover:bg-emerald-600 text-white text-xs font-black rounded-lg transition-all active:scale-95">
                      {sample.cta}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-12 text-center reveal">
          <p className="text-slate-500 text-sm mb-6 italic">Above visuals are generated by our proprietary Real Estate Creative Engine.</p>
          <a 
            href="https://wa.me/919211841593?text=Hi%20SR%20Digital!%20I%20just%20saw%20your%20AI-generated%20Ad%20Visuals.%20I%20want%20you%20to%20create%20similar%20high-quality%20content%20for%20my%20real%20estate%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-all border-b border-emerald-500/30 pb-1"
          >
            Get Custom AI Creative for Your Project →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdCopySamples;
