'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Server, Monitor, Database, Lock, Terminal } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Windows Server Lab Environment",
      description: "Complete Active Directory lab with domain controllers, RBAC implementation, and Group Policy automation. Demonstrates Windows administration and security best practices.",
      technologies: ["Windows Server 2022", "Active Directory", "PowerShell", "Group Policy"],
      icon: <Server className="h-8 w-8" />,
      highlights: [
        "Automated user provisioning with PowerShell",
        "RBAC implementation with least privilege",
        "Monitoring and alerting setup",
        "Disaster recovery procedures"
      ]
    },
    {
      title: "Linux Infrastructure Automation",
      description: "Automated Linux server deployment and configuration using Bash scripting and infrastructure as code principles.",
      technologies: ["Ubuntu/CentOS", "Bash", "systemd", "SSH Hardening"],
      icon: <Terminal className="h-8 w-8" />,
      highlights: [
        "Automated server hardening scripts",
        "System monitoring with custom dashboards",
        "Log aggregation and analysis",
        "Backup automation and testing"
      ]
    },
    {
      title: "Network Security Lab",
      description: "Comprehensive network lab demonstrating VLAN segmentation, firewall configuration, and security monitoring aligned with CCNAv7 principles.",
      technologies: ["Cisco Packet Tracer", "pfSense", "Wireshark", "VLAN Config"],
      icon: <Lock className="h-8 w-8" />,
      highlights: [
        "Network segmentation design",
        "Firewall rule optimization",
        "Intrusion detection setup",
        "Traffic analysis and monitoring"
      ]
    },
    {
      title: "System Monitoring Dashboard",
      description: "Custom monitoring solution for infrastructure health, performance metrics, and security events with automated alerting.",
      technologies: ["Python", "Grafana", "InfluxDB", "Prometheus"],
      icon: <Monitor className="h-8 w-8" />,
      highlights: [
        "Real-time performance monitoring",
        "Custom alerting workflows",
        "Historical data analysis",
        "Security event correlation"
      ]
    },
    {
      title: "Database Administration Lab",
      description: "SQL Server and MySQL administration lab focusing on security, backup strategies, and performance optimization.",
      technologies: ["SQL Server", "MySQL", "T-SQL", "Performance Tuning"],
      icon: <Database className="h-8 w-8" />,
      highlights: [
        "Database security hardening",
        "Automated backup solutions",
        "Query optimization techniques",
        "Disaster recovery testing"
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Technical / Systems Projects
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Hands on and practical infrastructure and security projects showcasing practical skills 
            relevant to systems engineering at GCSB.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-black rounded-lg p-8 card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="text-black mr-4">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-black">
                  {project.title}
                </h3>
              </div>

              <p className="text-black mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-black mr-2">•</span>
                      <span className="text-black text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-black pt-6">
                <h4 className="font-semibold text-black mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-black text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
