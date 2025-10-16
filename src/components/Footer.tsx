import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Car Towing', href: '/services#towing' },
    { name: 'Jump Start', href: '/services#jump-start' },
    { name: 'Tire Change', href: '/services#tire-change' },
    { name: 'Fuel Delivery', href: '/services#fuel-delivery' },
    { name: 'Lockout Service', href: '/services#lockout' },
    { name: 'On-Spot Repairs', href: '/services#repairs' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Areas Covered', href: '/areas' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ]

  const areas = [
    'Downtown Dubai',
    'Dubai Marina',
    'Jumeirah',
    'Deira',
    'Bur Dubai',
    'JLT',
    'JVC',
    'Business Bay',
    'Al Barsha',
    'Al Quoz'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">DR</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dubai Recovery</h3>
                <p className="text-red-400 text-sm font-semibold">24/7 Emergency Service</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for fast and reliable car recovery services across Dubai. 
              We&apos;re here for you 24/7, 365 days a year.
            </p>
            <div className="flex space-x-3">
              {/* Social Media Icons - You can add links later */}
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span className="text-xs font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <span className="text-xs font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Emergency Line</p>
                  <a 
                    href="tel:+971563446682" 
                    className="text-white font-semibold hover:text-red-400 transition-colors"
                  >
                    +971 56 344 6682
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email Us</p>
                  <a 
                    href="mailto:info@dubairecovery247.com" 
                    className="text-white font-semibold hover:text-blue-400 transition-colors text-sm"
                  >
                    info@dubairecovery247.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Service Area</p>
                  <p className="text-white text-sm">Covering All Dubai Areas</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock size={14} />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Working Hours</p>
                  <p className="text-white text-sm">24 Hours, 7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Areas We Serve */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-4 text-center text-white">Areas We Serve in Dubai</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
            {areas.map((area, index) => (
              <span key={index} className="text-gray-300 text-sm bg-gray-800 py-1 px-3 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Dubai Recovery 24/7. All rights reserved.
            </div>

            {/* Emergency CTA */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Emergency Service:</span>
              <a 
                href="tel:+971563446682"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}