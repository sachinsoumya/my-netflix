import React from "react";
import Login from "./Login";
import Browser from "./Browser";
import Error from "./Error";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FullTrailer from "./FullTrailer";
import MyList from "./MyList";
import Footer from "./Footer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
      children: [
        {
          path: "/browse",
          element: (
            <>
              {" "}
              <MainContainer />
              <SecondaryContainer />
              <Footer/>
            </>
          ),
        },
        {
          path: "/browse/watchList",
          element: <MyList />,
        },
      ],
    },
    {
      path: "/watch",
      element: <FullTrailer />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);

  //TODO const movieDetails = useSelector((store) => store.movies.movieDetails);

  return (
    <div className="h-auto w-full overflow-x-hidden">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
