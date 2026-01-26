import '../style/Home.css';
import React, { useState, useEffect } from 'react';
import Carrusel from '../components/carrusel/Carrusel.jsx';

function Home() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/server/films.json')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar películas');
        return res.json();
      })
      .then((data) => {
        const movies = data.films || [];
        setFeaturedMovie(movies[28] || movies[0] || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setFeaturedMovie(null);
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
      <Carrusel />
    </div>
  );
}

export default Home;
