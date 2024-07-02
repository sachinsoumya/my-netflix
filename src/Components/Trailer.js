import React from "react";

import { useSelector } from "react-redux";

import useModalMovieTrailer from "../customHook/useModalMovieTrailer";

const Trailer = ({ movieId }) => {
  useModalMovieTrailer(movieId);
  // useMovieTrailer(movieId);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   getModalMovieTrailer();
  // }, []);

  // const getModalMovieTrailer = async () => {
  //   try {
  //     const data = await fetch(
  //       "https://api.themoviedb.org/3/movie/" +
  //         movieId +
  //         "/videos?language=en-US",
  //       API_OPTIONS
  //     );
  //     const json = await data.json();
  //     console.log(json);

  //     const filteredData = json.results.filter(
  //       (item) => item.type === "Trailer"
  //     );

  //     const trailer =
  //       filteredData.length !== 0 ? filteredData[0] : json.results[0];

  //     console.log(trailer);
  //     dispatch(addModalTrailerVideo(trailer));
  //   } catch (error) {
  //     navigate("/error", { state: error });
  //   }
  // };

  const movieTrailerData = useSelector(
    (store) => store.movies.modalTrailerVideo
  );

  if (!movieTrailerData) return;
  return (
    <div className="w-full relative">
      <iframe
        className="w-full aspect-video mx-auto object-cover"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailerData.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <button className="border border-black bg-white text-black text-lg font-semibold absolute  top-2/3 left-6 rounded-md p-2 w-1/6">
        Play
      </button>
    </div>
  );
};

export default Trailer;
