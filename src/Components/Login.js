import { useState, useRef } from "react";
import Header from "./Header";
import lang from "../Utils/languageConstant";
import { checkValidData } from "../Utils/Validate";
import { useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BACKGROUND_IMAGE } from "../Utils/constant";
import { USER_ICON } from "../Utils/constant";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config.lang);

  const handleSignup = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //* validate the form data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current
    );

    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(name);
    // console.log(message);

    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //* Sign Up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //Signed up

          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_ICON,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
              //Profile updated!
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      //* Sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="w-full h-screen">
      <Header />
      <div className="absolute w-full h-full">
        <img
          src={BACKGROUND_IMAGE}
          alt="Background_image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" flex justify-center h-full items-center">
        <form
          className=" relative bg-black py-8 w-3/4  flex  justify-center align-middle rounded-md bg-opacity-80 "
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="lg:w-2/4 md:w-4/6 w-5/6">
            <div className="text-3xl font-bold text-white ">
              {isSignInForm
                ? lang[languageKey].signIn
                : lang[languageKey].signUp}
            </div>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder={lang[languageKey].namePlaceholder}
                className="px-2 py-3 border-gray-400 my-6 block w-full rounded-md bg-slate-700"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder={lang[languageKey].emailPlaceholder}
              className="px-2 py-3 border-gray-400 my-6 block w-full rounded-md bg-slate-700 "
            />

            <input
              ref={password}
              type="password"
              placeholder={lang[languageKey].passwordPlaceholder}
              className="  px-2 py-3 my-6 block w-full rounded-lg bg-slate-700"
            />
            <p className="text-red-500 ">{errorMessage}</p>
            <button
              className="px-2 py-2 my-6 w-full bg-red-600 rounded-md "
              onClick={handleButtonClick}
            >
              {isSignInForm
                ? lang[languageKey].signIn
                : lang[languageKey].signUp}
            </button>
            {/* <div className="text-center text-gray-300">OR</div>
            <button className="px-2 py-2 my-6 w-full bg-red-600 rounded-md ">Sign in</button> */}
            {isSignInForm ? (
              <div className="text-slate-400 text-sm md:text-base">
                {lang[languageKey].newNetFlix} ?{" "}
                <span
                  onClick={handleSignup}
                  className="cursor-pointer text-white"
                >
                  {lang[languageKey].signUp} {lang[languageKey].now}
                </span>
              </div>
            ) : (
              <div className="text-slate-400 text-sm md:text-base">
                {lang[languageKey].alreadyRegis} ?{" "}
                <span
                  onClick={handleSignup}
                  className="cursor-pointer text-white"
                >
                  {lang[languageKey].signIn} {lang[languageKey].now}
                </span>
              </div>
            )}
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
