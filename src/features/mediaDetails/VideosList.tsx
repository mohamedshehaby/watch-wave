import React from "react";
import { getMovieVideos } from "@/lib/queries/apiMovies";
import { moviesEndpoints } from "@/lib/queries/apiEndPoints";
import VideoItem from "@/features/mediaDetails/VideoItem";

interface VideosProps {
  id: string;
  type: string;
}

async function VideosList({ id, type }: { id: string; type: string }) {
  const videos = await getMovieVideos(id, moviesEndpoints.videos);

  return (
    <div className="text-white w-full flex flex-col gap-4">
      <h2 className="text-md md:text-xl lg:text-2xl"> Videos & Trailers </h2>

      {videos.length === 0 ? (
        <p> No videos available </p>
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
