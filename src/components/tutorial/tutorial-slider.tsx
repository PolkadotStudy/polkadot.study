import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import TutorialCard from "./tutorial-card";

const demoSlides = [
  {
    title: "Demo Tutorial 1",
    description:
      "This is a short description of Demo Tutorial 1, here you will learn how to navigate the web3",
    tags: ["polkadot-js"],
    permalink: "",
    level: "Beginner",
  },
  {
    title: "Demo Tutorial 2",
    description:
      "This is a short description of Demo Tutorial 2, here you will learn how to navigate the web3",
    tags: ["ink!"],
    permalink: "",
    level: "Expert",
  },
  {
    title: "Demo Tutorial 3",
    description:
      "This is a short description of Demo Tutorial 3, here you will learn how to navigate the web3",
    tags: ["substrate", "ink!"],
    permalink: "",
    level: "Intermediate",
  },
  {
    title: "Demo Tutorial 4",
    description:
      "This is a short description of Demo Tutorial 4, here you will learn how to navigate the web3",
    tags: ["polkadot-js", "nextjs"],
    permalink: "",
    level: "Expert",
  },
  {
    title: "Demo Tutorial 5",
    description:
      "This is a short description of Demo Tutorial 5, here you will learn how to navigate the web3",
    tags: ["ink!"],
    permalink: "",
    level: "Beginner",
  },
];

export default function TutorialSlider({ slides, swiper }) {
  return (
    <Swiper
      style={{
        padding: "10px",
      }}
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        740: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        1080: {
          slidesPerView: 3,
        },
      }}
      {...swiper}
    >
      {demoSlides?.map((slide) => (
        <SwiperSlide>
          <TutorialCard {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
