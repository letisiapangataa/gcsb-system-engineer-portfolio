'use client'

import { motion } from 'framer-motion'
import { Server, Shield, Terminal, Network } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Infrastructure Management",
      description: "Windows & Linux system administration with focus on lifecycle management and automation"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Awareness",
      description: "RBAC implementation, threat modeling, and security-first approach to system engineering"
    },
    {
      icon: <Terminal className="h-8 w-8" />,
      title: "Automation & Scripting",
      description: "PowerShell, Bash, and Python scripting for infrastructure automation and monitoring"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Network Fundamentals",
      description: "CCNAv7-aligned networking knowledge supporting secure infrastructure deployment"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gcsb-blue mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A dedicated systems engineer passionate about supporting Aotearoa New Zealand's 
            national security through technical excellence and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gcsb-blue">
              My Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              As someone deeply committed to public service, I am driven by the opportunity 
              to contribute to New Zealand's national security through technology. My technical 
              background in infrastructure management, combined with a strong understanding of 
              security principles, positions me to make meaningful contributions to GCSB's mission.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I believe that robust, secure infrastructure is the foundation of effective 
              intelligence operations, and I'm excited to bring my skills in system 
              administration, automation, and monitoring to support this critical work.
            </p>
            <div className="bg-gcsb-blue text-white p-6 rounded-lg">
              <p className="font-semibold mb-2">Core Values:</p>
              <ul className="space-y-1">
                <li>• Commitment to national security</li>
                <li>• Technical excellence and continuous learning</li>
                <li>• Security-first mindset in all operations</li>
                <li>• Collaborative and professional approach</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg card-hover"
              >
                <div className="text-gcsb-blue mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gcsb-blue mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gcsb-blue mb-6 text-center">
            Why GCSB?
          </h3>
          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            The Government Communications Security Bureau represents the pinnacle of New Zealand's 
            cybersecurity and intelligence capabilities. I am drawn to the opportunity to apply my 
            technical skills in infrastructure management, automation, and security to support the 
            Bureau's vital mission of protecting our nation's interests in an increasingly complex 
            digital landscape.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
