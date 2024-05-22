import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constant";
import { addGptSearch } from "../Utils/gptSlice";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        dispatch(removeUser());
        navigate("/");

        // User is signed out
        // ...
      }
    });

   return ()=>unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/Error");
      });
  };

  const handleClick = ()=>{
    dispatch(addGptSearch());
  }

  return (
    <div className="absolute bg-gradient-to-b from-black px-2 py-2 z-40 w-screen flex justify-between">
      <img
        src={LOGO}
        alt="logo"
        className="w-44 "
      />

      {user && (
        <div className="flex justify-around flex-nowrap w-2/12">
          <button className="bg-dark text-white border border-white rounded-md h-3/4 p-2" onClick={handleClick}>GPT Search</button>
          <div className="w-1/4">
            <img src={user.photoURL} alt="user-icon" className="w-full" />
          </div>

          <button
            className="text-black border-black  bg-red-700 rounded-md h-3/4 p-2"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
