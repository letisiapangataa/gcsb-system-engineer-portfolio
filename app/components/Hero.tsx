'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Letisia Pangataa
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-200">
            System Engineer | Infrastructure Specialist
          </h2>
          <div className="flex items-center justify-center mb-8">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="text-lg">Aotearoa New Zealand</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-100"
        >
          Applying for <strong>System Engineer – Level 1 / Kaipūkaha Pūnaha – Taumata 1</strong> at the 
          <strong> Government Communications Security Bureau (GCSB)</strong>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg mb-12 max-w-3xl mx-auto text-gray-100"
        >
          Passionate about supporting Aotearoa New Zealand's national security through 
          infrastructure automation, system administration, and security-focused engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            View My Work
            <ChevronDown className="ml-2 h-5 w-5" />
          </motion.a>
          
          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </motion.a>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-96 h-96 border border-gray-400 opacity-20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 border border-gray-400 opacity-20 rounded-full"
        />
      </div>
    </section>
  )
}

export default Hero
