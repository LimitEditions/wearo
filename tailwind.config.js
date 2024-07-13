/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        colors: {
            'custom-blue': '#3447BC',
            'navy-blue': '#24316B',
            'medium-gray': '#797C8E',
            'light-gray': '#9095B5',
            'white-fon': '#F9F8FF',
        },
        fontFamily: {
            'sf-pro': ['"SF Pro Text"'],
        },
        keyframes: {
            'fade-in': {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
            },
            'slide-up': {
                '0%': { transform: 'translateY(100%)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
            },
        },
        animation: {
            'fade-in': 'fade-in 1s ease-in-out',
            'slide-up': 'slide-up 2s ease-in-out',
        },
    },
};
export const plugins = [];
