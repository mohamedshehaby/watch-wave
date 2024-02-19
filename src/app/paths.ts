export const paths = {
  home: () => "/",
  auth: () => "/auth",
  profiles: () => "/profiles",
  movies: (listType: string) => `/movies/${listType}`,
};
