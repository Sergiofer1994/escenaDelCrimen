import React from 'react';
import './Carrusel.css';

const MovieCarrusel = ({ movies = [] }) => {
  // Si no hay pelis, mostramos un mensaje amigable
  if (movies.length === 0) {
    return <div className="carousel-empty">¡Aún no has capturado películas!</div>;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-grid">
        {movies.map((movie, index) => (
          <div className="carousel-card" key={index}>
            <div className="img-wrapper">
              {/* Esta es la LLAMADA DIRECTA a la web */}
              <img 
                src={movie.img} 
                alt={movie.title} 
                // Si el link falla, ponemos una imagen de error por defecto
                onError={(e) => { e.target.src = "https://via.placeholder.com/200x300?text=Error+de+Carga"; }}
              />
            </div>
            <div className="card-content">
              <h3>{movie.title}</h3>
              <p><strong>Director:</strong> {movie.director}</p>
              <p><strong>Año:</strong> {movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCarrusel;