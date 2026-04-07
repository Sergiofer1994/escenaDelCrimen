import { useState } from "react";
import axios from "axios";
import "../style/AddFilm.css"

export default function AddFilmPage() {
    const [film, setFilm] = useState({
        title: "",
        year: "",
        director: "",
        filmaffinity_score: "",
        description: "",
        img: "",
        url: "",
        category: "mafiasYGangsters"
    });

    const handleChange = e =>
        setFilm({ ...film, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await axios.post(
                `http://localhost:8080/movies`,
                {
                    ...film,
                    year: Number(film.year),
                    filmaffinity_score: Number(film.filmaffinity_score),
                    
                    id: Date.now().toString(),
                    rank: Math.floor(Date.now() / 1000), 
                    main_cast: []
                }
            );
            alert("🎉 Película añadida correctamente");
            setFilm({
                title: "", year: "", director: "", filmaffinity_score: "",
                description: "", img: "", url: "", category: "mafiasYGangsters"
            });
        } catch (err) {
            console.error(err);
            alert(`❌ Error al añadir película: ${err.message}`);
        }
    };

    return (
        <div className="add-film">
            <h1>➕ Añadir Nueva Película</h1>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Título" value={film.title} onChange={handleChange} required />
                <input name="year" type="number" placeholder="Año" value={film.year} onChange={handleChange} required />
                <input name="director" placeholder="Director" value={film.director} onChange={handleChange} required />
                <input name="filmaffinity_score" type="number" step="0.1" placeholder="Nota" value={film.filmaffinity_score} onChange={handleChange} required />
                <input name="img" placeholder="Ej: src/images/peli.jpg o URL externa" value={film.img} onChange={handleChange} required />
                <input name="url" placeholder="URL tráiler" value={film.url} onChange={handleChange} required />
                <textarea name="description" placeholder="Descripción" value={film.description} onChange={handleChange} required />
                
                <select name="category" value={film.category} onChange={handleChange}>
                    <option value="mafiasYGangsters">Mafias y Gángsters</option>
                    <option value="cineNegroClasico">Cine Negro Clásico</option>
                    <option value="thrillerPolicial">Thriller Policial</option>
                    <option value="thrillerPsicologico">Thriller Psicológico</option>
                    <option value="misterioDetectives">Misterio y Detectives</option>
                    <option value="terrorCriminal">Terror Criminal</option>
                    <option value="thrillerModerno">Thriller Moderno</option>
                </select>

                <button type="submit">💾 Guardar Película</button>
            </form>
        </div>
    );
}