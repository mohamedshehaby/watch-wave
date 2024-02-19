import { getMovies } from "@/lib/queries/apiMovies";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import MovieList from "@/features/movies/MovieList";
import { Suspense } from "react";
import ListSkeleton from "@/components/ListSkeleton";

async function MoviesPage({
  params,
  searchParams,
}: {
  params: { ListType: string };
  searchParams: { page: string };
}) {
  const ListType = params.ListType;
  const MovieLists = ["now_playing", "popular", "top_rated", "upcoming"];
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  if (!MovieLists.includes(ListType)) {
    notFound();
  }

  const movieList = {
    title:
      ListType.split("_").join(" ").charAt(0).toUpperCase() +
      ListType.split("_").join(" ").slice(1),
    fetchMovies: () => getMovies(ListType, page),
    displayCount: 21,
  };

  return (
    <Container className="flex flex-col gap-12">
      <Suspense fallback={<ListSkeleton itemsNumber={20} />}>
        <MovieList {...movieList} showPagination={true} showTitle={false} />
      </Suspense>
    </Container>
  );
}

export default MoviesPage;
