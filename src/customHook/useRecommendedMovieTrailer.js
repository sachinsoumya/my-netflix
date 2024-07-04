import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_OPTIONS } from "../Utils/constant";
import { addRecommendedMoviesTrailer } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";

const useRecommendedMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    !user && navigate("/");
    getTrailer();
  }, []);

  const getTrailer = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);

      const filteredData = json.results.filter(
        (item) => item.type === "Trailer"
      );

      const trailer =
        filteredData.length !== 0 ? filteredData[0] : json.results[0];

      console.log(trailer);
      dispatch(addRecommendedMoviesTrailer(trailer));
    } catch (error) {
      navigate("/error", { state: error });
    }
  };
};
export default useRecommendedMovieTrailer;
