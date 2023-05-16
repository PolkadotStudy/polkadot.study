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

  substrateInBitsSidebar: [
    {
      type: "category",
      label: "Substrate in Bits",
      items: [
        "index",
        {
          type: "autogenerated",
          dirName: "substrate-in-bits/docs",
        },
      ],
    },
  ],

  polkadotWalletSidebar: [
    "wallet-with-polkadot-js-and-react-with-typescript/intro",
    "wallet-with-polkadot-js-and-react-with-typescript/step1",
    "wallet-with-polkadot-js-and-react-with-typescript/step2",
    "wallet-with-polkadot-js-and-react-with-typescript/step3",
    "wallet-with-polkadot-js-and-react-with-typescript/step4",
    "wallet-with-polkadot-js-and-react-with-typescript/step5",
    "wallet-with-polkadot-js-and-react-with-typescript/conclusion",
  ],
};

module.exports = sidebars;
