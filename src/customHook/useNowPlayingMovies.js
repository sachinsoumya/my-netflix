import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const now_playingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    !now_playingMovies && getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      navigate("/error" , {state:error});
    }
  };
};
export default useNowPlayingMovies;
