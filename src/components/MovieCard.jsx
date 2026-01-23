import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card-container">
      <div className="poster-container">
        {/* Usamos movie.img porque así está en el JSON de tu compañero */}
        <img src={movie.img} alt={movie.title} className="movie-poster" />
        {/* Aquí puedes añadir el corazón de favoritos de tu Figma más adelante */}
      </div>
      
      <div className="movie-data">
        <h3>{movie.title}</h3>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Puntuación:</strong> {movie.filmaffinity_score}</p>
      </div>
    </div>
  );
};

export default MovieCard;