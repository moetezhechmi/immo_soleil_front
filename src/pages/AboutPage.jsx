import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ExpertFormModal from '../components/ExpertFormModal';
import { CheckCircle2, Award, Users, Target, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
import heroImg from '../assets/hero_djerba.png';

const AboutPage = () => {
    const [isExpertModalOpen, setIsExpertModalOpen] = React.useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ background: '#FCFBF8', minHeight: '100vh', overflowX: 'hidden' }}>
            <Navbar />

            {/* Header Section */}
            <section style={{
                position: 'relative',
                height: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0F0F0F',
                overflow: 'hidden'
            }}>
                <img
                    src={heroImg}
                    alt="Djerba Heritage"
                    style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
                />
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem' }}>
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', fontWeight: '800', marginBottom: '1rem' }}
                    >
                        Notre Histoire
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="serif"
                        style={{ color: 'white', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1' }}
                    >
                        L'Excellence Immobilière <br /> à <span className="text-gold">Djerba</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="serif" style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Plus qu'une Agence, <br /> un Partenaire de Vie.</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                            Fondée en 2012 au cœur de l'île de Djerba, <strong>Immosoleil</strong> est née d'une passion profonde pour le patrimoine architectural tunisien et d'un désir d'offrir une expérience immobilière sans compromis.
                            <br /><br />
                            Spécialistes de l'immobilier de prestige, nous accompagnons nos clients dans la réalisation de leurs rêves, qu'il s'agisse de l'acquisition d'un Houch traditionnel restauré, d'une villa contemporaine pieds dans l'eau ou d'un investissement foncier stratégique.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h3 className="text-gold" style={{ fontSize: '2.5rem', fontWeight: '800' }}>12+</h3>
                                <p style={{ fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--secondary)' }}>Ans d'Expérience</p>
                            </div>
                            <div>
                                <h3 className="text-gold" style={{ fontSize: '2.5rem', fontWeight: '800' }}>350+</h3>
                                <p style={{ fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--secondary)' }}>Ventes Réalisées</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        {/* Luxury accent - Solid gold block instead of border */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'var(--primary)',
                            borderRadius: '20px',
                            zIndex: 0,
                            opacity: 0.3
                        }}></div>

                        <img
                            src={heroImg}
                            alt="Agence Immosoleil"
                            style={{
                                width: '100%',
                                height: '600px',
                                objectFit: 'cover',
                                borderRadius: '40px',
                                position: 'relative',
                                zIndex: 1,
                                boxShadow: '0 40px 100px rgba(0,0,0,0.15)'
                            }}
                        />

                        {/* Floating Glass Trophy/Badge */}
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                position: 'absolute',
                                top: '40px',
                                right: '-30px',
                                background: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(20px)',
                                padding: '1.5rem 2rem',
                                borderRadius: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                zIndex: 2,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}
                        >
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 15px var(--primary)' }}></div>
                            <span style={{ fontWeight: '800', color: 'var(--secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Expertise Djerbienne
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section style={{ padding: '100px 0', background: 'var(--secondary)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
                        <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '800', marginBottom: '1rem' }}>Nos Valeurs</h4>
                        <h2 className="serif" style={{ color: 'white', fontSize: '3.5rem' }}>L'Intégrité au Cœur <br /> de l'Excellence</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                        {[
                            { icon: Award, title: "Expertise Juridique", desc: "Nous sécurisons chaque transaction avec une rigueur absolue sur les titres fonciers." },
                            { icon: Users, title: "Conseil Personnalisé", desc: "Un accompagnement sur-mesure pour chaque client, de la recherche à la signature." },
                            { icon: Target, title: "Transparence", desc: "Pas de frais cachés, une communication claire et honnête à chaque étape." }
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem 2rem', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(197, 160, 89, 0.2)' }}
                            >
                                <val.icon size={40} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>{val.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section Placeholder / Call to Action */}
            <section className="section-padding" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 className="serif" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Besoin d'un conseil d'expert ?</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                        Notre équipe est à votre disposition pour vous accompagner dans votre projet immobilier à Djerba.
                        Rencontrons-nous pour en discuter.
                    </p>
                    <button
                        className="btn-primary"
                        style={{ padding: '1.2rem 4rem', fontSize: '1.1rem' }}
                        onClick={() => setIsExpertModalOpen(true)}
                    >
                        Prendre Rendez-vous
                    </button>
                </div>
            </section>

            {/* Modern Footer - Matches HomePage */}
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
                    footer a:hover {
                        color: var(--primary) !important;
                    }
                    @media (max-width: 768px) {
                        .footer-grid { display: none !important; }
                        .mobile-footer-only { display: block !important; }
                    }
                    @media (max-width: 500px) {
                        .newsletter-btn { padding: 0 1rem !important; }
                        .newsletter-input { padding-right: 65px !important; font-size: 0.85rem !important; }
                    }
                `}</style>
            </footer>

            <ExpertFormModal isOpen={isExpertModalOpen} onClose={() => setIsExpertModalOpen(false)} />
        </div>
    );
};

export default AboutPage;
