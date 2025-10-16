'use client'

import { ReactNode } from 'react'
import LoadingSpinner from './LoadingSpinner'

interface LoadingButtonProps {
  children: ReactNode
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export default function LoadingButton({
  children,
  loading = false,
  disabled = false,
  onClick,
  variant = 'primary',
  type = 'button',
  className = ''
}: LoadingButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white"
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {loading && (
        <LoadingSpinner size="sm" color="white" className="mr-2" />
      )}
      {children}
    </button>
  )
}