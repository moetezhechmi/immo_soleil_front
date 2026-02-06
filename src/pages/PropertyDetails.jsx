import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Bed, Bath, Square, MapPin, Share2, Heart,
    ArrowLeft, CheckCircle, Phone, Mail,
    MessageCircle, ShieldCheck, ChevronLeft, Image as ImageIcon,
    Calendar, Maximize, Navigation, Info, ArrowRight, Star
} from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

// Consistently import assets
import apartmentImg from '../assets/apartment.png';
import beachfrontImg from '../assets/beachfront.png';
import heroImg from '../assets/hero_djerba.png';
import luxuryMenzelImg from '../assets/luxury_menzel_djerba.png';
import modernVillaImg from '../assets/modern_villa_aghir.png';
import traditionalHouchImg from '../assets/traditional_houch_midoun.png';

// Expanded properties list (same as FeaturedProperties for consistency)
const properties = [
    {
        id: 1,
        title: "Palais des Coupoles",
        price: "1 250 000",
        location: "Midoun, Djerba",
        img: luxuryMenzelImg,
        gallery: [luxuryMenzelImg, traditionalHouchImg, beachfrontImg, heroImg],
        beds: 6,
        baths: 5,
        size: "450 m²",
        type: "Menzel de Luxe",
        status: "buy",
        tag: "Exclusivité",
        desc: "Une prouesse architecturale alliant le charme des coupoles traditionnelles et le confort d'un palace moderne. Ce Menzel d'exception dispose d'un patio magistral, de suites royales et d'un jardin luxuriant. Un véritable havre de paix au cœur de Djerba.",
        features: ["Piscine Olympique", "Patio central doré", "6 Suites Parentales", "Cuisine High-Tech", "Domotique complète", "Double Garage", "Jardin Luxuriant", "Hammam Traditionnel", "Salle de Sport", "Système de Sécurité"],
        ref: "IS-2026-001"
    },
    {
        id: 2,
        title: "Villa Horizon Bleu",
        price: "890 000",
        location: "Aghir, Djerba",
        img: modernVillaImg,
        gallery: [modernVillaImg, beachfrontImg, apartmentImg, luxuryMenzelImg],
        beds: 4,
        baths: 4,
        size: "320 m²",
        type: "Villa Moderne",
        status: "buy",
        tag: "Coup de Cœur",
        desc: "Perchée sur les hauteurs d'Aghir, cette villa contemporaine offre une vue mer à 180°. Son design minimaliste privilégie la lumière et les espaces ouverts vers l'infini bleu de la Méditerranée. Matériaux nobles et finitions irréprochables.",
        features: ["Infinity Pool", "Toit Terrasse", "Vue Mer Panoramique", "Vitraux Thermiques", "Jardin Zen", "Espace Spa"],
        ref: "IS-2026-002"
    },
    {
        id: 3,
        title: "Le Houch Traditionnel Rénové",
        price: "680 000",
        location: "Tezdaine, Djerba",
        img: traditionalHouchImg,
        gallery: [traditionalHouchImg, heroImg, luxuryMenzelImg],
        beds: 5,
        baths: 3,
        size: "280 m²",
        type: "Houch Authentique",
        status: "buy",
        tag: "Patrimoine",
        desc: "Authenticité et confort se rencontrent dans ce Houch rénové avec goût. Conserve l'âme djerbienne avec tout le confort moderne.",
        features: ["Architecture Typique", "Puits", "Verger", "Salon Tunisien"],
        ref: "IS-2026-003"
    },
    {
        id: 4,
        title: "Villa Jasmine à Louer",
        price: "2 500",
        location: "Midoun, Djerba",
        img: modernVillaImg,
        gallery: [modernVillaImg, beachfrontImg, heroImg, traditionalHouchImg],
        beds: 3,
        baths: 2,
        size: "200 m²",
        type: "Villa avec Piscine",
        status: "rent",
        tag: "Saisonnier",
        desc: "Idéale pour vos vacances en famille, la Villa Jasmine propose un cadre serein et sécurisé. Entièrement équipée, elle se situe à proximité immédiate des plages de Midoun et des zones d'activités, tout en préservant une intimité totale.",
        features: ["Piscine privative", "Wi-Fi Haut Débit", "Service de Conciergerie", "Barbecue extérieur", "Entièrement climatisé", "Proche Plage", "Parking Privé", "Jardin Clos"],
        ref: "IS-2026-004"
    },
    { id: 11, title: "Villa Phoenix & Piscine", price: "850 000", location: "Midoun", img: heroImg, beds: 4, baths: 3, size: "300 m²", type: "Villa", status: "buy", tag: "Nouveauté" },
    { id: 13, title: "Menzel Bleu Authentique", price: "320 000", location: "Guellala", img: heroImg, beds: 3, baths: 2, size: "220 m²", type: "Menzel", status: "buy", tag: "Charme" },
    { id: 14, title: "Appartement Royal Marina", price: "390 000", location: "Zone Touristique", img: apartmentImg, beds: 2, baths: 2, size: "135 m²", type: "Appartement", status: "buy", tag: "Prestige" },
    { id: 15, title: "Villa Jasmine Garden", price: "1 800", location: "Aghir", img: beachfrontImg, beds: 3, baths: 2, size: "180 m²", type: "Villa", status: "rent", tag: "Bord de Mer" },
    { id: 18, title: "Villa Turquoise Prestige", price: "4 500", location: "Zone Touristique", img: beachfrontImg, beds: 5, baths: 4, size: "450 m²", type: "Villa Luxe", status: "rent", tag: "Premium" }
];

const SimilarPropertyCard = ({ property }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => {
                navigate(`/bien/${property.id}`);
                window.scrollTo(0, 0);
            }}
            className="similar-card"
            style={{ minWidth: '300px', maxWidth: '300px', cursor: 'pointer' }}
        >
            <div style={{ position: 'relative', height: '220px', borderRadius: '16px', overflow: 'hidden', marginBottom: '1rem' }}>
                <img src={property.img} alt={property.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '4px 10px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: '700' }}>
                    {property.tag}
                </div>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'white', color: 'var(--secondary)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '800' }}>
                    {property.status === 'buy' ? property.price + ' TND' : property.price + ' DT / mois'}
                </div>
            </div>
            <h4 className="serif" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--secondary)' }}>{property.title}</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#666', fontSize: '0.9rem' }}>
                <MapPin size={14} color="var(--primary)" /> {property.location}
            </div>
        </div>
    );
};

const PropertyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const property = properties.find(p => p.id === parseInt(id)) || properties[0];

    // Fallbacks
    const gallery = property.gallery || [property.img, property.img, property.img];
    const features = property.features || ["Climatisation", "Parking", "Jardin", "Terrasse"];
    const description = property.desc || "Découvrez ce bien d'exception sélectionné par Immosoleil. Contactez-nous pour une visite.";

    // Filter similar properties (same status or type, excluding current)
    const similarProperties = properties.filter(p => p.id !== property.id && (p.status === property.status || p.type === property.type)).slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="property-details-page" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            <Navbar />

            {/* Breadcrumb Navigation - Modern */}
            <div className="container" style={{ paddingTop: '120px', paddingBottom: '20px' }}>
                <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#666', fontWeight: '600', fontSize: '0.9rem' }}>
                    <ArrowLeft size={16} /> Retour aux annonces
                </button>
            </div>

            {/* Premium Interactive Gallery Grid */}
            {/* Premium Interactive Gallery Grid */}
            <div className="container" style={{ marginBottom: '60px' }}>
                {/* Desktop Grid - Hidden on Mobile */}
                <div className="modern-gallery-grid desktop-gallery">
                    <div className="gallery-main item-1">
                        <img src={property.img} alt={property.title} />
                        <div className="gallery-overlay">
                            <span className="gallery-tag">{property.tag}</span>
                        </div>
                    </div>
                    <div className="gallery-sub item-2">
                        <img src={gallery[1] || property.img} alt="Detail" />
                    </div>
                    <div className="gallery-sub item-3">
                        <img src={gallery[2] || property.img} alt="Detail" />
                        <div className="view-all-photos">
                            <ImageIcon size={20} />
                            <span>Voir {gallery.length}+ Photos</span>
                        </div>
                    </div>
                </div>

                {/* Mobile Scrollable Gallery - Visible Only on Mobile */}
                <div className="mobile-gallery-scroll" style={{ display: 'none', overflowX: 'auto', gap: '15px', scrollSnapType: 'x mandatory', paddingBottom: '10px' }}>
                    {[property.img, ...(gallery.slice(1))].map((img, idx) => (
                        <div key={idx} style={{ minWidth: '85vw', height: '300px', borderRadius: '20px', overflow: 'hidden', scrollSnapAlign: 'center', position: 'relative' }}>
                            <img src={img} alt={`Gallery ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            {idx === 0 && (
                                <div className="gallery-overlay">
                                    <span className="gallery-tag">{property.tag}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .desktop-gallery {
                        display: none !important;
                    }
                    .mobile-gallery-scroll {
                        display: flex !important;
                    }
                }
            `}</style>

            <main className="container" style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '60px', paddingBottom: '100px' }}>
                {/* Main Content Column */}
                <div className="info-column">

                    {/* Header Info */}
                    <div style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '30px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                            <div>
                                <h1 className="serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', margin: '0 0 10px 0', color: 'var(--secondary)', lineHeight: '1.2' }}>{property.title}</h1>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '1.1rem' }}>
                                    <MapPin size={18} color="var(--primary)" /> {property.location}
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>
                                    {property.price} <span style={{ fontSize: '1rem' }}>{property.status === 'buy' ? 'TND' : 'DT/mois'}</span>
                                </div>
                                <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                                    <div className="badge-pill">{property.type}</div>
                                    <div className="badge-pill" style={{ background: '#f0f0f0', color: '#555' }}>Ref: {property.ref || 'REF-2026'}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Specifications Grid */}
                    <div className="specs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '50px' }}>
                        <div className="spec-card">
                            <Bed size={24} strokeWidth={1.5} />
                            <div><strong>{property.beds}</strong> <br /> <span style={{ fontSize: '0.8rem', color: '#888' }}>Chambres</span></div>
                        </div>
                        <div className="spec-card">
                            <Bath size={24} strokeWidth={1.5} />
                            <div><strong>{property.baths}</strong> <br /> <span style={{ fontSize: '0.8rem', color: '#888' }}>Salles d'eau</span></div>
                        </div>
                        <div className="spec-card">
                            <Maximize size={24} strokeWidth={1.5} />
                            <div><strong>{property.size}</strong> <br /> <span style={{ fontSize: '0.8rem', color: '#888' }}>Surface</span></div>
                        </div>
                        <div className="spec-card">
                            <Star size={24} strokeWidth={1.5} />
                            <div><strong>Premium</strong> <br /> <span style={{ fontSize: '0.8rem', color: '#888' }}>Standing</span></div>
                        </div>
                    </div>

                    {/* Description Section */}
                    <section className="detail-section">
                        <h3 className="section-title">À propos de ce bien</h3>
                        <p className="property-description">
                            {description}
                        </p>
                    </section>

                    {/* Features / Amenities */}
                    <section className="detail-section" style={{ marginTop: '40px' }}>
                        <h3 className="section-title">Équipements & Atouts</h3>
                        <div className="features-list">
                            {features.map((item, index) => (
                                <div key={index} className="feature-item-modern">
                                    <div className="check-icon"><CheckCircle size={14} color="white" /></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Location Placeholder */}
                    <section className="detail-section" style={{ marginTop: '50px' }}>
                        <h3 className="section-title">Localisation</h3>
                        <div style={{
                            width: '100%',
                            height: '350px',
                            background: '#f8f8f8',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #eee',
                            flexDirection: 'column',
                            gap: '15px',
                            color: '#999'
                        }}>
                            <MapPin size={40} color="#ddd" />
                            <span style={{ fontWeight: '600' }}>Aperçu de la carte - {property.location}</span>
                            <button style={{ padding: '10px 20px', background: 'white', border: '1px solid #ddd', borderRadius: '30px', fontWeight: '600', cursor: 'pointer' }}>
                                Ouvrir dans Google Maps
                            </button>
                        </div>
                    </section>

                </div>

                {/* Sidebar - Stuck & Modern */}
                <aside style={{ position: 'relative' }}>
                    <div className="sticky-sidebar">
                        <div style={{ padding: '30px', background: '#FDFCF8', borderRadius: '24px', border: '1px solid #EBE5D5' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                                <img src={logo} alt="Agent" style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid white', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }} />
                                <div>
                                    <h4 style={{ margin: 0, color: 'var(--secondary)', fontSize: '1.1rem' }}>ImmoSoleil Djerba</h4>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Expert Immobilier</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <button className="mod-btn primary">
                                    <Phone size={18} /> Afficher le numéro
                                </button>
                                <button className="mod-btn secondary" onClick={() => window.open('https://wa.me/21625509998?text=Bonjour, je suis intéressé par votre annonce : ' + property.title, '_blank')}>
                                    <MessageCircle size={18} /> WhatsApp
                                </button>
                                <button className="mod-btn outline" onClick={() => window.location.href = 'mailto:contact@immosoleil.tn'}>
                                    <Mail size={18} /> Envoyer un email
                                </button>
                            </div>

                            <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #eee', fontSize: '0.85rem', color: '#888', textAlign: 'center', lineHeight: '1.6' }}>
                                <ShieldCheck size={16} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                                Annonce vérifiée et certifiée par notre agence.
                            </div>
                        </div>
                    </div>
                </aside>
            </main>

            {/* Similar Properties Section */}
            {similarProperties.length > 0 && (
                <section style={{ background: '#F9F9F9', padding: '80px 0' }}>
                    <div className="container">
                        <div className="similar-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                            <div>
                                <h3 className="serif" style={{ fontSize: '2.5rem', margin: 0, color: 'var(--secondary)' }}>Annonces Similaires</h3>
                                <p style={{ color: '#666', marginTop: '10px' }}>D'autres biens qui pourraient vous intéresser à {property.location}</p>
                            </div>
                            <Link to="/#proprietes" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', textDecoration: 'none' }}>
                                Voir tout le catalogue <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '20px', scrollbarWidth: 'none' }}>
                            {similarProperties.map(prop => (
                                <SimilarPropertyCard key={prop.id} property={prop} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />

            <style>{`
                /* Responsive fix for Similar Properties Header */
                @media (max-width: 768px) {
                    .similar-section-header {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 1.5rem !important;
                    }
                }

                .modern-gallery-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    grid-template-rows: 250px 250px;
                    gap: 15px;
                    border-radius: 20px;
                    overflow: hidden;
                    height: 515px;
                }
                .gallery-main { grid-row: 1 / 3; position: relative; }
                .gallery-sub { position: relative; }
                .modern-gallery-grid img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; cursor: pointer; }
                .modern-gallery-grid div:hover img { transform: scale(1.03); }
                
                .gallery-overlay {
                    position: absolute; top: 20px; left: 20px;
                    background: rgba(255,255,255,0.2); backdrop-filter: blur(10px);
                    padding: 8px 16px; borderRadius: 30px; border: 1px solid rgba(255,255,255,0.4);
                }
                .gallery-tag { color: white; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; }
                
                .view-all-photos {
                    position: absolute; bottom: 20px; right: 20px;
                    background: white; color: var(--secondary);
                    padding: 8px 16px; border-radius: 12px;
                    display: flex; gap: 8px; alignItems: center;
                    font-weight: 700; font-size: 0.9rem;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    cursor: pointer;
                }

                .badge-pill {
                    padding: 6px 14px; background: var(--primary); color: white;
                    border-radius: 20px; font-weight: 600; font-size: 0.8rem; text-transform: uppercase;
                }

                .spec-card {
                    background: #F9F9F9; padding: 20px; border-radius: 16px;
                    display: flex; flex-direction: column; align-items: center; text-align: center; gap: 10px;
                    color: var(--secondary); border: 1px solid transparent; transition: 0.3s;
                }
                .spec-card:hover { border-color: var(--primary); background: white; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }

                .section-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--secondary); margin-bottom: 20px; }
                .property-description { line-height: 1.8; color: #555; font-size: 1.05rem; }

                .features-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
                .feature-item-modern {
                    display: flex; alignItems: center; gap: 12px;
                    background: white; padding: 12px 15px; border-radius: 10px; border: 1px solid #eee;
                    font-weight: 500; color: #444;
                }
                .check-icon {
                    width: 20px; height: 20px; background: var(--primary); border-radius: 50%;
                    display: flex; alignItems: center; justifyContent: center;
                }

                .sticky-sidebar { position: sticky; top: 100px; }
                
                .mod-btn {
                    width: 100%; padding: 16px; border-radius: 12px; border: none; font-size: 1rem;
                    display: flex; alignItems: center; justify-content: center; gap: 10px; font-weight: 700;
                    cursor: pointer; transition: 0.3s;
                }
                .mod-btn.primary { background: var(--secondary); color: white; }
                .mod-btn.primary:hover { background: black; }
                .mod-btn.secondary { background: #25D366; color: white; }
                .mod-btn.secondary:hover { background: #1eb956; }
                .mod-btn.outline { background: transparent; border: 2px solid #EEE; color: var(--secondary); }
                .mod-btn.outline:hover { border-color: var(--primary); }

                @media (max-width: 1024px) {
                    main { grid-template-columns: 1fr !important; }
                    .info-column { order: 2; }
                    aside { order: 1; margin-bottom: 40px; }
                    .modern-gallery-grid { height: auto; grid-template-columns: 1fr; grid-template-rows: auto; }
                    .gallery-main { grid-row: auto; height: 300px; }
                    .item-2, .item-3 { height: 200px; display: none; } /* Show main only on tablet/mobile for height constraint */
                }
                
                @media (max-width: 768px) {
                    .specs-grid { grid-template-columns: repeat(2, 1fr) !important; }
                    .features-list { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
};

export default PropertyDetails;
