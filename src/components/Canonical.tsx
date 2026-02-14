// src/components/Canonical.tsx
'use client'

import { usePathname } from 'next/navigation'

export default function Canonical() {
  const pathname = usePathname()
  // Remove query parameters
  const basePath = pathname.split('?')[0]
  const canonicalUrl = `https://www.crystalrecoveryservice.com${basePath}`
  
  return <link rel="canonical" href={canonicalUrl} />
}