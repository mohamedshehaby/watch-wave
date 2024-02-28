import { Genre, MediaList, TvShowDetails, Video } from "@/lib/types";
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
    const seriesGenres = await getSeriesGenresList();

    const data = await fetcher(`${url}?language=en-US&page=${page}`, [
      { key: "api_key", value: process.env.TMDB_API_KEY! },
    ]);

    const results = data.results;
    const totalPages = data.total_pages;

    return {
      medias: results.map((media: any) => {
        const genreNames = media.genre_ids.map((id: number) => {
          const genre = seriesGenres.find((genre) => genre.id === id);
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

export async function getSeriesDetails(
  id: string,
  url = seriesEndpoints.details,
): Promise<TvShowDetails> {
  try {
    const seriesDetails = await fetcher(`${url}/${id}`, [
      { key: "api_key", value: process.env.TMDB_API_KEY! },
    ]);

    return {
      id: seriesDetails.id,
      title: seriesDetails.title,
      releaseDate: seriesDetails.first_air_date,
      rating: seriesDetails.vote_average,
      posterPath: seriesDetails.poster_path,
      backdropPath: seriesDetails.backdrop_path,
      overview: seriesDetails.overview,
      genres: seriesDetails.genres.map((genre: any) => genre.name),
      originalTitle: seriesDetails.original_title,
      homepage: seriesDetails.homepage,
      productionCompanies: seriesDetails.production_companies.map(
        (company: any) => {
          return {
            id: company.id,
            name: company.name,
            originCountry: company.origin_country,
            logoPath: company.logo_path,
          };
        },
      ),
      seasons: seriesDetails.seasons.map((season: any) => {
        return {
          airDate: season.air_date,
          episodeCount: season.episode_count,
          id: season.id,
          name: season.name,
          overview: season.overview,
          posterPath: season.poster_path,
          seasonNumber: season.season_number,
        };
      }),
      numberEpisodes: seriesDetails.number_of_episodes,
      numberOfSeasons: seriesDetails.number_of_seasons,
    };
  } catch (error) {
    throw new Error(`Error fetching movie details for ${id}`);
  }
}

export async function getSeriesVideos(
  id: string,
  url = seriesEndpoints.videos,
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

export async function getSimilarSeries(
  id: string,

  url = seriesEndpoints.similar,
  page = 1,
) {
  try {
    const seriesGenres = await getSeriesGenresList();

    const data = await fetcher(
      `${url}/${id}/similar?language=en-US&page=${page}`,
      [{ key: "api_key", value: process.env.TMDB_API_KEY! }],
    );

    const results = data.results;
    const totalPages = data.total_pages;

    return {
      medias: results.map((media: any) => {
        const genreNames = media.genre_ids.map((id: number) => {
          const genre = seriesGenres.find((genre) => genre.id === id);
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
