/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.04em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.03em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
                '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '400' }],
                '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '400' }],
                '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '400' }],
                '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '400' }],
                '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '400' }],
                '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.05em', fontWeight: '400' }],
                '8xl': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.06em', fontWeight: '400' }],
                '9xl': ['8rem', { lineHeight: '1.1', letterSpacing: '-0.07em', fontWeight: '400' }],
            },
            fontFamily: {
                heading: "futura-lt-w01-light",
                paragraph: "cormorantgaramond-light"
            },
            colors: {
                // Cores baseadas na logomarca Alliance - Tonalidades melhoradas
                footerbackground: '#0f2a5f', // Azul escuro mais sofisticado
                foreground: '#0f2a5f', // Azul escuro para textos principais
                background: '#FFFFFF',
                secondary: '#e8f2ff', // Azul claro mais vibrante
                'secondary-foreground': '#0f2a5f',
                'primary-foreground': '#FFFFFF',
                primary: '#1e5fb8', // Azul principal mais vibrante e sofisticado
                accent: '#ffac00', // Laranja vibrante da Alliance
                'accent-foreground': '#FFFFFF',
                // Cores adicionais para maior flexibilidade
                'blue-50': '#e8f2ff',
                'blue-100': '#d0e5ff',
                'blue-600': '#1e5fb8',
                'blue-700': '#1a4a94',
                'blue-800': '#0f2a5f',
                'blue-900': '#081a3a',
                'orange-50': '#fff7ed',
                'orange-100': '#ffedd5',
                'orange-500': '#f97316',
                'orange-600': '#ea580c',
                'orange-700': '#c2410c'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
