import React from "react";
import { MediaList } from "@/lib/types";
import MediaCard from "@/features/media/MediaCard";
import Link from "@/components/Link";
import Pagination from "@/components/Pagination";

interface MediasUiListProps {
  title: string;
  href?: string;
  fetchMedias: () => Promise<MediaList>;
  displayCount?: number;
  showPagination?: boolean;
  showTitle?: boolean;
}

async function MediasUiList({
  title,
  href,
  fetchMedias,
  displayCount = 4,
  showPagination = false,
}: MediasUiListProps) {
  const { medias, totalPages }: MediaList = await fetchMedias();

  return (
    <div className="text-white flex gap-4 flex-col text-md md:text-xl lg:text-2xl font-semibold">
      <div className="flex justify-between items-center">
        <h2>{title}</h2>

        {href && (
          <Link href={href} underline={"hover"}>
            See All
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-x-4 gap-y-4 ">
        {medias.slice(0, displayCount).map((media, index) => (
          <MediaCard media={media} key={`${media.title}-${index}`} />
        ))}
      </div>

      {showPagination && <Pagination total={totalPages} />}
    </div>
  );
}

export default MediasUiList;
