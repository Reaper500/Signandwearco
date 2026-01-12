'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Palette, Code, Briefcase } from 'lucide-react'

const services = [
  {
    title: 'Lighted Signages',
    description: 'Illuminate your brand with stunning LED and neon signage solutions that capture attention day and night.',
    icon: Lightbulb,
    href: '/lighted-signages',
    color: 'bg-yellow-500',
  },
  {
    title: 'Logo & Branding',
    description: 'Create a powerful brand identity that resonates with your audience and sets you apart from competitors.',
    icon: Palette,
    href: '/logo-branding',
    color: 'bg-purple-500',
  },
  {
    title: 'Web Design',
    description: 'Build stunning, responsive websites that convert visitors into customers and drive business growth.',
    icon: Code,
    href: '/web-design',
    color: 'bg-blue-500',
  },
  {
    title: 'Business Consultation',
    description: 'Strategic guidance to help your business grow, scale, and achieve its full potential.',
    icon: Briefcase,
    href: '/business-consultation',
    color: 'bg-green-500',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Transform Your Vision Into
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Reality
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Creative agency specializing in branding, web design, signage, and business strategy.
              We help businesses stand out and succeed.
            </p>
            <Link
              href="#services"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive creative solutions to elevate your brand and drive business success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 h-full border border-gray-200 dark:border-gray-700">
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About jOES Creative Agency
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                With years of experience in the creative industry, we've helped countless businesses
                establish their brand identity and reach their target audience. Our team of talented
                designers, developers, and strategists work together to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                We believe in the power of creativity and innovation. Every project is an opportunity
                to push boundaries and create something truly remarkable.
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video relative rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/about/about-1.jpg"
                  alt="Creative team working together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

