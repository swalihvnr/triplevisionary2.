import { useState } from 'react';

export default function GlassCard({ children, className = '', hoverGlow = true, glowColor = 'rgba(42,175,242,0.15)', ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative glossy-card transition-all duration-300 ${className}`}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: isHovered
          ? `0 12px 40px rgba(42,175,242,0.15), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)`
          : undefined,
      }}
      {...props}
    >
      {hoverGlow && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(350px circle at 50% 50%, ${glowColor}, transparent 40%)`,
          }}
        />
      )}

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
