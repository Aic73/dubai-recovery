
Write-Host "Checking DNS propagation..." -ForegroundColor Cyan
$domains = @("www.crystalrecoveryservice.com", "crystalrecoveryservice.com")

foreach ($domain in $domains) {
    try {
        $dns = Resolve-DnsName -Name $domain -Type A -ErrorAction SilentlyContinue
        if ($dns) {
            $ips = $dns.IPAddress -join ", "
            Write-Host "$domain -> $ips" -ForegroundColor Gray
            
            if ($ips -match "185\.199\.(108|109|110|111)") {
                Write-Host "  ? Pointing to GitHub Pages" -ForegroundColor Green
                
                # Test website
                try {
                    $response = Invoke-WebRequest -Uri "https://$domain" -UseBasicParsing -TimeoutSec 10
                    Write-Host "  ? Website accessible" -ForegroundColor Green
                } catch {
                    Write-Host "  ? Website not accessible yet" -ForegroundColor Yellow
                }
            } elseif ($ips -match "76\.76\.21") {
                Write-Host "  ? Still pointing to Vercel" -ForegroundColor Red
            }
        }
    } catch {
        Write-Host "$domain: DNS resolution failed" -ForegroundColor Red
    }
}

