import React, { useState, useEffect } from 'react';
import './AddMovie.css';
import Carrusel from '../../components/carrusel/Carrusel';

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: '', year: '', director: '', main_cast: '', filmaffinity_score: '', description: '', img: ''
  });

  const [moviesList, setMoviesList] = useState([]); // <--- Solo una vez aquí

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // 1. Enviamos los datos a TU sección personalizada en el JSON
    const response = await fetch('http://localhost:3001/misPeliculas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie)
    });

    if (response.ok) {
      alert("✅ ¡Película guardada con éxito!");

      // 2. Esta es la clave: actualiza la lista al instante para que "salga una más"
      setMoviesList(prevList => [...prevList, movie]); 
      
      // 3. Limpiamos los cuadritos del formulario para la siguiente captura
      setMovie({ 
        title: '', year: '', director: '', main_cast: '', 
        filmaffinity_score: '', description: '', img: '' 
      });
    }
  } catch (error) {
    console.error("Error al conectar con la API:", error);
    alert("❌ Hubo un problema con el servidor.");
  }
};

return (
    <div className="admin-layout">
      {/* COLUMNA IZQUIERDA: Formulario */}
      <div className="form-section">
        <div className="add-movie-container">
          <div className="movie-card">
            <h2>Añadir a Escena del Crimen</h2>
            <form onSubmit={handleSubmit}>
              <input name="title" placeholder="Título" onChange={handleChange} value={movie.title} />
              <input name="year" placeholder="Año" onChange={handleChange} value={movie.year} />
              <input name="director" placeholder="Director" onChange={handleChange} value={movie.director} />
              <input name="main_cast" placeholder="Reparto (Cast)" onChange={handleChange} value={movie.main_cast} />
              <input name="filmaffinity_score" placeholder="Nota FilmAffinity" onChange={handleChange} value={movie.filmaffinity_score} />
              <textarea name="description" placeholder="Descripción / Sinopsis" onChange={handleChange} value={movie.description} />
              <input name="img" placeholder="URL del Póster" onChange={handleChange} value={movie.img} />
              <button type="submit" className="save-button">Guardar Película</button>
            </form>
          </div>
        </div>
      </div>


      {/* COLUMNA DERECHA: Vista Previa Real */}
      <div className="preview-section">
        <h2 className="preview-title">Películas en Cartelera</h2>
        <div className="carousel-wrapper">
         <Carrusel movies={moviesList} />
      </div>
    </div>
    </div>
  );
};

export default AddMovie;