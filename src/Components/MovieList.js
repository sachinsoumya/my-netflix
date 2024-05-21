import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <h2>{title}</h2>
      <div className=" flex overflow-x-scroll">
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
