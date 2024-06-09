import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("online", () => {
      navigate(-1);
    });
  });
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        {" "}
        <div className="text-center text-3xl">🛜</div> Error{" "}
        {location.state.message} ! Check your internet connection
      </div>
    </div>
  );
};

export default Error;
