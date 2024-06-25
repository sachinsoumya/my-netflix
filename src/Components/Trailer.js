import React from "react";
import useMovieTrailer from "../customHook/useMovieTrailer";
import { useSelector } from "react-redux";

const Trailer = ({ movieId }) => {
  useMovieTrailer(movieId );

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
       <button className="border border-black bg-white text-black text-lg font-semibold absolute  top-2/3 left-6 rounded-md p-2 w-1/6">Play</button>
    </div>
  );
};

export default Trailer;
