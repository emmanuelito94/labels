/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/* globals document, console, window */

import { ButtonView, Dialog, View } from '@ckeditor/ckeditor5-ui';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { Plugin } from '@ckeditor/ckeditor5-core';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

class MinimalisticModal extends Plugin {
	get requires() {
		return [ Dialog ];
	}

	init() {
		this.editor.ui.componentFactory.add( 'showModal', locale => {
			const buttonView = new ButtonView( locale );

			buttonView.set( {
				label: 'Show a modal',
				tooltip: true,
				withText: true
			} );

			buttonView.on( 'execute', () => {
				const dialog = this.editor.plugins.get( 'Dialog' );

				if ( buttonView.isOn ) {
					dialog.hide();
					buttonView.isOn = false;

					return;
				}

				buttonView.isOn = true;

				const textView = new View( locale );

				textView.setTemplate( {
					tag: 'div',
					attributes: {
						style: {
							padding: 'var(--ck-spacing-large)',
							whiteSpace: 'initial',
							width: '100%',
							maxWidth: '500px'
						},
						tabindex: -1
					},
					children: [
						'This is a sample content of the modal.',
						'You can put here text, images, inputs, buttons, etc.'
					]
				} );

				dialog.show( {
					isModal: true,
					title: 'Modal with text',
					content: textView,
					actionButtons: [
						{
							label: 'OK',
							class: 'ck-button-action',
							withText: true,
							onExecute: () => dialog.hide()
						}
					],
					onHide() { buttonView.isOn = false; }
				} );
			} );

			return buttonView;
		} );
	}
}

ClassicEditor
	.create( document.querySelector( '#ui-modal-editor' ), {
		plugins: [ Essentials, Paragraph, Bold, Italic, Underline, MinimalisticModal, Dialog ],
		toolbar: [ 'bold', 'italic', 'underline', '|', 'showModal' ]
	} )
	.then( editor => {
		window.attachTourBalloon( {
			target: window.findToolbarItem( editor.ui.view.toolbar,
				item => item.label === 'Show a modal' ),
			text: 'Click here to display a modal.',
			editor,
			tippyOptions: {
				placement: 'bottom-start'
			}
		} );
	} )
	.catch( error => {
		console.error( error.stack );
	} );
