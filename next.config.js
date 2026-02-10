/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  // NO redirects - using _redirects file instead
  trailingSlash: false
}

module.exports = nextConfig
