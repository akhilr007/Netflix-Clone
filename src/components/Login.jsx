import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          className="w-full"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute rounded-md w-3/12 px-10 py-10 bg-black mx-auto left-0 right-0 my-48 bg-opacity-85">
        <h1 className="text-white font-bold text-3xl my-4">Sign In</h1>
        <input
          className="p-3 mx-auto left-0 right-0 my-2 w-full bg-gray-700 text-white rounded-md"
          type="email"
          placeholder="Email"
        />
        <input
          className="p-3 mx-auto left-0 right-0 my-2 w-full bg-gray-700 text-white rounded-md"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 mx-auto left-0 right-0 my-8 bg-red-700 w-full rounded-md text-white">
          Sign In
        </button>
        <span className="mt-20 text-gray-500">New to Netflix ?</span>
        <span className="text-white"> Sign up Now</span>
      </form>
    </div>
  );
};

export default Login;
