import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, ArrowUpRight, Heart, Home, SlidersHorizontal, ChevronDown } from 'lucide-react';
import apartmentImg from '../assets/apartment.png';
import beachfrontImg from '../assets/beachfront.png';
import heroImg from '../assets/hero_djerba.png';
import luxuryMenzelImg from '../assets/luxury_menzel_djerba.png';
import modernVillaImg from '../assets/modern_villa_aghir.png';
import traditionalHouchImg from '../assets/traditional_houch_midoun.png';
import landSeaViewImg from '../assets/land_sea_view_djerba.png';

const properties = [
    {
        id: 1,
        title: "Palais des Coupoles",
        price: "1 250 000",
        location: "Midoun, Djerba",
        img: luxuryMenzelImg,
        beds: 6,
        baths: 5,
        size: "450 m²",
        type: "Menzel de Luxe",
        status: "buy",
        tag: "Exclusivité"
    },
    {
        id: 2,
        title: "Villa Horizon Bleu",
        price: "890 000",
        location: "Aghir, Djerba",
        img: modernVillaImg,
        beds: 4,
        baths: 4,
        size: "320 m²",
        type: "Villa Moderne",
        status: "buy",
        tag: "Coup de Cœur"
    },
    {
        id: 3,
        title: "Le Houch Traditionnel Rénové",
        price: "680 000",
        location: "Tezdaine, Djerba",
        img: traditionalHouchImg,
        beds: 5,
        baths: 3,
        size: "280 m²",
        type: "Houch Authentique",
        status: "buy",
        tag: "Patrimoine"
    },
    {
        id: 10,
        title: "Domaine du Levant",
        price: "450 000",
        location: "Sidi Mahrez (Zone Touristique)",
        img: landSeaViewImg,
        beds: 0,
        baths: 0,
        size: "2 500 m²",
        type: "Terrain Pieds dans l'Eau",
        status: "buy",
        tag: "Premium"
    },
    {
        id: 4,
        title: "Villa Jasmine à Louer",
        price: "2 500",
        location: "Midoun, Djerba",
        img: modernVillaImg,
        beds: 3,
        baths: 2,
        size: "200 m²",
        type: "Villa avec Piscine",
        status: "rent",
        tag: "Saisonnier"
    },
    // New Sales (4)
    {
        id: 11,
        title: "Villa Phoenix & Piscine",
        price: "850 000",
        location: "Midoun",
        img: heroImg,
        beds: 4,
        baths: 3,
        size: "300 m²",
        type: "Villa",
        status: "buy",
        tag: "Nouveauté"
    },
    {
        id: 12,
        title: "Terrain Panoramique",
        price: "180 000",
        location: "Aghir",
        img: beachfrontImg,
        beds: 0,
        baths: 0,
        size: "1500 m²",
        type: "Terrain",
        status: "buy",
        tag: "Vue Mer"
    },
    {
        id: 13,
        title: "Menzel Bleu Authentique",
        price: "320 000",
        location: "Guellala",
        img: heroImg,
        beds: 3,
        baths: 2,
        size: "220 m²",
        type: "Menzel",
        status: "buy",
        tag: "Charme"
    },
    {
        id: 14,
        title: "Appartement Royal Marina",
        price: "390 000",
        location: "Zone Touristique",
        img: apartmentImg,
        beds: 2,
        baths: 2,
        size: "135 m²",
        type: "Appartement",
        status: "buy",
        tag: "Prestige"
    },
    // New Rentals (12)
    {
        id: 15,
        title: "Villa Jasmine Garden",
        price: "1 800",
        location: "Aghir",
        img: beachfrontImg,
        beds: 3,
        baths: 2,
        size: "180 m²",
        type: "Villa",
        status: "rent",
        tag: "Bord de Mer"
    },
    {
        id: 16,
        title: "Studio Palmier Cosy",
        price: "700",
        location: "Midoun",
        img: apartmentImg,
        beds: 1,
        baths: 1,
        size: "55 m²",
        type: "Studio",
        status: "rent",
        tag: "Centre"
    },
    {
        id: 17,
        title: "Maison Olive & Patio",
        price: "1 100",
        location: "Tezdaine",
        img: heroImg,
        beds: 2,
        baths: 2,
        size: "120 m²",
        type: "Maison",
        status: "rent",
        tag: "Calme"
    },
    {
        id: 18,
        title: "Villa Turquoise Prestige",
        price: "4 500",
        location: "Zone Touristique",
        img: beachfrontImg,
        beds: 5,
        baths: 4,
        size: "450 m²",
        type: "Villa Luxe",
        status: "rent",
        tag: "Premium"
    },
    {
        id: 19,
        title: "Appartement Sable Blanc",
        price: "850",
        location: "Houmt Souk",
        img: apartmentImg,
        beds: 2,
        baths: 1,
        size: "95 m²",
        type: "Appartement",
        status: "rent",
        tag: "Urbain"
    },
    {
        id: 20,
        title: "Menzel Djerbi Tradition",
        price: "2 000",
        location: "El May",
        img: heroImg,
        beds: 3,
        baths: 3,
        size: "250 m²",
        type: "Menzel",
        status: "rent",
        tag: "Authentique"
    },
    {
        id: 21,
        title: "Villa Mirage & Spa",
        price: "3 000",
        location: "Sidi Mahrez",
        img: heroImg,
        beds: 4,
        baths: 3,
        size: "280 m²",
        type: "Villa",
        status: "rent",
        tag: "Moderne"
    },
    {
        id: 22,
        title: "Studio Oasis Détente",
        price: "550",
        location: "Midoun",
        img: apartmentImg,
        beds: 1,
        baths: 1,
        size: "45 m²",
        type: "Studio",
        status: "rent",
        tag: "Budget"
    },
    {
        id: 23,
        title: "Maison de Charme Cedriane",
        price: "1 300",
        location: "Cedriane",
        img: heroImg,
        beds: 3,
        baths: 2,
        size: "160 m²",
        type: "Maison",
        status: "rent",
        tag: "Typique"
    },
    {
        id: 24,
        title: "Appartement Vue Marina",
        price: "1 700",
        location: "Houmt Souk",
        img: beachfrontImg,
        beds: 3,
        baths: 2,
        size: "150 m²",
        type: "Appartement",
        status: "rent",
        tag: "Exclusif"
    },
    {
        id: 25,
        title: "Villa Horizon Infini",
        price: "2 800",
        location: "Aghir",
        img: beachfrontImg,
        beds: 4,
        baths: 3,
        size: "220 m²",
        type: "Villa",
        status: "rent",
        tag: "Wow View"
    },
    {
        id: 26,
        title: "Duplex Calme & Design",
        price: "950",
        location: "Midoun",
        img: apartmentImg,
        beds: 2,
        baths: 2,
        size: "110 m²",
        type: "Duplex",
        status: "rent",
        tag: "Moderne"
    },
    // New Land Listings (4 more)
    {
        id: 27,
        title: "Terrain avec Vue Mer",
        price: "210 000",
        location: "Aghir",
        img: beachfrontImg,
        beds: 0,
        baths: 0,
        size: "1800 m²",
        type: "Terrain",
        status: "buy",
        tag: "Exclusif"
    },
    {
        id: 28,
        title: "Parcelle d'Olivier",
        price: "95 000",
        location: "El May",
        img: heroImg,
        beds: 0,
        baths: 0,
        size: "2500 m²",
        type: "Terrain",
        status: "buy",
        tag: "Authentique"
    },
    {
        id: 29,
        title: "Terrain Zone Touristique",
        price: "420 000",
        location: "Sidi Mahrez",
        img: beachfrontImg,
        beds: 0,
        baths: 0,
        size: "800 m²",
        type: "Terrain",
        status: "buy",
        tag: "Premium"
    },
    {
        id: 30,
        title: "Terrain Calme Absolu",
        price: "65 000",
        location: "Sidi Jmour",
        img: heroImg,
        beds: 0,
        baths: 0,
        size: "1000 m²",
        type: "Terrain",
        status: "buy",
        tag: "Nature"
    }
];

const FeaturedProperties = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState(() => {
        const hash = window.location.hash;
        if (hash === '#louer') return 'rent';
        if (hash === '#terrain') return 'land';
        return 'buy';
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [isFiltersExpanded, setIsFiltersExpanded] = useState(false);
    const itemsPerPage = 6;

    const handlePropertyClick = (prop) => {
        if (prop.type === 'Terrain') {
            navigate(`/terrain/${prop.id}`);
        } else {
            navigate(`/bien/${prop.id}`);
        }
    };

    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (!hash) return;

        let targetFilter = '';
        if (hash === '#louer') targetFilter = 'rent';
        else if (hash === '#acheter') targetFilter = 'buy';
        else if (hash === '#terrain') targetFilter = 'land';

        if (targetFilter) {
            setFilter(targetFilter);
            // Small timeout to ensure state update and DOM adjustment before scrolling
            setTimeout(() => {
                const id = hash.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    // Reset pagination when filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [filter]);

    const filteredProperties = properties.filter(p => {
        if (filter === 'land') return p.type === 'Terrain';
        return p.status === filter;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProperties.slice(indexOfFirstItem, indexOfLastItem);

    const scrollToTop = () => {
        let sectionId = filter === 'rent' ? 'louer' : 'acheter';
        if (filter === 'land') sectionId = 'terrain';
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        scrollToTop();
    };

    return (
        <section id="proprietes" className="section-padding" style={{ backgroundColor: '#FCFBFA', position: 'relative' }}>
            {/* Stable anchors for navigation */}
            <div id="louer" style={{ position: 'absolute', top: '-150px' }}></div>
            <div id="acheter" style={{ position: 'absolute', top: '-150px' }}></div>
            <div id="terrain" style={{ position: 'absolute', top: '-150px' }}></div>

            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5rem', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ maxWidth: '600px' }}>
                        <h4 style={{
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontSize: '0.85rem',
                            fontWeight: '800',
                            color: '#C5A059',
                            marginBottom: '1rem'
                        }}>
                            NOTRE SÉLECTION {filter === 'buy' ? 'VENTES' : filter === 'rent' ? 'LOCATIONS' : 'TERRAINS'}
                        </h4>
                        <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '800', lineHeight: '1', color: 'var(--secondary)' }}>
                            {filter === 'buy' ? 'Ventes d\'Exception' : filter === 'rent' ? 'Locations d\'Exception' : 'Terrains d\'Exception'}
                        </h2>
                    </div>

                    <div className="location-filter-container" style={{ background: '#F0EBE3', padding: '0.6rem', borderRadius: '15px', display: 'flex', gap: '0.5rem' }}>
                        <button
                            onClick={() => { setFilter('rent'); window.location.hash = 'louer'; }}
                            style={{
                                padding: '0.8rem 2.2rem',
                                borderRadius: '12px',
                                background: filter === 'rent' ? 'white' : 'transparent',
                                color: filter === 'rent' ? 'var(--secondary)' : 'var(--text-muted)',
                                fontWeight: '700',
                                fontSize: '0.85rem',
                                transition: '0.3s',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: filter === 'rent' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
                            }}
                        >
                            Location
                        </button>
                        <button
                            onClick={() => { setFilter('buy'); window.location.hash = 'acheter'; }}
                            style={{
                                padding: '0.8rem 2.2rem',
                                borderRadius: '12px',
                                background: filter === 'buy' ? 'white' : 'transparent',
                                color: filter === 'buy' ? 'var(--secondary)' : 'var(--text-muted)',
                                fontWeight: '700',
                                fontSize: '0.85rem',
                                transition: '0.3s',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: filter === 'buy' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
                            }}
                        >
                            Vente
                        </button>
                        <button
                            onClick={() => { setFilter('land'); window.location.hash = 'terrain'; }}
                            style={{
                                padding: '0.8rem 2.2rem',
                                borderRadius: '12px',
                                background: filter === 'land' ? 'white' : 'transparent',
                                color: filter === 'land' ? 'var(--secondary)' : 'var(--text-muted)',
                                fontWeight: '700',
                                fontSize: '0.85rem',
                                transition: '0.3s',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: filter === 'land' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
                            }}
                        >
                            Terrains
                        </button>
                    </div>
                </div>

                {/* Sub-Filters Bar */}
                <div
                    className="sub-filters-container"
                    style={{
                        background: 'white',
                        padding: '1.2rem 2rem',
                        borderRadius: '20px',
                        marginBottom: '4rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.02)',
                        border: '1px solid #F0F0F0',
                        flexWrap: 'wrap',
                        position: 'relative',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    {/* Mobile Filter Toggle */}
                    <button
                        onClick={() => setIsFiltersExpanded(!isFiltersExpanded)}
                        className="mobile-filter-toggle"
                        style={{
                            display: 'none', // Shown only on mobile via CSS
                            width: '100%',
                            padding: '0.8rem',
                            background: '#F9F7F2',
                            border: 'none',
                            borderRadius: '12px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.8rem',
                            color: 'var(--secondary)',
                            fontWeight: '700',
                            cursor: 'pointer'
                        }}
                    >
                        <SlidersHorizontal size={18} />
                        Affiner la recherche
                        <ChevronDown size={18} style={{
                            transform: isFiltersExpanded ? 'rotate(180deg)' : 'rotate(0)',
                            transition: '0.3s'
                        }} />
                    </button>

                    <div
                        className={`filters-content ${isFiltersExpanded ? 'expanded' : ''}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem',
                            flex: 1,
                            flexWrap: 'wrap'
                        }}
                    >
                        <div style={{ flex: 1, minWidth: '150px', display: 'flex', alignItems: 'center', gap: '0.8rem', borderRight: '1px solid #F5F5F5', paddingRight: '1rem' }} className="filter-item">
                            {filter === 'land' ? <Square size={18} color="#C5A059" /> : <Home size={18} color="#C5A059" />}
                            <select style={{ border: 'none', background: 'none', outline: 'none', width: '100%', fontSize: '0.9rem', fontWeight: '600', color: 'var(--secondary)', cursor: 'pointer' }}>
                                {filter === 'land' ? (
                                    <>
                                        <option>Type de terrain</option>
                                        <option>Zone Urbaine</option>
                                        <option>Agricole</option>
                                        <option>Zone Touristique</option>
                                        <option>Titre Foncier</option>
                                    </>
                                ) : (
                                    <>
                                        <option>Type de bien</option>
                                        <option>Villa</option>
                                        <option>Menzel</option>
                                        <option>Appartement</option>
                                        <option>Studio</option>
                                    </>
                                )}
                            </select>
                        </div>

                        <div style={{ flex: 1, minWidth: '150px', display: 'flex', alignItems: 'center', gap: '0.8rem', borderRight: '1px solid #F5F5F5', paddingRight: '1rem' }} className="filter-item">
                            <MapPin size={18} color="#C5A059" />
                            <select style={{ border: 'none', background: 'none', outline: 'none', width: '100%', fontSize: '0.9rem', fontWeight: '600', color: 'var(--secondary)', cursor: 'pointer' }}>
                                <option>Secteur</option>
                                <option>Midoun</option>
                                <option>Houmt Souk</option>
                                <option>Aghir</option>
                                <option>Tezdaine</option>
                                <option>Sedghiane</option>
                            </select>
                        </div>

                        {filter !== 'land' ? (
                            <div style={{ flex: 1, minWidth: '150px', display: 'flex', alignItems: 'center', gap: '0.8rem', borderRight: '1px solid #F5F5F5', paddingRight: '1rem' }} className="filter-item">
                                <Bed size={18} color="#C5A059" />
                                <select style={{ border: 'none', background: 'none', outline: 'none', width: '100%', fontSize: '0.9rem', fontWeight: '600', color: 'var(--secondary)', cursor: 'pointer' }}>
                                    <option>Chambres</option>
                                    <option>1+ Chambre</option>
                                    <option>2+ Chambres</option>
                                    <option>3+ Chambres</option>
                                    <option>4+ Chambres</option>
                                </select>
                            </div>
                        ) : (
                            <div style={{ flex: 1, minWidth: '150px', display: 'flex', alignItems: 'center', gap: '0.8rem', borderRight: '1px solid #F5F5F5', paddingRight: '1rem' }} className="filter-item">
                                <Square size={18} color="#C5A059" />
                                <select style={{ border: 'none', background: 'none', outline: 'none', width: '100%', fontSize: '0.9rem', fontWeight: '600', color: 'var(--secondary)', cursor: 'pointer' }}>
                                    <option>Surface</option>
                                    <option>Moins de 500 m²</option>
                                    <option>500 - 1000 m²</option>
                                    <option>1000 - 2500 m²</option>
                                    <option>Plus de 2500 m²</option>
                                </select>
                            </div>
                        )}

                        <div style={{ flex: 1, minWidth: '180px', display: 'flex', alignItems: 'center', gap: '0.8rem' }} className="filter-item last">
                            <Square size={18} color="#C5A059" />
                            <select style={{ border: 'none', background: 'none', outline: 'none', width: '100%', fontSize: '0.9rem', fontWeight: '600', color: 'var(--secondary)', cursor: 'pointer' }}>
                                <option>Budget Max</option>
                                <option>Moins de 100k DT</option>
                                <option>100k - 300k DT</option>
                                <option>300k - 500k DT</option>
                                <option>Plus de 500k DT</option>
                            </select>
                        </div>

                        <button style={{
                            background: 'var(--secondary)',
                            color: 'white',
                            padding: '0.8rem 2rem',
                            borderRadius: '12px',
                            border: 'none',
                            fontWeight: '700',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            transition: '0.3s',
                            marginLeft: 'auto'
                        }} className="filter-btn">
                            Filtrer
                        </button>
                    </div>

                    <style>{`
                        @media (max-width: 768px) {
                            .sub-filters-container { padding: 1rem !important; margin-bottom: 2.5rem !important; }
                            .mobile-filter-toggle { display: flex !important; }
                            .filters-content { 
                                display: none !important; 
                                width: 100%; 
                                flex-direction: column !important; 
                                gap: 1rem !important; 
                                padding-top: 1rem;
                            }
                            .filters-content.expanded { display: flex !important; }
                            .filter-item { 
                                border-right: none !important; 
                                border-bottom: 1px solid #F5F5F5; 
                                padding: 1rem 0 !important;
                                width: 100%;
                            }
                            .filter-item.last { border-bottom: none !important; }
                            .filter-btn { width: 100%; margin-top: 0.5rem; padding: 1rem !important; }
                            
                            /* Fix for the top Location/Vente/Terrain buttons */
                            .location-filter-container {
                                flex-wrap: wrap !important;
                                width: 100% !important;
                                justify-content: center !important;
                                margin-left: 0 !important;
                            }
                            .location-filter-container button {
                                flex: 1 !important;
                                padding: 0.8rem 1rem !important;
                                font-size: 0.8rem !important;
                                min-width: auto !important;
                            }
                        }
                    `}</style>
                </div>

                <div className="property-grid">
                    {currentItems.map(prop => (
                        <div key={prop.id}
                            onClick={() => handlePropertyClick(prop)}
                            style={{ cursor: 'pointer' }}
                            className="modern-property-card"
                        >
                            <div style={{ position: 'relative', height: '420px', borderRadius: '24px', overflow: 'hidden', marginBottom: '1.2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <img src={prop.img} alt={prop.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="card-img" />

                                <div style={{
                                    position: 'absolute', top: '1.5rem', left: '1.5rem',
                                    background: 'rgba(28, 28, 28, 0.85)', backdropFilter: 'blur(8px)',
                                    color: 'white', padding: '0.5rem 1.2rem', borderRadius: '10px',
                                    fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px'
                                }}>
                                    {prop.tag}
                                </div>

                                <div style={{
                                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                                    width: '45px', height: '45px', borderRadius: '50%',
                                    background: 'white', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', cursor: 'pointer'
                                }}>
                                    <Heart size={20} color="#C5A059" fill="none" />
                                </div>

                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0,
                                    padding: '50px 2rem 2rem',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                                    color: 'white', display: 'flex', flexDirection: 'column', gap: '0.5rem'
                                }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.8)' }}>
                                        {prop.type}
                                    </span>
                                    <h3 className="serif" style={{ fontSize: '1.8rem', color: 'white', fontWeight: '700', lineHeight: '1.2' }}>
                                        {prop.title}
                                    </h3>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#666', paddingLeft: '0.5rem' }}>
                                <MapPin size={18} color="#C5A059" />
                                <span style={{ fontSize: '1rem', fontWeight: '600' }}>{prop.location}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.8rem',
                        marginTop: '5rem'
                    }}>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                            style={{
                                padding: '0.8rem 1.5rem',
                                borderRadius: '10px',
                                background: 'white',
                                color: currentPage === 1 ? '#CCC' : 'var(--secondary)',
                                fontWeight: '700',
                                border: '1px solid #EEE',
                                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                transition: '0.3s'
                            }}
                        >
                            Précédent
                        </button>

                        {[...Array(totalPages)].map((_, idx) => (
                            <button
                                key={idx + 1}
                                onClick={() => handlePageChange(idx + 1)}
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '10px',
                                    background: currentPage === idx + 1 ? 'var(--primary)' : 'white',
                                    color: currentPage === idx + 1 ? 'white' : 'var(--secondary)',
                                    fontWeight: '800',
                                    border: '1px solid #EEE',
                                    cursor: 'pointer',
                                    transition: '0.3s',
                                    boxShadow: currentPage === idx + 1 ? '0 4px 12px rgba(197, 160, 89, 0.2)' : 'none'
                                }}
                            >
                                {idx + 1}
                            </button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                            style={{
                                padding: '0.8rem 1.5rem',
                                borderRadius: '10px',
                                background: 'white',
                                color: currentPage === totalPages ? '#CCC' : 'var(--secondary)',
                                fontWeight: '700',
                                border: '1px solid #EEE',
                                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                transition: '0.3s'
                            }}
                        >
                            Suivant
                        </button>
                    </div>
                )}

                <style>{`
                    .modern-property-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); border-color: var(--primary); }
                    .modern-property-card:hover .card-img { transform: scale(1.1); }
                `}</style>

                {filteredProperties.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Aucun bien ne correspond à votre recherche pour le moment.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturedProperties;
