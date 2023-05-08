import React from "react";
import { ArrowRight } from "../icons/icons";
import clsx from "clsx";

import styles from "./button.module.scss";
import Link from "@docusaurus/Link";

export default function Button({ to, children, className }) {
  return (
    <div className={clsx(styles.button, className)}>
      <Link to={to} className={styles.buttonLink}>
        {children}
        <span>
          <ArrowRight strokeWidth="3" />
        </span>
      </Link>
    </div>
  );
}
