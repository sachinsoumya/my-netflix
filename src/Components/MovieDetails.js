import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../Utils/movieSlice";
import Trailer from "./Trailer";
import Details from "./Details";
import Recommend from "./Recommend";
import AboutMovie from "./AboutMovie";

import { XMarkIcon } from "@heroicons/react/24/outline";
import Shimmer from "./Shimmer";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addMovieDetails(null));
  };

  const movieDetails = useSelector((store) => store.movies.movieDetails);

  return (
    movieDetails && (
      <div className=" absolute w-full h-full z-50 flex justify-center items-center lg:top-2 md:top-24 top-12 text-white ">
        <div className="lg:h-11/12 border lg:w-3/4 border-black  fixed w-full h-full overflow-y-scroll   bg-zinc-900 font-sans overflow-x-hidden ">
          <div className="absolute right-9 top-3 z-50">
            <div onClick={handleClick} className="cursor-pointer text-white ">
              <XMarkIcon className="size-7 text-white border border-white bg-black rounded-full " />
            </div>
          </div>
          <Trailer movieId={movieDetails.id} />
          <Details {...movieDetails} />
          <Recommend movieId={movieDetails.id} />
          <AboutMovie {...movieDetails} />
          <Shimmer />
        </div>
      </div>
    )
  );
};

export default MovieDetails;
