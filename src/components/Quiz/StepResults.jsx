import { useEffect, useState } from "react";
import { fetchRecommendations } from "../../api/tmdb";

export default function StepResults({ selectedMovies }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const mainMovie = selectedMovies[0]; // simplest approach
    fetchRecommendations(mainMovie).then(data => setResults(data.results));
  }, [selectedMovies]);

  return (
    <div>
      <h2>Recommended for you</h2>

      <div className="movie-grid">
        {results?.map(m => (
          <div key={m.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w200${m.poster_path}`} alt={m.title} />
            <p>{m.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
