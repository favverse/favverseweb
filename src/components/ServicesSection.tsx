import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Monitor, Search, TrendingUp } from 'lucide-react'
import { RevealText, RevealLine, EASE_OUT_EXPO } from './ScrollReveal'

const services = [
  { icon: Monitor, title: 'Website Design', description: 'Modern websites crafted for speed, usability, responsiveness, and conversion. Every pixel purposeful, every interaction intentional.', index: '01', detail: ['Custom UI/UX', 'Responsive Layout', 'CMS Integration', 'Performance Optimized'] },
  { icon: Search, title: 'SEO Optimization', description: 'Increase visibility, improve rankings, and attract qualified traffic through modern SEO strategies built for sustainable growth.', index: '02', detail: ['Keyword Strategy', 'Technical SEO', 'Content Optimization', 'Analytics Setup'] },
  { icon: TrendingUp, title: 'Digital Growth', description: 'Helping businesses build stronger online presence and long-term digital credibility that compounds over time.', index: '03', detail: ['Growth Strategy', 'Brand Visibility', 'Digital Presence', 'Long-Term Support'] },
]

function ServiceCard({ service, index, isInView }: { service: typeof services[0]; index: number; isInView: boolean }) {
  const Icon = service.icon
  const cardRef = useRef<HTMLDivElement>(null)
  const [beam, setBeam] = useState({ x: 50, y: 50, visible: false })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setBeam({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100, visible: true })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.13, ease: EASE_OUT_EXPO }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setBeam(b => ({ ...b, visible: false }))}
      className="glass-card"
      style={{ padding: '2.5rem', cursor: 'default', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', overflow: 'hidden', transition: 'box-shadow 0.3s ease' }}
    >
      <div style={{ position: 'absolute', inset: 0, background: beam.visible ? `radial-gradient(200px circle at ${beam.x}% ${beam.y}%, rgba(255,255,255,0.06), transparent 70%)` : 'transparent', transition: 'background 0.15s ease', pointerEvents: 'none', zIndex: 0, borderRadius: '24px' }} />
      <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontFamily: '"Instrument Serif", serif', fontSize: '1rem', color: 'rgba(255,255,255,0.1)', letterSpacing: '0.05em', zIndex: 1 }}>{service.index}</div>
      <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.85)', position: 'relative', zIndex: 1 }}>
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontSize: '1.85rem', fontWeight: 400, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.875rem' }}>{service.title}</h3>
        <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '1.5rem' }}>{service.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {service.detail.map(tag => (
            <span key={tag} style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', padding: '0.3rem 0.7rem', borderRadius: '999px' }}>{tag}</span>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)', zIndex: 1 }} />
    </motion.div>
  )
}

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="section-padding" style={{ position: 'relative' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`, backgroundSize: '64px 64px', zIndex: 0, maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <RevealLine delay={0}>
            <span className="eyebrow">What We Do</span>
          </RevealLine>
          <RevealText
            text="Our services."
            as="h2"
            delay={0.1}
            stagger={0.08}
            style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#ffffff', marginTop: '1rem' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {services.map((service, i) => <ServiceCard key={service.title} service={service} index={i} isInView={isInView} />)}
        </div>
      </div>
    </section>
  )
}
