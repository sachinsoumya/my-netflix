import React, { useState } from "react";
import useMovieRecommend from "../customHook/useMovieRecommend";
import { useSelector } from "react-redux";
import RecommendCard from "./RecommendCard";
import lang from "../Utils/languageConstant";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Recommend = ({ movieId }) => {
  const [expand, setExpand] = useState(false);
  // console.log(movieId);
  useMovieRecommend(movieId);
  const recommendedMovies = useSelector(
    (store) => store.movies.recommendedMovies
  );

  const languageKey = useSelector((store) => store.config.lang);

  if (!recommendedMovies) return null;
  return (
    <div className="w-full h-6/12 px-10 py-3">
      <div className="text-white text-xl font-semibold font-sans">
        {lang[languageKey].moreLikeThis}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full h-full py-3 ">
        {recommendedMovies.length ? (
          expand ? (
            recommendedMovies.map((item, index) => (
              <RecommendCard
                posterPath={item.poster_path}
                overview={item.overview}
                adult={item.adult}
                releaseDate={item.release_date}
                popularity={item.popularity}
                title={item.title}
                id={item.id}
                key={item.id}
              />
            ))
          ) : (
            recommendedMovies
              .slice(0, 9)
              .map((item, index) => (
                <RecommendCard
                  posterPath={item.poster_path}
                  overview={item.overview}
                  adult={item.adult}
                  releaseDate={item.release_date}
                  popularity={item.popularity}
                  title={item.title}
                  id={item.id}
                  key={item.id}
                />
              ))
          )
        ) : (
          <div>No movies</div>
        )}
      </div>
      <div className="relative">
        <hr className="h-px my-2 bg-white border-0 "></hr>
        <div
          className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          {expand ? (
            <ChevronUpIcon className="size-6 text-white border border-white rounded-full hover:bg-slate-400" />
          ) : (
            <ChevronDownIcon className="size-6 text-white border border-white rounded-full hover:bg-slate-400" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Recommend;
