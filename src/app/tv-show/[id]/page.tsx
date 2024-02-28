import React, { Suspense } from "react";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
import ListSkeleton from "@/components/ListSkeleton";
import VideosList from "@/features/mediaDetails/VideosList";
import { getSeriesDetails, getSimilarSeries } from "@/lib/queries/apiSeries";
import MediaUiList from "@/features/media/MediaUiList";

async function SeriesDetailsPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const seriesDetails = await getSeriesDetails(id);

  return (
    <div className="flex flex-col gap-8 ">
      <Billboard media={seriesDetails} className="h-[80dvh] " />

      <Container className="flex flex-col gap-4 lg:gap-12 ">
        <Suspense fallback={<ListSkeleton itemsNumber={4} />}>
          <VideosList id={id} type="series" />
        </Suspense>

        <Suspense fallback={<ListSkeleton />}>
          <MediaUiList
            mediaType="series"
            fetchMedias={() => getSimilarSeries(id)}
            title="Similar Tv Shows"
          />
        </Suspense>
      </Container>
    </div>
  );
}

export default SeriesDetailsPage;
