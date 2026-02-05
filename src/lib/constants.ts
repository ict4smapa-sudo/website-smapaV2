/**
 * Application-wide constants
 */

export const SITE_TITLE = "SMAN 4 Jember";
export const SITE_DESCRIPTION = "Sekolah Menengah Atas yang berkomitmen mencetak generasi unggul, berkarakter, dan berprestasi";
export const SITE_URL = "https://sman4jember.sch.id"; // Update with actual domain

export const PRINCIPAL_NAME = "Dora Indriana, S.Pd., M.Pd.";

export const CONTACT_INFO = {
    address: "Jl. Hayam Wuruk No. 145, Sempusari, Kaliwates, Jember",
    phone: "(0331) 484848",
    email: "info@sman4jember.sch.id",
    whatsapp: "6281234567890",
};

export const SOCIAL_MEDIA = {
    instagram: "https://www.instagram.com/sman4jember.official/",
    youtube: "https://www.youtube.com/@SMAN4JEMBER",
    facebook: "#",
    linkedin: "#",
};

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

export const NAVIGATION_MENU = [
    { label: "Beranda", link: "/" },
    {
        label: "Profil",
        link: "/profil",
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
        link: "/kegiatan",
        items: [
            { label: "Kegiatan Siswa", link: "/kegiatan/siswa" },
            { label: "Kegiatan Guru", link: "/kegiatan/guru" },
            { label: "Ekstrakurikuler", link: "/kegiatan/ekstrakurikuler" }
        ]
    },
    {
        label: "Prestasi",
        link: "/prestasi",
        items: [
            { label: "Prestasi Siswa", link: "/prestasi" },
            { label: "Penghargaan Sekolah", link: "/prestasi" }
        ]
    },
    {
        label: "Informasi",
        link: "/informasi",
        items: [
            { label: "Berita", link: "/berita" },
            { label: "Pengumuman", link: "/informasi/pengumuman" },
            { label: "Info Kurikulum", link: "/informasi/kurikulum" }
        ]
    },
    {
        label: "Fasilitas",
        link: "/fasilitas",
        items: [
            { label: "E-Library", link: "/fasilitas/e-library" },
            { label: "Sarana Prasarana", link: "/fasilitas/sarana-prasarana" }
        ]
    },
    {
        label: "Galeri",
        link: "/galeri",
        items: [
            { label: "Foto", link: "/galeri/foto" },
            { label: "Video", link: "/galeri/video" }
        ]
    },
    {
        label: "Fitur",
        link: "/fitur",
        items: [
            { label: "Download Area", link: "/fitur/download" },
            { label: "Alumni Tracer", link: "/fitur/alumni" }
        ]
    }
];
