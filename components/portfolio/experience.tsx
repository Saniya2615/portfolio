'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, Building2, ArrowRight } from 'lucide-react'

const experiences = [

  {
    
    title: 'Data Science & Analytics Intern',
    company: 'Zidio Development',
    period: '2025',
    type: 'Internship',
    description: 'Working on data science and analytics projects, applying machine learning techniques and data visualization skills to real-world problems.',
    highlights: [
      'Data Analysis & Visualization',
      'Machine Learning Projects',
      'Python & SQL',
      'Dashboard Development',
    ],
    current: false,
  },
  {
    title: 'Intern',
    company: 'Need Base India',
    period: '2022 - 2023',
    type: 'Internship',
    description: 'Gained valuable experience in teamwork, communication, and understanding organizational workflow in a professional environment.',
    highlights: [
      'Team Collaboration',
      'Communication Skills',
      'Organizational Workflow',
      'Professional Development',
    ],
    current: false,
  },
  
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            My <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional experiences that have shaped my skills and career path
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full p-8 bg-gradient-to-br from-white to-blue-50 dark:from-slate-100 dark:to-blue-100 rounded-2xl border border-blue-200 dark:border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />

                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-7 h-7 text-primary-foreground" />
                  </div>
                  {exp.current && (
                    <span className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-500 rounded-full flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">{exp.description}</p>

                <div className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {exp.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
