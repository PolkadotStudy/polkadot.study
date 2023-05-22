import clsx from "clsx";
import React, { useEffect, useState } from "react";

import styles from "./grill-chat.module.scss";

export default function Grill() {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const init = async () => {
      const { default: grill } = await import("@subsocial/grill-widget");
      grill?.init();
    };

    init();
  }, []);

  return (
    <div
      id="grillWrap"
      className={clsx(styles.grillWrap, collapsed && styles.collapsed)}
    >
      <div id="grill" className={styles.grill}></div>
      <div
        className={styles.grillButton}
        onClick={() => setCollapsed(!collapsed)}
      >
        GRILL
      </div>
    </div>
  );
}
