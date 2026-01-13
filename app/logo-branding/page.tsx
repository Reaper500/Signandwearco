'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Palette, Brush, Type, Eye, CheckCircle } from 'lucide-react'

const brandingElements = [
	{
		title: 'Logo Design',
		description:
			'Unique, memorable logos that represent your brand identity and values.',
		icon: Brush,
	},
	{
		title: 'Color Palette',
		description:
			'Strategic color choices that evoke emotions and reinforce brand personality.',
		icon: Palette,
	},
	{
		title: 'Typography',
		description:
			'Carefully selected fonts that enhance readability and brand consistency.',
		icon: Type,
	},
	{
		title: 'Visual Identity',
		description:
			'Comprehensive brand guidelines ensuring consistent application across all touchpoints.',
		icon: Eye,
	},
]

const processSteps = [
	{
		step: 1,
		title: 'Discovery',
		description:
			'We learn about your business, target audience, and brand goals through comprehensive research and consultation.',
	},
	{
		step: 2,
		title: 'Strategy',
		description:
			'We develop a brand strategy that defines your unique positioning and messaging framework.',
	},
	{
		step: 3,
		title: 'Design',
		description:
			'Our designers create multiple concepts and refine them based on your feedback and strategic insights.',
	},
	{
		step: 4,
		title: 'Implementation',
		description:
			'We deliver final assets and brand guidelines to ensure consistent application across all platforms.',
	},
]

const brandMockups = [
	{
		id: 1,
		title: 'Corporate Identity',
		category: 'Tech Startup',
		image: '/images/logo-branding/20 Creative Graphic Design Logos_ From Iconic to Vintage.jpg',
	},
	{
		id: 2,
		title: 'Retail Branding',
		category: 'Fashion Brand',
		image: '/images/logo-branding/Christ Lord Savior Svg Png Jpg Instant Download Christian Men T Shirt Women Design___.jpg',
	},
	{
		id: 3,
		title: 'Restaurant Brand',
		category: 'Food & Beverage',
		image: '/images/logo-branding/download (1).jpg',
	},
	{
		id: 4,
		title: 'Healthcare Brand',
		category: 'Medical Practice',
		image: '/images/logo-branding/download (2).jpg',
	},
	{
		id: 5,
		title: 'E-commerce Brand',
		category: 'Online Retail',
		image: '/images/logo-branding/download (3).jpg',
	},
	{
		id: 6,
		title: 'Service Brand',
		category: 'Consulting Firm',
		image: '/images/logo-branding/download (4).jpg',
	},
]

export default function LogoBranding() {
	return (
		<div className="min-h-screen bg-white dark:bg-gray-900">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700 text-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<Palette className="w-16 h-16 mx-auto mb-4" />
						<h1 className="text-4xl sm:text-5xl font-bold mb-4">
							Logo & Branding
						</h1>
						<p className="text-xl max-w-3xl mx-auto text-purple-100">
							Create a powerful brand identity that resonates with your audience
							and sets you apart
							<br className="hidden sm:inline" /> from the competition.
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
							What is Branding?
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
							Branding is more than just a logo—it's the complete identity of your
							business. It encompasses how your company looks, feels, and
							communicates with your audience. A strong brand identity builds
							trust, creates emotional connections, and helps customers remember
							and choose your business over competitors.
						</p>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Your brand identity is your business's personality. It's what makes
							you unique and memorable. Through thoughtful design and strategic
							positioning, we help you create a brand that truly represents who
							you are and resonates with your target audience.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Branding Elements */}
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
							Elements of Branding
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Every component works together to create a cohesive brand identity
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{brandingElements.map((element, index) => (
							<motion.div
								key={element.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
							>
								<div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
									<element.icon className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
									{element.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									{element.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
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
							Our Branding Process
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							A structured approach to creating exceptional brand identities
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{processSteps.map((step, index) => (
							<motion.div
								key={step.step}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="relative"
							>
								<div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
									<div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
										{step.step}
									</div>
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
										{step.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-400">
										{step.description}
									</p>
								</div>
								{index < processSteps.length - 1 && (
									<div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
										<div className="w-8 h-0.5 bg-purple-300"></div>
									</div>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Brand Mockups */}
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
							Brand Portfolio
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Explore our diverse range of branding projects
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{brandMockups.map((item, index) => (
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
										<h3 className="text-xl font-semibold mb-2">
											{item.title}
										</h3>
										<p className="text-sm text-purple-300">
											{item.category}
										</p>
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

