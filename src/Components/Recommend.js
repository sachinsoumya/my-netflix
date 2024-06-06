import React from "react";
import useMovieRecommend from "../customHook/useMovieRecommend";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import RecommendCard from "./RecommendCard";

const Recommend = ({ movieId }) => {
  console.log(movieId);
  useMovieRecommend(movieId);
  const recommendedMovies = useSelector(
    (store) => store.movies.recommendedMovies
  );

  if (!recommendedMovies) return null;
  return (
    <div className="w-full h-6/12 px-10 py-3">
      <div className="text-white text-lg font-semibold">More Like This</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full h-full ">
        {/* <MovieCard
        posterPath={recommendedMovies[0].poster_path}
        movieId={recommendedMovies[0].id} 
      
      /> */}

        {recommendedMovies.map((item, index) => (
          <RecommendCard
            posterPath={item.poster_path}
            overview={item.overview}
            adult={item.adult}
            releaseDate={item.release_date}
            popularity={item.popularity}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommend;
