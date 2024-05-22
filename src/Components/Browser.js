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

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  const gpt = useSelector((store) => store.gpt.gptSearch);

  return (
    <div>
      <Header />
      {gpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
