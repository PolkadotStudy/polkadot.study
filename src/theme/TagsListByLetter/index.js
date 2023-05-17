import React from "react";
import { listTagsByLetters } from "@docusaurus/theme-common";
import styles from "./styles.module.scss";

import { Tag as TagIcon } from "../../components/icons/icons";
import clsx from "clsx";
import Link from "@docusaurus/Link";
function TagLetterEntryItem({ letterEntry }) {
  return (
    <article>
      <h2>{letterEntry.letter}</h2>
      <ul className={clsx("padding--none", styles.Tags)}>
        {letterEntry.tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Link to={tag.permalink} className={styles.tagLink}>
              <TagIcon />
              {tag.label}: {tag.count}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </article>
  );
}
export default function TagsListByLetter({ tags }) {
  const letterList = listTagsByLetters(tags);
  return (
    <section className="margin-vert--lg">
      {letterList.map((letterEntry) => (
        <TagLetterEntryItem
          key={letterEntry.letter}
          letterEntry={letterEntry}
        />
      ))}
    </section>
  );
}
