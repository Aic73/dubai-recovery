$nextConfig = module.exports = {
  output: "standalone",
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://www.crystalrecoveryservice.com',
  },
  
  // Redirect /sitemap.xml to our API route
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap',
        permanent: true,
      },
    ]
  },
  
  // Headers for XML files
  async headers() {
    return [
      {
        source: '/sitemap',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ]
  },
}