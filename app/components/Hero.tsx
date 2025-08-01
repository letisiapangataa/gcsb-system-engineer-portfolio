'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-white text-black relative overflow-hidden"
    >
      {/* Clean background - no overlay needed */}
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Spy Icon - Large and Centered */}
        {/* Profile Section */}
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 flex justify-center"
        >
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                <img 
                    src="/spy-icon.png" 
                    alt="Security Professional Icon" 
                    className="w-full h-full rounded-lg"
                />
            </div>
        </motion.div>

        {/* Name & Title Section */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Letisia Pangata'a 
            </h1>
            <h2 className="text-2xl md:text-1xl font-normal mb-4 text-black">
                System Engineer (Infrastructure Specialist)
            </h2>
        </motion.div>
        
        {/* Call to Action Buttons */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-1xl mb-8 leading-relaxed text-black"
        >
        <strong>System Engineer – Level 1 / Kaipūkaha Pūnaha – Taumata 1</strong>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg mb-12 max-w-3xl mx-auto text-black"
        >
        Supporting Aotearoa New Zealand's National Security through 
        infrastructure automation, system administration, and security-focused engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            View My Work
            <ChevronDown className="ml-2 h-5 w-5" />
          </motion.a>
          
          <motion.a
            href="\Letisia_Tatimoa_Pangataa_CV_GCSB_NZSIS_System_Engineer_Level_1_Role_2025.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors inline-flex items-center"
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
          className="absolute -top-1/2 -right-1/2 w-96 h-96 border border-black opacity-10 rounded-full"
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
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 border border-black opacity-10 rounded-full"
        />
      </div>
    </section>
  )
}

export default Hero
