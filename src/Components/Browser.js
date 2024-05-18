import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
