'use client'

import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Certifications from './Certifications'
import Contact from './Contact'
import Footer from './Footer'

interface PortfolioProps {
  onLogout?: () => void
}

const Portfolio = ({ onLogout }: PortfolioProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation onLogout={onLogout} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default Portfolio
