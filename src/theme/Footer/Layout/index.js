import React from "react";
import clsx from "clsx";
import styles from "../styles.module.scss";
import Link from "@docusaurus/Link";
import { GitHub } from "@site/src/components/icons/icons";
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className={styles.footerTop}>
        <div className={styles.footerLinks}>
          <Link className={styles.logo} to="#">
            Polkadot Developer Tutorials
          </Link>
          <Link className={styles.logo} to="/about">
            About
          </Link>
          <Link
            className={styles.logo}
            to="/docs/authors/new-tutorial-on-polkadot-study/intro"
          >
            For Authors
          </Link>
        </div>
        <div className={styles.footerLogos}>
          <Link to="https://github.com/PolkadotStudy/polkadot.study">
            <GitHub />
          </Link>
        </div>
      </div>
      <div className={styles.byLine}>
        <div>
          &copy; {new Date().getFullYear()} Polkadot Study. All rights reserved
        </div>
        <div>
          Funded By the{" "}
          <Link to="https://guide.kusama.network/docs/learn-treasury/">
            Kusama Treasury
          </Link>
          . This is a community site and in no way incorporated with Parity or
          Polkadot
        </div>
        <div>
          Built with <Link to="https://docusaurus.io/">Docusaurus</Link>
        </div>
      </div>
    </footer>
  );
}
