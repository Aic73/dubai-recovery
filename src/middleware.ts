import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // Get clean hostname without port
  const cleanHostname = hostname.split(':')[0]
  
  // Define our canonical domain (prefer www)
  const canonicalDomain = 'www.Crystal Recovery Serviceservice.com'
  
  // Only redirect non-www to www
  // Don't redirect if already on www or localhost
  if (cleanHostname === 'Crystal Recovery Serviceservice.com' && !request.url.includes(canonicalDomain)) {
    url.hostname = canonicalDomain
    console.log(`Redirecting ${cleanHostname} to ${canonicalDomain}`)
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except:
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|_vercel).*)',
  ],
}

