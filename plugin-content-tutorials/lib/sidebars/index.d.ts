/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference path="../../src/plugin-content-docs.d.ts" />
/// <reference types="@docusaurus/plugin-content-docs/src/plugin-content-docs.js" />
import type { PluginOptions } from '@docusaurus/plugin-content-docs';
import type { SidebarsConfig, Sidebars, SidebarProcessorParams } from './types';
export declare const DefaultSidebars: SidebarsConfig;
export declare const DisabledSidebars: SidebarsConfig;
export declare function resolveSidebarPathOption(siteDir: string, sidebarPathOption: PluginOptions['sidebarPath']): PluginOptions['sidebarPath'];
export declare function loadSidebarsFile(sidebarFilePath: string | false | undefined): Promise<SidebarsConfig>;
export declare function loadSidebars(sidebarFilePath: string | false | undefined, options: SidebarProcessorParams): Promise<Sidebars>;
