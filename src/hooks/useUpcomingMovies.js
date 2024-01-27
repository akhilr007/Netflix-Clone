import { OPTIONS, MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../slice/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const response = await fetch(MOVIES_URL + `upcoming?page=1`, OPTIONS);
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
