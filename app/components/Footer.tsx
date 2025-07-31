'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-black text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-black mr-3" />
              <h3 className="text-xl font-bold">Letisia Pangata'a</h3>
            </div>
            <p className="text-black leading-relaxed">
              IT Professional committed to strengthening Aotearoa, New Zealand's National Security through innovative, reliable, and secure technology solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-black hover:text-gray-600 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-black hover:text-gray-600 transition-colors">
                  Technical Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-black hover:text-gray-600 transition-colors">
                  Skills & Expertise
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-black hover:text-gray-600 transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black hover:text-gray-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">GCSB Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.gcsb.govt.nz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors flex items-center"
                >
                  GCSB Official Website
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gcsb.govt.nz/careers/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors flex items-center"
                >
                  GCSB Careers
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ncsc.govt.nz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors flex items-center"
                >
                  NCSC New Zealand
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-black pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black text-sm mb-4 md:mb-0">
              © {currentYear} Letisia Pangata'a. Created for GCSB - System Engineer (Level 1) role.
            </p>
            <div className="flex items-center text-black text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>for Aotearoa, New Zealand.</span>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-6 bg-white border border-black p-4 rounded-lg text-center"
          >
            <p className="text-black text-sm">
              <strong>Security Notice:</strong> This portfolio demonstrates technical capabilities 
              relevant to cybersecurity and infrastructure management. 
              <p></p>All projects follow 
              security best practices and ethical guidelines.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
