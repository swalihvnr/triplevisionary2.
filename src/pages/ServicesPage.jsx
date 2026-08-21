import { useEffect } from 'react';
import Services from '../sections/Services';
import GlassCard from '../components/GlassCard';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage({ onPageChange }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative pt-20">
      <Services />

      <div className="container mx-auto px-6 max-w-3xl mt-16 relative z-10 text-center">
        <GlassCard className="p-8 text-center" glowColor="rgba(255,255,255,0.08)">
          <h3 className="font-display font-bold text-xl md:text-2xl mb-3" style={{ color: '#1A3344' }}>
            Need a tailored post-production package?
          </h3>
          <p className="text-xs max-w-md mx-auto mb-6 font-light" style={{ color: '#6A8A9A' }}>
            Deploy our processing nodes for your specific commercial ad, social video, or 3D asset pipeline.
          </p>
          <button
            onClick={() => onPageChange('/contact')}
            className="aero-button-primary px-6 py-3 rounded-full font-bold text-xs tracking-widest uppercase flex items-center gap-2 mx-auto transition-all cursor-pointer"
          >
            Get in Touch
            <ArrowRight size={14} />
          </button>
        </GlassCard>
      </div>
    </div>
  );
}
