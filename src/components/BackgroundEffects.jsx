import { motion } from 'framer-motion';

const bubbles = [
  { size: 18, left: 5, top: 15, delay: 0, dur: 6, color: '#3399ff' },
  { size: 12, left: 15, top: 45, delay: 1, dur: 7, color: '#a7d9f5' },
  { size: 22, left: 25, top: 70, delay: 0.5, dur: 5.5, color: '#bee6fd' },
  { size: 10, left: 35, top: 25, delay: 2, dur: 8, color: '#3399ff' },
  { size: 16, left: 45, top: 60, delay: 0.8, dur: 6.5, color: '#a7d9f5' },
  { size: 14, left: 55, top: 10, delay: 1.5, dur: 7.5, color: '#e9f5fc' },
  { size: 20, left: 65, top: 50, delay: 0.3, dur: 5, color: '#3399ff' },
  { size: 11, left: 75, top: 80, delay: 2.5, dur: 6, color: '#bee6fd' },
  { size: 15, left: 85, top: 30, delay: 1.2, dur: 7, color: '#a7d9f5' },
  { size: 9, left: 92, top: 55, delay: 0.7, dur: 8, color: '#3399ff' },
  { size: 13, left: 10, top: 85, delay: 3, dur: 6.5, color: '#e9f5fc' },
  { size: 17, left: 50, top: 40, delay: 1.8, dur: 5.5, color: '#bee6fd' },
];

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Orbs — Windows 7 Aero signature glass effects */}
      <div
        className="orb"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(51,153,255,0.25), rgba(167,217,245,0.12) 60%, transparent)',
          top: -150, right: -100,
          animation: 'floatOrb 20s ease-in-out infinite',
        }}
      />
      <div
        className="orb"
        style={{
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(0,168,232,0.15), rgba(0,212,170,0.08) 60%, transparent)',
          bottom: -100, left: -100,
          animation: 'floatOrb 25s ease-in-out infinite reverse',
        }}
      />
      <div
        className="orb"
        style={{
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(190,230,253,0.25), transparent 70%)',
          top: '40%', left: '20%',
          animation: 'floatOrb 15s ease-in-out infinite',
        }}
      />
      <div
        className="orb"
        style={{
          width: 350, height: 350,
          background: 'radial-gradient(circle, rgba(233,245,252,0.3), transparent 70%)',
          bottom: '10%', right: '30%',
          animation: 'floatOrb 18s ease-in-out infinite reverse',
        }}
      />

      {/* Floating bubbles — Windows Vista/7 style water droplets */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            top: `${b.top}%`,
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), ${b.color}40 50%, ${b.color}10)`,
            border: '1px solid rgba(255,255,255,0.7)',
            boxShadow: `inset 0 -2px 4px ${b.color}20, 0 2px 8px ${b.color}10`,
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
