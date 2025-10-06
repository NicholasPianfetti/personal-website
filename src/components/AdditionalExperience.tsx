'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Code, Trophy } from 'lucide-react'

export default function AdditionalExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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

  const experiences = [
    {
      icon: Trophy,
      title: 'Pi Tau Sigma Honor Society',
      description: 'Inducted into the prestigious Mechanical Engineering Honor Society for academic excellence.',
      date: '2024',
      technologies: ['Academic Excellence', 'Mechanical Engineering']
    },
    {
      icon: Award,
      title: '1st Place Sustainability Award',
      description: 'Awarded by Georgia Tech Office of Sustainability for the Algae Bloom Clean-Up Robot innovation.',
      date: 'November 2023',
      technologies: ['Sustainability', 'Innovation', 'Engineering Design']
    },
    {
      icon: Users,
      title: 'Wrestling Club VP',
      description: 'Vice President of Internal Affairs for Georgia Tech Wrestling Club, managing 50+ athletes.',
      date: 'May 2024 - January 2025',
      technologies: ['Leadership', 'Team Management', 'Event Planning']
    },
    {
      icon: Code,
      title: 'RoboJackets Team Member',
      description: 'Software team member for Robo-Wrestling, programming autonomous sensor-driven robots.',
      date: 'August 2023 - December 2024',
      technologies: ['Arduino', 'C++', 'Robotics', 'Sensor Integration']
    }
  ]

  return (
    <section id="additional" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
              Additional Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Awards, leadership roles, and achievements that showcase my passion for excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp) => {
              const IconComponent = exp.icon
              return (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
                    whileHover={{ y: -5 }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <IconComponent size={28} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-cyan-600 font-medium">
                            {exp.date}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm font-medium rounded-full border border-cyan-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
