import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import TagsListByLetter from '@theme/TagsListByLetter';
import SearchMetadata from '@theme/SearchMetadata';
export default function DocTagsListPage({tags}) {
  console.log( 'tags', tags )
  const title = translateTagsPageTitle();
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.docsPages,
        ThemeClassNames.page.docsTagsListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="doc_tags_list" />
      <Layout>
        <div className="container margin-vert--lg">
          <div className="row">
            <main className="col col--8 col--offset-2">
              Custom Tag list page
              <h1>{title}</h1>
              <TagsListByLetter tags={tags} />
            </main>
          </div>
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
}
