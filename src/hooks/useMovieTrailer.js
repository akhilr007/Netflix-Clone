import { useEffect, useState } from "react";
import { OPTIONS, VIDEO_URL } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  const [trailerId, setTrailerId] = useState(null);
  const getMovieVideo = async () => {
    const videoUrl = `${VIDEO_URL}/${movieId}/videos`;
    const response = await fetch(videoUrl, OPTIONS);
    const data = await response.json();
    const videosData = data.results;

    const videoTrailers = videosData.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = videoTrailers.length ? videoTrailers[0] : videosData[0];
    const { key } = trailer;
    setTrailerId(key);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return trailerId;
};

export default useMovieTrailer;
