import fs from 'fs';

const films = JSON.parse(fs.readFileSync('./server/films.json', 'utf-8'));

// Crear array plano para /movies
const allMovies = [];
Object.entries(films).forEach(([category, movies]) => {
    movies.forEach(movie => {
        allMovies.push({ ...movie, category });
    });
});

// Crear estructura dual
const db = {
    movies: allMovies,
    ...films  // Mantiene las categorías separadas
};

fs.writeFileSync('./server/db.json', JSON.stringify(db, null, 2));
console.log(`✅ Sincronizados ${allMovies.length} películas en ambos formatos`);