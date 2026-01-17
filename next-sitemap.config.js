/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.crystalrecoveryservice.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    additionalSitemaps: [],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/api/*', '/admin/*', '/private/*', '/404'],
  autoLastmod: true,
  generateIndexSitemap: false,
  outDir: 'public',
  // Add dynamic routes here
  additionalPaths: async (config) => {
    const result = []
    
    // Service pages
    const services = [
      'towing',
      'jump-start', 
      'tire-change',
      'fuel-delivery',
      'lockout',
      'on-spot-repairs'
    ]
    
    services.forEach(slug => {
      result.push({
        loc: `/services/${slug}`,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      })
    })
    
    return result
  },
}