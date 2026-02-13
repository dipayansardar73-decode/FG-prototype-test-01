import React from 'react';
import { useCursor } from '../Cursor/CursorContext';
import { Instagram, Youtube, Twitter, Linkedin, Mail } from 'lucide-react';
import logo from '../../assets/logo1.png';

const Footer = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

    const socialLinks = [
        { icon: Youtube, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Linkedin, href: '#' },
    ];

    const footerLinks = [
        { title: 'Explore', items: ['Podcast', 'About', 'Live Events', 'Merch'] },
        { title: 'Company', items: ['Careers', 'Contact', 'Press', 'Privacy Policy'] },
        { title: 'Community', items: ['Discord', 'Newsletter', 'Sponsorship'] },
    ];

    return (
        <footer className="bg-[#050505] text-white pt-24 pb-12 px-8 border-t border-white/10" style={{ backgroundColor: '#050505', paddingTop: '6rem', paddingBottom: '3rem', paddingLeft: '2rem', paddingRight: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="max-w-7xl mx-auto" style={{ maxWidth: '80rem', margin: '0 auto' }}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>

                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <img src={logo} alt="Figuring Out" className="h-12 mb-8" style={{ height: '3rem', marginBottom: '2rem' }} />
                        <p className="font-montserrat text-gray-500 text-sm leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)', color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Dismantling success to find the engine inside. Join the 1% who refuse to settle correctly.
                        </p>
                        <div className="flex gap-6" style={{ display: 'flex', gap: '1.5rem' }}>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                                    style={{ color: '#9ca3af', transition: 'color 0.3s' }}
                                    onMouseEnter={() => mouseEnterHandler('pointer')}
                                    onMouseLeave={mouseLeaveHandler}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-cinzel text-lg mb-6 text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', marginBottom: '1.5rem', color: 'white' }}>{section.title}</h4>
                            <ul className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {section.items.map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="font-montserrat text-sm text-gray-500 hover:text-white transition-colors"
                                            style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}
                                            onMouseEnter={() => mouseEnterHandler('text')}
                                            onMouseLeave={mouseLeaveHandler}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-montserrat tracking-wider" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#4b5563', fontFamily: 'var(--font-body)', letterSpacing: '0.05em' }}>
                    <p>&copy; {new Date().getFullYear()} Figuring Out Media. All Rights Reserved.</p>
                    <p>Designed with Excellence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
