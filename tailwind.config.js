import flowbite from 'flowbite/plugin';


/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        colors: {
            'black' : '#121212',
            'custom-blue': '#3447BC',
            'navy-blue': '#24316B',
            'medium-gray': '#797C8E',
            'normal-gray': '#9095B5',
            'light-gray': '#EDEDF9',
            'white-fon': '#F9F8FF',
            'violet': '#C6C2FF',
            'yellow': '#DFF37D'
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
            'slide-diagonal': {
                '0%': { transform: 'translateX(0%) translateY(0%)', },
                '50%': { transform: 'translateX(-80%) translateY(-30%)' },
                '100%': { transform: 'translateX(-80%) translateY(-30%)' },
            },
            'loading-logo': {
                '0%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(1rem)' },
                '100%': { transform: 'translateY(0)' }
            }
        },
        animation: {
            'fade-in': 'fade-in 1s ease-in-out',
            'fade-in-long': 'fade-in 3s ease-in-out',
            'slide-up': 'slide-up 2s ease-in-out',
            'slide-diagonal': 'slide-diagonal 3s ease-in-out 1.5s infinite',
            'logo-loading': 'loading-logo 3s infinite linear'
        },
    },
};
export const plugins = [
    flowbite
];
