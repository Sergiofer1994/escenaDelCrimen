// src/services/MovieServices.js
const API_BASE = 'http://localhost:3001';

export const createMovie = async (movieData) => {
    const response = await fetch(`${API_BASE}/${movieData.category}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieData)
    });
    if (!response.ok) throw new Error('Error creando película');
    return response.json();
};

export const updateMovie = async (id, movieData, category) => {
    const response = await fetch(`${API_BASE}/${category}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieData)
    });
    if (!response.ok) throw new Error('Error actualizando película');
    return response.json();
};

export const deleteMovie = async (id, category) => {
    const response = await fetch(`${API_BASE}/${category}/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('Error borrando película');
    return response.json();
};

export const fetchAllMovies = async () => {
    const categories = ['mafiasYGangsters', 'cineNegroClasico', 'thrillerPolicial', 'thrillerPsicologico', 'misterioDetectives', 'terrorCriminal', 'thrillerModerno'];
    const allMovies = [];

    for (const category of categories) {
        try {
            const response = await fetch(`${API_BASE}/${category}`);
            if (response.ok) {
                const movies = await response.json();
                movies.forEach(movie => allMovies.push({ ...movie, category }));
            }
        } catch (error) {
            console.warn(`Categoría ${category} no disponible`);
        }
    }
    return allMovies;
};
