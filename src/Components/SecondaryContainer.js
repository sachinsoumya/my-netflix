import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  console.log(movies);
 

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="relative md:-mt-16 lg:-mt-52 bg-transparent  text-white ">
          
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
            <MovieList title={"UpComing"} movies={movies.upComingMovies} />
         
        </div>

        {/* MovieList - Popular 
        -MovieCard
       MovieList - Trending 
       MovieList - Now Playing
       MovieList - Horror
       */}
      </div>
    )
  );
};

export default SecondaryContainer;
