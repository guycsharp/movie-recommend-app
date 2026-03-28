import { useEffect, useState } from "react";
import { fetchGenres } from "../../api/tmdb";

export default function StepGenres({ selectedGenres, setSelectedGenres, next }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres().then(data => setGenres(data.genres));
  }, []);

  const toggleGenre = (id) => {
    setSelectedGenres(prev =>
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h2>Select a few genres you like</h2>

      <div className="grid">
        {genres?.map(g => (
          <button
            key={g.id}
            className={selectedGenres.includes(g.id) ? "selected" : ""}
            onClick={() => toggleGenre(g.id)}
          >
            {g.name}
          </button>
        ))}
      </div>

      <button disabled={selectedGenres.length < 2} onClick={next}>
        Continue
      </button>
    </div>
  );
}
