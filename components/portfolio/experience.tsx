'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import {
  Briefcase,
  Calendar,
  Building2,
  ArrowRight,
  Download,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

const experiences = [

  // CAPGEMINI
  {
    title: 'AI for Skilling Program Trainee',
    company: 'Capgemini',
    period: '2024',
    type: 'Training Program',

    description:
      'Successfully completed the Digital Academy Training Program under Capgemini AI for Skilling initiative, gaining practical exposure to industry-oriented technologies and professional development.',

    highlights: [
      'AI for Skilling Program',
      'Professional Development',
      'Industry Training',
      'Technical Skill Enhancement',
    ],

    current: false,

    certificate: '/capgemini.png',
  },

  // ZIDIO
  {
    title: 'Data Science & Analytics Intern',
    company: 'Zidio Development',
    period: '2025',
    type: 'Internship',

    description:
      'Working on data science and analytics projects, applying machine learning techniques and data visualization skills to real-world problems.',

    highlights: [
      'Data Analysis & Visualization',
      'Machine Learning Projects',
      'Python & SQL',
      'Dashboard Development',
    ],

    current: true,

    certificate: '',
  },

  // NEED BASE INDIA
  {
    title: 'Intern',
    company: 'Need Base India',
    period: '2022 - 2023',
    type: 'Internship',

    description:
      'Gained valuable experience in teamwork, communication, and understanding organizational workflow in a professional environment.',

    highlights: [
      'Team Collaboration',
      'Communication Skills',
      'Organizational Workflow',
      'Professional Development',
    ],

    current: false,

    certificate: '/needbase.png',
  },
]

export function Experience() {

  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="experience"
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white"
    >

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <span className="inline-block px-5 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
            Experience
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            My <span className="text-blue-600">Work Experience</span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Professional experiences that have shaped my skills and career path
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {experiences.map((exp, index) => (

            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{ y: -5 }}
              className="group"
            >

              <div className="h-full p-8 bg-white rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 relative overflow-hidden">

                {/* Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400" />

                {/* Icon */}
                <div className="flex items-start justify-between mb-6">

                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>

                  {exp.current && (
                    <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {exp.title}
                </h3>

                {/* Company + Date */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">

                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </span>

                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-6">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">

                  {exp.highlights.map((highlight, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <ArrowRight className="w-4 h-4 text-blue-500" />

                      <span>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Certificate Button */}
                {exp.certificate && (

                  <div className="mt-6">

                    <a
                      href={exp.certificate}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">

                        <Download className="w-4 h-4 mr-2" />

                        View Certificate

                      </Button>
                    </a>
                  </div>
                )}

                {/* Type Badge */}
                <div className="mt-6 pt-4 border-t border-blue-100">

                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
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