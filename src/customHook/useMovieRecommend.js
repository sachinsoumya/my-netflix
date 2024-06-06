import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addRecommendedMovies } from "../Utils/movieSlice";

const useMovieRecommend = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getRecommendedMovies();
  }, []);

  const getRecommendedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/recommendations?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addRecommendedMovies(json.results));
  };
};

export default useMovieRecommend;
