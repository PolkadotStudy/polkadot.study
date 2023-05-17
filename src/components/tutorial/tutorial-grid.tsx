import React from "react";

import styles from "./tutorial-grid.module.scss";

import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import TutorialCard from "./tutorial-card";

import { usePluginData } from "@docusaurus/useGlobalData";
import { uniqBy } from "lodash";
import clsx from "clsx";

/**
 * Display a grid of tutorial cards
 * @param param0 Data for the tutorial cards
 * @returns
 */
export default function TutorialGrid({ slides, style, big = true }) {
  let displayedSlides = slides;

  if (typeof slides === "undefined" || slides.length === 0) {
    // display all tutorial if no tutorials are defined
    const allTags = usePluginData(
      "docusaurus-plugin-content-tutorials",
      "tutorials"
    ).tags;

    let allTutorials = [];

    Object.values(allTags).forEach((tag) => {
      tag.items?.forEach((tutorial) => allTutorials.push(tutorial));
    });

    allTutorials = uniqBy(allTutorials, "permalink");

    console.log("displayedSlides", allTutorials);
    displayedSlides = allTutorials;
  }

  return (
    <div
      className={clsx(styles.tutorialGrid, { [styles.tutorialGridBig]: big })}
    >
      {displayedSlides?.map((slide) => (
        <div key={slide.title}>
          <TutorialCard {...slide} />
        </div>
      ))}
    </div>
  );
}
