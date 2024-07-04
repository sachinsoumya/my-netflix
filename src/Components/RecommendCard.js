import React from "react";
import { IMG_CDN } from "../Utils/constant";
import AddtoMovieListBtn from "./AddtoMovieListBtn";
// import { Link } from "react-router-dom";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { API_OPTIONS } from "../Utils/constant";
import { addRecommendedMoviesTrailer } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RecommendCard = ({
  posterPath,
  overview,
  popularity,
  releaseDate,
  adult,
  title,
  id,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);

      const filteredData = json.results.filter(
        (item) => item.type === "Trailer"
      );

      const trailer =
        filteredData.length !== 0 ? filteredData[0] : json.results[0];

      console.log(trailer);
      dispatch(addRecommendedMoviesTrailer(trailer));
      navigate(`/watch?movieId=${id}`);
    } catch (error) {
      navigate("/error", { state: error });
    }
  };
  return (
    <div className="w-full h-[35rem] bg-zinc-800 rounded-lg overflow-hidden relative">
      <div className="h-1/4 group relative">
        <img
          src={IMG_CDN + posterPath}
          alt="recommend card"
          className="w-full h-full object-cover object-bottom rounded-lg"
        />
        {/* <Link to={`/watch?movieId=${id}`}> */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl   hidden  group-hover:block cursor-pointer"
          onClick={handleClick}
        >
          <PlayCircleIcon className="size-10 text-white  " />
        </div>
        {/* </Link> */}
      </div>

      <div className="absolute  top-1 right-4 text-gray-500 font-bold z-50">
        {popularity}
      </div>

      <div className="p-3">
        <div className="flex justify-between">
          <div className="font-semibold text-lg py-2">{title}</div>
          <div>
            <AddtoMovieListBtn id={id} poster_path={posterPath} />
          </div>
        </div>
        <div className="flex justify-between py-2">
          <div className="border border-white px-1">
            {adult ? "U/A 18+" : "U/A 16+"}
          </div>
          <div className="border border-white px-1">HD</div>
          <div>{releaseDate}</div>
        </div>

        {/* <MovieCard posterPath={posterPath} overview={overview} /> */}
        <div className=" w-full text-justify py-3">
          {overview.length > 505 ? overview.slice(0, 505) : overview}
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
