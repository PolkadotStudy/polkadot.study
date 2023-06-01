import clsx from "clsx";
import React, { useState } from "react";

import styles from "./study-paths.module.scss";
import TutorialSlider from "../tutorial/tutorial-slider";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";
import Button from "../button/Button";
import { pick } from "lodash";

export function StudyPaths() {
  const allTags = usePluginData(
    "docusaurus-plugin-content-tutorials",
    "tutorials"
  ).tags;

  //filter tags that are 'polkadot.js' or 'substrate'
  const allTagsFiltered = pick(allTags, "polkadot.js", "substrate");

  // const tutorials = globalData["docusaurus-plugin-content-tutorials"].tutorials;
  const [selectedTag, setSelectedTag] = useState(
    allTagsFiltered[Object.keys(allTagsFiltered)[0]]?.tag
  );

  const selectedTagItems = selectedTag
    ? allTagsFiltered[selectedTag.label]?.items
    : [];

  if (Object.keys(allTagsFiltered).length === 0) {
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
          {allTagsFiltered &&
            Object.keys(allTagsFiltered)?.map((key, index) => (
              <Button
                className={clsx(styles.tag, {
                  [styles.selected]:
                    allTagsFiltered[key].tag.label === selectedTag?.label,
                })}
                onClick={() => setSelectedTag(allTagsFiltered[key].tag)}
                key={allTagsFiltered[key].tag.label}
                arrow={false}
              >
                {allTagsFiltered[key].tag.label}
              </Button>
            ))}
        </div>
        <div className={styles.right}>
          {/* <pre>{JSON.stringify(selectedTag, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(allTags, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(allTags, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(selectedTagItems, null, 2)}</pre> */}
          <TutorialSlider
            swiper={{
              navigation: false,
            }}
            slides={selectedTagItems ?? []}
          />
          <div className={styles.btnViewAll}>
            <Button to="/tutorials/tags/">View All Tags</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
