import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    window.addEventListener("online", () => {
      navigate(-1);
    });

    !location.state && navigate("/browse");
  }, []);

  return (
    <>
      {!location.state && <Header />}

      {location.state && (
        <div className="flex justify-center items-center h-screen">
          <div>
            {" "}
            <div className="text-center text-3xl">🛜</div> Error{" "}
            {location.state.message} ! Check your internet connection
          </div>
        </div>
      )}
    </>
  );
};

export default Error;
