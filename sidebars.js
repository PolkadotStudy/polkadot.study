/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const sidebars = {
  // But you can create a sidebar manually
  tokengatedSidebar: [
    "tokengated-polkadot-next-js/intro",
    "tokengated-polkadot-next-js/setup",
    "tokengated-polkadot-next-js/connecting-to-the-wallet-browser-extension",
    "tokengated-polkadot-next-js/authentication-with-next-auth",
    "tokengated-polkadot-next-js/conclusion",
  ],

  // add a sidebar for your tutorial here like
  // yourTutorialSidebar: [
  //  {
  //    type: "category",
  //    label: "Your Tutorial Title",
  //    items: ["your-tutorial-folder/intro", <...other items >],
  //  },
};

module.exports = sidebars;
