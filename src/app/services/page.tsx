import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Phone, 
  Car, 
  Clock, 
  Shield, 
  Star, 
  Wrench, 
  Fuel, 
  Key, 
  Battery, 
  Settings,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Calendar
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Car Recovery Services Dubai | 24/7 Towing, Jump Start, Tire Change | +971 56 344 6682",
  description: "Professional car recovery services in Dubai. 24/7 towing, jump start, tire change, fuel delivery, lockout service. Fast response within 30 minutes. Call +971 56 344 6682",
  keywords: "car towing dubai, jump start service, tire change dubai, fuel delivery, lockout service, car recovery services",
}

const services = [
  {
    id: 1,
    icon: <Car className="w-8 h-8" />,
    title: "Car Towing Service",
    description: "Professional towing services for all vehicle types across Dubai. Safe and secure transport to your preferred location.",
    price: "AED 100+",
    features: [
      "All vehicle types (Cars, SUVs, Trucks)",
      "Safe and secure transport",
      "24/7 emergency towing",
      "GPS tracked recovery vehicles",
      "Insurance approved service"
    ],
    emergency: true,
    responseTime: "20-30 minutes",
    image: "/images/services/towing-service.jpg",
    bgColor: "from-blue-500 to-blue-700",
    details: {
      coverage: "All Dubai areas",
      vehicles: "All types including luxury cars",
      time: "24/7 availability",
      warranty: "Damage protection guarantee"
    }
  },
  {
    id: 2,
    icon: <Battery className="w-8 h-8" />,
    title: "Jump Start Service",
    description: "Dead battery? We'll get you back on the road quickly with professional jump-start equipment and battery testing.",
    price: "AED 80",
    features: [
      "Professional jump start equipment",
      "Battery health check",
      "All vehicle types",
      "Safe connection guaranteed",
      "Battery replacement available"
    ],
    emergency: true,
    responseTime: "25-35 minutes",
    image: "/images/services/jump-start.jpg",
    bgColor: "from-green-500 to-green-700",
    details: {
      coverage: "All Dubai areas",
      vehicles: "12V and 24V systems",
      time: "24/7 service",
      warranty: "Service guarantee"
    }
  },
  {
    id: 3,
    icon: <Settings className="w-8 h-8" />,
    title: "Tire Change Service",
    description: "Flat tire? Our experts will safely change your tire with professional equipment and ensure you're back on the road quickly.",
    price: "AED 70",
    features: [
      "Professional tire changing equipment",
      "Spare tire installation",
      "Tire pressure check",
      "Wheel safety inspection",
      "Emergency tire repair"
    ],
    emergency: true,
    responseTime: "20-30 minutes",
    image: "/images/services/tire-change.jpg",
    bgColor: "from-orange-500 to-orange-700",
    details: {
      coverage: "All Dubai areas",
      vehicles: "All rim sizes",
      time: "24/7 availability",
      warranty: "Proper installation guarantee"
    }
  },
  {
    id: 4,
    icon: <Fuel className="w-8 h-8" />,
    title: "Fuel Delivery Service",
    description: "Run out of fuel? We'll deliver enough fuel to get you to the nearest gas station. Available for all fuel types.",
    price: "AED 90",
    features: [
      "All fuel types (Special, Super, Diesel)",
      "Enough fuel to reach station",
      "Safe fuel delivery",
      "Emergency fuel can provided",
      "24/7 delivery service"
    ],
    emergency: true,
    responseTime: "25-35 minutes",
    image: "/images/services/fuel-delivery.jpg",
    bgColor: "from-purple-500 to-purple-700",
    details: {
      coverage: "All Dubai areas",
      vehicles: "All fuel types",
      time: "24/7 delivery",
      warranty: "Quality fuel guarantee"
    }
  },
  {
    id: 5,
    icon: <Key className="w-8 h-8" />,
    title: "Lockout Service",
    description: "Locked out of your car? Our professional lockout service will help you get back in without damaging your vehicle.",
    price: "AED 120",
    features: [
      "No damage to your vehicle",
      "Professional tools used",
      "All car models",
      "Key replacement assistance",
      "24/7 lockout service"
    ],
    emergency: false,
    responseTime: "30-40 minutes",
    image: "/images/services/lockout-service.jpg",
    bgColor: "from-indigo-500 to-indigo-700",
    details: {
      coverage: "All Dubai areas",
      vehicles: "All car models",
      time: "24/7 service",
      warranty: "No damage guarantee"
    }
  },
  {
    id: 6,
    icon: <Wrench className="w-8 h-8" />,
    title: "On-Spot Repairs",
    description: "Minor mechanical issues? Our technicians can perform on-spot repairs to get you safely to your destination.",
    price: "AED 150+",
    features: [
      "Minor mechanical repairs",
      "Basic diagnostic services",
      "Temporary fixes available",
      "Professional tools and equipment",
      "Safety inspection included"
    ],
    emergency: false,
    responseTime: "30-45 minutes",
    image: "/images/services/onspot-repairs.jpg",
    bgColor: "from-red-500 to-red-700",
    details: {
      coverage: "All Dubai areas",
      vehicles: "All types",
      time: "24/7 service",
      warranty: "Repair guarantee"
    }
  }
]

const whyChooseUs = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Response Time",
    description: "Average 30-minute response across Dubai. We understand emergencies can't wait."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Certified Professionals",
    description: "All our technicians are certified and trained to handle any vehicle emergency safely."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "5-Star Rated Service",
    description: "4.9/5 customer rating with thousands of satisfied customers across Dubai."
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "All Dubai Coverage",
    description: "We serve all areas of Dubai from Downtown to Palm Jumeirah and everywhere in between."
  }
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Car Recovery Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Professional 24/7 car recovery and roadside assistance services across Dubai. 
                Fast response, certified technicians, and affordable pricing.
              </p>
              
              {/* Emergency CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a 
                  href="tel:+971563446682" 
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-2xl"
                >
                  <Phone className="w-6 h-6" />
                  <span>🚨 EMERGENCY CALL: +971 56 344 6682</span>
                </a>
                <Link 
                  href="/booking" 
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
                >
                  <Calendar className="w-6 h-6" />
                  <span>Book Online</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">30min</div>
                  <div className="text-blue-200 text-sm">Avg. Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">4.9/5</div>
                  <div className="text-blue-200 text-sm">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">10K+</div>
                  <div className="text-blue-200 text-sm">Customers Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-blue-200 text-sm">Service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive car recovery and roadside assistance services available 24/7 across all Dubai areas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Service Header with Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-blue-100 opacity-90 line-clamp-2">{service.description}</p>
                    </div>
                    {service.emergency && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1 z-10">
                        <AlertTriangle className="w-3 h-3" />
                        <span>EMERGENCY</span>
                      </div>
                    )}
                    {/* Price Badge */}
                    <div className="absolute top-4 left-4 bg-white text-gray-900 font-bold py-2 px-4 rounded-xl shadow-lg transform rotate-12 z-10">
                      {service.price}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    {/* Response Time */}
                    <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">Response Time</span>
                      </div>
                      <span className="font-semibold text-green-600">{service.responseTime}</span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-800 text-lg">Service Includes:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-2 gap-3 mb-6 p-4 bg-blue-50 rounded-xl">
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Coverage</div>
                        <div className="text-sm font-semibold text-gray-800">{service.details.coverage}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Availability</div>
                        <div className="text-sm font-semibold text-gray-800">{service.details.time}</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href="tel:+971563446682"
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Now</span>
                      </a>
                      <Link
                        href="/booking"
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book Online</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Why Choose Dubai Recovery?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're committed to providing the fastest, safest, and most reliable car recovery service in Dubai
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-6 group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Service Areas Across Dubai
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide fast emergency response services in all areas of Dubai
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                'Downtown Dubai', 'Dubai Marina', 'Jumeirah', 'Al Barsha',
                'Deira', 'Bur Dubai', 'Jebel Ali', 'Business Bay',
                'Al Quoz', 'International City', 'Discovery Gardens', 'Silicon Oasis',
                'Motor City', 'Sports City', 'Dubai Hills', 'Palm Jumeirah'
              ].map((area, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="font-semibold text-gray-800">{area}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/areas" 
                className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-lg"
              >
                <span>View All Service Areas</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="bg-gradient-to-r from-red-500 to-red-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Emergency Assistance?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our emergency response team is available 24/7 to help you anywhere in Dubai. Don't wait - call us now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+971563446682" 
                className="bg-white text-red-500 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>🚨 CALL +971 56 344 6682</span>
              </a>
              <Link 
                href="/booking" 
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Service Online</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}