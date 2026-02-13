import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

const StatsSection = ({ videoSrc }) => {
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
            className="relative h-screen w-full overflow-hidden"
            style={{ height: '100vh', width: '100%' }}
        >
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
                {/* Optional subtle overlay to ensure it blends well, similar to other sections if needed, 
                    but sticking to raw video for now as requested "same to same" size/fit. 
                    Hero has brightness(0.4), maybe we don't need that here unless user asked for the STYLE too.
                    User said "size you used there", so sizing is the priority.
                */}
            </div>
        </section>
    );
};

export default StatsSection;
