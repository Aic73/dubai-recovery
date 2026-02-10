/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      // Redirect wrong sitemap domain
      {
        source: "/sitemap.xml",
        has: [
          {
            type: "host",
            value: "crystalrecovery.com",
          },
        ],
        destination: "https://www.crystalrecoveryservice.com/sitemap.xml",
        permanent: true,
      },
      // Redirect all wrong domain requests
      {
        source: "/:path*",
        has: [
          {
            type: "host", 
            value: "crystalrecovery.com",
          },
        ],
        destination: "https://www.crystalrecoveryservice.com/:path*",
        permanent: true,
      }
    ];
  }
}

module.exports = nextConfig
