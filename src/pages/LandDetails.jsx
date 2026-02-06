import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Square, MapPin, Share2, Heart,
    ArrowLeft, CheckCircle, Phone, Mail,
    MessageCircle, ShieldCheck, ChevronLeft, Map as MapIcon, FileText,
    Compass, Sun, Wind, Trees, Image as ImageIcon, Navigation, ArrowRight, Layers
} from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

// Import assets consistently
import heroImg from '../assets/hero_djerba.png';
import beachfrontImg from '../assets/beachfront.png';
import landSeaViewImg from '../assets/land_sea_view_djerba.png';
import luxuryMenzelImg from '../assets/luxury_menzel_djerba.png';
import modernVillaImg from '../assets/modern_villa_aghir.png';

const lands = [
    {
        id: 7,
        title: "Terrain avec Permis de Construire",
        price: "135 000",
        location: "Sedghiane, Djerba",
        img: heroImg,
        gallery: [heroImg, beachfrontImg, landSeaViewImg],
        size: "1200 m²",
        type: "Terrain",
        classification: "Urbain / Constructible",
        status: "buy",
        tag: "Opportunité",
        desc: "Magnifique parcelle de 1200 m² située dans un quartier calme et recherché de Sedghiane. Le terrain est plat, clôturé et bénéficie déjà d'un permis de construire accordé pour une villa avec piscine. Raccordements eau et électricité en bordure de parcelle.",
        features: ["Permis de construire ok", "Terrain plat", "Accès route goudronnée", "Zone Urbaine", "Titré individuel", "Proche commerces", "Étude de sol réalisée", "Clôturé"],
        ref: "TR-2026-007"
    },
    {
        id: 10,
        title: "Domaine du Levant - Pieds dans l'Eau",
        price: "450 000",
        location: "Sidi Mahrez, Djerba",
        img: landSeaViewImg,
        gallery: [landSeaViewImg, beachfrontImg, heroImg],
        size: "2 500 m²",
        type: "Terrain",
        classification: "Zone Touristique / Prestige",
        status: "buy",
        tag: "Premium",
        desc: "Une opportunité unique d'acquérir une parcelle d'exception en première ligne de mer. Ce terrain de 2500 m² offre un accès direct à une plage de sable fin et une vue imprenable sur le lever du soleil. Idéal pour un projet de villa de très haut standing ou une maison d'hôtes de luxe.",
        features: ["Première ligne mer", "Accès plage direct", "Titre foncier individuel", "Zone touristique", "Vue panoramique", "Viabilisé", "Prestige"],
        ref: "TR-2026-010"
    },
    {
        id: 27,
        title: "Terrain avec Vue Mer Panoramique",
        price: "210 000",
        location: "Aghir, Djerba",
        img: beachfrontImg,
        gallery: [beachfrontImg, landSeaViewImg, heroImg],
        size: "1 800 m²",
        type: "Terrain",
        classification: "Zone Urbaine / Résidentielle",
        status: "buy",
        tag: "Exclusif",
        desc: "Situé sur les hauteurs d'Aghir, ce terrain de 1800 m² offre une vue spectaculaire sur toute la baie. Un emplacement privilégié, calme et entouré de villas de prestige. Prêt pour la construction immédiate de la propriété de vos rêves.",
        features: ["Vue Mer 180°", "Quartier résidentiel", "Terrain viabilisé", "Pente légère idéale", "Titre en règle", "Environnement calme", "Proche Plage"],
        ref: "TR-2026-027"
    },
    {
        id: 28,
        title: "Parcelle d'Olivier Traditionnelle",
        price: "95 000",
        location: "El May, Djerba",
        img: heroImg,
        gallery: [heroImg, landSeaViewImg, beachfrontImg],
        size: "2 500 m²",
        type: "Terrain",
        classification: "Agricole / Calme",
        status: "buy",
        tag: "Authentique",
        desc: "Magnifique terrain arboré d'oliviers centenaires au coeur de la campagne Djerbienne. Idéal pour un projet de Menzel traditionnel ou une retraite paisible loin de l'agitation.",
        features: ["Oliviers centenaires", "Eau et Électricité", "Proche centre El May", "Calme absolu", "Titre de propriété clair", "Sol fertile"],
        ref: "TR-2026-028"
    },
    {
        id: 29,
        title: "Terrain Zone Touristique Premium",
        price: "420 000",
        location: "Sidi Mahrez, Djerba",
        img: beachfrontImg,
        gallery: [beachfrontImg, heroImg, landSeaViewImg],
        size: "800 m²",
        type: "Terrain",
        classification: "Zone Touristique / Commercial",
        status: "buy",
        tag: "Premium",
        desc: "Emplacement stratégique en plein coeur de la zone touristique de Sidi Mahrez. Terrain de 800 m² idéal pour un projet commercial ou une villa de luxe hautement rentable en location saisonnière.",
        features: ["Emplacement stratégique", "Près des hôtels", "Zone dynamique", "Titré individuel", "Accès route principale", "Rare"],
        ref: "TR-2026-029"
    },
    {
        id: 30,
        title: "Terrain Calme Absolu",
        price: "65 000",
        location: "Sidi Jmour, Djerba",
        img: landSeaViewImg,
        gallery: [landSeaViewImg, beachfrontImg, heroImg],
        size: "1 000 m²",
        type: "Terrain",
        classification: "Nature / Préservé",
        status: "buy",
        tag: "Nature",
        desc: "Parcelle de 1000 m² à quelques minutes de la plage sauvage de Sidi Jmour. Un lieu magique pour les amoureux de la nature et du calme, célèbre pour ses couchers de soleil.",
        features: ["Proche plage sauvage", "Coucher de soleil", "Calme garanti", "Prix attractif", "Zone naturelle", "Sidi Jmour"],
        ref: "TR-2026-030"
    }
];

const SimilarLandCard = ({ land }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => {
                navigate(`/terrain/${land.id}`);
                window.scrollTo(0, 0);
            }}
            className="similar-card"
            style={{ minWidth: '300px', maxWidth: '300px', cursor: 'pointer' }}
        >
            <div style={{ position: 'relative', height: '220px', borderRadius: '16px', overflow: 'hidden', marginBottom: '1rem' }}>
                <img src={land.img} alt={land.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '4px 10px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: '700' }}>
                    {land.tag}
                </div>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'white', color: 'var(--secondary)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '800' }}>
                    {land.price} TND
                </div>
            </div>
            <h4 className="serif" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--secondary)' }}>{land.title}</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#666', fontSize: '0.9rem' }}>
                <MapPin size={14} color="var(--primary)" /> {land.location}
            </div>
        </div>
    );
};

const LandDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const land = lands.find(l => l.id === parseInt(id)) || lands[0];

    // Filter similar lands (excluding current)
    const similarLands = lands.filter(l => l.id !== land.id).slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="land-details-page" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            <Navbar />

            {/* Breadcrumb Navigation - Modern */}
            <div className="container" style={{ paddingTop: '120px', paddingBottom: '20px' }}>
                <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#666', fontWeight: '600', fontSize: '0.9rem' }}>
                    <ArrowLeft size={16} /> Retour aux terrains
                </button>
            </div>

            {/* Premium Interactive Gallery Grid */}
            {/* Premium Interactive Gallery Grid */}
            <div className="container" style={{ marginBottom: '60px' }}>
                {/* Desktop Grid - Hidden on Mobile */}
                <div className="modern-gallery-grid desktop-gallery">
                    <div className="gallery-main item-1">
                        <img src={land.img} alt={land.title} />
                        <div className="gallery-overlay">
                            <span className="gallery-tag">{land.tag}</span>
                        </div>
                    </div>
                    <div className="gallery-sub item-2">
                        <img src={land.gallery[1] || land.img} alt="Detail" />
                    </div>
                    <div className="gallery-sub item-3">
                        <img src={land.gallery[2] || land.img} alt="Detail" />
                        <div className="view-all-photos">
                            <ImageIcon size={20} />
                            <span>Voir le plan & photos</span>
                        </div>
                    </div>
                </div>

                {/* Mobile Scrollable Gallery - Visible Only on Mobile */}
                <div className="mobile-gallery-scroll" style={{ display: 'none', overflowX: 'auto', gap: '15px', scrollSnapType: 'x mandatory', paddingBottom: '10px' }}>
                    {[land.img, ...(land.gallery.slice(1))].map((img, idx) => (
                        <div key={idx} style={{ minWidth: '85vw', height: '300px', borderRadius: '20px', overflow: 'hidden', scrollSnapAlign: 'center', position: 'relative' }}>
                            <img src={img} alt={`Gallery ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            {idx === 0 && (
                                <div className="gallery-overlay">
                                    <span className="gallery-tag">{land.tag}</span>
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
                                <h1 className="serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', margin: '0 0 10px 0', color: 'var(--secondary)', lineHeight: '1.2' }}>{land.title}</h1>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '1.1rem' }}>
                                    <MapPin size={18} color="var(--primary)" /> {land.location}
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>
                                    {land.price} <span style={{ fontSize: '1rem' }}>TND</span>
                                </div>
                                <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                                    <div className="badge-pill">{land.type}</div>
                                    <div className="badge-pill" style={{ background: '#f0f0f0', color: '#555' }}>Ref: {land.ref || 'REF-LAND'}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Specifications Grid */}
                    <div className="specs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '50px' }}>
                        <div className="spec-card">
                            <Square size={24} strokeWidth={1.5} />
                            <div><strong>{land.size}</strong> <br /> <span style={{ fontSize: '0.8rem', color: '#888' }}>Surface</span></div>
                        </div>
                        <div className="spec-card">
                            <FileText size={24} strokeWidth={1.5} />
                            <div><strong>Titré</strong> <br /> <span style={{ fontSize: '0.8rem', color: '#888' }}>Statut</span></div>
                        </div>
                        <div className="spec-card">
                            <Layers size={24} strokeWidth={1.5} />
                            <div><strong>{land.classification.split('/')[0]}</strong> <br /> <span style={{ fontSize: '0.8rem', color: '#888' }}>Zone</span></div>
                        </div>
                        <div className="spec-card">
                            <Compass size={24} strokeWidth={1.5} />
                            <div><strong>Sud-Est</strong> <br /> <span style={{ fontSize: '0.8rem', color: '#888' }}>Orient.</span></div>
                        </div>
                    </div>

                    {/* Description Section */}
                    <section className="detail-section">
                        <h3 className="section-title">Description du terrain</h3>
                        <p className="property-description">
                            {land.desc}
                        </p>
                    </section>

                    {/* Features / Amenities */}
                    <section className="detail-section" style={{ marginTop: '40px' }}>
                        <h3 className="section-title">Points forts & Atouts</h3>
                        <div className="features-list">
                            {land.features.map((item, index) => (
                                <div key={index} className="feature-item-modern">
                                    <div className="check-icon"><CheckCircle size={14} color="white" /></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Advanced Environment Info */}
                    <section className="detail-section" style={{ marginTop: '40px' }}>
                        <h3 className="section-title">Environnement</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px', marginTop: '20px' }}>
                            {[
                                { icon: Sun, label: "Ensoleillement Optimal" },
                                { icon: Wind, label: "Ventilé (Brise Marine)" },
                                { icon: Trees, label: "Cadre Végétal" },
                                { icon: Navigation, label: "Accès Facile" }
                            ].map((item, i) => (
                                <div key={i} style={{ textAlign: 'center', background: '#FCFBF8', padding: '20px', borderRadius: '15px', border: '1px solid #f0f0f0' }}>
                                    <item.icon size={24} color="#C5A059" style={{ marginBottom: '10px' }} />
                                    <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#666' }}>{item.label}</div>
                                </div>
                            ))}
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
                                    <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Expert Foncier</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <button className="mod-btn secondary" onClick={() => window.open('https://wa.me/21625509998?text=Bonjour, je suis intéressé par votre terrain : ' + land.title, '_blank')}>
                                    <MessageCircle size={18} /> WhatsApp Expert
                                </button>
                                <button className="mod-btn outline" onClick={() => window.location.href = 'mailto:contact@immosoleil.tn'}>
                                    <Mail size={18} /> Envoyer un email
                                </button>
                            </div>

                            <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #eee', fontSize: '0.85rem', color: '#888', textAlign: 'center', lineHeight: '1.6' }}>
                                <ShieldCheck size={16} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                                Contrôle de titre foncier validé par l'agence.
                            </div>
                        </div>
                    </div>
                </aside>
            </main>

            {/* Similar Lands Section */}
            <section style={{ background: '#F9F9F9', padding: '80px 0' }}>
                <div className="container">
                    <div className="similar-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                        <div>
                            <h3 className="serif" style={{ fontSize: '2.5rem', margin: 0, color: 'var(--secondary)' }}>Terrains Similaires</h3>
                            <p style={{ color: '#666', marginTop: '10px' }}>D'autres opportunités foncières à Djerba</p>
                        </div>
                        <Link to="/#terrain" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', textDecoration: 'none' }}>
                            Voir tous les terrains <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '20px', scrollbarWidth: 'none' }}>
                        {similarLands.map(land => (
                            <SimilarLandCard key={land.id} land={land} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                 /* Responsive fix for Similar Lands Header */
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

export default LandDetails;
