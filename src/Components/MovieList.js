import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div>
      <div className="font-semibold text-xl py-3 px-2">{title}</div>
      <div className="flex">
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            2000:{
              slidesPerView: 7,
              spaceBetween: 50,

            }
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {movies?.map((movie, index) => (
            <SwiperSlide
              className="transition-all hover:scale-110"
              key={movie.id}
            >
              <MovieCard posterPath={movie.poster_path} movieId={movie.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
