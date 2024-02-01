/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import _, { pick } from "lodash";
import { getTagVisibility, groupTaggedItems } from "@docusaurus/utils";
import type { VersionTags } from "./types";
import type {
  DocMetadata,
  DocMetadataBase,
} from "@docusaurus/plugin-content-docs";

export type TutorialTag = {
  label: string;
  permalink: string;
  description?: string;
};

type TaggedItemGroup<Item> = {
  tag: TutorialTag;
  items: Item[];
};

/**
 * Permits to group docs/blog posts by tag (provided by front matter).
 *
 * @returns a map from tag permalink to the items and other relevant tag data.
 * The record is indexed by permalink, because routes must be unique in the end.
 * Labels may vary on 2 MD files but they are normalized. Docs with
 * label='some label' and label='some-label' should end up in the same page.
 */
export function groupTaggedItemsByLabel(
  items: readonly DocMetadataBase[],
  /**
   * A callback telling me how to get the tags list of the current item. Usually
   * simply getting it from some metadata of the current item.
   */
  getItemTags: (item: DocMetadataBase) => readonly TutorialTag[]
): {
  [permalink: string]: TaggedItemGroup<
    DocMetadataBase | Partial<DocMetadataBase>
  >;
} {
  const result: {
    [permalink: string]: TaggedItemGroup<
      DocMetadataBase | Partial<DocMetadataBase>
    >;
  } = {};

  // console.log("items", items);

  items.forEach((item) => {
    getItemTags(item).forEach((tag) => {
      // console.log("tag", tag);
      const tagDescription = items.find(
        (item) => item.permalink === tag.permalink
      )?.description;

      // console.log("tagDescription", tagDescription);

      // Init missing tag groups
      // TODO: it's not really clear what should be the behavior if 2 tags have
      // the same permalink but the label is different for each
      // For now, the first tag found wins
      result[tag.label] ??= {
        tag: {
          ...tag,
          description: tagDescription ?? "",
        },
        items: [],
      };

      // Add item to group
      result[tag.label]!.items.push({
        ...pick(item, [
          "title",
          "description",
          "permalink",
          "tags",
          "lastUpdatedAt",
          "level",
          "duration",
        ]),
      });
    });
  });

  // console.log("result", result);

  // If user add twice the same tag to a md doc (weird but possible),
  // we don't want the item to appear twice in the list...
  Object.values(result).forEach((group) => {
    group.items = _.uniq(group.items);
  });

  return result;
}

export function getVersionTags(docs: DocMetadata[]): VersionTags {
  const groups = groupTaggedItems(docs, (doc) => doc.tags);
  return _.mapValues(groups, ({ tag, items: tagDocs }) => {
    const tagVisibility = getTagVisibility({
      items: tagDocs,
      isUnlisted: (item) => item.unlisted,
    });
    return {
      label: tag.label,
      docIds: tagVisibility.listedItems.map((item) => item.id),
      permalink: tag.permalink,
      unlisted: tagVisibility.unlisted,
    };
  });
}

export function getTaggedTutorials(tutorials: DocMetadata[]): any {
  const groups = groupTaggedItemsByLabel(
    tutorials,
    (tutorial) => tutorial.tags
  );
  return groups;
}
