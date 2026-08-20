import { useState } from 'react';

export default function GlassCard({ children, className = '', hoverGlow = true, glowColor = 'rgba(80,180,240,0.15)', ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative glossy-card transition-all duration-300 ${className}`}
      style={{
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isHovered
          ? `0 1px 0 rgba(255,255,255,0.15) inset,
             0 16px 48px rgba(0,0,0,0.45),
             0 4px 12px rgba(0,0,0,0.3),
             0 0 20px rgba(60,160,230,0.08)`
          : undefined,
        borderColor: isHovered ? 'rgba(140,200,255,0.35)' : undefined,
      }}
      {...props}
    >
      {hoverGlow && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(400px circle at 50% 50%, ${glowColor}, transparent 40%)`,
            borderRadius: 'inherit',
          }}
        />
      )}

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
