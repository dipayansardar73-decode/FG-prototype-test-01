import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../Cursor/CursorContext';
import { Play, ArrowRight } from 'lucide-react';
import f8 from '../../assets/f8.jpg'; // Using one of the uploaded images

const Featured = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

    return (
        <section className="py-24 px-8 bg-black border-t border-white/5" style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-bg)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center" style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                <div className="order-2 md:order-1 relative group">
                    <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-1000" style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-accent)', filter: 'blur(64px)', borderRadius: '9999px', opacity: 0.2, transition: 'opacity 1s' }}></div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative z-10 overflow-hidden"
                        style={{ position: 'relative', zIndex: 10, overflow: 'hidden' }}
                    >
                        <img src={f8} alt="Featured Guest" className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover" style={{ width: '100%', height: 'auto', filter: 'grayscale(100%)', transition: 'filter 1s', objectFit: 'cover' }} />
                    </motion.div>
                </div>

                <div className="order-1 md:order-2">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-accent uppercase tracking-[0.2em] text-sm font-bold block mb-6 font-montserrat"
                        style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'block' }}
                    >
                        Featured Episode
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-cinzel text-4xl md:text-6xl text-white mb-8 leading-tight"
                        style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: 'white', marginBottom: '2rem', lineHeight: 1.1 }}
                        onMouseEnter={() => mouseEnterHandler('text')}
                        onMouseLeave={mouseLeaveHandler}
                    >
                        The Biology of <br /> <span className="text-gray-500 italic">High Performance</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-400 text-lg leading-relaxed mb-10 font-montserrat max-w-lg"
                        style={{ color: '#888', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '2.5rem', fontFamily: 'var(--font-body)', maxWidth: '32rem' }}
                    >
                        We sit down with neuroscientist Dr. Andrew Huberman to decode the mechanisms of focus, stress control, and optimal performance.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-center gap-4 text-white uppercase tracking-widest text-sm hover:text-accent transition-colors group font-montserrat"
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', fontFamily: 'var(--font-body)', transition: 'color 0.3s' }}
                        onMouseEnter={() => mouseEnterHandler('pointer')}
                        onMouseLeave={mouseLeaveHandler}
                    >
                        <span className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-accent transition-colors" style={{ width: '3rem', height: '3rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Play size={14} fill="currentColor" />
                        </span>
                        Watch Full Episode
                    </motion.button>
                </div>

            </div>
        </section>
    );
};

export default Featured;
