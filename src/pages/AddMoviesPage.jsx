
import React from 'react';
import MovieCrud from '../components/MovieCrud/MovieCrud.jsx';

const PageAddMovie = () => {
  return (
    <div className="page-add-movie">
      <header className="page-header">
        <h1>🎬 Gestión de Películas - Escena del Crimen</h1>
        <p>Administra tu colección de thrillers y cine negro</p>
      </header>
      
      <MovieCrud category="misPeliculas" />
    </div>
  );
};

export default PageAddMovie;