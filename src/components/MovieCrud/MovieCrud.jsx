import { getAllMovies, createMovie } from "../../services/MovieServes";
import React, { useState, useEffect } from 'react';
import './MovieCRUD.css';

const MovieCRUD = ({ category = 'misPeliculas' }) => {
  const [movie, setMovie] = useState({
    title: '', 
    year: '', 
    director: '', 
    main_cast: '', 
    filmaffinity_score: '', 
    description: '', 
    img: '',
    url: ''
  });

  const [moviesList, setMoviesList] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // 📖 READ - Cargar películas al iniciar
  useEffect(() => {
    fetchMovies();
  }, [category]);

  const fetchMovies = async () => {
    try {
      const data = await getAllMovies(); 
      setMoviesList(data);
    } catch (error) {
      console.error("Error al cargar películas:", error);
      alert("❌ No se pudieron cargar las películas");
    }
  };
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  // ✅ CREATE - Crear nueva película
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createMovie(movie);

      if (response.ok) {
        alert("✅ ¡Película guardada con éxito!");
        fetchMovies(); // Recargar lista
        resetForm();
      }
    } catch (error) {
      console.error("Error al crear película:", error);
      alert("❌ Hubo un problema al guardar la película");
    }
  };

  // ✏️ UPDATE - Actualizar película existente
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/${category}/${editingMovie.rank || editingMovie.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
      });

      if (response.ok) {
        alert("✅ Película actualizada con éxito!");
        fetchMovies();
        resetForm();
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("❌ Error al actualizar la película");
    }
  };

  // 🗑️ DELETE - Eliminar película
  const handleDelete = async (movieId) => {
    if (!window.confirm("¿Seguro que quieres eliminar esta película?")) return;

    try {
      const response = await fetch(`http://localhost:3001/${category}/${movieId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        alert("✅ Película eliminada");
        fetchMovies();
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("❌ Error al eliminar la película");
    }
  };

  // Preparar formulario para editar
  const handleEditClick = (movieToEdit) => {
    setMovie({
      title: movieToEdit.title,
      year: movieToEdit.year,
      director: movieToEdit.director,
      main_cast: Array.isArray(movieToEdit.main_cast) 
        ? movieToEdit.main_cast.join(', ') 
        : movieToEdit.main_cast,
      filmaffinity_score: movieToEdit.filmaffinity_score,
      description: movieToEdit.description,
      img: movieToEdit.img,
      url: movieToEdit.url || ''
    });
    setEditingMovie(movieToEdit);
    setIsEditing(true);
    
    // Scroll al formulario
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Limpiar formulario
  const resetForm = () => {
    setMovie({
      title: '', 
      year: '', 
      director: '', 
      main_cast: '', 
      filmaffinity_score: '', 
      description: '', 
      img: '',
      url: ''
    });
    setEditingMovie(null);
    setIsEditing(false);
  };

  // Filtrar películas por búsqueda
  const filteredMovies = moviesList.filter(m => 
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.director.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="crud-container">
      {/* FORMULARIO CRUD */}
      <div className="form-section">
        <div className="movie-card">
          <h2>
            {isEditing ? '✏️ Editar Película' : '➕ Añadir Nueva Película'}
          </h2>
          
          <form onSubmit={isEditing ? handleUpdate : handleCreate}>
            <input 
              name="title" 
              placeholder="Título *" 
              onChange={handleChange} 
              value={movie.title}
              required
            />
            
            <input 
              name="year" 
              placeholder="Año *" 
              type="number"
              onChange={handleChange} 
              value={movie.year}
              required
            />
            
            <input 
              name="director" 
              placeholder="Director *" 
              onChange={handleChange} 
              value={movie.director}
              required
            />
            
            <input 
              name="main_cast" 
              placeholder="Reparto (separado por comas)" 
              onChange={handleChange} 
              value={movie.main_cast}
            />
            
            <input 
              name="filmaffinity_score" 
              placeholder="Nota FilmAffinity (ej: 8.5)" 
              type="number"
              step="0.1"
              min="0"
              max="10"
              onChange={handleChange} 
              value={movie.filmaffinity_score}
            />
            
            <textarea 
              name="description" 
              placeholder="Descripción / Sinopsis" 
              onChange={handleChange} 
              value={movie.description}
              className="form-textarea"
            />
            
            <input 
              name="img" 
              placeholder="URL del Póster *" 
              onChange={handleChange} 
              value={movie.img}
              required
            />
            
            <input 
              name="url" 
              placeholder="URL del Trailer (YouTube)" 
              onChange={handleChange} 
              value={movie.url}
            />

            <div className="form-buttons">
              <button type="submit" className="save-button">
                {isEditing ? '💾 Actualizar' : '➕ Guardar'}
              </button>
              
              {isEditing && (
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={resetForm}
                >
                  ❌ Cancelar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* SECCIÓN DE PELÍCULAS */}
      <div className="movies-section">
        <div className="movies-header">
          <h2>
            🎬 Películas en {category === 'misPeliculas' ? 'Mi Colección' : 'Cartelera'}
            <span className="movie-count">({filteredMovies.length})</span>
          </h2>

          {/* Buscador */}
          <input 
            type="text"
            placeholder="🔍 Buscar película..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Grid de Cards */}
        <div className="movies-grid">
          {filteredMovies.length === 0 ? (
            <p className="no-movies">No hay películas para mostrar</p>
          ) : (
            filteredMovies.map((m, index) => (
              <div key={m.rank || m.id || index} className="movie-card-item">
                <div className="movie-poster">
                  <img src={m.img} alt={m.title} />
                  <div className="movie-actions-overlay">
                    <button 
                      className="edit-btn"
                      onClick={() => handleEditClick(m)}
                      title="Editar película"
                    >
                      ✏️ Editar
                    </button>
                    <button 
                      className="delete-btn"
                      onClick={() => handleDelete(m.rank || m.id)}
                      title="Eliminar película"
                    >
                      🗑️ Eliminar
                    </button>
                  </div>
                </div>
                
                <div className="movie-info">
                  <h3 className="movie-title">{m.title}</h3>
                  <div className="movie-meta">
                    <span className="movie-year">📅 {m.year}</span>
                    <span className="movie-score">⭐ {m.filmaffinity_score}</span>
                  </div>
                  <p className="movie-director">🎬 {m.director}</p>
                  {m.description && (
                    <p className="movie-description">
                      {m.description.length > 120 
                        ? `${m.description.substring(0, 120)}...` 
                        : m.description}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCRUD;