'use client'

import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const apps = [
  {
    id: 'lawaiv2',
    logo: '/images/logos/lawai.png',
    title: 'LawAI v2',
    subtitle: 'Advanced legal automation app with enhanced features and AI capabilities.',
    href: 'https://lawaiv2.ragspro.com',
  },
  {
    id: 'gym-flow',
    logo: '/images/logos/gymflow-website.png',
    title: 'Gym Flow',
    subtitle: 'Fitness tracking and gym management mobile application.',
    href: 'https://gymflow.ragspro.com',
  },
  {
    id: 'api',
    logo: '/images/logos/ragspro.jpg',
    title: 'API',
    subtitle: 'RAGSPRO API - Backend services and automation endpoints.',
    href: 'https://api.ragspro.com',
  },
]

export default function AppStack() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <div className="w-full">
      {/* Section Heading */}
      <motion.h2
        className="text-lg font-semibold text-white mb-4 text-left"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Apps
      </motion.h2>
      
      <motion.div
        className="w-full space-y-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
      {apps.map((app, index) => (
        <motion.div key={app.id} variants={item}>
          <GlassCard
            logo={app.logo}
            title={app.title}
            subtitle={app.subtitle}
            href={app.href}
            delay={0}
          />
        </motion.div>
      ))}
      </motion.div>
    </div>
  )
}
