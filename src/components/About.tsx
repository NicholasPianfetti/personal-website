'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Cpu, Wrench } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const highlights = [
    {
      icon: Wrench,
      title: 'Mechanical Engineering',
      description: 'Designing and building physical systems with precision and innovation'
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Creating intelligent automation solutions and control systems'
    },
    {
      icon: Cpu,
      title: 'Robotics & Automation',
      description: 'Bridging hardware and software to build autonomous systems'
    }
  ]

  const skills = [
    'Python', 'C++', 'SQL', 'PLC Programming', 'Siemens TIA Portal',
    'Ignition', 'ROS', 'Arduino', 'MATLAB', 'SolidWorks', 'CAD'
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hi, I’m Nicholas, a Mechanical Engineering major at Georgia Tech with a Computer Science minor. I’m passionate about automation and robotics, and I’ve explored that interest through personal projects, research, and industry experience.

              I’m especially drawn to the intersection of hardware and software — where ideas take physical form and you can see the real-world impact of what you build. Looking ahead, I see myself working in automation and eventually creating something of my own.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
