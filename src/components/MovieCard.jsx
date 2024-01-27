import React from "react";
import { IMG_PATH } from "../utils/constant";

const MovieCard = ({ moviePosterId }) => {
  console.log(moviePosterId);
  return (
    <div className="w-36 md:w-48 pr-4">
      <img className="" alt="movie-logo" src={IMG_PATH + `${moviePosterId}`} />
    </div>
  );
};

export default MovieCard;
