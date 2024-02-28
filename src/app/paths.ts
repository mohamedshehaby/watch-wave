export const paths = {
  home: () => "/",
  auth: () => "/auth",
  profiles: () => "/profiles",
  movies: (listType: string) => `/movies/${listType}`,
  tvShows: (listType: string) => `/tv-shows/${listType}`,
  movie: (id: string) => `/movie/${id}`,
  tvShow: (id: string) => `/tv-show/${id}`,
};
