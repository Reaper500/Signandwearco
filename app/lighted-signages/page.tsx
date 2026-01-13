'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Lightbulb, Zap, Sun, Moon } from 'lucide-react'

const signageTypes = [
	{
		title: 'LED Signages',
		description:
			'Energy-efficient, bright, and long-lasting LED signs perfect for indoor and outdoor use.',
		icon: Zap,
		features: [
			'Low power consumption',
			'Bright visibility',
			'Weather resistant',
			'Customizable colors',
		],
		image: '/images/lighted-signages/update/WhatsApp%20Image%202026-01-12%20at%208.03.05%20PM.jpeg',
	},
	{
		title: 'Neon Signages',
		description:
			'Classic, vibrant neon signs that add a retro-modern touch to any space.',
		icon: Sun,
		features: [
			'Vibrant colors',
			'Eye-catching design',
			'Retro aesthetic',
			'Custom shapes',
		],
		image: '/images/lighted-signages/update/WhatsApp%20Image%202026-01-12%20at%208.03.06%20PM%20(1).jpeg',
	},
	{
		title: 'Backlit Signages',
		description:
			'Professional backlit signs that provide excellent visibility and a premium look.',
		icon: Moon,
		features: [
			'Professional appearance',
			'High visibility',
			'Durable materials',
			'Easy maintenance',
		],
		image: '/images/lighted-signages/update/WhatsApp%20Image%202026-01-12%20at%208.03.07%20PM.jpeg',
	},
]

const galleryItems = [
	{
		id: 1,
		title: 'Retail Store Signage',
		category: 'LED',
		image: '/images/lighted-signages/update/WhatsApp%20Image%202026-01-12%20at%208.03.08%20PM%20(2).jpeg',
	},
	{
		id: 2,
		title: 'Restaurant Neon Sign',
		category: 'Neon',
		image: '/images/lighted-signages/update/WhatsApp%20Image%202026-01-12%20at%208.03.09%20PM.jpeg',
	},
	{
		id: 3,
		title: 'Office Building Sign',
		category: 'Backlit',
		image: '/images/lighted-signages/update/WhatsApp%20Image%202026-01-12%20at%208.03.10%20PM%20(1).jpeg',
	},
	{
		id: 4,
		title: 'Event Venue Lighting',
		category: 'LED',
		image: '/images/lighted-signages/update/WhatsApp%20Image%202026-01-12%20at%208.03.10%20PM%20(2).jpeg',
	},
	{
		id: 5,
		title: 'Boutique Store Sign',
		category: 'Neon',
		image: '/images/lighted-signages/update/WhatsApp%20Image%202026-01-12%20at%208.03.14%20PM.jpeg',
	},
	{
		id: 6,
		title: 'Hospitality Signage',
		category: 'Backlit',
		image: '/images/lighted-signages/update/WhatsApp%20Image%202026-01-12%20at%208.03.16%20PM%20(1).jpeg',
	},
]

export default function LightedSignages() {
	return (
		<div className="min-h-screen bg-white dark:bg-gray-900">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-600 dark:to-orange-700 text-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<Lightbulb className="w-16 h-16 mx-auto mb-4" />
						<h1 className="text-4xl sm:text-5xl font-bold mb-4">
							Lighted Signages
						</h1>
						<p className="text-xl max-w-3xl mx-auto text-yellow-100">
							Illuminate your brand presence with stunning lighted signages that
							capture attention and enhance visibility both day and night.
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
							Why Lighted Signages Matter
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
							In today's competitive market, visibility is key to success. Lighted
							signages not only make your business stand out but also create a
							memorable first impression. Whether you're operating during the day
							or night, well-designed illuminated signs ensure your brand is
							always visible to potential customers.
						</p>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							From small retail stores to large corporate buildings, lighted
							signages serve as powerful marketing tools that enhance brand
							recognition and drive foot traffic. They communicate
							professionalism, attract attention, and reinforce your brand
							identity.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Types of Signages */}
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
							Types of Lighted Signages
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Choose the perfect lighting solution for your business
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{signageTypes.map((type, index) => (
							<motion.div
								key={type.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
							>
								<div className="relative h-48 w-full">
									<Image
										src={type.image}
										alt={type.title}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 33vw"
									/>
								</div>
								<div className="p-6">
									<div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
										<type.icon className="w-6 h-6 text-white" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
										{type.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-400 mb-4">
										{type.description}
									</p>
									<ul className="space-y-2">
										{type.features.map((feature) => (
											<li
												key={feature}
												className="flex items-center text-sm text-gray-600 dark:text-gray-400"
											>
												<span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
												{feature}
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Gallery */}
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
							Our Work
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Explore some of our recent lighted signage projects
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{galleryItems.map((item, index) => (
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
										<p className="text-sm text-yellow-300">
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

