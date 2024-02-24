import React from "react";
import { Media } from "@/lib/types";
import Image from "next/image";
import { Button } from "@nextui-org/react";

interface SlideProps {
  media: Media;
}

function Slide({ media }: SlideProps) {
  return (
    <div className="relative h-full">
      <p className=" absolute z-10 top-8 left-8 text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
        {media.title}
      </p>
      <Image
        fill
        className="object-cover brightness-75 "
        src={`https://image.tmdb.org/t/p/original${media.backdropPath}`}
        alt={media.title}
      />

      <div className="absolute items-center flex flex-col-reverse lg:flex-row gap-2 lg:gap-8  backdrop-blur-3xl backdrop-saturate-[180%] bottom-0 bg-[#282828]/50 blur-img w-full py-8  pl-4 md:pl-16 ">
        <Button
          onClick={() => {
            console.log("clicked");
          }}
          className="cursor-pointer w-[50%] flex-shrink-0 lg:w-[20%]  text-white/90  drop-shadow-xl"
          variant="shadow"
          color="primary"
        >
          See details
        </Button>
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

export default Slide;
