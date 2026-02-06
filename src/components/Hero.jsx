import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, MapPin, Home, Banknote, BedDouble, ChevronDown, SlidersHorizontal, Bath, Square } from 'lucide-react';
import heroImg from '../assets/hero_djerba.png';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('rent'); // 'buy', 'rent', or 'land'
    const [isExpanded, setIsExpanded] = useState(false);
    const [price, setPrice] = useState(1500);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#louer') {
                setActiveTab('rent');
                setPrice(1500);
            } else if (hash === '#acheter') {
                setActiveTab('buy');
                setPrice(250000);
            } else if (hash === '#terrain') {
                setActiveTab('land');
                setPrice(150000);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Check on mount

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <section id="accueil" className="hero" style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: '#000'
        }}>
            <div className="hero-overlay" style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))',
                zIndex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            }}></div>
            <img src={heroImg} alt="Luxury Djerba Villa" className="hero-img" style={{ opacity: 0.8, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />

            <div className="container hero-content" style={{ position: 'relative', zIndex: 2, paddingBottom: '5rem' }}>
                <div style={{ maxWidth: '900px' }}>
                    <h4 className="animate-fade-up text-gold" style={{
                        textTransform: 'uppercase',
                        letterSpacing: '5px',
                        fontSize: '0.9rem',
                        fontWeight: '800',
                        marginBottom: '1.5rem'
                    }}>
                        L'Agence Immobilière de Prestige
                    </h4>
                    <h1 className="hero-title animate-fade-up" style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        lineHeight: '1',
                        color: 'white',
                        marginBottom: '2.5rem'
                    }}>
                        L'Art de Vivre à <span className="text-gold" style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>Djerba</span>
                    </h1>
                    <p className="hero-subtitle animate-fade-up" style={{
                        animationDelay: '0.2s',
                        fontSize: '1.25rem',
                        color: 'rgba(255,255,255,0.8)',
                        maxWidth: '650px',
                        lineHeight: '1.8'
                    }}>
                        Expertise en vente et location de villas d'exception, menzels traditionnels et terrains titrés sur l'île aux sables d'or.
                    </p>
                </div>

                <div className="search-container animate-fade-up" style={{
                    animationDelay: '0.4s',
                    width: '100%',
                    maxWidth: '1100px',
                    margin: '5rem auto 0'
                }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '0' }}>
                        {['rent', 'buy', 'land'].map((tab) => (
                            <button
                                key={tab}
                                className={`search-tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setPrice(tab === 'buy' ? 250000 : tab === 'rent' ? 1500 : 150000);
                                }}
                                style={{
                                    flex: 1, // Even distribution
                                    padding: '1.2rem 1.5rem', // Reduced default horizontal padding
                                    background: activeTab === tab ? 'white' : 'rgba(255, 255, 255, 0.1)',
                                    color: activeTab === tab ? 'var(--secondary)' : 'white',
                                    borderRadius: '15px 15px 0 0',
                                    fontWeight: '800',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    backdropFilter: 'blur(20px)',
                                    border: 'none',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                {tab === 'buy' ? 'Vente' : tab === 'rent' ? 'Location' : 'Terrains'}
                            </button>
                        ))}
                    </div>

                    <div className="main-search-bar" style={{
                        background: 'white',
                        padding: '1.5rem 2rem',
                        borderRadius: isExpanded ? '0 20px 0 0' : '0 20px 20px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ flex: 1.5, minWidth: '250px', display: 'flex', alignItems: 'center', gap: '1.2rem', borderRight: '1px solid #F0F0F0', paddingRight: '2rem' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(197, 160, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <MapPin size={22} style={{ color: 'var(--primary)' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Localisation</label>
                                <input
                                    type="text"
                                    placeholder="Où cherchez-vous ?"
                                    style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem', fontWeight: '600', color: 'var(--secondary)' }}
                                />
                            </div>
                        </div>

                        {activeTab !== 'land' && (
                            <div style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', gap: '1.2rem', borderRight: '1px solid #F0F0F0', paddingRight: '2rem' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(197, 160, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Home size={22} style={{ color: 'var(--primary)' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Propriété</label>
                                    <select style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem', fontWeight: '600', color: 'var(--secondary)', background: 'none', cursor: 'pointer' }}>
                                        <option>Tout voir</option>
                                        <option>Villa / Maison</option>
                                        <option>Menzel</option>
                                        <option>Terrain</option>
                                        <option>Appartement</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                padding: '1rem',
                                background: '#F9F7F2',
                                color: 'var(--secondary)',
                                fontWeight: '700',
                                fontSize: '0.9rem',
                                borderRadius: '12px',
                                transition: '0.3s'
                            }}
                        >
                            <SlidersHorizontal size={20} />
                            Filtres
                            <ChevronDown size={18} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.4s ease' }} />
                        </button>

                        {!isExpanded && (
                            <div className="search-btn-container" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                                <button className="btn-primary search-btn-main" style={{
                                    padding: '1.2rem 5rem',
                                    borderRadius: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    fontWeight: '800',
                                    fontSize: '1.1rem',
                                    boxShadow: '0 15px 30px rgba(197, 160, 89, 0.25)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    Rechercher <Search size={22} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Expandable Advanced Filters */}
                    {isExpanded && (
                        <div className="advanced-filters-panel" style={{
                            background: 'white',
                            padding: '3rem',
                            borderRadius: '0 0 20px 20px',
                            borderTop: '1px solid #F0F0F0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3rem',
                            boxShadow: '0 40px 80px rgba(0,0,0,0.2)',
                            animation: 'fadeInDown 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            position: 'relative',
                            zIndex: 10
                        }}>
                            <div className="filters-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: activeTab === 'land' ? '1fr 1fr' : 'repeat(auto-fit, minmax(240px, 1fr))',
                                gap: '4rem'
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--secondary)', letterSpacing: '1px' }}>Budget Max (TND)</label>
                                        <div style={{ background: 'var(--secondary)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '30px', fontWeight: '800', fontSize: '1.2rem' }}>
                                            {Number(price).toLocaleString('fr-FR')} DT
                                        </div>
                                    </div>
                                    <div style={{ position: 'relative', paddingTop: '1rem' }}>
                                        <input
                                            type="range"
                                            min={activeTab === 'buy' ? "10000" : activeTab === 'land' ? "5000" : "400"}
                                            max={activeTab === 'buy' ? "800000" : activeTab === 'land' ? "500000" : "8000"}
                                            step={activeTab === 'buy' ? "1000" : activeTab === 'land' ? "1000" : "50"}
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            className="modern-slider"
                                            style={{
                                                width: '100%',
                                                cursor: 'pointer',
                                                accentColor: 'var(--primary)'
                                            }}
                                        />
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700' }}>
                                            <span>{activeTab === 'buy' ? '10 000' : activeTab === 'land' ? '5 000' : '400'} DT</span>
                                            <span>{activeTab === 'buy' ? '800 000' : activeTab === 'land' ? '500 000' : '8 000'} DT</span>
                                        </div>
                                    </div>
                                </div>

                                {activeTab !== 'land' && (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--secondary)', letterSpacing: '1px' }}>Détails du Bien</label>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', background: '#F9F7F2', padding: '1rem', borderRadius: '12px', border: '1px solid #F0F0F0' }}>
                                                <BedDouble size={20} style={{ color: 'var(--primary)', marginRight: '1rem' }} />
                                                <select style={{ background: 'none', border: 'none', width: '100%', outline: 'none', fontWeight: '700', fontSize: '1rem', color: 'var(--secondary)' }}>
                                                    <option>Chambres</option>
                                                    <option>1+</option>
                                                    <option>2+</option>
                                                    <option>3+</option>
                                                    <option>4+</option>
                                                </select>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', background: '#F9F7F2', padding: '1rem', borderRadius: '12px', border: '1px solid #F0F0F0' }}>
                                                <Bath size={20} style={{ color: 'var(--primary)', marginRight: '1rem' }} />
                                                <select style={{ background: 'none', border: 'none', width: '100%', outline: 'none', fontWeight: '700', fontSize: '1rem', color: 'var(--secondary)' }}>
                                                    <option>Sdb</option>
                                                    <option>1+</option>
                                                    <option>2+</option>
                                                    <option>3+</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', background: '#F9F7F2', padding: '1rem', borderRadius: '12px', border: '1px solid #F0F0F0' }}>
                                            <Square size={20} style={{ color: 'var(--primary)', marginRight: '1rem' }} />
                                            <select style={{ background: 'none', border: 'none', width: '100%', outline: 'none', fontWeight: '700', fontSize: '1rem', color: 'var(--secondary)' }}>
                                                <option>Surface Minimale</option>
                                                <option>50 m²</option>
                                                <option>100 m²</option>
                                                <option>200 m²</option>
                                                <option>300 m²+</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'land' && (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--secondary)', letterSpacing: '1px' }}>Surface du Terrain</label>
                                        <div style={{ display: 'flex', alignItems: 'center', background: '#F9F7F2', padding: '1rem', borderRadius: '12px', border: '1px solid #F0F0F0' }}>
                                            <Square size={20} style={{ color: 'var(--primary)', marginRight: '1rem' }} />
                                            <select style={{ background: 'none', border: 'none', width: '100%', outline: 'none', fontWeight: '700', fontSize: '1rem', color: 'var(--secondary)' }}>
                                                <option>Surface Minimale</option>
                                                <option>500 m²</option>
                                                <option>1000 m²</option>
                                                <option>2000 m²</option>
                                                <option>5000 m²+</option>
                                            </select>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', background: '#F9F7F2', padding: '1rem', borderRadius: '12px', border: '1px solid #F0F0F0' }}>
                                            <MapPin size={20} style={{ color: 'var(--primary)', marginRight: '1rem' }} />
                                            <select style={{ background: 'none', border: 'none', width: '100%', outline: 'none', fontWeight: '700', fontSize: '1rem', color: 'var(--secondary)' }}>
                                                <option>Type de terrain</option>
                                                <option>Agricole</option>
                                                <option>Constructible</option>
                                                <option>Zone Touristique</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {activeTab !== 'land' && (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--secondary)', letterSpacing: '1px' }}>Prestations & Confort</label>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '1rem' }}>
                                            {[
                                                { id: 'piscine', label: 'Piscine' },
                                                { id: 'jardin', label: 'Jardin' },
                                                { id: 'mer', label: 'Vue Mer' },
                                                { id: 'parking', label: 'Garage' },
                                                { id: 'meuble', label: 'Meublé' },
                                                { id: 'terrasse', label: 'Terrasse' }
                                            ].map((amenity) => (
                                                <label key={amenity.id} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.8rem',
                                                    cursor: 'pointer',
                                                    padding: '0.8rem',
                                                    background: '#F9F7F2',
                                                    borderRadius: '10px',
                                                    transition: '0.3s'
                                                }}>
                                                    <input type="checkbox" style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }} />
                                                    <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--secondary)' }}>{amenity.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="filters-footer" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '2.5rem', borderTop: '1px solid #F0F0F0', paddingTop: '2.5rem' }}>
                                <button
                                    onClick={() => setPrice(250000)}
                                    style={{ color: 'var(--text-muted)', fontWeight: '700', textDecoration: 'none', background: 'none' }}
                                >
                                    Tout réinitialiser
                                </button>
                                <button className="btn-primary" style={{
                                    padding: '1.2rem 4rem',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    fontWeight: '800',
                                    fontSize: '1.1rem'
                                }}>
                                    Lancer la Recherche <Search size={22} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Scroll Indicator - Bottom of Section */}
            <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                color: 'white',
                opacity: 0.6,
                zIndex: 5
            }}>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '700' }}>Scroll</div>
                <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, white, transparent)' }}></div>
            </div>

            <style>{`
                .modern-slider { -webkit-appearance: none; height: 6px; background: #EEE; border-radius: 5px; outline: none; }
                .modern-slider::-webkit-slider-thumb {
                    -webkit-appearance: none; width: 24px; height: 24px; background: var(--primary); 
                    border: 4px solid white; border-radius: 50%; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.15); transition: 0.3s;
                }
                .modern-slider::-webkit-slider-thumb:hover { transform: scale(1.15); box-shadow: 0 0 0 10px rgba(197, 160, 89, 0.1); }
                @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
                @media (max-width: 768px) {
                    .hero { padding-top: 110px; padding-bottom: 4rem; min-height: auto !important; }
                    .hero-title { font-size: 2.2rem !important; margin-bottom: 1.5rem !important; line-height: 1.2 !important; padding-right: 1.5rem; }
                    .hero-subtitle { font-size: 1rem !important; margin-bottom: 2rem; padding-right: 1.5rem; max-width: 100% !important; overflow-wrap: break-word; }
                    
                    /* Adjusted margins to definitely fix right-edge stickiness */
                    .search-container { 
                        margin-top: 2rem !important; 
                        margin-bottom: 2rem; 
                        margin-left: auto !important;
                        margin-right: auto !important;
                        width: 90% !important; /* Force width to leave space */
                        display: block !important;
                        max-width: 100% !important;
                    }
                    
                    /* Ensure tabs fit */
                    .search-tab { 
                        padding: 0.8rem 0 !important; 
                        font-size: 0.7rem !important; 
                        letter-spacing: 0.5px !important; 
                        flex: 1;
                        text-align: center;
                    }
                    
                    .main-search-bar { 
                        padding: 1.5rem 1rem !important; 
                        flex-direction: column !important; 
                        align-items: stretch !important; 
                        gap: 1.2rem !important; 
                        border-radius: 0 0 20px 20px !important; 
                    }
                    
                    /* Force label visibility and styling */
                    .main-search-bar label {
                        color: #666 !important;
                        opacity: 1 !important;
                        display: block !important;
                    }
                    
                    .main-search-bar > div { 
                        border: none !important; 
                        width: 100% !important; 
                        padding: 0 !important; 
                        border-bottom: 1px solid #EEEEEE !important; 
                        background: transparent !important;
                        border-radius: 0 !important;
                        margin-bottom: 0.5rem !important;
                        padding-bottom: 0.8rem !important;
                        min-width: 0 !important; /* Fix flex overflow */
                    }
                    
                    .advanced-filters-panel { 
                        padding: 1.2rem !important; 
                        gap: 1.5rem !important; 
                        border-radius: 0 0 15px 15px !important;
                    }
                    
                    .filters-grid { gap: 1.5rem !important; grid-template-columns: 1fr !important; }
                    .filters-footer { 
                        flex-direction: column; 
                        gap: 1.2rem !important; 
                        padding-top: 1.5rem !important; 
                    }
                    .filters-footer button { width: 100% !important; padding: 1rem !important; }
                    
                    .search-btn-container { margin-top: 1rem !important; }
                    .search-btn-main { width: 100% !important; }
                    
                    .about-content h2 { font-size: 2rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
