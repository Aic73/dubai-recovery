// src/components/HeroSection.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

export interface Slide {
  id: number
  image: string
  mobileImage?: string
  alt: string
  title: string
  description: string
}

interface HeroSectionProps {
  slides?: Slide[]
  phoneNumber?: string
  whatsAppUrl?: string
  mobileImageMap?: Record<string, string>
  autoPlayInterval?: number
}

// Default slides data
const defaultSlides: Slide[] = [
  {
    id: 1,
    image: "/images/hero/slide-1.webp",
    mobileImage: "/images/hero/slide-1-mobile.webp",
    alt: "24/7 emergency car recovery service in Dubai with professional tow truck",
    title: "24/7 Emergency Car Recovery in Dubai",
    description: "Fast response across all Dubai areas"
  },
  {
    id: 2,
    image: "/images/hero/slide-2.webp",
    mobileImage: "/images/hero/slide-2-mobile.webp",
    alt: "Professional car towing service on Sheikh Zayed Road Dubai",
    title: "Professional Towing Services",
    description: "Safe and reliable vehicle transport"
  },
  {
    id: 3,
    image: "/images/hero/slide-3.webp",
    mobileImage: "/images/hero/slide-3-mobile.webp",
    title: "Roadside Assistance Experts",
    description: "Jump starts, tire changes, fuel delivery"
  },
  {
    id: 4,
    image: "/images/hero/slide-4.webp",
    mobileImage: "/images/hero/slide-4-mobile.webp",
    alt: "Trusted car recovery service with modern equipment in Dubai",
    title: "Trusted by Thousands",
    description: "4.9/5 customer rating"
  },
  {
    id: 5,
    image: "/images/hero/slide-5.webp",
    mobileImage: "/images/hero/slide-5-mobile.webp",
    alt: "Fast emergency response car recovery service in Dubai",
    title: "30-Minute Average Response",
    description: "Quick help when you need it most"
  }
]

export default function HeroSection({
  slides = defaultSlides,
  phoneNumber = "+971563446682",
  whatsAppUrl = "https://wa.me/971563446682",
  mobileImageMap = {},
  autoPlayInterval = 4000
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide functionality for background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [slides.length, autoPlayInterval])

  // Get image source with mobile override
  const getImageSource = (slide: Slide) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return mobileImageMap[slide.id] || slide.mobileImage || slide.image
    }
    return slide.image
  }

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden"
      role="region"
      aria-label="Hero carousel"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={getImageSource(slides[currentSlide])}
              alt={slides[currentSlide].alt}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              quality={85}
            />
            {/* Enhanced gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 md:from-black/70 md:via-black/50 md:to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Emergency Alert - Made more responsive */}
      {/* <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-20 bg-red-600/90 text-white px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-sm border border-red-400 max-w-[90vw]">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="font-semibold text-xs md:text-sm whitespace-nowrap">
            🚨 24/7 Emergency Service Active
          </span>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div> */}

      {/* Main Content - Centered without service cards */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white space-y-6 md:space-y-8"
              >
                {/* Main Heading - Improved responsiveness */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight">
                  {slides[currentSlide].title}
                </h1>
                
                {/* Description */}
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-400 md:text-red-500 font-semibold max-w-3xl mx-auto">
                  {slides[currentSlide].description}
                </p>

                {/* CTA Buttons - Centered layout */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                  <motion.a
                    href={`tel:${phoneNumber}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 text-lg shadow-lg min-w-[200px]"
                    aria-label={`Call ${phoneNumber} for emergency recovery`}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Emergency Call</span>
                  </motion.a>

                  <motion.a
                    href={whatsAppUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 text-lg border border-green-500 shadow-lg min-w-[200px]"
                    aria-label="Contact us on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            } hover:bg-white/80`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4 md:hidden">
        <motion.a
          href={whatsAppUrl}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>

        <motion.a
          href={`tel:${phoneNumber}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white"
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </div>
    </section>
  )
}