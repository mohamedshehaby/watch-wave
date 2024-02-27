const baseUrl = process.env.TMBD_BASE_URL;

export const moviesEndpoints = {
  trending: `${baseUrl}/trending/movie/day`,
  popular: `${baseUrl}/movie/popular`,
  top_rated: `${baseUrl}/movie/top_rated`,
  upcoming: `${baseUrl}/movie/upcoming`,
  now_playing: `${baseUrl}/movie/now_playing`,
  genres: `${baseUrl}/genre/movie/list`,
  details: `${baseUrl}/movie`,
  videos: `${baseUrl}/movie`,
};

export const seriesEndpoints = {
  on_the_air: `${baseUrl}/tv/on_the_air`,
  popular: `${baseUrl}/tv/popular`,
  top_rated: `${baseUrl}/tv/top_rated`,
  airing_today: `${baseUrl}/tv/airing_today`,
  trending: `${baseUrl}/trending/tv/day`,
  genres: `${baseUrl}/genre/tv/list`,
};
