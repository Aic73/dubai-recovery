'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { 
  Phone, 
  Menu, 
  X, 
  Car, 
  Wrench, 
  MapPin, 
  User, 
  MessageCircle,
  Shield,
  Clock,
  Calendar,
  MessageSquare,
  Zap,
  Navigation,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Quick Actions Modal Component
function QuickActionsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter()

  const handleBookAppointment = () => {
    onClose()
    // Navigate to booking page
    router.push('/booking')
  }

  const handleWhatsApp = () => {
    const message = "Hello! I need emergency car recovery service in Dubai. Please help me ASAP!"
    const phone = "971563446682"
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
    onClose()
  }

  const handleCall = () => {
    window.location.href = 'tel:+971563446682'
    onClose()
  }

  const quickActions = [
    {
      icon: <Calendar className="text-blue-600" size={24} />,
      title: "Book Online",
      description: "Schedule service appointment",
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      textColor: "text-blue-700",
      action: handleBookAppointment
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Call Now",
      description: "Immediate assistance",
      color: "bg-green-50 hover:bg-green-100 border-green-200",
      textColor: "text-green-700",
      action: handleCall
    },
    {
      icon: <MessageSquare className="text-[#25D366]" size={24} />,
      title: "WhatsApp",
      description: "Quick chat support",
      color: "bg-[#25D366]/10 hover:bg-[#25D366]/20 border-[#25D366]/20",
      textColor: "text-[#128C7E]",
      action: handleWhatsApp
    },
    {
      icon: <Navigation className="text-purple-600" size={24} />,
      title: "Live Location",
      description: "Share your location",
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      textColor: "text-purple-700",
      action: () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`
            window.open(mapsUrl, '_blank')
          })
        }
        onClose()
      }
    }
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-3xl max-w-md w-full shadow-2xl"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-6 rounded-t-3xl">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Zap size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Quick Help</h2>
                  <p className="text-blue-100 text-sm">Choose how you want to get help</p>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50 border border-red-200 mx-6 -mt-3 rounded-xl p-4 relative z-10 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle size={16} className="text-red-600" />
            </div>
            <div>
              <p className="text-red-800 font-semibold text-sm">Emergency Service</p>
              <p className="text-red-600 text-xs">Average response time: 25 minutes</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 space-y-3">
          {quickActions.map((action, index) => (
            <motion.button
              key={action.title}
              onClick={action.action}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center space-x-4 group ${action.color} ${action.textColor}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                {action.icon}
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg">{action.title}</h3>
                <p className="text-sm opacity-80">{action.description}</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 rounded-full bg-current opacity-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-current" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-3xl">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Shield size={14} className="text-green-500" />
            <span className="text-xs">24/7 Certified Professionals</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false)
  
  const pathname = usePathname()
  const lastScrollY = useRef(0)
  const scrollTimeout = useRef<NodeJS.Timeout>()

  // Improved scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling DOWN - hide header
        setIsHeaderVisible(false)
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP - show header
        setIsHeaderVisible(true)
      }

      // Background effect based on scroll position
      setIsScrolled(currentScrollY > 30)
      
      // Update last scroll position
      lastScrollY.current = currentScrollY

      // Set timeout to ensure header stays visible after scrolling stops
      scrollTimeout.current = setTimeout(() => {
        setIsHeaderVisible(true)
      }, 1200)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  const navigation = [
    { 
      name: 'Home', 
      href: '/', 
      icon: <Car size={18} /> 
    },
    { 
      name: 'Services', 
      href: '/services', 
      icon: <Wrench size={18} /> 
    },
    { 
      name: 'Areas', 
      href: '/areas', 
      icon: <MapPin size={18} /> 
    },
    { 
      name: 'About', 
      href: '/about', 
      icon: <User size={18} /> 
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      icon: <MessageCircle size={18} /> 
    },
  ]

  const isActive = (path: string) => pathname === path

  // Animation variants
  const headerVariants = {
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    },
    hidden: { 
      y: -120,
      transition: {
        type: "spring", 
        stiffness: 400,
        damping: 30
      }
    }
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const itemVariants = {
    closed: { 
      opacity: 0, 
      x: -20 
    },
    open: { 
      opacity: 1, 
      x: 0 
    }
  }

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-200/60' 
            : 'bg-white shadow-lg'
        }`}
        variants={headerVariants}
        animate={isHeaderVisible ? "visible" : "hidden"}
        initial="visible"
      >
        {/* Top Emergency Bar - Always visible */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-1.5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Clock size={12} />
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="hidden sm:flex items-center space-x-1">
                  <Shield size={12} />
                  <span>Certified Professionals</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={12} />
                <a 
                  href="tel:+971563446682" 
                  className="font-semibold hover:underline text-sm"
                >
                  +971 56 344 6682
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation - Compact Height */}
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo with Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/Logo.webp"
                      alt="Dubai Recovery 24/7"
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                      priority
                    />
                  </div>
                  <motion.div 
                    className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </motion.div>
                </div>
                <div className="flex flex-col">
                  <motion.h1 
                    className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.01 }}
                  >
                    Dubai Recovery
                  </motion.h1>
                  <div className="text-[10px] font-semibold text-red-500 flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    <span>24/7 Emergency Response</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 font-medium px-3 py-2 rounded-lg transition-all duration-200 group ${
                      isActive(item.href)
                        ? 'bg-blue-50 text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`transition-colors duration-200 ${
                        isActive(item.href) ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-500'
                      }`}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-sm">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* Quick Actions Button */}
              <motion.button
                onClick={() => setIsQuickActionsOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-full flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px -5px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Zap size={16} />
                </motion.div>
                <span className="text-sm">Quick Help</span>
              </motion.button>

              {/* Emergency Call Button */}
              <motion.a
                href="tel:+971563446682"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-full flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px -5px rgba(239, 68, 68, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Phone size={16} />
                </motion.div>
                <span className="text-sm">Call Now</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="lg:hidden overflow-hidden"
              >
                <div className="border-t border-gray-200 py-3 bg-white/95 backdrop-blur-md">
                  <nav className="flex flex-col space-y-1">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center space-x-3 font-medium py-2.5 px-4 rounded-xl transition-all duration-200 ${
                            isActive(item.href)
                              ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600 shadow-sm'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className={`transition-colors duration-200 ${
                            isActive(item.href) ? 'text-blue-600' : 'text-gray-400'
                          }`}>
                            {item.icon}
                          </div>
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                    
                    {/* Mobile Action Buttons */}
                    <motion.div
                      variants={itemVariants}
                      transition={{ delay: navigation.length * 0.1 }}
                      className="pt-3 border-t border-gray-200 mt-2 space-y-2"
                    >
                      <button
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsQuickActionsOpen(true)
                        }}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 text-sm"
                      >
                        <Zap size={16} />
                        <span>Quick Help</span>
                      </button>
                      
                      <a
                        href="tel:+971563446682"
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 block text-center text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Phone size={16} />
                        <span>Emergency Call</span>
                      </a>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Quick Actions Modal */}
      <QuickActionsModal 
        isOpen={isQuickActionsOpen} 
        onClose={() => setIsQuickActionsOpen(false)}
      />

      {/* Spacer for fixed header - Reduced height */}
      <div className="h-20"></div>
    </>
  )
}