import '../style/Home.css';
import React from 'react';

function Home() {
  return (
    <div className="pageHome">
      <div className="featuredMovie">
        <div className="movieCard">
          <div className="moviePoster">
            <img 
              src="https://image.tmdb.org/t/p/w500/example.jpg" 
              alt="Película de la semana"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x450/1a1a1a/00e5ff?text=Pel%C3%ADcula+de+la+Semana';
              }}
            />
          </div>
          <div className="movieInfo">
            <span className="weeklyBadge">PELÍCULA DE LA SEMANA</span>
            <h2>Zodiac</h2>
            <p className="movieDescription">
              Un thriller basado en hechos reales que sigue la obsesiva búsqueda 
              del asesino del Zodiaco en San Francisco durante los años 70.
            </p>
            <button className="watchButton">Ver Ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;