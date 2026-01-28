import "../style/Home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
    const fetchAllData = async () => {
      try {
        const baseUrl = "http://localhost:3000";

        const [resMafias, resCine, resPolicial, resPsico, resMisterio, resTerror, resModerno] = await Promise.all([
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

        // Juntamos todas las películas
        const allMovies = [
          ...resMafias.data, 
          ...resCine.data, 
          ...resPolicial.data, 
          ...resPsico.data, 
          ...resMisterio.data, 
          ...resTerror.data, 
          ...resModerno.data
        ];

        // **********************************************************
        // AQUÍ CAMBIAS EL NÚMERO DE RANK PARA CAMBIAR LA PELÍCULA
        // Ejemplo: 28 es Casino, 11 es Seven, 15 es Naranja Mecánica
        // **********************************************************
        const rankDeseado = 15; 
        
        // Buscamos por la propiedad "rank" que es la que tienes en tu JSON
        const featured = allMovies.find(m => m.rank === rankDeseado) || allMovies[0];
        setFeaturedMovie(featured);

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
        {featuredMovie && <FeaturedMovie movie={featuredMovie} />}
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
            <h2 className="carouselTitle">Cine negro clásico</h2>
            <Carrusel movies={cineNegroClasico} />
          </section>
        )}

        {thrillerPolicial.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Thriller policial</h2>
            <Carrusel movies={thrillerPolicial} />
          </section>
        )}

        {thrillerPsicologico.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Thriller psicológico</h2>
            <Carrusel movies={thrillerPsicologico} />
          </section>
        )}

        {misterioDetectives.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Misterio y detectives</h2>
            <Carrusel movies={misterioDetectives} />
          </section>
        )}

        {terrorCriminal.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Terror criminal</h2>
            <Carrusel movies={terrorCriminal} />
          </section>
        )}

        {thrillerModerno.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Thriller moderno</h2>
            <Carrusel movies={thrillerModerno} />
          </section>
        )}
      </div>
    </>
  );
}

export default Home;