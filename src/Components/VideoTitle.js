import React, { useRef } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../Utils/movieSlice";
import { useNavigate } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/solid";

const VideoTitle = ({ title, overview, movieId }) => {
  const ref = useRef(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const movieDetails = useSelector((store) => store.movies.movieDetails);

  const handlePlay = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      console.log(json);

      ref.current = !ref.current;
      dispatch(addMovieDetails(json));
    } catch (err) {
      navigate("/error", { state: err });
    }
  };
  const handleMoreInfo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      console.log(json);

      dispatch(addMovieDetails(json));
    } catch (err) {
      navigate("/error", { state: err });
    }
  };

  if (ref.current && movieDetails && movieDetails.original_title === title) {
    navigate("/watch");
    dispatch(addMovieDetails(null));
  }
  return (
    <div className=" w-full aspect-video px-7 absolute  text-white bg-gradient-to-r from-black flex ">
      <div className="lg:w-1/3 md:w-2/4  w-3/4 self-end md:self-center">
        <div className="font-bold  lg:text-xl md:text-lg text-sm">{title}</div>
        <div className="hidden md:inline-block  md:text-lg text-xs font-normal pt-5 text-justify">
          {overview}
        </div>
        <div className="flex pt-3">
          <button
            className="bg-white text-black border-black-300 py-2 lg:text-2xl md:text-xl text-xs font-medium text-center rounded-md w-2/3 hover:bg-opacity-80"
            onClick={handlePlay}
          >
            {" "}
            <span className="text-white">▶️</span> Play
          </button>
          <button
            className="bg-gray-300 text-white border-black-300 py-2 mx-2 lg:text-2xl md:text-xl  font-medium   text-center  rounded-md w-2/3 bg-opacity-20 hover:bg-opacity-25"
            onClick={handleMoreInfo}
          >
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
