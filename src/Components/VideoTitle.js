import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video px-10 absolute  text-white bg-gradient-to-r from-black flex ">
      <div className="w-1/3  self-center">
        <div className="font-bold text-lg ">{title}</div>
        <div className="text-lg font-semibold pt-5">{overview}</div>
        <div className="flex py-2">
          <button className="bg-white text-black border-black-300 p-2 text-2xl font-medium text-center rounded-md w-1/3 hover:bg-opacity-80">
            {" "}
            ▶️ Play
          </button>
          <button className="bg-gray-300 text-white border-black-300 p-2 mx-2 text-2xl font-medium text-center rounded-md w-1/3 bg-opacity-20 hover:bg-opacity-25">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
