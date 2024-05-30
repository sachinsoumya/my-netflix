import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "../Utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-full h-full -z-30">
        <img
          src={BACKGROUND_IMAGE}
          alt="Background_image"
          className="w-full h-full object-cover fixed"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
