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
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {/* Left: tagline */}
        <div>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
              marginBottom: '1rem',
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

        {/* Right: contact links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-end' }}>
          <a
            href="mailto:contact.favverse@gmail.com"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
          >
            contact.favverse@gmail.com
          </a>
          <a
            href="tel:+919562099491"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
          >
            +91 95620 99491
          </a>
        </div>
      </div>

      {/* Thin divider */}
      <div
        style={{
          height: '1px',
          background: 'rgba(255,255,255,0.05)',
          margin: '0 1.5rem',
        }}
      />

      {/* Massive brand name — full width */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
        style={{
          padding: '1rem 0 0',
          lineHeight: 0.85,
          userSelect: 'none',
          overflow: 'hidden',
        }}
      >
        <span
          style={{
            display: 'block',
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(5rem, 18.5vw, 22rem)',
            letterSpacing: '-0.04em',
            color: 'rgba(255,255,255,0.07)',
            whiteSpace: 'nowrap',
            paddingLeft: '0.5vw',
            lineHeight: 0.88,
          }}
        >
          Favverse
          <span style={{ fontSize: '0.35em', verticalAlign: 'super', color: 'rgba(255,255,255,0.04)' }}>®</span>
        </span>
      </motion.div>
    </footer>
  )
}
