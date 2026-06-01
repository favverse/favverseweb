import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Phone, ArrowRight } from 'lucide-react'

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent('Project Inquiry — Favverse®')
    const body = encodeURIComponent(
      `Hello Favverse Team,\n\nI'd like to discuss a project.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}\n\nLooking forward to hearing from you.`
    )

    window.location.href = `mailto:contact.favverse@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Animated gradient border wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: 'relative',
            borderRadius: '25px',
            padding: '1px',
            overflow: 'hidden',
          }}
        >
          {/* Rotating gradient layer that creates the border */}
          <div className="contact-gradient-border" />

          {/* Actual card */}
          <motion.div
            whileHover={{
              boxShadow: '0 24px 80px rgba(0,0,0,0.55)',
            }}
            className="glass-card"
            style={{ padding: 'clamp(2.5rem, 6vw, 5rem)', borderRadius: '23px', position: 'relative', zIndex: 1, transition: 'box-shadow 0.4s ease' }}
          >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ marginBottom: '3rem', textAlign: 'center' }}
          >
            <span className="eyebrow">Get In Touch</span>
            <h2
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#ffffff',
                marginTop: '1rem',
                marginBottom: '1rem',
              }}
            >
              Let's build something exceptional.
            </h2>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
              }}
            >
              Tell us about your project and we'll get back to you.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSend}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label
                  htmlFor="contact-name"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.45)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className="glass-input"
                  style={{ padding: '0.875rem 1.125rem', fontSize: '0.95rem', width: '100%' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label
                  htmlFor="contact-email"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.45)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="glass-input"
                  style={{ padding: '0.875rem 1.125rem', fontSize: '0.95rem', width: '100%' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label
                htmlFor="contact-phone"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Phone Number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={handleChange}
                className="glass-input"
                style={{ padding: '0.875rem 1.125rem', fontSize: '0.95rem', width: '100%' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label
                htmlFor="contact-message"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                className="glass-input"
                style={{
                  padding: '0.875rem 1.125rem',
                  fontSize: '0.95rem',
                  width: '100%',
                  resize: 'vertical',
                  minHeight: '120px',
                  fontFamily: '"Inter", sans-serif',
                }}
              />
            </div>

            {/* Actions */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '0.5rem',
              }}
            >
              <motion.button
                id="send-message-btn"
                type="submit"
                className="btn-primary"
                whileTap={{ scale: 0.97 }}
                style={{ flex: '1', minWidth: '160px', justifyContent: 'center' }}
              >
                {sent ? (
                  <>Opening Email App <ArrowRight size={16} /></>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </motion.button>

              <motion.a
                id="call-us-btn"
                href="tel:+919562099491"
                className="btn-secondary"
                whileTap={{ scale: 0.97 }}
                style={{ flex: '1', minWidth: '140px', justifyContent: 'center' }}
              >
                Call Us <Phone size={16} />
              </motion.a>
            </div>
          </motion.form>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)',
              margin: '3rem 0 2rem',
            }}
          />

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <a
              href="mailto:contact.favverse@gmail.com"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
            >
              contact.favverse@gmail.com
            </a>
            <a
              href="tel:+919562099491"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
            >
              +91 95620 99491
            </a>
          </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .contact-gradient-border {
          position: absolute;
          inset: -150%;
          background: conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            rgba(255, 255, 255, 0.0) 60deg,
            rgba(255, 255, 255, 0.18) 120deg,
            rgba(255, 255, 255, 0.0) 180deg,
            transparent 360deg
          );
          animation: spinContactBorder 5s linear infinite;
          z-index: 0;
          will-change: transform;
        }
        @keyframes spinContactBorder {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
