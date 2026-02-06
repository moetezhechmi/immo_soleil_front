import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, MessageSquare, Briefcase, CheckCircle, Upload, Image as ImageIcon, Trash2 } from 'lucide-react';

const ExpertFormModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        requestType: 'vendre_terrain',
        message: ''
    });
    const [images, setImages] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));
        setImages(prev => [...prev, ...newImages].slice(0, 5));
    };

    const removeImage = (index) => {
        setImages(prev => {
            const updated = [...prev];
            URL.revokeObjectURL(updated[index].preview);
            updated.splice(index, 1);
            return updated;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                requestType: 'vendre_terrain',
                message: ''
            });
            setImages([]);
        }, 3000);
    };

    const requestTypes = [
        { id: 'vendre_terrain', label: 'Vendre un terrain' },
        { id: 'vendre_villa', label: 'Vendre une villa' },
        { id: 'estimation', label: 'Estimation' },
        { id: 'recherche', label: 'Recherche' },
        { id: 'investissement', label: 'Investissement' },
        { id: 'gestion', label: 'Gestion' },
        { id: 'autre', label: 'Autre' }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-container-mobile" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem',
                }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0,0,0,0.85)',
                            backdropFilter: 'blur(15px)'
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        className="modal-content-mobile"
                        style={{
                            position: 'relative',
                            width: '95%',
                            maxWidth: '700px',
                            background: 'white',
                            borderRadius: '24px',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.5)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            padding: '1rem 1.5rem',
                            background: 'var(--secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <Briefcase size={18} color="var(--primary)" />
                                <h2 className="serif" style={{ color: 'white', fontSize: '1.2rem', margin: 0 }}>Expertise Immobilière</h2>
                            </div>
                            <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                                <X size={20} />
                            </button>
                        </div>

                        <div style={{ padding: '1.5rem' }}>
                            {isSubmitted ? (
                                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        width: '60px',
                                        height: '60px',
                                        background: 'rgba(197, 160, 89, 0.1)',
                                        borderRadius: '50%',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1rem'
                                    }}>
                                        <CheckCircle size={32} color="var(--primary)" />
                                    </div>
                                    <h3 style={{ fontSize: '2rem', color: 'var(--secondary)', marginBottom: '0.5rem' }} className="serif">Demande reçue</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.5' }}>
                                        Un expert vous contactera <br />
                                        sous un délai de 24h.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="mobile-stack">
                                        <div className="input-field">
                                            <label style={labelStyle}><User size={12} /> Nom</label>
                                            <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Nom complet" style={inputStyle} />
                                        </div>
                                        <div className="input-field">
                                            <label style={labelStyle}><Mail size={12} /> Email</label>
                                            <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="email@exemple.com" style={inputStyle} />
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="mobile-stack">
                                        <div className="input-field">
                                            <label style={labelStyle}><Phone size={12} /> Téléphone</label>
                                            <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+216 ..." style={inputStyle} />
                                        </div>
                                        <div className="input-field">
                                            <label style={labelStyle}><Briefcase size={12} /> Projet</label>
                                            <select name="requestType" value={formData.requestType} onChange={handleChange} style={inputStyle}>
                                                {requestTypes.map(type => (
                                                    <option key={type.id} value={type.id}>{type.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="input-field">
                                        <label style={labelStyle}><MessageSquare size={12} /> Message</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} rows="2" placeholder="Détails du projet..." style={{ ...inputStyle, resize: 'none' }}></textarea>
                                    </div>

                                    <div className="input-field">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <label style={{ ...labelStyle, marginBottom: 0 }}><ImageIcon size={12} /> Photos (Max 5)</label>
                                            <button type="button" onClick={() => fileInputRef.current?.click()} style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '0.4rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '700', cursor: 'pointer' }}>
                                                + Ajouter
                                            </button>
                                        </div>

                                        <input ref={fileInputRef} type="file" multiple accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />

                                        {images.length > 0 ? (
                                            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                                                {images.map((img, index) => (
                                                    <div key={index} style={{ position: 'relative', flexShrink: 0, width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden' }}>
                                                        <img src={img.preview} alt="prev" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        <button onClick={() => removeImage(index)} style={{ position: 'absolute', top: '2px', right: '2px', background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '16px', height: '16px', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>X</button>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div onClick={() => fileInputRef.current?.click()} style={{ border: '1px dashed #DDD', borderRadius: '12px', padding: '1rem', textAlign: 'center', cursor: 'pointer', background: '#FDFDFD' }}>
                                                <Upload size={20} style={{ color: 'var(--primary)', marginBottom: '0.3rem' }} />
                                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>Glissez vos photos ici</p>
                                            </div>
                                        )}
                                    </div>

                                    <button type="submit" className="btn-primary" style={{
                                        padding: '1rem',
                                        width: '100%',
                                        borderRadius: '12px',
                                        fontSize: '1rem',
                                        fontWeight: '800',
                                        marginTop: '0.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        Envoyer le Projet
                                    </button>
                                </form>
                            )}
                        </div>

                        <style>{`
                            @media (max-width: 600px) {
                                .mobile-stack { grid-template-columns: 1fr !important; gap: 0.8rem !important; }
                                .modal-container-mobile { padding: 1.2rem !important; }
                                .modal-content-mobile { max-height: 92vh !important; }
                            }
                        `}</style>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.65rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '0.4rem',
    letterSpacing: '1px'
};

const inputStyle = {
    width: '100%',
    padding: '0.8rem 1rem',
    background: '#F9F7F5',
    border: '1px solid #EEE',
    borderRadius: '10px',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--secondary)',
    outline: 'none',
};

export default ExpertFormModal;
