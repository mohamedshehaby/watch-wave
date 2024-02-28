export interface Media {
  backdropPath: string;
  id: number;
  originalTitle: string;
  overview: string;
  posterPath: string;
  release_date: string;
  title: string;
  rating: number;
  releaseDate: string;
  genres: string[];
}

export interface MediaDetails {
  backdropPath: string;
  id: number;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  rating: number;
  genres: string[];
  productionCompanies: ProductionCompany[];
  homepage: string;
}

export interface ProductionCompany {
  id: number;
  logoPath?: string;
  name: string;
  originCountry: string;
}
export interface MovieDetails extends MediaDetails {}

export interface TvShowDetails extends MediaDetails {
  seasons: Season[];
  numberEpisodes: number;
  numberOfSeasons: number;
}

export interface Season {
  airDate?: string;
  episodeCount: number;
  id: number;
  name: string;
  overview: string;
  posterPath?: string;
  seasonNumber: number;
}

export interface MediaList {
  medias: Media[];
  totalPages: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
