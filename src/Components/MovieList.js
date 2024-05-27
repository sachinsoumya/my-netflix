import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <div className="font-semibold text-xl py-3 px-2">{title}</div>
      <div className="flex">
        {/* <div className="flex"> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {movies?.map((movie, index) => (
            <SwiperSlide>
              <MovieCard posterPath={movie.poster_path} key={movie.id} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MovieList;
