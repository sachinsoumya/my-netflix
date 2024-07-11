import React from "react";

import AddtoMovieListBtn from "./AddtoMovieListBtn";

const Details = ({
  original_title,
  overview,
  popularity,
  runtime,
  release_date,
  genres,
  adult,
  production_companies,
  id,
  poster_path,
}) => {
  // console.log(original_title);
  return (
    <div className="grid md:grid-cols-3 gap-4 p-4 grid-cols-1 font-medium">
      <div className="col-span-2">
        <div className="flex justify-between lg:w-2/4 md:w-3/4 w-full text-gray-500">
          <div>{release_date}</div>
          <div>
            {Math.floor(runtime / 60)}h{" "}
            {Math.floor(runtime - (Math.floor(runtime / 60) * 3600) / 60)}m
          </div>
          <div className="border border-white p-1">
            {adult ? "U/A 18+" : "U/A 16+"}
          </div>
          <AddtoMovieListBtn id={id} poster_path={poster_path} />
        </div>
        <div className="py-2">{overview}</div>
      </div>

      <div>
        <div>
          <span className="text-gray-500 ">Genres:</span>
          {genres.map((item, index) => (
            <span key={item.id} className=" text-base md:text-sm lg:text-base">
              {item.name},
            </span>
          ))}
        </div>

        <div>
          <span className="text-gray-500 ">Production company:</span>
          {production_companies.map((item, index) => (
            <span
              key={item.id}
              className="px-2 text-base md:text-sm lg:text-base"
            >
              {item.name},
            </span>
          ))}
        </div>

        <div>
          <span className="text-gray-500 ">Popularity:</span>
          <span className="px-2 text-base md:text-sm lg:text-base">
            {popularity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
