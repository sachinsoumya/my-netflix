import React from "react";
import { IMG_CDN } from "../Utils/constant";

const MovieCard = ({ posterPath }) => {
  //poster path not present handle it  absolute w-full h-full bg-transparent rounded-lg px-3 hover:bg-black hover:opacity-70

  return (
    posterPath && (
      <div className="w-52 px-2 relative group">
        <div className="bg-transparent w-full h-full  text-center absolute group-hover:bg-black group-hover:opacity-40">
        <button className="border border-black border-transparent bg-transparent  text-transparent text-center group-hover:text-black group-hover:bg-white"> play  </button>
        </div>
       
       
      

        <img src={IMG_CDN + posterPath} alt="poster" className="rounded-lg  " />
      </div>
    )
  );
};

export default MovieCard;
