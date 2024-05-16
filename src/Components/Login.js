import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignup = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //* validate the form data
    const message = checkValidData(email.current.value, password.current.value ,name.current);

    // console.log(email.current.value);
    // console.log(password.current.value);
    console.log(name);
    console.log(message)

    setErrorMessage(message);
  };

  return (
    <div className="w-full h-screen">
      <Header />
      <div className="absolute w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Background_image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" flex justify-center h-full items-center">
        <form
          className=" relative bg-black py-8 w-3/4  flex  justify-center align-middle rounded-md bg-opacity-80 "
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-2/4">
            <div className="text-3xl font-bold text-white">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </div>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="px-2 py-3 border-gray-400 my-6 block w-full rounded-md bg-slate-700"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="email address"
              className="px-2 py-3 border-gray-400 my-6 block w-full rounded-md bg-slate-700 "
            />

            <input
              ref={password}
              type="password"
              placeholder="password"
              className="  px-2 py-3 my-6 block w-full rounded-lg bg-slate-700"
            />
            <p className="text-red-500 ">{errorMessage}</p>
            <button
              className="px-2 py-2 my-6 w-full bg-red-600 rounded-md "
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign in" : "Sign up"}
            </button>
            {/* <div className="text-center text-gray-300">OR</div>
            <button className="px-2 py-2 my-6 w-full bg-red-600 rounded-md ">Sign in</button> */}
            {isSignInForm ? (
              <div className="text-slate-400">
                New to NetFlix ?{" "}
                <span
                  onClick={handleSignup}
                  className="cursor-pointer text-white"
                >
                  Sign up Now
                </span>
              </div>
            ) : (
              <div className="text-slate-400">
                Already Registered ?{" "}
                <span
                  onClick={handleSignup}
                  className="cursor-pointer text-white"
                >
                  Sign in Now
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
