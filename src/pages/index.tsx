import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/home";

import styles from "./index.module.scss";
import Head from "@docusaurus/Head";
import TutorialSlider from "../components/tutorial/tutorial-slider";
import { ArrowDown } from "../components/icons/icons";
import { StudyPaths } from "../components/home/study-paths";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Polkadot Study`}
      description="Developer Tutorials for Navigating the Polkadot Ecosystem"
    >
      {/* <HomepageHeader /> */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Unbounded&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className={styles.mainHome}>
        <section className={styles.sectionIntro}>
          <div className={styles.logoWrap}>
            <img
              className={styles.polkadotLogo}
              src="img/polkadot_pink.svg"
              alt="Polkadot Logo"
              width={500}
              height={500}
            />
            <div className={styles.logoTitle}>
              <h1>
                Polkadot<span>Study</span>
              </h1>
              {/* <h2>
                Work in Progress -{" "}
                <a href="/docs/authors">Looking for Authors</a>
              </h2> */}
              <p>Educational hub for developers by developers</p>
              <Link to="#tutorials">
                <ArrowDown strokeWidth="3" />
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.sectionTutorials}>
          <h2 id="tutorials">Tutorials</h2>
          <p>
            Learn how to navigate the polkadot ecosystem in our step-by-step
            tutorials. All tutorials are written by developers from the polkadot
            community. Polkadot.study is the perfect place to start your
            Polkadot journey as a developer. We cover many different subjects
            from both frontend and backend development.
          </p>
          <TutorialSlider></TutorialSlider>
        </section>
        <section className={styles.sectionAbout}>
          <div>
            <div className={styles.aboutLeft}>
              <h2>About</h2>
              <p>
                Polkadot.study is an open educational platform for developers by
                developers and is aiming to provide good educational content in
                the form of tutorials / videos with interactive learning
                exercises.
              </p>
              <p>
                It provides the infrastructure for submitting tutorials in a
                well organized, accessible way as well as fund the creation of
                professional tutorials. It allows readers to learn about
                concepts relevant to the Dotsama ecosystem by providing an entry
                point for tutorials, documentation and repositories for
                studying.
              </p>
              <p>
                New content can easily be submitted by anyone with knowledge of
                git in the form of Pull Requests that can be authored by the
                repository team. The platform aims to be open to anyone: with a
                different skill level of the readers as well as a multitude of
                authors. It was first funded by the Kusama treasury in March
                2023 after a a successful referendum.
              </p>
            </div>
            <div className={styles.aboutRight}>
              <canvas></canvas>
            </div>
          </div>
        </section>
        <section className={styles.sectionStudyPaths}>
          <h2>Study Paths</h2>
          <StudyPaths />
        </section>
        <section className={styles.sectionParticipate}>
          <h2>Participate</h2>
        </section>
      </main>
    </Layout>
  );
}
