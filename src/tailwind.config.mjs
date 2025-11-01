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
                // Cores baseadas na logomarca Alliance
                footerbackground: '#1e3a8a', // Azul escuro da Alliance
                foreground: '#1e3a8a', // Azul escuro para textos principais
                background: '#FFFFFF',
                secondary: '#f0f9ff', // Azul muito claro para fundos secundários
                'secondary-foreground': '#1e3a8a',
                'primary-foreground': '#FFFFFF',
                primary: '#2563eb', // Azul principal da Alliance
                accent: '#f97316', // Laranja vibrante da Alliance
                'accent-foreground': '#FFFFFF',
                // Cores adicionais para maior flexibilidade
                'blue-50': '#eff6ff',
                'blue-100': '#dbeafe',
                'blue-600': '#2563eb',
                'blue-700': '#1d4ed8',
                'blue-800': '#1e40af',
                'blue-900': '#1e3a8a',
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
