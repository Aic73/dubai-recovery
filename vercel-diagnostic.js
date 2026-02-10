// VERCEL DIAGNOSTIC SCRIPT
const fs = require("fs");
const path = require("path");
const https = require("https");

console.log("=== VERCEL DIAGNOSTIC ===\n");

// 1. Check local files
console.log("1. LOCAL FILES IN /public:");
const publicDir = path.join(__dirname, "public");
const files = fs.readdirSync(publicDir);
files.forEach(file => {
    const filePath = path.join(publicDir, file);
    const stats = fs.statSync(filePath);
    console.log(`   ${file}: ${stats.size} bytes`);
    
    if (stats.size < 10000) {
        const content = fs.readFileSync(filePath, "utf8");
        if (content.includes("crystalrecovery.com")) {
            console.log(`     ❌ Contains WRONG domain`);
        }
        if (content.includes("www.crystalrecoveryservice.com")) {
            console.log(`     ✅ Contains CORRECT domain`);
        }
    }
});

// 2. Check package.json build script
console.log("\n2. BUILD CONFIGURATION:");
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
console.log(`   Build command: ${packageJson.scripts.build}`);
console.log(`   Output directory: ${packageJson.output || ".next"}`);

// 3. Check next.config.js
console.log("\n3. NEXT.JS CONFIG:");
try {
    const nextConfig = require("./next.config.js");
    console.log(`   Output type: ${nextConfig.output || "default"}`);
    console.log(`   Has redirects: ${!!nextConfig.redirects}`);
} catch (e) {
    console.log(`   Error reading config: ${e.message}`);
}

console.log("\n=== DIAGNOSTIC COMPLETE ===");
