Get-ChildItem src\components\*.jsx | ForEach-Object {
    $filePath = $_.FullName
    $content = Get-Content $filePath -Raw
    
    $updated = $content `
        -replace 'link:\s+"#profil"', 'link: "#"' `
        -replace 'link:\s+"#ekstra"', 'link: "#"' `
        -replace 'link:\s+"#berita"', 'link: "#"'
    
    if ($updated -ne $content) {
        Set-Content -Path $filePath -Value $updated -NoNewline
        Write-Host "✓ Updated: $($_.Name)"
    }
}

Write-Host "`nDone!"
