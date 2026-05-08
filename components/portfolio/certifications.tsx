'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink, Calendar } from 'lucide-react'

const certifications = [
  {
    title: 'Google Digital Marketing',
    issuer: 'Google',
    date: '2024',
    description: 'Comprehensive digital marketing certification covering SEO, SEM, social media marketing, and analytics.',
    color: 'from-blue-500 to-green-500',
  },
  {
    title: 'Microsoft PL-300 & PL-900',
    issuer: 'Microsoft',
    date: '2024',
    description: 'Power BI Data Analyst and Power Platform Fundamentals certifications demonstrating proficiency in Microsoft data tools.',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'MS Excel Certification',
    issuer: 'Microsoft',
    date: '2023',
    description: 'Advanced Excel skills including data analysis, pivot tables, VBA macros, and complex formulas.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Basics of Hardware & Networking',
    issuer: 'Technical Institute',
    date: '2023',
    description: 'Foundational knowledge in computer hardware, networking concepts, and troubleshooting.',
    color: 'from-purple-500 to-pink-500',
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Industry-recognized certifications that validate my skills and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="h-full p-6 bg-gradient-to-br from-white to-blue-50 dark:from-slate-100 dark:to-blue-100 rounded-2xl border border-blue-200 dark:border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Border Top */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`} />

                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1 truncate">{cert.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <span>{cert.issuer}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {cert.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 right-4"
                >
                  <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
