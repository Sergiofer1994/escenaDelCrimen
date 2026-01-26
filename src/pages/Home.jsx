import '../style/Home.css';
import React, { useState, useEffect } from 'react';
import Carrusel from '../components/carrusel/Carrusel.jsx';

function Home() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar todas las películas desde tu JSON
    fetch('/server/films.json')
      .then(response => response.json())
      .then(data => {
        const movies = data.films;

        // Selecciona una película destacada (la 28 como tenías)
        const featured = movies[28];
        setFeaturedMovie(featured);

        // Guarda todas las películas para el carrusel
        setAllMovies(movies);

        setLoading(false);
      })
      .catch(error => {
        console.error('Error cargando las películas:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="pageHome">
        <div className="loading">Cargando película de la semana...</div>
      </div>
    );
  }

  if (!featuredMovie) {
    return (
      <div className="pageHome">
        <div className="error">No se pudo cargar la película</div>
      </div>
    );
  }

  return (
    <div className="pageHome">
      {/* Sección de película destacada */}
      <div className="featuredMovie">
        <div className="movieCard">
          <div className="moviePoster">
            <img
              src={featuredMovie.img}
              alt={featuredMovie.title}
              onError={(e) => {
                e.target.src =
                  'https://via.placeholder.com/300x450/1a1a1a/00e5ff?text=Sin+Imagen';
              }}
            />
          </div>
          <div className="movieInfo">
            <span className="weeklyBadge">PELÍCULA DE LA SEMANA</span>
            <h2>{featuredMovie.title}</h2>
            <div className="movieMeta">
              <span className="year">📅 {featuredMovie.year}</span>
              <span className="director">🎬 {featuredMovie.director}</span>
              <span className="rating">⭐ {featuredMovie.filmaffinity_score}</span>
            </div>
            <p className="movieDescription">{featuredMovie.description}</p>
            <div className="castList">
              <strong>Reparto principal:</strong> {featuredMovie.main_cast.join(', ')}
            </div>
            <button className="watchButton">Ver Ahora</button>
          </div>
        </div>
      </div>

      {/* Sección del carrusel */}
      {allMovies.length > 0 && (
        <div className="carouselSection">
          <h2 className="carouselTitle">Disfrúta más Películas</h2>
          <Carrusel movies={allMovies} />
        </div>
      )}
    </div>
  );
}

export default Home;
