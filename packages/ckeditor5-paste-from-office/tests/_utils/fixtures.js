/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

// Import fixtures.
import { fixtures as basicStyles, browserFixtures as basicStylesBrowser } from '../_data/basic-styles/index.js';
import { fixtures as image, browserFixtures as imageBrowser } from '../_data/image/index.js';
import { fixtures as link, browserFixtures as linkBrowser } from '../_data/link/index.js';
import { fixtures as list, browserFixtures as listBrowser } from '../_data/list/index.js';
import { fixtures as spacing, browserFixtures as spacingBrowser } from '../_data/spacing/index.js';
import { fixtures as googleDocsBoldWrapper, browserFixtures as googleDocsBoldWrapperBrowser }
	from '../_data/paste-from-google-docs/bold-wrapper/index.js';
import { fixtures as googleDocsList, browserFixtures as googleDocsListBrowser } from '../_data/paste-from-google-docs/lists/index.js';
import { fixtures as table } from '../_data/table/index.js';
import { fixtures as pageBreak } from '../_data/page-break/index.js';
import { fixtures as fontWithoutTableProperties } from '../_data/font-without-table-properties/index.js';
import { fixtures as googleDocsBrParagraphs } from '../_data/paste-from-google-docs/br-paragraph/index.js';
import { fixtures as smartTags } from '../_data/other/index.js';
import { fixtures as bookmark } from '../_data/bookmark/index.js';

// Generic fixtures.
export const generic = {
	'basic-styles': basicStyles,
	image,
	link,
	list,
	spacing,
	'google-docs-bold-wrapper': googleDocsBoldWrapper,
	'google-docs-list': googleDocsList,
	'google-docs-br-paragraphs': googleDocsBrParagraphs,
	table,
	'page-break': pageBreak,
	'font-without-table-properties': fontWithoutTableProperties,
	'smart-tags': smartTags,
	bookmark
};

// Browser specific fixtures.
export const browser = {
	'basic-styles': basicStylesBrowser,
	image: imageBrowser,
	link: linkBrowser,
	list: listBrowser,
	spacing: spacingBrowser,
	'google-docs-bold-wrapper': googleDocsBoldWrapperBrowser,
	'google-docs-list': googleDocsListBrowser
};
