# Website

Polkadot Study is a community website to host polkadot related developer
tutorials in one place. Anyone can contribute by writing a tutorial and
submitting a pull request.

[Website](https://polkadot.study/)

## New Tutorial

1. Open a new Github Discussion here:
   https://github.com/PolkadotStudy/polkadot.study/discussions/categories/new-tutorials
   and tag it with the "New Tutorial" Tag.

2. Answer the questions in the discussion template and include all relevant
   information and wait for community feedback

3. Read the Tutorial for new Authors that explains almost anything:
   https://polkadot.study/docs/authors/new-tutorial-on-polkadot-study/intro

## Running Locally

### Installation

```
$ yarn
```

```bash
git submodule init
git submodule update --remote
```

### Local Development

Before you start the dev server, you need to update git submodules as we pull
content from other repos.

```
$ yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.
