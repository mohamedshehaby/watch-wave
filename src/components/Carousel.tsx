"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Slide from "@/components/Slide";
import { MoviesList } from "@/lib/types";
import { Navigation } from "swiper/modules";

interface CarouselProps {
  moviesList: MoviesList;
}

function Carousel({ moviesList }: CarouselProps) {
  const { movies, totalPages } = moviesList;
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      modules={[Navigation]}
      className="mySwiper"
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={`${movie.title}-${index}`}>
          <Slide movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
