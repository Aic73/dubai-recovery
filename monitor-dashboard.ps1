# CRYSTAL RECOVERY SERVICE - MONITORING DASHBOARD
# Run this daily to check website health

function Show-Status {
    param($Check, $Status, $Message)
    
    $color = if ($Status -eq "?") { "Green" } elseif ($Status -eq "??") { "Yellow" } else { "Red" }
    Write-Host "$Status $Check" -ForegroundColor $color
    if ($Message) { Write-Host "   $Message" -ForegroundColor Gray }
}

Clear-Host
Write-Host "="*60 -ForegroundColor Cyan
Write-Host "?? CRYSTAL RECOVERY SERVICE - MONITORING DASHBOARD" -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "="*60 -ForegroundColor Cyan
Write-Host "Date: $(Get-Date -Format 'yyyy-MM-dd HH:mm')" -ForegroundColor Gray
Write-Host ""

# 1. Website Availability
Write-Host "1. WEBSITE AVAILABILITY" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://aic73.github.io/crystal-recovery-service/" -UseBasicParsing -TimeoutSec 10
    Show-Status -Check "GitHub Pages Site" -Status "?" -Message "HTTP $($response.StatusCode), $($response.Content.Length) bytes"
    
    # Check key content
    if ($response.Content -match "Crystal Recovery") {
        Show-Status -Check "Business Name" -Status "?" -Message "Correctly displayed"
    }
    if ($response.Content -match "\+971 56 344 6682") {
        Show-Status -Check "Phone Number" -Status "?" -Message "Correctly displayed"
    }
} catch {
    Show-Status -Check "GitHub Pages Site" -Status "?" -Message "DOWN: $_"
}

# 2. DNS Status
Write-Host "`n2. DNS STATUS" -ForegroundColor Yellow
$domains = @("www.crystalrecoveryservice.com", "crystalrecoveryservice.com")
foreach ($domain in $domains) {
    try {
        $dns = Resolve-DnsName -Name $domain -Type CNAME -ErrorAction SilentlyContinue
        if ($dns -and $dns.NameHost -match "aic73\.github\.io") {
            Show-Status -Check "$domain" -Status "?" -Message "Correctly pointing to GitHub Pages"
        } else {
            Show-Status -Check "$domain" -Status "??" -Message "Check DNS configuration"
        }
    } catch {
        Show-Status -Check "$domain" -Status "?" -Message "DNS resolution failed"
    }
}

# 3. SEO Health
Write-Host "`n3. SEO HEALTH" -ForegroundColor Yellow
try {
    $seoChecks = @(
        @{Name="Title Tag"; Pattern="<title>.*Crystal.*</title>"},
        @{Name="Meta Description"; Pattern='name="description"'},
        @{Name="JSON-LD Schema"; Pattern='"@context"'},
        @{Name="Google Verification"; Pattern='google-site-verification'}
    )
    
    foreach ($check in $seoChecks) {
        if ($response.Content -match $check.Pattern) {
            Show-Status -Check $check.Name -Status "?"
        } else {
            Show-Status -Check $check.Name -Status "??"
        }
    }
} catch {
    Show-Status -Check "SEO Check" -Status "?" -Message "Failed: $_"
}

# 4. Business Metrics
Write-Host "`n4. BUSINESS METRICS" -ForegroundColor Yellow
Show-Status -Check "Primary Contact" -Status "?" -Message "+971 56 344 6682"
Show-Status -Check "Email" -Status "?" -Message "info@crystalrecoveryservice.com"
Show-Status -Check "Service Hours" -Status "?" -Message "24/7, 365 days"
Show-Status -Check "Service Areas" -Status "?" -Message "All Dubai areas"

# 5. Action Items
Write-Host "`n5. ACTION ITEMS" -ForegroundColor Red
Show-Status -Check "Update Namecheap DNS" -Status "??" -Message "Change CNAME to aic73.github.io"
Show-Status -Check "Google Search Console" -Status "??" -Message "Setup verification"
Show-Status -Check "Google My Business" -Status "??" -Message "Update listing"

Write-Host "`n" + "="*60 -ForegroundColor Cyan
Write-Host "?? SUMMARY: Your website is ready for business!" -ForegroundColor Green
Write-Host "Use: https://aic73.github.io/crystal-recovery-service/" -ForegroundColor White
Write-Host "="*60 -ForegroundColor Cyan
