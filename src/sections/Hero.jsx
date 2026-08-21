import { motion } from "framer-motion";

export default function Hero({ onPageChange }) {
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
      <div className="relative z-10 w-full px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mx-auto overflow-hidden relative"
          style={{
            borderRadius: 5,
            border: '1px solid #38383a',
          }}
        >
          <img
            src="/assets/banner.png"
            alt="TripleVisionary Banner"
            className="w-full max-h-[550px] object-cover"
          />
        </motion.div>
      </div>

      <div className="relative w-full mx-auto max-w-5xl mt-10 px-2 md:px-4">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: 5,
            border: '1px solid #38383a',
            background: '#161618',
          }}
        >
          <div className="container mx-auto px-6 max-w-5xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.1] mb-6 text-white"
              >
                TripleVisionary <br className="sm:hidden" />
                <span className="text-gradient-aero">Multidisciplinary</span> <br className="sm:hidden" />
                Creative Studio
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
                style={{ color: '#a1a1a6' }}
              >
                Ideas into visual masterpieces — video production, motion graphics, vfx and 3D animation
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden mt-8">
        <div
          className="relative overflow-hidden"
          style={{
            borderTop: '1px solid #2c2c2e',
            borderBottom: '1px solid #2c2c2e',
            background: '#0c0c0e',
          }}
        >
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 sm:w-24 md:w-32 lg:w-40"
            style={{ background: 'linear-gradient(90deg, #0c0c0e, transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 sm:w-24 md:w-32 lg:w-40"
            style={{ background: 'linear-gradient(270deg, #0c0c0e, transparent)' }} />

          <div className="relative z-10 py-4">
            <div className="marquee">
              <div className="marquee-content">
                {[...projectImages, ...projectImages].map((image, index) => (
                  <div
                    key={index}
                    onClick={() => { if (onPageChange) onPageChange("/show"); }}
                    className="group flex-shrink-0 overflow-hidden cursor-pointer relative"
                    style={{
                      borderRadius: 5,
                      border: '1px solid #38383a',
                    }}
                  >
                    <img
                      src={image}
                      alt={`Project ${index}`}
                      className="w-[340px] h-[300px] object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
