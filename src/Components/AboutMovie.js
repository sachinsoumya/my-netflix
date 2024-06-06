import React from "react";
import { IMG_CDN } from "../Utils/constant";

const AboutMovie = ({
  popularity,
  runtime,
  release_date,
  genres,
  adult,
  production_companies,
  poster_path,
  budget,
  original_language,
  title: originalTitle,
  tagline,
  status,
}) => {
  return (
    <div className="px-10 py-2">
      <div className="font-medium text-lg">Trailers and more</div>

      <div className="lg:w-1/6 w-2/6 py-2 relative group">
        <img
          src={IMG_CDN + poster_path}
          alt="moviePoster"
          className="w-full object-cover rounded-lg"
        />
        <div className="absolute top-32 left-20 text-2xl hidden group-hover:block cursor-pointer">▶️</div>
      </div>

      <div className="py-3 font-bold">Trailer:{originalTitle}</div>

      <div className="py-2">
        <div className="font-medium text-xl">About {originalTitle}</div>

        <div className="py-3">
          <div>
            <div>
              <span className="text-gray-500">Production companies :</span>
              <span>
                {" "}
                {production_companies.map((item, index) => item.name + " , ")}
              </span>
            </div>{" "}
            <div>
              <span className="text-gray-500">Genres :</span>{" "}
              <span>{genres.map((item, index) => item.name + ",")}</span>
            </div>
          </div>
          <div>
            <span className="text-gray-500">Popularity :</span>{" "}
            <span className="text-white">{popularity}</span>
          </div>
          <div>
            <span className="text-gray-500">Release Date : </span>
            <span>{release_date}</span>
          </div>{" "}
          <div>
            <span className="text-gray-500">Runtime : </span>
            <span>
              {Math.floor(runtime / 60)}h{" "}
              {Math.floor(runtime - (Math.floor(runtime / 60) * 3600) / 60)}m
            </span>
          </div>
          <div>
            <span className="text-gray-500">Budget :</span>{" "}
            <span>{budget}</span>
          </div>
          <div>
            <span className="text-gray-500">Tagline : </span>
            <span>{tagline}</span>
          </div>
          <div>
            <span className="text-gray-500">Status : </span>
            <span>{status}</span>
          </div>
          <div>
            <span className="text-gray-500">Adult : </span>
            {adult ? (
              <span>
                <span className="border border-white px-1">U/A 18+</span>{" "}
              </span>
            ) : (
              <span>
                <span className="border border-white px-1">U/A 16+</span>{" "}
                Unrestricted Public Exhibition - but with a word of caution that
                Parental discretion required for children below 16 years
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMovie;