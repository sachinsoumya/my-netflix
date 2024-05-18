import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";

import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieTrailer();
  }, []);

  //Fetch the trailer
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filteredData = json.results.filter((item) => item.type === "Trailer");

    const trailer =
      filteredData.length !== 0 ? filteredData[0] : json.results[0];

    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
