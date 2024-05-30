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
import { SUPPORTED_LANGUAGES_LIST } from "../Utils/constant";
import { languageSetting } from "../Utils/configSlice";
import lang from "../Utils/languageConstant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.gptSearch);
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config.lang);

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

    return () => unsubscribe();
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

  const handleClick = () => {
    dispatch(addGptSearch());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(languageSetting(e.target.value));
  };

  return (
    <div className="absolute bg-gradient-to-b from-black px-2 py-2 z-40 w-full flex justify-between h-1/12 lg:h-auto">
      <img src={LOGO} alt="logo" className="w-24 lg:w-40" />

      {user ? (
        <div className="flex justify-around flex-nowrap w-2/4 ">
          {/** w-auto */}
          <div className="w-full mx-2 ">
            <img
              src={user.photoURL}
              alt="user-icon"
              className=" rounded-full"
            />{" "}
            {/** lg:w-full */}
          </div>
          {/* {gpt && (
            // <select
            //   className="rounded-md h-3/4 p-2"
            //   onChange={handleLanguageChange}
            // >
            //   {SUPPORTED_LANGUAGES_LIST.map((language) => (
            //     <option key={language.name} value={language.identifier}>
            //       {language.name}
            //     </option>
            //   ))}
            // </select>
          )} */}
          <button
            className="bg-black text-white border border-white rounded-md h-8 lg:h-3/4 text-center mx-2 w-full text-xs lg:text-sm"
            onClick={handleClick}
          >
            {gpt ? lang[languageKey].home : lang[languageKey].gpt}
          </button>

          <button
            className="text-black border-black  bg-red-700 rounded-md h-8 lg:h-3/4 text-center mx-2 w-full text-xs lg:text-sm"
            onClick={handleSignOut}
          >
            {lang[languageKey].signOut}
          </button>
        </div>
      ) : (
        <select
          className="rounded-md h-3/4 p-2"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES_LIST.map((language) => (
            <option key={language.name} value={language.identifier}>
              {language.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
export default Header;
