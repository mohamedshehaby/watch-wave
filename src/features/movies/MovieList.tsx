import React from "react";
import { MoviesList } from "@/lib/types";
import MovieCard from "@/features/movies/MovieCard";
import Link from "@/components/Link";
import Pagination from "@/components/Pagination";

interface MovieListProps {
  title: string;
  href?: string;
  fetchMovies: () => Promise<MoviesList>;
  displayCount?: number;
  showPagination?: boolean;
  showTitle?: boolean;
}

async function MovieList({
  title,
  href,
  fetchMovies,
  displayCount = 4,
  showPagination = false,
  showTitle = true,
}: MovieListProps) {
  const { movies, totalPages }: MoviesList = await fetchMovies();

  return (
    <div className="text-white flex gap-4 flex-col text-md md:text-xl lg:text-2xl font-semibold">
      <div className="flex justify-between items-center">
        {showTitle && <h2>{title}</h2>}

        {href && (
          <Link href={href} underline={"hover"}>
            See All
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-x-4 gap-y-4 ">
        {movies.slice(0, displayCount).map((movie, index) => (
          <MovieCard movie={movie} key={`${movie.title}-${index}`} />
        ))}
      </div>

      {showPagination && <Pagination total={totalPages} />}
    </div>
  );
}

export default MovieList;
