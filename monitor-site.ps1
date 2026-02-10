
# GitHub Pages Monitor
Write-Host "=== GITHUB PAGES MONITOR ===" -ForegroundColor Cyan

$url = "https://aic73.github.io/crystal-recovery-service/"

try {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 10
    Write-Host "? Site is UP" -ForegroundColor Green
    Write-Host "Status: $($response.StatusCode)" -ForegroundColor Gray
    Write-Host "Size: $($response.Content.Length) bytes" -ForegroundColor Gray
    
    # Check key elements
    if ($response.Content -match "Crystal Recovery") {
        Write-Host "? Business name correct" -ForegroundColor Green
    }
    if ($response.Content -match "\+971 56 344 6682") {
        Write-Host "? Phone number correct" -ForegroundColor Green
    }
    
} catch {
    Write-Host "? Site is DOWN: $_" -ForegroundColor Red
}

# DNS Check
Write-Host "`n=== DNS CHECK ===" -ForegroundColor Cyan

$domains = @("www.crystalrecoveryservice.com", "crystalrecoveryservice.com")

foreach ($domain in $domains) {
    try {
        $dns = Resolve-DnsName -Name $domain -Type A -ErrorAction SilentlyContinue
        if ($dns) {
            $ips = $dns.IPAddress -join ", "
            Write-Host "$domain -> $ips" -ForegroundColor Gray
            
            if ($ips -match "185\.199\.(108|109|110|111)") {
                Write-Host "  ? Pointing to GitHub Pages" -ForegroundColor Green
            } elseif ($ips -match "216\.198\.79") {
                Write-Host "  ? Still with old hosting" -ForegroundColor Red
            }
        }
    } catch {
        Write-Host "$domain: DNS error" -ForegroundColor Yellow
    }
}

Write-Host "`n=== NEXT ACTION ===" -ForegroundColor Yellow
Write-Host "1. Login to hosting panel (GoDaddy/Namecheap)" -ForegroundColor White
Write-Host "2. Update DNS as per instructions" -ForegroundColor White
Write-Host "3. Use temporary URL: https://aic73.github.io/crystal-recovery-service/" -ForegroundColor White

