'use client'

import { motion } from 'framer-motion'
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Code,
  Database,
  LineChart,
  Cpu,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

const floatingIcons = [
  { Icon: Code, delay: 0, position: 'top-20 left-[10%]' },
  { Icon: Database, delay: 0.5, position: 'top-40 right-[15%]' },
  { Icon: LineChart, delay: 1, position: 'bottom-40 left-[20%]' },
  { Icon: Cpu, delay: 1.5, position: 'bottom-20 right-[10%]' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-primary"
    >
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />

        <div className="absolute bottom-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[500px] md:h-[500px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className={`absolute ${position} hidden md:block`}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay,
            }}
            className="p-4 glass rounded-2xl"
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-white/20 rounded-full"
            >
              Welcome to my portfolio
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              Hi, I&apos;m{' '}
              <span className="text-white">
                Saniya S
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white font-medium mb-4"
            >
              MCA Student | Aspiring Data Analyst & Software Developer
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-white/90 max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              Passionate MCA student with strong interest in Data Science,
              Analytics, and Software Development. Dedicated to building
              impactful solutions and continuously learning emerging
              technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >

              {/* Download Resume Button */}
              <a href="/resume.pdf" download>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 transition-opacity font-semibold"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>

              {/* Contact Button */}
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-8"
            >
              {/* GitHub */}
              <a
                href="https://github.com/Saniya2615/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/saniya-s-6435852b1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>

              {/* Email */}
              <a
                href="mailto:saniya.s@example.com"
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">

              {/* Rotating Gradient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-white/80 to-white p-1"
              >
                <div className="w-full h-full rounded-full bg-primary" />
              </motion.div>

              {/* Profile Image */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center overflow-hidden">
                <img
                  src="/profile-avatar.jpg"
                  alt="Saniya S"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Open to Work Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-white text-primary rounded-full font-semibold"
              >
                <span className="text-sm">
                  Open to Work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="flex flex-col items-center gap-2 text-white"
        >
          <span className="text-sm">
            Scroll Down
          </span>

          <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}