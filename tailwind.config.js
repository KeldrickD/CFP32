/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#020617', // slate-950
                premium: {
                    blue: '#3b82f6',
                    gold: '#eab308',
                    green: '#22c55e',
                    dark: '#0f172a',
                },
                card: {
                    DEFAULT: 'rgba(15, 23, 42, 0.6)',
                    hover: 'rgba(30, 41, 59, 0.8)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'glow-blue': '0 0 15px rgba(59, 130, 246, 0.5)',
                'glow-gold': '0 0 15px rgba(234, 179, 8, 0.5)',
            }
        },
    },
    plugins: [],
}
