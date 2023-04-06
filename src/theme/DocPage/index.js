import React, { useEffect, useReducer, useState, version } from 'react';
import clsx from 'clsx';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
  PageMetadata,
} from '@docusaurus/theme-common';
import {
  docVersionSearchTag,
  DocsSidebarProvider,
  DocsVersionProvider,
  useDocRouteMetadata,
} from '@docusaurus/theme-common/internal';
import DocPageLayout from '@theme/DocPage/Layout';
import NotFound from '@theme/NotFound';
import SearchMetadata from '@theme/SearchMetadata';
import { DocTaskContext, DocTaskDispatchContext } from '@site/src/components/task/doc-task-context';

function DocPageMetadata(props) {
  const {versionMetadata} = props;
  
  return (
    <>
      <SearchMetadata
        version={versionMetadata.version}
        tag={docVersionSearchTag(
          versionMetadata.pluginId,
          versionMetadata.version,
        )}
      />
      <PageMetadata>
        {versionMetadata.noIndex && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </PageMetadata>
    </>
  );
}
export default function DocPage(props) {
  const {versionMetadata} = props;
  const currentDocRouteMetadata = useDocRouteMetadata(props);

  if (!currentDocRouteMetadata) {
    return <NotFound />;
  }
  const {docElement, sidebarName, sidebarItems} = currentDocRouteMetadata;

  const [tasks, dispatch] = useReducer(
    tasksReducer,
    []
  );

  function tasksReducer(tasks, action) {
    
    switch (action.type) {
      case 'added': {
        const ret = tasks.find( t => t.id === action.id && t.page === action.page )
          ? tasks 
          : [...tasks, {
            id: action.id,
            page: action.page,
            mandatory: action.mandatory,
            checked: false
          }]

        return ret
      }
      case 'changed': {
        return tasks.map(t => {
          if (t.id === action.id && t.page === action.page ) {
            return {
              ...t,
              checked: !t.checked,
            };
          } else {
            return t;
          }
        });
      }
    }
  }
  
  return (
    <>
      <DocPageMetadata {...props} />
      <HtmlClassNameProvider
        className={clsx(
          // TODO: it should be removed from here
          ThemeClassNames.wrapper.docsPages,
          ThemeClassNames.page.docsDocPage,
          props.versionMetadata.className,
        )}>
        <DocTaskContext.Provider value={ tasks }>
          <DocTaskDispatchContext.Provider value={ dispatch }>
            <DocsVersionProvider version={versionMetadata}>
              <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
                <DocPageLayout>{docElement}</DocPageLayout>
              </DocsSidebarProvider>
            </DocsVersionProvider>
          </DocTaskDispatchContext.Provider>
        </DocTaskContext.Provider>
      </HtmlClassNameProvider>
    </>
  );
}
