import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Phone, 
  Clock, 
  Shield, 
  Star, 
  MapPin, 
  CheckCircle2,
  ArrowLeft,
  Calendar,
  Users,
  Award
} from 'lucide-react'

// Service data (you can move this to a separate file later)
const servicesData = [
  {
    slug: 'car-towing-dubai',
    title: "Car Towing Dubai",
    description: "Professional towing services for all vehicle types. Safe transport to your preferred garage or location.",
    fullDescription: "Our professional car towing service in Dubai is available 24/7 for all types of vehicles. We use state-of-the-art tow trucks equipped with the latest technology to ensure safe and secure transportation of your vehicle. Whether you're stranded on Sheikh Zayed Road or in Downtown Dubai, our certified technicians will reach you within 30 minutes.",
    price: "AED 100",
    features: [
      "All vehicle types (Cars, SUVs, Trucks)",
      "Safe and secure transport",
      "24/7 emergency towing",
      "GPS tracked recovery vehicles",
      "Insurance approved service",
      "Damage protection guarantee",
      "Professional equipment",
      "Certified operators"
    ],
    responseTime: "20-30 min",
    emergency: true,
    image: "/images/services/towing-service.jpg",
    coverage: "All Dubai areas including Downtown, Marina, Jumeirah, Deira, Bur Dubai",
    benefits: [
      "Fast response time",
      "Professional handling",
      "Safe transportation",
      "24/7 availability"
    ],
    schemaType: "TowingService"
  },
  {
    slug: 'jump-start-service',
    title: "Jump Start Service",
    description: "Dead battery? We'll get you back on the road quickly with professional jump-start equipment.",
    fullDescription: "Experiencing a dead battery in Dubai? Our jump start service is available 24/7 across all Dubai areas. Our technicians carry professional jump-start equipment and will perform a comprehensive battery health check to ensure your vehicle is safe to drive. We can also provide battery replacement if needed.",
    price: "AED 80",
    features: [
      "Professional jump start equipment",
      "Battery health check",
      "All vehicle types",
      "Safe connection guaranteed",
      "Battery replacement available",
      "24/7 service",
      "Free diagnostic",
      "Voltage testing"
    ],
    responseTime: "25-35 min",
    emergency: true,
    image: "/images/services/jump-start.jpg",
    coverage: "Available across all Dubai areas 24/7",
    benefits: [
      "Quick battery revival",
      "Professional equipment",
      "Safety checked",
      "Battery health report"
    ],
    schemaType: "AutomotiveBatteryChargeService"
  },
  {
    slug: 'tire-change-dubai',
    title: "Tire Change Dubai",
    description: "Flat tire assistance with professional equipment. We'll safely change your tire in minutes.",
    fullDescription: "Got a flat tire in Dubai? Our tire change service ensures you're back on the road safely and quickly. Our technicians use professional equipment to change your tire efficiently and will inspect the wheel for any damage. We also provide temporary tire repair services if needed.",
    price: "AED 70",
    features: [
      "Professional tire changing equipment",
      "Spare tire installation",
      "Tire pressure check",
      "Wheel safety inspection",
      "Emergency tire repair",
      "All rim sizes",
      "Lug nut torque check",
      "Wheel alignment check"
    ],
    responseTime: "20-30 min",
    emergency: true,
    image: "/images/services/tire-change.jpg",
    coverage: "All Dubai roads and highways",
    benefits: [
      "Quick tire replacement",
      "Professional tools",
      "Safety inspection",
      "Proper installation"
    ],
    schemaType: "TireChangeService"
  },
  {
    slug: 'fuel-delivery-dubai',
    title: "Fuel Delivery Dubai",
    description: "Run out of fuel? We'll deliver enough fuel to get you to the nearest gas station.",
    fullDescription: "Ran out of fuel in Dubai? Our emergency fuel delivery service will bring enough fuel to get you to the nearest gas station. We deliver all fuel types including Special, Super, and Diesel. Our service is available 24/7 across all Dubai areas.",
    price: "AED 90",
    features: [
      "All fuel types (Special, Super, Diesel)",
      "Enough fuel to reach station",
      "Safe fuel delivery",
      "Emergency fuel can provided",
      "24/7 delivery service",
      "Quick response",
      "Professional handling",
      "Multiple fuel options"
    ],
    responseTime: "25-35 min",
    emergency: true,
    image: "/images/services/fuel-delivery.jpg",
    coverage: "All Dubai areas including remote locations",
    benefits: [
      "Quick fuel delivery",
      "All fuel types",
      "Safe handling",
      "Emergency supply"
    ],
    schemaType: "FuelDeliveryService"
  },
  {
    slug: 'car-lockout-service',
    title: "Car Lockout Service",
    description: "Locked out of your car? Get back in without any damage to your vehicle.",
    fullDescription: "Locked out of your car in Dubai? Our professional lockout service helps you regain access to your vehicle without causing any damage. We use specialized tools and techniques that work on all car models and types. Our technicians are trained to handle even the most complex locking systems.",
    price: "AED 120",
    features: [
      "No damage to your vehicle",
      "Professional tools used",
      "All car models",
      "Key replacement assistance",
      "24/7 lockout service",
      "Quick entry",
      "Security focused",
      "Insurance friendly"
    ],
    responseTime: "30-40 min",
    emergency: false,
    image: "/images/services/lockout-service.jpg",
    coverage: "All Dubai areas including secured compounds",
    benefits: [
      "Damage-free entry",
      "Professional tools",
      "All car models",
      "Quick service"
    ],
    schemaType: "LockoutService"
  },
  {
    slug: 'on-spot-repairs',
    title: "On-Spot Repairs",
    description: "Minor mechanical repairs done on location to get you moving safely.",
    fullDescription: "Experiencing minor mechanical issues in Dubai? Our on-spot repair service can handle various minor repairs and diagnostics to get you safely to your destination or repair shop. Our certified technicians carry essential tools and equipment to perform temporary fixes and basic diagnostics.",
    price: "AED 150",
    features: [
      "Minor mechanical repairs",
      "Basic diagnostic services",
      "Temporary fixes available",
      "Professional tools and equipment",
      "Safety inspection included",
      "Expert technicians",
      "Multiple repair types",
      "Quality assurance"
    ],
    responseTime: "30-45 min",
    emergency: false,
    image: "/images/services/onspot-repairs.jpg",
    coverage: "All Dubai areas with technical support",
    benefits: [
      "Quick repairs",
      "Expert diagnosis",
      "Temporary solutions",
      "Safety first approach"
    ],
    schemaType: "AutoRepair"
  }
]

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData.find(s => s.slug === params.slug)
  
  if (!service) {
    return {
      title: "Service Not Found | Dubai Recovery",
      description: "The requested service page was not found."
    }
  }

  return {
    title: `${service.title} | Professional Car Recovery Service Dubai`,
    description: service.fullDescription,
    keywords: `${service.title.toLowerCase()}, car recovery dubai, emergency service, ${service.slug.replace('-', ' ')}`,
    openGraph: {
      title: `${service.title} | Dubai Recovery`,
      description: service.fullDescription.slice(0, 160),
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = servicesData.find(s => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': service.schemaType,
    name: service.title,
    description: service.fullDescription,
    provider: {
      '@type': 'AutoRepair',
      name: 'Dubai Recovery 24/7',
      telephone: '+971-56-344-6682'
    },
    areaServed: 'Dubai',
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'AED'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{service.title}</span>
            </div>
          </div>
        </div>

        {/* Service Hero */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-6">
              <Link 
                href="/services"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Services</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Service Image */}
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl h-64 md:h-80 lg:h-96 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 40vw"
                  />
                </div>
                {service.emergency && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full z-10">
                    🚨 EMERGENCY SERVICE
                  </div>
                )}
              </div>

              {/* Service Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-800">Response Time</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">{service.responseTime}</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-gray-800">Service Price</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{service.price}</p>
                  </div>
                </div>

                {/* Coverage */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-800">Coverage Area</span>
                  </div>
                  <p className="text-gray-600">{service.coverage}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="tel:+971563446682"
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
                  >
                    <Phone className="w-6 h-6" />
                    <span>Call +971 56 344 6682</span>
                  </a>
                  <Link
                    href="/booking"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
                  >
                    <Calendar className="w-6 h-6" />
                    <span>Book Online</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Service Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything included in our {service.title.toLowerCase()}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-800 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose Our {service.title}?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-12 md:py-16 bg-red-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Need {service.title} Right Now?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is standing by 24/7 to provide immediate assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+971563446682"
                className="bg-white text-red-500 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>Call +971 56 344 6682</span>
              </a>
              <Link
                href="/booking"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Service Online</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Why Trust Dubai Recovery?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-800">10K+</div>
                <div className="text-gray-600">Customers Served</div>
              </div>
              <div className="text-center p-6">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-800">30min</div>
                <div className="text-gray-600">Avg Response</div>
              </div>
              <div className="text-center p-6">
                <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-800">4.9/5</div>
                <div className="text-gray-600">Rating</div>
              </div>
              <div className="text-center p-6">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-gray-600">Service</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}