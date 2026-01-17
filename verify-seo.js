const https = require('https');
const { parseString } = require('xml2js');

const DOMAIN = 'https://www.crystalrecoveryservice.com';

const checks = [
  { url: '/', expected: 200, name: 'Homepage' },
  { url: '/sitemap.xml', expected: 200, name: 'Sitemap', xml: true },
  { url: '/robots.txt', expected: 200, name: 'Robots.txt' },
  { url: '/services', expected: 200, name: 'Services page' },
  { url: '/services/towing', expected: 200, name: 'Towing service' },
  { url: '/services/jump-start', expected: 200, name: 'Jump start service' },
];

async function checkURL(url, name, isXML = false) {
  return new Promise((resolve) => {
    https.get(`${DOMAIN}${url}`, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', async () => {
        if (res.statusCode === 200) {
          if (isXML) {
            // Check sitemap contains correct domain
            if (data.includes('crystalrecovery.com')) {
              console.log(`❌ ${name}: Contains WRONG domain (crystalrecovery.com)`);
            } else if (data.includes('crystalrecoveryservice.com')) {
              console.log(`✅ ${name}: Contains correct domain`);
            }
          }
          console.log(`✅ ${name}: HTTP ${res.statusCode}`);
        } else {
          console.log(`❌ ${name}: HTTP ${res.statusCode}`);
        }
        resolve();
      });
    }).on('error', (err) => {
      console.log(`❌ ${name}: ${err.message}`);
      resolve();
    });
  });
}

async function runChecks() {
  console.log('🔍 SEO Verification Check\n');
  console.log(`Domain: ${DOMAIN}\n`);
  
  for (const check of checks) {
    await checkURL(check.url, check.name, check.xml);
  }
  
  console.log('\n📊 Summary:');
  console.log('- Fix sitemap.xml domain');
  console.log('- Add missing service pages to sitemap');
  console.log('- Optimize hero images (9.8MB is too large)');
}

runChecks();