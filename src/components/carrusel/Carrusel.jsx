import React, { useRef, useState, useEffect } from "react";
import "./Carrusel.css";

const Carrusel = () => {
  const [movies, setMovies] = useState([]);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(864); // 4 cards desktop

  // Cargar películas desde JSON al montar el componente
  useEffect(() => {
    fetch("/server/films.json")
      .then((response) => {
        if (!response.ok) throw new Error("Error al cargar películas");
        return response.json();
      })
      .then((data) => {
        setMovies(data.films || []);
      })
      .catch((err) => {
        console.error(err);
        setMovies([]);
      });
  }, []);

  // Ajustar scroll según tamaño de pantalla
  useEffect(() => {
    const updateScrollAmount = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;

      if (width >= 1200) setScrollAmount(864);
      else if (width >= 900) setScrollAmount(720);
      else if (width >= 768) setScrollAmount(648);
      else if (width >= 480) setScrollAmount(432);
      else setScrollAmount(280);
    };

    updateScrollAmount();
    window.addEventListener("resize", updateScrollAmount);
    return () => window.removeEventListener("resize", updateScrollAmount);
  }, [movies]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (movies.length === 0) return <div className="carousel-empty">No hay películas para mostrar</div>;

  return (
    <div className="carousel-container" ref={containerRef}>
      <button className="carousel-btn prev" onClick={scrollLeft}>
      </button>

      <div className="carousel-grid" ref={scrollRef}>
        {movies.map((movie) => (
          <div className="carousel-card" key={`${movie.rank}-${movie.title}`}>
            <div className="img-wrapper">
              <img
                src={movie.img}
                alt={movie.title}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/200x300/1a1a1a/00e5ff?text=Sin+Imagen";
                }}
              />
            </div>
            <div className="card-content">
              <h3>{movie.title}</h3>
              <p><strong>Año:</strong> {movie.year}</p>
              <p><strong>Director:</strong> {movie.director}</p>
              <p className="score">⭐ {movie.filmaffinity_score}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn next" onClick={scrollRight}>
      </button>
    </div>
  );
};

export default Carrusel;
