import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../api/tmdb";
import "../../css/Quiz.css";


export default function StepMovies({ selectedMovies, setSelectedMovies, next }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(data => setMovies(data.results));
  }, []);

  const toggleMovie = (id) => {
    setSelectedMovies(prev =>
      prev.includes(id)
        ? prev.filter(m => m !== id)
        : [...prev, id]
    );
  };

  return (
    <div>
      <h2>Pick a few movies you enjoyed</h2>

      <div className="movie-grid">
        {movies?.map(m => (
          <div
            key={m.id}
            className={`movie-card ${selectedMovies.includes(m.id) ? "selected" : ""}`}
            onClick={() => toggleMovie(m.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}
              alt={m.title}
            />
            <p>{m.title}</p>
          </div>
        ))}
      </div>

      <button
        disabled={selectedMovies.length < 3}
        onClick={next}
        className="next-btn"
      >
        Get Recommendations
      </button>
    </div>
  );
}
