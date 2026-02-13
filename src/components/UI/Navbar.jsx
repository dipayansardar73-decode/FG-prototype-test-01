import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../Cursor/CursorContext';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';

const Navbar = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Podcast', path: '/podcast' },
        { name: 'About', path: '/' },
        { name: 'Careers', path: '/' },
        { name: 'Contact', path: '/' },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 md:py-8 text-white bg-black/90 backdrop-blur-md border-b border-white/5"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem 4rem',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 50,
                backgroundColor: '#050505',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}
        >
            {/* Left: Logo */}
            <div
                className="flex-shrink-0"
                style={{ flexShrink: 0 }}
            >
                <Link to="/"
                    onMouseEnter={() => mouseEnterHandler('pointer')}
                    onMouseLeave={mouseLeaveHandler}
                    className="flex items-center gap-3 group"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
                >
                    <img src={logo} alt="Figuring Out" style={{ height: '55px', objectFit: 'contain' }} />
                </Link>
            </div>

            {/* Right: Nav Links & Search */}
            <div className="flex items-center gap-12" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <ul className="hidden md:flex gap-10" style={{ display: 'flex', gap: '2.5rem' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="text-xs uppercase tracking-[0.15em] hover:text-[#D4AF37] transition-colors font-medium font-montserrat relative group"
                                onMouseEnter={() => mouseEnterHandler('text')}
                                onMouseLeave={mouseLeaveHandler}
                                style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'color 0.3s', fontWeight: 500, fontFamily: 'var(--font-body)', color: 'white', textDecoration: 'none' }}
                            >
                                {link.name}
                                {/* Hover Underline Effect */}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" style={{ position: 'absolute', bottom: '-0.5rem', left: 0, height: '1px', backgroundColor: '#D4AF37', transition: 'width 0.3s' }}></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    onMouseEnter={() => mouseEnterHandler('pointer')}
                    onMouseLeave={mouseLeaveHandler}
                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                    <Search size={22} className="hover:text-[#D4AF37] transition-colors" />
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
