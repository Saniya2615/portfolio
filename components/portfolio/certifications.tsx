'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Download } from 'lucide-react'

import googleLogo from '@/public/google.png'
import microsoftLogo from '@/public/microsoft.png'
import hardwareLogo from '@/public/hardware.png'

const certifications = [
  {
    title: 'Google Digital Marketing',
    issuer: 'Google',
    date: '2024',
    description:
      'Comprehensive digital marketing certification covering SEO, SEM, social media marketing, and analytics.',
    color: 'from-blue-500 to-green-500',
    image: googleLogo,
    downloadFile: '/google.png',
  },
  {
    title: 'Microsoft PL-300 & PL-900',
    issuer: 'Microsoft',
    date: '2024',
    description:
      'Power BI Data Analyst and Power Platform Fundamentals certifications.',
    color: 'from-orange-500 to-red-500',
    image: microsoftLogo,
    downloadFile: '/microsoft.png',
  },
  {
    title: 'MS Excel Certification',
    issuer: 'Microsoft',
    date: '2023',
    description:
      'Advanced Excel skills including data analysis and pivot tables.',
    color: 'from-green-500 to-emerald-500',
    image: microsoftLogo,
    comingSoon: true,
  },
  {
    title: 'Basics of Hardware & Networking',
    issuer: 'Technical Institute',
    date: '2023',
    description:
      'Foundational knowledge in computer hardware and networking.',
    color: 'from-purple-500 to-pink-500',
    image: hardwareLogo,
    downloadFile: '/hardware.png',
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

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Certifications
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Certifications</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Industry-recognized certifications that validate my skills and
            expertise
          </p>
        </motion.div>

        {/* Certification Cards */}
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
              <div className="h-full p-6 bg-white dark:bg-slate-900 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 relative overflow-hidden">

                {/* Top Gradient Border */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`}
                />

                {/* Card Content */}
                <div className="flex items-start gap-4">
                  
                  {/* Logo */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border bg-white flex items-center justify-center">
                    <img
                      src={cert.image.src}
                      alt={cert.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      {cert.title}
                    </h3>

                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <span>{cert.issuer}</span>

                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>

                    {/* Download Button */}
                    <div className="mt-4 flex justify-end">
                      {cert.comingSoon ? (
                        <button
                          disabled
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-400 text-white rounded-lg cursor-not-allowed"
                        >
                          <Download className="w-4 h-4" />
                          Coming Soon
                        </button>
                      ) : (
                        <a
                          href={cert.downloadFile}
                          download
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:opacity-90 transition"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}