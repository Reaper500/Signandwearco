'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code, Smartphone, Search, Zap, Shield, Globe } from 'lucide-react'

const features = [
  {
    title: 'Responsive Design',
    description: 'Perfectly optimized for all devices - desktop, tablet, and mobile.',
    icon: Smartphone,
  },
  {
    title: 'SEO Optimized',
    description: 'Built with search engine optimization in mind to improve your visibility.',
    icon: Search,
  },
  {
    title: 'Fast Performance',
    description: 'Lightning-fast loading times that keep visitors engaged.',
    icon: Zap,
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security to protect your data and your customers.',
    icon: Shield,
  },
]

const whyChooseUs = [
  {
    title: 'Custom Solutions',
    description: 'Every website is uniquely designed to match your brand and business needs.',
  },
  {
    title: 'Modern Technology',
    description: 'We use the latest web technologies to ensure your site is future-proof.',
  },
  {
    title: 'Ongoing Support',
    description: 'We provide continuous support and updates to keep your website running smoothly.',
  },
  {
    title: 'Conversion Focused',
    description: 'Designs that not only look great but also drive conversions and sales.',
  },
]

const websiteMockups = [
  { id: 1, title: 'E-commerce Platform', category: 'Online Store', image: '/images/web-design/web-1.jpg' },
  { id: 2, title: 'Corporate Website', category: 'Business', image: '/images/web-design/web-2.jpg' },
  { id: 3, title: 'Portfolio Site', category: 'Creative', image: '/images/web-design/web-3.jpg' },
  { id: 4, title: 'Blog Platform', category: 'Content', image: '/images/web-design/web-4.jpg' },
  { id: 5, title: 'SaaS Dashboard', category: 'Application', image: '/images/web-design/web-5.jpg' },
  { id: 6, title: 'Landing Page', category: 'Marketing', image: '/images/web-design/web-6.jpg' },
]

export default function WebDesign() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-700 dark:to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Code className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Web Design</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Build stunning, responsive websites that convert visitors into customers and drive
              business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Importance of Professional Web Design
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              In today's digital age, your website is often the first impression potential customers
              have of your business. A professionally designed website not only looks great but also
              builds trust, improves user experience, and drives conversions. Your website is your
              24/7 sales representative, working around the clock to attract and engage customers.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A well-designed website is more than just aesthetics—it's a powerful tool for
              communication, brand building, and business growth. We create websites that are not
              only visually appealing but also functional, user-friendly, and optimized for
              performance and search engines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need for a successful online presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We go beyond just building websites—we create digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Mockups */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore some of our recent web design projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteMockups.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-xl shadow-lg aspect-video"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-blue-300">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

