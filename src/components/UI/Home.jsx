import React from 'react';
import VideoSection from './VideoSection';
import AboutSection from './AboutSection';
import PhilosophySection from './PhilosophySection';
import TopicsSection from './TopicsSection';
import StatsSection from './StatsSection';
import OutroSection from './OutroSection';
import Footer from './Footer';

// Import Video Assets
import fr1 from '../../assets/fr1.mp4';
import fr2 from '../../assets/fr2.mp4';
import fr3 from '../../assets/fr3.mp4';
import fr4 from '../../assets/fr4.mp4';
import fr5 from '../../assets/fr5.mp4';
import fr6 from '../../assets/fr6.mp4';

// Import Image Assets for Outro Sidebar (unused now but potentially needed if reverted)
import f123 from '../../assets/f123.jpg';
import f222 from '../../assets/f222.jpg';
import f333 from '../../assets/f333.jpg';

// Helper for simple text overlays
const TextOverlay = ({ title, subtitle }) => (
    <div className="text-center px-4 mix-blend-difference text-white">
        {subtitle && (
            <p className="uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-montserrat opacity-90">
                {subtitle}
            </p>
        )}
        <h1 className="font-cinzel text-5xl md:text-8xl leading-tight text-shadow" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            {title}
        </h1>
    </div>
);

const Home = () => {
    return (
        <div className="font-montserrat bg-[#111]" style={{ fontFamily: 'var(--font-body)' }}>
            {/* 1. Hero */}
            <VideoSection videoSrc={fr1} overlayOpacity={0.2} showScrollIndicator={true}>
                <TextOverlay title="FIGURING OUT" subtitle="The Pursuit of Excellence" />
            </VideoSection>

            {/* 2. About Section */}
            <AboutSection />

            {/* 3. Philosophy (Split Layout) */}
            <PhilosophySection videoSrc={fr2} />

            {/* 4. Topics (Split Layout: Video Left, Buttons Right) */}
            <TopicsSection videoSrc={fr3} />

            {/* 5. Stats / Legacy */}
            <StatsSection videoSrc={fr4} />

            {/* 6. Subscribe / Outro (fr5) - Full Screen Video */}
            <OutroSection videoSrc={fr5} />

            {/* 7. Community (fr6) */}
            <VideoSection videoSrc={fr6} overlayOpacity={0.2}>
                <TextOverlay title="JOIN THE TOP 1%" subtitle="The Community" />
            </VideoSection>

            <Footer />
        </div>
    );
};

export default Home;
