import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHook/usePopularMovies";
import useTopRatedMovies from "../customHook/useTopRatedMovies";
import useUpComingMovies from "../customHook/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import MovieDetails from "./MovieDetails";
import { Outlet } from "react-router-dom";

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  const gpt = useSelector((store) => store.gpt.gptSearch);
  const movieDetails = useSelector((store) => store.movies.movieDetails);

  return (
    <div>
      {movieDetails && <MovieDetails />}
      <Header />
      {gpt ? <GptSearch /> : <Outlet />}
      {/* 
           MainContainer
             - VideoBackground
             - Title
           Secondary 
            -  MoviesList *n
               - Cards 
        
        */}
    </div>
  );
};

export default Browser;
