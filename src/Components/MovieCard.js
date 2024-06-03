import React from "react";
import { IMG_CDN } from "../Utils/constant";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../Utils/movieSlice";

const MovieCard = ({ posterPath, movieId }) => {
  //poster path not present handle it  absolute w-full h-full bg-transparent rounded-lg px-3 hover:bg-black hover:opacity-70

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
    posterPath && (
      <div className="w-52 px-2 relative group">
        <div className="bg-transparent w-full h-full  text-center absolute flex justify-center items-center group-hover:bg-black group-hover:opacity-30  ">
          <button
            className="border border-black border-transparent bg-transparent  text-transparent  text-center p-2 rounded-lg font-bold text-lg cursor-pointer group-hover:text-black group-hover:bg-white "
            onClick={handleClick}
          >
            {" "}
            ▶️ Play{" "}
          </button>
        </div>

        <img src={IMG_CDN + posterPath} alt="poster" className="rounded-lg  " />
      </div>
    )
  );
};

export default MovieCard;
