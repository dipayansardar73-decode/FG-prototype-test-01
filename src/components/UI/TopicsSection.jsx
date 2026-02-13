import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import FlowingMenu from './FlowingMenu';

const TopicsSection = ({ videoSrc }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 });

    // Menu Items
    const menuItems = [
        { link: '#', text: 'Geopolitics' },
        { link: '#', text: 'Startups' }, // Shortened from Entrepreneurship
        { link: '#', text: 'Strategy' },      // Shortened from Business Strategy
        { link: '#', text: 'Technology' }     // Shortened from Science & Technology
    ];

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
            className="flex flex-col-reverse lg:flex-row min-h-screen bg-[#050505] text-white overflow-hidden"
            style={{ minHeight: '100vh', backgroundColor: '#050505', display: 'flex', position: 'relative' }}
        >
            {/* Left Column: Video - Reduced Width (30%) */}
            <div
                className="w-full lg:w-[30%] min-h-[40vh] lg:min-h-full relative border-r border-white/10"
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

            {/* Right Column: Flowing Menu - Increased Width (70%) */}
            <div
                className="w-full lg:w-[70%] flex flex-col justify-center relative z-10 min-h-[60vh] lg:min-h-full bg-[#050505]"
                style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 10, backgroundColor: '#050505' }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full flex flex-col pt-16"
                    style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', paddingTop: '4rem' }}
                >
                    <div className="px-8 md:px-16 mb-12">
                        <h2 className="font-cinzel text-4xl md:text-6xl uppercase text-[#D4AF37]" style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', color: '#D4AF37' }}>
                            Explore Topics
                        </h2>
                        <p className="text-gray-500 font-montserrat mt-2">Discover insights across various domains.</p>
                    </div>

                    <div className="flex-1 w-full" style={{ position: 'relative', minHeight: '500px' }}>
                        <FlowingMenu
                            items={menuItems}
                            speed={20}
                            textColor="#ffffff"
                            bgColor="#050505"
                            marqueeBgColor="#D4AF37"
                            marqueeTextColor="#000000"
                            borderColor="rgba(255,255,255,0.1)"
                        />
                    </div>

                    <div className="p-8 md:p-16 flex justify-end">
                        <a href="#" className="font-montserrat text-[#D4AF37] text-lg uppercase tracking-widest hover:text-white transition-colors">
                            View All Categories &rarr;
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TopicsSection;
