import { getMovies, getTrendingMovies } from "@/lib/queries/apiMovies";
import Container from "@/components/Container";
import { paths } from "@/app/paths";
import ListSkeleton from "@/components/ListSkeleton";
import { Suspense } from "react";
import MovieList from "@/features/movies/MovieList";
import Carousel from "@/components/Carousel";

const MovieUIList = [
  {
    title: "Now Playing",
    fetchMovies: () => getMovies("now_playing"),
    href: paths.movies("now_playing"),
  },
  {
    title: "Popular Movies",
    fetchMovies: () => getMovies("popular"),
    href: paths.movies("popular"),
  },
  {
    title: "Top Rated Movies",
    fetchMovies: () => getMovies("top_rated"),
    href: paths.movies("top_rated"),
  },
  {
    title: "Upcoming Movies",
    fetchMovies: () => getMovies("upcoming"),
    href: paths.movies("upcoming"),
  },
];

export default async function HomePage() {
  const movies = await getTrendingMovies();

  return (
    <>
      <Carousel moviesList={movies} />

      <Container className="flex flex-col gap-12">
        {MovieUIList.map((movieList, index) => (
          <Suspense
            key={`${movieList.title}-${index}`}
            fallback={<ListSkeleton />}
          >
            <MovieList {...movieList} />
          </Suspense>
        ))}
      </Container>
    </>
  );
}
