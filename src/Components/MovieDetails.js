import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../Utils/movieSlice";

import Trailer from "./Trailer";
import Details from "./Details";
import Recommend from "./Recommend";
import AboutMovie from "./AboutMovie";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addMovieDetails(null));
  };

  const movieDetails = useSelector((store) => store.movies.movieDetails);

  // const {
  //   original_title,
  //   overview,
  //   popularity,
  //   runtime,
  //   release_date,
  //   genres,
  //   adult,
  //   id,
  // } = movieDetails;

  return (
    <div className=" absolute w-full h-full z-50 flex justify-center items-center lg:top-2 md:top-24 top-12 text-white ">
      <div className="lg:h-11/12 border lg:w-3/4 border-black  fixed w-full h-full overflow-y-scroll   bg-zinc-900 font-sans overflow-x-hidden ">
        <div className="absolute right-9 top-3 z-50">
          <div onClick={handleClick} className="cursor-pointer text-white ">
            ✖️
          </div>
        </div>

        {movieDetails && <Trailer movieId={movieDetails.id} />}
        {movieDetails && <Details {...movieDetails} />}
        <Recommend movieId={movieDetails.id} />
        <AboutMovie {...movieDetails} />
      </div>
    </div>
  );
};

export default MovieDetails;
