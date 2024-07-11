import React from "react";

import { useSelector } from "react-redux";

import useModalMovieTrailer from "../customHook/useModalMovieTrailer";

const Trailer = ({ movieId }) => {
  useModalMovieTrailer(movieId);

  const movieTrailerData = useSelector(
    (store) => store.movies.modalTrailerVideo
  );

  if (!movieTrailerData)
    return (
      <div className="w-full h-1/4 flex justify-center items-center">
        <p className="text-center text-lg ">No trailer available</p>
      </div>
    );
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
      <div className="absolute w-full bg-gradient-to-t from-zinc-900 h-full top-0"></div>
    </div>
  );
};

export default Trailer;
