'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Languages as LanguagesIcon } from 'lucide-react'

const languages = [
  { name: 'English', level: 'Professional', proficiency: 90 },
  { name: 'Hindi', level: 'Native', proficiency: 95 },
  { name: 'Kannada', level: 'Native', proficiency: 95 },
  { name: 'Urdu', level: 'Native', proficiency: 95 },
]

export function Languages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Languages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Language <span className="gradient-text">Proficiency</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gradient-to-br from-white to-blue-50 dark:from-slate-100 dark:to-blue-100 rounded-2xl border border-blue-200 dark:border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <LanguagesIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{lang.name}</h3>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              </div>
              
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${lang.proficiency}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
