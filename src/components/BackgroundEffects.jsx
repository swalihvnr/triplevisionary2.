export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute inset-0"
        style={{ background: '#0c0c0e' }}
      />

      <div
        className="absolute rounded-full"
        style={{
          width: 600, height: 600,
          top: -200, right: -150,
          background: 'radial-gradient(circle, rgba(0,122,255,0.06), transparent 60%)',
          animation: 'floatOrb 25s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500,
          bottom: -150, left: -100,
          background: 'radial-gradient(circle, rgba(0,122,255,0.04), transparent 60%)',
          animation: 'floatOrb 30s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 400, height: 400,
          top: '40%', left: '30%',
          background: 'radial-gradient(circle, rgba(0,122,255,0.03), transparent 60%)',
          animation: 'floatOrb 20s ease-in-out infinite',
        }}
      />
    </div>
  );
}
