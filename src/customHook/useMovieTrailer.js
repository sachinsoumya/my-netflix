import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";

import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";
import { addModalTrailerVideo } from "../Utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movie_trailer = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    !movie_trailer ? getMovieTrailer() : getModalMovieTrailer();
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

  const getModalMovieTrailer = async () => {
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
    dispatch(addModalTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
