import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../Utils/languageConstant";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const languageKey = useSelector((store) => store.config.lang);

  // console.log(movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-gradient-to-b from-black bg-[#141414] ">
        <div className="relative md:-mt-16 lg:-mt-52 bg-transparent  text-white ">
          <MovieList
            title={lang[languageKey].nowPlaying}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={lang[languageKey].popular}
            movies={movies.popularMovies}
          />
          <MovieList
            title={lang[languageKey].topRated}
            movies={movies.topRatedMovies}
          />
          <MovieList
            title={lang[languageKey].upComing}
            movies={movies.upComingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
