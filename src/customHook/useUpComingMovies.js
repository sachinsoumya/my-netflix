import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpComingMovies();
  }, []);
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addUpComingMovies(json.results));
  };
};
export default useUpComingMovies;