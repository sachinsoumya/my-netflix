import React from "react";
import { useSelector } from "react-redux";

const FullTrailer = () => {
  const movieTrailerData = useSelector(
    (store) => store.movies.modalTrailerVideo
  );
  return (
    <div className="w-full  lg:h-auto lg:flex-none lg:items-start  h-screen flex items-center bg-black">
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

export default FullTrailer;
