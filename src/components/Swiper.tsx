"use client";
import React from "react";

import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Media } from "@/lib/types";
import Billboard from "@/components/Billboard";

function Swiper({ medias }: { medias: Media[] }) {
  return (
    <ReactSwiper
      wrapperClass={" mt-2 lg:mt-8 "}
      effect={"coverflow"}
      grabCursor={true}
      loop
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectCoverflow]}
      className="mySwiper"
    >
      {medias.map((media, index) => (
        <SwiperSlide key={`${media.title}-${index}`}>
          <Billboard media={media} />
        </SwiperSlide>
      ))}
    </ReactSwiper>
  );
}

export default Swiper;
