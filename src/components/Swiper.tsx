"use client";
import React from "react";

import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow } from "swiper/modules";
import { Media } from "@/lib/types";
import Slide from "@/components/Slide";

function Swiper({ medias }: { medias: Media[] }) {
  return (
    <ReactSwiper
      wrapperClass={" mt-2 lg:mt-8 "}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow]}
      className="mySwiper"
    >
      {medias.map((media, index) => (
        <SwiperSlide key={`${media.title}-${index}`}>
          <Slide media={media} />
        </SwiperSlide>
      ))}
    </ReactSwiper>
  );
}

export default Swiper;
