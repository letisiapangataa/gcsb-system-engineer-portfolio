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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ko au tēnei. This is me / I am.
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            IT Professional passionate about supporting Aotearoa, New Zealand's 
            National Security through technical excellence and innovation.
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
            <h3 className="text-2xl font-bold text-black">
              My Mission
            </h3>
            <p className="text-black leading-relaxed">
               IT Graduate with a strong technical foundation in cloud-native architecture, infrastructure management, and cybersecurity, I am motivated by the opportunity to contribute meaningfully to New Zealand’s national security through the delivery of secure and resilient technology systems. </p>
               <p className="text-black leading-relaxed">
               My experience at Microsoft New Zealand, supporting enterprise and public sector clients, has equipped me with the capability to align technical solutions with strategic objectives in high-stakes environments.
            </p>
            <p className="text-black leading-relaxed">
              I am confident that my skills in system administration, automation using PowerShell, and the application of security best practices position me to support the GCSB’s mission. I view robust and secure infrastructure as essential to the success of intelligence operations, and I am committed to upholding the principles of integrity, reliability, and continuous improvement in this critical area.
            </p>
            <div className="bg-black text-white p-6 rounded-lg">
              <p className="font-semibold mb-2">Core Values:</p>
              <ul className="space-y-1">
                <li>• Commitment to National Security</li>
                <li>• Technical Excellence and Continuous Learning</li>
                <li>• Security-first mindset in All Operations</li>
                <li>• Collaborative and Professional Approach</li>
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
                className="bg-white p-6 rounded-lg border border-black card-hover"
              >
                <div className="text-black mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-black mb-2">
                  {item.title}
                </h4>
                <p className="text-black text-sm leading-relaxed">
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
          className="bg-white rounded-lg border border-black p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Why GCSB?
          </h3>
          <ul className="list-disc list-inside text-black text-left max-w-3xl mx-auto space-y-2">
            <li>Opportunity to contribute to national security through technical excellence.</li>
            <li>Apply automation and security best practices in mission-critical environments.</li>
            <li>Collaborate with experts dedicated to protecting New Zealand.</li>
            <li>Support resilient and secure infrastructure for intelligence operations.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About
