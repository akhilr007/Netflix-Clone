import React, { useEffect, useState } from "react";
import Header from "./Header";
import { NOW_PLAYING_MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../slice/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_REACT_TMDB_ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(NOW_PLAYING_MOVIES_URL, options);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
