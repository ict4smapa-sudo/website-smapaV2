/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Primary colors (from existing LandingPage.jsx)
                primary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#10b981', // Main emerald color
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                    950: '#022c22',
                },
                // Secondary colors (yellow/orange accents)
                secondary: {
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                },
                // Custom dark for footer
                'dark-footer': '#0B1120',
            },
            fontFamily: {
                space: ['Space Grotesk', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
            },
            animation: {
                'scroll': 'scroll 30s linear infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
