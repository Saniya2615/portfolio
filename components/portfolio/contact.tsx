'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Send,
  Mail,
 MapPin,
  Phone,
  Loader2,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { submitContactForm } from '@/lib/supabase'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function Contact() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Invalid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Prevent hanging forever
      await Promise.race([
        submitContactForm(formData),

        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), 10000)
        ),
      ])

      setSubmitStatus('success')

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20"
    >
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Contact
          </span>

          <h2 className="mb-6 text-4xl font-bold">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Have a question or want to work together?
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'saniya7sma@gmail.com',
                href: 'mailto:saniya7sma@gmail.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+91 9341701343',
                href: 'tel:+919341701343',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Bangalore, India',
                href: '#',
              },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:bg-gray-50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <item.icon className="h-5 w-5 text-white" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    {item.label}
                  </p>

                  <p className="font-medium text-gray-900">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              {/* Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Name
                  </label>

                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />

                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>

                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Subject
                </label>

                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />

                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <Textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="min-h-[140px] resize-none"
                />

                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Success */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 rounded-lg bg-green-100 p-4 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  <span>
                    Message sent successfully!
                  </span>
                </div>
              )}

              {/* Error */}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 rounded-lg bg-red-100 p-4 text-red-600">
                  <AlertCircle className="h-5 w-5" />
                  <span>
                    Failed to send message.
                  </span>
                </div>
              )}

              {/* BUTTON FIXED */}
              <Button
                type="submit"
                size="lg"
                disabled={false}
                className="w-full bg-white text-primary hover:bg-white/90 transition-opacity font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Contact Me
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}