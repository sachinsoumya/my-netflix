import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { Link, useNavigate } from "react-router-dom";
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
  }, [dispatch, navigate]);

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
    // console.log(e.target.value);
    dispatch(languageSetting(e.target.value));
  };

  const handleSelect = (e) => {
    navigate(e.target.value);
  };

  return (
    <div className="fixed bg-gradient-to-b from-black px-2 py-2 z-40 w-full flex justify-between h-1/12 lg:h-auto ">
      <Link to={`/browse`}>
        <img src={LOGO} alt="logo" className="w-24 lg:w-40" />
      </Link>

      {user ? (
        <div className="flex justify-between  flex-nowrap w-full">
          <div
            className={`flex flex-nowrap w-2/4 md:pt-2 pt-0 lg:pt-4 justify-center md:justify-normal ${
              gpt && `invisible`
            }`}
          >
            <div className="text-white font-semibold text-sm md:w-1/4 w-full mx-auto hidden md:block ">
              <Link to={`/browse`}>{lang[languageKey].home} </Link>
            </div>
            <div className="text-white font-semibold  md:w-1/4 w-full text-sm  mx-auto hidden md:block">
              <Link to={`/browse/watchList`}>{lang[languageKey].myList}</Link>
            </div>

            <select
              className="rounded-md bg-black text-white border border-white justify-self-center h-3/4  text-xs md:hidden block"
              onChange={handleSelect}
            >
              <option value="/browse" className="bg-black ">
                {lang[languageKey].home}
              </option>
              <option value="/browse/watchList">
                {lang[languageKey].myList}
              </option>
            </select>
          </div>

          <div className="flex justify-around flex-nowrap w-2/4 lg:pt-3 ">
            {/** w-auto */}
            <div className="w-full mx-2 ">
              <img
                src={user.photoURL}
                alt="user-icon"
                className=" rounded-full mx-auto"
              />{" "}
            </div>

            <button
              className="bg-black text-white border border-white rounded-md h-8 lg:h-3/4 text-center mx-2 w-full font-semibold text-xs lg:text-sm"
              onClick={handleClick}
            >
              {gpt ? lang[languageKey].home : lang[languageKey].gpt}
            </button>

            <button
              className="text-black border-black  bg-red-700 rounded-md h-8 lg:h-3/4 text-center mx-2 w-full text-xs font-semibold lg:text-sm"
              onClick={handleSignOut}
            >
              {lang[languageKey].signOut}
            </button>
          </div>
        </div>
      ) : (
        <select
          className="rounded-md h-3/4 p-2 bg-[#141414] text-white border border-white"
          onChange={handleLanguageChange}
          value={languageKey}
        >
          {SUPPORTED_LANGUAGES_LIST?.map((language) => (
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
