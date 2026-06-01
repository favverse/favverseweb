import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const showcaseItems = [
  {
    label: 'Business Website',
    tag: 'Web Design',
    accent: 'rgba(120, 180, 255, 0.06)',
    delay: 0,
    floatClass: 'floating',
    bars: [80, 60, 90, 40, 70],
    dots: ['rgba(120,180,255,0.4)', 'rgba(180,120,255,0.3)', 'rgba(255,180,120,0.3)'],
  },
  {
    label: 'Portfolio Experience',
    tag: 'Creative',
    accent: 'rgba(180, 120, 255, 0.06)',
    delay: 0.1,
    floatClass: 'floating-delay',
    bars: [55, 85, 45, 75, 60],
    dots: ['rgba(180,120,255,0.4)', 'rgba(120,255,180,0.3)', 'rgba(255,120,180,0.3)'],
  },
  {
    label: 'Brand Platform',
    tag: 'Branding',
    accent: 'rgba(255, 180, 80, 0.06)',
    delay: 0.2,
    floatClass: 'floating-delay-2',
    bars: [70, 45, 80, 55, 85],
    dots: ['rgba(255,180,80,0.4)', 'rgba(80,255,180,0.3)', 'rgba(180,80,255,0.3)'],
  },
]

function BrowserMockup({
  item,
}: {
  item: (typeof showcaseItems)[0]
}) {
  return (
    <div
      style={{
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        marginBottom: '1.25rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          padding: '0.625rem 1rem',
          background: 'rgba(255,255,255,0.03)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        {item.dots.map((dot, i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: dot,
            }}
          />
        ))}
        <div
          style={{
            flex: 1,
            marginLeft: '0.5rem',
            height: '20px',
            borderRadius: '6px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        />
      </div>

      {/* Content area */}
      <div style={{ padding: '1.5rem', minHeight: '160px', background: item.accent }}>
        {/* Headline block */}
        <div style={{ marginBottom: '1rem' }}>
          <div
            style={{
              height: '12px',
              borderRadius: '6px',
              background: 'rgba(255,255,255,0.15)',
              width: '70%',
              marginBottom: '8px',
            }}
          />
          <div
            style={{
              height: '8px',
              borderRadius: '4px',
              background: 'rgba(255,255,255,0.07)',
              width: '50%',
            }}
          />
        </div>

        {/* Bar chart visual */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '6px',
            height: '60px',
          }}
        >
          {item.bars.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: '4px 4px 0 0',
                background:
                  i === 2
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'height 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ShowcaseSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <span className="eyebrow">Our Work</span>
          <h2
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#ffffff',
              marginTop: '1rem',
            }}
          >
            What We Create.
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: item.delay + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`glass-card ${item.floatClass}`}
              style={{ padding: '2rem' }}
            >
              <BrowserMockup item={item} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3
                  style={{
                    fontFamily: '"Instrument Serif", Georgia, serif',
                    fontSize: '1.4rem',
                    fontWeight: 400,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.label}
                </h3>
                <span
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                  }}
                >
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
