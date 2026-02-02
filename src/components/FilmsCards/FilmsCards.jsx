// src/components/FilmsCards/FilmsCards.jsx
import React from 'react';
import './FilmsCards.css';

const FilmsCards = ({ film }) => {
    return (
        <li className="catalogo-card">
            <img
                src={`/${film.img.replace("src/", "")}`}
                alt={film.title}
                className="catalogo-img"
            />

            <div className="catalogo-card-content">
                <h2 className="catalogo-title-film">
                    {film.title}
                </h2>

                <p className="catalogo-meta">
                    {film.director} · {film.year}
                </p>

                <p className="catalogo-desc">
                    {film.description}
                </p>

                <p className="catalogo-score">
                    ⭐ {film.filmaffinity_score}
                </p>

                <a
                    href={film.url}
                    target="_blank"
                    rel="noreferrer"
                    className="catalogo-link"
                >
                    Ver tráiler ▶
                </a>
            </div>
        </li>
    );
};

export default FilmsCards;