import React from "react";

const Details = ({
  original_title,
  overview,
  popularity,
  runtime,
  release_date,
  genres,
  adult,
  production_companies,
}) => {
  console.log(original_title);
  return (
    <div className="grid md:grid-cols-3 gap-4 p-4 grid-cols-1 font-medium">
      <div className="col-span-2">
        <div className="flex justify-between md:w-2/4 w-full text-gray-500">
          <div>{release_date}</div>
          <div>
            {Math.floor(runtime / 60)}h{" "}
            {Math.floor(runtime - (Math.floor(runtime / 60) * 3600) / 60)}m
          </div>
          <div className="border border-white px-1">
            {adult ? "U/A 18+" : "U/A 16+"}
          </div>
          {/* <div>{ original_title}</div> */}
        </div>
        <div className="py-2">{overview}</div>
      </div>

      <div>
        <div>
          <span className="text-gray-500 ">Genres:</span>
          {genres.map((item, index) => (
            <span key={item.id} className="px-2">
              {item.name},
            </span>
          ))}
        </div>

        <div>
          <span className="text-gray-500 ">Production company:</span>
          {production_companies.map((item, index) => (
            <span key={item.id} className="px-2">
              {item.name},
            </span>
          ))}
        </div>

        <div>
          <span className="text-gray-500 ">Popularity:</span>
          <span className="px-2">{popularity}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
