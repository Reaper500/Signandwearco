'use client'

import { motion } from 'framer-motion'
import { Briefcase, Target, TrendingUp, BarChart, Users, Lightbulb, Star, Quote } from 'lucide-react'

const services = [
  {
    title: 'Strategy Development',
    description: 'Comprehensive business strategies tailored to your goals and market position.',
    icon: Target,
  },
  {
    title: 'Market Analysis',
    description: 'In-depth market research to identify opportunities and competitive advantages.',
    icon: BarChart,
  },
  {
    title: 'Growth Planning',
    description: 'Roadmaps and action plans to scale your business sustainably.',
    icon: TrendingUp,
  },
  {
    title: 'Team Building',
    description: 'Guidance on building and managing high-performing teams.',
    icon: Users,
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Tech Innovations Inc.',
    role: 'CEO',
    content: 'jOES helped us transform our business strategy and achieve 300% growth in just one year. Their expertise and guidance were invaluable.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'Retail Solutions',
    role: 'Founder',
    content: 'The consultation services provided by jOES gave us clarity and direction. We now have a clear path to success and the tools to achieve it.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    company: 'Creative Studios',
    role: 'Director',
    content: 'Working with jOES was a game-changer. Their strategic insights helped us reposition our brand and reach new markets effectively.',
    rating: 5,
  },
]

const successStories = [
  {
    title: 'Startup Scaling',
    description: 'Helped a tech startup scale from 5 to 50 employees in 18 months.',
    metric: '10x Growth',
  },
  {
    title: 'Market Expansion',
    description: 'Guided a retail business to expand into 3 new markets successfully.',
    metric: '3 New Markets',
  },
  {
    title: 'Revenue Increase',
    description: 'Developed strategies that increased client revenue by 250% in one year.',
    metric: '250% Increase',
  },
]

export default function BusinessConsultation() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-700 dark:to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Briefcase className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Business Consultation</h1>
            <p className="text-xl max-w-3xl mx-auto text-green-100">
              Strategic guidance to help your business grow, scale, and achieve its full potential.
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
              What is Business Consultation?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Business consultation is a strategic partnership that helps companies identify
              opportunities, overcome challenges, and achieve their goals. Our consultants work
              closely with you to understand your business, analyze your market, and develop
              actionable strategies for growth and success.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Whether you're a startup looking to establish your presence, a growing business
              seeking to scale, or an established company aiming to optimize operations, our
              consultation services provide the expertise and insights you need to thrive in
              today's competitive landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              Our Consultation Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive solutions to drive your business forward
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
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Real results from our consultation services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-700 dark:to-emerald-800 rounded-xl p-6 text-white shadow-lg"
              >
                <div className="text-3xl font-bold mb-2">{story.metric}</div>
                <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
                <p className="text-green-100">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hear from businesses we've helped succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <Quote className="w-8 h-8 text-green-500 mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
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

