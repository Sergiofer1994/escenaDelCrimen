import React, { useState } from "react";
import "./Carrusel.css";
import MovieCard from '../MovieCard.jsx';

const MovieCarrusel = ({ movies }) => {
  const prev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1,
    );
  };

  const next = () => {
    setCurrentPage((nextPage) =>
      nextPage === totalPages - 1 ? 0 : nextPage + 1,
    );
  };

  const MOVIES_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(movies.length / MOVIES_PER_PAGE);

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
          <MovieCard key={movie.rank} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default MovieCarrusel;
