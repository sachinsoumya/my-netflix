import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-36 ">
      <form className="text-center">
        <input
          type="text"
          placeholder="what you want to watch today"
          className="border border-black p-2 w-2/4 rounded-lg"
        />{" "}
        <button className="rounded-lg p-2 w-1/4 border border-black bg-red-700 ">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
