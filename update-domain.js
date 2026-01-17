const fs = require('fs');
const path = require('path');

const OLD_DOMAIN = 'https://www.crystalrecoveryservice.com';
const NEW_DOMAIN = 'https://www.crystalrecoveryservice.com';

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(OLD_DOMAIN)) {
      const updated = content.replace(new RegExp(OLD_DOMAIN, 'g'), NEW_DOMAIN);
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.log(`❌ Error reading: ${filePath}`);
  }
  return false;
}

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('.next')) {
        scanDirectory(fullPath);
      }
    } else if (
      file.endsWith('.ts') || 
      file.endsWith('.tsx') || 
      file.endsWith('.js') || 
      file.endsWith('.jsx') ||
      file.endsWith('.json') ||
      file.endsWith('.config.js') ||
      file === 'sitemap.xml' ||
      file === 'robots.txt'
    ) {
      updateFile(fullPath);
    }
  });
}

console.log('🔄 Updating domain references...');
console.log(`From: ${OLD_DOMAIN}`);
console.log(`To: ${NEW_DOMAIN}\n`);

// Start scanning
scanDirectory('.');

console.log('\n✅ Domain update complete!');