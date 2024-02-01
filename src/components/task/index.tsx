import React, { ReactNode, useContext, useEffect, useRef } from "react";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

import styles from "./task.module.scss";
import { getLabelFromChildren, string_to_slug } from "@site/src/util";
import { DocTaskContext, DocTaskDispatchContext } from "./doc-task-context";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";

export default function Task({
  caption,
  mandatory = true,
  children,
}: {
  caption?: string;
  mandatory: boolean;
  children: ReactNode;
}): JSX.Element {
  const ref = useRef();
  const location = useLocation();
  const dispatch = useContext(DocTaskDispatchContext);

  const taskId = children
    ? string_to_slug(getLabelFromChildren(children))
    : uuidv4();

  const tasks = useContext(DocTaskContext);
  const task = tasks.find((t) => t.id === taskId);
  const checked = task ? task.checked : false;

  useEffect(() => {
    dispatch({
      type: "added",
      page: location.pathname,
      id: taskId,
      checked: false,
      mandatory,
    });
  }, []);

  const onChangeInput = () => {
    dispatch({
      type: "changed",
      id: taskId,
      page: location.pathname,
    });
  };

  return (
    <div
      className={clsx(
        "ps-task flex",
        mandatory && "ps-task-mandatory",
        styles.task,
        checked && styles.complete
      )}
      ref={ref}
    >
      <div className={styles.title}>Task!</div>
      <label className={styles.taskContent}>
        <input
          id={taskId}
          className="task-checkbox"
          type="checkbox"
          checked={checked}
          onChange={onChangeInput}
        />
        <span>{children}</span>
      </label>
    </div>
  );
}
