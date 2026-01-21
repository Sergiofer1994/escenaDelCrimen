import './App.css';
import MovieCarrusel from './components/carrusel/Carrusel.jsx';
import movies from './assets/films.json';

function App() {
  return (
    <>
      <MovieCarrusel movies={movies.movies} />
    </>
  );
}

export default App;