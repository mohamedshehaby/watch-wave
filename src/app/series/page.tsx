import { notFound } from "next/navigation";
import Container from "@/components/Container";
import MediasUiList from "@/features/media/MediaUiList";
import { Suspense } from "react";
import ListSkeleton from "@/components/ListSkeleton";
import { seriesEndpoints } from "@/lib/queries/apiEndPoints";
import { getSeries } from "@/lib/queries/apiSeries";

async function SeriesPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string; list: string }>;
}) {
  const { list, page: pageParam } = await searchParams;
  const page = pageParam ? parseInt(pageParam) : 1;

  // @ts-ignore
  if (!seriesEndpoints[list]) {
    notFound();
  }

  const seriesList = {
    title:
      list.split("_").join(" ").charAt(0).toUpperCase() +
      list.split("_").join(" ").slice(1),
    // @ts-ignore
    fetchMedias: () => getSeries(seriesEndpoints[list], page),
    displayCount: 21,
  };

  return (
    <Container className="flex flex-col gap-12">
      <Suspense fallback={<ListSkeleton itemsNumber={20} />}>
        <MediasUiList
          mediaType="series"
          {...seriesList}
          showPagination={true}
          showTitle={false}
        />
      </Suspense>
    </Container>
  );
}

export default SeriesPage;
