import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'RAGHAV SHAH (BHUPENDER PRATAP) - AI PRODUCT BUILDER & RAGSPRO FOUNDER',
  description: 'Raghav Shah, also known as Bhupender Pratap, is an AI product builder and founder of RAGSPRO. Building intelligent automation solutions, SaaS platforms, and AI-powered applications. Full-stack developer specializing in Next.js, React, Python, and AI integration.',
  keywords: [
    'Raghav Shah',
    'Bhupender Pratap',
    'RAGSPRO',
    'AI Developer',
    'Full-Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Python Developer',
    'AI Automation',
    'SaaS Developer',
    'AI Product Builder',
    'Automation Solutions',
    'LawAI',
    'RAGS AI',
    'Lead Generation',
    'AI Assistant',
    'Voice AI',
    'Machine Learning',
    'Web Development',
    'Mobile Development',
    'iOS Development',
    'Tech Entrepreneur',
    'Startup Founder',
  ],
  authors: [{ name: 'Raghav Shah', url: 'https://raghav.ragspro.com' }],
  creator: 'Raghav Shah',
  publisher: 'RAGSPRO',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://raghav.ragspro.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raghav.ragspro.com',
    title: 'RAGHAV SHAH (BHUPENDER PRATAP) - AI PRODUCT BUILDER & RAGSPRO FOUNDER',
    description: 'Building intelligent AI products, automation solutions, and SaaS platforms. Founder of RAGSPRO, LawAI, and RAGS AI.',
    siteName: 'Raghav Shah Portfolio',
    images: [{
      url: '/images/raghavimage.PNG',
      width: 1200,
      height: 630,
      alt: 'Raghav Shah - AI Product Builder'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAGHAV SHAH - AI PRODUCT BUILDER & RAGSPRO FOUNDER',
    description: 'Building intelligent AI products and automation solutions.',
    creator: '@raghavshahhh',
    images: ['/images/raghavimage.PNG'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/raghavimage.PNG" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
