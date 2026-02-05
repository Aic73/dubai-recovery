'use client'

import { useEffect, useState } from 'react'
import { Car, Phone, MapPin, Clock } from 'lucide-react'

export default function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)

  const loadingMessages = [
    "Preparing emergency response team...",
    "Connecting to nearest recovery vehicle...",
    "Optimizing route for fastest arrival...",
    "Almost ready to serve you..."
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 1
      })
    }, 30)

    const messageTimer = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loadingMessages.length)
    }, 2000)

    return () => {
      clearInterval(timer)
      clearInterval(messageTimer)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 to-purple-900 z-50 flex items-center justify-center">
      <div className="text-center text-white max-w-md mx-4">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
              <Car className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Dubai Recovery</h1>
          <p className="text-blue-200 text-lg">24/7 Emergency Service</p>
        </div>

        {/* Animated Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <div className="flex flex-col items-center animate-bounce" style={{ animationDelay: '0s' }}>
            <Phone className="w-6 h-6 text-green-400 mb-2" />
            <span className="text-xs text-blue-200">Call</span>
          </div>
          <div className="flex flex-col items-center animate-bounce" style={{ animationDelay: '0.2s' }}>
            <MapPin className="w-6 h-6 text-yellow-400 mb-2" />
            <span className="text-xs text-blue-200">Locate</span>
          </div>
          <div className="flex flex-col items-center animate-bounce" style={{ animationDelay: '0.4s' }}>
            <Clock className="w-6 h-6 text-red-400 mb-2" />
            <span className="text-xs text-blue-200">30min</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-white/20 rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-blue-200">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Loading Message */}
        <div className="h-12 flex items-center justify-center">
          <p className="text-blue-200 text-sm animate-pulse">
            {loadingMessages[messageIndex]}
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <p className="text-sm text-blue-200 mb-2">For immediate emergency:</p>
          <a 
            href="tel:+971563446682"
            className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+971 56 344 6682</span>
          </a>
        </div>
      </div>
    </div>
  )
}