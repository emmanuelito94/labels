/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/* globals InlineEditor, console, window, document */

import { CS_CONFIG } from '@ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js';

const inlineInjectElements = document.querySelectorAll( '#snippet-inline-editor [data-inline-inject]' );

Array.from( inlineInjectElements ).forEach( inlineElement => {
	const config = {
		ui: {
			viewportOffset: {
				top: window.getViewportTopOffsetConfig()
			}
		},
		toolbar: {
			items: [
				'undo', 'redo',
				'|', 'heading',
				'|', 'bold', 'italic',
				'|', 'link', 'uploadImage', 'insertTable', 'mediaEmbed',
				'|', 'bulletedList', 'numberedList', 'outdent', 'indent'
			]
		},
		cloudServices: CS_CONFIG,
		licenseKey: 'GPL'
	};

	if ( inlineElement.tagName.toLowerCase() == 'header' ) {
		config.removePlugins = [
			'Blockquote',
			'Image',
			'ImageCaption',
			'ImageStyle',
			'ImageToolbar',
			'ImageUpload',
			'List',
			'EasyImage',
			'CKFinder',
			'CKFinderUploadAdapter'
		];
		config.toolbar.items = [ 'heading', '|', 'bold', 'italic', 'link' ];
	} else {
		config.image = {
			toolbar: [
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
				'|',
				'toggleImageCaption',
				'imageTextAlternative'
			]
		};
	}

	InlineEditor
		.create( inlineElement, config )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( err => {
			console.error( err );
		} );
} );
