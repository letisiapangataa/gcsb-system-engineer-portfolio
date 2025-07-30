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
      description: "Complete network infrastructure with security controls implementation",
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional development pathway aligned with cybersecurity and infrastructure 
            management excellence required for national security operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Certifications */}
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
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 card-hover"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 mb-2">{cert.issuer}</p>
                      <div className="flex items-center mb-3">
                        <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-600">{cert.date}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      cert.status === 'In Progress' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="bg-black bg-opacity-10 p-3 rounded">
                    <p className="text-black font-medium text-sm">
                      GCSB Relevance: {cert.relevance}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black mb-8">
              Technical Achievements
            </h3>
            
            <div className="space-y-6 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-black">
                      {achievement.title}
                    </h4>
                    <span className="text-gray-500 text-sm">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CV Download */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-black text-white p-6 rounded-lg"
            >
              <h4 className="text-xl font-bold mb-3">
                Complete Professional Profile
              </h4>
              <p className="text-gray-200 mb-4">
                Download my comprehensive CV for detailed information about my 
                technical background, projects, and qualifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV (PDF)
                </motion.a>
                <motion.a
                  href="/portfolio-summary.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Portfolio Summary
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-4">
              Continuous Professional Development
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Committed to ongoing learning and professional development to stay current with 
              evolving cybersecurity threats, infrastructure technologies, and best practices 
              essential for supporting New Zealand's national security objectives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
