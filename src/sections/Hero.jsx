import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "../components/VideoModal";

export default function Hero({ onPageChange }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const projectImages = [
    "/assets/Projects/image1.jpg",
    "/assets/Projects/image2.jpg",
    "/assets/Projects/image3.jpg",
    "/assets/Projects/image4.jpg",
    "/assets/Projects/image5.jpg",
    "/assets/Projects/image6.png",
    "/assets/Projects/image7.jpeg",
    "/assets/Projects/image8.jpeg",
    "/assets/Projects/image9.jpeg",
    "/assets/Projects/image10.jpeg",
    "/assets/Projects/image11.jpeg",
    "/assets/Projects/image12.jpeg",
    "/assets/Projects/image13.jpg",
    "/assets/Projects/y2kweeknd.png",
  ];

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Banner Image Section */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <img
            src="/assets/banner.png"
            alt="TripleVisionary Banner"
            className="w-full max-h-[650px] object-cover rounded-b-3xl shadow-[0_8px_40px_rgba(51,153,255,0.15)]"
          />
        </motion.div>
      </div>

      {/* Hero Content with Background */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat rounded-3xl mx-auto max-w-6xl mt-12 overflow-hidden shadow-[0_8px_40px_rgba(51,153,255,0.12)]"
        style={{ backgroundImage: `url('/assets/Hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#142341]/60 via-[#1E3264]/50 to-[#0a1628]/40 backdrop-blur-[1px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(51,153,255,0.12), transparent)' }} />

        <div className="container mx-auto px-6 max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            />

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight leading-[1.15] md:leading-none mb-6 text-white break-words drop-shadow-lg"
            >
              TripleVisionary <br className="sm:hidden" />
              Multidisciplinary <br className="sm:hidden" />
              Creative Studio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl font-light drop-shadow"
            >
              Ideas into visual masterpieces — video production, motion graphics, vfx and 3D animation
            </motion.p>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div
        className="relative w-full overflow-hidden border-y border-white/20 bg-cover bg-center bg-no-repeat mt-8"
        style={{ backgroundImage: "url('/assets/Hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#142341]/50 via-[#1E3264]/40 to-[#0a1628]/30 backdrop-blur-[1px]" />

        {/* Left & Right Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 sm:w-20 md:w-32 lg:w-40 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 sm:w-20 md:w-32 lg:w-40 bg-gradient-to-l from-white/40 via-white/20 to-transparent" />

        <div className="relative z-10 py-5">
          <div className="marquee">
            <div className="marquee-content">
              {[...projectImages, ...projectImages].map((image, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (onPageChange) onPageChange("/show");
                  }}
                  className="group flex-shrink-0 overflow-hidden rounded-2xl border-2 border-white/40 bg-white/20 backdrop-blur-md cursor-pointer shadow-[0_4px_20px_rgba(51,153,255,0.1)] hover:shadow-[0_8px_30px_rgba(51,153,255,0.2)] transition-shadow duration-300"
                >
                  <img
                    src={image}
                    alt={`Project ${index}`}
                    className="w-[380px] h-[350px] object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Anti-AI Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8"
        >
          <div className="flex items-center gap-2 md:gap-3 rounded-full px-3 py-2 md:px-4 md:py-2.5 border-2 shadow-[0_4px_20px_rgba(126,217,87,0.15)]"
            style={{ background: 'linear-gradient(180deg, rgba(233,245,252,0.9), rgba(245,251,254,0.85))', borderColor: 'rgba(126,217,87,0.4)' }}
          >
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0.5 rounded-full bg-green-400/30 blur-sm" />
              <img
                src="/assets/fukk-ai.png"
                alt="Anti AI"
                className="relative z-10 h-8 w-8 rounded-full object-cover md:h-10 md:w-10 lg:h-12 lg:w-12 border-2 border-green-400/50"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-gradient-aero text-[11px] md:text-sm lg:text-base font-extrabold whitespace-nowrap">
                We are free from AI generated imaginary
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Showreel video modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        videoTitle="TripleVisionary Showreel 2026"
      />
    </section>
  );
}
