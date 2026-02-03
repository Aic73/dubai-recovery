const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact', 
        permanent: true,
      },
      {
        source: '/booking',
        destination: '/booking',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/areas',
        destination: '/areas',
        permanent: true,
      },
      // Service pages
      {
        source: '/services/:slug',
        destination: '/services/:slug',
        permanent: true,
      },
    ]
  },
}