/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://dubairecovery247.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://dubairecovery247.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/api/*'],
}