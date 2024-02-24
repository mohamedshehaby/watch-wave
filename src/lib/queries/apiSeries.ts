import { Genre, MediaList } from "@/lib/types";
import fetcher from "@/lib/queries/fetchClient";
import { seriesEndpoints } from "@/lib/queries/apiEndPoints";

export async function getSeriesGenresList(): Promise<Genre[]> {
  try {
    const data = await fetcher(seriesEndpoints.genres, [
      {
        key: "api_key",
        value: process.env.TMDB_API_KEY!,
      },
    ]);
    return data.genres;
  } catch (error) {
    throw new Error("Error fetching Genres List for Series");
  }
}

export async function getSeries(
  url: string,
  page: number = 1,
): Promise<MediaList> {
  try {
    const movieGenres = await getSeriesGenresList();

    const data = await fetcher(`${url}?language=en-US&page=${page}`, [
      { key: "api_key", value: process.env.TMDB_API_KEY! },
    ]);

    const results = data.results;
    const totalPages = data.total_pages;

    return {
      medias: results.map((media: any) => {
        const genreNames = media.genre_ids.map((id: number) => {
          const genre = movieGenres.find((genre) => genre.id === id);
          return genre?.name;
        });

        return {
          id: media.id,
          title: media.name,
          releaseDate: media.first_air_date,
          rating: media.vote_average,
          posterPath: media.poster_path,
          backdropPath: media.backdrop_path,
          overview: media.overview,
          genres: genreNames.slice(0, 3),
        };
      }),
      totalPages: totalPages,
    };
  } catch (error) {
    throw new Error(`Error fetching  movies`);
  }
}
