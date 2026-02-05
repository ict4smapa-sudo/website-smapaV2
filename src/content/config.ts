import { defineCollection, z } from 'astro:content';

/**
 * News/Berita Collection
 */
const newsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        slug: z.string().optional(), // Auto-generated if not provided
        category: z.enum(['AKADEMIK', 'PRESTASI', 'GURU & STAFF', 'PENGUMUMAN', 'KEGIATAN']),
        date: z.date(),
        image: z.string(),
        excerpt: z.string(),
        featured: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
        author: z.string().default('Admin SMAN 4 Jember'),
    }),
});

/**
 * Achievements/Prestasi Collection
 */
const achievementsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        category: z.enum(['Akademik', 'Olahraga', 'Seni', 'Bahasa', 'Teknologi', 'Keagamaan']),
        level: z.enum(['Sekolah', 'Kecamatan', 'Kabupaten', 'Provinsi', 'Nasional', 'Internasional']),
        dateAchieved: z.date(),
        studentNames: z.array(z.string()),
        image: z.string(),
        eventName: z.string(),
        year: z.number(),
    }),
});

/**
 * Extracurricular Collection
 */
const extracurricularCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        category: z.enum(['Wajib', 'Olahraga', 'Seni Budaya', 'Seni Musik', 'Ketertiban', 'Akademik', 'Kerohanian', 'Kemanusiaan', 'Bela Diri']),
        image: z.string(),
        instructor: z.string().optional(),
        schedule: z.string().optional(),
        description: z.string().optional(),
    }),
});

/**
 * Downloads Collection
 */
const downloadsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        category: z.enum(['Formulir', 'Dokumen', 'Panduan', 'Lainnya']),
        fileUrl: z.string(),
        fileSize: z.string().optional(),
        uploadDate: z.date(),
    }),
});

export const collections = {
    news: newsCollection,
    achievements: achievementsCollection,
    extracurricular: extracurricularCollection,
    downloads: downloadsCollection,
};
