import React, { ChangeEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import cn from "classnames";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./tutorial-card.module.scss";
import { string_to_slug } from "@site/src/util";
import { CircleEmpty, CircleFull, Clock, Tag } from "../icons/icons";

export default function TutorialCard({
  title,
  description,
  category,
  permalink,
  tags,
  level,
  duration,
}): JSX.Element {
  const handleClick = () => {
    window.open(permalink, "_self");
  };

  const Levels = () => {
    console.log("level", level);
    switch (level) {
      case "easy":
        return (
          <>
            <CircleFull />
            <CircleEmpty />
            <CircleEmpty />
          </>
        );
      case "intermediate":
        return (
          <>
            <CircleFull />
            <CircleFull />
            <CircleEmpty />
          </>
        );
      default:
        console.log("level", level);
        return (
          <>
            <CircleFull />
            <CircleFull />
            <CircleFull />
          </>
        );
    }
  };

  return (
    <div className={styles.tutorialCard} onClick={handleClick}>
      {/* <Link to={permalink} className={ styles.imgLink }>
                <img src={ useBaseUrl(`/img/categories/${string_to_slug(category)}.svg`) } />
            </Link> */}
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>{description}</div>
      <div className={styles.meta}>
        {level && (
          <div className={styles.level}>
            <Levels />
            <span>{level}</span>
          </div>
        )}
        <div className={styles.tags}>
          {tags?.map((tag, idx) => (
            // <Link to={`/tags/${string_to_slug(tag)}`} className="tag">
            //   {tag}
            // </Link>
            <Link to={`#`} className="tag" key={`${tag.label}-${idx}`}>
              <Tag /> {tag.label}
            </Link>
          ))}
        </div>
        {duration && (
          <div className={styles.duration}>
            <Clock />
            <span>{duration}</span>
          </div>
        )}
      </div>
    </div>
  );
}
