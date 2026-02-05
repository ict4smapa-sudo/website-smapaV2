# Update navMenus in all JSX files
$scriptFilesRoot = "src\components"

$newNavMenus = @"
    const navMenus = [
        { label: "Beranda", link: "/" },
        { label: "Profil", link: "#", items: [{ label: "Sejarah", link: "/profil/sejarah" }, { label: "Visi Misi", link: "/profil/visi-misi" }, { label: "Struktur Organisasi", link: "/profil/struktur" }, { label: "Akreditasi", link: "/profil/akreditasi" }, { label: "Personalia", link: "/profil/personalia" }] },
        { label: "Kegiatan", link: "#", items: [{ label: "Kegiatan Siswa", link: "/kegiatan/siswa" }, { label: "Kegiatan Guru", link: "/kegiatan/guru" }, { label: "Ekstrakurikuler", link: "/kegiatan/ekstrakurikuler" }] },
        { label: "Prestasi", link: "#", items: [{ label: "Prestasi Siswa", link: "/prestasi" }, { label: "Penghargaan Sekolah", link: "/prestasi/sekolah" }] },
        { label: "Informasi", link: "#", items: [{ label: "Pengumuman", link: "/informasi/pengumuman" }, { label: "Info Kurikulum", link: "/informasi/kurikulum" }, { label: "Layanan Publik", link: "/informasi/layanan" }] },
        { label: "Fasilitas", link: "#", items: [{ label: "E-Library", link: "/fasilitas/e-library" }, { label: "Sarana Prasarana", link: "/fasilitas/sarana-prasarana" }] },
        { label: "Galeri", link: "#", items: [{ label: "Foto", link: "/galeri/foto" }, { label: "Video", link: "/galeri/video" }] },
        { label: "Fitur", link: "#", items: [{ label: "Download Area", link: "/fitur/download" }, { label: "Alumni Tracer", link: "/fitur/alumni" }] }
    ];
"@

$jsxFiles = Get-ChildItem -Path $scriptFilesRoot -Filter *.jsx
$updatedCount = 0

foreach ($file in $jsxFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    if ($content -match 'const navMenus\s*=') {
        # Use regex to replace the entire navMenus array
        $pattern = '(?s)const navMenus\s*=\s*\[.*?\];'
        $newContent = $content -replace $pattern, $newNavMenus
        
        if ($newContent -ne $content) {
            Set-Content -Path $file.FullName -Value $newContent -NoNewline
            Write-Host "✓ Updated: $($file.Name)"
            $updatedCount++
        }
    }
}

Write-Host "`nCompleted! Updated $updatedCount files."
