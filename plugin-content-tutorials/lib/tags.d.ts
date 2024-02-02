/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference path="../src/plugin-content-docs.d.ts" />
/// <reference types="@docusaurus/plugin-content-docs/src/plugin-content-docs.js" />
import type { VersionTags } from "./types";
import type { DocMetadata, DocMetadataBase } from "@docusaurus/plugin-content-docs";
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
export declare function groupTaggedItemsByLabel(items: readonly DocMetadataBase[], 
/**
 * A callback telling me how to get the tags list of the current item. Usually
 * simply getting it from some metadata of the current item.
 */
getItemTags: (item: DocMetadataBase) => readonly TutorialTag[]): {
    [permalink: string]: TaggedItemGroup<DocMetadataBase | Partial<DocMetadataBase>>;
};
export declare function getVersionTags(docs: DocMetadata[]): VersionTags;
export declare function getTaggedTutorials(tutorials: DocMetadata[]): any;
export {};
