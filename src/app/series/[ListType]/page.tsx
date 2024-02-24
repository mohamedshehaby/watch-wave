import { notFound } from "next/navigation";
import Container from "@/components/Container";
import MediasUiList from "@/features/movies/MediaUiList";
import { Suspense } from "react";
import ListSkeleton from "@/components/ListSkeleton";
import { seriesEndpoints } from "@/lib/queries/apiEndPoints";
import { getSeries } from "@/lib/queries/apiSeries";

async function SeriesPage({
  params,
  searchParams,
}: {
  params: { ListType: string };
  searchParams: { page: string };
}) {
  const listType = params.ListType;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // @ts-ignore
  if (!seriesEndpoints[listType]) {
    notFound();
  }

  const seriesList = {
    title:
      listType.split("_").join(" ").charAt(0).toUpperCase() +
      listType.split("_").join(" ").slice(1),
    // @ts-ignore
    fetchMedias: () => getSeries(seriesEndpoints[listType], page),
    displayCount: 21,
  };

  return (
    <Container className="flex flex-col gap-12">
      <Suspense fallback={<ListSkeleton itemsNumber={20} />}>
        <MediasUiList {...seriesList} showPagination={true} showTitle={false} />
      </Suspense>
    </Container>
  );
}

export default SeriesPage;
