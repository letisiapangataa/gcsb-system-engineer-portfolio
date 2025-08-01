'use client'

import { motion } from 'framer-motion'
import { Award, Download, ExternalLink, Calendar } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Developer Associate (AZ-204)",
      status: "In Progress",
      issuer: "Microsoft",
      date: "2025",
      description: "Advanced Azure development skills including compute solutions, storage, security, and monitoring",
      relevance: "Critical for developing secure cloud-native applications and managing Azure infrastructure in government environments"
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      status: "Completed",
      issuer: "Microsoft",
      date: "2024",
      description: "Fundamental knowledge of machine learning and AI concepts on Microsoft Azure",
      relevance: "Essential for understanding AI/ML capabilities that support GCSB's intelligence analysis and automation initiatives"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      status: "Completed",
      issuer: "Microsoft",
      date: "2024",
      description: "Core Azure services, pricing, and support models for cloud computing",
      relevance: "Foundation for cloud infrastructure management and security in modern government IT environments"
    },
    {
      title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
      status: "Completed",
      issuer: "Microsoft",
      date: "2024",
      description: "Security, compliance, and identity concepts across cloud and on-premises environments",
      relevance: "Directly applicable to GCSB's security requirements, compliance frameworks, and identity management protocols"
    },
    {
      title: "Cisco Certified Network Associate v7 (CCNAv7)",
      status: "Completed",
      issuer: "Cisco",
      date: "2024",
      description: "Enterprise networking, security, and automation including IPv4/IPv6, VLANs, and network security",
      relevance: "Essential for securing and managing network infrastructure critical to national security operations"
    },
    {
      title: "ARIS Certificate – Software AG",
      status: "Completed",
      issuer: "Software AG",
      date: "2024",
      description: "Business process modeling and enterprise architecture using ARIS methodology",
      relevance: "Valuable for documenting and optimizing IT processes and security workflows within government frameworks"
    }
  ]

  const achievements = [
    {
      title: "Windows Server Administration Lab",
      description: "Complete Active Directory deployment with PowerShell automation and Group Policy management",
      date: "2023",
      skills: ["Operating Systems", "Scripting & Automation"]
    },
    {
      title: "Linux Infrastructure Automation",
      description: "Ubuntu/CentOS server hardening with Bash scripting and system monitoring implementation",
      date: "2023",
      skills: ["Operating Systems", "Scripting & Automation", "Security & Compliance"]
    },
    {
      title: "Network Security & Compliance Lab",
      description: "Cisco CCNAv7-aligned VLAN segmentation, firewall configuration, and NZISM security frameworks",
      date: "2023",
      skills: ["Networking", "Security & Compliance"]
    },
    {
      title: "Azure Cloud Security Implementation",
      description: "Azure Security Center deployment with Identity & Access Management and threat detection",
      date: "2022",
      skills: ["Cloud & AI Platforms", "Security & Compliance"]
    },
    {
      title: "Database Administration & Monitoring",
      description: "SQL Server and MySQL administration with Python-based performance monitoring dashboards",
      date: "2022",
      skills: ["Enterprise Architecture", "Scripting & Automation"]
    },
    {
      title: "Enterprise Process Modeling",
      description: "ARIS-based business process documentation and system integration architecture design",
      date: "2021",
      skills: ["Enterprise Architecture"]
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
              Technical Achievements & Skills Alignment
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
                  <p className="text-black text-sm leading-relaxed mb-3">
                    {achievement.description}
                  </p>
                  
                  {/* Skills Alignment Tags */}
                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-xs font-semibold text-black mb-2">Aligned Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {achievement.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-black text-white rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
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
                  <span>Dec 2022</span>
                </div>
                <div className="flex justify-between">
                  <span>Azure Fundamentals (AZ-900):</span>
                  <span>May 2023</span>
                </div>
                <div className="flex justify-between">
                  <span>Azure AI Fundamentals (AI-900):</span>
                  <span>Oct 2023</span>
                </div>
                <div className="flex justify-between">
                  <span>Azure Security/Compliance (SC-900):</span>
                  <span>Feb 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>ARIS Certificate:</span>
                  <span>Aug 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Azure Developer Associate (AZ-204):</span>
                  <span className="text-yellow-400">In Progress</span>
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
