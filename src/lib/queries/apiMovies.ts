import fetcher from "@/lib/queries/fetchClient";
import { Genre, MoviesList } from "@/lib/types";

export async function getMoviesGenreList(): Promise<Genre[]> {
  try {
    const url = `${process.env.TMBD_BASE_URL}/genre/movie/list`;
    const data = await fetcher(url, [
      {
        key: "api_key",
        value: process.env.TMDB_API_KEY!,
      },
    ]);
    return data.genres;
  } catch (error) {
    throw new Error("Error fetching now playing movies");
  }
}

export async function getMovies(
  listType: string,
  page: number = 1,
): Promise<MoviesList> {
  try {
    const movieGenres = await getMoviesGenreList();
    const url = `${process.env.TMBD_BASE_URL}/movie/${listType}?language=en-US&page=${page}`;
    const data = await fetcher(url, [
      { key: "api_key", value: process.env.TMDB_API_KEY! },
    ]);

    const results = data.results;
    const totalPages = data.total_pages;

    return {
      movies: results.map((movie: any) => {
        const genreNames = movie.genre_ids.map((id: number) => {
          const genre = movieGenres.find((genre) => genre.id === id);
          return genre?.name;
        });

        return {
          id: movie.id,
          title: movie.title,
          releaseDate: movie.release_date,
          rating: movie.vote_average,
          posterPath: movie.poster_path,
          backdropPath: movie.backdrop_path,
          overview: movie.overview,
          genres: genreNames.slice(0, 3),
        };
      }),
      totalPages: totalPages,
    };
  } catch (error) {
    throw new Error(
      `Error fetching ${listType.split("_").join(" ").toUpperCase()} movies`,
    );
  }
}

export async function getTrendingMovies(): Promise<MoviesList> {
  try {
    const movieGenres = await getMoviesGenreList();
    const url = `${process.env.TMBD_BASE_URL}/trending/movie/day`;
    const data = await fetcher(url, [
      { key: "api_key", value: process.env.TMDB_API_KEY! },
    ]);

    const results = data.results;
    const totalPages = data.total_pages;

    return {
      movies: results.map((movie: any) => {
        const genreNames = movie.genre_ids.map((id: number) => {
          const genre = movieGenres.find((genre) => genre.id === id);
          return genre?.name;
        });

        return {
          id: movie.id,
          title: movie.title,
          releaseDate: movie.release_date,
          rating: movie.vote_average,
          posterPath: movie.poster_path,
          backdropPath: movie.backdrop_path,
          overview: movie.overview,
          genres: genreNames.slice(0, 3),
        };
      }),
      totalPages: totalPages,
    };
  } catch (error) {
    throw new Error(`Error fetching Trending movies`);
  }
}
