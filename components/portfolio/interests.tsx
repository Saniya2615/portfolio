'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Dumbbell, ChefHat, Laptop } from 'lucide-react'

const interests = [
  {
    name: 'Health & Wellness',
    description: 'Committed to maintaining physical and mental well-being through balanced lifestyle choices.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Yoga',
    description: 'Practicing yoga for flexibility, mindfulness, and inner peace.',
    icon: Dumbbell,
    color: 'from-purple-500 to-violet-500',
  },
  {
    name: 'Cooking',
    description: 'Exploring culinary arts and experimenting with diverse cuisines and flavors.',
    icon: ChefHat,
    color: 'from-orange-500 to-amber-500',
  },
  {
    name: 'Technology',
    description: 'Passionate about exploring new technologies, gadgets, and innovations.',
    icon: Laptop,
    color: 'from-blue-500 to-cyan-500',
  },
]

export function Interests() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Interests
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Beyond <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hobbies and activities that keep me balanced and inspired
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <div className="h-full p-6 bg-gradient-to-br from-white to-blue-50 dark:from-slate-100 dark:to-blue-100 rounded-2xl border border-blue-200 dark:border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 text-center">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${interest.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <interest.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{interest.name}</h3>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
