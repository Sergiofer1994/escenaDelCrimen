// src/components/carrusel/Carrusel.jsx
import React, { useRef } from "react";
import "./Carrusel.css";

const MovieCarrusel = ({ movies = [] }) => {
  const safeMovies = Array.isArray(movies) ? movies : [];
  const scrollRef = useRef(null);
  const scrollAmount = 300; // píxeles que se mueve cada flecha

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (safeMovies.length === 0) {
    return <div className="carousel-empty">No hay películas para mostrar</div>;
  }

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={scrollLeft}>
        ‹
      </button>

      <div className="carousel-grid" ref={scrollRef}>
        {safeMovies.map((movie) => (
          <div className="carousel-card" key={`${movie.rank}-${movie.title}`}>
            <div className="img-wrapper">
              <img
                alt={movie.title}
                src={movie.img}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/200x300/1a1a1a/00e5ff?text=Sin+Imagen";
                }}
              />
            </div>

            <div className="card-content">
              <h3>{movie.title}</h3>
              <p>
                <strong>Año:</strong> {movie.year}
              </p>
              <p>
                <strong>Director:</strong> {movie.director}
              </p>
              <p className="score">⭐ {movie.filmaffinity_score}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn next" onClick={scrollRight}>
        ›
      </button>
    </div>
  );
};

export default MovieCarrusel;
