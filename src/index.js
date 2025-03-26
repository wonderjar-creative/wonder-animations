import './style.scss';
import classnames from 'classnames';
import { fetchAnimateCssClasses } from './utils/fetchAnimateCssClasses';
const { assign, merge } = lodash;
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, RangeControl, CheckboxControl } = wp.components;

/**
 * Add animation attributes.
 * 
 * Add the attributes we need.
 * 
 * @since 1.4.0 Changed attribute names.
 * @since 1.1.2 Not gravityform blocks.
 * @since 1.1.1 Attributes prefixed by wa.
 * 
 * @param   {Object} settings Original block settings.
 * @param   {string} name 	Block name.
 * @returns {Object}		Filtered block settings.
 */
function addAnimationAtts( settings, name ) {
	// Gravityform blocks throw errors.
	if ( name.indexOf( 'gravityforms' ) !== -1 ) {
		return settings;
	}

	return assign( {}, settings, {
		attributes: merge( settings.attributes, {
			waAnimationName: {
				type: 'string',
				default: ''
			},
			waAnimationDelay: {
				type: 'string',
				default: ''
			},
			waAnimationDuration: {
				type: 'string',
				default: ''
			},
			waAnimationRepeat: {
				type: 'string',
				default: ''
			},
			waResetView: {
				type: 'boolean',
				default: ''
			}
		}),
	});
}
addFilter(
	'blocks.registerBlockType',
	'wonder-animations/add-animation-atts',
	addAnimationAtts
);

/**
 * Add the controls for the attributes.
 * 
 * @since 1.4.0  Using new attribute names.
 * @since 0.13.0 Changing controls to fully use animate.css (animate.style) classes.
 * @since 0.6.0  Removed toUpperCase().
 */
const addAnimationAttributeControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const {
			attributes: { waAnimationName, waAnimationDelay, waAnimationDuration, waAnimationRepeat, waResetView },
			setAttributes,
			name,
		} = props;

		// Gravityform blocks throw errors.
		if ( name.indexOf( 'gravityforms' ) !== -1 ) {
			return <BlockEdit {...props} />;
		}

		const presetAnimations = fetchAnimateCssClasses();
		const animationOptions = [ { label: '', value: '' } ];
		
		for (let i = 0; i < presetAnimations.length; i++) {
			//console.log( presetAnimations[i] );
			animationOptions.push( { label: presetAnimations[i], value: presetAnimations[i] } );
		}

		return (
			<>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody
						title={__( 'Animation', 'wonder-animations' )}
						initialOpen={false}
					>
						<SelectControl
							label={ __( 'Name', 'wonder-animations' ) }
							value={ waAnimationName }
							options={ animationOptions }
							onChange={ ( value ) => setAttributes( { waAnimationName: value } ) }
						/>
						<SelectControl
							label={ __( 'Delay', 'wonder-animations' ) }
							value={ waAnimationDelay }
							options={[
								{ label: '', value: '' },
								{ label: __( '0.5s', 'wonder-animations' ), value: 'delay-0_5s' },
								{ label: __( '1s', 'wonder-animations' ), value: 'delay-1s' },
								{ label: __( '1.5s', 'wonder-animations' ), value: 'delay-1_5s' },
								{ label: __( '2s', 'wonder-animations' ), value: 'delay-2s' },
								{ label: __( '2.5s', 'wonder-animations' ), value: 'delay-2_5s' },
								{ label: __( '3s', 'wonder-animations' ), value: 'delay-3s' },
								{ label: __( '3.5s', 'wonder-animations' ), value: 'delay-3_5s' },
								{ label: __( '4s', 'wonder-animations' ), value: 'delay-4s' }
							]}
							onChange={ ( value ) => setAttributes( { waAnimationDelay: value } ) }
						/>
						<SelectControl
							label={ __( 'Duration', 'wonder-animations' ) }
							value={ waAnimationDuration }
							options={[
								{ label: '', value: '' },
								{ label: __( 'Slower', 'wonder-animations' ), value: 'slower' },
								{ label: __( 'Slow', 'wonder-animations' ), value: 'slow' },
								{ label: __( 'Fast', 'wonder-animations' ), value: 'fast' },
								{ label: __( 'Faster', 'wonder-animations' ), value: 'faster' }
							]}
							onChange={ ( value ) => setAttributes( { waAnimationDuration: value } ) }
						/>
						<SelectControl
							label={ __( 'Repeat', 'wonder-animations' ) }
							value={ waAnimationRepeat }
							options={[
								{ label: '', value: '' },
								{ label: __( '1', 'wonder-animations' ), value: 'repeat-1' },
								{ label: __( '2', 'wonder-animations' ), value: 'repeat-2' },
								{ label: __( '3', 'wonder-animations' ), value: 'repeat-3' },
								{ label: __( 'Infinite', 'wonder-animations' ), value: 'infinite' }
							]}
							onChange={ ( value ) => setAttributes( { waAnimationRepeat: value } ) }
						/>
						<CheckboxControl
							label={ __( 'Reset view', 'wonder-animations' ) }
							help={ __( 'Should we reset the view after leaving the viewport?', 'wonder-animations' ) }
							checked={ waResetView }
							onChange={ ( value ) => setAttributes( { waResetView: value } ) }
						/>
					</PanelBody>
				</InspectorControls>
			</>
		)
	}
}, 'addAnimationAttributeControls' );
addFilter(
	'editor.BlockEdit',
	'wonder-animations/add-animation-attribute-controls',
	addAnimationAttributeControls
);

/**
 * Add animations classes to the block.
 * 
 * @since 1.7.0
 * @param {Object} BlockListBlock Block properties.
 * @return {Object} Modified block properties.
 */
const addAnimationClasses = createHigherOrderComponent( (BlockListBlock) => {
	return (props) => {
		const {
			attributes: { waAnimationName, waAnimationDelay, waAnimationDuration, waAnimationRepeat, waResetView },
		} = props;

		if ( !waAnimationName ) {
			return <BlockListBlock {...props} />;
		}

		const animationClasses = classnames( {
			[`animate__animated`]: true,
			[`animate__${waAnimationName}`]: waAnimationName,
			[`animate__${waAnimationDelay}`]: waAnimationDelay,
			[`animate__${waAnimationDuration}`]: waAnimationDuration,
			[`animate__${waAnimationRepeat}`]: waAnimationRepeat,
		} );

		return (
			<BlockListBlock {...props} className={ animationClasses } />
		);
	}
}, 'withAddAnimationClasses' );
addFilter(
	'editor.BlockListBlock',
	'wonder-animations/add-animation-classes',
	addAnimationClasses
);

/**
 * Add anmation classes to the front end.
 * 
 * @since 1.7.0
 * @param {Object} props Block properties.
 * @param {Object} block Block object.
 * @param {Object} attributes Block attributes.
 * @return {Object} Modified block properties.
 */
function addAnimationClassesFrontEnd(props, block, attributes) {
	const {
		waAnimationName,
		waAnimationDelay,
		waAnimationDuration,
		waAnimationRepeat,
		waResetView
	} = attributes;

	if ( !waAnimationName ) {
		return props;
	}

	const animationClasses = classnames( {
		[`animate__animated`]: true,
		[`animate__${waAnimationName}`]: waAnimationName,
    [`animate__${waAnimationDelay}`]: waAnimationDelay,
    [`animate__${waAnimationDuration}`]: waAnimationDuration,
    [`animate__${waAnimationRepeat}`]: waAnimationRepeat,
	} );

	props.className = classnames( props.className, animationClasses );

	if ( waResetView ) {
		props['data-wa-reset-view'] = 'true';
	}

	return props;
}
addFilter(
	'blocks.getSaveContent.extraProps',
	'wonder-animations/add-animation-classes-front-end',
	addAnimationClassesFrontEnd
);

/**
 * Check for animations in the viewport.
 * 
 * @since 1.7.0
 */
const checkForAnimationsInViewport = () => {
	const elements = document.querySelectorAll( '.animate__animated' );

	console.log( 'checking', elements );

	elements.forEach( ( element ) => {
		const isInViewport = ( rect ) => {
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
				rect.right <= ( window.innerWidth || document.documentElement.clientWidth )
			);
		};

		const resetView = element.getAttribute( 'data-wa-reset-view' );
		const rect = element.getBoundingClientRect();

		if ( isInViewport( rect ) ) {
			element.classList.add( 'in-view' );
		} else if ( resetView ) {
			// Get the current animation name from the element's inline style
			const thisAnimName = window.getComputedStyle(element).getPropertyValue('animation-name');

			console.log(thisAnimName);

			// Set the animation name to a data attribute
			element.setAttribute('data-animation-name', thisAnimName);

			// Set the element's animation name to 'none'
			element.style.animationName = 'none';

			// Reset the animation name to blank after 50ms
			setTimeout(function () {
				element.style.animationName = '';
			}, 50);

			// Restore the animation name from the data attribute after 100ms
			setTimeout(function () {
				element.style.animationName = element.getAttribute('data-animation-name');
			}, 100);
		}
	});
}
document.addEventListener( 'DOMContentLoaded', checkForAnimationsInViewport );
document.addEventListener( 'scroll', checkForAnimationsInViewport );
document.addEventListener( 'resize', checkForAnimationsInViewport );