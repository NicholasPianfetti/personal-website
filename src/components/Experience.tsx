'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface ExperienceItem {
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  link?: string
  logo?: string
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [showCopied, setShowCopied] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      }
    }
  }

  const experiences: ExperienceItem[] = [
    {
      company: 'Tesla Inc.',
      position: 'Manufacturing Controls Engineering Intern',
      duration: 'Jan 2025 - Aug 2025',
      location: 'Austin, TX',
      description: [
        'Integrated 30+ HMIs into Giga-Press systems and deployed real-time material tracking for $10M+ in production materials',
        'Optimized high-frequency data pipelines and built analytics dashboards quantifying $2M+ in recycled aluminum savings'
      ],
      technologies: ['Siemens TIA Portal', 'Ignition', 'SQL', 'PLC Programming'],
      link: 'https://tesla.com',
      logo: '/tesla-logo.jpg'
    },
    {
      company: 'Advanced Controls Research Laboratory',
      position: 'Undergraduate Research Assistant',
      duration: 'May 2024 - Aug 2024',
      location: 'Champaign, IL',
      description: [
        'Simulated emergency landing algorithms for tricopter UAVs using ArduPilot SITL and Gazebo',
        'Automated 6-step UAV simulation setup, reducing preparation time by 90% with Python/ROS scripting'
      ],
      technologies: ['Python', 'ROS', 'ArduPilot', 'Gazebo'],
      link: 'https://illinois.edu',
      logo: '/uiuc-logo.png'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional experience in automation, robotics, and controls engineering
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 overflow-hidden"
                  whileHover={{ y: -3 }}
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500"></div>

                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-start">
                      <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center border border-gray-200 shadow-sm p-2 overflow-hidden">
                        {exp.logo ? (
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={24}
                            height={24}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-2xl font-bold text-cyan-600">
                            {exp.company.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-3">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-base font-semibold text-cyan-600">
                            {exp.link ? (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-700 flex items-center gap-1 transition-colors"
                              >
                                {exp.company}
                                <ExternalLink size={14} />
                              </a>
                            ) : (
                              exp.company
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm text-gray-600 sm:text-right">
                          <div className="flex items-center gap-1.5 sm:justify-end">
                            <Calendar size={14} className="text-cyan-500" />
                            <span className="font-medium">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5 sm:justify-end">
                            <MapPin size={14} className="text-cyan-500" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-1.5">
                        {exp.description.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-2 text-gray-700 text-sm">
                            <div className="mt-1.5 w-1 h-1 bg-cyan-500 rounded-full flex-shrink-0"></div>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 text-xs font-medium rounded-full border border-cyan-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Toast notification - fixed bottom right */}
      {showCopied && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-white border-2 border-cyan-500 rounded-xl shadow-2xl"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Email copied!</p>
            <p className="text-xs text-gray-600">nicholasgpianetti@gmail.com</p>
          </div>
        </motion.div>
      )}
    </section>
  )
}
