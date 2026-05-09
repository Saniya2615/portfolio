'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Users, Zap, Target } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Tech Enthusiast',
    description:
      'Passionate about technology and solving complex problems through innovative solutions.',
  },
  {
    icon: Target,
    title: 'AI & Analytics',
    description:
      'Deep interest in Artificial Intelligence, Data Analytics, and Web Development.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description:
      'Strong teamwork and communication skills developed through collaborative projects.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description:
      'Quick to adapt and actively participate in technical events and learning opportunities.',
  },
]

export function About() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="about"
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Background Blur Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* About Me Badge */}
          <span className="inline-block px-10 py-4 text-3xl md:text-4xl font-bold text-blue-600 bg-blue-100 rounded-full mb-12">
            About Me
          </span>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-6">
            I&apos;m an MCA student who&apos;s curious about technology and how it works. I enjoy learning new tools, creating useful solutions, and exploring different areas of tech. I&apos;m also interested in data science and how data can be used to solve real problems.
          </p>

          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            I believe in continuous learning and applying my skills to projects that create real impact. My passion drives me to stay updated with emerging technologies and contribute meaningfully to the tech community.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="group"
            >
              <div className="h-full p-6 bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-blue-100 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-black">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '3+', label: 'Years Learning' },
            { value: '1+', label: 'Projects Completed' },
            { value: '4+', label: 'Certifications' },
            { value: '6+', label: 'Achievements' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white border border-blue-100 rounded-2xl shadow-sm"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                }}
                className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"
              >
                {stat.value}
              </motion.div>

              <div className="text-sm text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}