'use client'

import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const cards = [
  // Projects with uploaded logos (top priority)
  {
    id: 'ragspro',
    logo: '/images/logos/ragspro.jpg',
    title: 'RAGSPRO AGENCY',
    subtitle: 'AI Software Agency building intelligent automation solutions for modern businesses.',
    href: 'https://ragspro.com',
  },
  {
    id: 'lawai',
    logo: '/images/logos/lawai.png',
    title: 'LawAI',
    subtitle: 'AI-powered legal automation platform with document processing and workflow management.',
    href: 'https://law-ai-sooty.vercel.app',
  },
  {
    id: 'elitos',
    logo: '/images/logos/elitos.png',
    title: 'Elitos',
    subtitle: 'Premium web application with modern design and seamless user experience.',
    href: 'https://elitos.ragspro.com',
  },
  {
    id: 'babysitter',
    logo: '/images/logos/babysitter.png',
    title: 'Babysitter Delhi',
    subtitle: 'Babysitter and nanny services platform for Delhi NCR region.',
    href: 'https://babysitterdelhi.in',
  },
  {
    id: 'maid-agency',
    logo: '/images/logos/ MaidAgency.png',
    title: 'Maid Agency',
    subtitle: 'Maid Agency Management System - Modern web application for agency management.',
    href: 'https://maid-agency.vercel.app',
  },
  {
    id: 'gymflow-website',
    logo: '/images/logos/gymflow-website.png',
    title: 'GymFlow Website',
    subtitle: 'Modern fitness and gym management website with booking and membership features.',
    href: 'https://gymflow-website.vercel.app',
  },
  {
    id: 'rags-ai-website',
    logo: '/images/logos/rags-ai-website.jpg',
    title: 'RAGS AI Website',
    subtitle: 'Official website for RAGS AI assistant showcasing features and capabilities.',
    href: 'https://rags-ai-website.vercel.app',
  },
  {
    id: 'tennis-website',
    logo: '/images/logos/tennis-website.png',
    title: 'Tennis',
    subtitle: 'Tennis platform with booking and management features.',
    href: 'https://tennis-zeta-eight.vercel.app',
  },
  {
    id: 'lead-genrater',
    logo: '/images/logos/leads.png',
    title: 'Lead Generator',
    subtitle: 'Premium Lead Generation Bot - Fully automatic lead generation & outreach system for international clients.',
    href: 'https://leads.ragspro.com',
  },
  {
    id: 'subtitle',
    logo: '/images/logos/subtital.png',
    title: 'Subtitle',
    subtitle: 'Subtitle generation and editing tool for video content.',
    href: 'https://subtitle-rho.vercel.app',
  },
  {
    id: 'api-key',
    logo: '/images/logos/ragspro.jpg',
    title: 'API Key Manager',
    subtitle: 'Secure API key management system for developers and teams.',
    href: 'https://api-key.vercel.app',
  },
  // Projects without logos - using ragspro logo as placeholder
  {
    id: 'glow',
    logo: '/images/logos/ragspro.jpg',
    title: 'Glow',
    subtitle: 'Modern web application with stunning UI/UX design and advanced animations.',
    href: 'https://glow.ragspro.com',
  },
  {
    id: 'main-project',
    logo: '/images/logos/ragspro.jpg',
    title: 'Main Project',
    subtitle: 'Feature-rich web application with modern tech stack.',
    href: 'https://main-chi-virid.vercel.app',
  },
  {
    id: 'restaurant',
    logo: '/images/logos/ragspro.jpg',
    title: 'Restaurant',
    subtitle: 'Beautiful restaurant website with menu and reservation system.',
    href: 'https://v0-restaurant-website-design-nu-lake.vercel.app',
  },
  {
    id: 'sapd',
    logo: '/images/logos/ragspro.jpg',
    title: 'SAPD',
    subtitle: 'Professional web application with clean design.',
    href: 'https://sapd-eight.vercel.app',
  },
]

export default function CardStack() {
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
        Websites
      </motion.h2>
      
      <motion.div
        className="w-full space-y-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
      {cards.map((card, index) => (
        <motion.div key={card.id} variants={item}>
          <GlassCard
            logo={card.logo}
            title={card.title}
            subtitle={card.subtitle}
            href={card.href}
            delay={0}
          />
        </motion.div>
      ))}
      </motion.div>
    </div>
  )
}
