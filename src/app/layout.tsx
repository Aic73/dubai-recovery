import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/seo'
import { LoadingProvider } from '@/contexts/LoadingContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dubairecovery.com'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  formatDetection: siteConfig.formatDetection,
  category: 'automotive',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Dubai Recovery 24/7 - Professional Car Recovery Services in Dubai',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Additional SEO enhancements
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: '+971-56-344-6682',
    email: 'info@dubairecovery.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE'
    },
    areaServed: 'Dubai',
    serviceType: [
      'Vehicle Towing',
      'Jump Start Service',
      'Tire Change',
      'Fuel Delivery',
      'Lockout Service',
      'Roadside Assistance'
    ],
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '$$'
  }

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}