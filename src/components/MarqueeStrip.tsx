const items = [
  'Website Design',
  'SEO Optimization',
  'Digital Growth',
  'Mobile-First Development',
  'Brand Identity',
  'Fast Performance',
  'Modern Web Experiences',
  'Long-Term Support',
  'User Experience',
  'Visual Systems',
]

export default function MarqueeStrip() {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items]

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        padding: '1.5rem 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.015)',
        backdropFilter: 'blur(8px)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marqueeScroll 30s linear infinite',
          willChange: 'transform',
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              paddingRight: '1.5rem',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
            </span>
            {/* Dot separator */}
            <span
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>

      {/* Edge fades */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(to right, #050505, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(to left, #050505, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
