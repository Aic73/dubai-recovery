/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://www.crystalrecoveryservice.com',
  },

  
  // FORCE static files to be served
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
    ]
  },
  
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ]
  },

    async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'crystalrecoveryservice.com',
          },
        ],
        destination: 'https://www.crystalrecoveryservice.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'scheme',
            value: 'http',
          },
        ],
        destination: 'https://www.crystalrecoveryservice.com/:path*',
        permanent: true,
      },
    ]
  },


}

module.exports = nextConfig


