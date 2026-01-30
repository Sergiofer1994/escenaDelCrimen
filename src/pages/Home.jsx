// Home.jsx
import "../style/Home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Carrusel from "../components/carrusel/Carrusel.jsx";
import HeroCarousel from "../components/HeroCarrousel/HeroCarrousel.jsx";

function Home() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [featuredMovies, setFeaturedMovies] = useState([]); 
  const [mafiasYGangsters, setMafiasYGangsters] = useState([]);
  const [cineNegroClasico, setCineNegroClasico] = useState([]);
  const [thrillerPolicial, setThrillerPolicial] = useState([]);
  const [thrillerPsicologico, setThrillerPsicologico] = useState([]);
  const [misterioDetectives, setMisterioDetectives] = useState([]);
  const [terrorCriminal, setTerrorCriminal] = useState([]);
  const [thrillerModerno, setThrillerModerno] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const baseUrl = "http://localhost:3000";

        const [
          resMafias,
          resCine,
          resPolicial,
          resPsico,
          resMisterio,
          resTerror,
          resModerno,
        ] = await Promise.all([
          axios.get(`${baseUrl}/mafiasYGangsters`),
          axios.get(`${baseUrl}/cineNegroClasico`),
          axios.get(`${baseUrl}/thrillerPolicial`),
          axios.get(`${baseUrl}/thrillerPsicologico`),
          axios.get(`${baseUrl}/misterioDetectives`),
          axios.get(`${baseUrl}/terrorCriminal`),
          axios.get(`${baseUrl}/thrillerModerno`),
        ]);

        setMafiasYGangsters(resMafias.data);
        setCineNegroClasico(resCine.data);
        setThrillerPolicial(resPolicial.data);
        setThrillerPsicologico(resPsico.data);
        setMisterioDetectives(resMisterio.data);
        setTerrorCriminal(resTerror.data);
        setThrillerModerno(resModerno.data);

        const allMovies = [
          ...resMafias.data,
          ...resCine.data,
          ...resPolicial.data,
          ...resPsico.data,
          ...resMisterio.data,
          ...resTerror.data,
          ...resModerno.data,
        ];

        const rankDeseado = 15;
        const featured =
          allMovies.find((m) => m.rank === rankDeseado) || allMovies[0];
        setFeaturedMovie(featured);

        // ✅ ORDEN ESPECÍFICO: Seven primero, Naranja mecánica segundo
        const ordenPrioritario = ["Seven", "Naranja mecánica"];
        
        // Buscar las películas prioritarias
        const peliculasPrioritarias = ordenPrioritario
          .map(titulo => allMovies.find(movie => movie.title === titulo))
          .filter(movie => movie && movie.trailer && movie.trailer.length > 0);
        
        // Buscar las demás películas con video (excluyendo las prioritarias)
        const otrasPeliculas = allMovies.filter(movie => 
          movie.trailer && 
          movie.trailer.length > 0 && 
          !ordenPrioritario.includes(movie.title)
        );
        
        // Combinar: primero las prioritarias, luego las demás
        const peliculasConVideo = [...peliculasPrioritarias, ...otrasPeliculas];

        console.log("Películas en orden:", peliculasConVideo.map(m => m.title));

        setFeaturedMovies(peliculasConVideo);

      } catch (error) {
        console.error("Error cargando las películas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) return <div className="loading">Cargando...</div>;

  return (
    <>
      <div className="pageHome">
        {featuredMovies.length > 0 && (
          <HeroCarousel featuredMovies={featuredMovies} />
        )}
      </div>

      <div className="content-sections">
        {mafiasYGangsters.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Mafias y Gánsters</h2>
            <Carrusel movies={mafiasYGangsters} />
          </section>
        )}

        {cineNegroClasico.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Cine Negro Clásico</h2>
            <Carrusel movies={cineNegroClasico} />
          </section>
        )}

        {thrillerPolicial.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Thriller Policial</h2>
            <Carrusel movies={thrillerPolicial} />
          </section>
        )}

        {thrillerPsicologico.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Thriller Psicológico</h2>
            <Carrusel movies={thrillerPsicologico} />
          </section>
        )}

        {misterioDetectives.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Misterio y Detectives</h2>
            <Carrusel movies={misterioDetectives} />
          </section>
        )}

        {terrorCriminal.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Terror Criminal</h2>
            <Carrusel movies={terrorCriminal} />
          </section>
        )}

        {thrillerModerno.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Thriller Moderno</h2>
            <Carrusel movies={thrillerModerno} />
          </section>
        )}
      </div>
    </>
  );
}

export default Home;
