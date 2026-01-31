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
  title: 'Raghav Shah - AI Product Builder & Founder',
  description: 'Founder of RAGSPRO. Building intelligent AI products and automation solutions. Full-stack developer specializing in Next.js, React, Python, and AI integration.',
  keywords: ['AI Developer', 'Full-Stack Developer', 'Next.js', 'React', 'Python', 'AI Automation', 'Raghav Shah', 'Bhupender Pratap'],
  authors: [{ name: 'Raghav Shah' }],
  creator: 'Raghav Shah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raghav.ragspro.com',
    title: 'Raghav Shah (Bhupender) - AI Product Builder',
    description: 'Building intelligent AI products and automation solutions. Founder of RAGSPRO.',
    siteName: 'Raghav Shah Portfolio',
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Raghav Shah Portfolio'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raghav Shah - AI Product Builder',
    description: 'Building intelligent AI products and automation solutions.',
    images: ['/images/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
