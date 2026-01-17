import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/'],
    },
    sitemap: 'https://www.crystalrecoveryservice.com/sitemap.xml',
    host: 'https://www.crystalrecoveryservice.com',
  }
}