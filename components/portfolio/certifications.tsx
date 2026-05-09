'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Download } from 'lucide-react'

import googleLogo from '@/public/google.png'
import microsoftLogo from '@/public/microsoft.png'
import hardwareLogo from '@/public/hardware.png'
import mongoLogo from '@/public/mongo.png'

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
    comingSoon: false,
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
    comingSoon: false,
  },
  {
    title: 'MongoDB Certification',
    issuer: 'MongoDB',
    date: '2024',
    description:
      'Database design and management with MongoDB, NoSQL fundamentals.',
    color: 'from-green-500 to-teal-500',
    image: mongoLogo,
    downloadFile: '/mongo.png',
    comingSoon: false,
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
    comingSoon: false,
  },
]

export function Certifications() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Certifications
          </span>

          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Professional{' '}
            <span className="gradient-text">
              Certifications
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Industry-recognized certifications that validate my skills and
            expertise
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="group"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-xl dark:bg-slate-900">

                {/* Top Border */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${cert.color}`}
                />

                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-white">
                    <img
                      src={cert.image.src}
                      alt={cert.title}
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-semibold">
                      {cert.title}
                    </h3>

                    <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>

                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {cert.date}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>

                    {/* Button */}
                    <div className="mt-5 flex justify-end">
                      {cert.comingSoon ? (
                        <button
                          disabled
                          className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-gray-400 px-4 py-2 text-sm font-medium text-white"
                        >
                          <Download className="h-4 w-4" />
                          Coming Soon
                        </button>
                      ) : (
                        <a
                          href={cert.downloadFile}
                          download
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-lg
                            bg-primary
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-white
                            transition
                            hover:opacity-90
                          "
                        >
                          <Download className="h-4 w-4" />
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