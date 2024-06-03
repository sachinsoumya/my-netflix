import React from "react";
import useMovieTrailer from "../customHook/useMovieTrailer";
import { useSelector } from "react-redux";

const Trailer = ({ movieId }) => {
  useMovieTrailer(movieId);

  const movieTrailerData = useSelector(
    (store) => store.movies.modalTrailerVideo
  );

  if (!movieTrailerData) return;
  return (
    <div className="w-full">
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
    </div>
  );
};

export default Trailer;
