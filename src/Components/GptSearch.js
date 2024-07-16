import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "../Utils/constant";

const GptSearch = () => {
  return (
    <div className="h-screen">
      <div className="absolute w-full h-auto -z-30 ">
        <img
          src={BACKGROUND_IMAGE}
          alt="Background_image"
          className="w-full h-full fixed object-cover "
        />
      </div>

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
