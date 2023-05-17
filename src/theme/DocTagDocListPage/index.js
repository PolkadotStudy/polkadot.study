import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  usePluralForm,
} from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import SearchMetadata from "@theme/SearchMetadata";
import TutorialCard from "@site/src/components/tutorial/tutorial-card";
import CategoryMDX from "@site/src/components/tutorial/category-mdx";

import PolkadotJs from "/tutorials/tags/polkadot-js.mdx";
import Substrate from "/tutorials/tags/substrate.mdx";
import Contribute from "/tutorials/tags/contribute.mdx";
import EditThisPage from "@theme/EditThisPage";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";
import TutorialSlider from "@site/src/components/tutorial/tutorial-slider";
import TutorialGrid from "@site/src/components/tutorial/tutorial-grid";
import { useDocsData } from "@site/../docusaurus-plugin-content-tutorials/lib/client";
import { ArrowRight } from "@site/src/components/icons/icons";

// Very simple pluralization: probably good enough for now
function useNDocsTaggedPlural() {
  const { selectMessage } = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          id: "theme.docs.tagDocListPageTitle.nDocsTagged",
          description:
            'Pluralized label for "{count} tutorials tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: "One Tutorial tagged|{count} Tutorials tagged",
        },
        { count }
      )
    );
}
function DocItem({ doc, tag }) {
  return (
    <TutorialCard
      category={tag.label}
      title={doc.title}
      description={doc.description}
      permalink={doc.permalink}
    />
  );
}

export default function DocTagDocListPage({ tag }) {
  function TagPageContent() {
    switch (tag.label) {
      case "polkadot.js":
        return <PolkadotJs />;
      case "contribute":
        return <Contribute />;
      case "substrate":
        return <Substrate />;
      default:
        return <></>;
    }
  }

  const nDocsTaggedPlural = useNDocsTaggedPlural();
  const title = translate(
    {
      id: "theme.docs.tagDocListPageTitle",
      description: "The title of the page for a docs tag",
      message: '{nDocsTagged} with "{tagName}"',
    },
    { nDocsTagged: nDocsTaggedPlural(tag.count), tagName: tag.label }
  );

  const allTags = usePluginData(
    "docusaurus-plugin-content-tutorials",
    "tutorials"
  ).tags;

  const taggedTutorials = allTags[tag.label];

  console.log("tag", tag);

  const editUrl = `https://github.com/PolkadotStudy/polkadot.study/blob/staging${tag.permalink}.mdx`;

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.docsPages,
        ThemeClassNames.page.docsTagDocListPage
      )}
    >
      <PageMetadata title={title} />
      <SearchMetadata tag="doc_tag_doc_list" />
      <Layout>
        <div className="container margin-vert--lg">
          <div className="row">
            <main className="col col--8 col--offset-2">
              {TagPageContent()}
              <header className="">
                <h1>{title}</h1>
              </header>
              <section
                className="margin-vert--lg"
                style={{ position: "relative" }}
              >
                <TutorialGrid slides={taggedTutorials?.items} big={false} />
                <Link
                  href={tag.allTagsPath}
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ArrowRight style={{ paddingRight: "0.3rem" }} />
                  View All Tags
                </Link>
              </section>
              <EditThisPage editUrl={editUrl} />
            </main>
          </div>
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
}
