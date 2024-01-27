import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-16 py-6">
      <h1 className="py-1 text-lg md:text-2xl font-bold text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              moviePosterId={movie.poster_path}
              className=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
