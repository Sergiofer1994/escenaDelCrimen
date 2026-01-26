import '../style/Home.css';
import React, { useState, useEffect } from 'react';
import Carrusel from '../components/carrusel/Carrusel.jsx';

function Home() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/server/films.json')
      .then(response => response.json())
      .then(data => {
        const movies = data.films;

        setFeaturedMovie(movies[28]); // destacada si quieres
        setAllMovies(movies);         // 👈 esto es lo importante
        setLoading(false);
      })
      .catch(error => {
        console.error('Error cargando las películas:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="home">
      {featuredMovie && (
        <section className="featured">
          <h2>{featuredMovie.title}</h2>
        </section>
      )}

      {/* 👇 AQUÍ está la clave */}
      <Carrusel movies={allMovies} />
    </div>
  );
}