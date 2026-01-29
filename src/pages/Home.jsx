import "../style/Home.css";
import React, { useState, useEffect } from "react";
import Carrusel from "../components/carrusel/Carrusel.jsx";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie.jsx";

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
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando las películas:", error);
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

  return (
    <>
      {/* Sección de película destacada - AHORA ES UN COMPONENTE */}
      <div className="pageHome">
        <FeaturedMovie movie={featuredMovie} />
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
      )}
    </>
  );
}

export default Home;
