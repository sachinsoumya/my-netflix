import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const up_comingMovies = useSelector((store) => store.movies.upComingMovies);

  useEffect(() => {
    !up_comingMovies && getUpComingMovies();
  }, []);
  const getUpComingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json);
      dispatch(addUpComingMovies(json.results));
    } catch (error) {
      navigate("/error", { state: error });
    }
  };
};
export default useUpComingMovies;
