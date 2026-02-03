import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmsCards from "../components/FilmsCards/FilmsCards";
import "../styles/catalog.css";

const categories = [
    { value: "all", label: "Todos" },
    { value: "mafiasYGangsters", label: "Mafias y Gangsters" },
    { value: "cineNegroClasico", label: "Cine Negro Clásico" },
    { value: "thrillerPolicial", label: "Thriller Policial" },
    { value: "thrillerPsicologico", label: "Thriller Psicológico" },
    { value: "misterioDetectives", label: "Misterio y Detectives" },
    { value: "terrorCriminal", label: "Terror Criminal" },
    { value: "thrillerModerno", label: "Thriller Moderno" }
];

export default function CatalogPage() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        fetchFilms();
    }, [selectedCategory]);

    const fetchFilms = async () => {
        setLoading(true);

        try {
            if (selectedCategory === "all") {
                const requests = categories
                    .filter(cat => cat.value !== "all")
                    .map(cat =>
                        axios.get(`http://localhost:3000/${cat.value}`)
                    );

                const responses = await Promise.all(requests);
                const allFilms = responses.flatMap(r => r.data);
                setFilms(allFilms);
            } else {
                const res = await axios.get(
                    `http://localhost:3000/${selectedCategory}`
                );
                setFilms(res.data);
            }
        } catch (err) {
            console.error(err);
            setFilms([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="catalog-container">
            <h1>ARCHIVO DE CASOS</h1>

            <div className="filters">
                {categories.map(cat => (
                    <button
                        key={cat.value}
                        className={selectedCategory === cat.value ? "active" : ""}
                        onClick={() => setSelectedCategory(cat.value)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {loading ? (
                <p className="loading">Cargando casos...</p>
            ) : (
                <ul className="films-grid">
                    {films.map(film => (
                        <FilmsCards key={film.id} film={film} />
                    ))}
                </ul>
            )}
        </div>
    );
}
