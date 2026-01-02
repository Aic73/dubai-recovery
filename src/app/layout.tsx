import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/seo'
import { LoadingProvider } from '@/contexts/LoadingContext'
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: false, // ⬅️ ADD THIS LINE - Prevents build-time fetch
  fallback: ['system-ui', 'arial'] // ⬅️ ADD THIS LINE - Fallback fonts
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: false, // ⬅️ ADD THIS LINE
  fallback: ['system-ui', 'arial'] // ⬅️ ADD THIS LINE
})

export const metadata: Metadata = {
  metadataBase: new URL('https://crystalrecovery.com'),
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

  // Updated favicon configuration to match your actual files
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
  },

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
        alt: 'Crystal Recovery Service - Professional Car Recovery Services in Dubai',
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


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#2563eb',
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
    email: 'info@CrystalRecovery.com',
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

        <meta name="google-site-verification" content="googleec5694784dcd2d8b" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Additional favicon links for better browser support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased">
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}