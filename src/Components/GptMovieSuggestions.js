import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovies, gptMoviesList } = useSelector((store) => store.gpt);

  if (!gptMovies) return null;

  return (
    <div className="text-blue font-bold text-lg bg-black bg-opacity-55">
      {gptMoviesList.map((movie) => (
        <MovieList title={movie[0].title} movies={movie} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
