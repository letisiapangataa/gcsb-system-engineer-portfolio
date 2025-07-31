'use client'

import { motion } from 'framer-motion'
import { Code, Server, Shield, Network, Database, Cloud } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Operating Systems",
      icon: <Server className="h-8 w-8" />,
      skills: [
        { name: "Windows Server 2016/2019/2022", level: 90 },
        { name: "Ubuntu/CentOS Linux", level: 85 },
        { name: "Windows 10/11 Administration", level: 95 },
        { name: "macOS Support", level: 75 }
      ]
    },
    {
      title: "Scripting & Automation",
      icon: <Code className="h-8 w-8" />,
      skills: [
        { name: "PowerShell", level: 90 },
        { name: "Bash Scripting", level: 85 },
        { name: "Python", level: 80 },
        { name: "Batch Scripting", level: 85 }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-8 w-8" />,
      skills: [
        { name: "RBAC Implementation", level: 85 },
        { name: "Threat Modeling", level: 80 },
        { name: "Security Auditing", level: 85 },
        { name: "Compliance Frameworks", level: 75 }
      ]
    },
    {
      title: "Networking",
      icon: <Network className="h-8 w-8" />,
      skills: [
        { name: "TCP/IP Fundamentals", level: 90 },
        { name: "VLAN Configuration", level: 85 },
        { name: "Firewall Management", level: 80 },
        { name: "VPN Implementation", level: 75 }
      ]
    },
    {
      title: "Database Administration",
      icon: <Database className="h-8 w-8" />,
      skills: [
        { name: "SQL Server", level: 85 },
        { name: "MySQL/MariaDB", level: 80 },
        { name: "T-SQL", level: 85 },
        { name: "Performance Tuning", level: 75 }
      ]
    },
    {
      title: "Cloud & Virtualization",
      icon: <Cloud className="h-8 w-8" />,
      skills: [
        { name: "Hyper-V", level: 85 },
        { name: "VMware vSphere", level: 80 },
        { name: "Azure Fundamentals", level: 75 },
        { name: "Docker Containers", level: 70 }
      ]
    }
  ]

  const certifications = [
    "CCNAv7 (In Progress)",
    "CompTIA Security+ (Planned)",
    "Microsoft Azure Fundamentals",
    "ITIL Foundation"
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set in system administration, security, and infrastructure 
            management aligned with GCSB's technical requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-black p-6 card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="text-black mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-black">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-black font-medium">
                        {skill.name}
                      </span>
                      <span className="text-black font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white border border-black rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-black h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg border border-gray-200 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Certifications & Learning Path
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Current & Planned Certifications:</h4>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-black mr-2">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Continuous Learning Focus:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Advanced cybersecurity practices</li>
                <li>• Cloud infrastructure management</li>
                <li>• DevOps and automation tools</li>
                <li>• Threat intelligence and analysis</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
