import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Pastikan URL ini sesuai dengan domain sekolahmu
  site: 'https://sman4jember.sch.id',

  output: 'static', 

  // BAGIAN INI TADI ERROR KARENA DI-COMMENT SEBAGIAN
  integrations: [
    tailwind({
      applyBaseStyles: false, 
    }),
    react() 
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