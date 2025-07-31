'use client'

import { motion } from 'framer-motion'
import { Award, Download, ExternalLink, Calendar } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "CCNAv7 - Cisco Certified Network Associate",
      status: "In Progress",
      issuer: "Cisco",
      date: "Expected 2024",
      description: "Comprehensive networking fundamentals including IPv4/IPv6, VLANs, security, and automation",
      relevance: "Essential for understanding network infrastructure security and management"
    },
    {
      title: "CompTIA Security+",
      status: "Planned",
      issuer: "CompTIA",
      date: "2024",
      description: "Industry-standard cybersecurity certification covering threat management and risk mitigation",
      relevance: "Directly applicable to GCSB's cybersecurity mission and threat assessment capabilities"
    },
    {
      title: "Microsoft Azure Fundamentals",
      status: "Planned",
      issuer: "Microsoft",
      date: "2024",
      description: "Cloud computing fundamentals and Azure services overview",
      relevance: "Modern infrastructure management and cloud security principles"
    },
    {
      title: "ITIL Foundation",
      status: "Planned",
      issuer: "Axelos",
      date: "2024",
      description: "IT service management best practices and lifecycle management",
      relevance: "Structured approach to IT operations and service delivery"
    }
  ]

  const achievements = [
    {
      title: "Systems Engineering Lab Portfolio",
      description: "Comprehensive hands-on demonstration of Windows/Linux administration",
      date: "2024"
    },
    {
      title: "Security Automation Scripts",
      description: "PowerShell and Bash scripts for system hardening and monitoring",
      date: "2024"
    },
    {
      title: "Network Security Lab",
      description: "VLAN segmentation and firewall configuration demonstration",
      date: "2024"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Professional development pathway focused on cybersecurity, infrastructure, 
            and skills directly relevant to GCSB's mission.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
              <Award className="mr-3 h-8 w-8" />
              Professional Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-black rounded-lg p-6 card-hover"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-black mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-black text-sm">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      cert.status === 'In Progress' 
                        ? 'bg-black text-white' 
                        : 'bg-white border border-black text-black'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  
                  <p className="text-black text-sm mb-3 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="bg-white border border-black rounded p-3">
                    <p className="text-black text-xs">
                      <strong>GCSB Relevance:</strong> {cert.relevance}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
              <ExternalLink className="mr-3 h-8 w-8" />
              Technical Achievements
            </h3>
            
            <div className="space-y-6 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-black rounded-lg p-6 card-hover"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-black">
                      {achievement.title}
                    </h4>
                    <span className="text-black text-sm flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-black text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-black text-white rounded-lg p-6 text-center"
            >
              <h4 className="text-lg font-bold mb-3">Certification Timeline</h4>
              <p className="text-sm mb-4">
                Strategic certification pathway aligned with GCSB technical requirements
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>CCNAv7 Completion:</span>
                  <span>Q1 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>CompTIA Security+:</span>
                  <span>Q2 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Azure Fundamentals:</span>
                  <span>Q3 2024</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
