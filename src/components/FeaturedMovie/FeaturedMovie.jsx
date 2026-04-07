import React from "react";
import "./FeaturedMovie.css";

function FeaturedMovie({ movie }) {
    if (!movie) {
        return (
            <div className="featuredMovie">
                <div className="error">Cargando película...</div>
            </div>
        );
    }

    return (
        <div className="featuredMovie">
            <div className="movieCard">
                <div className="moviePoster">
                    <img
                        src={movie.img}
                        alt={movie.title}
                        onError={(e) => {
                            e.target.src =
                                "https://via.placeholder.com/300x450/1a1a1a/00e5ff?text=Sin+Imagen";
                        }}
                    />
                </div>

                <div className="movieInfo">
                    <span className="weeklyBadge">PELÍCULA DE LA SEMANA</span>

                    <h2>{movie.title}</h2>

                    <div className="movieMeta">
                        <span className="year">📅 {movie.year}</span>
                        <span className="director">🎬 {movie.director}</span>
                        <span className="rating">
                            ⭐ {movie.filmaffinity_score}
                        </span>
                    </div>

                    <p className="movieDescription">
                        {movie.description}
                    </p>

                    {Array.isArray(movie.main_cast) && (
                        <div className="castList">
                            <strong>Reparto principal:</strong>{" "}
                            {movie.main_cast.join(", ")}
                        </div>
                    )}

                    <button
                        className="watchButton"
                        onClick={() => {
                            if (movie.url) {
                                window.open(movie.url, "_blank", "noopener,noreferrer");
                            } else {
                                alert("Tráiler no disponible");
                            }
                        }}
                    >
                        Ver Tráiler
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeaturedMovie;
