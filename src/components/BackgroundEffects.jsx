import { motion } from 'framer-motion';

const bubbles = [
  { size: 18, left: 5, top: 15, delay: 0, dur: 6 },
  { size: 12, left: 15, top: 45, delay: 1, dur: 7 },
  { size: 22, left: 25, top: 70, delay: 0.5, dur: 5.5 },
  { size: 10, left: 35, top: 25, delay: 2, dur: 8 },
  { size: 16, left: 45, top: 60, delay: 0.8, dur: 6.5 },
  { size: 14, left: 55, top: 10, delay: 1.5, dur: 7.5 },
  { size: 20, left: 65, top: 50, delay: 0.3, dur: 5 },
  { size: 11, left: 75, top: 80, delay: 2.5, dur: 6 },
  { size: 15, left: 85, top: 30, delay: 1.2, dur: 7 },
  { size: 9, left: 92, top: 55, delay: 0.7, dur: 8 },
  { size: 13, left: 10, top: 85, delay: 3, dur: 6.5 },
  { size: 17, left: 50, top: 40, delay: 1.8, dur: 5.5 },
];

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Orbs - Frutiger Aero signature (from your Telegram client) */}
      <div
        className="orb"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, #00A8E8, #7FC8F8)',
          top: -150, right: -100,
          animation: 'floatOrb 20s ease-in-out infinite',
        }}
      />
      <div
        className="orb"
        style={{
          width: 400, height: 400,
          background: 'radial-gradient(circle, #00D4AA, #7ED957)',
          bottom: -100, left: -100,
          animation: 'floatOrb 25s ease-in-out infinite reverse',
        }}
      />
      <div
        className="orb"
        style={{
          width: 300, height: 300,
          background: 'radial-gradient(circle, #7FC8F8, transparent)',
          top: '40%', left: '20%',
          animation: 'floatOrb 15s ease-in-out infinite',
        }}
      />
      <div
        className="orb"
        style={{
          width: 350, height: 350,
          background: 'radial-gradient(circle, #7ED957, transparent)',
          bottom: '10%', right: '30%',
          animation: 'floatOrb 18s ease-in-out infinite reverse',
        }}
      />

      {/* Floating bubbles */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            top: `${b.top}%`,
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(0,168,232,0.2) 60%, rgba(0,168,232,0.05))',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: 'inset 0 -2px 4px rgba(0,168,232,0.15), 0 2px 8px rgba(0,168,232,0.1)',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 5, -3, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
