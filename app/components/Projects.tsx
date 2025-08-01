'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Server, Monitor, Database, Lock, Terminal, BarChart3, Bot } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Windows Server Lab Environment",
      description: "Complete Active Directory lab with domain controllers, RBAC implementation, and Group Policy automation. Demonstrates Windows administration and security best practices.",
      technologies: ["Windows Server 2022", "Active Directory", "PowerShell", "Group Policy"],
      icon: <Server className="h-8 w-8" />,
      githubUrl: "https://github.com/letisiapangataa/windows-server-lab", // Add your GitHub link here
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
      githubUrl: "https://github.com/letisiapangataa/linux-infra-automation-lab", // Add your GitHub link here
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
      githubUrl: "https://github.com/letisiapangataa/network-security-lab-ccnav7", // Add your GitHub link here
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
      githubUrl: "https://github.com/letisiapangataa/system-monitoring-dashboard", // Add your GitHub link here
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
      githubUrl: "https://github.com/letisiapangataa/database-administration-lab", // Add your GitHub link here
      highlights: [
        "Database security hardening",
        "Automated backup solutions",
        "Query optimization techniques",
        "Disaster recovery testing"
      ]
    },
    {
      title: "Retail Analytics Dashboard",
      description: "Built an end-to-end analytics pipeline to visualize product performance and sales trends with comprehensive data insights.",
      technologies: ["Azure SQL", "Power BI", "Python", "Power Automate"],
      icon: <BarChart3 className="h-8 w-8" />,
      githubUrl: "https://github.com/letisiapangataa/retail-analytics-dashboard",
      highlights: [
        "Data ingestion and transformation using Python",
        "Power BI dashboards with filters and KPIs",
        "Scheduled refresh using Power Automate",
        "End-to-end analytics pipeline implementation"
      ]
    },
    {
      title: "AI Chatbot for Student Support", 
      description: "Developed a Q&A chatbot to support student queries using Azure AI services with intelligent response capabilities.",
      technologies: ["Azure Bot Framework", "QnA Maker", "HTML/CSS", "Azure AI Services"],
      icon: <Bot className="h-8 w-8" />,
      githubUrl: "https://github.com/letisiapangataa/student-support-chatbot",
      highlights: [
        "Azure Bot Service integration",
        "QnA Maker knowledge base implementation",
        "Embedded in front-end HTML portal",
        "Intelligent query processing and response"
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
            potentially relevant to systems engineering role at GCSB.
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

              <div className="border-t border-black pt-6 mb-6">
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

              {/* GitHub Link Section */}
              <div className="border-t border-black pt-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-black">View Code:</h4>
                  {project.githubUrl ? (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">GitHub</span>
                    </motion.a>
                  ) : (
                    <div className="bg-white border border-black px-4 py-2 rounded-lg">
                      <span className="text-black text-sm">Repository Coming Soon</span>
                    </div>
                  )}
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
