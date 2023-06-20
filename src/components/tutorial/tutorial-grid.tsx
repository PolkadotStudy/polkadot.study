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
export default function TutorialGrid({
  slides,
  style,
  big = true,
  displaySubstrateInBits = true,
  displayRustyCrewmates = true,
}) {
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

    displayedSlides = allTutorials.filter(
      (t) => !t.permalink.includes("/substrate-in-bits/")
    );
  }

  return (
    <div
      className={clsx(styles.tutorialGrid, { [styles.tutorialGridBig]: big })}
    >
      {displayedSlides?.map((slide) => (
        <div key={slide.title} className={styles.itemWrap}>
          <TutorialCard {...slide} limitedWidth={false} />
        </div>
      ))}
      {displaySubstrateInBits && (
        <div className={styles.itemWrap}>
          <TutorialCard
            title="Substrate in Bits"
            description="Substrate in Bits is a technical content series/reference aimed at solving the pain points of developers building with Substrate and Rust."
            permalink="/tutorials/substrate-in-bits"
            tags={[{ label: "substrate" }]}
            level="intermediate"
            duration={"differs per tutorial"}
            limitedWidth={false}
          />
        </div>
      )}
      {displayRustyCrewmates && (
        <div className={styles.itemWrap}>
          <TutorialCard
            title="Interactive Substrate Tutorials"
            description="A collection of exercises that will teach you the basics of Substrate development by interactive code examples from github."
            permalink="/tutorials/interactive-substrate-tutorials-rusty-crewmates/"
            tags={[{ label: "substrate" }]}
            level="intermediate"
            duration={"differs per tutorial"}
            limitedWidth={false}
          />
        </div>
      )}
    </div>
  );
}
