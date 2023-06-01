import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";

import styles from "./tutorial-slider.module.scss";

import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import TutorialCard from "./tutorial-card";

import ActionLeft from "@w3f/polkadot-icons/keyline/ActionLeft";
import ActionRight from "@w3f/polkadot-icons/keyline/ActionRight";
import clsx from "clsx";

export default function TutorialSlider({ slides, swiper, style }) {
  const sliderRef = useRef(null);
  const [positionStatus, setPositionStatus] = useState<string>("all");

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const updateStatus = (swiper) => {
    if (swiper.isBeginning && swiper.isEnd) {
      setPositionStatus("all");
    } else if (swiper.isEnd) {
      setPositionStatus("end");
      sliderRef.current?.classList.remove(styles.isBeginning);
      sliderRef.current?.classList.add(styles.isEnd);
    } else if (swiper.isBeginning) {
      sliderRef.current?.classList.remove(styles.isEnd);
      sliderRef.current?.classList.add(styles.isBeginning);
      setPositionStatus("beginning");
    } else {
      setPositionStatus("");
      sliderRef.current?.classList.remove(styles.isEnd);
      sliderRef.current?.classList.add(styles.isBeginning);
    }
  };

  const swiperClasses = clsx(styles.tutorialSwiper, styles.isBeginning, {
    // [styles.isBeginning]: sliderRef.current?.swiper.isBeginning,
    // [styles.isEnd]: sliderRef.current?.swiper.isEnd,
  });

  return (
    <div className={styles.tutorialSliderWrap}>
      <Swiper
        ref={sliderRef}
        onInit={updateStatus}
        onAfterInit={updateStatus}
        onSlideChangeTransitionEnd={updateStatus}
        className={swiperClasses}
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={"auto"}
        style={style}
        {...swiper}
      >
        {slides?.map((slide) => (
          <SwiperSlide key={slide.title}>
            <TutorialCard {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      {slides.length > 2 && (
        <>
          {positionStatus !== "beginning" && positionStatus !== "all" && (
            <div
              className={clsx(styles.arrowPrev, "swiper-prev")}
              onClick={handlePrev}
            >
              <ActionLeft stroke="currentColor" />
            </div>
          )}
          {positionStatus !== "end" && positionStatus !== "all" && (
            <div
              className={clsx(styles.arrowNext, "swiper-next")}
              onClick={handleNext}
            >
              <ActionRight stroke="currentColor" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
