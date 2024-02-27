"use client";
import React from "react";
import { Media, MediaDetails } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@nextui-org/react";

interface BillboardProps {
  media: Media | MediaDetails;
  className?: string;
}

function Billboard({ media, className }: BillboardProps) {
  const router = useRouter();

  console.log(media, "media");

  return (
    <div
      className={cn(
        className,
        "relative h-[80dvh]  flex flex-col justify-between",
      )}
      onClick={() => {
        router.push(`/movie/${media.id}`);
      }}
    >
      <p className=" z-10 pl-4 md:pl-16  mt-4 mt:pl-16  text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
        {media.title}
      </p>
      <Image
        fill
        className="object-cover brightness-75 "
        src={`https://image.tmdb.org/t/p/original${media.backdropPath}`}
        alt={media.title}
      />

      <div className=" items-center flex flex-col-reverse lg:flex-row gap-2 lg:gap-8  backdrop-blur-3xl backdrop-saturate-[180%] bottom-0 bg-[#282828]/50 blur-img w-full py-1 lg:py-4 pt-2 lg:pt-8  pl-4 md:pl-16 ">
        <div className="text-center lg:text-left">
          <p className="text-white text-tiny  lg:text-base w-full lg:w-[80%] drop-shadow-xl">
            {media.overview.substring(0, 200) + "..."}
          </p>
          {media.genres.map((genre, index) => (
            <span
              key={`${genre}-${index}`}
              className="text-tiny mr-2 text-white/60 cursor-pointer hover:text-white/90 transition-colors"
            >{`${genre}`}</span>
          ))}
          <span className="text-tiny mr-2 text-white/60 cursor-pointer hover:text-white/90 transition-colors">
            {media.releaseDate.slice(0, 4)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
