/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* global document, console, window */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import ArticlePluginSet from '@ckeditor/ckeditor5-core/tests/_utils/articlepluginset';
import ImageResize from '../../src/imageresize';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';

import { CS_CONFIG } from '@ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';

const commonConfig = {
	plugins: [
		ArticlePluginSet,
		ImageResize,
		Indent,
		IndentBlock,
		CloudServices,
		EasyImage
	],
	toolbar: [ 'heading', '|', 'bold', 'italic', 'link',
		'bulletedList', 'numberedList', 'blockQuote', 'insertTable', 'undo', 'redo', 'outdent', 'indent' ],
	image: {
		resizeUnit: 'px',
		toolbar: [ 'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight', '|', 'imageResize' ],
		styles: [
			'alignLeft',
			'alignCenter',
			'alignRight'
		]
	},
	cloudServices: CS_CONFIG
};

ClassicEditor
	.create( document.querySelector( '#editor' ), commonConfig )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );

ClassicEditor
	.create( document.querySelector( '#fancy-editor' ), commonConfig )
	.then( editor => {
		window.fancyEditor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );

ClassicEditor
	.create( document.querySelector( '#editor-other-units' ), commonConfig )
	.then( editor => {
		window.editorOtherUnits = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
