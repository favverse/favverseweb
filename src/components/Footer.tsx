import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top info row */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3.5rem 1.5rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
          }}
        >
          Design. Visibility. Growth.
        </p>

        <p
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.22)',
          }}
        >
          © 2026 Favverse. All rights reserved.
        </p>
      </div>

      {/* Thin divider */}
      <div
        style={{
          height: '1px',
          background: 'rgba(255,255,255,0.05)',
        }}
      />

      {/* Massive centred brand name */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
        style={{
          width: '100%',
          textAlign: 'center',
          lineHeight: 0.85,
          userSelect: 'none',
          overflow: 'hidden',
          padding: '0.5rem 0 0',
        }}
      >
        <span
          style={{
            display: 'block',
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(5rem, 19vw, 24rem)',
            letterSpacing: '-0.04em',
            color: 'rgba(255,255,255,0.12)',
            whiteSpace: 'nowrap',
            lineHeight: 0.88,
          }}
        >
          Favverse
        </span>
      </motion.div>
    </footer>
  )
}
