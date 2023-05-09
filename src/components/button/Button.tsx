import React from "react";
import { ArrowRight } from "../icons/icons";
import clsx from "clsx";

import styles from "./button.module.scss";
import Link from "@docusaurus/Link";

export default function Button({
  to,
  arrow = true,
  children,
  className,
  style,
  ...props
}) {
  return (
    <div className={clsx(styles.button, className)} style={style}>
      <Link to={to} className={styles.buttonLink} {...props}>
        {children}
        {arrow && (
          <span>
            <ArrowRight strokeWidth="3" />
          </span>
        )}
      </Link>
    </div>
  );
}
