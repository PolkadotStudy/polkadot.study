import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/home";
import { listTagsByLetters } from "@docusaurus/theme-common";

import styles from "./index.module.scss";
import Head from "@docusaurus/Head";
import TutorialSlider from "../components/tutorial/tutorial-slider";
import { ArrowDown, ArrowRight } from "../components/icons/icons";
import { StudyPaths } from "../components/home/study-paths";
import Dots from "../components/three/dots";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";

import { uniqBy } from "lodash";
import PageHead from "../components/PageHead";

export default function Home(): JSX.Element {
  const allTags = usePluginData(
    "docusaurus-plugin-content-tutorials",
    "tutorials"
  ).tags;

  const getAllTutorialsSorted = () => {
    let allTutorialsSorted = [];

    Object.keys(allTags).map((key) => {
      const items = allTags[key].items[0];
      allTutorialsSorted.push(items);
    });

    allTutorialsSorted = uniqBy(allTutorialsSorted, "permalink");
    allTutorialsSorted.sort((a, b) => a.lastUpdatedAt - b.lastUpdatedAt);

    return allTutorialsSorted;
  };

  return (
    <Layout
      title={`Polkadot Study`}
      description="Developer Tutorials for Navigating the Polkadot Ecosystem"
    >
      {/* <HomepageHeader /> */}
      <PageHead />
      <main className={styles.mainHome}>
        {/* <pre>{JSON.stringify(oglobalData, null, 2)}</pre> */}
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

              <p>Educational hub for developers by developers</p>
              <Link to="#tutorials">
                <ArrowDown className={styles.updown} strokeWidth="3" />
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.sectionTutorials}>
          <h2 id="tutorials">Tutorials</h2>
          <p>
            Learn how to navigate the polkadot ecosystem as a developer in our
            step-by-step tutorials. All tutorials are written by developers from
            the polkadot community. Polkadot.study is the perfect place to start
            your Polkadot journey as a developer. We cover many different
            subjects from both frontend and blockchain development.
          </p>
          <p>Here are our latest tutorials:</p>
          <TutorialSlider
            slides={getAllTutorialsSorted()}
            style={{ marginTop: "2rem" }}
          />
          <Link to="/tutorials" className={styles.btnViewAll}>
            <button className="button button--primary">
              View All Tutorials
              <span>
                <ArrowRight strokeWidth="3" />
              </span>
            </button>
          </Link>
          {/* <pre>{JSON.stringify(allTutorialsSorted, null, 2)}</pre> */}
        </section>
        <section className={styles.sectionAbout}>
          <div className={styles.aboutLeft}>
            <h2>
              About
              <span>Tutorials by the community for the community</span>
            </h2>
            <p>
              Polkadot.study is an open educational platform for developers by
              developers and is aiming to provide good educational content in
              the form of tutorials / videos with interactive learning
              exercises.
            </p>
            <p>
              It provides the infrastructure for submitting tutorials in a well
              organized, accessible way as well as fund the creation of
              professional tutorials. It allows readers to learn about concepts
              relevant to the Dotsama ecosystem by providing an entry point for
              tutorials, documentation and repositories for studying.
            </p>
            <p>
              New content can easily be submitted by anyone with knowledge of
              git in the form of Pull Requests that can be authored by the
              repository team. The platform aims to be open to anyone: with a
              different skill level of the readers as well as a multitude of
              authors. It was first funded by the Kusama treasury in March 2023
              after a a successful referendum.
            </p>
          </div>
          <div className={styles.aboutRight}>
            <Dots />
          </div>
        </section>
        <section className={styles.sectionStudyPaths}>
          <h2>Study Paths</h2>
          <StudyPaths />
        </section>
        <section className={styles.sectionParticipate}>
          <div className={styles.participateLeft}>
            <h2>Participate</h2>
            <p className="subheading">
              Are you a developer? Have you learned something new while working
              with Polkadot? Why not share it with the community?
            </p>
            <p>
              All the code of this platform, as well as the tutorials and
              documentation is open sourced on github. New content can easily be
              submitted by anyone with knowledge of git in the form of Pull
              Requests that can be authored by the repository team. The platform
              aims to be open to anyone: with a different skill level of the
              readers as well as a multitude of authors.
            </p>
            <p>
              You can also receive funding for your work by submitting a
              referendum to Kusama or Polkadot treasury.
            </p>
            <p>
              It is very easy to participate. Just fork the repository, add your
              tutorial and wait until it is merged.
            </p>

            <Link to="/docs/authors/new-tutorial-on-polkadot-study/intro">
              <button className="button button--primary">
                Learn how to contribute
                <span>
                  <ArrowRight strokeWidth="3" />
                </span>
              </button>
            </Link>
          </div>
          <div className={styles.participateRight}>
            <Dots />
          </div>
        </section>
      </main>
    </Layout>
  );
}
