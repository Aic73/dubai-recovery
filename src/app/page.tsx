import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
// import { WhyChooseSection, ServiceAreasSection } from '@/components/WhyChooseSection, @/components/ServiceAreasSection'
import { WhyChooseSection } from '@/components/WhyChooseSection'
import { ServiceAreasSection } from '@/components/ServiceAreasSection'
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
  description: "ðŸš¨ Emergency car recovery service in Dubai. 24/7 towing, jump start, tire change, fuel delivery. Fast response within 30 minutes. Call +971 56 344 6682 now!",
  keywords: "car recovery dubai, towing service dubai, 24/7 breakdown service, emergency car recovery, dubai towing, roadside assistance dubai",
  alternates: {
canonical: 'https://www.crystalrecoveryservice.com',
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
        alt: 'Crystal Recovery Service - 24/7 Emergency Car Recovery Services',
      },
    ],
  },
}

// Structured Data for Homepage
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Crystal Recovery Service 24/7',
  description: '24/7 Emergency car recovery and roadside assistance services in Dubai',
url: 'https://www.crystalrecoveryservice.com',
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
    avatar: "ðŸ‘¨â€ðŸ’¼",
    date: "2024-01-15"
  },
  {
    name: "Sarah Johnson",
    location: "Dubai Marina",
    service: "Jump Start Service",
    rating: 5,
    comment: "My car battery died during peak hours near Dubai Marina. They arrived in 20 minutes and got me back on the road. Excellent service!",
    avatar: "ðŸ‘©â€ðŸ’¼",
    date: "2024-01-12"
  },
  {
    name: "Mohammed Ali",
    location: "Deira, Dubai",
    service: "Tire Change Service",
    rating: 5,
    comment: "Got a flat tire on Sheikh Zayed Road during rush hour. Crystal Recovery Service came quickly and changed the tire professionally. Fair pricing and great service!",
    avatar: "ðŸ‘¨â€ðŸ”§",
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
                Professional 24/7 car recovery and roadside assistance across Dubai - Crystal Recovery Service
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
                        alt={`${service.title} - Crystal Recovery Service`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 2} // Prioritize loading first 2 images
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

        {/* Why Choose Us Section */}
      <WhyChooseSection />

        {/* Coverage Areas Section */}
      <ServiceAreasSection showMap={true} />

        {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
    {/* SEO Optimized Heading */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
        Customer <span className="text-blue-600">Reviews</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Read genuine testimonials from our satisfied customers across Dubai about our 24/7 car recovery services
      </p>
    </div>

    {/* Mobile Slider & Desktop Grid */}
    <div className="relative">
      {/* Mobile Slider Container */}
      <div className="md:hidden overflow-hidden">
        <div className="flex snap-x snap-mandatory overflow-x-auto gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-none w-[85vw] snap-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                <meta itemProp="bestRating" content="5" />
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-base text-gray-600 italic mb-6 leading-relaxed" itemProp="reviewBody">
                &ldquo;{testimonial.comment}&rdquo;
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className="font-semibold text-gray-800 text-base" itemProp="name">{testimonial.name}</div>
                  <div className="text-sm text-gray-500" itemProp="address">{testimonial.location}</div>
                  <div className="text-xs text-blue-600 font-medium">{testimonial.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Slider Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 bg-gray-300 rounded-full transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
            itemScope
            itemType="https://schema.org/Review"
          >
            <div className="flex items-center space-x-1 mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
              <meta itemProp="bestRating" content="5" />
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${
                    i < testimonial.rating ? 'text-yellow-400 fill-current animate-bounce' : 'text-gray-300'
                  }`} 
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>

            <p className="text-base text-gray-600 italic mb-6 leading-relaxed" itemProp="reviewBody">
              &ldquo;{testimonial.comment}&rdquo;
            </p>

            <div className="flex items-center space-x-4">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {testimonial.avatar}
              </div>
              <div itemProp="author" itemScope itemType="https://schema.org/Person">
                <div className="font-semibold text-gray-800 text-base" itemProp="name">{testimonial.name}</div>
                <div className="text-sm text-gray-500" itemProp="address">{testimonial.location}</div>
                <div className="text-xs text-blue-600 font-medium">{testimonial.service}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Enhanced Trust Indicators with Animations */}
    <div className="text-center mt-12 md:mt-16">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12">
        Why Customers Trust Crystal Recovery Service
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
        {[
          { number: "98%", label: "Satisfaction Rate", color: "text-blue-600", icon: "ðŸ˜Š" },
          { number: "24/7", label: "Service Available", color: "text-green-600", icon: "ðŸ•’" },
          { number: "4.9/5", label: "Google Rating", color: "text-yellow-600", icon: "â­" },
          { number: "10K+", label: "Happy Customers", color: "text-purple-600", icon: "ðŸ‘¥" }
        ].map((stat, index) => (
          <div 
            key={index}
            className="text-center p-4 md:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
              {stat.number}
            </div>
            <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
      </div>
      </section>

        {/* Emergency CTA Section */}
<section className="py-16 md:py-24 relative overflow-hidden">
  {/* Background Image with Gradient Overlay */}
  <div className="absolute inset-0">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
      style={{
        backgroundImage: 'url("/images/emergency-recovery-background.jpg")',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-red-800/90 to-orange-900/90"></div>
  </div>
  
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-12 -left-12 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
    <div className="absolute top-1/3 -right-6 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
  </div>

  {/* Floating Emergency Icon */}
  <div className="absolute top-8 right-8 md:top-12 md:right-12 animate-bounce">
    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 md:p-4">
      <Phone className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
    </div>
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
    <div className="max-w-5xl mx-auto">
      {/* Main Heading */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 animate-fade-in-up">
        <span className="text-red-300">Emergency</span> Car Recovery Service
        <br />
        <span className="text-2xl md:text-4xl lg:text-5xl text-yellow-300">Available 24/7 Across Dubai</span>
      </h2>
      
      {/* Description */}
      <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        Stranded on the road? Our rapid response team is dispatched immediately. 
        Average <strong className="text-green-300">30-minute arrival</strong> across all Dubai areas. 
        Professional, certified technicians ready to help you 24 hours a day.
      </p>

      {/* Emergency Contact Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        {/* Primary Call Button */}
        <a 
          href="tel:+971563446682" 
          className="group w-full sm:w-auto bg-white text-red-600 hover:bg-gray-50 font-bold py-4 md:py-5 px-6 md:px-10 rounded-2xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center space-x-3 md:space-x-4"
          aria-label="Call Crystal Recovery Service emergency hotline +971 56 344 6682"
        >
          <div className="relative">
            <Phone className="w-6 h-6 md:w-7 md:h-7 animate-pulse group-hover:animate-none" />
            <div className="absolute inset-0 animate-ping">
              <Phone className="w-6 h-6 md:w-7 md:h-7 text-red-200" />
            </div>
          </div>
          <div className="text-left">
            <div className="text-xs md:text-sm text-gray-500 font-normal">Call Now</div>
            <div className="font-mono text-base md:text-lg lg:text-xl">+971 56 344 6682</div>
          </div>
        </a>

        {/* Secondary Booking Button */}
        <Link 
          href="/booking" 
          className="group w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 md:py-5 px-6 md:px-10 rounded-2xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-3 md:space-x-4"
          aria-label="Book emergency car recovery service online"
        >
          <Calendar className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
          <div className="text-left">
            <div className="text-xs md:text-sm text-white/80 font-normal">Online Booking</div>
            <div>Schedule Service</div>
          </div>
        </Link>
      </div>

      {/* Trust Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        {[
          {
            icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-green-300" />,
            text: "30 Min Response",
            subtext: "Average Arrival Time"
          },
          {
            icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />,
            text: "Certified Experts",
            subtext: "Professional Technicians"
          },
          {
            icon: <MapPin className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />,
            text: "All Dubai Areas",
            subtext: "Complete Coverage"
          }
        ].map((feature, index) => (
          <div 
            key={index}
            className="flex items-center justify-center space-x-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
          >
            {feature.icon}
            <div className="text-left">
              <div className="text-sm md:text-base font-semibold">{feature.text}</div>
              <div className="text-xs text-white/70">{feature.subtext}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Emergency Info */}
      <div className="mt-8 md:mt-12 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
        <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8 text-white/80 text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-green-300" />
            <span>No Hidden Charges</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-green-300" />
            <span>All Vehicle Types</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-green-300" />
            <span>Insurance Support</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Final Trust Section */}
{/* Enhanced Final Trust Section */}
<section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
      backgroundSize: '100px 100px'
    }}></div>
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
      Dubai's Most <span className="text-blue-400">Trusted</span> Recovery Service
    </h2>
    
    <p className="text-lg md:text-xl text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
      Join thousands of satisfied customers who trust us for reliable 24/7 emergency car recovery across Dubai
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
      {[
        { 
          number: "24/7", 
          label: "Emergency Service", 
          color: "text-green-400",
          icon: <Shield className="w-8 h-8 md:w-12 md:h-12 text-green-400 mx-auto mb-4" />,
          delay: "400ms"
        },
        { 
          number: "30min", 
          label: "Avg. Response Time", 
          color: "text-blue-400",
          icon: <Clock className="w-8 h-8 md:w-12 md:h-12 text-blue-400 mx-auto mb-4" />,
          delay: "600ms"
        },
        { 
          number: "4.9/5", 
          label: "Customer Rating", 
          color: "text-yellow-400",
          icon: <Star className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 mx-auto mb-4" />,
          delay: "800ms"
        },
        { 
          number: "10K+", 
          label: "Satisfied Customers", 
          color: "text-purple-400",
          icon: <Users className="w-8 h-8 md:w-12 md:h-12 text-purple-400 mx-auto mb-4" />,
          delay: "1000ms"
        }
      ].map((stat, index) => (
        <div 
          key={index}
          className="text-center p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-fade-in-up group"
          style={{ animationDelay: stat.delay }}
        >
          <div className="group-hover:scale-110 transition-transform duration-300">
            {stat.icon}
          </div>
          <div className={`text-2xl md:text-4xl font-bold ${stat.color} mb-2 md:mb-3`}>
            {stat.number}
          </div>
          <div className="text-gray-300 text-sm md:text-base font-medium">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Final CTA */}
    <div className="mt-12 md:mt-16 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
      <a 
        href="tel:+971563446682"
        className="inline-flex items-center space-x-3 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-2xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span>Call Now: +971 56 344 6682</span>
      </a>
    </div>
  </div>
</section>


      </main>
      <Footer />
    </>
  )
}

