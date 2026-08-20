import React from 'react';
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
    <section id="testimonials" className="relative py-24 bg-white/15 border-y border-white/30 overflow-hidden backdrop-blur-sm">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#5DC8E8]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#5DC8E8] animate-pulse shadow-[0_0_8px_rgba(93,200,232,0.5)]" />
            <span className="text-[10px] font-display tracking-[0.2em] uppercase text-[#5DC8E8] font-bold">
              Client Feedback
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4 text-[#2B3A4E]">
            Testimonials
          </h2>
          <p className="text-sm md:text-base text-[#5A7089] max-w-xl font-light">
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
                className="p-6 bg-white/50 border border-white/60 hover:border-[#5DC8E8]/30 transition-all cursor-pointer"
                glowColor="rgba(93, 200, 232, 0.1)"
              >
                <div className="flex items-center justify-between border-b border-sky-200/30 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5DC8E8]/20 to-[#7CC242]/15 border border-white/60 flex items-center justify-center font-display text-[10px] text-[#5DC8E8] font-bold">
                      {item.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs text-[#2B3A4E] leading-tight">{item.name}</h4>
                      <span className="text-[9px] text-[#5A7089] block">{item.role}</span>
                    </div>
                  </div>
                  <Quote size={16} className="text-[#5DC8E8]/30" />
                </div>

                <div className="flex gap-1 mb-4 text-[#7CC242]">
                  {Array.from({ length: item.rating }).map((_, sIdx) => (
                    <Star key={sIdx} size={12} fill="currentColor" />
                  ))}
                </div>

                <p className="text-xs text-[#5A7089] leading-relaxed font-light italic">
                  "{item.review}"
                </p>

                <div className="mt-6 pt-3 border-t border-sky-200/20 flex items-center justify-between text-[9px] text-[#5A7089]/60 font-display">
                  <span className="font-bold">Verified Review</span>
                  <span className="text-[#5DC8E8] font-bold">{item.company}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
