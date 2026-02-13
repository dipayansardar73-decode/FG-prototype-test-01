import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../Cursor/CursorContext';
import { ArrowUpRight } from 'lucide-react';

const episodes = [
    { id: 1, title: "How Money Changes Loyalty", guest: "Dr. Sarthak Dave", category: "Psychology", image: "#1a1a1a" },
    { id: 2, title: "Healthy Food vs Poison", guest: "Dimple Jangda", category: "Health", image: "#222" },
    { id: 3, title: "Billionaire Lifestyle Secrets", guest: "Karan Bhangay", category: "Lifestyle", image: "#151515" },
    { id: 4, title: "Building a Unicorn", guest: "Nithin Kamath", category: "Business", image: "#1e1e1e" },
];

const Card = ({ episode }) => {
    const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

    return (
        <motion.div
            className="group relative w-[22rem] h-[28rem] bg-zinc-900 mx-4 flex-shrink-0 cursor-none border border-white/5 hover:border-accent/30 transition-colors duration-500"
            whileHover={{ y: -5 }}
            onMouseEnter={() => mouseEnterHandler('pointer')}
            onMouseLeave={mouseLeaveHandler}
            style={{
                width: '22rem',
                height: '28rem',
                backgroundColor: '#0a0a0a',
                margin: '0 1rem',
                flexShrink: 0,
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem'
            }}
        >
            <div className="flex justify-between items-start text-xs uppercase tracking-widest text-gray-500"
                style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666' }}
            >
                <span>{episode.category}</span>
                <span>0{episode.id}</span>
            </div>

            <div>
                <h3
                    className="font-serif text-3xl mb-4 leading-tight group-hover:text-accent transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.2, transition: 'color 0.3s' }}
                >
                    {episode.title}
                </h3>
                <p className="text-gray-400 text-sm font-sans tracking-wide" style={{ color: '#888', fontSize: '0.875rem', letterSpacing: '0.05em' }}>
                    ft. {episode.guest}
                </p>
            </div>

            <div className="flex justify-between items-center border-t border-white/10 pt-4"
                style={{ display: 'flex', justifyContent: 'justify-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}
            >
                <span className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Watch Episode</span>
                <ArrowUpRight size={18} className="text-gray-500 group-hover:text-accent transition-colors duration-300" />
            </div>
        </motion.div>
    );
};

const ContentGrid = () => {
    return (
        <section className="py-32 bg-black relative z-10" style={{ padding: '8rem 0', backgroundColor: 'var(--color-bg)', position: 'relative', zIndex: 10 }}>
            <div className="px-12 mb-16 flex justify-between items-end" style={{ padding: '0 3rem', marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <h2 className="font-serif text-5xl" style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem' }}>Latest <br /> Conversations</h2>
                <a href="/podcast" className="hidden md:block text-sm uppercase tracking-widest hover:text-accent transition-colors" style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>View All</a>
            </div>

            <div
                className="flex overflow-x-auto px-12 pb-12 hide-scrollbar"
                style={{
                    display: 'flex',
                    overflowX: 'auto',
                    padding: '0 3rem 3rem 3rem',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
            >
                {episodes.map((ep) => (
                    <Card key={ep.id} episode={ep} />
                ))}
            </div>
        </section>
    );
};

export default ContentGrid;
