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
        "Automated alert systems",
        "Custom metrics collection",
        "Historical trend analysis"
      ]
    },
    {
      title: "Database Administration Lab",
      description: "SQL Server and MySQL administration with backup strategies, performance tuning, and security hardening.",
      technologies: ["SQL Server", "MySQL", "T-SQL", "Performance Tuning"],
      icon: <Database className="h-8 w-8" />,
      highlights: [
        "Automated backup and restore procedures",
        "Query optimization and indexing",
        "Security auditing and compliance",
        "High availability configuration"
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
          <h2 className="text-4xl md:text-5xl font-bold text-gcsb-blue mb-6">
            Technical Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Practical demonstrations of system engineering skills through lab environments 
            and real-world scenarios relevant to GCSB operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="text-gcsb-blue mr-3">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-gcsb-blue">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gcsb-blue mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-gcsb-blue px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gcsb-blue hover:text-blue-700 font-semibold flex items-center"
                >
                  View Details
                  <ExternalLink className="ml-1 h-4 w-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Github className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gcsb-blue text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Security-First Approach</h3>
            <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto">
              All projects implement security best practices including least privilege access, 
              regular security auditing, encrypted communications, and comprehensive logging. 
              This approach aligns with GCSB's mission-critical security requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
