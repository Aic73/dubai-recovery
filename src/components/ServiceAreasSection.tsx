// components/ServiceAreasSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

import { useRouter } from 'next/navigation'



interface ServiceAreasSectionProps {
  areas?: string[]
  showMap?: boolean
}

const defaultAreas = [
  'Downtown Dubai', 'Dubai Marina', 'Jumeirah', 'Al Barsha', 'Deira', 'Bur Dubai',
  'Jebel Ali', 'Business Bay', 'Al Quoz', 'International City', 'Discovery Gardens',
  'Silicon Oasis', 'Motor City', 'Sports City', 'Dubai Hills', 'Palm Jumeirah',
  'Dubai Internet City', 'Dubai Media City', 'Dubai Production City', 'Jumeirah Village',
  'Dubai Land', 'Mirdif', 'Garhoud', 'Al Nahda', 'Qusais', 'Karama', 'Satwa'
]

export function ServiceAreasSection({ areas = defaultAreas, showMap = true }: ServiceAreasSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  }


  const router = useRouter()

  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Service <span className="text-blue-600">Areas</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                Fast emergency response available in every neighborhood and major road in Dubai. 
                We cover all areas with our 24/7 rapid response teams.
              </p>
            </motion.div>

            {/* Areas Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3"
            >
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <div
          onClick={() => {
  window.location.href = `/areas?location=${encodeURIComponent(area)}`;
}}
                    

                    className="block p-3 md:p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-300 border border-blue-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label={`View ${area} service area`}
                  >
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm md:text-base font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {area}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Link
                href="/areas"
                className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="View all service areas in Dubai"
              >
                <MapPin className="w-5 h-5" />
                <span>View All Service Areas</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Map Section */}
          {showMap && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="aspect-video relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                  <Image
                    src="/images/maps/dubai-map.png"
                    alt="Dubai service areas coverage map"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Interactive Map Overlay Elements */}
                  <div className="absolute inset-0">
                    {/* Highlighted Areas - These would be interactive in a real implementation */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Real-time service coverage across Dubai
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}