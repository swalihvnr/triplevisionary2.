import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const feedback = [
  {
    name: "Sarah Jenkins",
    company: "Zenith Tech Corp",
    role: "VP of Product Marketing",
    review: "The CGI models, texturing, and color grades TripleVisionary generated for our hardware launch were absolutely phenomenal. They took our concepts and elevated them to cinematic standards.",
    rating: 5,
    delay: 0
  },
  {
    name: "Devon Kross",
    company: "Nexus OS Systems",
    role: "Lead Interface Director",
    review: "Their motion graphics and HUD interface assets are incredibly clean and detailed. We needed a blend of futuristic visuals and simple structures; they delivered precisely.",
    rating: 5,
    delay: 1.5
  },
  {
    name: "Elena Gomez",
    company: "Aura Paris",
    role: "Chief Creative Officer",
    review: "Their CGI liquid particles and macro lighting setups are state of the art. TripleVisionary has become our absolute post-production partner for all luxury commercial launches.",
    rating: 5,
    delay: 3
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04), transparent)' }} />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#ffffff', boxShadow: '0 0 8px rgba(255,255,255,0.5)' }} />
            <span className="text-[10px] font-display tracking-[0.2em] uppercase font-bold" style={{ color: '#ffffff' }}>
              Client Feedback
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4" style={{ color: '#ffffff' }}>
            Testimonials
          </h2>
          <p className="text-sm md:text-base max-w-xl font-light" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Read reviews from our international brand partners and product developers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {feedback.map((item) => (
            <motion.div
              key={item.name}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
              className="w-full"
            >
              <GlassCard
                className="p-6 transition-all cursor-pointer"
                glowColor="rgba(255,255,255,0.08)"
              >
                <div className="flex items-center justify-between pb-4 mb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-display text-[10px] font-bold"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.06))',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#ffffff',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                      }}
                    >
                      {item.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs leading-tight" style={{ color: '#ffffff' }}>{item.name}</h4>
                      <span className="text-[9px] block" style={{ color: 'rgba(255,255,255,0.65)' }}>{item.role}</span>
                    </div>
                  </div>
                  <Quote size={16} style={{ color: 'rgba(255,255,255,0.08)' }} />
                </div>

                <div className="flex gap-1 mb-4" style={{ color: '#ffffff' }}>
                  {Array.from({ length: item.rating }).map((_, sIdx) => (
                    <Star key={sIdx} size={12} fill="currentColor" />
                  ))}
                </div>

                <p className="text-xs leading-relaxed font-light italic" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  "{item.review}"
                </p>

                <div className="mt-6 pt-3 flex items-center justify-between text-[9px] font-display" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.65)' }}>
                  <span className="font-bold">Verified Review</span>
                  <span className="font-bold" style={{ color: '#ffffff' }}>{item.company}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
