import React, { useContext } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { DocTaskContext } from "@site/src/components/task/doc-task-context";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useLocation } from "@docusaurus/router";
export default function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props;

  const location = useLocation();

  const tasks = useContext(DocTaskContext);
  const unfinishedTasks = tasks?.filter(
    (t) => t.page === location.pathname && !t.checked && t.mandatory
  );
  const tasksRemaining = unfinishedTasks?.length;

  const arrowTitle = isNext ? (
    <>
      {title}
      <svg
        width="24"
        height="24"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      >
        <path d="M25 14.0086L2 14.0086" fill="none" data-nofill="true"></path>
        <path
          d="M15.8003 4L26 14.0086L15.8003 24"
          fill="none"
          data-nofill="true"
        ></path>
      </svg>
    </>
  ) : (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      >
        <path d="M3 13.9914L26 13.9914" fill="none" data-nofill="true"></path>
        <path
          d="M12.1997 24L2 13.9914L12.1997 4"
          fill="none"
          data-nofill="true"
        ></path>
      </svg>
      {title}
    </>
  );

  const btnLink = isNext && tasksRemaining ? "" : permalink;

  const handleClick = () => {
    var element = document.getElementById(unfinishedTasks[0].id);

    if (!element) return;

    var headerOffset = 130;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Link
        className={clsx(
          "pagination-nav__link",
          isNext ? "pagination-nav__link--next" : "pagination-nav__link--prev",
          tasksRemaining > 0 && "tasks-remaining"
        )}
        to={btnLink}
        onClick={tasksRemaining && tasksRemaining > 0 ? handleClick : () => {}}
        style={{ cursor: "pointer" }}
      >
        {subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
        {isNext && tasksRemaining > 0 ? (
          <div className="pagination-nav__label">
            {tasksRemaining} {tasksRemaining === 1 ? "Task" : "Tasks"} Remaining
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
            >
              <path
                d="M14.0086 3L14.0086 26"
                fill="none"
                data-nofill="true"
              ></path>
              <path
                d="M4 12.1997L14.0086 2L24 12.1997"
                fill="none"
                data-nofill="true"
              ></path>
            </svg>
          </div>
        ) : (
          <div className="pagination-nav__label">{arrowTitle}</div>
        )}
      </Link>
    </>
  );
}
