export const paths = {
  home: () => "/",
  auth: () => "/auth",
  profiles: () => "/profiles",
  movies: (list?: string) => {
    if (list) {
      return `/movies?list=${list}`;
    }
    return "/movies";
  },
  series: (list: string) => {
    if (list) {
      return `/series?list=${list}`;
    }
    return "/series";
  },
  movieDetails: (id: string) => `/movies/${id}`,
  seriesDetails: (id: string) => `/series/${id}`,
};
