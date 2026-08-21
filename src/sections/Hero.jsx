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
      {/* Banner Image — floating Aero glass card */}
      <div className="relative z-10 w-full px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mx-auto overflow-hidden relative"
          style={{
            borderRadius: 10,
            border: '1px solid rgba(120,180,240,0.3)',
            boxShadow: `
              0 1px 0 rgba(255,255,255,0.15) inset,
              0 12px 40px rgba(0,0,0,0.5),
              0 4px 12px rgba(0,0,0,0.3)
            `,
          }}
        >
          <img
            src="/assets/banner.png"
            alt="TripleVisionary Banner"
            className="w-full max-h-[550px] object-cover"
          />
          {/* Aero glass gloss overlay on the banner */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(180deg,
                rgba(255,255,255,0.08) 0%,
                transparent 15%,
                transparent 85%,
                rgba(0,0,0,0.15) 100%
              )`,
            }}
          />
        </motion.div>
      </div>

      {/* Hero Content — Aero Glass Panel floating on wallpaper */}
      <div className="relative w-full mx-auto max-w-5xl mt-10 px-2 md:px-4">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: 10,
            border: '1px solid rgba(120,180,240,0.3)',
            boxShadow: `
              0 1px 0 rgba(255,255,255,0.15) inset,
              0 12px 40px rgba(0,0,0,0.5),
              0 4px 12px rgba(0,0,0,0.3)
            `,
          }}
        >
          {/* Background image with Aero glass tint */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/Hero.jpg')",
              filter: 'brightness(0.4) saturate(1.3)',
            }}
          />
          {/* Aero glass overlay */}
          <div className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg,
                rgba(150,200,240,0.08) 0%,
                rgba(50,100,170,0.1) 5%,
                rgba(5,25,55,0.5) 15%,
                rgba(3,18,40,0.6) 100%
              )`,
              backdropFilter: 'none',
            }}
          />
          {/* Aero glossy highlight */}
          <div className="absolute top-0 left-0 right-0 h-[40%] pointer-events-none"
            style={{
              background: `linear-gradient(180deg,
                rgba(255,255,255,0.1) 0%,
                rgba(180,210,240,0.04) 40%,
                transparent 100%
              )`,
            }}
          />
          {/* Blue glow orb behind text */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(40,140,220,0.15), transparent 60%)',
              filter: 'blur(60px)',
            }}
          />

          <div className="container mx-auto px-6 max-w-5xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.1] mb-6 text-white"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 0 60px rgba(40,140,220,0.15)' }}
              >
                TripleVisionary <br className="sm:hidden" />
                <span className="text-gradient-aero">Multidisciplinary</span> <br className="sm:hidden" />
                Creative Studio
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg leading-relaxed mb-8 max-w-xl font-light"
                style={{ color: 'rgba(180,210,240,0.8)', textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
              >
                Ideas into visual masterpieces — video production, motion graphics, vfx and 3D animation
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee — Aero Glass strip */}
      <div className="relative w-full overflow-hidden mt-8">
        <div
          className="relative overflow-hidden"
          style={{
            borderTop: '1px solid rgba(120,180,240,0.2)',
            borderBottom: '1px solid rgba(120,180,240,0.2)',
            background: `linear-gradient(180deg,
              rgba(80,140,210,0.08) 0%,
              rgba(15,45,85,0.3) 30%,
              rgba(10,35,70,0.35) 100%
            )`,
            backdropFilter: 'none',
          }}
        >
          {/* Aero gloss on marquee strip */}
          <div className="absolute top-0 left-0 right-0 h-[50%] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.06), transparent)',
            }}
          />

          {/* Left & Right Fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 sm:w-24 md:w-32 lg:w-40"
            style={{ background: 'linear-gradient(90deg, rgba(3,42,90,0.9), transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 sm:w-24 md:w-32 lg:w-40"
            style={{ background: 'linear-gradient(270deg, rgba(3,42,90,0.9), transparent)' }} />

          <div className="relative z-10 py-4">
            <div className="marquee">
              <div className="marquee-content">
                {[...projectImages, ...projectImages].map((image, index) => (
                  <div
                    key={index}
                    onClick={() => { if (onPageChange) onPageChange("/show"); }}
                    className="group flex-shrink-0 overflow-hidden cursor-pointer relative"
                    style={{
                      borderRadius: 8,
                      border: '1px solid rgba(120,180,240,0.25)',
                      boxShadow: '0 1px 0 rgba(255,255,255,0.1) inset, 0 4px 16px rgba(0,0,0,0.3)',
                    }}
                  >
                    <img
                      src={image}
                      alt={`Project ${index}`}
                      className="w-[340px] h-[300px] object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    {/* Gloss overlay on each image */}
                    <div className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(180deg,
                          rgba(255,255,255,0.06) 0%,
                          transparent 30%,
                          transparent 70%,
                          rgba(0,0,0,0.1) 100%
                        )`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        videoTitle="TripleVisionary Showreel 2026"
      />
    </section>
  );
}
