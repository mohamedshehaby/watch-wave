// {
//     "adult": false,
//     "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
//     "genre_ids": [
//     28,
//     53,
//     18
// ],
//     "id": 866398,
//     "original_language": "en",
//     "original_title": "The Beekeeper",
//     "overview": "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
//     "popularity": 4578.602,
//     "poster_path": "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
//     "release_date": "2024-01-10",
//     "title": "The Beekeeper",
//     "video": false,
//     "vote_average": 7.5,
//     "vote_count": 711
// },

export interface Movie {
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

export interface MoviesList {
  movies: Movie[];
  totalPages: number;
}

export interface Genre {
  id: number;
  name: string;
}
