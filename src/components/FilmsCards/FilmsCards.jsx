// FilmsCards.jsx
import React from 'react';

const FilmsCards = ({ film }) => {
    return (
        <li className="catalogo-card border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
            <img
                src={`/${film.img.replace("src/", "")}`}
                alt={film.title}
                className="catalogo-img w-full h-64 object-cover rounded"
            />

            <h2 className="catalogo-title-film font-semibold text-lg mt-3">
                {film.title}
            </h2>

            <p className="catalogo-meta text-sm text-gray-600">
                {film.director} · {film.year}
            </p>

            <p className="catalogo-desc text-sm mt-2">
                {film.description}
            </p>

            <p className="catalogo-score text-sm mt-2">
                ⭐ {film.filmaffinity_score}
            </p>

            <a
                href={film.url}
                target="_blank"
                rel="noreferrer"
                className="catalogo-link text-blue-600 text-sm mt-2 inline-block"
            >
                Ver tráiler ▶
            </a>
        </li>
    );
};

export default FilmsCards;
