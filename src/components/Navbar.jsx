import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, Home, Building2, Briefcase, Mail, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = ({ onOpenExpertModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'À Propos', path: '/a-propos', icon: Building2 },
        { name: 'Louer', path: '/#louer', icon: Home },
        { name: 'Acheter', path: '/#acheter', icon: Building2 },
        { name: 'Terrain', path: '/#terrain', icon: Building2 },
        { name: 'Services', path: '/#services', icon: Briefcase },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'all 0.4s ease',
            background: isScrolled ? 'rgba(249, 247, 242, 0.98)' : 'rgba(249, 247, 242, 0.1)',
            backdropFilter: 'blur(10px)',
            borderBottom: isScrolled ? '1px solid rgba(197, 160, 89, 0.2)' : 'none',
            padding: isScrolled ? '0.5rem 0' : '1.2rem 0'
        }}>
            <div className="container" style={{
                alignItems: 'center',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 2rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Link to="/" className="logo-link" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flex: 1,
                    justifyContent: 'flex-start'
                }}>
                    <img src={logo} alt="Immosoleil Djerba Logo" style={{
                        height: isScrolled ? '45px' : '55px',
                        transition: 'all 0.4s ease',
                        borderRadius: '4px'
                    }} />
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                        <span style={{
                            fontSize: isScrolled ? '1.1rem' : '1.3rem',
                            fontWeight: '800',
                            color: 'var(--secondary)',
                            fontFamily: 'Playfair Display, serif',
                            transition: 'all 0.4s ease'
                        }}>ImmoSoleil</span>
                        <span style={{
                            fontSize: isScrolled ? '0.7rem' : '0.8rem',
                            fontWeight: '600',
                            color: 'var(--primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            transition: 'all 0.4s ease'
                        }}>Djerba</span>
                    </div>
                </Link>

                <style>{`
                    @media (min-width: 769px) {
                        .desktop-nav { display: flex !important; align-items: center; gap: 2.5rem; justify-content: center; flex: 2; }
                        .desktop-contact { display: flex !important; align-items: center; justify-content: flex-end; flex: 1; }
                        .mobile-toggle { display: none !important; }
                    }
                    @media (max-width: 768px) {
                        .desktop-nav { display: none !important; }
                        .desktop-contact { display: none !important; }
                        .mobile-toggle { display: flex !important; }
                    }
                    .nav-link-hover { 
                        transition: all 0.3s ease;
                        padding: 0.5rem 0;
                    }
                    .nav-link-hover:hover { color: var(--primary) !important; }
                    .nav-link-hover::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0;
                        height: 2px;
                        background: var(--primary);
                        transition: width 0.3s ease;
                    }
                    .nav-link-hover:hover::after {
                        width: 100%;
                    }
                `}</style>

                {/* Desktop Menu */}
                <div className="desktop-nav" style={{ display: 'none' }}>
                    {navLinks.map((link) => (
                        link.name === 'Services' ? (
                            <button
                                key={link.name}
                                onClick={onOpenExpertModal}
                                style={{
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--secondary)',
                                    position: 'relative',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '0.5rem 0'
                                }}
                                className="nav-link-hover"
                            >
                                {link.name}
                            </button>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--secondary)',
                                    position: 'relative'
                                }}
                                className="nav-link-hover"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>

                {/* Desktop Action */}
                <div className="desktop-contact" style={{ display: 'none' }}>
                    <a href="tel:+21625509998" className="btn-primary" style={{
                        padding: '0.7rem 1.6rem',
                        fontSize: '0.8rem',
                        background: 'var(--primary)',
                        color: 'white',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 4px 15px rgba(197, 160, 89, 0.3)',
                        fontWeight: '600'
                    }}>
                        <Phone size={14} /> +216 25 509 998
                    </a>
                </div>
            </div>

            {/* Mobile Navigation Bar (Ghorza Style) */}
            <div className="mobile-app-bar" style={{
                display: 'none', // Hidden by default, shown by media query
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: '64px',
                padding: '0 1.5rem'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
                    <img src={logo} alt="Logo" style={{ height: '32px', borderRadius: '4px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                        <span style={{ fontSize: '1rem', fontWeight: '900', color: 'var(--secondary)', fontFamily: 'Playfair Display, serif' }}>ImmoSoleil</span>
                        <span style={{ fontSize: '0.6rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Djerba</span>
                    </div>
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        style={{
                            background: 'transparent',
                            color: 'var(--secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0.5rem'
                        }}
                    >
                        <Menu size={26} />
                    </button>
                </div>
            </div>

            {/* Slide Drawer & Overlay (Ghorza Style) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                background: 'rgba(28, 28, 28, 0.6)',
                                backdropFilter: 'blur(4px)',
                                zIndex: 1100
                            }}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                background: '#FCFBF8',
                                zIndex: 1200,
                                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '0 0 32px 32px'
                            }}
                        >
                            <div style={{
                                padding: '1.2rem 1.5rem',
                                borderBottom: '1px solid rgba(197, 160, 89, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background: 'white'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <img src={logo} alt="Logo" style={{ height: '36px', borderRadius: '4px' }} />
                                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                                        <span style={{ fontSize: '1rem', fontWeight: '900', color: 'var(--secondary)', fontFamily: 'Playfair Display, serif' }}>ImmoSoleil</span>
                                        <span style={{ fontSize: '0.6rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Djerba</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{ background: 'rgba(0,0,0,0.05)', color: 'var(--secondary)', padding: '8px', borderRadius: '50%', display: 'flex' }}
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div style={{ padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {navLinks.map((item, idx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        {item.name === 'Services' ? (
                                            <button
                                                key={item.name}
                                                onClick={() => {
                                                    onOpenExpertModal();
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className="sidebar-link"
                                                style={{
                                                    fontSize: '1.4rem',
                                                    fontFamily: 'Playfair Display, serif',
                                                    fontWeight: '800',
                                                    color: 'var(--secondary)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    transition: '0.3s',
                                                    background: 'none',
                                                    border: 'none',
                                                    width: '100%',
                                                    padding: 0,
                                                    textAlign: 'left'
                                                }}
                                            >
                                                {item.name}
                                                <ArrowRight size={18} className="sidebar-arrow" style={{ opacity: 0, transition: '0.3s', color: 'var(--primary)' }} />
                                            </button>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className="sidebar-link"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                style={{
                                                    fontSize: '1.4rem',
                                                    fontFamily: 'Playfair Display, serif',
                                                    fontWeight: '800',
                                                    color: 'var(--secondary)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    transition: '0.3s'
                                                }}
                                            >
                                                {item.name}
                                                <ArrowRight size={18} className="sidebar-arrow" style={{ opacity: 0, transition: '0.3s', color: 'var(--primary)' }} />
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <div style={{ padding: '2rem 1.5rem', background: 'var(--secondary)', color: 'white', borderRadius: '0 0 32px 32px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Phone size={18} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <p style={{ color: 'var(--primary)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', margin: 0 }}>Contact</p>
                                        <a href="tel:+21625509998" style={{ color: 'white', fontWeight: '700', fontSize: '1rem' }}>+216 25 509 998</a>
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.2em', textAlign: 'center' }}>
                                    © 2026 Immosoleil Heritage • Excellence Immobilière
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    .navbar .container { display: none !important; }
                    .mobile-app-bar { display: flex !important; }
                }
                .sidebar-link:hover { color: var(--primary) !important; padding-left: 10px; }
                .sidebar-link:hover .sidebar-arrow { opacity: 1 !important; transform: translateX(5px); }
            `}</style>
        </nav>
    );
};

export default Navbar;
