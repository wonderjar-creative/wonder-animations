
/**
 * Main index.js file.
 * 
 * @since 0.6.0 Removed toUpperCase().
 * @since 0.1.0
 */

/**
 * Define consts.
 */
//import classnames from 'classnames';
const { assign, merge } = lodash;

const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, RangeControl, RadioControl } = wp.components;

/**
 * Add animation attributes.
 * 
 * Add the attributes we need.
 * 
 * @param   {Object} settings Original block settings.
 * @param   {string} name 	Block name.
 * @returns {Object}		Filtered block settings.
 */
function addAnimationAtts( settings, name ) {
	return assign( {}, settings, {
		attributes: merge( settings.attributes, {
			animation_name: {
				type: 'string',
				default: ''
			},
			animation_duration: {
				type: 'integer',
				default: ''
			},
			animation_delay: {
				type: 'integer',
				default: ''
			},
			animation_iteration_count: {
				type: 'integer',
				default: ''
			},
			when_to_animate: {
				type: 'string',
				default: 'viewport'
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
 */
const addAnimationAttributeControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const {
			attributes: { animation_name, animation_duration, animation_delay, animation_iteration_count, when_to_animate },
			setAttributes,
			name,
		} = props;

		const presetAnimations = wonderAnimations;
		const animationOptions = [ { label: '', value: '' } ];
		
		for (let i = 0; i < presetAnimations.length; i++) {
			animationOptions.push( { label: presetAnimations[i].label, value: presetAnimations[i].slug } );
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
							value={ animation_name }
							options={ animationOptions }
							onChange={ (value) => setAttributes( { animation_name: value } ) }
						/>
						<RangeControl
							label={ __( 'Duration', 'wonder-animations' ) }
							value={ animation_duration }
							min={ 0 }
							max={ 10 }
							step={ 0.1 }
							onChange={ ( value ) => setAttributes( { animation_duration: value } ) }
						/>
						<RangeControl
							label={ __( 'Delay', 'wonder-animations' ) }
							value={ animation_delay }
							min={ 0 }
							max={ 10 }
							step={ 0.1 }
							onChange={ ( value ) => setAttributes( { animation_delay: value } ) }
						/>
						<RangeControl
							label={ __( 'Iteration count', 'wonder-animations' ) }
							value={ animation_iteration_count }
							min={ 0 }
							max={ 10 }
							step={ 1 }
							onChange={ ( value ) => setAttributes( { animation_iteration_count: value } ) }
						/>
						<RadioControl
							label={ __( 'When to animate', 'wonder-animations' ) }
							selected={ when_to_animate }
							options={ [
								{ label: __( 'Viewport', 'wonder-animations' ), value: 'viewport' },
								{ label: __( 'Immediately', 'wonder-animations' ), value: 'immediately' }
							]}
							onChange={ ( value ) => setAttributes( { when_to_animate: value } ) }
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