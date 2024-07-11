import React from "react";
import { useSelector } from "react-redux";
import VideoBack from "./VideoBack";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[3];
  const { original_title, overview, id } = mainMovie;
  // console.log(mainMovie);

  return (
    <div className="w-full">
      <VideoTitle title={original_title} overview={overview} movieId={id} />
      <VideoBack movieId={id} />
    </div>
  );
};

export default MainContainer;
