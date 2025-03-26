/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/utils/fetchAnimateCssClasses.js":
/*!*********************************************!*\
  !*** ./src/utils/fetchAnimateCssClasses.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAnimateCssClasses: () => (/* binding */ fetchAnimateCssClasses)
/* harmony export */ });
const fetchAnimateCssClasses = () => {
  return ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat', 'backInDown', 'backInLeft', 'backInRight', 'backInUp', 'backOutDown', 'backOutLeft', 'backOutRight', 'backOutUp', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomLeft', 'fadeInBottomRight', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'fadeOutTopLeft', 'fadeOutTopRight', 'fadeOutBottomRight', 'fadeOutBottomLeft', 'flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY', 'lightSpeedInRight', 'lightSpeedInLeft', 'lightSpeedOutRight', 'lightSpeedOutLeft', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'hinge', 'jackInTheBox', 'rollIn', 'rollOut', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'];
};

/***/ }),

/***/ "./src/utils/wonder-animate.scss":
/*!***************************************!*\
  !*** ./src/utils/wonder-animate.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_wonder_animate_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/wonder-animate.scss */ "./src/utils/wonder-animate.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fetchAnimateCssClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/fetchAnimateCssClasses */ "./src/utils/fetchAnimateCssClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  assign,
  merge
} = lodash;
const {
  __
} = wp.i18n;
const {
  addFilter
} = wp.hooks;
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  RangeControl,
  CheckboxControl
} = wp.components;

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
function addAnimationAtts(settings, name) {
  // Gravityform blocks throw errors.
  if (name.indexOf('gravityforms') !== -1) {
    return settings;
  }
  return assign({}, settings, {
    attributes: merge(settings.attributes, {
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
    })
  });
}
addFilter('blocks.registerBlockType', 'wonder-animations/add-animation-atts', addAnimationAtts);

/**
 * Add the controls for the attributes.
 * 
 * @since 1.4.0  Using new attribute names.
 * @since 0.13.0 Changing controls to fully use animate.css (animate.style) classes.
 * @since 0.6.0  Removed toUpperCase().
 */
const addAnimationAttributeControls = createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      attributes: {
        waAnimationName,
        waAnimationDelay,
        waAnimationDuration,
        waAnimationRepeat,
        waResetView
      },
      setAttributes,
      name
    } = props;

    // Gravityform blocks throw errors.
    if (name.indexOf('gravityforms') !== -1) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockEdit, {
        ...props
      });
    }
    const presetAnimations = (0,_utils_fetchAnimateCssClasses__WEBPACK_IMPORTED_MODULE_2__.fetchAnimateCssClasses)();
    const animationOptions = [{
      label: '',
      value: ''
    }];
    for (let i = 0; i < presetAnimations.length; i++) {
      //console.log( presetAnimations[i] );
      animationOptions.push({
        label: presetAnimations[i],
        value: presetAnimations[i]
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(PanelBody, {
          title: __('Animation', 'wonder-animations'),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SelectControl, {
            label: __('Name', 'wonder-animations'),
            value: waAnimationName,
            options: animationOptions,
            onChange: value => setAttributes({
              waAnimationName: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SelectControl, {
            label: __('Delay', 'wonder-animations'),
            value: waAnimationDelay,
            options: [{
              label: '',
              value: ''
            }, {
              label: __('0.5s', 'wonder-animations'),
              value: 'delay-0_5s'
            }, {
              label: __('1s', 'wonder-animations'),
              value: 'delay-1s'
            }, {
              label: __('1.5s', 'wonder-animations'),
              value: 'delay-1_5s'
            }, {
              label: __('2s', 'wonder-animations'),
              value: 'delay-2s'
            }, {
              label: __('2.5s', 'wonder-animations'),
              value: 'delay-2_5s'
            }, {
              label: __('3s', 'wonder-animations'),
              value: 'delay-3s'
            }, {
              label: __('3.5s', 'wonder-animations'),
              value: 'delay-3_5s'
            }, {
              label: __('4s', 'wonder-animations'),
              value: 'delay-4s'
            }],
            onChange: value => setAttributes({
              waAnimationDelay: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SelectControl, {
            label: __('Duration', 'wonder-animations'),
            value: waAnimationDuration,
            options: [{
              label: '',
              value: ''
            }, {
              label: __('Slower', 'wonder-animations'),
              value: 'slower'
            }, {
              label: __('Slow', 'wonder-animations'),
              value: 'slow'
            }, {
              label: __('Fast', 'wonder-animations'),
              value: 'fast'
            }, {
              label: __('Faster', 'wonder-animations'),
              value: 'faster'
            }],
            onChange: value => setAttributes({
              waAnimationDuration: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SelectControl, {
            label: __('Repeat', 'wonder-animations'),
            value: waAnimationRepeat,
            options: [{
              label: '',
              value: ''
            }, {
              label: __('1', 'wonder-animations'),
              value: 'repeat-1'
            }, {
              label: __('2', 'wonder-animations'),
              value: 'repeat-2'
            }, {
              label: __('3', 'wonder-animations'),
              value: 'repeat-3'
            }, {
              label: __('Infinite', 'wonder-animations'),
              value: 'infinite'
            }],
            onChange: value => setAttributes({
              waAnimationRepeat: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CheckboxControl, {
            label: __('Reset view', 'wonder-animations'),
            help: __('Should we reset the view after leaving the viewport?', 'wonder-animations'),
            checked: waResetView,
            onChange: value => setAttributes({
              waResetView: value
            })
          })]
        })
      })]
    });
  };
}, 'addAnimationAttributeControls');
addFilter('editor.BlockEdit', 'wonder-animations/add-animation-attribute-controls', addAnimationAttributeControls);

/**
 * Add animations classes to the block.
 * 
 * @since 1.7.0
 * @param {Object} BlockListBlock Block properties.
 * @return {Object} Modified block properties.
 */
const addAnimationClasses = createHigherOrderComponent(BlockListBlock => {
  return props => {
    const {
      attributes: {
        waAnimationName,
        waAnimationDelay,
        waAnimationDuration,
        waAnimationRepeat,
        waResetView
      }
    } = props;
    if (!waAnimationName) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockListBlock, {
        ...props
      });
    }
    const animationClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [`animate__animated`]: true,
      [`animate__${waAnimationName}`]: waAnimationName,
      [`animate__${waAnimationDelay}`]: waAnimationDelay,
      [`animate__${waAnimationDuration}`]: waAnimationDuration,
      [`animate__${waAnimationRepeat}`]: waAnimationRepeat
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockListBlock, {
      ...props,
      className: animationClasses
    });
  };
}, 'withAddAnimationClasses');
addFilter('editor.BlockListBlock', 'wonder-animations/add-animation-classes', addAnimationClasses);

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
  if (!waAnimationName) {
    return props;
  }
  const animationClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [`animate__animated`]: true,
    [`animate__${waAnimationName}`]: waAnimationName,
    [`animate__${waAnimationDelay}`]: waAnimationDelay,
    [`animate__${waAnimationDuration}`]: waAnimationDuration,
    [`animate__${waAnimationRepeat}`]: waAnimationRepeat
  });
  props.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, animationClasses);
  if (waResetView) {
    props['data-wa-reset-view'] = 'true';
  }
  return props;
}
addFilter('blocks.getSaveContent.extraProps', 'wonder-animations/add-animation-classes-front-end', addAnimationClassesFrontEnd);

/**
 * Check for animations in the viewport.
 * 
 * @since 1.7.0
 */
const checkForAnimationsInViewport = () => {
  const elements = document.querySelectorAll('.animate__animated');
  console.log('checking', elements);
  elements.forEach(element => {
    const isInViewport = rect => {
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    };
    const resetView = element.getAttribute('data-wa-reset-view');
    const rect = element.getBoundingClientRect();
    if (isInViewport(rect)) {
      element.classList.add('in-view');
    } else if (resetView) {
      // Get the current animation name from the element's inline style
      const thisAnimName = window.getComputedStyle(element).getPropertyValue('animation-name');

      // Set the animation name to a data attribute
      element.setAttribute('data-animation-name', thisAnimName);

      // Set the element's animation name to 'none'
      element.style.animationName = 'none';

      // Reset the animation name to blank after 200ms
      setTimeout(function () {
        element.style.animationName = '';
      }, 200);

      // Restore the animation name from the data attribute after 400ms
      setTimeout(function () {
        element.style.animationName = element.getAttribute('data-animation-name');
      }, 400);
    }
  });
};
document.addEventListener('DOMContentLoaded', checkForAnimationsInViewport);
document.addEventListener('scroll', checkForAnimationsInViewport);
document.addEventListener('resize', checkForAnimationsInViewport);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map