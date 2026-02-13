import React, { useRef, useEffect } from 'react';
import { useInView, motion } from 'framer-motion';

const OutroSection = ({ videoSrc }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 }); // Trigger when 50% visible

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
            className="w-full h-screen relative bg-black overflow-hidden"
        >
            {/* Full Screen Video Container */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Optional Minimal Overlay for cinematic depth */}
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                {/* Center Buttons Overlay - Huge & Centered */}
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 z-30 pointer-events-auto">
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#000000" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 md:px-16 md:py-6 bg-[#D4AF37] text-black font-black uppercase tracking-[0.25em] rounded-sm shadow-2xl text-lg md:text-2xl border border-transparent"
                    >
                        Watch Now
                    </motion.button>

                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#000000", borderColor: "#ffffff" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 md:px-16 md:py-6 bg-transparent border-2 border-white/50 text-white font-black uppercase tracking-[0.25em] rounded-sm shadow-2xl text-lg md:text-2xl backdrop-blur-md"
                    >
                        Explore More
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default OutroSection;
