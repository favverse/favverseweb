import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      style={{
        padding: '4rem 1.5rem 3rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: '2rem',
              fontWeight: 400,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              marginBottom: '0.625rem',
            }}
          >
            Favverse<span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8em' }}>®</span>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.85rem',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '2.5rem',
            }}
          >
            Design. Visibility. Growth.
          </p>

          {/* Contact links */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            <a
              href="mailto:contact.favverse@gmail.com"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              contact.favverse@gmail.com
            </a>
            <a
              href="tel:+919562099491"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              9562099491
            </a>
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)',
              marginBottom: '2rem',
            }}
          />

          {/* Copyright */}
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            © 2026 Favverse. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
