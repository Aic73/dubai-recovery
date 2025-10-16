'use client'

import { useState } from 'react'
import { 
  Send, 
  User,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  AlertCircle,
  CheckCircle2
} from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: '',
    emergency: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Car Towing',
    'Jump Start',
    'Tire Change',
    'Fuel Delivery',
    'Lockout Service',
    'On-Spot Repairs',
    'Other Emergency Service'
  ]

// In the handleSubmit function, replace the simulation with actual API call
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      setIsSubmitted(true)
    } else {
      throw new Error('Failed to submit form')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Failed to submit form. Please call us directly at +971 56 344 6682')
  } finally {
    setIsSubmitting(false)
  }
}

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Send Us a Message
        </h2>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within minutes
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center py-8">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600 mb-4">
            Thank you for contacting Dubai Recovery. We'll get back to you within 5 minutes.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-700 font-semibold">
              For immediate assistance, call us at{' '}
              <a href="tel:+971563446682" className="underline">+971 56 344 6682</a>
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Required Service
              </label>
              <select
                value={formData.service}
                onChange={(e) => handleInputChange('service', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
              >
                <option value="">Select a service</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location in Dubai *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your area in Dubai"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                placeholder="Describe your emergency or inquiry..."
              />
            </div>
          </div>

          {/* Emergency Checkbox */}
          <div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-xl">
            <input
              type="checkbox"
              id="emergency"
              checked={formData.emergency}
              onChange={(e) => handleInputChange('emergency', e.target.checked)}
              className="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <label htmlFor="emergency" className="flex items-center space-x-2 text-red-700 font-semibold cursor-pointer">
              <AlertCircle className="w-5 h-5" />
              <span>🚨 This is an emergency - I need immediate assistance!</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>

          <p className="text-center text-gray-500 text-sm">
            For immediate emergency assistance, call{' '}
            <a href="tel:+971563446682" className="text-blue-600 font-semibold hover:underline">
              +971 56 344 6682
            </a>
          </p>
        </form>
      )}
    </div>
  )
}