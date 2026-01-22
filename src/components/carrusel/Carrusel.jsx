import React, { useState } from "react";
import "./Carrusel.css";

const MovieCarrusel = ({ movies }) => {
  const MOVIES_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(movies.length / MOVIES_PER_PAGE);

  const prev = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const next = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  const startIndex = currentPage * MOVIES_PER_PAGE;
  const currentMovies = movies.slice(startIndex, startIndex + MOVIES_PER_PAGE);

  return (
    <div className="carousel-container">
      <div className="carousel-controls">
        <button className="carousel-btn prev" onClick={prev}>
          ◀
        </button>
        <button className="carousel-btn next" onClick={next}>
          ▶
        </button>
      </div>
      
      <div className="carousel-grid">
        {currentMovies.map((movie) => (
          <div className="carousel-card" key={movie.rank}>
            <h2>{movie.title}</h2>
            <img alt={movie.title} src={movie.img} className="movie-img" />
            <p><strong>Año:</strong> {movie.year}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Filmaffinity:</strong> {movie.filmaffinity_score}</p>
          </div>
        ))}
      </div>
      
      <div className="carousel-controls">
        <button className="carousel-btn prev" onClick={prev}>
          ◀
        </button>
        <button className="carousel-btn next" onClick={next}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default MovieCarrusel;