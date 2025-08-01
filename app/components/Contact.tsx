'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Shield } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "lpangataa@outlook.com",
      href: "mailto:lpangataa@outlook.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Mobile Phone (Work)",
      value: "+64 027 701 6376",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Auckland, New Zealand",
      href: null
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/letisiapangataa/",
      href: "https://www.linkedin.com/in/letisiapangataa/"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Details
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Ready to contribute to New Zealand's National Security through technical excellence. 
            Let's discuss how my skills can support GCSB's mission.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="text-black">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-black">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-black hover:text-gray-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-black">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-black p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-black">
                Professional Interest
              </h4>
              <p className="text-700 leading-relaxed">
                Highly interested in the <strong>System Engineer – Level 1 </strong> 
                role at GCSB and welcome further opportunities to discuss how my technical 
                background in infrastructure management and security can contribute to 
                Aotearoa, New Zealand's Cybersecurity objectives.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-100 text-black p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">
                Why Choose Me for GCSB?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <div>
                    <strong>Technical Excellence:</strong> Comprehensive skills in Windows/Linux administration, automation, and security
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <div>
                    <strong>Security Focus:</strong> Deep understanding of cybersecurity principles and threat mitigation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <div>
                    <strong>Public Service Commitment:</strong> Genuine passion for supporting New Zealand's national security
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <div>
                    <strong>Continuous Learning:</strong> Dedicated to staying current with evolving technologies and threats
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
