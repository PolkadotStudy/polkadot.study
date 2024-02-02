import React, { useReducer } from "react";
import clsx from "clsx";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import {
  DocsSidebarProvider,
  useDocRootMetadata,
} from "@docusaurus/theme-common/internal";
import DocRootLayout from "@theme/DocRoot/Layout";
import NotFoundContent from "@theme/NotFound/Content";
import {
  DocTaskContext,
  DocTaskDispatchContext,
} from "../../components/task/doc-task-context";
export default function DocRoot(props) {
  const currentDocRouteMetadata = useDocRootMetadata(props);
  if (!currentDocRouteMetadata) {
    // We only render the not found content to avoid a double layout
    // see https://github.com/facebook/docusaurus/pull/7966#pullrequestreview-1077276692
    return <NotFoundContent />;
  }
  const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;

  const [tasks, dispatch] = useReducer(tasksReducer, []);

  function tasksReducer(tasks, action) {
    switch (action.type) {
      case "added": {
        const ret = tasks.find(
          (t) => t.id === action.id && t.page === action.page
        )
          ? tasks
          : [
              ...tasks,
              {
                id: action.id,
                page: action.page,
                mandatory: action.mandatory,
                checked: false,
              },
            ];

        return ret;
      }
      case "changed": {
        return tasks?.map((t) => {
          if (t.id === action.id && t.page === action.page) {
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
    <HtmlClassNameProvider className={clsx(ThemeClassNames.page.docsDocPage)}>
      <DocTaskContext.Provider value={tasks}>
        <DocTaskDispatchContext.Provider value={dispatch}>
          <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
            <DocRootLayout>{docElement}</DocRootLayout>
          </DocsSidebarProvider>
        </DocTaskDispatchContext.Provider>
      </DocTaskContext.Provider>
    </HtmlClassNameProvider>
  );
}
