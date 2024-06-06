import React from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../Utils/movieSlice";

const VideoTitle = ({ title, overview, movieId }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    console.log(json);
    dispatch(addMovieDetails(json));
  };
  return (
    <div className=" w-full aspect-video px-7 absolute  text-white bg-gradient-to-r from-black flex ">
      <div className="lg:w-1/3 md:w-2/4  w-2/4 self-end md:self-center">
        <div className="font-bold text-sm">{title}</div>
        <div className="hidden md:inline-block md:text-lg text-xs font-normal pt-5 text-justify">
          {overview}
        </div>
        <div className="flex py-2">
          <button className="bg-white text-black border-black-300 p-2 lg:text-2xl md:text-xl text-xs font-medium text-center rounded-md w-2/3 hover:bg-opacity-80">
            {" "}
            ▶️ Play
          </button>
          <button
            className="bg-gray-300 text-white border-black-300 p-2 mx-2 lg:text-2xl md:text-xl  text-xs font-medium text-center rounded-md w-2/3 bg-opacity-20 hover:bg-opacity-25"
            onClick={handleClick}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
