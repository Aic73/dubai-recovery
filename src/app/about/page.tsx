import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Phone, 
  Clock, 
  Shield, 
  Star, 
  Users, 
  Award, 
  Car, 
  MapPin,
  CheckCircle2,
  Heart,
  Target,
  Globe,
  ThumbsUp,
  Calendar,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: "About Dubai Recovery | Trusted Car Recovery Service in Dubai | +971 56 344 6682",
  description: "Learn about Dubai Recovery - Dubai's most trusted 24/7 car recovery service. Certified professionals, fast response, and 10,000+ satisfied customers.",
  keywords: "about dubai recovery, car recovery company dubai, our story, certified recovery service, dubai towing company",
}

const teamValues = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Our Mission",
    description: "To provide fast, reliable, and safe car recovery services across Dubai, ensuring our customers get back on the road quickly and safely."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Our Vision",
    description: "To become Dubai's most trusted and preferred car recovery service, setting new standards in emergency roadside assistance."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Our Promise",
    description: "30-minute response guarantee, certified professionals, transparent pricing, and 24/7 availability for all Dubai residents and visitors."
  }
]

const ourStory = [
  {
    year: "2015",
    title: "Humble Beginnings",
    description: "Started with a single recovery vehicle and a passion for helping stranded motorists in Dubai.",
    achievement: "First 100 customers served"
  },
  {
    year: "2017",
    title: "Rapid Growth",
    description: "Expanded our fleet to 5 recovery vehicles and built a team of certified professionals.",
    achievement: "500+ monthly customers"
  },
  {
    year: "2020",
    title: "Technology Integration",
    description: "Implemented GPS tracking, mobile app, and 24/7 dispatch system for faster response times.",
    achievement: "4.8/5 customer rating"
  },
  {
    year: "2024",
    title: "Market Leadership",
    description: "Now serving 10,000+ customers with 15 recovery vehicles covering all Dubai areas.",
    achievement: "Dubai's most trusted recovery service"
  }
]

const certifications = [
  {
    name: "RTA Certified",
    description: "Licensed by Dubai Roads and Transport Authority",
    icon: "🏛️"
  },
  {
    name: "Vehicle Recovery Expert",
    description: "Certified recovery professionals with advanced training",
    icon: "🛡️"
  },
  {
    name: "Safety First",
    description: "ISO safety standards compliance for all operations",
    icon: "⭐"
  },
  {
    name: "24/7 Operations",
    description: "Round-the-clock emergency service certification",
    icon: "🌙"
  }
]

const teamStats = [
  { number: "10,000+", label: "Happy Customers" },
  { number: "15", label: "Recovery Vehicles" },
  { number: "30min", label: "Avg Response Time" },
  { number: "4.9/5", label: "Customer Rating" },
  { number: "50+", label: "Dubai Areas Covered" },
  { number: "24/7", label: "Service Availability" }
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Dubai Recovery
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Dubai's most trusted 24/7 car recovery service. Fast, reliable, and professional 
                emergency assistance when you need it most.
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
                  href="/services" 
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
                >
                  <Car className="w-6 h-6" />
                  <span>Our Services</span>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">10K+</div>
                  <div className="text-blue-200 text-sm">Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">30min</div>
                  <div className="text-blue-200 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">4.9/5</div>
                  <div className="text-blue-200 text-sm">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to becoming Dubai's most trusted car recovery service
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {ourStory.map((story, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 mb-16 last:mb-0">
                  {/* Year */}
                  <div className="md:w-1/4 text-center md:text-right">
                    <div className="bg-blue-600 text-white py-3 px-6 rounded-2xl inline-block">
                      <span className="text-2xl font-bold">{story.year}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-3/4">
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{story.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                      <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>{story.achievement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Our Purpose & Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Driven by a commitment to excellence and customer satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamValues.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Why Choose Dubai Recovery?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're not just another recovery service - we're your trusted partner on Dubai's roads
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left Content - Features */}
              <div className="space-y-6">
                {[
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Fastest Response Time",
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
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Content - Certifications */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300">
                      <div className="text-2xl">{cert.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                        <p className="text-gray-600 text-sm">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl text-center">
                  <ThumbsUp className="w-12 h-12 mx-auto mb-3" />
                  <h4 className="text-xl font-bold mb-2">Trusted by 10,000+ Customers</h4>
                  <p className="text-green-100">Dubai's most reliable car recovery service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Statistics */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                By The Numbers
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Our commitment to excellence reflected in numbers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 border border-blue-200">
                <Award className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Commitment to You
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We are committed to providing the fastest, safest, and most reliable car recovery service in Dubai. 
                  Your safety and satisfaction are our top priorities, and we treat every customer with the care and 
                  attention they deserve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+971563446682" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call +971 56 344 6682</span>
                  </a>
                  <Link 
                    href="/contact" 
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
                  >
                    <Users className="w-5 h-5" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-red-500 to-red-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Dubai Recovery for their emergency car recovery needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+971563446682" 
                className="bg-white text-red-500 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>CALL +971 56 344 6682</span>
              </a>
              <Link 
                href="/booking" 
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Service Online</span>
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