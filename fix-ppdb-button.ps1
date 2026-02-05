Get-ChildItem src\components\*.jsx | ForEach-Object {
    $filePath = $_.FullName
    $content = Get-Content $filePath -Raw
    
    # Replace button with anchor tag for PPDB
    $updated = $content -replace '<button className="bg-gradient-to-r from-emerald-[56]00 to-(teal|emerald)-[67]00 hover:scale-105 text-white px-5 py-2 rounded-full font-bold text-sm">\s*<GraduationCap', '<a href="/ppdb" className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:scale-105 text-white px-5 py-2 rounded-full font-bold text-sm"><GraduationCap'
    
    $updated = $updated -replace 'PPDB 2026\s*</button>', 'PPDB 2026</a>'
    
    if ($updated -ne $content) {
        Set-Content -Path $filePath -Value $updated -NoNewline
        Write-Host "Updated: $($_.Name)"
    }
}
