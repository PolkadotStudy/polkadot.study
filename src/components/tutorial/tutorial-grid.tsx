import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";

import styles from "./tutorial-grid.module.scss";

import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import TutorialCard from "./tutorial-card";

import clsx from "clsx";

/**
 * Display a grid of tutorial cards
 * @param param0 Data for the tutorial cards
 * @returns
 */
export default function TutorialGrid({ slides, style }) {
  return (
    <div className={styles.tutorialGrid}>
      {slides?.map((slide) => (
        <div key={slide.title}>
          <TutorialCard {...slide} />
        </div>
      ))}
    </div>
  );
}
