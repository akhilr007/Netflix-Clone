export const USER_LOGO_URL =
  "https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4";

export const MOVIES_URL = "https://api.themoviedb.org/3/movie/";

export const IMG_PATH = `http://image.tmdb.org/t/p/w500/`;

export const VIDEO_URL = `https://api.themoviedb.org/3/movie/`;

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_REACT_TMDB_ACCESS_TOKEN}`,
  },
};
