import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../Cursor/CursorContext';

const About = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="py-32 px-8 bg-black relative z-10"
            style={{
                padding: '8rem 2rem',
                backgroundColor: '#0a0a0a',
                position: 'relative',
                zIndex: 10,
                color: 'white'
            }}
        >
            <div className="max-w-4xl mx-auto text-center" style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
                <motion.h2
                    className="font-serif text-5xl md:text-7xl mb-12 leading-tight"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    onMouseEnter={() => mouseEnterHandler('text')}
                    onMouseLeave={mouseLeaveHandler}
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '3rem', lineHeight: 1.1 }}
                >
                    We Are All Just <br /> <i style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading)' }}>Figuring It Out.</i>
                </motion.h2>

                <motion.p
                    className="text-xl leading-relaxed text-gray-400 mb-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{ ...textVariants, visible: { ...textVariants.visible, transition: { delay: 0.2, duration: 0.8 } } }}
                    style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#aaaaaa', marginBottom: '2rem' }}
                >
                    Figuring Out is an entrepreneurship-focused media platform led by Raj Shamani.
                    We dive deep into the minds of the world's most successful leaders, founders, and creators
                    to uncover the raw, unfiltered truth behind their success.
                </motion.p>

                <motion.p
                    className="text-xl leading-relaxed text-gray-400"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{ ...textVariants, visible: { ...textVariants.visible, transition: { delay: 0.4, duration: 0.8 } } }}
                    style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#aaaaaa' }}
                >
                    No fluff. No scripted answers. Just honest conversations about money, business, and life.
                </motion.p>
            </div>
        </section>
    );
};

export default About;
