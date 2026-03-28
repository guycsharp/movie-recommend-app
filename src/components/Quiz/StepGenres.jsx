import { useEffect, useState } from "react";
import { fetchGenres } from "../../api/tmdb";
import "../../css/Quiz.css";

export default function StepGenres({ selectedGenres, setSelectedGenres, next }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres().then(data => setGenres(data.genres));
  }, []);

  const toggleGenre = (id) => {
    setSelectedGenres(prev =>
      prev.includes(id)
        ? prev.filter(g => g !== id)
        : [...prev, id]
    );
  };

  return (
    <div>
      <h2>Select a few genres you like</h2>

      <div className="movie-grid">
        {genres?.map(g => (
          <div
            key={g.id}
            className={`movie-card ${selectedGenres.includes(g.id) ? "selected" : ""}`}
            onClick={() => toggleGenre(g.id)}
          >
            <p>{g.name}</p>
          </div>
        ))}
      </div>

      <button
        disabled={selectedGenres.length < 2}
        onClick={next}
        className="next-btn"
      >
        Continue
      </button>
    </div>
  );
}
