import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <section className="py-32 md:py-48 px-8 bg-charcoal flex justify-center items-center"
            style={{ padding: '10rem 2rem', backgroundColor: 'var(--color-bg)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <div className="max-w-3xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="font-cinzel text-3xl md:text-4xl leading-relaxed text-white/90 mb-8"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}
                >
                    "We don't just ask questions. We dismantle success to find the engine inside."
                </motion.h2>
                <div className="w-16 h-[1px] bg-accent mx-auto" style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
            </div>
        </section>
    );
};

export default Philosophy;
