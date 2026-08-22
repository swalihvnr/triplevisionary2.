import { motion } from 'framer-motion';
import { Film, Box, MonitorPlay, Workflow } from 'lucide-react';
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
    title: "3D",
    icon: Box,
    desc: "Modeling, rigging, texturing, character design, and photorealistic environments.",
  },
  {
    title: "VFX",
    icon: MonitorPlay,
    desc: "Modern and old school visual effects. Without AI generated imaginary.",
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
        borderTop: '1px solid #2c2c2e',
        borderBottom: '1px solid #2c2c2e',
      }}
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full" style={{ background: '#007aff' }} />
            <span className="text-[10px] font-display tracking-[0.2em] uppercase font-bold" style={{ color: '#007aff' }}>
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4" style={{ color: '#ffffff' }}>
            Our Production Services
          </h2>
          <p className="text-sm md:text-base max-w-xl" style={{ color: '#a1a1a6' }}>
            Elite execution across all facets of post-production, animation, and CGI media workflows.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.title} variants={cardVariants} className="group">
                <GlassCard
                  className="relative overflow-hidden h-full p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between"
                  glowColor="rgba(0,122,255,0.06)"
                >
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-200"
                        style={{
                          background: '#1c1c1f',
                          border: '1px solid #38383a',
                          color: '#007aff',
                        }}
                      >
                        <IconComponent size={20} />
                      </div>
                      <h3 className="text-sm font-bold font-display mb-2" style={{ color: '#ffffff' }}>
                        {service.title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: '#a1a1a6' }}>
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
