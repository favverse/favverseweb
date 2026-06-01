export default function AmbientBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {/* Blob 1 — top left, slow drift */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-15%',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.028) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'ambientBlob1 28s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* Blob 2 — center right */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            right: '-20%',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100,120,255,0.022) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'ambientBlob2 36s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* Blob 3 — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(180,140,255,0.018) 0%, transparent 70%)',
            filter: 'blur(70px)',
            animation: 'ambientBlob3 32s ease-in-out infinite',
            animationDelay: '-10s',
            willChange: 'transform',
          }}
        />

        {/* Blob 4 — center subtle */}
        <div
          style={{
            position: 'absolute',
            top: '60%',
            left: '40%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)',
            filter: 'blur(90px)',
            animation: 'ambientBlob1 45s ease-in-out infinite',
            animationDelay: '-20s',
            willChange: 'transform',
          }}
        />
      </div>

      <style>{`
        @keyframes ambientBlob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          25%       { transform: translate(40px, -30px) scale(1.06); }
          50%       { transform: translate(-20px, 50px) scale(0.94); }
          75%       { transform: translate(30px, 20px) scale(1.03); }
        }
        @keyframes ambientBlob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(-50px, 40px) scale(1.08); }
          66%       { transform: translate(30px, -40px) scale(0.92); }
        }
        @keyframes ambientBlob3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          40%       { transform: translate(60px, -20px) scale(1.05); }
          80%       { transform: translate(-30px, 40px) scale(0.96); }
        }
      `}</style>
    </>
  )
}
