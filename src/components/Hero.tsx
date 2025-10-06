'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [showRestContent, setShowRestContent] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRestContent(true);
    }, 3600);

    return () => clearTimeout(timer);
  }, []);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('nicholasgpianetti@gmail.com');
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const socialLinks = [
    {
      name: 'Resume',
      icon: FileText,
      href: '/Nicholas_Pianfetti_Resume.pdf',
      color: 'hover:bg-cyan-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/nicholas-pianfetti',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/NicholasPianfetti',
      color: 'hover:bg-gray-800'
    },
    {
      name: 'Contact',
      icon: Mail,
      href: 'mailto:nicholasgpianetti@gmail.com',
      color: 'hover:bg-cyan-600'
    }
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-cyan-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image - Left Side - fades in after loading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={showRestContent ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 p-1.5 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src="/Composite Picture.jpeg"
                    alt="Nicholas Pianfetti"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-200 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-300 rounded-full blur-3xl opacity-40"></div>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <div className="flex flex-col space-y-8">
            {/* Name and Title - stays in place after loading animation */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                Nicholas Pianfetti
              </h1>
              <p className="text-xl sm:text-2xl lg:text-xl text-gray-800 font-light">
                Mechanical Engineering | CS Minor @ Georgia Tech
              </p>
            </div>

            {/* Social Links - fade in after loading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showRestContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                const isContact = link.name === 'Contact';

                if (isContact) {
                  return (
                    <motion.button
                      key={link.name}
                      onClick={copyEmailToClipboard}
                      className={`flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-medium transition-all duration-100 hover:shadow-xl hover:from-cyan-600 hover:to-cyan-700`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent size={20} />
                      <span>{link.name}</span>
                    </motion.button>
                  )
                }

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-medium transition-all duration-100 hover:shadow-xl hover:from-cyan-600 hover:to-cyan-700`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <IconComponent size={20} />
                    <span>{link.name}</span>
                  </motion.a>
                )
              })}
            </motion.div>

          </div>
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

        {/* Scroll Indicator - fades in after loading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showRestContent ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center text-cyan-600"
          >
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
