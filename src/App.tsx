import './index.css'
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

export default function App() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Subtle noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <IntroSection />
        <ServicesSection />
        <ProcessSection />
        <WhyFavverseSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
