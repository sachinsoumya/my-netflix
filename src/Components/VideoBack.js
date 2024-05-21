import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../customHook/useMovieTrailer";
const VideoBack = ({ movieId }) => {
  const trailerData = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerData) return;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        src={"https://www.youtube.com/embed/" + trailerData.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBack;
