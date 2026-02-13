import React from 'react';
import { motion } from 'framer-motion';
import rajImage from '../../assets/raj_1.jpg';
import TextType from './TextType';

const AboutSection = () => {
    const fullText = "Figuring Out is an entrepreneur, content creator, and motivational speaker known for the popular podcast where inspiring conversations with successful entrepreneurs, business leaders, and industry experts are shared. Through this content, practical insights on entrepreneurship, business strategies, personal development, and career growth are provided, helping millions build their path to success.";

    return (
        <section className="py-24 px-8 bg-[#0a0a0a] text-white flex justify-center items-center min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0a0a0a', padding: '6rem 2rem', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

            {/* Background enhancement */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 pointer-events-none" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #000, transparent, #000)', opacity: 0.8, pointerEvents: 'none' }}></div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '72rem', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 10 }}>

                {/* Image Side - NO BORDER */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                    style={{ position: 'relative' }}
                >
                    <img
                        src={rajImage}
                        alt="Raj Shamani"
                        className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                        style={{ position: 'relative', zIndex: 10, width: '100%', height: '600px', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.7s', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
                    />
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-bold block mb-4 font-montserrat" style={{ color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '1rem', display: 'block', fontFamily: 'var(--font-body)' }}>
                        The Visionary
                    </span>
                    <h2 className="font-cinzel text-5xl mb-8 leading-tight text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.2, color: 'white' }}>
                        About <br /> Figuring Out
                    </h2>

                    {/* Animated Typing Text using TextType */}
                    <div className="mb-6 min-h-[150px]" style={{ marginBottom: '1.5rem', minHeight: '150px' }}>
                        <TextType
                            text={[fullText]}
                            typingSpeed={30} // Faster typing
                            deletingSpeed={0} // No deleting
                            loop={false}      // Type once and stop
                            showCursor={true}
                            cursorCharacter="|"
                            startOnVisible={true}
                            className="font-montserrat text-gray-400 text-lg leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)', color: '#9ca3af', fontSize: '1.125rem', lineHeight: 1.7 }}
                        />
                    </div>

                    <div>
                        <motion.a
                            href="#"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 10, duration: 0.5 }} // Delay based on text length estimation
                            className="text-[#D4AF37] hover:text-white transition-colors inline-flex items-center gap-1 font-semibold ml-1 mt-4"
                            style={{ color: '#D4AF37', textDecoration: 'none', marginLeft: '0.25rem', fontWeight: 600, transition: 'color 0.3s', marginTop: '1rem' }}
                        >
                            Read More &rarr;
                        </motion.a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
