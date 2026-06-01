import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RevealText, RevealLine, Reveal, EASE_OUT_EXPO } from './ScrollReveal'

function AbstractGrid({ isInView }: { isInView: boolean }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', opacity: 0.6 }} aria-hidden="true">
      {[0,1,2,3,4,5].map(i => <line key={`v${i}`} x1={i*80} y1="0" x2={i*80} y2="300" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>)}
      {[0,1,2,3].map(i => <line key={`h${i}`} x1="0" y1={i*100} x2="400" y2={i*100} stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>)}
      <motion.line x1="0" y1="0" x2="400" y2="300" stroke="rgba(255,255,255,0.08)" strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}/>
      <motion.line x1="400" y1="0" x2="0" y2="300" stroke="rgba(255,255,255,0.05)" strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}/>
      {(['M10 40 L10 10 L40 10','M360 10 L390 10 L390 40','M10 260 L10 290 L40 290','M360 290 L390 290 L390 260'] as string[]).map((d, i) => (
        <motion.path key={d} d={d} stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}/>
      ))}
      {[{cx:80,cy:100},{cx:160,cy:200},{cx:240,cy:100},{cx:320,cy:200},{cx:200,cy:150}].map((dot, i) => (
        <motion.circle key={i} cx={dot.cx} cy={dot.cy} r="3" fill="rgba(255,255,255,0.25)"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}/>
      ))}
      <motion.circle cx="200" cy="150" r="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" strokeDasharray="6 6"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ opacity: { duration: 0.6, delay: 0.8 }, scale: { duration: 0.6, delay: 0.8 }, rotate: { duration: 40, repeat: Infinity, ease: 'linear' } }}
        style={{ transformOrigin: '200px 150px' }}/>
      <motion.circle cx="200" cy="150" r="80" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }}/>
    </svg>
  )
}

export default function IntroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="section-padding">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <Reveal>
          <div className="glass-card" style={{ padding: 'clamp(2.5rem, 6vw, 5rem)', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '340px', height: '260px', opacity: 0.5, pointerEvents: 'none' }}>
              {isInView && <AbstractGrid isInView={isInView} />}
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <RevealLine delay={0.1}>
                <span className="eyebrow">Who We Are</span>
              </RevealLine>

              <RevealText
                text="More than a website."
                as="h2"
                delay={0.15}
                stagger={0.07}
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: '#ffffff',
                  marginTop: '1.25rem',
                  marginBottom: '2rem',
                  maxWidth: '600px',
                }}
              />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55, duration: 0.8, ease: EASE_OUT_EXPO }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', maxWidth: '700px' }}
              >
                <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                  Favverse. helps businesses create meaningful digital experiences through thoughtful design, modern development practices, and long-term growth strategies.
                </p>
                <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                  We focus on building websites that not only look exceptional but also help businesses establish credibility and connect with their audience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.7, ease: EASE_OUT_EXPO }}
                style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                {[{ num: '10+', label: 'Projects Delivered' }, { num: '100%', label: 'Client Satisfaction' }, { num: '3×', label: 'Avg. Traffic Growth' }].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '2rem', color: '#fff', letterSpacing: '-0.03em' }}>{s.num}</div>
                    <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
