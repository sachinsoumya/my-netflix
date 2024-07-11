import React, { useRef } from "react";
import lang from "../Utils/languageConstant";
import openai from "../Utils/openai";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addGptMovieResult } from "../Utils/gptSlice";
import { useNavigate } from "react-router-dom";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const languageKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchInTmdb = async (movieName) => {
    try {
      //* we can make an api call to gpt api and get movie results.

      const movies = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movieName +
          "&include_adult=false&language=hindi",
        API_OPTIONS
      );
      const json = await movies.json();
      return json.results;
    } catch (err) {
      navigate("/error", { state: err });
    }
  };

  const handleGptSearch = async () => {
    try {
      // console.log(searchText.current.value);
      //* we can make an api call to gpt api and get movie results.

      const GPTQuery =
        "Act as a movie Recommendation system and suggest some movies for the query: " +
        searchText.current.value +
        " only give me names of 5 movies ,comma separated like the example result given ahead . Example Result : KFG , Gadar , Krish , Animal , Avengers";

      const GptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: GPTQuery }],
        model: "gpt-3.5-turbo",
      });

      // console.log(GptResults.choices[0].message.content);
      //*"Barfi!, Jab We Met, Dilwale Dulhania Le Jayenge, 2 States, Saathiya"

      const gptMovies = GptResults.choices[0].message?.content.split(",");
      // console.log(gptMovies);
      //["Barfi!", "Jab We Met", "Dilwale Dulhania Le Jayenge", "2 States", "Saathiya"]

      //* For each movie I will search in TMDB api
      const dataPromiseArray = gptMovies.map((movie, index) =>
        searchInTmdb(movie)
      );

      //[Promise , Promise , Promise ]
      const tmdbResults = await Promise.all(dataPromiseArray);
      // console.log(tmdbResults);
      dispatch(
        addGptMovieResult({
          moviesName: gptMovies,
          gptmovieResults: tmdbResults,
        })
      );
    } catch (err) {
      //console.log(err);
      navigate("/error", { state: err });
    }
  };

  return (
    <div className="pt-36 ">
      <form className="text-center" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceholder}
          className="border border-black p-2 md:w-2/4 w-3/5 rounded-lg"
        />{" "}
        <button
          className="rounded-lg p-2 w-1/4 border border-black bg-red-700 "
          onClick={handleGptSearch}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
