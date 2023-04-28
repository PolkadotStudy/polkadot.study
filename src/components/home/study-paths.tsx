import clsx from "clsx";
import React, { useState } from "react";

import styles from "./study-paths.module.scss";
import TutorialSlider from "../tutorial/tutorial-slider";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";

const allTagsWithDescription = [
  {
    tag: "polkadot.js",
    description:
      "Polkadot JS API  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, ex deleniti. Eum dignissimos rerum, quisquam fuga sapiente nihil eaque nemo excepturi, voluptas adipisci officia saepe eligendi alias quaerat sed maiores.",
  },
  {
    tag: "ink!",
    description:
      "Ink! Smart Contracts Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, ex deleniti. Eum dignissimos rerum, quisquam fuga sapiente nihil eaque nemo excepturi, voluptas adipisci officia saepe eligendi alias quaerat sed maiores.",
  },
  {
    tag: "substrate",
    description:
      "Substrate Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, ex deleniti. Eum dignissimos rerum, quisquam fuga sapiente nihil eaque nemo excepturi, voluptas adipisci officia saepe eligendi alias quaerat sed maiores.",
  },
  {
    tag: "nextjs",
    description:
      "NextJS Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, ex deleniti. Eum dignissimos rerum, quisquam fuga sapiente nihil eaque nemo excepturi, voluptas adipisci officia saepe eligendi alias quaerat sed maiores.",
  },
  {
    tag: "rust",
    description:
      "Rust Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, ex deleniti. Eum dignissimos rerum, quisquam fuga sapiente nihil eaque nemo excepturi, voluptas adipisci officia saepe eligendi alias quaerat sed maiores.",
  },
];

export function StudyPaths() {
  // const description = allTagsWithDescription.find(
  //   (tag) => tag.tag === selectedTag
  // ).description;

  const allTags = usePluginData(
    "docusaurus-plugin-content-tutorials",
    "tutorials"
  ).tags;
  // const tutorials = globalData["docusaurus-plugin-content-tutorials"].tutorials;

  const [selectedTag, setSelectedTag] = useState("polkadot.js");

  const selectedTagItems = allTags[selectedTag]?.items;

  return (
    <div className={styles.studyPaths}>
      <div className={styles.left}>
        {allTags &&
          Object.keys(allTags)?.map((key, index) => (
            <div
              className={clsx(styles.tag, "tag", {
                [styles.selected]: allTags[key].tag.label === selectedTag,
              })}
              onClick={() => setSelectedTag(allTags[key].tag.label)}
              key={allTags[key].tag.label}
            >
              {allTags[key].tag.label}
            </div>
          ))}
      </div>
      <div className={styles.right}>
        <h3>{selectedTag}</h3>
        {/* <p>{JSON.stringify(allTags[selectedTag])}</p> */}
        {/* <p>{description}</p> */}
        {/* <pre>{JSON.stringify(allTags, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(selectedTagItems, null, 2)}</pre> */}
        <TutorialSlider
          swiper={{
            slidesPerView: 2,
            breakpoints: {},
            navigation: false,
          }}
          slides={selectedTagItems}
        />
      </div>
    </div>
  );
}
