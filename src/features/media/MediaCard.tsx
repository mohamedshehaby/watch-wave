"use client";
import React from "react";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Media } from "@/lib/types";
import { useRouter } from "next/navigation";

function MediaCard({ media }: { media: Media }) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/movie/${media.id}`);
      }}
    >
      <Card
        key={`${media.title}`}
        isFooterBlurred
        className=" group h-[300px]  cursor-pointer"
      >
        <div className="w-full h-full relative">
          <Image
            fill
            // removeWrapper
            alt={media.title}
            className="z-0 w-full h-full object-cover transition group-hover:scale-110 group-hover:brightness-90 brightness-50"
            src={`https://image.tmdb.org/t/p/w500${media.backdropPath}`}
          />
        </div>

        <CardFooter className="absolute bg-black/40 bottom-0 z-10  border-default-600 dark:border-default-100">
          <div className="flex flex-col w-full">
            <div className="flex flex-shrink  flex-row items-center gap-1">
              <h4 className="text-white/90 basis-10/12 truncate inline-block font-medium text-lg">
                {media.title}
              </h4>

              <span className="text-tiny text-white/60 basis-2/12 cursor-pointer hover:text-white/90 transition-colors">
                {media.releaseDate.slice(0, 4)}
              </span>
            </div>
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-row items-center justify-center gap-1">
                <FaStar className="text-yellow-500" size="14" />
                <p className="text-tiny text-white/60 border-r pr-1 border-white/60">
                  {media.rating.toFixed(1)}
                </p>

                {media.genres.map((genre, index) => (
                  <span
                    key={`${genre}-${index}`}
                    className="text-tiny text-white/60 cursor-pointer hover:text-white/90 transition-colors"
                  >{`${genre}`}</span>
                ))}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default MediaCard;
