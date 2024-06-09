import React from "react";
import { useSelector } from "react-redux";
// import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const { gptMovies, gptMoviesList } = useSelector((store) => store.gpt);

  const flatGptMovieList = gptMoviesList && gptMoviesList.flat();

  console.log(flatGptMovieList);

  if (!gptMovies) return null;

  return (
    flatGptMovieList && (
      <div className="text-blue font-bold text-lg bg-black bg-opacity-55 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center  py-4 mt-2">
        {flatGptMovieList.map((movie, index) => (
          <MovieCard
            posterPath={movie.poster_path}
            key={index}
            movieId={movie.id}
          />
        ))}
      </div>
    )
  );
};

export default GptMovieSuggestions;
