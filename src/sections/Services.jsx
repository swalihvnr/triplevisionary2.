import { motion } from 'framer-motion';
import { Film, Palette, Box, MonitorPlay, Workflow } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const servicesList = [
  {
    title: "Video Edits",
    icon: Film,
    desc: "Cinematic film editing, color grading, pacing, and narrative assembly.",
  },
  {
    title: "Motion Graphics",
    icon: Workflow,
    desc: "Vector animations, complex HUD interfaces, branding in motion.",
  },
  {
    title: "2D",
    icon: Palette,
    desc: "Traditional keyframed characters, whiteboard presentations, and flat vector layouts.",
  },
  {
    title: "3D",
    icon: Box,
    desc: "Modeling, rigging, texturing, character design, and photorealistic environments.",
  },
  {
    title: "VFX",
    icon: MonitorPlay,
    desc: "Modern and old school visual effects. Without AI generated imaginary.",
  },
  {
    title: "Graphic Designing",
    icon: MonitorPlay,
    desc: "100% human made graphic designs. Experts in all graphic aesthetics.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 20, stiffness: 100 }
  }
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
      style={{
        borderTop: '1px solid rgba(26,51,68,0.06)',
        borderBottom: '1px solid rgba(26,51,68,0.06)',
      }}
    >
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(18,153,202,0.06), transparent)' }} />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(90,172,160,0.06), transparent)' }} />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#1299CA', boxShadow: '0 0 8px rgba(18,153,202,0.5)' }} />
            <span className="text-[10px] font-display tracking-[0.2em] uppercase font-bold" style={{ color: '#1A3344' }}>
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4" style={{ color: '#1A3344' }}>
            Our Production Services
          </h2>
          <p className="text-sm md:text-base max-w-xl font-light" style={{ color: '#6A8A9A' }}>
            Elite execution across all facets of post-production, animation, and CGI media workflows.
          </p>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.title} variants={cardVariants} className="group">
                <GlassCard
                  className="relative overflow-hidden rounded-2xl h-full p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between"
                  glowColor="rgba(18,153,202,0.08)"
                >
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                        style={{
                          background: 'linear-gradient(180deg, rgba(180,230,240,0.25), rgba(160,220,220,0.18))',
                          border: '1px solid rgba(26,51,68,0.06)',
                          color: '#1299CA',
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.20)',
                        }}
                      >
                        <IconComponent size={22} />
                      </div>
                      <h3 className="text-lg font-bold font-display mb-2" style={{ color: '#1A3344' }}>
                        {service.title}
                      </h3>
                      <p className="text-xs leading-relaxed font-light" style={{ color: '#6A8A9A' }}>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
