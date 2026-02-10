
Write-Host "=== DNS PROPAGATION MONITOR ===" -ForegroundColor Cyan
Write-Host "Run this every 5 minutes after updating DNS" -ForegroundColor Gray

$domains = @{
    "www.crystalrecoveryservice.com" = "Should point to GitHub Pages (aic73.github.io)"
    "crystalrecoveryservice.com" = "Should redirect to www version"
}

$githubIps = @("185.199.108.153", "185.199.109.153", "185.199.110.153", "185.199.111.153")

foreach ($domain in $domains.Keys) {
    Write-Host "`nChecking: $domain" -ForegroundColor Yellow
    Write-Host "Expected: $($domains[$domain])" -ForegroundColor Gray
    
    try {
        # Check CNAME first
        $cname = Resolve-DnsName -Name $domain -Type CNAME -ErrorAction SilentlyContinue
        if ($cname) {
            Write-Host "CNAME: $($cname.NameHost)" -ForegroundColor Gray
            if ($cname.NameHost -match "aic73\.github\.io") {
                Write-Host "? Correctly pointing to GitHub Pages" -ForegroundColor Green
            }
        }
        
        # Check A records
        $aRecords = Resolve-DnsName -Name $domain -Type A -ErrorAction SilentlyContinue
        if ($aRecords) {
            $ips = $aRecords.IPAddress -join ", "
            Write-Host "A Records: $ips" -ForegroundColor Gray
            
            $isGitHub = $false
            foreach ($ip in $aRecords.IPAddress) {
                if ($githubIps -contains $ip) {
                    $isGitHub = $true
                }
            }
            
            if ($isGitHub) {
                Write-Host "? Pointing to GitHub Pages IPs" -ForegroundColor Green
            } else {
                Write-Host "? Not pointing to GitHub Pages" -ForegroundColor Red
            }
        }
        
        # Test website
        try {
            $web = Invoke-WebRequest -Uri "https://$domain" -UseBasicParsing -TimeoutSec 10 -MaximumRedirection 5
            Write-Host "Website: HTTP $($web.StatusCode)" -ForegroundColor Gray
            if ($web.Content -match "Crystal Recovery") {
                Write-Host "? Website shows correct business" -ForegroundColor Green
            }
        } catch {
            Write-Host "Website: Not accessible yet" -ForegroundColor Yellow
        }
        
    } catch {
        Write-Host "DNS resolution failed" -ForegroundColor Red
    }
}

Write-Host "`n=== TEMPORARY WORKING URL ===" -ForegroundColor White -BackgroundColor DarkGreen
Write-Host "Use this immediately while DNS updates:" -ForegroundColor Cyan
Write-Host "https://aic73.github.io/crystal-recovery-service/" -ForegroundColor White

