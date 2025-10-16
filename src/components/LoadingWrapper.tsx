'use client'

import { useLoading } from '@/contexts/LoadingContext'
import PageLoader from './PageLoader'

interface LoadingWrapperProps {
  children: React.ReactNode
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const { isLoading } = useLoading()

  return (
    <>
      {isLoading && <PageLoader />}
      <div className={isLoading ? 'opacity-50 pointer-events-none' : ''}>
        {children}
      </div>
    </>
  )
}