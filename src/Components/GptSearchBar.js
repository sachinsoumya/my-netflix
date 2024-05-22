import React from "react";
import lang from "../Utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageKey = useSelector((store)=>store.config.lang);
  return (
    <div className="pt-36 ">
      <form className="text-center">
        <input
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceholder}
          className="border border-black p-2 w-2/4 rounded-lg"
        />{" "}
        <button className="rounded-lg p-2 w-1/4 border border-black bg-red-700 ">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
