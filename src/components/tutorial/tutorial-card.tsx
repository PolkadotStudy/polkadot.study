import React from "react";
import Link from "@docusaurus/Link";

import styles from "./tutorial-card.module.scss";
import {
  CircleEmpty,
  CircleFull,
  Clock,
  Tag,
  SubstrateLogo,
  PolkadotLogo,
} from "../icons/icons";
import clsx from "clsx";

export default function TutorialCard({
  title,
  description,
  permalink,
  tags,
  level,
  duration,
  limitedWidth = true,
}): JSX.Element {
  const handleClick = () => {
    window.open(permalink, "_self");
  };

  const Levels = () => {
    switch (level) {
      case "easy":
      case "beginner":
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
        return (
          <>
            <CircleFull />
            <CircleEmpty />
            <CircleEmpty />
          </>
        );
    }
  };

  return (
    <div
      className={clsx(styles.tutorialCard, limitedWidth && styles.limitedWidth)}
      onClick={handleClick}
    >
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
            <Link to={`#`} className="tag" key={`${tag.label}-${idx}`}>
              {tag.label === "substrate" && (
                <>
                  <Tag />
                  <SubstrateLogo />
                </>
              )}
              {tag.label === "polkadot.js" && (
                <>
                  <PolkadotLogo />
                  polkadot&#123;.js&#125;
                </>
              )}
              {!["substrate", "polkadot.js"].includes(tag.label) && (
                <>
                  <Tag /> {tag.label}
                </>
              )}
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
