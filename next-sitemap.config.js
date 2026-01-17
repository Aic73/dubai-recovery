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
}