import React from "react";
import { IMG_CDN } from "../Utils/constant";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../Utils/movieSlice";
import { useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";

const MovieCard = ({ posterPath, movieId }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      // console.log(json);
      dispatch(addMovieDetails(json));
    } catch (e) {
      // console.log(e);
      navigate("/error", { state: e });
    }
  };

  return (
    posterPath && (
      <div className="w-52 px-2 relative group ">
        <div className="bg-transparent w-full h-full text-center absolute flex justify-center items-center group-hover:bg-black group-hover:opacity-30  ">
          <button
            className="border border-black border-transparent bg-transparent  text-transparent  text-center p-2 rounded-lg font-bold text-lg cursor-pointer group-hover:text-black group-hover:bg-white "
            onClick={handleClick}
          >
            {" "}
            More Info
          </button>
        </div>

        <img src={IMG_CDN + posterPath} alt="poster" className="rounded-lg " />
      </div>
    )
  );
};

export default MovieCard;
