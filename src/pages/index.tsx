import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.scss';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Unbounded&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <div className={styles.logoWrap}>
          <img
            className={styles.polkadotLogo}
            src="img/polkadot_pink.svg"
            alt="Polkadot Logo"
            width={500}
            height={500}
          />
          <div className={styles.logoTitle}>
            <h1>Polkadot<span>Study</span></h1>
            <h2>Work in Progress - <a href="/docs/authors">Looking for Authors</a></h2>
            <p>Educational hub for developers by developers</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
