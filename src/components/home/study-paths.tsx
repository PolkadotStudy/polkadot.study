import clsx from "clsx";
import React, { useState } from "react";

import styles from "./study-paths.module.scss";
import TutorialSlider from "../tutorial/tutorial-slider";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";

export function StudyPaths() {
  // const description = allTagsWithDescription.find(
  //   (tag) => tag.tag === selectedTag
  // ).description;

  const allTags = usePluginData(
    "docusaurus-plugin-content-tutorials",
    "tutorials"
  ).tags;

  // const tutorials = globalData["docusaurus-plugin-content-tutorials"].tutorials;
  const [selectedTag, setSelectedTag] = useState(
    allTags[Object.keys(allTags)[0]]?.tag
  );

  const selectedTagItems = selectedTag ? allTags[selectedTag.label]?.items : [];

  if (Object.keys(allTags).length === 0) {
    return (
      <>
        No tutorials found.{" "}
        <Link to="docs/authors/new-tutorial-on-polkadot-study/intro">
          Create one!
        </Link>
      </>
    );
  }

  return (
    <div className={styles.studyPaths}>
      <p className={styles.description}>{selectedTag?.description}</p>
      <div className={styles.content}>
        <div className={styles.left}>
          {allTags &&
            Object.keys(allTags)
              .slice(0, 4)
              ?.map((key, index) => (
                <div
                  className={clsx(styles.tag, "tag", {
                    [styles.selected]:
                      allTags[key].tag.label === selectedTag?.label,
                  })}
                  onClick={() => setSelectedTag(allTags[key].tag)}
                  key={allTags[key].tag.label}
                >
                  {allTags[key].tag.label}
                </div>
              ))}
        </div>
        <div className={styles.right}>
          {/* <pre>{JSON.stringify(selectedTag, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(allTags, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(allTags, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(selectedTagItems, null, 2)}</pre> */}
          <TutorialSlider
            swiper={{
              slidesPerView: 1,
              navigation: false,
              breakpoints: {
                740: {
                  slidesPerView: 1,
                },
                1080: {
                  slidesPerView: 2,
                },
              },
            }}
            slides={selectedTagItems ?? []}
          />
        </div>
      </div>
    </div>
  );
}
