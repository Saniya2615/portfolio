'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Folder } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Linear Regression Project',
    description: 'Machine learning project implementing linear regression algorithms for predictive analysis. Includes data preprocessing, model training, and visualization of results.',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com',
    demo: '#',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for visualizing and analyzing complex datasets. Features dynamic charts, filters, and real-time data updates for business intelligence.',
    tags: ['Python', 'Tableau', 'SQL', 'Data Visualization', 'Analytics'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com',
    demo: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Student Management System',
    description: 'Full-featured student management application with CRUD operations, grade tracking, attendance management, and report generation capabilities.',
    tags: ['Python', 'SQL', 'Database', 'CRUD', 'Reports'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com',
    demo: '#',
    color: 'from-orange-500 to-red-500',
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
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
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my technical projects demonstrating my skills in action
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-white to-blue-50 dark:from-slate-100 dark:to-blue-100 rounded-2xl border border-blue-200 dark:border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 overflow-hidden transition-all duration-300">
                {/* Project Image */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Folder className="w-20 h-20 text-white/30" />
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
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
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
