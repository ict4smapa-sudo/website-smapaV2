# PowerShell script to replace navMenus arrays globally
$newNavMenus = @'
    const navMenus = [
        { label: "Beranda", link: "/" },
        { 
            label: "Profil", 
            link: "#", 
            items: [
                { label: "Sejarah", link: "/profil/sejarah" }, 
                { label: "Visi Misi", link: "/profil/visi-misi" }, 
                { label: "Struktur Organisasi", link: "/profil/struktur" }, 
                { label: "Akreditasi", link: "/profil/akreditasi" }, 
                { label: "Personalia", link: "/profil/personalia" }
            ] 
        },
        { 
            label: "Kegiatan", 
            link: "#", 
            items: [
                { label: "Kegiatan Siswa", link: "/kegiatan/siswa" }, 
                { label: "Kegiatan Guru", link: "/kegiatan/guru" }, 
                { label: "Ekstrakurikuler", link: "/kegiatan/ekstrakurikuler" }
            ] 
        },
        { 
            label: "Prestasi", 
            link: "#", 
            items: [
                { label: "Prestasi Siswa", link: "/prestasi" }, 
                { label: "Penghargaan Sekolah", link: "/prestasi/sekolah" }
            ] 
        },
        { 
            label: "Informasi", 
            link: "#", 
            items: [
                { label: "Pengumuman", link: "/informasi/pengumuman" }, 
                { label: "Info Kurikulum", link: "/informasi/kurikulum" }, 
                { label: "Layanan Publik", link: "/informasi/layanan" }
            ] 
        },
        { 
            label: "Fasilitas", 
            link: "#", 
            items: [
                { label: "E-Library", link: "/fasilitas/e-library" }, 
                { label: "Sarana Prasarana", link: "/fasilitas/sarana-prasarana" }
            ] 
        },
        { 
            label: "Galeri", 
            link: "#", 
            items: [
                { label: "Foto", link: "/galeri/foto" }, 
                { label: "Video", link: "/galeri/video" }
            ] 
        },
        { 
            label: "Fitur", 
            link: "#", 
            items: [
                { label: "Download Area", link: "/fitur/download" }, 
                { label: "Alumni Tracer", link: "/fitur/alumni" }
            ] 
        }
    ];
'@

# Get all JSX files with navMenus
$files = Get-ChildItem -Path "src\components\*.jsx" | Select-String -Pattern "const navMenus = \[" -List | Select-Object -ExpandProperty Path | Get-Unique

Write-Host "Found $($files.Count) files to update"

foreach ($file in $files) {
    Write-Host "Processing: $file"
    
    $content = Get-Content $file -Raw
    
    # Use regex to match the entire navMenus array
    $pattern = '(?s)const navMenus = \[.*?\];'
    
    if ($content -match $pattern) {
        $content = $content -replace $pattern, $newNavMenus
        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "  ✓ Updated successfully"
    }
    else {
        Write-Host "  ✗ Pattern not found"
    }
}

Write-Host "`nDone! Updated $($files.Count) files."
