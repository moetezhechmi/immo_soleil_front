import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import ExpertFormModal from '../components/ExpertFormModal';
import Footer from '../components/Footer';
import logo from '../assets/logo.jpg';
import { Facebook, Instagram, Phone, Mail, MapPin, Briefcase, CheckCircle } from 'lucide-react';

import heroDjerba from '../assets/hero_djerba.png';

function HomePage() {
    const [isExpertModalOpen, setIsExpertModalOpen] = React.useState(false);

    return (
        <div className="HomePage" style={{ overflowX: 'hidden' }}>
            <Navbar onOpenExpertModal={() => setIsExpertModalOpen(true)} />
            <main>
                <Hero />

                {/* Prestige Bar - Modern Stats & Trust */}
                <section style={{
                    background: 'var(--bg-secondary)',
                    padding: '2.5rem 0',
                    borderBottom: '1px solid rgba(197, 160, 89, 0.1)'
                }}>
                    <div className="container">
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '2rem',
                            alignItems: 'center'
                        }}>
                            {[
                                { value: '350+', label: 'Ventes Réalisées', sub: 'Expertise Djerbienne' },
                                { value: '12', label: 'Ans sur Djerba', sub: 'Expérience Locale' },
                                { value: '100%', label: 'Conseil Local', sub: 'Accompagnement' },
                                { value: '0 DT', label: 'Frais de Visite', sub: 'Transparence Totale' }
                            ].map((stat, index) => (
                                <div key={index} style={{
                                    textAlign: 'center',
                                    position: 'relative',
                                    padding: '0 1rem'
                                }}>
                                    <div className="text-gold" style={{
                                        fontSize: '2.4rem',
                                        fontWeight: '800',
                                        marginBottom: '0.3rem',
                                        fontFamily: 'Playfair Display, serif'
                                    }}>
                                        {stat.value}
                                    </div>
                                    <div style={{
                                        color: 'var(--secondary)',
                                        fontWeight: '700',
                                        fontSize: '0.85rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        marginBottom: '0.2rem'
                                    }}>
                                        {stat.label}
                                    </div>
                                    <div style={{
                                        color: 'var(--text-muted)',
                                        fontSize: '0.75rem',
                                        fontWeight: '500'
                                    }}>
                                        {stat.sub}
                                    </div>
                                    {/* Vertical Divider for desktop */}
                                    {index < 3 && (
                                        <div className="stat-divider" style={{
                                            position: 'absolute',
                                            right: '-1rem',
                                            top: '20%',
                                            height: '60%',
                                            width: '1px',
                                            background: 'rgba(197, 160, 89, 0.2)'
                                        }} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <style>{`
          @media (max-width: 768px) {
            .stat-divider { display: none; }
          }
        `}</style>

                <FeaturedProperties />

                <section id="services" className="section-padding about-section" style={{ background: 'white', position: 'relative', overflow: 'hidden', padding: '80px 0' }}>
                    <div className="container about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                        <div className="about-image-wrapper" style={{ position: 'relative' }}>
                            <div className="about-image-border" style={{
                                position: 'absolute',
                                top: '-50px',
                                left: '-50px',
                                width: '100%',
                                height: '100%',
                                border: '1px solid var(--primary)',
                                opacity: 0.2,
                                borderRadius: '30px',
                                zIndex: 0
                            }}></div>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <img
                                    src={heroDjerba}
                                    alt="L'art de vivre à Djerba"
                                    className="about-main-img"
                                    style={{
                                        width: '100%',
                                        height: '500px',
                                        objectFit: 'cover',
                                        borderRadius: '30px',
                                        boxShadow: '0 40px 80px rgba(0,0,0,0.12)'
                                    }}
                                />
                                <div className="about-stat-badge" style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    right: '-30px',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    padding: '2rem',
                                    borderRadius: '20px',
                                    boxShadow: '0 20px 40px rgba(197, 160, 89, 0.4)',
                                    maxWidth: '300px'
                                }}>
                                    <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '0.5rem' }}>12+</h3>
                                    <p style={{ fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Ans d'Excellence Immobilière</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-content">
                            <h4 className="text-gold" style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '1rem', fontWeight: '800' }}>Engagement & Prestige</h4>
                            <h2 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1', color: 'var(--secondary)' }}>
                                L'Art de l'Immobilier <br />à <span className="text-gold">Djerba</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
                                Depuis plus d'une décennie, <strong>Immosoleil Djerba</strong> redéfinit les standards de l'immobilier de luxe sur l'île aux sables d'or. Nous ne vendons pas seulement des murs, nous vous ouvrons les portes d'un art de vivre unique.
                            </p>

                            <div className="about-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
                                {[
                                    { title: 'Vente Exclusive', desc: 'Villas d\'exception et demeures de charme.' },
                                    { title: 'Terrains Titrés', desc: 'Sécurisation juridique totale de vos projets.' },
                                    { title: 'Gestion Privée', desc: 'Un service sur-mesure pour vos propriétés.' },
                                    { title: 'Expertise Locale', desc: 'Une connaissance parfaite du marché insulaire.' }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h5 style={{ color: 'var(--secondary)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '800' }}>{item.title}</h5>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: '2.5rem' }}>
                                <button
                                    className="btn-primary"
                                    style={{ padding: '1.1rem 3rem' }}
                                    onClick={() => setIsExpertModalOpen(true)}
                                >
                                    Rencontrer un Expert
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

                <style>{`
          @media (max-width: 768px) {
            .stat-divider { display: none; }
            .about-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
            .about-main-img { height: 400px !important; }
            .about-stat-badge { position: relative !important; right: 0 !important; bottom: 0 !important; margin-top: -60px !important; margin-left: 20px; padding: 2rem !important; }
            .about-image-border { display: none; }
            .about-services-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
            .about-content h2 { fontSize: 2.5rem !important; }
          }
        `}</style>
            </main>

            <ExpertFormModal
                isOpen={isExpertModalOpen}
                onClose={() => setIsExpertModalOpen(false)}
            />
        </div>
    );
}

export default HomePage;
