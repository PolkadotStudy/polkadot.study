import clsx from "clsx";
import React, { useEffect, useState } from "react";

import styles from "./grill-chat.module.scss";

export default function Grill() {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const init = async () => {
      const { default: grill } = await import("@subsocial/grill-widget");
      grill?.init({
        hub: {
          id: 1014,
        },
      });
    };

    init();
  }, []);

  return (
    <>
      <div
        id="grill"
        className={clsx(styles.grill, collapsed && styles.collapsed)}
      ></div>
      <div
        className={styles.grillButton}
        onClick={() => setCollapsed(!collapsed)}
      >
        <img
          src="/icons/grillchat.svg"
          alt="grillchat icon"
          className={styles.grillIcon}
        />
      </div>
    </>
  );
}
