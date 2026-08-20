import React, { useEffect } from 'react';
import Testimonials from '../sections/Testimonials';
import GlassCard from '../components/GlassCard';
import { ArrowRight } from 'lucide-react';

export default function TestimonialsPage({ onPageChange }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 relative">
      <div className="container mx-auto px-6 max-w-6xl text-center mb-16 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#5DC8E8] animate-pulse shadow-[0_0_8px_rgba(93,200,232,0.5)]" />
          <span className="text-[10px] font-display tracking-[0.2em] uppercase text-[#5DC8E8] font-bold">
            Client Feedback
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-4 text-[#2B3A4E]">
          Client Feedback
        </h1>
        <p className="text-sm md:text-base text-[#5A7089] max-w-xl mx-auto font-light">
          Review verified reviews and recommendations from our brand partners.
        </p>
      </div>

      <Testimonials />

      <div className="container mx-auto px-6 max-w-3xl mt-16 relative z-10 text-center">
        <GlassCard className="p-8 bg-white/50 border border-white/60 text-center" glowColor="rgba(93,200,232,0.1)">
          <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-[#2B3A4E]">
            Ready to be our next success story?
          </h3>
          <p className="text-xs text-[#5A7089] max-w-md mx-auto mb-6 font-light">
            We collaborate with digital leads and product directors to construct cinematic releases.
          </p>
          <button
            onClick={() => onPageChange('/contact')}
            className="px-6 py-3 rounded-full glossy-button-sky font-bold text-xs tracking-widest uppercase flex items-center gap-2 mx-auto hover:brightness-110 transition-all cursor-pointer"
          >
            Start a Project
            <ArrowRight size={14} />
          </button>
        </GlassCard>
      </div>
    </div>
  );
}
