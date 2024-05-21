import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMovies();
  }, []);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));
  };
};
export default usePopularMovies;