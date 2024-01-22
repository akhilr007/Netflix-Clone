import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const result = checkValidData(
      email.current.value,
      password.current.value,
      isSignInForm
    );
    if (result) setErrorMessage({ ...result });
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          className="w-full h-lvh"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute rounded-md w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 px-6 sm:px-8 md:px-10 py-8 sm:py-10 bg-black mx-auto left-0 right-0 my-24 sm:my-32 bg-opacity-85"
      >
        <h1 className="text-white font-bold text-2xl sm:text-3xl my-2 sm:my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-3 my-2 w-full bg-gray-700 text-white rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-3 my-2 w-full bg-gray-700 text-white rounded-md"
          type="email"
          placeholder="Email"
          ref={email}
        />
        {errorMessage !== null && (
          <p className="text-red-700 font-bold pt-2 pb-2">
            {errorMessage.emailError}
          </p>
        )}
        <input
          className="p-3 my-2 w-full bg-gray-700 text-white rounded-md"
          type="password"
          placeholder="Password"
          ref={password}
        />
        {errorMessage !== null && errorMessage.passwordError && (
          <div className="text-red-700 font-bold pt-2 pb-2">
            {errorMessage.passwordError.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )}

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-md text-white"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span className="mt-10 text-gray-500">
          {isSignInForm ? "New to Netflix? " : "Already a Netflix user "}
        </span>
        <span
          className="text-white cursor-pointer"
          onClick={() => setIsSignInForm((prev) => !prev)}
        >
          {isSignInForm ? "Sign up Now" : "Sign In "}
        </span>
      </form>
    </div>
  );
};

export default Login;
