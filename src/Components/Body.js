import React from "react";
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName , photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL }));

        // ...
      } else {
        dispatch(removeUser());

        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <div className="h-auto">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
