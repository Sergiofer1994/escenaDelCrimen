import { useState, useEffect } from "react";
import axios from "axios";
import "../style/AdminPanel.css";

const AdminPanel = () => {
    const [movies, setMovies] = useState([]);
    const [editingMovie, setEditingMovie] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        year: "",
        director: "",
        main_cast: "",
        filmaffinity_score: "",
        description: "",
        img: "",
        url: "",
        category: "mafiasYGangsters",
        rank: ""
    });

    // READ - Leer todas las películas
    const fetchMovies = () => {
        axios
            .get("http://localhost:3000/movies")
            .then((res) => setMovies(res.data))
            .catch((err) => console.error("Error cargando películas:", err));
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    // CREATE - Añadir nueva película
    const handleCreate = (e) => {
        e.preventDefault();

        const newMovie = {
            ...formData,
            year: parseInt(formData.year),
            filmaffinity_score: parseFloat(formData.filmaffinity_score),
            rank: parseInt(formData.rank),
            main_cast: formData.main_cast.split(",").map(actor => actor.trim())
        };

        axios
            .post("http://localhost:3000/movies", newMovie)
            .then(() => {
                alert("Película añadida exitosamente");
                fetchMovies();
                resetForm();
            })
            .catch((err) => console.error("Error añadiendo película:", err));
    };

    // UPDATE - Editar película existente
    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedMovie = {
            ...formData,
            year: parseInt(formData.year),
            filmaffinity_score: parseFloat(formData.filmaffinity_score),
            rank: parseInt(formData.rank),
            main_cast: typeof formData.main_cast === "string"
                ? formData.main_cast.split(",").map(actor => actor.trim())
                : formData.main_cast
        };

        axios
            .put(`http://localhost:3000/movies/${editingMovie.id}`, updatedMovie)
            .then(() => {
                alert("Película actualizada exitosamente");
                fetchMovies();
                resetForm();
            })
            .catch((err) => console.error("Error actualizando película:", err));
    };

    // DELETE - Eliminar película
    const handleDelete = (id, title) => {
        if (window.confirm(`¿Estás seguro de eliminar "${title}"?`)) {
            axios
                .delete(`http://localhost:3000/movies/${id}`)
                .then(() => {
                    alert("Película eliminada exitosamente");
                    fetchMovies();
                })
                .catch((err) => console.error("Error eliminando película:", err));
        }
    };

    // Funciones auxiliares
    const startEdit = (movie) => {
        setEditingMovie(movie);
        setFormData({
            ...movie,
            main_cast: Array.isArray(movie.main_cast)
                ? movie.main_cast.join(", ")
                : movie.main_cast
        });
        setShowForm(true);
    };

    const resetForm = () => {
        setFormData({
            title: "",
            year: "",
            director: "",
            main_cast: "",
            filmaffinity_score: "",
            description: "",
            img: "",
            url: "",
            category: "mafiasYGangsters",
            rank: ""
        });
        setEditingMovie(null);
        setShowForm(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="admin-panel">
            <h1>Panel de Administración - CRUD de Películas</h1>

            <button
                className="btn-new"
                onClick={() => {
                    resetForm();
                    setShowForm(true);
                }}
            >
                ➕ Nueva Película
            </button>

            {/* FORMULARIO CREATE/UPDATE */}
            {showForm && (
                <div className="form-container">
                    <h2>{editingMovie ? "Editar Película" : "Nueva Película"}</h2>
                    <form onSubmit={editingMovie ? handleUpdate : handleCreate}>
                        <div className="form-grid">
                            <input
                                type="text"
                                name="title"
                                placeholder="Título"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="number"
                                name="year"
                                placeholder="Año"
                                value={formData.year}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="director"
                                placeholder="Director"
                                value={formData.director}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="main_cast"
                                placeholder="Reparto (separado por comas)"
                                value={formData.main_cast}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="number"
                                step="0.1"
                                name="filmaffinity_score"
                                placeholder="Puntuación"
                                value={formData.filmaffinity_score}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="number"
                                name="rank"
                                placeholder="Ranking"
                                value={formData.rank}
                                onChange={handleChange}
                                required
                            />

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="mafiasYGangsters">Mafias y Gángsters</option>
                                <option value="cineNegroClasico">Cine Negro Clásico</option>
                                <option value="thrillerPolicial">Thriller Policial</option>
                                <option value="thrillerPsicologico">Thriller Psicológico</option>
                                <option value="misterioDetectives">Misterio y Detectives</option>
                                <option value="terrorCriminal">Terror Criminal</option>
                                <option value="thrillerModerno">Thriller Moderno</option>
                            </select>

                            <input
                                type="text"
                                name="img"
                                placeholder="Ruta de imagen"
                                value={formData.img}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="url"
                                name="url"
                                placeholder="URL del tráiler"
                                value={formData.url}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <textarea
                            name="description"
                            placeholder="Descripción"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            required
                        ></textarea>

                        <div className="form-buttons">
                            <button type="submit" className="btn-save">
                                {editingMovie ? "💾 Actualizar" : "➕ Crear"}
                            </button>
                            <button
                                type="button"
                                className="btn-cancel"
                                onClick={resetForm}
                            >
                                ❌ Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* LISTA DE PELÍCULAS */}
            <div className="movies-list">
                <h2>Todas las Películas ({movies.length})</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Año</th>
                            <th>Director</th>
                            <th>Categoría</th>
                            <th>Puntuación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.year}</td>
                                <td>{movie.director}</td>
                                <td>{movie.category}</td>
                                <td>⭐ {movie.filmaffinity_score}</td>
                                <td className="actions">
                                    <button
                                        className="btn-edit"
                                        onClick={() => startEdit(movie)}
                                    >
                                        ✏️ Editar
                                    </button>
                                    <button
                                        className="btn-delete"
                                        onClick={() => handleDelete(movie.id, movie.title)}
                                    >
                                        🗑️ Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPanel;
