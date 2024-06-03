import React from "react";
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "./Modal";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
  ]);

  const movieDetails = useSelector((store) => store.movies.movieDetails);

  return (
    <div className="h-auto w-full overflow-x-hidden">
      <RouterProvider router={appRouter} />
      {movieDetails && <Modal />}
    </div>
  );
};

export default Body;
