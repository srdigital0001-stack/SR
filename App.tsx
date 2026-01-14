
import React, { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Features from './components/Features';
import AdCopySamples from './components/AdCopySamples';
import HowItWorks from './components/HowItWorks';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Generate subtle real estate background image
    const generateBg = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: [{ parts: [{ text: "Cinematic shot of a luxury modern residential skyscraper skyline in Gurgaon at golden hour, glowing glass facades, premium architectural photography, emerald and gold lighting highlights, soft bokeh, extremely high quality, 8k." }] }],
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });
        const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
        if (part?.inlineData?.data) {
          setBgImage(`data:image/png;base64,${part.inlineData.data}`);
        }
      } catch (e) {
        console.error("BG Generation failed", e);
      }
    };
    generateBg();
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-emerald-500 selection:text-white relative">
      {/* Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[140px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* AI Generated Subtle Real Estate Image */}
        {bgImage && (
          <div 
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay transition-opacity duration-1000"
            style={{ 
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'contrast(1.1) brightness(0.9)'
            }}
          ></div>
        )}
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <TrustStrip />
          <Features />
          <AdCopySamples />
          <HowItWorks />
          <LeadForm />
          <FAQ />
          <Testimonials />
        </main>
        <Footer />
      </div>

      <FloatingWhatsApp />
      <MobileCTA />
    </div>
  );
};

export default App;
