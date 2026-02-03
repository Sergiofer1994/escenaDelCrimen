import { useEffect, useState } from "react";
import "../style/Catalog.css";

const Catalog = () => {
    const [films, setFilms] = useState([]);
    const [category, setCategory] = useState("mafiasYGangsters");

    useEffect(() => {
        fetch(`http://localhost:3000/${category}`)
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(err => console.error("Error cargando catálogo:", err));
    }, [category]);

    
    const handleReservar = (film) => {
        
        alert(`🎬 ¡RESERVADA! "${film.title}" para tu videoclub\n\nDirector: ${film.director}\nAño: ${film.year}\n\n✅ Te contactaremos para coordinar la entrega`);
        
        
        fetch('http://localhost:3000/reservas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(film)
        });
    };

    return (
        <div className="pageCatalog">
            <div className="catalogContainer">
                <h1 className="catalogTitle">
                    Nuestro Catálogo
                </h1>

                <div className="catalogSelector">
                    <button
                        className={`categoryChip ${category === 'mafiasYGangsters' ? 'active' : ''}`}
                        onClick={() => setCategory('mafiasYGangsters')}
                    >
                        Mafias y Gánsters
                    </button>
                    <button
                        className={`categoryChip ${category === 'cineNegroClasico' ? 'active' : ''}`}
                        onClick={() => setCategory('cineNegroClasico')}
                    >
                        Cine Negro Clásico
                    </button>
                    <button
                        className={`categoryChip ${category === 'thrillerPolicial' ? 'active' : ''}`}
                        onClick={() => setCategory('thrillerPolicial')}
                    >
                        Thriller Policial
                    </button>
                    <button
                        className={`categoryChip ${category === 'thrillerPsicologico' ? 'active' : ''}`}
                        onClick={() => setCategory('thrillerPsicologico')}
                    >
                        Thriller Psicológico
                    </button>
                    <button
                        className={`categoryChip ${category === 'misterioDetectives' ? 'active' : ''}`}
                        onClick={() => setCategory('misterioDetectives')}
                    >
                        Misterio y Detectives
                    </button>
                    <button
                        className={`categoryChip ${category === 'terrorCriminal' ? 'active' : ''}`}
                        onClick={() => setCategory('terrorCriminal')}
                    >
                        Terror Criminal
                    </button>
                    <button
                        className={`categoryChip ${category === 'thrillerModerno' ? 'active' : ''}`}
                        onClick={() => setCategory('thrillerModerno')}
                    >
                        Thriller Moderno
                    </button>
                </div>

                <div className="catalogGrid">
                    {films.map(film => (
                        <div key={film.rank} className="catalogCard">
                            <img
                                src={`/${film.img}`}
                                alt={film.title}
                                className="catalogImg"
                                onError={(e) => {
                                    e.target.src =
                                        "https://via.placeholder.com/300x450/1a1a1a/00e5ff?text=Sin+Imagen";
                                }}
                            />

                            <h2 className="catalogTitleFilm">
                                {film.title}
                            </h2>

                            <p className="catalogMeta">
                                {film.director} · {film.year}
                            </p>

                            <p className="catalogDesc">
                                {film.description}
                            </p>

                            <p className="catalogScore">
                                ⭐ {film.filmaffinity_score}
                            </p>

                            <div className="catalogActions">
                                <a
                                    href={film.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="catalogLink"
                                >
                                    Ver tráiler ▶
                                </a>

                                
                                <button
                                    className="catalogReservarBtn"
                                    onClick={() => handleReservar(film)}
                                >
                                    Reservar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;