import React from "react";
import Login from "./Login";
import Browser from "./Browser";
import {createBrowserRouter , RouterProvider} from 'react-router-dom'


const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />

        },
        {
            path : "/browse",
            element : <Browser />

        },
       

    ])


  return (
    <div className="h-auto">
      <RouterProvider router={appRouter} />
      
    </div>
  );
};

export default Body;
