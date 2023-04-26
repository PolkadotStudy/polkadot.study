import clsx from "clsx";
import React, { useState } from "react";

import styles from "./study-paths.module.scss";
import TutorialSlider from "../tutorial/tutorial-slider";

const allTagsWithDescription = [
  {
    tag: "polkadot-js",
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
  const [selectedTag, setSelectedTag] = useState("polkadot-js");

  const description = allTagsWithDescription.find(
    (tag) => tag.tag === selectedTag
  ).description;

  return (
    <div className={styles.studyPaths}>
      <div className={styles.left}>
        {allTagsWithDescription?.map((tag) => (
          <div
            className={clsx(styles.tag, "tag", {
              [styles.selected]: tag.tag === selectedTag,
            })}
            onClick={() => setSelectedTag(tag.tag)}
          >
            {tag.tag}
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <h3>{selectedTag}</h3>
        <p>{description}</p>
        <TutorialSlider
          swiper={{
            slidesPerView: 2,
            breakpoints: {},
            navigation: false,
          }}
        />
      </div>
    </div>
  );
}
