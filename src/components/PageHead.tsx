import React from "react";
import Head from "@docusaurus/Head";

export default function PageHead() {
  return (
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

      <title>
        Polkadot Study - Developer Tutorials for navigating the Polkadot /
        Kusama Ecosystem
      </title>
      <meta
        name="title"
        content="Polkadot Study - Developer Tutorials for navigating the Polkadot / Kusama Ecosystem"
      />
      <meta
        name="description"
        content="Polkadot.study is the place to start your Polkadot journey as a developer. We cover many different subjects from both frontend and blockchain development."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://polkadot.study/" />
      <meta
        property="og:title"
        content="Polkadot Study - Developer Tutorials for navigating the Polkadot / Kusama Ecosystem"
      />
      <meta
        property="og:description"
        content="Polkadot.study is the place to start your Polkadot journey as a developer. We cover many different subjects from both frontend and blockchain development."
      />
      <meta
        property="og:image"
        content="https://polkadot.study/polkadot-study.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://polkadot.study/" />
      <meta
        property="twitter:title"
        content="Polkadot Study - Developer Tutorials for navigating the Polkadot / Kusama Ecosystem"
      />
      <meta
        property="twitter:description"
        content="Polkadot.study is the place to start your Polkadot journey as a developer. We cover many different subjects from both frontend and blockchain development."
      />
      <meta
        property="twitter:image"
        content="https://polkadot.study/polkadot-study.png"
      />
    </Head>
  );
}
