import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Tag from "@theme/Tag";
import { Tag as TagIcon } from "../../components/icons/icons";

import { string_to_slug } from "@site/src/util";
import styles from "./styles.module.scss";
import Link from "@docusaurus/Link";

export default function TagsListInline({ tags }) {
  return (
    <>
      <b className={styles.tagText}>
        <Translate
          id="theme.tags.tagsListLabel"
          description="The label alongside a tag list"
        >
          Tags
        </Translate>
      </b>
      <ul className={clsx(styles.tags, "padding--none", "margin-left--sm")}>
        {tags?.map(({ label, permalink: tagPermalink }) => (
          <li
            key={tagPermalink}
            className={clsx(styles.tag, `tag-${string_to_slug(label)}`)}
          >
            {/* <Tag label={label} permalink={tagPermalink.replace('/tags/', '/category/')} /> */}
            <TagIcon />
            <Link to={tagPermalink}>{label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
