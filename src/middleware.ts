import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // Remove port if present
  const cleanHostname = hostname.split(':')[0]
  
  // If accessing without www, redirect to www
  if (cleanHostname === 'crystalrecoveryservice.com') {
    url.hostname = 'www.crystalrecoveryservice.com'
    return NextResponse.redirect(url, 301) // Permanent redirect
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
