import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from './CursorContext';
import './Cursor.css';

const CustomCursor = () => {
    const { cursorType } = useCursor();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            width: 32,
            height: 32,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            mixBlendMode: 'difference'
        },
        pointer: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            width: 80,
            height: 80,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            border: 'none',
            mixBlendMode: 'difference'
        },
        text: {
            x: mousePosition.x - 2,
            y: mousePosition.y - 12,
            width: 4,
            height: 24,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            border: 'none',
            mixBlendMode: 'difference',
            borderRadius: 0
        }
    };

    return (
        <motion.div
            className="custom-cursor"
            variants={variants}
            animate={cursorType}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        />
    );
};

export default CustomCursor;
