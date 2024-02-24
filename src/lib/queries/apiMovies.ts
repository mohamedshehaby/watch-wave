import fetcher from "@/lib/queries/fetchClient";
import { Genre, MediaList } from "@/lib/types";
import { moviesEndpoints } from "@/lib/queries/apiEndPoints";

export async function getMoviesGenreList(): Promise<Genre[]> {
  try {
    const data = await fetcher(moviesEndpoints.genres, [
      {
        key: "api_key",
        value: process.env.TMDB_API_KEY!,
      },
    ]);
    return data.genres;
  } catch (error) {
    throw new Error("Error fetching Genres List for Movies");
  }
}

export async function getMovies(
  url: string,
  page: number = 1,
): Promise<MediaList> {
  try {
    const movieGenres = await getMoviesGenreList();

    const data = await fetcher(`${url}?language=en-US&page=${page}`, [
      { key: "api_key", value: process.env.TMDB_API_KEY! },
    ]);

    const results = data.results;
    const totalPages = data.total_pages;

    return {
      medias: results.map((movie: any) => {
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
    throw new Error(`Error fetching  movies`);
  }
}
