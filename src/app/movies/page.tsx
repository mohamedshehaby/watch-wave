import { getMovies } from "@/lib/queries/apiMovies";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import MediasUiList from "@/features/media/MediaUiList";
import { Suspense } from "react";
import ListSkeleton from "@/components/ListSkeleton";
import { moviesEndpoints } from "@/lib/queries/apiEndPoints";

async function MoviesPage({
  searchParams,
}: {
  searchParams: { page: string; list: string };
}) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const list = searchParams.list;

  // @ts-ignore
  if (!moviesEndpoints[list]) {
    notFound();
  }

  const movieList = {
    title:
      list.split("_").join(" ").charAt(0).toUpperCase() +
      list.split("_").join(" ").slice(1),
    // @ts-ignore
    fetchMedias: () => getMovies(moviesEndpoints[list], page),
    displayCount: 21,
  };

  return (
    <Container className="flex flex-col gap-12">
      <Suspense fallback={<ListSkeleton itemsNumber={20} />}>
        <MediasUiList
          mediaType="movie"
          {...movieList}
          showPagination={true}
          showTitle={false}
        />
      </Suspense>
    </Container>
  );
}

export default MoviesPage;
