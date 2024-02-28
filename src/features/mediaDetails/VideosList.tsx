import React from "react";
import { getMovieVideos } from "@/lib/queries/apiMovies";
import VideoItem from "@/features/mediaDetails/VideoItem";
import { getSeriesVideos } from "@/lib/queries/apiSeries";
import { Video } from "@/lib/types";
import Heading from "@/components/Heading";

interface VideosProps {
  id: string;
  type: string;
}

async function VideosList({ id, type }: { id: string; type: string }) {
  let videos: Video[] = [];

  if (type === "series") videos = await getSeriesVideos(id);
  else videos = await getMovieVideos(id);

  return (
    <div className="text-white w-full flex flex-col gap-4">
      <Heading as="h2">Trailers</Heading>

      {videos.length === 0 ? (
        <p> No trailers available </p>
      ) : (
        <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-x-4 gap-y-4 gap-4  w-full ">
          {videos.map(
            (video, index) =>
              video.site === "YouTube" &&
              (video.type === "Trailer" || video.type === "Teaser") && (
                <VideoItem video={video} key={`${video.name}-${index}`} />
              ),
          )}
        </div>
      )}
    </div>
  );
}

export default VideosList;
