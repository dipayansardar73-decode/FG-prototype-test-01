import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const PhilosophySection = ({ videoSrc }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 });

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);

    return (
        <section
            ref={containerRef}
            className="flex flex-col lg:flex-row h-screen bg-[#050505] text-white overflow-hidden"
            style={{ height: '100vh', backgroundColor: '#050505', display: 'flex', position: 'relative' }}
        >
            {/* Left Column: Content */}
            <div
                className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-24 relative z-10 min-h-[50vh] lg:min-h-full bg-[#050505]"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 6rem', position: 'relative', zIndex: 10, backgroundColor: '#050505' }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="w-16 h-1 bg-[#D4AF37] mb-8" style={{ width: '4rem', height: '0.25rem', backgroundColor: '#D4AF37', marginBottom: '2rem' }}></div>

                    <h2 className="font-cinzel text-6xl md:text-8xl leading-none mb-10 uppercase w-full" style={{ fontFamily: 'var(--font-heading)', lineHeight: 0.9, marginBottom: '3rem', textTransform: 'uppercase' }}>
                        We aren't afraid <br />
                        of <span className="text-[#D4AF37]" style={{ color: '#D4AF37' }}>figuring out</span> <br />
                        the <span className="text-white">truth.</span>
                    </h2>

                    <p className="font-montserrat text-gray-400 text-xl md:text-2xl mb-12 max-w-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: '#9ca3af', fontSize: '1.5rem', marginBottom: '3rem', maxWidth: '32rem', lineHeight: 1.6 }}>
                        Authenticity is our currency. We dive deep into the uncomfortable to bring you the insights that actually matter.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#D4AF37] text-black px-10 py-4 uppercase font-bold tracking-widest rounded-full shadow-lg"
                        style={{ backgroundColor: '#D4AF37', color: 'black', padding: '1rem 2.5rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.15em', border: 'none', cursor: 'pointer', borderRadius: '9999px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)' }}
                    >
                        Join Our Community
                    </motion.button>
                </motion.div>
            </div>

            {/* Right Column: Video */}
            <div
                className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-full relative"
                style={{ position: 'relative' }}
            >
                <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 10 }}></div>
                <video
                    ref={videoRef}
                    src={videoSrc}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
        </section>
    );
};

export default PhilosophySection;
