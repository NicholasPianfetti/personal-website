'use client'

import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, FileText, Menu, X } from 'lucide-react'

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const [showCopied, setShowCopied] = useState(false)

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('nicholasgpianetti@gmail.com')
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 3000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest > window.innerHeight * 0.3)
    })
    return () => unsubscribe()
  }, [scrollY])

  const navItems = [
    { name: 'About', href: '#about'},
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' }
  ]

  const socialLinks = [
    {
      name: 'Resume',
      icon: FileText,
      href: '/Nicholas_Pianfetti_Resume.pdf'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/nicholas-pianfetti'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/NicholasPianfetti'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:nicholasgpianetti@gmail.com'
    }
  ]

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        duration: 0.3,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Name */}
          <motion.button
            onClick={() => scrollToSection('#hero')}
            className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nicholas Pianfetti
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pl-6 border-l border-gray-300">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                const isEmail = link.name === 'Email';

                if (isEmail) {
                  return (
                    <motion.button
                      key={link.name}
                      onClick={copyEmailToClipboard}
                      className="p-2 text-gray-600 hover:text-cyan-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.name}
                    >
                      <IconComponent size={18} />
                    </motion.button>
                  )
                }

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="p-2 text-gray-600 hover:text-cyan-600 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-cyan-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-700 hover:text-cyan-600 transition-colors duration-200 py-2 font-medium"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.button>
            ))}

            <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                const isEmail = link.name === 'Email';

                if (isEmail) {
                  return (
                    <motion.button
                      key={link.name}
                      onClick={copyEmailToClipboard}
                      className="p-2 text-gray-600 hover:text-cyan-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.name}
                    >
                      <IconComponent size={20} />
                    </motion.button>
                  )
                }

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="p-2 text-gray-600 hover:text-cyan-600 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </nav>

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
    </motion.header>
  )
}
