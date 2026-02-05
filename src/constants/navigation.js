// src/constants/navigation.js

export const navMenus = [
    {
        label: "Beranda",
        link: "/",
        keywords: "home, landing page, utama, sman 4 jember, smapa"
    },
    {
        label: "Profil",
        link: "#",
        items: [
            { label: "Sejarah", link: "/profil/sejarah", keywords: "sejarah, riwayat, pendirian, 1977, asal usul, masa lalu" },
            { label: "Visi Misi", link: "/profil/visi-misi", keywords: "visi, misi, tujuan, motto, target, merdeka belajar" },
            { label: "Struktur Organisasi", link: "/profil/struktur", keywords: "struktur, organisasi, manajemen, kepala sekolah, komite, pimpinan" },
            { label: "Akreditasi", link: "/profil/akreditasi", keywords: "akreditasi, nilai, sertifikat, mutu, kualitas, ban-sm, grade" },
            { label: "Personalia", link: "/profil/personalia", keywords: "guru, staff, karyawan, tenaga pendidik, daftar guru, tata usaha, tu" }
        ]
    },
    {
        label: "Kegiatan",
        link: "#",
        items: [
            { label: "Kegiatan Siswa", link: "/kegiatan/siswa", keywords: "osis, mpk, ldkms, kesiswaan, upacara, rapat, organisasi siswa" },
            { label: "Kegiatan Guru", link: "/kegiatan/guru", keywords: "mgmp, workshop, pelatihan, iht, kompetensi guru, rapat guru" },
            { label: "Ekstrakurikuler", link: "/kegiatan/ekstrakurikuler", keywords: "ekskul, hobi, bakat, pramuka, paskibra, basket, bola, seni musik, tari, pecinta alam, karate, voli" }
        ]
    },
    {
        label: "Prestasi",
        link: "#",
        items: [
            { label: "Prestasi Siswa", link: "/prestasi", keywords: "juara, lomba, olimpiade, fls2n, o2sn, akademik, non-akademik, ksn, emas, perak, perunggu" },
            { label: "Penghargaan Sekolah", link: "/prestasi/sekolah", keywords: "adiwiyata, sekolah sehat, prestasi lembaga, sertifikasi, penghargaan" }
        ]
    },
    {
        label: "Informasi",
        link: "#",
        items: [
            { label: "Pengumuman", link: "/informasi/pengumuman", keywords: "berita, berita terkini, info penting, hari libur, jadwal ujian, rapat ortu" },
            { label: "Info Kurikulum", link: "/informasi/kurikulum", keywords: "kurikulum merdeka, k13, jadwal pelajaran, ujian, asesmen, fase e, fase f, p5, kalender akademik" },
            { label: "Layanan Publik", link: "/informasi/layanan", keywords: "faq, pengaduan, kontak, informasi publik, mutasi, surat keterangan, legalisir" }
        ]
    },
    {
        label: "Fasilitas",
        link: "#",
        items: [
            { label: "E-Library", link: "/fasilitas/e-library", keywords: "perpustakaan digital, buku, literasi, jurnal, baca online, koleksi buku, pinjam buku" },
            { label: "Sarana Prasarana", link: "/fasilitas/sarana-prasarana", keywords: "fasilitas, gedung, lab komputer, lab biologi, kantin, masjid, lapangan, sarpras, kelas" }
        ]
    },
    {
        label: "Galeri",
        link: "#",
        items: [
            { label: "Foto", link: "/galeri/foto", keywords: "dokumentasi foto, album, kegiatan foto, galeri, dokumentasi" },
            { label: "Video", link: "/galeri/video", keywords: "youtube, vlog sekolah, profil video, cinematic, video kegiatan" }
        ]
    },
    {
        label: "Fitur",
        link: "#",
        items: [
            { label: "Download Area", link: "/fitur/download", keywords: "berkas, formulir, dokumen pdf, unduh, download surat, materi ajar" },
            { label: "Alumni Tracer", link: "/fitur/alumni", keywords: "alumni, tracer study, pendataan alumni, kuliah, kerja, wirausaha, ikatan alumni" }
        ]
    }
];

export const schoolContact = {
    address: "Jl. Hayam Wuruk No. 145, Sempusari, Kaliwates, Jember",
    phone: "(0331) 484848",
    email: "info@sman4jember.sch.id",
    whatsapp: "6281234567890",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.303350247656!2d113.65802497576558!3d-8.18721669184428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd69403817f573f%3A0x6b772099307d8a6!2sSMAN%204%20Jember!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
};

export const socialMedia = {
    instagram: "https://www.instagram.com/sman4jember.official/",
    youtube: "https://www.youtube.com/@SMAN4JEMBER",
    facebook: "#",
    linkedin: "#",
};

export const PRINCIPAL_NAME = "Dora Indriana, S.Pd., M.Pd.";

export const MISSION_ITEMS = [
    "Mewujudkan kehidupan warga sekolah yang beriman dan bertakwa kepada Tuhan YME, serta berakhlak mulia.",
    "Mewujudkan warga sekolah yang berjiwa Bhinneka Tunggal Ika, cinta tanah air dan bangsa.",
    "Membangun jiwa kemandirian, etos kerja, tangguh, dan profesional.",
    "Mewujudkan budaya gotong royong, saling menghargai, dan anti kekerasan.",
    "Mewujudkan warga sekolah yang memiliki integritas dan bertanggung jawab.",
    "Mewujudkan warga sekolah yang kreatif, inovatif berbasis seni dan kewirausahaan.",
    "Mewujudkan warga sekolah yang menguasai pengetahuan dan teknologi abad 21.",
    "Mewujudkan warga sekolah yang mampu menjuarai lomba akademik dan non-akademik."
];

export const SITE_INFO = {
    title: "SMAN 4 Jember",
    description: "Sekolah Menengah Atas yang berkomitmen mencetak generasi unggul, berkarakter, dan berprestasi",
    url: "https://sman4jember.sch.id"
};