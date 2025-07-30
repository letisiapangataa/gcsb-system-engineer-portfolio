'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Shield } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "letisia.pangataa@example.com",
      href: "mailto:letisia.pangataa@example.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+64 XXX XXX XXX",
      href: "tel:+64XXXXXXXXX"
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
      value: "linkedin.com/in/letisia-pangataa",
      href: "https://linkedin.com/in/letisia-pangataa"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gcsb-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to contribute to New Zealand's national security through technical excellence. 
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
                <Shield className="mr-3 h-8 w-8" />
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
                    <div className="text-blue-200">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-blue-100">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-blue-200 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">
                Professional Interest
              </h4>
              <p className="text-blue-100 leading-relaxed">
                I am specifically interested in the <strong>System Engineer – Level 1</strong> 
                position at GCSB and welcome opportunities to discuss how my technical 
                background in infrastructure management and security can contribute to 
                New Zealand's cybersecurity objectives.
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
            <div className="bg-white text-gcsb-blue p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">
                Why Choose Me for GCSB?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gcsb-blue mr-3 mt-1">•</span>
                  <div>
                    <strong>Technical Excellence:</strong> Comprehensive skills in Windows/Linux administration, automation, and security
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gcsb-blue mr-3 mt-1">•</span>
                  <div>
                    <strong>Security Focus:</strong> Deep understanding of cybersecurity principles and threat mitigation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gcsb-blue mr-3 mt-1">•</span>
                  <div>
                    <strong>Public Service Commitment:</strong> Genuine passion for supporting New Zealand's national security
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gcsb-blue mr-3 mt-1">•</span>
                  <div>
                    <strong>Continuous Learning:</strong> Dedicated to staying current with evolving technologies and threats
                  </div>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <motion.a
                href="mailto:letisia.pangataa@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gcsb-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me Today
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
