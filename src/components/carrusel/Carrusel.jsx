// src/components/carrusel/Carrusel.jsx
import React, { useRef, useState, useEffect } from "react";
import "./Carrusel.css";

const MovieCarrusel = ({ movies = [] }) => {
  const safeMovies = Array.isArray(movies) ? movies : [];
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(864); // 4 cards desktop

  // Detecta el tamaño de pantalla y ajusta el scroll
  useEffect(() => {
    const updateScrollAmount = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        
        if (containerWidth >= 1200) {
          setScrollAmount(864);  // 4 cards desktop
        } else if (containerWidth >= 900) {
          setScrollAmount(720);  // 4 cards tablet grande
        } else if (containerWidth >= 768) {
          setScrollAmount(648);  // 4 cards tablet
        } else if (containerWidth >= 480) {
          setScrollAmount(432);  // 3 cards móvil grande
        } else {
          setScrollAmount(280);  // 2 cards móvil pequeño
        }
      }
    };

    updateScrollAmount();
    window.addEventListener('resize', updateScrollAmount);
    return () => window.removeEventListener('resize', updateScrollAmount);
  }, [safeMovies]);

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
    <div className="carousel-container" ref={containerRef}>
      <button className="carousel-btn prev" onClick={scrollLeft}>‹</button>

      <div className="carousel-grid" ref={scrollRef}>
        {safeMovies.map((movie) => (
          <div className="carousel-card" key={`${movie.rank}-${movie.title}`}>
            <div className="img-wrapper">
              <img
                alt={movie.title}
                src={movie.img}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/200x300/1a1a1a/00e5ff?text=Sin+Imagen";
                }}
              />
            </div>
            <div className="card-content">
              <h3>{movie.title}</h3>
              <p><strong>Año:</strong> {movie.year}</p>
              <p><strong>Director:</strong> {movie.director}</p>
              <p className="score">⭐ {movie.filmaffinity_score}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn next" onClick={scrollRight}>›</button>
    </div>
  );
};

export default MovieCarrusel;
