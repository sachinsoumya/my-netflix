import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import useRecommendedMovieTrailer from "../customHook/useRecommendedMovieTrailer";
import { addRecommendedMoviesTrailer } from "../Utils/movieSlice";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const FullTrailer = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    !user && navigate("/");
    window.onpopstate = () => {
      navigate("/browse");
      dispatch(addRecommendedMoviesTrailer(null));
    };
  }, []);

  const movieTrailerData = useSelector(
    (store) => store.movies.modalTrailerVideo
  );

  const recommendedMovieTrailerData = useSelector(
    (store) => store.movies.recommendedTrailerVideo
  );

  const handleClick = () => {
    navigate("/browse");
    recommendedMovieTrailerData && dispatch(addRecommendedMoviesTrailer(null));
  };

  if (!recommendedMovieTrailerData && !movieTrailerData)
    return (
      <div className="relative">
        <div className="flex justify-center items-center bg-black text-white h-screen">
          No Trailer Available
        </div>
        <ArrowLeftIcon
          className=" absolute size-10 text-white top-12 left-4  cursor-pointer"
          onClick={handleClick}
        />
      </div>
    );

  return recommendedMovieTrailerData ? (
    <div className="w-full  lg:h-auto lg:flex-none lg:items-start  h-screen flex items-center bg-black relative">
      <iframe
        className="w-full aspect-video mx-auto object-cover"
        src={
          "https://www.youtube.com/embed/" +
          recommendedMovieTrailerData.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <ArrowLeftIcon
        className=" absolute size-10 text-white top-12 left-4  cursor-pointer"
        onClick={handleClick}
      />
    </div>
  ) : (
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
      <ArrowLeftIcon
        className=" absolute size-10 text-white top-12 left-4  cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default FullTrailer;
