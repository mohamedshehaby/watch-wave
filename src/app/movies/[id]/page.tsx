import React, { Suspense } from "react";
import { getMovieDetails, getSimilarMovies } from "@/lib/queries/apiMovies";
import Billboard from "@/components/Billboard";
import VideosList from "@/features/mediaDetails/VideosList";
import Container from "@/components/Container";
import ListSkeleton from "@/components/ListSkeleton";
import MediaUiList from "@/features/media/MediaUiList";

async function MovieDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = await getMovieDetails(id);

  return (
    <div className="flex flex-col gap-8 ">
      <Billboard media={movie} className="h-[80dvh] " />

      <Container className="flex flex-col gap-4 lg:gap-12">
        <Suspense fallback={<ListSkeleton itemsNumber={4} />}>
          <VideosList id={id} type="movie" />
        </Suspense>

        <Suspense fallback={<ListSkeleton />}>
          <MediaUiList
            mediaType="movie"
            fetchMedias={() => getSimilarMovies(id)}
            title="Similar Movies"
          />
        </Suspense>
      </Container>
    </div>
  );
}

export default MovieDetailsPage;
