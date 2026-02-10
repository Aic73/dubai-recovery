// BUILD VERIFICATION SCRIPT
// Run: node verify-build.js

const fs = require("fs");
const path = require("path");

console.log("🔍 Verifying build files...");

const checks = [
  {
    file: "public/sitemap.xml",
    required: true,
    mustContain: "www.crystalrecoveryservice.com",
    mustNotContain: ["crystalrecovery.com", "dubairecovery247.com"]
  },
  {
    file: "public/robots.txt", 
    required: true,
    mustContain: "crystalrecoveryservice.com/sitemap.xml",
    mustNotContain: ["crystalrecovery.com"]
  },
  {
    file: "public/_redirects",
    required: true,
    mustContain: "crystalrecoveryservice.com",
    mustNotContain: []
  },
  {
    file: "public/.nojekyll",
    required: true,
    mustContain: "",
    mustNotContain: []
  }
];

let allPassed = true;

checks.forEach(check => {
  const filePath = path.join(__dirname, check.file);
  
  if (!fs.existsSync(filePath)) {
    if (check.required) {
      console.log(`❌ ${check.file}: MISSING`);
      allPassed = false;
    } else {
      console.log(`⚠️  ${check.file}: Optional, not found`);
    }
    return;
  }
  
  const content = fs.readFileSync(filePath, "utf8");
  let passed = true;
  
  if (check.mustContain && !content.includes(check.mustContain)) {
    console.log(`❌ ${check.file}: Missing "${check.mustContain}"`);
    passed = false;
  }
  
  check.mustNotContain.forEach(bad => {
    if (content.includes(bad)) {
      console.log(`❌ ${check.file}: Contains forbidden "${bad}"`);
      passed = false;
    }
  });
  
  if (passed) {
    console.log(`✅ ${check.file}: OK`);
  } else {
    allPassed = false;
  }
});

console.log("\n=== BUILD VERIFICATION " + (allPassed ? "PASSED ✅" : "FAILED ❌") + " ===");

if (!allPassed) {
  console.log("\n🛠️  Running emergency fix...");
  
  // Create emergency sitemap
  const emergencySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://www.crystalrecoveryservice.com/</loc></url>
<url><loc>https://www.crystalrecoveryservice.com/services</loc></url>
<url><loc>https://www.crystalrecoveryservice.com/areas</loc></url>
<url><loc>https://www.crystalrecoveryservice.com/booking</loc></url>
<url><loc>https://www.crystalrecoveryservice.com/contact</loc></url>
<url><loc>https://www.crystalrecoveryservice.com/about</loc></url>
</urlset>`;
  
  fs.writeFileSync(
    path.join(__dirname, "public", "sitemap.xml"),
    emergencySitemap,
    "utf8"
  );
  
  console.log("✅ Emergency sitemap created");
  process.exit(1);
}
