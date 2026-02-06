import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer = () => {
    return (
        <>
            <footer id="contact" style={{ background: '#0F0F0F', color: 'white', padding: '120px 0 60px' }}>
                <div className="container">
                    <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '80px' }}>
                        <div style={{ maxWidth: '350px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                                <img src={logo} alt="Immosoleil" style={{ height: '60px', borderRadius: '10px' }} />
                                <div>
                                    <h3 className="serif" style={{ color: 'white', fontSize: '1.4rem' }}>ImmoSoleil</h3>
                                    <p style={{ color: 'var(--primary)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Djerba Prestige</p>
                                </div>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '2', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
                                Votre agence référence pour l'immobilier d'exception à Djerba. Passion, intégrité et expertise depuis 2012.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <a href="#" className="social-link"><Facebook size={20} /></a>
                                <a href="#" className="social-link"><Instagram size={20} /></a>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Explore</h4>
                            <ul style={{ display: 'grid', gap: '1.2rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', fontWeight: '500' }}>
                                <li><a href="/" style={{ transition: '0.3s' }}>Accueil</a></li>
                                <li><a href="/a-propos" style={{ transition: '0.3s' }}>À Propos</a></li>
                                <li><a href="/#acheter" style={{ transition: '0.3s' }}>Ventes</a></li>
                                <li><a href="/#louer" style={{ transition: '0.3s' }}>Locations</a></li>
                                <li><a href="/#services" style={{ transition: '0.3s' }}>Services</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Contact</h4>
                            <div style={{ display: 'grid', gap: '1.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                                <div style={{ display: 'flex', gap: '1.2rem' }}>
                                    <MapPin size={22} color="var(--primary)" />
                                    <p style={{ lineHeight: '1.6' }}>Av. Habib Bourguiba,<br /> Houmt Souk - Djerba</p>
                                </div>
                                <div style={{ display: 'flex', gap: '1.2rem' }}>
                                    <Phone size={22} color="var(--primary)" />
                                    <a href="tel:+21625509998" style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem' }}>+216 25 509 998</a>
                                </div>
                                <div style={{ display: 'flex', gap: '1.2rem' }}>
                                    <Mail size={22} color="var(--primary)" />
                                    <p>contact@immosoleil.tn</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Newsletter</h4>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                Recevez nos dernières exclusivités directement par e-mail.
                            </p>
                            <div className="newsletter-wrapper" style={{ position: 'relative' }}>
                                <input
                                    type="email"
                                    placeholder="Votre e-mail"
                                    className="newsletter-input"
                                    style={{
                                        width: '100%',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '1.2rem 1.5rem',
                                        paddingRight: '80px',
                                        borderRadius: '12px',
                                        color: 'white',
                                        outline: 'none',
                                        fontSize: '0.9rem'
                                    }}
                                />
                                <button className="newsletter-btn" style={{
                                    position: 'absolute',
                                    right: '8px',
                                    top: '8px',
                                    bottom: '8px',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    padding: '0 1.5rem',
                                    borderRadius: '8px',
                                    fontWeight: '700',
                                    fontSize: '0.8rem',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}>OK</button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Simplified Footer */}
                    <div className="mobile-footer-only" style={{ display: 'none', textAlign: 'center', paddingBottom: '40px' }}>
                        <img src={logo} alt="Logo" style={{ height: '50px', marginBottom: '2rem', borderRadius: '8px' }} />
                        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.5)', fontWeight: '600', fontSize: '0.9rem' }}>
                            <a href="/" style={{ color: 'white' }}>Accueil</a>
                            <a href="/a-propos" style={{ color: 'white' }}>À Propos</a>
                            <a href="/#acheter" style={{ color: 'white' }}>Acheter</a>
                            <a href="/#louer" style={{ color: 'white' }}>Louer</a>
                            <a href="/#terrain" style={{ color: 'white' }}>Terrains</a>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            <a href="#" style={{ color: 'var(--primary)', transition: '0.3s' }}><Facebook size={24} /></a>
                            <a href="#" style={{ color: 'var(--primary)', transition: '0.3s' }}><Instagram size={24} /></a>
                        </div>
                    </div>

                    <div style={{
                        textAlign: 'center',
                        paddingTop: '60px',
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        color: 'rgba(255,255,255,0.3)',
                        fontSize: '0.8rem',
                        letterSpacing: '1px'
                    }}>
                        © 2026 HOUSE OF IMMOSOLEIL. DESIGNED FOR EXCELLENCE.
                    </div>
                </div>
            </footer>
            <style>{`
          .social-link {
            width: 45px;
            height: 45px;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
          }
          .social-link:hover {
            background: var(--primary);
            border-color: var(--primary);
            color: white !important;
            transform: translateY(-5px);
          }
          footer a { color: rgba(255,255,255,0.6); text-decoration: none; }
          footer a:hover {
            color: var(--primary) !important;
          }
           @media (max-width: 768px) {
            .footer-grid { display: none !important; }
            .mobile-footer-only { display: block !important; }
          }
          @media (max-width: 500px) {
            .footer-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
            .newsletter-btn { padding: 0 1rem !important; }
            .newsletter-input { padding-right: 65px !important; font-size: 0.85rem !important; }
          }
        `}</style>
        </>
    );
};

export default Footer;
