import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../style/adminPanel.css";
import FilmsCards from "../components/FilmsCards/FilmsCards";

const categories = [
    { id: "mafiasYGangsters", label: "Mafias y Gángsters" },
    { id: "cineNegroClasico", label: "Cine Negro Clásico" },
    { id: "thrillerPolicial", label: "Thriller Policial" },
    { id: "thrillerPsicologico", label: "Thriller Psicológico" },
    { id: "misterioDetectives", label: "Misterio y Detectives" },
    { id: "terrorCriminal", label: "Terror Criminal" },
    { id: "thrillerModerno", label: "Thriller Moderno" }
];

const AdminPanel = () => {
    const [selectedCategory, setSelectedCategory] = useState("mafiasYGangsters");
    const [movies, setMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    const [editingMovie, setEditingMovie] = useState(null);
    const [formData, setFormData] = useState({
        title: "", year: "", director: "", main_cast: "", filmaffinity_score: "",
        description: "", img: "", url: "", category: "mafiasYGangsters", rank: ""
    });

    const loadAllMovies = useCallback(async () => {
        try {
            const requests = categories.map(cat => 
                axios.get(`http://localhost:8080/movies/category/${cat.id}`).catch(() => ({ data: [] }))
            );
            const responses = await Promise.all(requests);
            const allMoviesData = responses.flatMap(r => r.data || []);
            setAllMovies(allMoviesData);
        } catch (err) {
            console.error("Error cargando películas:", err);
        }
    }, []);

    useEffect(() => {
        loadAllMovies();
    }, [loadAllMovies]);

    useEffect(() => {
        setMovies(allMovies.filter(movie => movie.category === selectedCategory));
    }, [selectedCategory, allMovies]);

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const newMovie = {
                ...formData,
                id: Date.now().toString(),
                year: parseInt(formData.year),
                filmaffinity_score: parseFloat(formData.filmaffinity_score),
                rank: allMovies.length + 1,
                main_cast: formData.main_cast ? formData.main_cast.split(",").map(s => s.trim()) : []
            };

            await axios.post(`http://localhost:8080/movies`, newMovie);
            await loadAllMovies(); 
            alert("✅ ¡Película CREADA!");
            resetForm();
        } catch (err) {
            alert("❌ Error: " + err.message);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updatedMovie = {
                ...formData,
                year: parseInt(formData.year),
                filmaffinity_score: parseFloat(formData.filmaffinity_score),
                rank: parseInt(formData.rank) || 0,
                main_cast: formData.main_cast ? formData.main_cast.split(",").map(s => s.trim()) : []
            };

            await axios.put(`http://localhost:8080/movies/${editingMovie.id}`, updatedMovie);
            await loadAllMovies();
            alert("✅ ¡Película EDITADA!");
            resetForm();
        } catch (err) {
            alert("❌ Error: " + err.message);
        }
    };

    const handleDelete = async (id, title) => {
        if (confirm(`¿BORRAR "${title}"?`)) {
            try {
                await axios.delete(`http://localhost:8080/movies/${id}`);
                await loadAllMovies();
                alert("✅ ¡Película BORRADA!");
            } catch (err) {
                alert("❌ Error al borrar");
            }
        }
    };

    const resetForm = () => {
        setFormData({
            title: "", year: "", director: "", main_cast: "", filmaffinity_score: "",
            description: "", img: "", url: "", category: selectedCategory, rank: ""
        });
        setEditingMovie(null);
    };

    const startEdit = (movie) => {
        setEditingMovie(movie);
        setFormData({
            ...movie,
            main_cast: Array.isArray(movie.main_cast) ? movie.main_cast.join(", ") : ""
        });
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="admin-page-wrapper">
        <div className="admin-panel" style={{maxWidth: '1400px', margin: '0 auto', padding: '2rem'}}>
            <div style={{marginBottom: '2rem', padding: '1rem', background: '#333', color: 'white', borderRadius: '8px'}}>
                <h1>🎬 Admin - {categories.find(c => c.id === selectedCategory)?.label}</h1>
                <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                    {categories.map(cat => (
                        <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                            style={{ padding: '0.8rem', background: selectedCategory === cat.id ? '#007bff' : '#eee', borderRadius: '25px', cursor: 'pointer' }}>
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{marginBottom: '3rem', padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
                <h2>{editingMovie ? `✏️ Editando: ${editingMovie.title}` : "➕ Nueva Película"}</h2>
                <form onSubmit={editingMovie ? handleUpdate : handleCreate}>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
                        <input name="title" placeholder="Título" value={formData.title} onChange={handleChange} required />
                        <input name="year" type="number" placeholder="Año" value={formData.year} onChange={handleChange} required />
                        <input name="director" placeholder="Director" value={formData.director} onChange={handleChange} required />
                        <input name="filmaffinity_score" step="0.1" type="number" placeholder="Nota" value={formData.filmaffinity_score} onChange={handleChange} required />
                        <input name="img" placeholder="Ruta imagen" value={formData.img} onChange={handleChange} required />
                        <input name="url" placeholder="URL Trailer" value={formData.url} onChange={handleChange} required />
                    </div>
                    <textarea name="description" placeholder="Descripción" value={formData.description} onChange={handleChange} rows="3" required style={{width: '100%', marginTop: '1rem'}} />
                    <div style={{textAlign: 'right', marginTop: '1rem'}}>
                        <button type="button" onClick={resetForm} style={{marginRight: '1rem'}}>Cancelar</button>
                        <button type="submit" style={{background: '#28a745', color: 'white', padding: '1rem'}}>
                            {editingMovie ? "💾 ACTUALIZAR" : "➕ CREAR"}
                        </button>
                    </div>
                </form>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem'}}>
                {movies.map((movie) => (
                    <div key={movie.id} style={{position: 'relative'}}>
                        <FilmsCards film={movie} />
                        <div style={{position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '5px'}}>
                            <button onClick={() => startEdit(movie)}>✏️</button>
                            <button onClick={() => handleDelete(movie.id, movie.title)}>🗑️</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default AdminPanel;