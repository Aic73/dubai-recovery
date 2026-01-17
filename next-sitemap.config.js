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
  
  // Add dynamic paths
  additionalPaths: async (config) => {
    const services = [
      'towing',
      'jump-start', 
      'tire-change',
      'fuel-delivery',
      'lockout',
      'on-spot-repairs'
    ];
    
    const paths = services.map(slug => ({
      loc: `/services/${slug}`,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }));
    
    // Add other important pages
    const otherPages = [
      { loc: '/services', priority: 0.8 },
      { loc: '/areas', priority: 0.8 },
      { loc: '/booking', priority: 0.9 },
      { loc: '/contact', priority: 0.7 },
      { loc: '/about', priority: 0.5 },
    ];
    
    return [
      ...paths,
      ...otherPages.map(page => ({
        loc: page.loc,
        changefreq: 'weekly',
        priority: page.priority,
        lastmod: new Date().toISOString(),
      }))
    ];
  },
};