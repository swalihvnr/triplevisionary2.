import { motion } from 'framer-motion';

const bubbles = [
  { size: 90, left: 8, top: 12, dur: 12, delay: 0 },
  { size: 55, left: 18, top: 55, dur: 14, delay: 1 },
  { size: 120, left: 28, top: 72, dur: 11, delay: 0.5 },
  { size: 40, left: 38, top: 20, dur: 16, delay: 2 },
  { size: 70, left: 52, top: 65, dur: 13, delay: 0.8 },
  { size: 50, left: 62, top: 8, dur: 15, delay: 1.5 },
  { size: 100, left: 72, top: 42, dur: 10, delay: 0.3 },
  { size: 35, left: 82, top: 78, dur: 17, delay: 2.5 },
  { size: 65, left: 90, top: 28, dur: 12, delay: 1.2 },
  { size: 45, left: 5, top: 85, dur: 14, delay: 3 },
  { size: 80, left: 45, top: 38, dur: 11, delay: 1.8 },
  { size: 30, left: 75, top: 90, dur: 18, delay: 0.7 },
  { size: 60, left: 15, top: 35, dur: 13, delay: 2.2 },
  { size: 110, left: 58, top: 15, dur: 10, delay: 0.2 },
  { size: 25, left: 95, top: 60, dur: 16, delay: 3.5 },
];

function AeroBubble({ size, left, top, dur, delay }) {
  const highlightSize = size * 0.35;
  const innerGlow = size * 0.6;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -30, 10, -20, 0],
        x: [0, 12, -8, 15, 0],
      }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Main bubble sphere */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 35% 30%,
            rgba(200,245,255,0.25) 0%,
            rgba(100,220,245,0.12) 30%,
            rgba(50,180,220,0.06) 60%,
            rgba(20,120,180,0.03) 80%,
            transparent 100%
          )`,
          border: '1px solid rgba(100,230,255,0.2)',
          boxShadow: `
            inset 0 -${size * 0.15}px ${size * 0.3}px rgba(50,180,220,0.1),
            inset 0 ${size * 0.1}px ${size * 0.2}px rgba(200,245,255,0.1),
            0 0 ${size * 0.4}px rgba(80,210,245,0.1)
          `,
        }}
      />

      {/* Specular highlight (top-left) */}
      <div
        className="absolute rounded-full"
        style={{
          top: '12%',
          left: '18%',
          width: highlightSize,
          height: highlightSize * 0.6,
          background: `radial-gradient(ellipse at 50% 50%,
            rgba(255,255,255,0.5) 0%,
            rgba(200,245,255,0.2) 40%,
            transparent 100%
          )`,
          transform: 'rotate(-15deg)',
          filter: `blur(${size * 0.03}px)`,
        }}
      />

      {/* Secondary highlight (smaller, sharper) */}
      <div
        className="absolute rounded-full"
        style={{
          top: '18%',
          left: '28%',
          width: highlightSize * 0.4,
          height: highlightSize * 0.25,
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, transparent 100%)',
          transform: 'rotate(-20deg)',
          filter: 'blur(1px)',
        }}
      />

      {/* Bottom rim light (refraction) */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: '10%',
          left: '20%',
          width: innerGlow,
          height: innerGlow * 0.3,
          background: `radial-gradient(ellipse at 50% 80%,
            rgba(100,220,245,0.15) 0%,
            transparent 100%
          )`,
          filter: `blur(${size * 0.04}px)`,
        }}
      />
    </motion.div>
  );
}

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Full-page background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/assets/Hero.jpg')",
          filter: 'brightness(1) saturate(1.2)',
        }}
      />
      {/* Subtle dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, rgba(1,8,16,0.1) 0%, rgba(2,16,40,0.05) 50%, rgba(1,8,16,0.1) 100%)',
        }}
      />

      {/* Large soft teal-aqua glow orbs — Frutiger Aero signature */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700, height: 700,
          top: -200, right: -150,
          background: 'radial-gradient(circle, rgba(18,153,202,0.12), rgba(90,172,160,0.06) 50%, transparent 70%)',
          animation: 'floatOrb 25s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500,
          bottom: -150, left: -100,
          background: 'radial-gradient(circle, rgba(90,172,160,0.10), rgba(18,153,202,0.04) 50%, transparent 70%)',
          animation: 'floatOrb 30s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 400, height: 400,
          top: '40%', left: '30%',
          background: 'radial-gradient(circle, rgba(18,153,202,0.08), transparent 60%)',
          animation: 'floatOrb 20s ease-in-out infinite',
        }}
      />

      {/* Water caustic light pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(18,153,202,0.04) 0%, transparent 40%),
            radial-gradient(ellipse at 70% 60%, rgba(90,172,160,0.03) 0%, transparent 35%),
            radial-gradient(ellipse at 50% 80%, rgba(18,153,202,0.02) 0%, transparent 30%)
          `,
          animation: 'waterCaustic 8s ease-in-out infinite',
        }}
      />

      {/* Floating Aero bubbles */}
      {bubbles.map((b, i) => (
        <AeroBubble key={i} {...b} />
      ))}
    </div>
  );
}
