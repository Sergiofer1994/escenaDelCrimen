// src/pages/Home.jsx - SIN CAMBIOS NECESARIOS
import "../style/Home.css";
import React, { useState, useEffect } from "react";
import Carrusel from "../components/carrusel/Carrusel.jsx";

function Home() {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  const [mafiasYGangsters, setMafiasYGangsters] = useState([]);
  const [cineNegroClasico, setCineNegroClasico] = useState([]);
  const [thrillerPolicial, setThrillerPolicial] = useState([]);
  const [thrillerPsicologico, setThrillerPsicologico] = useState([]);
  const [misterioDetectives, setMisterioDetectives] = useState([]);
  const [terrorCriminal, setTerrorCriminal] = useState([]);
  const [thrillerModerno, setThrillerModerno] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    fetch('/server/films.json')
      .then(response => response.json())
      .then(data => {
        const movies = data.films;

        setFeaturedMovie(movies[28]); // destacada si quieres
        setAllMovies(movies);         // 👈 esto es lo importante
=======
    fetch("/server/films.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el JSON");
        }
        return response.json();
      })
      .then((data) => {
        const {
          mafiasYGangsters = [],
          cineNegroClasico = [],
          thrillerPolicial = [],
          thrillerPsicologico = [],
          misterioDetectives = [],
          terrorCriminal = [],
          thrillerModerno = [],
        } = data;

        setMafiasYGangsters(mafiasYGangsters);
        setCineNegroClasico(cineNegroClasico);
        setThrillerPolicial(thrillerPolicial);
        setThrillerPsicologico(thrillerPsicologico);
        setMisterioDetectives(misterioDetectives);
        setTerrorCriminal(terrorCriminal);
        setThrillerModerno(thrillerModerno);

        // Array general solo para escoger película destacada
        const allMovies = [
          ...mafiasYGangsters,
          ...cineNegroClasico,
          ...thrillerPolicial,
          ...thrillerPsicologico,
          ...misterioDetectives,
          ...terrorCriminal,
          ...thrillerModerno,
        ];

        const featured =
          allMovies.length > 28 ? allMovies[28] : allMovies[0] || null;

        setFeaturedMovie(featured);
>>>>>>> 775d9432ae6ab9e682dcd480ff55e4f05dda9c66
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando las películas:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
<<<<<<< HEAD
    <div className="home">
      {featuredMovie && (
        <section className="featured">
          <h2>{featuredMovie.title}</h2>
        </section>
=======
    <>
      {/* Sección de película destacada */}
      <div className="pageHome">
        <div className="featuredMovie">
          <div className="movieCard">
            <div className="moviePoster">
              <img
                src={featuredMovie.img}
                alt={featuredMovie.title}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x450/1a1a1a/00e5ff?text=Sin+Imagen";
                }}
              />
            </div>
            <div className="movieInfo">
              <span className="weeklyBadge">PELÍCULA DE LA SEMANA</span>
              <h2>{featuredMovie.title}</h2>
              <div className="movieMeta">
                <span className="year">📅 {featuredMovie.year}</span>
                <span className="director">🎬 {featuredMovie.director}</span>
                <span className="rating">
                  ⭐ {featuredMovie.filmaffinity_score}
                </span>
              </div>
              <p className="movieDescription">
                {featuredMovie.description}
              </p>
              {Array.isArray(featuredMovie.main_cast) && (
                <div className="castList">
                  <strong>Reparto principal:</strong>{" "}
                  {featuredMovie.main_cast.join(", ")}
                </div>
              )}
              <button
                className="watchButton"
                onClick={() => {
                  if (featuredMovie.url) {
                    window.open(featuredMovie.url, "_blank", "noopener,noreferrer");
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
      </div>

      {/* TODOS LOS CARRUSELES - SIN CAMBIOS */}
      {mafiasYGangsters.length > 0 && (
        <div className="carouselSection">
          <h2 className="carouselTitle">Mafias y Gánsters</h2>
          <Carrusel movies={mafiasYGangsters} />
        </div>
      )}

      {cineNegroClasico.length > 0 && (
        <div className="carouselSection">
          <h2 className="carouselTitle">Cine negro clásico</h2>
          <Carrusel movies={cineNegroClasico} />
        </div>
      )}

      {thrillerPolicial.length > 0 && (
        <div className="carouselSection">
          <h2 className="carouselTitle">Thriller policial</h2>
          <Carrusel movies={thrillerPolicial} />
        </div>
      )}

      {thrillerPsicologico.length > 0 && (
        <div className="carouselSection">
          <h2 className="carouselTitle">Thriller psicológico</h2>
          <Carrusel movies={thrillerPsicologico} />
        </div>
      )}

      {misterioDetectives.length > 0 && (
        <div className="carouselSection">
          <h2 className="carouselTitle">Misterio y detectives</h2>
          <Carrusel movies={misterioDetectives} />
        </div>
      )}

      {terrorCriminal.length > 0 && (
        <div className="carouselSection">
          <h2 className="carouselTitle">Terror criminal</h2>
          <Carrusel movies={terrorCriminal} />
        </div>
      )}

      {thrillerModerno.length > 0 && (
        <div className="carouselSection">
          <h2 className="carouselTitle">Thriller moderno</h2>
          <Carrusel movies={thrillerModerno} />
        </div>
>>>>>>> 775d9432ae6ab9e682dcd480ff55e4f05dda9c66
      )}

<<<<<<< HEAD
      {/* 👇 AQUÍ está la clave */}
      <Carrusel movies={allMovies} />
    </div>
  );
}
=======
export default Home;
>>>>>>> 775d9432ae6ab9e682dcd480ff55e4f05dda9c66
