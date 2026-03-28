import { useState } from "react";
import StepGenres from "./StepGenres";
import StepMovies from "./StepMovies";
import StepResults from "./StepResults";

export default function QuizContainer() {
  const [step, setStep] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);

  return (
    <div className="quiz-container">
      {step === 1 && (
        <StepGenres
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          next={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <StepMovies
          selectedMovies={selectedMovies}
          setSelectedMovies={setSelectedMovies}
          next={() => setStep(3)}
        />
      )}

      {step === 3 && <StepResults selectedMovies={selectedMovies} />}
    </div>
  );
}
