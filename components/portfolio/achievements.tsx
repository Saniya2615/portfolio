'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Medal, Star, Award } from 'lucide-react'

const achievements = [
  {
    title: 'Quiz Competition Winner 2024',
    description: 'Secured first place in the annual inter-college quiz competition, demonstrating strong knowledge and quick thinking.',
    icon: Trophy,
    color: 'from-yellow-500 to-amber-500',
    type: 'Winner',
  },
  {
    title: 'First Place in Moot Court',
    description: 'Won first place in the Moot Court competition, showcasing exceptional argumentation and public speaking skills.',
    icon: Medal,
    color: 'from-blue-500 to-cyan-500',
    type: 'Winner',
  },
  {
    title: 'PRODIGY 2024 Inter College Quiz',
    description: 'Participated and excelled in the prestigious PRODIGY 2024 inter-college quiz championship.',
    icon: Star,
    color: 'from-purple-500 to-pink-500',
    type: 'Participant',
  },
  {
    title: 'Research Paper with BUETA',
    description: 'Presented research paper at BUETA conference, contributing to academic discourse and knowledge sharing.',
    icon: Award,
    color: 'from-green-500 to-emerald-500',
    type: 'Presenter',
  },
  {
    title: 'Second Prize at Surana College',
    description: 'Achieved second prize in the technical competition at Surana College, demonstrating strong technical acumen.',
    icon: Medal,
    color: 'from-orange-500 to-red-500',
    type: 'Runner-up',
  },
  {
    title: 'IT Fest Participation',
    description: 'Active participation in various IT fests and technical events, showcasing enthusiasm for technology.',
    icon: Star,
    color: 'from-teal-500 to-cyan-500',
    type: 'Participant',
  },
]

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
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
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Celebrating milestones and accomplishments throughout my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="h-full p-6 bg-gradient-to-br from-white to-blue-50 dark:from-slate-100 dark:to-blue-100 rounded-2xl border border-blue-200 dark:border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                    {achievement.type}
                  </span>
                </div>

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-2 pr-16">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
