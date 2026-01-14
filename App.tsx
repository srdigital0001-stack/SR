import React, { useEffect, useState, Suspense, lazy } from 'react';
import { GoogleGenAI } from "@google/genai";
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import MobileCTA from './components/MobileCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Lazy load non-critical components
const Features = lazy(() => import('./components/Features'));
const AdCopySamples = lazy(() => import('./components/AdCopySamples'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const LeadForm = lazy(() => import('./components/LeadForm'));
const FAQ = lazy(() => import('./components/FAQ'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Footer = lazy(() => import('./components/Footer'));

const Skeleton: React.FC<{ height?: string }> = ({ height = "400px" }) => (
  <div className="max-w-7xl mx-auto px-4 py-24 w-full">
    <div className="h-12 w-1/3 bg-white/5 rounded-full mx-auto mb-16 skeleton-item"></div>
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map(i => (
        <div key={i} style={{ height }} className="bg-white/5 rounded-[40px] border border-white/5 skeleton-item"></div>
      ))}
    </div>
  </div>
);

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

    const initObserver = () => {
      document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
    };

    initObserver();
    const interval = setInterval(initObserver, 1000);

    const generateBg = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-pro-image-preview',
          contents: [{ parts: [{ text: "Cinematic shot of a luxury modern residential skyscraper skyline in Gurgaon at golden hour, glowing glass facades, premium architectural photography, emerald and gold lighting highlights, soft bokeh, extremely high quality, 8k." }] }],
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });
        
        let imageUrl = null;
        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              imageUrl = `data:image/png;base64,${part.inlineData.data}`;
              break;
            }
          }
        }
        
        if (imageUrl) {
          setBgImage(imageUrl);
        }
      } catch (e) {
        console.error("BG Generation failed", e);
      }
    };
    generateBg();
    
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-emerald-500 selection:text-white relative">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[140px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        {bgImage && (
          <div 
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay transition-opacity duration-1000"
            style={{ 
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        )}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <TrustStrip />
          
          <Suspense fallback={<Skeleton height="350px" />}>
            <Features />
          </Suspense>

          <Suspense fallback={<Skeleton height="500px" />}>
            <AdCopySamples />
          </Suspense>

          <Suspense fallback={<Skeleton height="300px" />}>
            <HowItWorks />
          </Suspense>

          <Suspense fallback={
            <div className="py-24 flex flex-col items-center justify-center">
              <div className="w-16 h-16 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest animate-pulse">Loading Conversion Engine...</p>
            </div>
          }>
            <LeadForm />
          </Suspense>

          <Suspense fallback={<Skeleton height="200px" />}>
            <FAQ />
            <Testimonials />
            <Footer />
          </Suspense>
        </main>
      </div>

      <FloatingWhatsApp />
      <MobileCTA />
    </div>
  );
};

export default App;