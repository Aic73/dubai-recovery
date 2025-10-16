'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { 
  ArrowLeft, 
  Car, 
  Calendar, 
  MapPin, 
  User, 
  Phone, 
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Shield,
  Star,
  Navigation,
  ChevronRight,
  Info,
  Sparkles,
  Wrench,
  Fuel,
  Key,
  Battery,
  Settings
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function BookingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    carType: '',
    carModel: '',
    problem: '',
    emergency: false,
    schedule: 'asap'
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())

  const stepRefs = {
    step1: useRef<HTMLDivElement>(null),
    step2: useRef<HTMLDivElement>(null),
    step3: useRef<HTMLDivElement>(null)
  }

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    { 
      value: 'towing', 
      label: 'Car Towing', 
      icon: <Car className="w-6 h-6" />, 
      description: 'Professional towing for all vehicles',
      price: 'AED 100+',
      features: ['All vehicle types', 'Safe transport', '24/7 service']
    },
    { 
      value: 'jump-start', 
      label: 'Jump Start', 
      icon: <Battery className="w-6 h-6" />, 
      description: 'Dead battery assistance',
      price: 'AED 80',
      features: ['Fast service', 'Proper equipment', 'Battery check']
    },
    { 
      value: 'tire-change', 
      label: 'Tire Change', 
      icon: <Settings className="w-6 h-6" />, 
      description: 'Flat tire repair & replacement',
      price: 'AED 70',
      features: ['Spare tire install', 'Tire repair', 'Wheel safety']
    },
    { 
      value: 'fuel-delivery', 
      label: 'Fuel Delivery', 
      icon: <Fuel className="w-6 h-6" />, 
      description: 'Emergency fuel supply',
      price: 'AED 90',
      features: ['Any fuel type', 'Enough for station', 'Quick delivery']
    },
    { 
      value: 'lockout', 
      label: 'Lockout Service', 
      icon: <Key className="w-6 h-6" />, 
      description: 'Car lockout assistance',
      price: 'AED 120',
      features: ['No damage', 'Quick entry', 'All car models']
    },
    { 
      value: 'repairs', 
      label: 'On-Spot Repairs', 
      icon: <Wrench className="w-6 h-6" />, 
      description: 'Minor mechanical repairs',
      price: 'AED 150+',
      features: ['Basic repairs', 'Diagnostic', 'Temporary fixes']
    }
  ]

  const carTypes = [
    'Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 
    'Minivan', 'Pickup Truck', 'Luxury Car', 'Sports Car', 'Other'
  ]

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Full name is required'
      } else if (formData.name.trim().length < 2) {
        newErrors.name = 'Please enter a valid name (min 2 characters)'
      }

      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required'
      } else if (!/^[\+]?[971]{3}[-\s]?[0-9]{8,12}$/.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Please enter a valid UAE phone number starting with +971'
      }
    }

    if (step === 2) {
      if (!formData.service) {
        newErrors.service = 'Please select a service type'
      }
    }

    if (step === 3) {
      if (!formData.location.trim()) {
        newErrors.location = 'Location is required'
      } else if (formData.location.trim().length < 5) {
        newErrors.location = 'Please provide a more specific location (min 5 characters)'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateStep(3)) {
      const firstError = Object.keys(errors)[0]
      const element = document.getElementById(firstError)
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setIsSubmitting(true)
    
// In the handleSubmit function, replace the current try-catch with:
try {
  const response = await fetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...formData,
      timestamp: new Date().toISOString(),
      status: 'pending'
    })
  })

  const result = await response.json()

  if (response.ok) {
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitted(true)
  } else {
    throw new Error(result.error || 'Failed to submit booking')
  }
} catch (error) {
  console.error('Booking error:', error)
  alert('Failed to submit booking. Please call us directly at +971 56 344 6682')
} finally {
  setIsSubmitting(false)
}


  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setTouchedFields(prev => new Set(prev).add(field))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleInputBlur = (field: string) => {
    setTouchedFields(prev => new Set(prev).add(field))
    validateStep(currentStep)
  }

  const scrollToStep = (step: number) => {
    const refKey = `step${step}` as keyof typeof stepRefs
    stepRefs[refKey].current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start'
    })
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      const nextStepNumber = currentStep + 1
      setCurrentStep(nextStepNumber)
      setTimeout(() => scrollToStep(nextStepNumber), 100)
    } else {
      // Scroll to first error in current step
      const firstError = Object.keys(errors)[0]
      const element = document.getElementById(firstError)
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const prevStep = () => {
    const prevStepNumber = currentStep - 1
    setCurrentStep(prevStepNumber)
    setTimeout(() => scrollToStep(prevStepNumber), 100)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const slideInVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: -50,
      transition: { duration: 0.3 }
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity }
            }}
            className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <Car className="text-white w-8 h-8" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-gray-800"
          >
            Loading Booking System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 mt-2"
          >
            Preparing your emergency service request...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center"
        >
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <CheckCircle2 className="text-white w-12 h-12" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Booking Confirmed! 🎉
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4 mb-6"
          >
            <p className="text-gray-600">
              Thank you <strong className="text-blue-600">{formData.name}</strong>!
            </p>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-blue-700 font-semibold">
                📞 We'll call you at: <br />
                <span className="text-lg">{formData.phone}</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4 mb-6 shadow-lg"
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-lg">Emergency Response: 20-30 minutes</span>
            </div>
            <p className="text-green-100 text-sm">
              Keep your phone handy for our confirmation call
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-3"
          >
            <Link
              href="/"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ← Back to Home Page
            </Link>
            <a
              href="tel:+971563446682"
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now +971 56 344 6682</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm border-b sticky top-0 z-40"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.back()}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-black" />
              </motion.button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Book Emergency Service</h1>
                <p className="text-gray-600 text-sm">Fast, reliable car recovery across Dubai</p>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:flex items-center space-x-2 text-sm text-gray-500"
            >
              <Shield className="w-4 h-4 text-green-500" />
              <span>Secure Booking • 24/7 Support</span>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Progress Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white border-b"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-4 sm:space-x-8 max-w-md mx-auto">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center space-x-2 sm:space-x-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    if (step < currentStep) {
                      setCurrentStep(step)
                      setTimeout(() => scrollToStep(step), 100)
                    }
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all duration-300 ${
                    currentStep >= step 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg cursor-pointer' 
                      : step === currentStep
                      ? 'bg-white text-blue-600 border-blue-600'
                      : 'bg-white text-gray-400 border-gray-300'
                  }`}
                >
                  {step}
                </motion.button>
                <span className={`text-sm font-medium hidden sm:block ${
                  currentStep >= step ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  {step === 1 ? 'Your Details' : step === 2 ? 'Service Info' : 'Confirmation'}
                </span>
                {step < 3 && (
                  <ChevronRight className="w-4 h-4 text-gray-300 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Emergency Alert */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 mb-8 shadow-lg relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="text-white w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">🚨 24/7 Emergency Service Available</h3>
                <p className="text-red-100 opacity-90 text-sm sm:text-base">
                  We guarantee response within <strong>30 minutes</strong> anywhere in Dubai. 
                  Call us directly for immediate assistance.
                </p>
              </div>
              <a
                href="tel:+971563446682"
                className="bg-white text-red-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap flex items-center space-x-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
            
            {/* Animated background elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"
            />
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8"
          >
            {[
              { icon: '⏱️', text: '30 Min Response', color: 'bg-blue-500' },
              { icon: '🛡️', text: 'Certified Experts', color: 'bg-green-500' },
              { icon: '💰', text: 'No Hidden Fees', color: 'bg-purple-500' },
              { icon: '📞', text: '24/7 Support', color: 'bg-orange-500' }
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                className="bg-white rounded-xl p-4 text-center shadow-sm border hover:shadow-md transition-all duration-300"
              >
                <div className="text-2xl mb-2">{badge.icon}</div>
                <p className="text-sm font-medium text-gray-700">{badge.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Personal Information */}
            <motion.div
              ref={stepRefs.step1}
              key="step-1"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl shadow-sm border p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Your Contact Information</h3>
                  <p className="text-sm text-gray-500">We'll use this to contact you immediately</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onBlur={() => handleInputBlur('name')}
                    className={`w-full px-4 py-3 border rounded-xl text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      errors.name ? 'border-red-300 bg-red-50' : 
                      touchedFields.has('name') && formData.name ? 'border-green-300 bg-green-50' : 
                      'border-gray-300 hover:border-gray-400'
                    }`}
                    placeholder="Enter your full name (e.g., Ahmed Mohammed)"
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-600 text-sm mt-2 flex items-center space-x-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                  {touchedFields.has('name') && formData.name && !errors.name && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-600 text-sm mt-2 flex items-center space-x-1"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Name looks good!</span>
                    </motion.p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Phone Number *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    onBlur={() => handleInputBlur('phone')}
                    className={`w-full px-4 py-3 border rounded-xl text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      errors.phone ? 'border-red-300 bg-red-50' : 
                      touchedFields.has('phone') && formData.phone && !errors.phone ? 'border-green-300 bg-green-50' : 
                      'border-gray-300 hover:border-gray-400'
                    }`}
                    placeholder="+971 50 123 4567 (UAE format)"
                  />
                  <AnimatePresence>
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-600 text-sm mt-2 flex items-center space-x-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.phone}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                  {touchedFields.has('phone') && formData.phone && !errors.phone && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-600 text-sm mt-2 flex items-center space-x-1"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Valid phone number!</span>
                    </motion.p>
                  )}
                  <p className="text-gray-500 text-xs mt-2 flex items-center space-x-1">
                    <Info className="w-3 h-3" />
                    <span>We'll call this number within 5 minutes</span>
                  </p>
                </div>
              </div>

              {/* Email Field */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Email Address (Optional)
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={() => handleInputBlur('email')}
                  className={`w-full px-4 py-3 border rounded-xl text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400 ${
                    touchedFields.has('email') && formData.email ? 'border-green-300 bg-green-50' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com (for booking confirmation)"
                />
                {touchedFields.has('email') && formData.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 text-sm mt-2 flex items-center space-x-1"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Email added for confirmation</span>
                  </motion.p>
                )}
              </div>

              {/* Step Navigation */}
              <div className="flex justify-end mt-6">
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-lg"
                >
                  <span>Continue to Service</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Step 2: Service Selection */}
            <AnimatePresence>
              {currentStep >= 2 && (
                <motion.div
                  ref={stepRefs.step2}
                  key="step-2"
                  variants={slideInVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white rounded-2xl shadow-sm border p-6"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Car className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Service & Vehicle Details</h3>
                      <p className="text-sm text-gray-500">What service do you need and for which vehicle?</p>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Required Service Type *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                      {services.map((service) => (
                        <motion.button
                          key={service.value}
                          type="button"
                          onClick={() => handleInputChange('service', service.value)}
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-left group relative overflow-hidden ${
                            formData.service === service.value
                              ? 'border-blue-500 bg-blue-50 shadow-md'
                              : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
                          } ${errors.service ? 'border-red-300' : ''}`}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                              {service.icon}
                            </div>
                            {formData.service === service.value && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                              >
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              </motion.div>
                            )}
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm mb-1">{service.label}</h4>
                          <p className="text-gray-600 text-xs mb-2">{service.description}</p>
                          <div className="text-blue-600 font-bold text-sm mb-2">{service.price}</div>
                          
                          {/* Features */}
                          <div className="space-y-1">
                            {service.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-1">
                                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-500 text-xs">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Hover effect */}
                          <motion.div
                            className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                            whileHover={{ opacity: 0.1 }}
                          />
                        </motion.button>
                      ))}
                    </div>
                    <AnimatePresence>
                      {errors.service && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-red-600 text-sm mt-3 flex items-center space-x-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.service}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                    {formData.service && !errors.service && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-green-600 text-sm mt-3 flex items-center space-x-1"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Service selected! Great choice.</span>
                      </motion.p>
                    )}
                  </div>

                  {/* Vehicle Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Car Type
                      </label>
                      <motion.select
                        whileFocus={{ scale: 1.02 }}
                        value={formData.carType}
                        onChange={(e) => handleInputChange('carType', e.target.value)}
                        onBlur={() => handleInputBlur('carType')}
                        className={`w-full px-4 py-3 border rounded-xl text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400 bg-white ${
                          touchedFields.has('carType') && formData.carType ? 'border-green-300 bg-green-50' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select your car type...</option>
                        {carTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </motion.select>
                      {touchedFields.has('carType') && formData.carType && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-green-600 text-sm mt-2 flex items-center space-x-1"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Car type selected</span>
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Car Model & Year
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        value={formData.carModel}
                        onChange={(e) => handleInputChange('carModel', e.target.value)}
                        onBlur={() => handleInputBlur('carModel')}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 text-black focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400 ${
                          touchedFields.has('carModel') && formData.carModel ? 'border-green-300 bg-green-50' : 'border-gray-300'
                        }`}
                        placeholder="e.g., Toyota Camry 2022, BMW X5 2020..."
                      />
                      {touchedFields.has('carModel') && formData.carModel && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-green-600 text-sm mt-2 flex items-center space-x-1"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Model info added</span>
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Step Navigation */}
                  <div className="flex justify-between mt-8">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-lg"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span>Back</span>
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-lg"
                    >
                      <span>Continue to Location</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 3: Location & Problem */}
            <AnimatePresence>
              {currentStep >= 3 && (
                <motion.div
                  ref={stepRefs.step3}
                  key="step-3"
                  variants={slideInVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  {/* Location & Problem */}
                  <div className="bg-white rounded-2xl shadow-sm border p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Location & Problem Details</h3>
                        <p className="text-sm text-gray-500">Where are you and what's the issue?</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Current Location in Dubai *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        id="location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        onBlur={() => handleInputBlur('location')}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 text-black focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                          errors.location ? 'border-red-300 bg-red-50' : 
                          touchedFields.has('location') && formData.location && !errors.location ? 'border-green-300 bg-green-50' : 
                          'border-gray-300 hover:border-gray-400'
                        }`}
                        placeholder="e.g., Dubai Marina, Near Jumeirah Beach, Sheikh Zayed Road Exit 42..."
                      />
                      <AnimatePresence>
                        {errors.location && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-red-600 text-sm mt-2 flex items-center space-x-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.location}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                      {touchedFields.has('location') && formData.location && !errors.location && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-green-600 text-sm mt-2 flex items-center space-x-1"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Location saved - we're finding the fastest route!</span>
                        </motion.p>
                      )}
                      <p className="text-gray-500 text-xs mt-2 flex items-center space-x-1">
                        <Info className="w-3 h-3" />
                        <span>💡 Be specific: Include area, street, landmark, or GPS coordinates</span>
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Problem Description
                      </label>
                      <motion.textarea
                        whileFocus={{ scale: 1.01 }}
                        value={formData.problem}
                        onChange={(e) => handleInputChange('problem', e.target.value)}
                        onBlur={() => handleInputBlur('problem')}
                        rows={4}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 text-black focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400 resize-none ${
                          touchedFields.has('problem') && formData.problem ? 'border-green-300 bg-green-50' : 'border-gray-300'
                        }`}
                        placeholder="Describe what happened to your vehicle. For example: 'Car won't start, making clicking sound', 'Flat tire on driver side', 'Ran out of fuel near Mall of Emirates'..."
                      />
                      {touchedFields.has('problem') && formData.problem && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-green-600 text-sm mt-2 flex items-center space-x-1"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Problem description added - helps us prepare!</span>
                        </motion.p>
                      )}
                      <p className="text-gray-500 text-xs mt-2 flex items-center space-x-1">
                        <Info className="w-3 h-3" />
                        <span>💡 Detailed description helps us bring the right equipment</span>
                      </p>
                    </div>
                  </div>

                  {/* Emergency Option */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.input
                        whileTap={{ scale: 0.95 }}
                        type="checkbox"
                        id="emergency"
                        checked={formData.emergency}
                        onChange={(e) => handleInputChange('emergency', e.target.checked)}
                        className="w-6 h-6 text-red-600 focus:ring-red-500 border-gray-300 rounded mt-1 cursor-pointer"
                      />
                      <div className="flex-1">
                        <label htmlFor="emergency" className="text-lg font-bold text-red-700 flex items-center space-x-2 cursor-pointer">
                          <AlertCircle className="w-6 h-6" />
                          <span>🚨 URGENT: This is an Emergency Situation</span>
                        </label>
                        <p className="text-red-600 mt-2">
                          Check this box if you're in a dangerous location (highway, unsafe area) or need immediate assistance. 
                          We'll prioritize your service and aim to reach you within <strong>20 minutes</strong>.
                        </p>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ 
                            opacity: formData.emergency ? 1 : 0,
                            height: formData.emergency ? 'auto' : 0
                          }}
                          className="bg-white rounded-lg p-3 mt-3 border border-red-200 overflow-hidden"
                        >
                          <p className="text-red-700 text-sm font-semibold">
                            ⚡ Emergency Priority: Faster response • Dedicated team • Priority dispatch
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Submit Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg border p-6 sticky bottom-4"
                  >
                    <div className="text-center space-y-4">
                      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Shield className="w-4 h-4 text-green-500" />
                          <span>Secure Booking</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>4.9/5 Customer Rating</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span>24/7 Service</span>
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-lg relative overflow-hidden"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center justify-center space-x-2"
                            >
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Processing Your Emergency Booking...</span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="submit"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center justify-center space-x-2"
                            >
                              <Sparkles className="w-5 h-5" />
                              <span>
                                {formData.emergency ? '🚨 BOOK EMERGENCY SERVICE NOW' : 'Book Service Now'}
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        {/* Button shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '200%' }}
                          transition={{ duration: 1 }}
                        />
                      </motion.button>

                      <div className="text-center pt-4 border-t border-gray-200">
                        <p className="text-gray-600 mb-3">Need immediate help? Call us directly</p>
                        <motion.a
                          href="tel:+971563446682"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md"
                        >
                          <Phone className="w-5 h-5" />
                          <span>Call +971 56 344 6682</span>
                        </motion.a>
                        <p className="text-gray-500 text-sm mt-3">
                          We're available 24/7 • Arabic & English speaking operators
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </div>
  )
}