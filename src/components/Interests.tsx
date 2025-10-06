'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Code, Trophy, Gamepad2, Book, Award } from 'lucide-react'

export default function Interests() {
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
      }
    }
  }

  const interests = [
    {
      icon: Users,
      title: 'Wrestling',
      description: 'Competing and leading as VP of Internal Affairs for Georgia Tech Wrestling Club',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Robotics',
      description: 'Building autonomous robots and competing in robotic wrestling competitions',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Trophy,
      title: 'Sustainability',
      description: 'Developing engineering solutions for environmental challenges',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Gamepad2,
      title: 'Automation',
      description: 'Exploring industrial automation and control systems',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Book,
      title: 'Engineering Design',
      description: 'CAD modeling, 3D printing, and mechanical prototyping',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Award,
      title: 'Leadership',
      description: 'Leading teams and fostering inclusive community environments',
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
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
              Interests & Hobbies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When I'm not coding, here are some of the things that keep me inspired and motivated
            </p>
          </motion.div>

          {/* Interests Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest) => {
              const IconComponent = interest.icon
              return (
                <motion.div
                  key={interest.title}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                    <div className="space-y-4 text-center">
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${interest.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {interest.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
