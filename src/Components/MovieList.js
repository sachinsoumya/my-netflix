import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <h2>{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie, index) => (
            <MovieCard posterPath={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
