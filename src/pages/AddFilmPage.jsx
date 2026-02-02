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
                `http://localhost:3000/${film.category}`,
                {
                    ...film,
                    year: Number(film.year),
                    filmaffinity_score: Number(film.filmaffinity_score)
                }
            );
            alert("Película añadida");
            setFilm({
                title: "",
                year: "",
                director: "",
                filmaffinity_score: "",
                description: "",
                img: "",
                url: "",
                category: "mafiasYGangsters"
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="add-film">
            <h1>Añadir película</h1>

            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Título" value={film.title} onChange={handleChange} />
                <input name="year" type="number" placeholder="Año" value={film.year} onChange={handleChange} />
                <input name="director" placeholder="Director" value={film.director} onChange={handleChange} />
                <input name="filmaffinity_score" placeholder="Nota" value={film.filmaffinity_score} onChange={handleChange} />
                <input name="img" placeholder="Ruta imagen" value={film.img} onChange={handleChange} />
                <input name="url" placeholder="URL tráiler" value={film.url} onChange={handleChange} />
                <textarea name="description" placeholder="Descripción" value={film.description} onChange={handleChange} />

                <select name="category" value={film.category} onChange={handleChange}>
                    <option value="mafiasYGangsters">Mafias</option>
                    <option value="cineNegroClasico">Cine Negro</option>
                    <option value="thrillerPolicial">Thriller Policial</option>
                </select>

                <button>Guardar</button>
            </form>
        </div>
    );
}
