import { API_OPTIONS } from "../Utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addModalTrailerVideo } from "../Utils/movieSlice";

const useModalMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getModalMovieTrailer();
  }, []);

  const getModalMovieTrailer = async () => {
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
      dispatch(addModalTrailerVideo(trailer));
    } catch (error) {
      navigate("/error", { state: error });
    }
  };
};

export default useModalMovieTrailer;
