import React, { Suspense } from "react";
import { getMovieDetails } from "@/lib/queries/apiMovies";
import Billboard from "@/components/Billboard";
import VideosList from "@/features/mediaDetails/VideosList";
import Container from "@/components/Container";
import ListSkeleton from "@/components/ListSkeleton";

async function MovieDetailsPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const movie = await getMovieDetails(id);

  return (
    <div className="flex flex-col gap-8 bg-black">
      <Billboard media={movie} className="h-[80dvh] " />

      <Container>
        <Suspense fallback={<ListSkeleton itemsNumber={4} />}>
          <VideosList id={id} type="movie" />
        </Suspense>
      </Container>
    </div>
  );
}

export default MovieDetailsPage;
