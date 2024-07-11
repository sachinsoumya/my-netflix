import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const top_ratedMovies = useSelector((store) => store.movies.topRatedMovies);
  useEffect(() => {
    !top_ratedMovies && getTopRatedMovies();
  }, []);
  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json);
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      navigate("/error", { state: error });
    }
  };
};
export default useTopRatedMovies;
