'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'St Claret College',
    period: '2025 - Present',
    description: 'Currently pursuing advanced studies in computer applications with focus on software development and data analytics.',
    grade: 'Pursuing',
    current: true,
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'St Claret College',
    period: '2022 - 2025',
    description: 'Completed undergraduate studies with strong foundation in programming, databases, and web technologies.',
    grade: 'Completed',
    current: false,
  },
  {
    degree: 'Higher Secondary Education (12th)',
    institution: 'Govt Girls College',
    period: '2020 - 2022',
    description: 'Completed higher secondary education with excellent academic performance.',
    grade: '94%',
    current: false,
  },
  {
    degree: 'Secondary Education (10th)',
    institution: 'BBMP Girls High School',
    period: '2019 - 2020',
    description: 'Strong foundation in academics with outstanding results.',
    grade: '93%',
    current: false,
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            My <span className="gradient-text">Academic Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A timeline of my educational background and academic achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent z-10">
                {edu.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-br from-white to-blue-50 dark:from-slate-100 dark:to-blue-100 rounded-2xl border border-blue-200 dark:border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300"
                >
                  <div className={`flex items-center gap-2 mb-3 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <GraduationCap className="w-5 h-5 text-primary" />
                    {edu.current && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  
                  <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-3 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{edu.description}</p>

                  <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                      {edu.grade}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
