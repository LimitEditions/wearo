import React from 'react';
import { motion } from 'framer-motion';


// виды анимации
const pageVariants = [
    {
        initial: { opacity: 0, y: '-100%' },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: '100%' },
    },
    {
        initial: { opacity: 0, y: '100%' },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: '-100%' },
    },
    {
        initial: { opacity: 0, x: '100%' },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: '-100%' },
    },
    {
        initial: { opacity: 0, x: '-100%' },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: '100%' },
    },
    {
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 },
    },
];

// продолжительность
const pageTransition = {
    duration: 0.75,
};

// комопнент-обертка для анимации переходов между компонентами
const AnimatedWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants[Math.floor(Math.random() * pageVariants.length)]}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedWrapper;
