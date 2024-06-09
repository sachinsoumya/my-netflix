import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const popular_movies = useSelector((store) => store.movies.popularMovies);
  useEffect(() => {
    !popular_movies && getPopularMovies();
  }, []);
  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      dispatch(addPopularMovies(json.results));
    } catch (e) {
      navigate("/error", { state: e });
    }
  };
};
export default usePopularMovies;
