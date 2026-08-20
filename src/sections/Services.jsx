import React from 'react';
import { motion } from 'framer-motion';
import { Film, Palette, Box, MonitorPlay, Workflow } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const servicesList = [
  {
    title: "Video Edits",
    icon: Film,
    desc: "Cinematic film editing, color grading, pacing, and narrative assembly.",
    techSpecs: ["DaVinci Resolve Studio", "Premiere Pro", "Kdenlive"],
  },
  {
    title: "Motion Graphics",
    icon: Workflow,
    desc: "Vector animations, complex HUD interfaces, branding in motion.",
    techSpecs: ["After Effects", "Vector Keyframes", "Lottie / WebGL"],
  },
  {
    title: "2D",
    icon: Palette,
    desc: "Traditional keyframed characters, whiteboard presentations, and flat vector layouts.",
    techSpecs: ["Toon Boom Harmony", "Storyboarding", "24fps Cel"],
  },
  {
    title: "3D",
    icon: Box,
    desc: "Modeling, rigging, texturing, character design, and photorealistic environments.",
    techSpecs: ["Blender", "Houdini", "Octane Render"],
  },
  {
    title: "VFX",
    icon: MonitorPlay,
    desc: "Modern and old school visual effects. Without AI generated imaginary.",
    techSpecs: ["After Effects", "Blender", "Natron"],
  },
  {
    title: "Graphic Designing",
    icon: MonitorPlay,
    desc: "100% human made graphic designs. Experts in all graphic aesthetics.",
    techSpecs: ["Photoshop", "Illustrator", "GIMP", "Inkscape"],
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
    <section id="services" className="relative py-24 bg-white/20 border-y border-white/30 overflow-hidden backdrop-blur-sm">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#5DC8E8]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#7CC242]/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#7CC242] animate-pulse shadow-[0_0_8px_rgba(124,194,66,0.5)]" />
            <span className="text-[10px] font-display tracking-[0.2em] uppercase text-[#5CB836] font-bold">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4 text-[#2B3A4E]">
            Our Production Services
          </h2>
          <p className="text-sm md:text-base text-[#5A7089] max-w-xl font-light">
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
                  className="relative overflow-hidden rounded-2xl h-full p-6 bg-white/50 border border-white/60 hover:border-[#5DC8E8]/40 transition-all duration-500 cursor-pointer flex flex-col justify-between"
                  glowColor="rgba(93, 200, 232, 0.15)"
                >
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5DC8E8]/20 to-[#7CC242]/15 border border-white/60 flex items-center justify-center text-[#5DC8E8] mb-4 group-hover:scale-110 group-hover:shadow-[0_4px_16px_rgba(93,200,232,0.2)] transition-all duration-300">
                        <IconComponent size={22} />
                      </div>
                      <h3 className="text-lg font-bold font-display text-[#2B3A4E] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#5A7089] leading-relaxed font-light">
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
