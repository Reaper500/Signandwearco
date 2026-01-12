'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Target, Heart, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

const teamMembers = [
  {
    name: 'John Smith',
    role: 'Creative Director',
    bio: '10+ years of experience in branding and design. Passionate about creating memorable brand experiences.',
    image: '/images/team/team-1.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Web Developer',
    bio: 'Full-stack developer specializing in modern web technologies and user experience design.',
    image: '/images/team/team-2.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Business Strategist',
    bio: 'Strategic consultant helping businesses grow and scale through data-driven insights.',
    image: '/images/team/team-3.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Designer',
    bio: 'Visual designer with expertise in logo design, branding, and digital graphics.',
    image: '/images/team/team-4.jpg',
  },
]

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new creative solutions.',
    icon: Target,
  },
  {
    title: 'Quality',
    description: 'We never compromise on quality and strive for excellence in everything we do.',
    icon: Heart,
  },
  {
    title: 'Collaboration',
    description: 'We believe in working together with our clients to achieve their goals.',
    icon: Users,
  },
]

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-700 dark:to-rose-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Users className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-pink-100">
              Learn about our story, mission, and the talented team behind jOES Creative Agency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                jOES Creative Agency was founded with a simple mission: to help businesses
                transform their visions into reality through creative design and strategic
                thinking. What started as a small team of passionate designers and developers has
                grown into a full-service creative agency serving clients across various industries.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                Over the years, we've had the privilege of working with startups, established
                businesses, and everything in between. Each project has taught us something new and
                reinforced our commitment to delivering exceptional results that drive business
                growth.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Today, we continue to push the boundaries of creativity and innovation, always
                staying ahead of industry trends and technologies to provide our clients with the
                best possible solutions.
              </p>
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
                  src="/images/about/about-2.jpg"
                  alt="Creative workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              To empower businesses with creative solutions that drive growth, build brands, and
              create lasting connections with their audience. We believe that every business,
              regardless of size, deserves access to world-class design and strategic guidance.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our mission is to be more than just a service provider—we aim to be a trusted partner
              in our clients' success, helping them navigate challenges and seize opportunities in
              an ever-evolving marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The talented individuals behind jOES Creative Agency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-pink-600 dark:text-pink-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Work Together */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-700 dark:to-rose-700 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">
              Ready to transform your business? Get in touch with us today and let's discuss how we
              can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>info@joesagency.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>123 Creative St, Design City</span>
              </div>
            </div>
            <Link
              href="/business-consultation"
              className="inline-flex items-center px-8 py-4 bg-white text-pink-600 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

