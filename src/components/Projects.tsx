'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

interface Project {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  category: string
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      }
    }
  }

  const projects: Project[] = [
    {
      title: 'Local AI Data Governor',
      description: 'A local-first AI data governor that integrates open-source LLMs with cloud-hosted models to ensure secure handling of sensitive data.',
      longDescription: 'Developed a comprehensive AI data governance solution that seamlessly integrates local open-source LLMs with cloud-hosted models. The system ensures secure handling of sensitive data while providing unified access to both local and cloud AI capabilities. Built with a modern tech stack featuring real-time conversational UI and scalable subscription management.',
      technologies: ['React', 'Electron', 'Firebase', 'Stripe API', 'OpenAI API', 'TypeScript'],
      category: 'AI/ML'
    },
    {
      title: 'Autonomous Robot Development',
      description: 'Designed and prototyped a fully autonomous robot to execute predefined mechanical tasks with sensing and actuation.',
      longDescription: 'Engineered a comprehensive autonomous robotics solution capable of executing complex mechanical tasks without human intervention. The robot integrates multiple sensor types for environmental awareness and precise pneumatic actuation systems for task execution. Documented the entire design process following rigorous engineering standards with detailed CAD modeling and system-level analysis.',
      technologies: ['Arduino', 'Pneumatic Systems', 'C++', 'CAD', 'Sensor Integration', 'Motor Control'],
      category: 'Robotics'
    },
    {
      title: 'Algae Bloom Clean-Up Robot',
      description: 'Award-winning autonomous robot designed to remove harmful algae in fish farms, promoting sustainable aquaculture.',
      longDescription: 'Designed an innovative autonomous robotic solution to address harmful algae blooms in aquaculture environments. The robot autonomously navigates fish farm environments and removes algae to improve water quality and promote sustainable farming practices. This project earned 1st Place in Sustainability of Engineering Design from the Georgia Tech Office of Sustainability, demonstrating its potential impact on global food security.',
      technologies: ['CAD Design', '3D Printing', 'Autonomous Navigation', 'Environmental Sensors', 'SolidWorks'],
      category: 'Sustainability'
    },
    {
      title: 'Tesla Material Tracking System',
      description: 'Real-time web and mobile application system for tracking $10M+ of production materials in Tesla manufacturing.',
      longDescription: 'Designed and deployed a comprehensive material tracking system that revolutionized inventory management at Tesla\'s Austin facility. The system replaced manual logging processes with real-time web and mobile Ignition applications, providing improved traceability for 100+ employees. The solution automated tracking of quantity and type for over $10 million worth of production materials, significantly improving operational efficiency and accuracy.',
      technologies: ['Ignition', 'SQL', 'Web Development', 'Mobile Apps', 'Database Design', 'Manufacturing Systems'],
      category: 'Industrial'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my work in robotics, automation, and software development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 overflow-hidden cursor-pointer"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>

                  {/* Category badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-xs font-bold rounded-full shadow-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative space-y-4">
                    {/* Project icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles size={24} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded-full border border-cyan-100"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-cyan-600 p-6 rounded-t-2xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-3xl font-bold text-white mt-3">
                        {selectedProject.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                    >
                      <span className="text-2xl">×</span>
                    </button>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full text-sm font-medium border border-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        View Code
                      </motion.a>
                    )}
                    {selectedProject.liveUrl && (
                      <motion.a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        View Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
