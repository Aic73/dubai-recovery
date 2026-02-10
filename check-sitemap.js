// MANUAL VERIFICATION AND PURGE SCRIPT
// Run this to check and fix sitemap issues

const https = require("https");
const fs = require("fs");
const path = require("path");

const DOMAIN = "https://www.crystalrecoveryservice.com";
const WRONG_DOMAIN = "crystalrecovery.com";

function checkUrl(url) {
    return new Promise((resolve, reject) => {
        const req = https.get(url, (res) => {
            let data = "";
            res.on("data", (chunk) => data += chunk);
            res.on("end", () => resolve({ url, status: res.statusCode, data }));
        });
        req.on("error", reject);
        req.setTimeout(10000, () => {
            req.destroy();
            reject(new Error("Timeout"));
        });
    });
}

async function runChecks() {
    console.log("🔍 Checking sitemap status...");
    
    const checks = [
        checkUrl(`${DOMAIN}/sitemap.xml`),
        checkUrl(`${DOMAIN}/robots.txt`),
        checkUrl(`${DOMAIN}/`)
    ];
    
    const results = await Promise.allSettled(checks);
    
    console.log("\n=== RESULTS ===");
    
    let allGood = true;
    
    for (const result of results) {
        if (result.status === "fulfilled") {
            const { url, status, data } = result.value;
            console.log(`\n${url} - HTTP ${status}`);
            
            if (url.includes("sitemap.xml")) {
                if (data.includes(DOMAIN)) {
                    console.log("✅ Sitemap has CORRECT domain");
                } else if (data.includes(WRONG_DOMAIN)) {
                    console.log("❌ Sitemap has WRONG domain: " + WRONG_DOMAIN);
                    allGood = false;
                    
                    // Auto-fix
                    console.log("🔄 Auto-fixing sitemap...");
                    const fixedData = data.replace(
                        new RegExp(WRONG_DOMAIN, "g"), 
                        "www.crystalrecoveryservice.com"
                    );
                    fs.writeFileSync(
                        path.join(__dirname, "public", "sitemap.xml"),
                        fixedData,
                        "utf8"
                    );
                    console.log("✅ Sitemap fixed locally");
                }
            }
            
            if (url.includes("robots.txt") && data.includes(WRONG_DOMAIN)) {
                console.log("❌ Robots.txt has wrong domain");
                allGood = false;
            }
            
            if (url === `${DOMAIN}/` && data.includes(WRONG_DOMAIN)) {
                console.log("❌ Homepage has wrong domain references");
                allGood = false;
            }
        } else {
            console.log(`\n❌ Check failed: ${result.reason}`);
            allGood = false;
        }
    }
    
    console.log("\n=== SUMMARY ===");
    if (allGood) {
        console.log("✅ ALL CHECKS PASSED");
    } else {
        console.log("❌ SOME CHECKS FAILED - Manual review needed");
        console.log("Run: node generate-sitemap.js to regenerate");
    }
}

runChecks().catch(console.error);
