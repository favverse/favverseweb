import { useState, useCallback, useEffect } from 'react'
import './index.css'
import Preloader from './components/Preloader'
import AmbientBackground from './components/AmbientBackground'
import MarqueeStrip from './components/MarqueeStrip'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustStrip from './components/TrustStrip'
import IntroSection from './components/IntroSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import WhyFavverseSection from './components/WhyFavverseSection'
import ShowcaseSection from './components/ShowcaseSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false)

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true)
  }, [])

  // Disable right-click context menu and drag globally
  useEffect(() => {
    const block = (e: Event) => e.preventDefault()
    document.addEventListener('contextmenu', block)
    document.addEventListener('dragstart', block)
    return () => {
      document.removeEventListener('contextmenu', block)
      document.removeEventListener('dragstart', block)
    }
  }, [])

  return (
    <div style={{ background: '#050505', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Subtle noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Slowly drifting ambient light blobs */}
      <AmbientBackground />

      {/* Branded preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Main site — fades in after preloader */}
      <AnimatePresence>
        {preloaderDone && (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Navbar />
            <main>
              <HeroSection />
              <MarqueeStrip />
              <TrustStrip />
              <IntroSection />
              <ServicesSection />
              <ProcessSection />
              <WhyFavverseSection />
              <ShowcaseSection />
              <ContactSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
