import { OPTIONS, MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../slice/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const response = await fetch(MOVIES_URL + `popular?page=1`, OPTIONS);
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
