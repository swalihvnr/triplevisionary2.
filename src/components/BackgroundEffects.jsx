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
      {/* Sky gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#C9E8FF] via-[#E8F4ED]/40 to-transparent" />

      {/* Soft aurora / light ray */}
      <div
        className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full opacity-30 blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #5DC8E8 0%, #A8E0F3 40%, transparent 70%)',
        }}
      />

      {/* Green accent glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #7CC242 0%, transparent 70%)',
        }}
      />

      {/* Top-left soft blue glow */}
      <div
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-25 blur-[80px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #A8E0F3 0%, transparent 70%)',
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
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(93,200,232,0.2) 60%, rgba(93,200,232,0.05))',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: 'inset 0 -2px 4px rgba(93,200,232,0.15), 0 2px 8px rgba(93,200,232,0.1)',
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

      {/* Soft leaf/nature accent shapes */}
      <div
        className="absolute top-[20%] right-[10%] w-[300px] h-[300px] opacity-10 blur-[60px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #7CC242 0%, transparent 70%)',
          borderRadius: '60% 40% 50% 50%',
        }}
      />
    </div>
  );
}
