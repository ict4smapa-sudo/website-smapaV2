import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // 👇 INI YANG HILANG! Tambahkan baris ini agar error "Invalid URL" sembuh:
  site: 'https://sman4jember.sch.id',

  output: 'server', // Enable SSR mode
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false, // We'll use our own global.css
    }),
    react(), // Enable React islands
  ],
  image: {
    domains: ['images.unsplash.com'],
    remotePatterns: [{ protocol: 'https' }]
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@/components': '/src/components',
        '@/layouts': '/src/layouts',
        '@/lib': '/src/lib',
        '@/styles': '/src/styles',
      },
    },
  },
});