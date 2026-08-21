import { useState } from 'react';

export default function GlassCard({ children, className = '', hoverGlow = true, glowColor = 'rgba(18,153,202,0.10)', ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative glossy-card transition-all duration-300 ${className}`}
      style={{
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isHovered
          ? `inset 0 1px 0 rgba(255,255,255,0.40),
             0 0 30px rgba(18,153,202,0.15),
             0 16px 48px rgba(26,51,68,0.12),
             0 4px 12px rgba(26,51,68,0.08)`
          : undefined,
        borderColor: isHovered ? 'rgba(18,153,202,0.15)' : undefined,
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
