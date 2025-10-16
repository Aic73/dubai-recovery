import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Car,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Contact Dubai Recovery | 24/7 Emergency Car Recovery Service | +971 56 344 6682",
  description: "Contact Dubai Recovery for 24/7 emergency car recovery service. Call +971 56 344 6682, email, or use our contact form. Fast response across Dubai.",
  keywords: "contact car recovery dubai, emergency towing contact, dubai recovery phone number, car breakdown help dubai",
}

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Emergency Call",
    description: "24/7 immediate assistance",
    details: "+971 56 344 6682",
    link: "tel:+971563446682",
    color: "from-red-500 to-red-600",
    emergency: true
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    description: "General inquiries",
    details: "info@dubairecovery.com",
    link: "mailto:info@dubairecovery.com",
    color: "from-blue-500 to-blue-600",
    emergency: false
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Service Area",
    description: "Coverage across Dubai",
    details: "All Dubai Areas",
    link: "/areas",
    color: "from-purple-500 to-purple-600",
    emergency: false
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Service",
    description: "Always available",
    details: "Round the clock",
    link: "/services",
    color: "from-green-500 to-green-600",
    emergency: false
  }
]

const serviceHours = [
  { day: "Emergency Service", hours: "24/7", available: true },
  { day: "Phone Support", hours: "24/7", available: true },
  { day: "Email Response", hours: "Within 1 hour", available: true }
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact Dubai Recovery
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                24/7 emergency car recovery service. We're here to help you anywhere in Dubai, anytime.
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
                  <div className="text-2xl font-bold text-green-400">30min</div>
                  <div className="text-blue-200 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">24/7</div>
                  <div className="text-blue-200 text-sm">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-blue-200 text-sm">Areas Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">10K+</div>
                  <div className="text-blue-200 text-sm">Customers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Multiple ways to reach us for emergency assistance or general inquiries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className={`block bg-gradient-to-r ${method.color} text-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden`}
                >
                  {method.emergency && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        {method.icon}
                      </div>
                      {method.emergency && (
                        <div className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full">
                          EMERGENCY
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-white/90 mb-3">{method.description}</p>
                    <div className="text-lg font-semibold">{method.details}</div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Form - Client Component */}
              <ContactForm />

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Service Hours */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <span>Service Hours</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {serviceHours.map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-800">{schedule.day}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">{schedule.hours}</span>
                          {schedule.available && (
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Contact Us */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Contact Dubai Recovery?</h3>
                  <div className="space-y-3">
                    {[
                      "30-minute average response time across Dubai",
                      "Certified professional recovery technicians",
                      "24/7 emergency service availability",
                      "Transparent pricing with no hidden fees",
                      "All Dubai areas covered",
                      "10,000+ satisfied customers"
                    ].map((point, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                        <span className="text-blue-100">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Action */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
                  <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-red-800 mb-2">Emergency Situation?</h4>
                  <p className="text-red-700 mb-4">
                    Don't wait - call us immediately for fastest response
                  </p>
                  <a
                    href="tel:+971563446682"
                    className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call +971 56 344 6682</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map & Location Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Service Coverage Area
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide 24/7 emergency car recovery services across all Dubai areas
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="w-full h-64 bg-blue-200 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <p className="text-blue-700 font-semibold">Dubai Coverage Map</p>
                    <p className="text-blue-600 text-sm">All areas covered - 24/7 service</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Downtown Dubai', 'Dubai Marina', 'Deira', 'Jumeirah', 'Al Barsha', 'Business Bay', 'Palm Jumeirah', 'Jebel Ali'].map((area, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 text-center border border-blue-200">
                      <span className="text-sm font-medium text-gray-800">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link 
                    href="/areas" 
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    <span>View All Service Areas</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Emergency CTA */}
        <section className="bg-gradient-to-r from-red-500 to-red-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our emergency response team is available 24/7. Don't wait - call us now for immediate assistance anywhere in Dubai.
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
                <Car className="w-6 h-6" />
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