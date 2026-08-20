import React, { useEffect } from 'react';
import Services from '../sections/Services';
import GlassCard from '../components/GlassCard';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage({ onPageChange }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <Services />

      <div className="container mx-auto px-6 max-w-3xl mt-16 relative z-10 text-center">
        <GlassCard className="p-8 bg-white/50 border border-white/60 text-center" glowColor="rgba(126,217,87,0.12)">
          <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-[#2B3A4E]">
            Need a tailored post-production package?
          </h3>
          <p className="text-xs text-[#555577] max-w-md mx-auto mb-6 font-light">
            Deploy our processing nodes for your specific commercial ad, social video, or 3D asset pipeline.
          </p>
          <button
            onClick={() => onPageChange('/contact')}
            className="px-6 py-3 rounded-full glossy-button font-bold text-xs tracking-widest uppercase flex items-center gap-2 mx-auto hover:brightness-110 transition-all cursor-pointer"
          >
            Get in Touch
            <ArrowRight size={14} />
          </button>
        </GlassCard>
      </div>
    </div>
  );
}
