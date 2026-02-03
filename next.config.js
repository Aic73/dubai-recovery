{import('next').NextConfig}
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  },
  // No redirects - they were causing issues
  async redirects() {
    return []
  }
}


module.exports = nextConfig
