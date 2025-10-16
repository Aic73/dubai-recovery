'use client'

import { useEffect, useState } from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'blue' | 'red' | 'white'
  text?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'blue',
  text 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const colorClasses = {
    blue: 'text-blue-600',
    red: 'text-red-600',
    white: 'text-white'
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}>
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
      {text && (
        <p className={`text-sm font-medium ${colorClasses[color]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  )
}