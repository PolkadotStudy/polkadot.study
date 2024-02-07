# Substrate tutorials

Substate tutorials is a collection of exercises that will teach you the basics
of Substrate development and broaden your skillsets through real-world use
cases.

## Getting started

Go to the tutorial
[repository](https://github.com/rusty-crewmates/substrate-tutorials), fork it,
clone it and start with the
[first exercise](https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex00-testing).  
Run the crate tests, you will see they fail. Give a look to the `README.md` and
code until all tests pass :)

If you want to run your pallet in a real runtime, you can easily edit the
`substrate-node-template` and add your pallet to its runtime. It will allow you
to interact with your code through tools like
[polkadot.js](https://polkadot.js.org/apps/#/explorer).

## Table of content

|     | name                                                                                                                       | objectives                                                                                         |
| --- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 0   | [testing](https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex00-testing)                         | learn how to write simple tests for an existing pallet                                             |
| 1   | [pallet easy](https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex01-pallet-easy)                 | write a really simple erc20-like pallet                                                            |
| 2   | [runtime](https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex02-runtime)                         | add your pallet to a substrate runtime and launch a node                                           |
| 3   | [pallet intermediate](https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex03-pallet-intermediate) | writing pallet is the bread and butter of substrate development, let's double down on those basics |
| 4   | [coupling](https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex04-pallet-coupling)                | pallets can interact with each other, in different complex ways                                    |
| 5   | [hooks](https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex05-hooks)                             | substrate allow you to write hooks that will multiply the possibilities of your chain              |
| 6   | [weights](https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex06-weights)                         | in order to be incentive the block consensus authorities fees are collected on users transactions  |
| 7   | [imbalances](https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex07-imbalances)                   | the supply of your chain token can vary, but there are some rules to respect when playing with it  |
| 8   | [genesis config](https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex08-genesis-config)           | you can give your chain an initial state before launching it                                       |
| 9   | [mock](https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex09-mock)                               | learn how to mock your runtime in order to write handy and powerfull tests                         |
| 10  | [offchain worker](https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex10-offchain-worker)         | another hook that allow nodes to do complex async computation in parallel of the chain execution   |

## Contribute

This work is open-source, financed by a Web3 Foundation grant, so it really
belongs to the community. Feel free to contribute to the repository with
anything you think could help others.
