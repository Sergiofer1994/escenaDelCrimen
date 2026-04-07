// Asigna el campo trailer a las 4 películas que tienen vídeo local
const API = 'http://localhost:8080/movies';

const trailerMap = {
    'Seven':                        '/media/trailers/Seven.mp4',
    'El silencio de los corderos':  '/media/trailers/ElSilencioDeLosCorderos.mp4',
    'Naranja mecánica':             '/media/trailers/naranjaMecanica.mp4',
    'El Resplandor':                '/media/trailers/elResplandor.mp4',
};

async function run() {
    const res = await fetch(API);
    const movies = await res.json();

    for (const [title, trailerPath] of Object.entries(trailerMap)) {
        const movie = movies.find(m => m.title === title);
        if (!movie) { console.log(`⚠️  No encontrada: ${title}`); continue; }

        const updated = { ...movie, trailer: trailerPath };
        const r = await fetch(`${API}/${movie.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updated),
        });
        if (r.ok) console.log(`✅ ${title}`);
        else console.log(`❌ ${title}: ${r.status}`);
    }
    console.log('Listo.');
}

run();