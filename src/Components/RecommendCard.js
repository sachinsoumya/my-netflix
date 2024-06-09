import React from "react";
import { IMG_CDN } from "../Utils/constant";

const RecommendCard = ({
  posterPath,
  overview,
  popularity,
  releaseDate,
  adult,
  title,
}) => {
  return (
    <div className="w-full h-[35rem] bg-zinc-800 rounded-lg overflow-hidden relative">
      <img
        src={IMG_CDN + posterPath}
        alt="recommend card"
        className="w-full h-1/4 object-cover object-bottom rounded-lg"
      />

      <div className="absolute  top-1 right-4 text-gray-500 font-bold z-50">
        {popularity}
      </div>

      <div className="p-3">
        <div className="font-semibold text-lg py-2">{title}</div>
        <div className="flex justify-between py-2">
          <div className="border border-white px-1">
            {adult ? "U/A 18+" : "U/A 16+"}
          </div>
          <div className="border border-white px-1">HD</div>
          <div>{releaseDate}</div>
        </div>

        {/* <MovieCard posterPath={posterPath} overview={overview} /> */}
        <div className=" w-full text-justify py-3">
          { overview.length > 505 ? overview.slice(0, 505) : overview}
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
