import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

// Image Imports
import f1 from '../../assets/f1.jpg';
import f11 from '../../assets/f11.jpg';
import f111 from '../../assets/f111.jpg';
import f2 from '../../assets/f2.jpg';
import f22 from '../../assets/f22.jpg';
import f222 from '../../assets/f222.jpg';
import f3 from '../../assets/f3.jpg';
import f33 from '../../assets/f33.jpg';
import f333 from '../../assets/f333.jpg';
import f4 from '../../assets/f4.jpg';
import f44 from '../../assets/f44.jpg';
import f444 from '../../assets/f444.jpg';
import f5 from '../../assets/f5.jpg';
import f55 from '../../assets/f55.jpg';
import f555 from '../../assets/f555.jpg';
import f6 from '../../assets/f6.jpg';
import f66 from '../../assets/f66.jpg';
import f666 from '../../assets/f666.jpg';
import f7 from '../../assets/f7.jpg';
import f77 from '../../assets/f77.jpg';
import f777 from '../../assets/f777.jpg';
import f8 from '../../assets/f8.jpg';
import f88 from '../../assets/f88.jpg';
import f888 from '../../assets/f888.jpg';
import f9 from '../../assets/f9.jpg';
import f99 from '../../assets/f99.jpg';
import f999 from '../../assets/f999.jpg';

const allImages = [
    f1, f11, f111, f2, f22, f222, f3, f33, f333,
    f4, f44, f444, f5, f55, f555, f6, f66, f666,
    f7, f77, f777, f8, f88, f888, f9, f99, f999
];

// Mock Data Generator to match screenshot vibe
const generateMockData = (images) => {
    const titles = [
        "How Money Changes Relationship: Toxic Marriages, Men vs Women & Pain",
        "Healthy Food Is Slowly Poisoning Your Body | Dimple Jangda",
        "BILLIONAIRE LUXURY LIFESTYLE - What Do They Spend Their Money On?",
        "Why Women Rule Sex Toys: G-Spot, VR & The Future of Pleasure",
        "The Dark Truth of Sugar: Cancer, Diabetes & Heart Attacks",
        "He Solves Rich People Problems: Indulge Founder Karan Bhangay",
        "1 Habit That Guarantees Success | Keshav Inani",
        "The Reality of Startups in India 2025",
        "Master Your Mind & Emotions | Dr. Sarthak Dave",
        "Army & Gangsters: Real Stories from the Border",
        "Finance & Investing 101: How to get Rich in your 20s"
    ];

    return images.map((img, i) => ({
        id: i,
        img,
        views: `${Math.floor(Math.random() * 800) + 100}K+ VIEWS`,
        title: titles[i % titles.length],
        date: `December ${Math.floor(Math.random() * 28) + 1}, 2025`,
        duration: `${Math.floor(Math.random() * 60) + 20}:${Math.floor(Math.random() * 60)}`
    }));
};

const podcastData = generateMockData(allImages);

const categories = [
    "All (461)", "Health & Wellness (15)", "Music Journeys (10)",
    "Bollywood (10)", "Marketing (9)", "Business Strategy (8)",
    "Army & Gangsters (8)", "Finance & Investing (12)"
];

const PodcastPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        // Force scroll to top on mount
    }, []);

    return (
        <div className="bg-[#050505] min-h-screen font-montserrat text-white pt-24 md:pt-32">

            {/* Category Filter Bar */}
            <div className="container mx-auto px-4 md:px-6 max-w-[95%] mb-12 overflow-x-auto no-scrollbar">
                <div className="flex gap-3 min-w-max pb-4">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${i === 0
                                ? "bg-white text-black font-bold"
                                : "bg-[#1a1a1a] text-gray-300 hover:bg-[#333]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Grid */}
            <div className="container mx-auto px-4 md:px-6 max-w-[95%] pb-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                    {podcastData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.02 }}
                            className="group cursor-pointer flex flex-col gap-3"
                        >
                            {/* Thumbnail Container */}
                            <div className="relative aspect-video rounded-xl overflow-hidden bg-[#111] border border-white/10 group-hover:border-[#D4AF37]/50 transition-colors">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                />

                                {/* Views Badge - Bottom Left */}
                                <div className="absolute bottom-0 left-0 bg-white text-black px-2 py-1 text-[10px] md:text-xs font-black uppercase tracking-tighter rounded-tr-lg">
                                    {item.views}
                                </div>

                                {/* Duration Badge - Bottom Right */}
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-1.5 py-0.5 text-[10px] font-medium rounded">
                                    {item.duration}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-1 pr-2">
                                <h3 className="text-white font-bold text-sm md:text-base leading-snug line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                                    {item.title}
                                </h3>
                                <div className="text-xs text-gray-500 font-medium flex items-center gap-2">
                                    <span>{item.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                                    <span>Podcast</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PodcastPage;
