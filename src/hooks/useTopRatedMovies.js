import { OPTIONS, MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../slice/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const response = await fetch(MOVIES_URL + `top_rated?page=1`, OPTIONS);
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
