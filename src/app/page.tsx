import { getMovies } from "@/lib/queries/apiMovies";
import Container from "@/components/Container";
import { paths } from "@/app/paths";
import ListSkeleton from "@/components/ListSkeleton";
import { Suspense } from "react";
import MediaUiList from "@/features/movies/MediaUiList";
import Slider from "@/components/Slider";
import { moviesEndpoints, seriesEndpoints } from "@/lib/queries/apiEndPoints";
import { getSeries } from "@/lib/queries/apiSeries";

const MovieUIList = [
  {
    title: "Now Playing Movies",
    fetchMedias: () => getMovies(moviesEndpoints.now_playing),
    href: paths.movies("now_playing"),
  },

  {
    title: "Upcoming Movies",
    fetchMedias: () => getMovies(moviesEndpoints.upcoming),
    href: paths.movies("upcoming"),
  },
];

const SeriesUiList = [
  {
    title: "On The Air Series",
    fetchMedias: () => getSeries(seriesEndpoints.on_the_air),
    href: paths.series("on_the_air"),
  },
  {
    title: "Popular Series",
    fetchMedias: () => getSeries(seriesEndpoints.popular),
    href: paths.series("popular"),
  },
  {
    title: "Airing Today Series",
    fetchMedias: () => getSeries(seriesEndpoints.airing_today),
    href: paths.series("airing_today_series"),
  },
];

export default async function HomePage() {
  return (
    <>
      <Slider fetchMedias={() => getMovies(moviesEndpoints.trending)} />

      <Container className="flex flex-col gap-12">
        {MovieUIList.map((movieList, index) => (
          <Suspense
            key={`${movieList.title}-${index}`}
            fallback={<ListSkeleton />}
          >
            <MediaUiList {...movieList} />
          </Suspense>
        ))}

        {SeriesUiList.map((seriesList, index) => (
          <Suspense
            key={`${seriesList.title}-${index}`}
            fallback={<ListSkeleton />}
          >
            <MediaUiList {...seriesList} />
          </Suspense>
        ))}
      </Container>
    </>
  );
}
