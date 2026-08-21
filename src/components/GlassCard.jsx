import { useState } from 'react';

export default function GlassCard({ children, className = '', hoverGlow = true, glowColor = 'rgba(0,122,255,0.08)', ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative glossy-card transition-all duration-200 ${className}`}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        borderColor: isHovered ? '#48484a' : undefined,
      }}
      {...props}
    >
      {hoverGlow && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-200 z-0"
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
