import fetcher from "@/lib/queries/fetchClient";
import { Genre, MediaList, MovieDetails, Video } from "@/lib/types";
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

export async function getMovieDetails(
  id: string,
  url = moviesEndpoints.details,
): Promise<MovieDetails> {
  try {
    const movieDetails = await fetcher(`${url}/${id}`, [
      { key: "api_key", value: process.env.TMDB_API_KEY! },
    ]);

    return {
      id: movieDetails.id,
      title: movieDetails.title,
      releaseDate: movieDetails.release_date,
      rating: movieDetails.vote_average,
      posterPath: movieDetails.poster_path,
      backdropPath: movieDetails.backdrop_path,
      overview: movieDetails.overview,
      genres: movieDetails.genres.map((genre: any) => genre.name),
      originalTitle: movieDetails.original_title,
      homepage: movieDetails.homepage,
      productionCompanies: movieDetails.production_companies.map(
        (company: any) => {
          return {
            id: company.id,
            name: company.name,
            originCountry: company.origin_country,
            logoPath: company.logo_path,
          };
        },
      ),
    };
  } catch (error) {
    throw new Error(`Error fetching movie details for ${id}`);
  }
}

export async function getMovieVideos(
  id: string,
  url: string,
): Promise<Video[]> {
  try {
    const data = await fetcher(`${url}/${id}/videos`, [
      { key: "api_key", value: process.env.TMDB_API_KEY! },
    ]);

    return data.results;
  } catch (error) {
    throw new Error(`Error fetching movie videos for ${id}`);
  }
}
