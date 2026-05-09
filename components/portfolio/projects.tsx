'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import {
  Github,
  ExternalLink,
  Folder,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Claret Recruitment Portal',

    description:
      'A faculty recruitment portal developed for St. Claret College using Flask, MySQL, HTML, CSS, and JavaScript. Features include candidate application forms, admin panel, login system, and department-wise recruitment management.',

    tags: [
      'Flask',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
    ],

    image: '/placeholder-project.jpg',

    github:
      'https://github.com/Saniya2615/Linear-Regression',

    demo:
      'http://localhost/stclaret_portal/stclaret_portal/',

    color: 'from-blue-500 to-cyan-500',
  },
]

export function Projects() {

  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="projects"
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
            Projects
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Featured <span className="text-blue-600">Projects</span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A showcase of my technical projects demonstrating my skills in action
          </p>
        </motion.div>

        {/* Project Card */}
        <div className="flex justify-center">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="group w-full max-w-xl"
            >

              <div className="h-full bg-white rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-100 overflow-hidden transition-all duration-300">

                {/* Top Section */}
                <div
                  className={`h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >

                  <div className="absolute inset-0 flex items-center justify-center">

                    <Folder className="w-24 h-24 text-white/30" />

                  </div>

                  {/* Hover Buttons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                  >

                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>

                    {/* Demo */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-3 text-black group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">

                    {/* Code */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-blue-200 hover:bg-blue-50"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>

                    {/* Demo */}
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className="text-center mt-12"
        >

          <Button
            variant="outline"
            size="lg"
            className="border-blue-200 hover:bg-blue-50"
            asChild
          >
            <a
              href="https://github.com/Saniya2615/Linear-Regression"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />

              View Project on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}