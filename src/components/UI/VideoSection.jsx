import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const VideoSection = ({ videoSrc, children, overlayOpacity = 0.4, showScrollIndicator = false }) => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
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
            className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center"
            style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
            {/* Video Background - NO FILTERS */}
            <div className="absolute inset-0 z-0" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
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

            {/* Dark Overlay for Text Readability (Optional, controlled via prop) */}
            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 10,
                    backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
                    pointerEvents: 'none'
                }}
            />

            {/* Content */}
            <div className="relative z-20 w-full h-full flex flex-col justify-center items-center" style={{ position: 'relative', zIndex: 20, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {children}
            </div>

            {/* Scroll Indicator */}
            {showScrollIndicator && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 z-30"
                    style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 30 }}
                >
                    <span className="text-[10px] uppercase tracking-widest font-montserrat">Scroll</span>
                    <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative" style={{ width: '1px', height: '3rem', backgroundColor: 'rgba(255,255,255,0.2)', overflow: 'hidden', position: 'relative' }}>
                        <motion.div
                            animate={{ y: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                            className="w-full h-1/2 bg-white absolute top-0"
                            style={{ width: '100%', height: '50%', backgroundColor: 'white', position: 'absolute', top: 0 }}
                        />
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default VideoSection;
