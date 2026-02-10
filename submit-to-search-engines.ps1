# SEARCH ENGINE SUBMISSION SCRIPT
# Run this after DNS is fixed

Write-Host "=== SUBMIT TO SEARCH ENGINES ===" -ForegroundColor Cyan

$sitemapUrl = "https://www.crystalrecoveryservice.com/sitemap.xml"
$githubSitemap = "https://aic73.github.io/crystal-recovery-service/sitemap.xml"

Write-Host "`n1. GOOGLE SEARCH CONSOLE:" -ForegroundColor White
Write-Host "   - Login: https://search.google.com/search-console" -ForegroundColor Gray
Write-Host "   - Add sitemap: $sitemapUrl" -ForegroundColor Gray
Write-Host "   - Request indexing of homepage" -ForegroundColor Gray

Write-Host "`n2. BING WEBMASTER TOOLS:" -ForegroundColor White
Write-Host "   - Login: https://www.bing.com/webmasters" -ForegroundColor Gray
Write-Host "   - Add site: www.crystalrecoveryservice.com" -ForegroundColor Gray
Write-Host "   - Submit sitemap: $sitemapUrl" -ForegroundColor Gray

Write-Host "`n3. YANDEX WEBMASTER:" -ForegroundColor White
Write-Host "   - Login: https://webmaster.yandex.com" -ForegroundColor Gray
Write-Host "   - Add site and submit sitemap" -ForegroundColor Gray

Write-Host "`n4. DUCKDUCKGO:" -ForegroundColor White
Write-Host "   - No submission needed (uses Bing/Yahoo)" -ForegroundColor Gray

Write-Host "`n5. LOCAL UAE DIRECTORIES:" -ForegroundColor White
Write-Host "   - Yellow Pages UAE" -ForegroundColor Gray
Write-Host "   - Dubizzle" -ForegroundColor Gray
Write-Host "   - UAE Business Directory" -ForegroundColor Gray

Write-Host "`n=== CURRENT SITEMAP STATUS ===" -ForegroundColor Cyan
try {
    $response = Invoke-WebRequest -Uri $githubSitemap -UseBasicParsing
    if ($response.Content -match "www\.crystalrecoveryservice\.com") {
        Write-Host "? Sitemap has correct domain" -ForegroundColor Green
    }
    Write-Host "Sitemap accessible at: $githubSitemap" -ForegroundColor Gray
} catch {
    Write-Host "? Sitemap not accessible: $_" -ForegroundColor Red
}
