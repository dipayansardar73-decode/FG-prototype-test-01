import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../Cursor/CursorContext';
import { MapPin, ArrowUpRight } from 'lucide-react';

const events = [
    { id: 1, city: "Mumbai", venue: "Jio World Drive", date: "Oct 12", lat: "20%", left: "30%" },
    { id: 2, city: "Bangalore", venue: "UB City Amphitheater", date: "Nov 05", lat: "60%", left: "45%" },
    { id: 3, city: "Delhi", venue: "Select Citywalk", date: "Dec 18", lat: "30%", left: "60%" },
];

const EventsMap = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
    const [activeLocation, setActiveLocation] = useState(events[0]);

    return (
        <section className="py-32 bg-[#0a0a0a] relative overflow-hidden" style={{ padding: '8rem 0', backgroundColor: '#080808', position: 'relative', overflow: 'hidden' }}>
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16" style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>

                {/* List Side */}
                <div className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <h2 className="font-cinzel text-4xl text-white mb-8" style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'white', marginBottom: '2rem' }}>
                        Live <br /> <span className="text-gray-600">Encounters</span>
                    </h2>

                    <div className="space-y-0 relative border-l border-white/10" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className={`pl-8 py-6 cursor-pointer border-b border-white/5 transition-colors duration-500 ${activeLocation.id === event.id ? 'bg-white/5' : 'hover:bg-white/5'}`}
                                onClick={() => setActiveLocation(event)}
                                onMouseEnter={() => mouseEnterHandler('pointer')}
                                onMouseLeave={mouseLeaveHandler}
                                style={{ padding: '1.5rem 0 1.5rem 2rem', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: activeLocation.id === event.id ? 'rgba(255,255,255,0.05)' : 'transparent', transition: 'background-color 0.5s' }}
                            >
                                <div className="text-accent text-xs uppercase tracking-widest mb-2 font-montserrat" style={{ color: 'var(--color-accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontFamily: 'var(--font-body)' }}>{event.date}</div>
                                <h3 className="text-2xl text-white font-cinzel mb-1" style={{ fontSize: '1.5rem', color: 'white', fontFamily: 'var(--font-heading)', marginBottom: '0.25rem' }}>{event.city}</h3>
                                <p className="text-gray-500 text-sm font-montserrat" style={{ color: '#666', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>{event.venue}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map Side (Abstract Representation) */}
                <div className="relative h-[600px] bg-[#050505] rounded-xl overflow-hidden border border-white/5" style={{ position: 'relative', height: '600px', backgroundColor: '#050505', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                    {/* Abstract Map Graphic */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px', position: 'absolute', inset: 0, opacity: 0.2 }}></div>

                    {/* "Pins" */}
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className={`absolute w-3 h-3 rounded-full transition-all duration-700 ${activeLocation.id === event.id ? 'bg-accent scale-150 shadow-[0_0_20px_rgba(212,175,55,0.5)]' : 'bg-gray-700'}`}
                            style={{
                                top: event.lat,
                                left: event.left,
                                width: '0.75rem',
                                height: '0.75rem',
                                borderRadius: '50%',
                                position: 'absolute',
                                backgroundColor: activeLocation.id === event.id ? 'var(--color-accent)' : '#374151',
                                transform: activeLocation.id === event.id ? 'scale(1.5)' : 'scale(1)',
                                boxShadow: activeLocation.id === event.id ? '0 0 20px rgba(212,175,55,0.5)' : 'none',
                                transition: 'all 0.7s'
                            }}
                        />
                    ))}

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeLocation.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute bottom-12 left-12 bg-[#111] border border-white/10 p-8 max-w-sm backdrop-blur-md"
                            style={{ position: 'absolute', bottom: '3rem', left: '3rem', backgroundColor: 'rgba(17,17,17,0.9)', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', maxWidth: '24rem', backdropFilter: 'blur(8px)' }}
                        >
                            <div className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-montserrat" style={{ color: '#888', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>Selected Location</div>
                            <h3 className="text-3xl text-white font-cinzel mb-2" style={{ fontSize: '1.875rem', color: 'white', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>{activeLocation.city}</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed font-montserrat" style={{ color: '#aaa', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>
                                Join us at {activeLocation.venue} for an exclusive evening of unfiltered conversation.
                            </p>
                            <button
                                className="w-full py-4 border border-white/20 text-white uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors font-bold"
                                onMouseEnter={() => mouseEnterHandler('pointer')}
                                onMouseLeave={mouseLeaveHandler}
                                style={{ width: '100%', padding: '1rem 0', border: '1px solid rgba(255,255,255,0.2)', color: 'white', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 'bold', background: 'transparent', transition: 'all 0.3s' }}
                            >
                                Reserve Seat <ArrowUpRight size={14} className="inline ml-1" />
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default EventsMap;
