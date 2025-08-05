'use client'

import { motion } from 'framer-motion'
import { Building, Calendar, MapPin, Users, Award, CheckCircle } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: "Microsoft Corporation",
      role: "Customer Success Account Manager",
      period: "July 2024 - August 2025 (Role impacted by FY26 restructure)",
      location: "New Zealand & Australia",
      type: "Technology Consulting - Public Sector Focus",
      description: "I've had to manage a decent number of accounts relevant to my role level and have documented experience which included supporting digital transformation initiatives for government and public sector clients across New Zealand and Australia, specialising in cloud adoption, AI implementation, and cybersecurity solutions.",
      achievements: [
        "Supported ACC's full-scale adoption of Microsoft 365 Copilot for information workers",
        "Contributed to ACCC's strategic transition from Rapid7 to Microsoft Sentinel for National Anti-Scam Centre",
        "Co-authored MIRP documentation for WetaFX and Weta Workshop national resilience mapping",
        "Contributed to Power Platform Innovators Forum launch for Wellington public sector clients",
        "Participated in AI Halo Sustainability conversations across Asia-Pacific public sector",
        "Supported ECIF governance reviews for public sector transactions in NZ and Australia"
      ],
      technologies: ["Microsoft 365", "Microsoft Copilot", "Microsoft Sentinel", "Azure", "Power Platform", "Security & Compliance"],
      clientImpact: "Supported digital transformation for enterprise accounts, including critical government agencies including ACC and ACCC, with focus on national security, anti-scam operations, and creative sector resilience.",
      securityLevel: "Federal government and national security agency clearance"
    },
    {
      company: "Microsoft Corporation - University of Auckland",
      role: "IT Professional - IT Graduate",
      period: "Professional Development Focus",
      location: "New Zealand",
      type: "Career Advancement & Certification",
      description: "Actively developing specialised expertise in cloud architecture, security frameworks, and compliance requirements relevant for public sector digital transformation.",
      achievements: [
        "Completed Microsoft Azure Fundamentals (AZ-900) certification",
        "Achieved Azure AI Fundamentals (AI-900) certification", 
        "Earned Security, Compliance, and Identity Fundamentals (SC-900)",
        "Successfully completed Cisco CCNAv7 networking certification",
        "Obtained Software AG ARIS business process modeling certificate",
        "Currently pursuing Azure Developer Associate (AZ-204) certification"
      ],
      technologies: ["Microsoft Azure", "Azure AI Services", "Government Cloud", "Compliance Frameworks", "Network Security", "Business Process Modeling"],
      clientImpact: "Building comprehensive technical foundation to support New Zealand government agencies in secure cloud adoption and digital modernization initiatives.",
      securityLevel: "Government security standards and NZISM compliance frameworks"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Public Sector Experience
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Proven experience supporting digital transformation for New Zealand and Australian government agencies, with expertise in cloud adoption, cybersecurity, and AI implementation for public sector clients.
          </p>
        </motion.div>

        {/* Public Sector Experience Timeline */}
        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white border border-black rounded-lg p-8 card-hover">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Building className="h-5 w-5 text-black mr-2" />
                      <h3 className="text-2xl font-bold text-black">{exp.company}</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-black mb-3">{exp.role}</h4>
                    <p className="text-black leading-relaxed mb-4">{exp.description}</p>
                  </div>
                  
                  <div className="lg:ml-8 lg:min-w-[280px]">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-black">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-black">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center text-black">
                        <Users className="h-4 w-4 mr-2" />
                        {exp.type}
                      </div>
                      <div className="flex items-center text-black">
                        <Award className="h-4 w-4 mr-2" />
                        {exp.securityLevel}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold text-black mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-black mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-black text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-black mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-black text-white rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <h5 className="font-semibold text-black mb-2">Client Impact:</h5>
                    <p className="text-black text-sm italic">{exp.clientImpact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Public Sector Client Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-black text-center mb-12">
            Public Sector Client Portfolio
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-black rounded-lg p-6">
              <h4 className="text-xl font-bold text-black mb-4">New Zealand Government Agencies</h4>
              <ul className="space-y-2 text-black">
                <li>• <strong>Accident Compensation Corporation (ACC)</strong> - Microsoft 365 Copilot Implementation</li>
                <li>• <strong>WetaFX and Weta Workshop</strong> - National Resilience Mapping (MIRP)</li>
                <li>• <strong>Victoria University</strong> - Power Platform Innovators Forum</li>
                <li>• <strong>Wellington Public Sector Clients</strong> - AI and Digital Transformation</li>
              </ul>
            </div>
            
            <div className="bg-white border border-black rounded-lg p-6">
              <h4 className="text-xl font-bold text-black mb-4">Australian Federal Government</h4>
              <ul className="space-y-2 text-black">
                <li>• <strong>Australian Competition & Consumer Commission (ACCC)</strong> - Microsoft Sentinel Implementation</li>
                <li>• <strong>National Anti-Scam Centre</strong> - SIEM Platform Transition</li>
                <li>• <strong>Federal Security Operations</strong> - Cybersecurity Solutions</li>
                <li>• <strong>Cross-Regional Governance</strong> - ECIF Compliance Reviews</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Public Sector Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-black text-white rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Public Sector Impact Summary</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">2</div>
              <div className="text-sm">Major Government Agencies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm">Copilot Deployment Success</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">ANZ</div>
              <div className="text-sm">Regional Leadership Recognition</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">SIEM</div>
              <div className="text-sm">National Security Platform</div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-xs text-gray-600">
            Client engagements verified through Microsoft Corporation internal documentation and project records.
          </p>
        </div>

        <div className="flex justify-center mt-6 mb-2">
          <a
            href="/Letisia_Pangataa_FY25_Impact_Review_Microsoft_New_Zealand.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold px-8 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition text-lg"
          >
            View Letisia Pangata'a's FY25 Impact Review (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience
