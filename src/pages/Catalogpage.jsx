// src/pages/CatalogPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilmsCards from '../components/FilmsCards/FilmsCards';
import '../style/CatalogPage.css';

function CatalogPage() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { value: 'all', label: 'Todos los Casos' },
        { value: 'mafiasYGangsters', label: 'Mafias y Gangsters' },
        { value: 'cineNegroClasico', label: 'Cine Negro Clásico' },
        { value: 'thrillerPolicial', label: 'Thriller Policial' },
        { value: 'thrillerPsicologico', label: 'Thriller Psicológico' },
        { value: 'misterioDetectives', label: 'Misterio y Detectives' },
        { value: 'terrorCriminal', label: 'Terror Criminal' },
        { value: 'thrillerModerno', label: 'Thriller Moderno' }
    ];

    useEffect(() => {
        fetchFilms();
    }, [selectedCategory]);

    const fetchFilms = async () => {
        setLoading(true);
        try {
            if (selectedCategory === 'all') {
                // Obtener películas de todas las categorías
                const categoryPromises = categories
                    .filter(cat => cat.value !== 'all')
                    .map(cat => axios.get(`http://localhost:3000/${cat.value}`));
                
                const responses = await Promise.all(categoryPromises);
                const allFilms = responses.flatMap(response => response.data);
                setFilms(allFilms);
            } else {
                // Obtener películas de una categoría específica
                const response = await axios.get(`http://localhost:3000/${selectedCategory}`);
                setFilms(response.data);
            }
        } catch (error) {
            console.error('Error al obtener películas:', error);
            setFilms([]);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="films-catalog-container">
            <div className="crime-tape crime-tape-top">
                <span>CRIME SCENE DO NOT CROSS</span>
                <span>CRIME SCENE DO NOT CROSS</span>
                <span>CRIME SCENE DO NOT CROSS</span>
            </div>

            <div className="films-catalog-content">
                <div className="catalog-header">
                    <div className="detective-icon">
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="35" r="15" fill="currentColor"/>
                            <path d="M20 90 L30 55 L70 55 L80 90 Z" fill="currentColor"/>
                            <rect x="30" y="50" width="40" height="8" fill="currentColor"/>
                            <path d="M35 30 L15 20 L20 35 Z" fill="currentColor"/>
                            <path d="M65 30 L85 20 L80 35 Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h1 className="catalog-title">ARCHIVO DE CASOS</h1>
                    <p className="catalog-subtitle">Expedientes Cinematográficos del Crimen</p>
                </div>

                <div className="category-filter">
                    {categories.map(category => (
                        <button
                            key={category.value}
                            className={`filter-button ${selectedCategory === category.value ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(category.value)}
                        >
                            📁 {category.label}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="loading-state">
                        <div className="loading-spinner-large">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p className="loading-text">Revisando evidencias...</p>
                    </div>
                ) : films.length > 0 ? (
                    <ul className="films-grid">
                        {films.map((film) => (
                            <FilmsCards key={film.id} film={film} />
                        ))}
                    </ul>
                ) : (
                    <div className="empty-state">
                        <div className="empty-icon">
                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 30 L80 30 L70 80 L30 80 Z" stroke="currentColor" strokeWidth="3" fill="none"/>
                                <line x1="35" y1="45" x2="65" y2="45" stroke="currentColor" strokeWidth="2"/>
                                <line x1="35" y1="55" x2="65" y2="55" stroke="currentColor" strokeWidth="2"/>
                                <line x1="35" y1="65" x2="55" y2="65" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                        </div>
                        <h2 className="empty-title">NO HAY CASOS REGISTRADOS</h2>
                        <p className="empty-message">El archivo está vacío. Añade nuevas películas para comenzar.</p>
                    </div>
                )}
            </div>

            <div className="crime-tape crime-tape-bottom">
                <span>CRIME SCENE DO NOT CROSS</span>
                <span>CRIME SCENE DO NOT CROSS</span>
                <span>CRIME SCENE DO NOT CROSS</span>
            </div>
        </div>
    );
}

export default CatalogPage;