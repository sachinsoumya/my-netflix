import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-full aspect-video px-10 absolute  text-white bg-gradient-to-r from-black flex ">
      <div className="lg:w-1/3 md:w-2/4  w-2/4 self-center">
        <div className="font-bold text-sm">{title}</div>
        <div className="md:text-lg text-xs font-normal pt-5 text-justify">{overview}</div>
        <div className="flex py-2">
          <button className="bg-white text-black border-black-300 p-2 lg:text-2xl md:text-xl font-medium text-center rounded-md w-1/3 hover:bg-opacity-80">
            {" "}
            ▶️ Play
          </button>
          <button className="bg-gray-300 text-white border-black-300 p-2 mx-2 lg:text-2xl md:text-xl font-medium text-center rounded-md w-1/3 bg-opacity-20 hover:bg-opacity-25">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
