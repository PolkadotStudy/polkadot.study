import React, { ChangeEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import cn from "classnames";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./tutorial-card.module.scss";
import { string_to_slug } from "@site/src/util";

export default function TutorialCard({
  title,
  description,
  category,
  permalink,
  tags,
  level,
}): JSX.Element {
  const handleClick = () => {
    window.open(permalink, "_self");
  };

  return (
    <div className={styles.tutorialCard} onClick={handleClick}>
      {/* <Link to={permalink} className={ styles.imgLink }>
                <img src={ useBaseUrl(`/img/categories/${string_to_slug(category)}.svg`) } />
            </Link> */}
      <h3>{title}</h3>
      <div className={styles.description}>{description}</div>
      <div className={styles.meta}>
        <div className={styles.tags}>
          <FontAwesomeIcon icon={icon({ name: "tags" })} />
          {tags?.map((tag) => (
            // <Link to={`/tags/${string_to_slug(tag)}`} className="tag">
            //   {tag}
            // </Link>
            <Link to={`#`} className="tag">
              {tag}
            </Link>
          ))}
        </div>
        <div className={styles.level}>
          <FontAwesomeIcon icon={icon({ name: "ranking-star" })} />
          <span>{level}</span>
        </div>
      </div>
    </div>
  );
}
