import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Phone, 
  MapPin, 
  Clock, 
  Car, 
  Navigation, 
  CheckCircle2,
  Search,
  Star,
  Shield,
  ArrowRight,
  Calendar
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Service Areas Dubai | Car Recovery Coverage Across All Dubai Areas | +971 56 344 6682",
  description: "24/7 car recovery service covering all Dubai areas: Downtown, Marina, Jumeirah, Deira, Bur Dubai, Palm Jumeirah & more. Fast response within 30 minutes.",
  keywords: "dubai areas covered, car recovery near me, towing service dubai areas, emergency recovery dubai locations",
}

const dubaiAreas = [
  {
    category: "Central Dubai",
    areas: [
      { name: "Downtown Dubai", response: "15-25 min", popular: true },
      { name: "Business Bay", response: "20-30 min", popular: true },
      { name: "Dubai Marina", response: "20-30 min", popular: true },
      { name: "Jumeirah", response: "25-35 min", popular: true },
      { name: "Al Satwa", response: "20-30 min", popular: false },
      { name: "Al Wasl", response: "25-35 min", popular: false }
    ]
  },
  {
    category: "Commercial & Business",
    areas: [
      { name: "Deira", response: "25-35 min", popular: true },
      { name: "Bur Dubai", response: "25-35 min", popular: true },
      { name: "Al Quoz", response: "20-30 min", popular: false },
      { name: "Jebel Ali", response: "30-40 min", popular: false },
      { name: "Dubai Internet City", response: "25-35 min", popular: true },
      { name: "Dubai Media City", response: "25-35 min", popular: true }
    ]
  },
  {
    category: "Residential Communities",
    areas: [
      { name: "Palm Jumeirah", response: "30-40 min", popular: true },
      { name: "Jumeirah Village", response: "25-35 min", popular: false },
      { name: "Al Barsha", response: "20-30 min", popular: true },
      { name: "Mirdif", response: "30-40 min", popular: false },
      { name: "Dubai Hills", response: "25-35 min", popular: true },
      { name: "Arabian Ranches", response: "35-45 min", popular: false }
    ]
  },
  {
    category: "New Dubai & Developments",
    areas: [
      { name: "Dubai South", response: "35-45 min", popular: false },
      { name: "Dubai Land", response: "30-40 min", popular: false },
      { name: "Motor City", response: "25-35 min", popular: true },
      { name: "Sports City", response: "25-35 min", popular: false },
      { name: "Discovery Gardens", response: "25-35 min", popular: false },
      { name: "International City", response: "30-40 min", popular: false }
    ]
  },
  {
    category: "Industrial & Outskirts",
    areas: [
      { name: "Al Qusais", response: "30-40 min", popular: false },
      { name: "Nadd Al Hammar", response: "35-45 min", popular: false },
      { name: "Warsan", response: "35-45 min", popular: false },
      { name: "Ras Al Khor", response: "30-40 min", popular: false },
      { name: "Dubai Investment Park", response: "35-45 min", popular: false },
      { name: "Jebel Ali Industrial", response: "35-45 min", popular: false }
    ]
  },
  {
    category: "Highways & Major Roads",
    areas: [
      { name: "Sheikh Zayed Road", response: "15-25 min", popular: true },
      { name: "Al Khail Road", response: "20-30 min", popular: false },
      { name: "Emirates Road", response: "30-40 min", popular: false },
      { name: "Mohammed Bin Zayed Road", response: "25-35 min", popular: false },
      { name: "Dubai-Al Ain Road", response: "35-45 min", popular: false },
      { name: "Hatta Road", response: "45-60 min", popular: false }
    ]
  }
]

const popularAreas = dubaiAreas.flatMap(category => 
  category.areas.filter(area => area.popular)
)

const emergencyServices = [
  { name: "Car Towing", icon: "🚗", available: true },
  { name: "Jump Start", icon: "🔋", available: true },
  { name: "Tire Change", icon: "🛞", available: true },
  { name: "Fuel Delivery", icon: "⛽", available: true },
  { name: "Lockout Service", icon: "🔑", available: true },
  { name: "On-Spot Repairs", icon: "🛠️", available: true }
]

export default function AreasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Service Areas Across Dubai
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                24/7 emergency car recovery service covering every corner of Dubai. 
                Fast response within 30 minutes guaranteed.
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

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">50+</div>
                  <div className="text-blue-200 text-sm">Areas Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">30min</div>
                  <div className="text-blue-200 text-sm">Avg. Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-blue-200 text-sm">Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-blue-200 text-sm">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Areas Quick Access */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Popular Service Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quick access to our most requested locations across Dubai
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {popularAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{area.name}</h3>
                        <div className="flex items-center space-x-2 text-green-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-semibold">{area.response}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                      POPULAR
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={`tel:+971563446682?context=${encodeURIComponent(`Emergency recovery in ${area.name}`)}`}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl text-center transition-all duration-300 text-sm"
                    >
                      Call for {area.name}
                    </a>
                    <Link
                      href="/booking"
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl text-center transition-all duration-300 text-sm"
                    >
                      Book Online
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Areas Coverage */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Complete Dubai Coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We serve every area of Dubai with 24/7 emergency car recovery services
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your area in Dubai..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                />
              </div>
            </div>

            {/* Areas Grid by Category */}
            <div className="space-y-12">
              {dubaiAreas.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center space-x-3">
                    <Navigation className="w-8 h-8 text-blue-500" />
                    <span>{category.category}</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.areas.map((area, areaIndex) => (
                      <div 
                        key={areaIndex}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group border border-gray-200"
                      >
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-blue-500" />
                          <div>
                            <span className="font-semibold text-gray-800">{area.name}</span>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Clock className="w-3 h-3" />
                              <span>{area.response}</span>
                            </div>
                          </div>
                        </div>
                        
                        {area.popular && (
                          <div className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">
                            HOT
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Available Everywhere */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Full Services Available in All Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every service we offer is available 24/7 across all Dubai locations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {emergencyServices.map((service, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{service.name}</h3>
                  <div className="flex items-center justify-center space-x-1 text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Available</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Response Info */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  🚨 Emergency Response Guarantee
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">30-Minute Response</h3>
                    <p className="text-gray-600">Average response time across Dubai</p>
                  </div>
                  
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Certified Teams</h3>
                    <p className="text-gray-600">Professional technicians in every area</p>
                  </div>
                  
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">5-Star Service</h3>
                    <p className="text-gray-600">Rated 4.9/5 by customers</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">📞 Immediate Assistance Available</h3>
                  <p className="text-gray-600 mb-4">
                    No matter where you are in Dubai, our emergency response team is ready to help you 24/7
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel:+971563446682" 
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call +971 56 344 6682</span>
                    </a>
                    <Link 
                      href="/booking" 
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Book Service Online</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Location is Covered!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              No matter where you are in Dubai, we're just a phone call away with fast, reliable car recovery service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+971563446682" 
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>CALL +971 56 344 6682</span>
              </a>
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
              >
                <Car className="w-6 h-6" />
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}