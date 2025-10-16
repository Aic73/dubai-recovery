import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Phone, 
  Clock, 
  Shield, 
  Star, 
  MapPin, 
  Users, 
  Award, 
  CheckCircle2,
  ArrowRight,
  Calendar
} from 'lucide-react'

export const metadata: Metadata = {
  title: "24/7 Car Recovery Dubai | Fast Towing & Breakdown Service | +971 56 344 6682",
  description: "🚨 Emergency car recovery service in Dubai. 24/7 towing, jump start, tire change, fuel delivery. Fast response within 30 minutes. Call +971 56 344 6682 now!",
  keywords: "car recovery dubai, towing service dubai, 24/7 breakdown service, emergency car recovery, dubai towing, roadside assistance dubai",
  alternates: {
    canonical: 'https://dubairecovery.com',
  },
  openGraph: {
    title: "24/7 Car Recovery Dubai | Emergency Towing & Roadside Assistance",
    description: "Emergency car recovery services in Dubai. 30-min response time. 24/7 towing, jump start, tire change. Call +971 56 344 6682",
    type: 'website',
    locale: 'en_AE',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dubai Recovery - 24/7 Emergency Car Recovery Services',
      },
    ],
  },
}

// Structured Data for Homepage
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Dubai Recovery 24/7',
  description: '24/7 Emergency car recovery and roadside assistance services in Dubai',
  url: 'https://dubairecovery.com',
  telephone: '+971-56-344-6682',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE'
  },
  areaServed: 'Dubai',
  openingHours: 'Mo-Su 00:00-23:59',
  serviceType: [
    'Vehicle Towing',
    'Jump Start Service',
    'Tire Change Service',
    'Fuel Delivery',
    'Lockout Service',
    'Roadside Assistance'
  ],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'AED',
    lowPrice: '70',
    highPrice: '150',
    offerCount: '6'
  }
}

const services = [
  {
    slug: 'car-towing-dubai',
    title: "Car Towing Dubai",
    description: "Professional towing services for all vehicle types. Safe transport to your preferred garage or location.",
    price: "AED 100",
    features: ["All vehicle types", "Safe transport", "24/7 service", "GPS tracked"],
    responseTime: "20-30 min",
    emergency: true,
    image: "/images/services/towing-service.jpg",
    badge: "Most Popular"
  },
  {
    slug: 'jump-start-service',
    title: "Jump Start Service",
    description: "Dead battery? We'll get you back on the road quickly with professional jump-start equipment.",
    price: "AED 80",
    features: ["Fast service", "Battery check", "All vehicles", "Free diagnosis"],
    responseTime: "25-35 min",
    emergency: true,
    image: "/images/services/jump-start.jpg",
    badge: "24/7 Available"
  },
  {
    slug: 'tire-change-dubai',
    title: "Tire Change Dubai",
    description: "Flat tire assistance with professional equipment. We'll safely change your tire in minutes.",
    price: "AED 70",
    features: ["Spare tire install", "Tire repair", "Wheel safety", "All tire types"],
    responseTime: "20-30 min",
    emergency: true,
    image: "/images/services/tire-change.jpg",
    badge: "Fast Service"
  },
  {
    slug: 'fuel-delivery-dubai',
    title: "Fuel Delivery Dubai",
    description: "Run out of fuel? We'll deliver enough fuel to get you to the nearest gas station.",
    price: "AED 90",
    features: ["Any fuel type", "Quick delivery", "24/7 available", "Emergency supply"],
    responseTime: "25-35 min",
    emergency: true,
    image: "/images/services/fuel-delivery.jpg",
    badge: "Quick Delivery"
  },
  {
    slug: 'car-lockout-service',
    title: "Car Lockout Service",
    description: "Locked out of your car? Get back in without any damage to your vehicle.",
    price: "AED 120",
    features: ["No damage", "Quick entry", "All car models", "Professional tools"],
    responseTime: "30-40 min",
    emergency: false,
    image: "/images/services/lockout-service.jpg",
    badge: "Damage Free"
  },
  {
    slug: 'on-spot-repairs',
    title: "On-Spot Repairs",
    description: "Minor mechanical repairs done on location to get you moving safely.",
    price: "AED 150",
    features: ["Basic repairs", "Diagnostic", "Temporary fixes", "Expert technicians"],
    responseTime: "30-45 min",
    emergency: false,
    image: "/images/services/onspot-repairs.jpg",
    badge: "Expert Service"
  }
]

const whyChooseUs = [
  {
    icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
    title: "30-Minute Response Time",
    description: "Fastest emergency response in Dubai - average 30 minutes across all areas including Downtown, Marina, and Jumeirah."
  },
  {
    icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Certified Professionals",
    description: "All our technicians are certified, trained, and experienced in safe vehicle recovery and roadside assistance."
  },
  {
    icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
    title: "5-Star Rated Service",
    description: "Rated 4.9/5 by our customers with thousands of satisfied clients across Dubai and UAE."
  },
  {
    icon: <Star className="w-5 h-5 md:w-6 md:h-6" />,
    title: "24/7 Availability",
    description: "Round-the-clock service including weekends and holidays. We're always here when you need us."
  }
]

const coverageAreas = [
  'Downtown Dubai', 'Dubai Marina', 'Jumeirah', 'Al Barsha', 'Deira', 'Bur Dubai',
  'Jebel Ali', 'Business Bay', 'Al Quoz', 'International City', 'Discovery Gardens',
  'Silicon Oasis', 'Motor City', 'Sports City', 'Dubai Hills', 'Palm Jumeirah',
  'Dubai Internet City', 'Dubai Media City', 'Dubai Production City', 'Jumeirah Village',
  'Dubai Land', 'Mirdif', 'Garhoud', 'Al Nahda', 'Qusais', 'Karama', 'Satwa'
]

const testimonials = [
  {
    name: "Ahmed Mohammed",
    location: "Business Bay, Dubai",
    service: "Car Towing Service",
    rating: 5,
    comment: "Amazing service! They reached me in 25 minutes at 2 AM and towed my car safely to the garage. Highly professional and fast response.",
    avatar: "👨‍💼",
    date: "2024-01-15"
  },
  {
    name: "Sarah Johnson",
    location: "Dubai Marina",
    service: "Jump Start Service",
    rating: 5,
    comment: "My car battery died during peak hours near Dubai Marina. They arrived in 20 minutes and got me back on the road. Excellent service!",
    avatar: "👩‍💼",
    date: "2024-01-12"
  },
  {
    name: "Mohammed Ali",
    location: "Deira, Dubai",
    service: "Tire Change Service",
    rating: 5,
    comment: "Got a flat tire on Sheikh Zayed Road during rush hour. Dubai Recovery came quickly and changed the tire professionally. Fair pricing and great service!",
    avatar: "👨‍🔧",
    date: "2024-01-10"
  }
]

const stats = [
  { number: "30min", label: "Avg Response Time", icon: Clock },
  { number: "24/7", label: "Service Available", icon: Shield },
  { number: "4.9/5", label: "Customer Rating", icon: Star },
  { number: "10K+", label: "Customers Served", icon: Users }
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="min-h-screen">
        
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section - Mobile Optimized */}
        <section id="services" className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
                Our <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Professional 24/7 car recovery and roadside assistance across Dubai
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Service Image - Full Size */}
                  <Link href={`/services/${service.slug}`} className="block relative">
                    <div className="relative h-40 md:h-48 bg-gray-100 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Emergency Badge */}
                      {service.emergency && (
                        <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-red-500 text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full z-10">
                          EMERGENCY
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Service Content */}
                  <div className="p-4 md:p-6">
                    <Link href={`/services/${service.slug}`}>
                      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors cursor-pointer">
                        {service.title}
                      </h2>
                    </Link>
                    
                    <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Response Time */}
                    <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                      <span><strong className="text-green-600">{service.responseTime}</strong> response</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-4 md:mb-6">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                          <span className="text-xs md:text-sm text-gray-600 line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 md:space-x-3">
                      <a
                        href="tel:+971563446682"
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 md:py-3 px-3 md:px-4 rounded-lg md:rounded-xl text-center transition-all duration-300 flex items-center justify-center space-x-1 md:space-x-2 text-sm"
                      >
                        <Phone className="w-3 h-3 md:w-4 md:h-4" />
                        <span>Call Now</span>
                      </a>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 md:py-3 px-3 md:px-4 rounded-lg md:rounded-xl text-center transition-all duration-300 flex items-center justify-center space-x-1 md:space-x-2 text-sm"
                      >
                        <span>View Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Link 
                href="/services" 
                className="inline-flex items-center space-x-2 md:space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 text-sm md:text-base"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Rest of your sections remain the same */}
        {/* Why Choose Us Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full translate-y-40 -translate-x-40 opacity-50"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
                Why Choose <span className="text-blue-600">Dubai Recovery?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to providing the fastest, safest, and most reliable car recovery service in Dubai
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-6 md:p-8 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-12 md:mt-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">{stat.number}</div>
                    <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Coverage Areas Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
                Service <span className="text-blue-600">Areas</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Fast emergency response available in every neighborhood and major road in Dubai
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
              {coverageAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="text-center p-3 md:p-4 bg-blue-50 rounded-lg md:rounded-xl hover:bg-blue-100 transition-colors duration-300 border border-blue-200 group"
                >
                  <div className="flex items-center justify-center space-x-1 md:space-x-2">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                    <span className="text-sm md:text-base font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                      {area}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 md:mt-12">
              <Link 
                href="/areas" 
                className="inline-flex items-center space-x-2 md:space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                aria-label="View all service areas in Dubai"
              >
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span>View All Service Areas</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
                Customer <span className="text-blue-600">Reviews</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Read what our satisfied customers say about our car recovery services in Dubai
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-3 md:mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm md:text-base text-gray-600 italic mb-4 md:mb-6 leading-relaxed" itemProp="reviewBody">
                    "{testimonial.comment}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="text-2xl md:text-3xl">{testimonial.avatar}</div>
                    <div itemProp="author" itemScope itemType="https://schema.org/Person">
                      <div className="font-semibold text-gray-800 text-sm md:text-base" itemProp="name">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-gray-500" itemProp="address">{testimonial.location}</div>
                      <div className="text-xs text-blue-600 font-medium">{testimonial.service}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="text-center mt-12 md:mt-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
                <div className="text-center p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-xs md:text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-xs md:text-sm text-gray-600">Service Available</div>
                </div>
                <div className="text-center p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-600">4.9/5</div>
                  <div className="text-xs md:text-sm text-gray-600">Google Rating</div>
                </div>
                <div className="text-center p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600">10K+</div>
                  <div className="text-xs md:text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA Section */}
        <section className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-1/4 right-0 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Need Emergency Car Recovery Right Now?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                Our emergency response team is standing by 24/7 to help you anywhere in Dubai. 
                Fast, reliable, and professional car recovery services when you need them most.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 md:mb-8">
                <a 
                  href="tel:+971563446682" 
                  className="w-full sm:w-auto bg-white text-red-500 font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl text-base md:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center space-x-2 md:space-x-3 group"
                  aria-label="Call Dubai Recovery emergency hotline"
                >
                  <div className="relative">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
                    <div className="absolute inset-0 animate-ping">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-red-200" />
                    </div>
                  </div>
                  <span className="font-mono text-base md:text-lg">+971 56 344 6682</span>
                </a>
                <Link 
                  href="/booking" 
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl text-base md:text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 md:space-x-3"
                  aria-label="Book car recovery service online"
                >
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                  <span>Book Online Now</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 text-white/90">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-green-300" />
                  <span className="text-xs md:text-sm">30 Min Response</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-white/90">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-blue-300" />
                  <span className="text-xs md:text-sm">Certified Experts</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-white/90">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
                  <span className="text-xs md:text-sm">All Dubai Areas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Trust Section */}
        <section className="py-8 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">
              Dubai's Most Trusted Car Recovery Service
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-green-400">24/7</div>
                <div className="text-gray-400 text-xs md:text-sm">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-blue-400">30min</div>
                <div className="text-gray-400 text-xs md:text-sm">Avg. Response</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-yellow-400">4.9/5</div>
                <div className="text-gray-400 text-xs md:text-sm">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-purple-400">10K+</div>
                <div className="text-gray-400 text-xs md:text-sm">Satisfied Customers</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}