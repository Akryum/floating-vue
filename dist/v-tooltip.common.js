module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tooltip_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultOptions; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var positions = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'];

var defaultOptions = {
  defaultPlacement: 'top',
  defaultClass: 'vue-tooltip-theme',
  defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  defaultDelay: 0,
  defaultTrigger: 'hover focus',
  defaultOffset: 0,
  defaultContainer: 'body'
};

function getOptions(options) {
  return {
    placement: options.placement || directive.options.defaultPlacement,
    delay: options.delay || directive.options.defaultDelay,
    template: options.template || directive.options.defaultTemplate,
    trigger: options.trigger || directive.options.defaultTrigger,
    offset: options.offset || directive.options.defaultOffset,
    container: options.container || directive.options.defaultContainer
  };
}

function getPlacement(value, modifiers) {
  var placement = value.placement;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = positions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pos = _step.value;

      if (modifiers[pos]) {
        placement = pos;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return placement;
}

var SuperTooltip = function (_Tooltip) {
  _inherits(SuperTooltip, _Tooltip);

  function SuperTooltip() {
    _classCallCheck(this, SuperTooltip);

    return _possibleConstructorReturn(this, (SuperTooltip.__proto__ || Object.getPrototypeOf(SuperTooltip)).apply(this, arguments));
  }

  _createClass(SuperTooltip, [{
    key: 'setClasses',
    value: function setClasses(classes) {
      var el = this._tooltipNode;

      if (el) {
        var oldClasses = this._oldClasses;
        if (classes) {
          if (oldClasses) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* replaceClasses */])(el, classes, oldClasses);
          } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* addClasses */])(el, classes);
          }
        } else if (oldClasses) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* removeClasses */])(el, oldClasses);
        }
        this._oldClasses = classes;
      } else {
        this._pendingClasses = classes;
      }

      this._classes = classes;
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.options.title = content;
      if (this._tooltipNode) {
        var el = this._tooltipNode.querySelector(this.innerSelector);

        if (el) {
          if (!content) {
            el.innerHTML = '';
          } else {
            el.innerHTML = content;
          }

          this.popperInstance.update();
        }
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      options = getOptions(options);

      var needPopperUpdate = false;
      var needRestart = false;

      if (this.options.offset !== options.offset || this.options.placement !== options.placement) {
        needPopperUpdate = true;
      }

      if (this.options.template !== options.template || this.options.trigger !== options.trigger || this.options.container !== options.container) {
        needRestart = true;
      }

      for (var key in options) {
        this.options[key] = options[key];
      }

      if (this._tooltipNode) {
        if (needRestart) {
          var isOpen = this._isOpen;

          this.dispose();

          var events = typeof this.options.trigger === 'string' ? options.trigger.split(' ').filter(function (trigger) {
            return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
          }) : [];
          this._setEventListeners(this.reference, events, this.options);

          this.setClasses(this._classes);

          if (isOpen) {
            this.show();
          }
        } else if (needPopperUpdate) {
          this.popperInstance.update();
        }
      }
    }
  }, {
    key: '_dispose',
    value: function _dispose() {
      var _this2 = this;

      this._events.forEach(function (_ref) {
        var func = _ref.func,
            event = _ref.event;

        _this2.reference.removeEventListener(event, func);
      });
      this._events = [];
      _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_dispose', this).call(this);
    }
  }, {
    key: '_show',
    value: function _show() {
      var _get2,
          _this3 = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_show', this)).call.apply(_get2, [this].concat(args));

      if (this._pendingClasses) {
        this.setClasses(this._pendingClasses);
        this._pendingClasses = null;
      }

      // Fix position
      setTimeout(function () {
        _this3.popperInstance.update();
      }, 0);
    }
  }]);

  return SuperTooltip;
}(__WEBPACK_IMPORTED_MODULE_0_tooltip_js__["a" /* default */]);

function createTooltip(el, value, modifiers) {
  var content = value.content || value;
  var classes = value.classes || directive.options.defaultClass;

  var tooltip = el._tooltip = new SuperTooltip(el, _extends({
    title: content,
    html: true
  }, getOptions(_extends({}, value, {
    placement: getPlacement(value, modifiers)
  }))));
  tooltip.setClasses(classes);
}

function destroyTooltip(el) {
  if (el._tooltip) {
    el._tooltip.dispose();
    delete el._tooltip;
  }
}

var directive = {
  options: defaultOptions,
  bind: function bind(el, _ref2) {
    var value = _ref2.value,
        modifiers = _ref2.modifiers;

    var content = value && value.content || value;
    destroyTooltip(el);
    if (content) {
      createTooltip(el, value, modifiers);
    }
  },
  update: function update(el, _ref3) {
    var value = _ref3.value,
        oldValue = _ref3.oldValue,
        modifiers = _ref3.modifiers;

    var content = value && value.content || value;
    if (!content) {
      destroyTooltip(el);
    } else if (el._tooltip) {
      var tooltip = el._tooltip;
      // Content
      tooltip.setContent(content);
      // CSS Classes
      tooltip.setClasses(value && value.classes || directive.options.defaultClass);
      // Options
      tooltip.setOptions(_extends({}, value, {
        placement: getPlacement(value, modifiers)
      }));
    } else {
      createTooltip(el, value, modifiers);
    }
  },
  unbind: function unbind(el) {
    destroyTooltip(el);
  }
};

/* harmony default export */ __webpack_exports__["b"] = directive;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = addClasses;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeClasses;
/* harmony export (immutable) */ __webpack_exports__["a"] = replaceClasses;

function convertToArray(value) {
  if (typeof value === 'string') {
    value = value.split(' ');
  }
  return value;
}

function addClasses(el, classes) {
  classes = convertToArray(classes);
  classes.forEach(function (c) {
    el.classList.add(c);
  });
}

function removeClasses(el, classes) {
  classes = convertToArray(classes);
  classes.forEach(function (c) {
    el.classList.remove(c);
  });
}

function replaceClasses(el, newClasses, oldClasses) {
  removeClasses(el, oldClasses);
  addClasses(el, newClasses);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var nativeHints = ['native code', '[object MutationObserverConstructor]'];

/**
 * Determine if a function is implemented natively (as opposed to a polyfill).
 * @method
 * @memberof Popper.Utils
 * @argument {Function | undefined} fn the function to check
 * @returns {Boolean}
 */
var isNative = function isNative(fn) {
  return nativeHints.some(function (hint) {
    return (fn || '').toString().indexOf(hint) > -1;
  });
};

var isBrowser = typeof window !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var scheduled = false;
  var i = 0;
  var elem = document.createElement('span');

  // MutationObserver provides a mechanism for scheduling microtasks, which
  // are scheduled *before* the next task. This gives us a way to debounce
  // a function but ensure it's called *before* the next paint.
  var observer = new MutationObserver(function () {
    fn();
    scheduled = false;
  });

  observer.observe(elem, { attributes: true });

  return function () {
    if (!scheduled) {
      scheduled = true;
      elem.setAttribute('x-index', i);
      i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
    }
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

// It's common for MutationObserver polyfills to be seen in the wild, however
// these rely on Mutation Events which only occur when an element is connected
// to the DOM. The algorithm used in this module does not use a connected element,
// and so we must ensure that a *native* MutationObserver is available.
var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
    return window.document.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || element.firstElementChild.offsetParent === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return window.document.documentElement;
  }

  return offsetParent;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = window.document.documentElement;
    var scrollingElement = window.document.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  return {
    height: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
    width: Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function isIE10$1() {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top,
    left: childrenRect.left - parentRect.left,
    width: childrenRect.width,
    height: childrenRect.height
  });

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (isHTML || parent.nodeName === 'BODY') {
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = isIE10 && isHTML ? 0 : +styles.borderTopWidth.split('px')[0];
    var borderLeftWidth = isIE10 && isHTML ? 0 : +styles.borderLeftWidth.split('px')[0];
    var marginTop = isIE10 && isHTML ? 0 : +styles.marginTop.split('px')[0];
    var marginLeft = isIE10 && isHTML ? 0 : +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (parent.contains(scrollParent) && (isIE10 || scrollParent.nodeName !== 'BODY')) {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = window.document.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = window.document.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = window.document.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, 0, boundariesElement);

  var sides = {
    top: refRect.top - boundaries.top,
    right: boundaries.right - refRect.right,
    bottom: boundaries.bottom - refRect.bottom,
    left: refRect.left - boundaries.left
  };

  var computedPlacement = Object.keys(sides).sort(function (a, b) {
    return sides[b] - sides[a];
  })[0];
  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier.function) {
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier.function || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'webkit', 'moz', 'o'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? window : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  window.addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  window.removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data, options) {
  // apply the final offsets to the popper
  // NOTE: 1 DOM access here
  var styles = {
    position: data.offsets.popper.position
  };

  var attributes = {
    'x-placement': data.placement
  };

  // round top and left to avoid blurry text
  var left = Math.round(data.offsets.popper.left);
  var top = Math.round(data.offsets.popper.top);

  // if gpuAcceleration is set to true and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');
  if (options.gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles.top = 0;
    styles.left = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `left` and `top` properties
    styles.left = left;
    styles.top = top;
    styles.willChange = 'top, left';
  }

  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, _extends({}, styles, data.styles));

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, _extends({}, attributes, data.attributes));

  // if the arrow style has been computed, apply the arrow style
  if (data.offsets.arrow) {
    setStyles(data.arrowElement, data.offsets.arrow);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement);

  popper.setAttribute('x-placement', placement);
  return options;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var popper = getClientRect(data.offsets.popper);
  var reference = data.offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var side = isVertical ? 'top' : 'left';
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  var sideValue = center - getClientRect(data.offsets.popper)[side];

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = sideValue;
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = getClientRect(data.offsets.popper);
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');
      data.offsets.popper = getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement);

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var popper = getClientRect(data.offsets.popper);
  var reference = data.offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = getClientRect(data.offsets.popper);

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var reference = data.offsets.reference;
    var popper = getClientRect(data.offsets.popper);
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var popper = getClientRect(data.offsets.popper);
  var reference = getClientRect(data.offsets.reference);
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[placement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} priority=['left', 'right', 'top', 'bottom']
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arro] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var DEFAULTS = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreateCallback}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdateCallback}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreateCallback
 * @param {dataObject} data
 */

/**
 * @callback onUpdateCallback
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper =
/**
 * Create a new Popper.js instance
 * @class Popper
 * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Your custom options to override the ones defined in [DEFAULTS](#defaults)
 * @return {Object} instance - The generated Popper.js instance
 */
function Popper(reference, popper) {
  var _this = this;

  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  classCallCheck(this, Popper);
  this.update = update;
  this.destroy = destroy;
  this.enableEventListeners = enableEventListeners;
  this.disableEventListeners = disableEventListeners;

  this.scheduleUpdate = function () {
    return requestAnimationFrame(_this.update);
  };

  // make update() debounced, so that it only runs at most once-per-tick
  this.update = debounce(this.update.bind(this));

  // with {} we create a new object with the options inside it
  this.options = _extends({}, Popper.Defaults, options);

  // init state
  this.state = {
    isDestroyed: false,
    isCreated: false,
    scrollParents: []
  };

  // get reference and popper elements (allow jQuery wrappers)
  this.reference = reference.jquery ? reference[0] : reference;
  this.popper = popper.jquery ? popper[0] : popper;

  // make sure to apply the popper position before any computation
  setStyles(this.popper, { position: 'absolute' });

  // refactoring modifiers' list (Object => Array)
  this.modifiers = Object.keys(Popper.Defaults.modifiers).map(function (name) {
    return _extends({
      name: name
    }, Popper.Defaults.modifiers[name]);
  });

  // assign default values to modifiers, making sure to override them with
  // the ones defined by user
  this.modifiers = this.modifiers.map(function (defaultConfig) {
    var userConfig = options.modifiers && options.modifiers[defaultConfig.name] || {};
    return _extends({}, defaultConfig, userConfig);
  });

  // add custom modifiers to the modifiers list
  if (options.modifiers) {
    this.options.modifiers = _extends({}, Popper.Defaults.modifiers, options.modifiers);
    Object.keys(options.modifiers).forEach(function (name) {
      // take in account only custom modifiers
      if (Popper.Defaults.modifiers[name] === undefined) {
        var modifier = options.modifiers[name];
        modifier.name = name;
        _this.modifiers.push(modifier);
      }
    });
  }

  // sort the modifiers by order
  this.modifiers = this.modifiers.sort(function (a, b) {
    return a.order - b.order;
  });

  // modifiers have the ability to execute arbitrary code when Popper.js get inited
  // such code is executed in the same order of its modifier
  // they could add new properties to their options configuration
  // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
  this.modifiers.forEach(function (modifierOptions) {
    if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
      modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
    }
  });

  // fire the first update to position the popper in the right place
  this.update();

  var eventsEnabled = this.options.eventsEnabled;
  if (eventsEnabled) {
    // setup event listeners, they will take care of update the position in specific situations
    this.enableEventListeners();
  }

  this.state.eventsEnabled = eventsEnabled;
};

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = DEFAULTS;

/* harmony default export */ __webpack_exports__["a"] = Popper;
//# sourceMappingURL=popper.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_popper_js__ = __webpack_require__(2);


/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {*} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  title: '',
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  offset: 0
};

var Tooltip = function () {
  /**
   * Create a new Tooltip.js instance
   * @class Tooltip
   * @param {HTMLElement} reference - The reference element used to position the tooltip
   * @param {Object} options
   * @param {String} options.placement=bottom
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   *
   * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
   * @param {Object} options - Configuration of the tooltip
   * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
   * @param {Number|Object} options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `{ show: 500, hide: 100 }`
   * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `innerText`.
   * @param {String|PlacementFunction} options.placement='top' - One of the allowed placements, or a function returning one of them.
   * @param {String} options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
   *      Base HTML to used when creating the tooltip.
   *      The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
   *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
   *      The outermost wrapper element should have the `.tooltip` class.
   * @param {String|HTMLElement|TitleFunction} options.title='' - Default title value if `title` attribute isn't present.
   * @param {String} options.trigger='hover focus'
   *      How tooltip is triggered - click | hover | focus | manual.
   *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
   * @param {HTMLElement} options.boundariesElement
   *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
   *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
   * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
   *      [offset docs](https://popper.js.org/popper-documentation.html)
   * @return {Object} instance - The generated tooltip instance
   */
  function Tooltip(reference, options) {
    classCallCheck(this, Tooltip);

    _initialiseProps.call(this);

    // apply user options over default ones
    options = _extends({}, DEFAULT_OPTIONS, options);

    reference.jquery && (reference = reference[0]);

    // cache reference and options
    this.reference = reference;
    this.options = options;

    // get events list
    var events = typeof options.trigger === 'string' ? options.trigger.split(' ').filter(function (trigger) {
      return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
    }) : [];

    // set initial state
    this._isOpen = false;

    // set event listeners
    this._setEventListeners(reference, events, options);
  }

  //
  // Public methods
  //

  /**
   * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
   * Tooltips with zero-length titles are never displayed.
   * @memberof Tooltip
   */

  /**
   * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @memberof Tooltip
   */

  /**
   * Hides and destroys an element’s tooltip.
   * @memberof Tooltip
   */

  /**
   * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @memberof Tooltip
   */

  //
  // Defaults
  //


  //
  // Private methods
  //

  createClass(Tooltip, [{
    key: '_create',

    /**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} reference
     * @param {String} template
     * @param {String|HTMLElement|TitleFunction} title
     * @param {Boolean} allowHtml
     * @return {HTMLelement} tooltipNode
     */
    value: function _create(reference, template, title, allowHtml) {
      // create tooltip element
      var tooltipGenerator = window.document.createElement('div');
      tooltipGenerator.innerHTML = template;
      var tooltipNode = tooltipGenerator.childNodes[0];

      // add unique ID to our tooltip (needed for accessibility reasons)
      tooltipNode.id = 'tooltip_' + Math.random().toString(36).substr(2, 10);

      // set initial `aria-hidden` state to `false` (it's visible!)
      tooltipNode.setAttribute('aria-hidden', 'false');

      // add title to tooltip
      var titleNode = tooltipGenerator.querySelector(this.innerSelector);
      if (title.nodeType === 1) {
        // if title is a node, append it only if allowHtml is true
        allowHtml && titleNode.appendChild(title);
      } else if (isFunction(title)) {
        // if title is a function, call it and set innerText or innerHtml depending by `allowHtml` value
        var titleText = title.call(reference);
        allowHtml ? titleNode.innerHTML = titleText : titleNode.innerText = titleText;
      } else {
        // if it's just a simple text, set innerText or innerHtml depending by `allowHtml` value
        allowHtml ? titleNode.innerHTML = title : titleNode.innerText = title;
      }

      // return the generated tooltip node
      return tooltipNode;
    }
  }, {
    key: '_show',
    value: function _show(reference, options) {
      // don't show if it's already visible
      if (this._isOpen) {
        return this;
      }
      this._isOpen = true;

      // if the tooltipNode already exists, just show it
      if (this._tooltipNode) {
        this._tooltipNode.style.display = '';
        this._tooltipNode.setAttribute('aria-hidden', 'false');
        this.popperInstance.update();
        return this;
      }

      // get title
      var title = reference.getAttribute('title') || options.title;

      // don't show tooltip if no title is defined
      if (!title) {
        return this;
      }

      // create tooltip node
      var tooltipNode = this._create(reference, options.template, title, options.html);

      // Add `aria-describedby` to our reference element for accessibility reasons
      tooltipNode.setAttribute('aria-describedby', tooltipNode.id);

      // append tooltip to container
      var container = this._findContainer(options.container, reference);

      this._append(tooltipNode, container);

      var popperOptions = {
        placement: options.placement,
        arrowElement: this.arrowSelector
      };

      if (options.boundariesElement) {
        popperOptions.boundariesElement = options.boundariesElement;
      }

      this.popperInstance = new __WEBPACK_IMPORTED_MODULE_0_popper_js__["a" /* default */](reference, tooltipNode, popperOptions);

      this._tooltipNode = tooltipNode;

      return this;
    }
  }, {
    key: '_hide',
    value: function _hide() /*reference, options*/{
      // don't hide if it's already hidden
      if (!this._isOpen) {
        return this;
      }

      this._isOpen = false;

      // hide tooltipNode
      this._tooltipNode.style.display = 'none';
      this._tooltipNode.setAttribute('aria-hidden', 'true');

      return this;
    }
  }, {
    key: '_dispose',
    value: function _dispose() {
      var _this = this;

      if (this._tooltipNode) {
        this._hide();

        // destroy instance
        this.popperInstance.destroy();

        // remove event listeners
        this._events.forEach(function (_ref) {
          var func = _ref.func,
              event = _ref.event;

          _this._tooltipNode.removeEventListener(event, func);
        });
        this._events = [];

        // destroy tooltipNode
        this._tooltipNode.parentNode.removeChild(this._tooltipNode);
        this._tooltipNode = null;
      }
      return this;
    }
  }, {
    key: '_findContainer',
    value: function _findContainer(container, reference) {
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = reference.parentNode;
      }
      return container;
    }

    /**
     * Append tooltip to container
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} tooltip
     * @param {HTMLElement|String|false} container
     */

  }, {
    key: '_append',
    value: function _append(tooltipNode, container) {
      container.appendChild(tooltipNode);
    }
  }, {
    key: '_setEventListeners',
    value: function _setEventListeners(reference, events, options) {
      var _this2 = this;

      var directEvents = [];
      var oppositeEvents = [];

      events.forEach(function (event) {
        switch (event) {
          case 'hover':
            directEvents.push('mouseenter');
            oppositeEvents.push('mouseleave');
          case 'focus':
            directEvents.push('focus');
            oppositeEvents.push('blur');
          case 'click':
            directEvents.push('click');
            oppositeEvents.push('click');
        }
      });

      // schedule show tooltip
      directEvents.forEach(function (event) {
        var func = function func(evt) {
          if (_this2._isOpen === true) {
            return;
          }
          evt.usedByTooltip = true;
          _this2._scheduleShow(reference, options.delay, options, evt);
        };
        _this2._events.push({ event: event, func: func });
        reference.addEventListener(event, func);
      });

      // schedule hide tooltip
      oppositeEvents.forEach(function (event) {
        var func = function func(evt) {
          if (evt.usedByTooltip === true) {
            return;
          }
          _this2._scheduleHide(reference, options.delay, options, evt);
        };
        _this2._events.push({ event: event, func: func });
        reference.addEventListener(event, func);
      });
    }
  }, {
    key: '_scheduleShow',
    value: function _scheduleShow(reference, delay, options /*, evt */) {
      var _this3 = this;

      // defaults to 0
      var computedDelay = delay && delay.show || delay || 0;
      window.setTimeout(function () {
        return _this3._show(reference, options);
      }, computedDelay);
    }
  }, {
    key: '_scheduleHide',
    value: function _scheduleHide(reference, delay, options, evt) {
      var _this4 = this;

      // defaults to 0
      var computedDelay = delay && delay.hide || delay || 0;
      window.setTimeout(function () {
        if (_this4._isOpen === false) {
          return;
        }
        if (!document.body.contains(_this4._tooltipNode)) {
          return;
        }

        // if we are hiding because of a mouseleave, we must check that the new
        // reference isn't the tooltip, because in this case we don't want to hide it
        if (evt.type === 'mouseleave') {
          var isSet = _this4._setTooltipNodeEvent(evt, reference, delay, options);

          // if we set the new event, don't hide the tooltip yet
          // the new event will take care to hide it if necessary
          if (isSet) {
            return;
          }
        }

        _this4._hide(reference, options);
      }, computedDelay);
    }
  }]);
  return Tooltip;
}();

/**
 * Placement function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback PlacementFunction
 * @param {HTMLElement} tooltip - tooltip DOM node.
 * @param {HTMLElement} reference - reference DOM node.
 * @return {String} placement - One of the allowed placement options.
 */

/**
 * Title function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback TitleFunction
 * @return {String} placement - The desired title.
 */

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.show = function () {
    return _this5._show(_this5.reference, _this5.options);
  };

  this.hide = function () {
    return _this5._hide();
  };

  this.dispose = function () {
    return _this5._dispose();
  };

  this.toggle = function () {
    if (_this5._isOpen) {
      return _this5.hide();
    } else {
      return _this5.show();
    }
  };

  this.arrowSelector = '.tooltip-arrow, .tooltip__arrow';
  this.innerSelector = '.tooltip-inner, .tooltip__inner';
  this._events = [];

  this._setTooltipNodeEvent = function (evt, reference, delay, options) {
    var relatedreference = evt.relatedreference || evt.toElement;

    var callback = function callback(evt2) {
      var relatedreference2 = evt2.relatedreference || evt2.toElement;

      // Remove event listener after call
      _this5._tooltipNode.removeEventListener(evt.type, callback);

      // If the new reference is not the reference element
      if (!reference.contains(relatedreference2)) {
        // Schedule to hide tooltip
        _this5._scheduleHide(reference, options.delay, options, evt2);
      }
    };

    if (_this5._tooltipNode.contains(relatedreference)) {
      // listen to mouseleave on the tooltip element to be able to hide the tooltip
      _this5._tooltipNode.addEventListener(evt.type, callback);
      return true;
    }

    return false;
  };
};

/* harmony default export */ __webpack_exports__["a"] = Tooltip;
//# sourceMappingURL=tooltip.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v_tooltip__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["install"] = install;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTooltip", function() { return VTooltip; });


function install(Vue, options) {
  if (install.installed) return;
  install.installed = true;

  options = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["a" /* defaultOptions */], options || {});
  __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["b" /* default */].options = options;
  Vue.directive('tooltip', __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["b" /* default */]);
}

var VTooltip = __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["b" /* default */];

var plugin = {
  install: install
};

// Auto-install
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = plugin;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjk4OWMwOWU5Nzc4NGIyNWYzMGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wb3BwZXIuanMvZGlzdC9lc20vcG9wcGVyLmpzIiwid2VicGFjazovLy8uL34vdG9vbHRpcC5qcy9kaXN0L2VzbS90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJwbGFjZW1lbnQiLCJkaXJlY3RpdmUiLCJkZWxheSIsInRlbXBsYXRlIiwidHJpZ2dlciIsIm9mZnNldCIsImNvbnRhaW5lciIsImdldFBsYWNlbWVudCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zIiwiU3VwZXJUb29sdGlwIiwiY2xhc3NlcyIsImVsIiwiX3Rvb2x0aXBOb2RlIiwib2xkQ2xhc3NlcyIsIl9vbGRDbGFzc2VzIiwicmVwbGFjZUNsYXNzZXMiLCJhZGRDbGFzc2VzIiwicmVtb3ZlQ2xhc3NlcyIsIl9wZW5kaW5nQ2xhc3NlcyIsIl9jbGFzc2VzIiwiY29udGVudCIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJpbm5lckhUTUwiLCJwb3BwZXJJbnN0YW5jZSIsInVwZGF0ZSIsIm5lZWRQb3BwZXJVcGRhdGUiLCJuZWVkUmVzdGFydCIsImtleSIsImlzT3BlbiIsIl9pc09wZW4iLCJkaXNwb3NlIiwiZXZlbnRzIiwic3BsaXQiLCJmaWx0ZXIiLCJpbmRleE9mIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwicmVmZXJlbmNlIiwic2V0Q2xhc3NlcyIsInNob3ciLCJfZXZlbnRzIiwiZm9yRWFjaCIsImZ1bmMiLCJldmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhcmdzIiwic2V0VGltZW91dCIsImNyZWF0ZVRvb2x0aXAiLCJ0b29sdGlwIiwiX3Rvb2x0aXAiLCJodG1sIiwiZGVzdHJveVRvb2x0aXAiLCJiaW5kIiwib2xkVmFsdWUiLCJzZXRDb250ZW50Iiwic2V0T3B0aW9ucyIsInVuYmluZCIsImNvbnZlcnRUb0FycmF5IiwiY2xhc3NMaXN0IiwiYWRkIiwiYyIsInJlbW92ZSIsIm5ld0NsYXNzZXMiLCJuYXRpdmVIaW50cyIsImlzTmF0aXZlIiwiZm4iLCJzb21lIiwiaGludCIsInRvU3RyaW5nIiwiaXNCcm93c2VyIiwid2luZG93IiwibG9uZ2VyVGltZW91dEJyb3dzZXJzIiwidGltZW91dER1cmF0aW9uIiwiaSIsImxlbmd0aCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1pY3JvdGFza0RlYm91bmNlIiwic2NoZWR1bGVkIiwiZWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlIiwidGFza0RlYm91bmNlIiwic3VwcG9ydHNOYXRpdmVNdXRhdGlvbk9ic2VydmVyIiwiZGVib3VuY2UiLCJpc051bWVyaWMiLCJuIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiaXNGaW5pdGUiLCJzZXRTdHlsZXMiLCJlbGVtZW50Iiwic3R5bGVzIiwiT2JqZWN0Iiwia2V5cyIsInByb3AiLCJ1bml0Iiwic3R5bGUiLCJpc0Z1bmN0aW9uIiwiZnVuY3Rpb25Ub0NoZWNrIiwiZ2V0VHlwZSIsImNhbGwiLCJnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkiLCJwcm9wZXJ0eSIsIm5vZGVUeXBlIiwiY3NzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFBhcmVudE5vZGUiLCJub2RlTmFtZSIsInBhcmVudE5vZGUiLCJob3N0IiwiZ2V0U2Nyb2xsUGFyZW50IiwiYm9keSIsIl9nZXRTdHlsZUNvbXB1dGVkUHJvcCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwidGVzdCIsImlzT2Zmc2V0Q29udGFpbmVyIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJvZmZzZXRQYXJlbnQiLCJnZXRSb290Iiwibm9kZSIsImdldE9mZnNldFBhcmVudCIsImRvY3VtZW50RWxlbWVudCIsImZpbmRDb21tb25PZmZzZXRQYXJlbnQiLCJlbGVtZW50MSIsImVsZW1lbnQyIiwib3JkZXIiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsIk5vZGUiLCJET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkciLCJzdGFydCIsImVuZCIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZXRTdGFydCIsInNldEVuZCIsImNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIiwiY29udGFpbnMiLCJlbGVtZW50MXJvb3QiLCJnZXRTY3JvbGwiLCJzaWRlIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwidXBwZXJTaWRlIiwic2Nyb2xsaW5nRWxlbWVudCIsImluY2x1ZGVTY3JvbGwiLCJyZWN0Iiwic3VidHJhY3QiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwibW9kaWZpZXIiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJnZXRCb3JkZXJzU2l6ZSIsImF4aXMiLCJzaWRlQSIsInNpZGVCIiwiZ2V0V2luZG93U2l6ZXMiLCJoZWlnaHQiLCJNYXRoIiwibWF4Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9leHRlbmRzIiwiYXNzaWduIiwidGFyZ2V0Iiwic291cmNlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJnZXRDbGllbnRSZWN0Iiwib2Zmc2V0cyIsImlzSUUxMCIsImlzSUUxMCQxIiwiYXBwVmVyc2lvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVyciIsInJlc3VsdCIsInNpemVzIiwiaG9yaXpTY3JvbGxiYXIiLCJ2ZXJ0U2Nyb2xsYmFyIiwiZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlIiwiY2hpbGRyZW4iLCJwYXJlbnQiLCJpc0hUTUwiLCJjaGlsZHJlblJlY3QiLCJwYXJlbnRSZWN0Iiwic2Nyb2xsUGFyZW50IiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJMZWZ0V2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlIiwicmVsYXRpdmVPZmZzZXQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJpc0ZpeGVkIiwiZ2V0Qm91bmRhcmllcyIsInBvcHBlciIsInBhZGRpbmciLCJib3VuZGFyaWVzRWxlbWVudCIsImJvdW5kYXJpZXMiLCJib3VuZGFyaWVzTm9kZSIsIl9nZXRXaW5kb3dTaXplcyIsImNvbXB1dGVBdXRvUGxhY2VtZW50IiwicmVmUmVjdCIsInNpZGVzIiwiY29tcHV0ZWRQbGFjZW1lbnQiLCJzb3J0IiwiYSIsImIiLCJ2YXJpYXRpb24iLCJnZXRSZWZlcmVuY2VPZmZzZXRzIiwic3RhdGUiLCJjb21tb25PZmZzZXRQYXJlbnQiLCJnZXRPdXRlclNpemVzIiwieCIsIm1hcmdpbkJvdHRvbSIsInkiLCJtYXJnaW5SaWdodCIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwiaGFzaCIsInJlcGxhY2UiLCJtYXRjaGVkIiwiZ2V0UG9wcGVyT2Zmc2V0cyIsInJlZmVyZW5jZU9mZnNldHMiLCJwb3BwZXJSZWN0IiwicG9wcGVyT2Zmc2V0cyIsImlzSG9yaXoiLCJtYWluU2lkZSIsInNlY29uZGFyeVNpZGUiLCJtZWFzdXJlbWVudCIsInNlY29uZGFyeU1lYXN1cmVtZW50IiwiZmluZCIsImFyciIsImNoZWNrIiwiQXJyYXkiLCJmaW5kSW5kZXgiLCJjdXIiLCJtYXRjaCIsInJ1bk1vZGlmaWVycyIsImRhdGEiLCJlbmRzIiwibW9kaWZpZXJzVG9SdW4iLCJzbGljZSIsImZ1bmN0aW9uIiwiY29uc29sZSIsIndhcm4iLCJlbmFibGVkIiwiaXNEZXN0cm95ZWQiLCJmbGlwcGVkIiwiZmxpcCIsIm9yaWdpbmFsUGxhY2VtZW50IiwicG9zaXRpb24iLCJpc0NyZWF0ZWQiLCJvbkNyZWF0ZSIsIm9uVXBkYXRlIiwiaXNNb2RpZmllckVuYWJsZWQiLCJtb2RpZmllck5hbWUiLCJfcmVmIiwibmFtZSIsImdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSIsInByZWZpeGVzIiwidXBwZXJQcm9wIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJwcmVmaXgiLCJ0b0NoZWNrIiwiZGVzdHJveSIsInJlbW92ZUF0dHJpYnV0ZSIsImRpc2FibGVFdmVudExpc3RlbmVycyIsInJlbW92ZU9uRGVzdHJveSIsInJlbW92ZUNoaWxkIiwiYXR0YWNoVG9TY3JvbGxQYXJlbnRzIiwiY2FsbGJhY2siLCJzY3JvbGxQYXJlbnRzIiwiaXNCb2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJwdXNoIiwic2V0dXBFdmVudExpc3RlbmVycyIsInVwZGF0ZUJvdW5kIiwic2Nyb2xsRWxlbWVudCIsImV2ZW50c0VuYWJsZWQiLCJlbmFibGVFdmVudExpc3RlbmVycyIsInNjaGVkdWxlVXBkYXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldEF0dHJpYnV0ZXMiLCJhcHBseVN0eWxlIiwicm91bmQiLCJwcmVmaXhlZFByb3BlcnR5IiwiZ3B1QWNjZWxlcmF0aW9uIiwid2lsbENoYW5nZSIsImFycm93IiwiYXJyb3dFbGVtZW50IiwiYXBwbHlTdHlsZU9uTG9hZCIsIm1vZGlmaWVyT3B0aW9ucyIsImlzTW9kaWZpZXJSZXF1aXJlZCIsInJlcXVlc3RpbmdOYW1lIiwicmVxdWVzdGVkTmFtZSIsInJlcXVlc3RpbmciLCJpc1JlcXVpcmVkIiwiX3JlcXVlc3RpbmciLCJyZXF1ZXN0ZWQiLCJpc1ZlcnRpY2FsIiwibGVuIiwiYWx0U2lkZSIsIm9wU2lkZSIsImFycm93RWxlbWVudFNpemUiLCJjZW50ZXIiLCJzaWRlVmFsdWUiLCJtaW4iLCJnZXRPcHBvc2l0ZVZhcmlhdGlvbiIsInBsYWNlbWVudHMiLCJ2YWxpZFBsYWNlbWVudHMiLCJjbG9ja3dpc2UiLCJjb3VudGVyIiwiaW5kZXgiLCJjb25jYXQiLCJyZXZlcnNlIiwiQkVIQVZJT1JTIiwiRkxJUCIsIkNMT0NLV0lTRSIsIkNPVU5URVJDTE9DS1dJU0UiLCJwbGFjZW1lbnRPcHBvc2l0ZSIsImZsaXBPcmRlciIsImJlaGF2aW9yIiwic3RlcCIsInJlZk9mZnNldHMiLCJmbG9vciIsIm92ZXJsYXBzUmVmIiwib3ZlcmZsb3dzTGVmdCIsIm92ZXJmbG93c1JpZ2h0Iiwib3ZlcmZsb3dzVG9wIiwib3ZlcmZsb3dzQm90dG9tIiwib3ZlcmZsb3dzQm91bmRhcmllcyIsImZsaXBwZWRWYXJpYXRpb24iLCJmbGlwVmFyaWF0aW9ucyIsImtlZXBUb2dldGhlciIsInRvVmFsdWUiLCJzdHIiLCJzaXplIiwicGFyc2VPZmZzZXQiLCJiYXNlUGxhY2VtZW50IiwidXNlSGVpZ2h0IiwiZnJhZ21lbnRzIiwibWFwIiwiZnJhZyIsInRyaW0iLCJkaXZpZGVyIiwic2VhcmNoIiwic3BsaXRSZWdleCIsIm9wcyIsIm9wIiwibWVyZ2VXaXRoUHJldmlvdXMiLCJyZWR1Y2UiLCJpbmRleDIiLCJfZGF0YSRvZmZzZXRzIiwicHJldmVudE92ZXJmbG93IiwicHJpb3JpdHkiLCJwcmltYXJ5IiwiZXNjYXBlV2l0aFJlZmVyZW5jZSIsInNlY29uZGFyeSIsInNoaWZ0Iiwic2hpZnR2YXJpYXRpb24iLCJzaGlmdE9mZnNldHMiLCJoaWRlIiwiYm91bmQiLCJpbm5lciIsInN1YnRyYWN0TGVuZ3RoIiwib25Mb2FkIiwiREVGQVVMVFMiLCJQb3BwZXIiLCJfdGhpcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkRlZmF1bHRzIiwianF1ZXJ5IiwiZGVmYXVsdENvbmZpZyIsInVzZXJDb25maWciLCJVdGlscyIsImdsb2JhbCIsIlBvcHBlclV0aWxzIiwiY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiREVGQVVMVF9PUFRJT05TIiwiVG9vbHRpcCIsIl9pbml0aWFsaXNlUHJvcHMiLCJfY3JlYXRlIiwiYWxsb3dIdG1sIiwidG9vbHRpcEdlbmVyYXRvciIsInRvb2x0aXBOb2RlIiwiY2hpbGROb2RlcyIsImlkIiwicmFuZG9tIiwic3Vic3RyIiwidGl0bGVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZVRleHQiLCJpbm5lclRleHQiLCJfc2hvdyIsImRpc3BsYXkiLCJnZXRBdHRyaWJ1dGUiLCJfZmluZENvbnRhaW5lciIsIl9hcHBlbmQiLCJwb3BwZXJPcHRpb25zIiwiYXJyb3dTZWxlY3RvciIsIl9oaWRlIiwiX2Rpc3Bvc2UiLCJfdGhpczIiLCJkaXJlY3RFdmVudHMiLCJvcHBvc2l0ZUV2ZW50cyIsImV2dCIsInVzZWRCeVRvb2x0aXAiLCJfc2NoZWR1bGVTaG93IiwiX3NjaGVkdWxlSGlkZSIsIl90aGlzMyIsImNvbXB1dGVkRGVsYXkiLCJfdGhpczQiLCJ0eXBlIiwiaXNTZXQiLCJfc2V0VG9vbHRpcE5vZGVFdmVudCIsIl90aGlzNSIsInRvZ2dsZSIsInJlbGF0ZWRyZWZlcmVuY2UiLCJ0b0VsZW1lbnQiLCJldnQyIiwicmVsYXRlZHJlZmVyZW5jZTIiLCJpbnN0YWxsIiwiVnVlIiwiaW5zdGFsbGVkIiwidnRvb2x0aXAiLCJWVG9vbHRpcCIsInBsdWdpbiIsIkdsb2JhbFZ1ZSIs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QWQsRUFBeUIsMkRBQXpCO0FBQ0Q7O0FBRU0sSUFBTTRjLFdBQVcsMkRBQWpCOztBQUVQLElBQU1DLFNBQVM7QUFDYkw7QUFEYSxDQUFmOztBQUlBO0FBQ0EsSUFBSU0sWUFBWSxJQUFoQjtBQUNBLElBQUksT0FBT3RZLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNzWSxjQUFZdFksT0FBT2lZLEdBQW5CO0FBQ0QsQ0FGRCxNQUVPLElBQUksT0FBT3BELE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDeEN5RCxjQUFZekQsT0FBT29ELEdBQW5CO0FBQ0Q7QUFDRCxJQUFJSyxTQUFKLEVBQWU7QUFDYkEsWUFBVUMsR0FBVixDQUFjRixNQUFkO0FBQ0Q7O0FBRUQsOERBQWVBLE1BQWYsQyIsImZpbGUiOiJ2LXRvb2x0aXAuY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjk4OWMwOWU5Nzc4NGIyNWYzMGMiLCJpbXBvcnQgVG9vbHRpcCBmcm9tICd0b29sdGlwLmpzJ1xyXG5cclxuaW1wb3J0IHsgYWRkQ2xhc3NlcywgcmVtb3ZlQ2xhc3NlcywgcmVwbGFjZUNsYXNzZXMgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICd0b3AnLFxyXG4gICd0b3Atc3RhcnQnLFxyXG4gICd0b3AtZW5kJyxcclxuICAncmlnaHQnLFxyXG4gICdyaWdodC1zdGFydCcsXHJcbiAgJ3JpZ2h0LWVuZCcsXHJcbiAgJ2JvdHRvbScsXHJcbiAgJ2JvdHRvbS1zdGFydCcsXHJcbiAgJ2JvdHRvbS1lbmQnLFxyXG4gICdsZWZ0JyxcclxuICAnbGVmdC1zdGFydCcsXHJcbiAgJ2xlZnQtZW5kJyxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIGRlZmF1bHRQbGFjZW1lbnQ6ICd0b3AnLFxyXG4gIGRlZmF1bHRDbGFzczogJ3Z1ZS10b29sdGlwLXRoZW1lJyxcclxuICBkZWZhdWx0VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXHJcbiAgZGVmYXVsdERlbGF5OiAwLFxyXG4gIGRlZmF1bHRUcmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxyXG4gIGRlZmF1bHRPZmZzZXQ6IDAsXHJcbiAgZGVmYXVsdENvbnRhaW5lcjogJ2JvZHknLFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPcHRpb25zIChvcHRpb25zKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBsYWNlbWVudDogb3B0aW9ucy5wbGFjZW1lbnQgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFBsYWNlbWVudCxcclxuICAgIGRlbGF5OiBvcHRpb25zLmRlbGF5IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHREZWxheSxcclxuICAgIHRlbXBsYXRlOiBvcHRpb25zLnRlbXBsYXRlIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRUZW1wbGF0ZSxcclxuICAgIHRyaWdnZXI6IG9wdGlvbnMudHJpZ2dlciB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0VHJpZ2dlcixcclxuICAgIG9mZnNldDogb3B0aW9ucy5vZmZzZXQgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdE9mZnNldCxcclxuICAgIGNvbnRhaW5lcjogb3B0aW9ucy5jb250YWluZXIgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdENvbnRhaW5lcixcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBsYWNlbWVudCAodmFsdWUsIG1vZGlmaWVycykge1xyXG4gIGxldCBwbGFjZW1lbnQgPSB2YWx1ZS5wbGFjZW1lbnRcclxuICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHtcclxuICAgIGlmIChtb2RpZmllcnNbcG9zXSkge1xyXG4gICAgICBwbGFjZW1lbnQgPSBwb3NcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBsYWNlbWVudFxyXG59XHJcblxyXG5jbGFzcyBTdXBlclRvb2x0aXAgZXh0ZW5kcyBUb29sdGlwIHtcclxuICBzZXRDbGFzc2VzIChjbGFzc2VzKSB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuX3Rvb2x0aXBOb2RlXHJcblxyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIGNvbnN0IG9sZENsYXNzZXMgPSB0aGlzLl9vbGRDbGFzc2VzXHJcbiAgICAgIGlmIChjbGFzc2VzKSB7XHJcbiAgICAgICAgaWYgKG9sZENsYXNzZXMpIHtcclxuICAgICAgICAgIHJlcGxhY2VDbGFzc2VzKGVsLCBjbGFzc2VzLCBvbGRDbGFzc2VzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhZGRDbGFzc2VzKGVsLCBjbGFzc2VzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChvbGRDbGFzc2VzKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2xhc3NlcyhlbCwgb2xkQ2xhc3NlcylcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9vbGRDbGFzc2VzID0gY2xhc3Nlc1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcGVuZGluZ0NsYXNzZXMgPSBjbGFzc2VzXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY2xhc3NlcyA9IGNsYXNzZXNcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQgKGNvbnRlbnQpIHtcclxuICAgIHRoaXMub3B0aW9ucy50aXRsZSA9IGNvbnRlbnRcclxuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuX3Rvb2x0aXBOb2RlLnF1ZXJ5U2VsZWN0b3IodGhpcy5pbm5lclNlbGVjdG9yKVxyXG5cclxuICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBjb250ZW50XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnMgKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMpXHJcblxyXG4gICAgbGV0IG5lZWRQb3BwZXJVcGRhdGUgPSBmYWxzZVxyXG4gICAgbGV0IG5lZWRSZXN0YXJ0ID0gZmFsc2VcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMub3B0aW9ucy5vZmZzZXQgIT09IG9wdGlvbnMub2Zmc2V0IHx8XHJcbiAgICAgIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQgIT09IG9wdGlvbnMucGxhY2VtZW50XHJcbiAgICApIHtcclxuICAgICAgbmVlZFBvcHBlclVwZGF0ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMub3B0aW9ucy50ZW1wbGF0ZSAhPT0gb3B0aW9ucy50ZW1wbGF0ZSB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMudHJpZ2dlciAhPT0gb3B0aW9ucy50cmlnZ2VyIHx8XHJcbiAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIgIT09IG9wdGlvbnMuY29udGFpbmVyXHJcbiAgICApIHtcclxuICAgICAgbmVlZFJlc3RhcnQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xyXG4gICAgICB0aGlzLm9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xyXG4gICAgICBpZiAobmVlZFJlc3RhcnQpIHtcclxuICAgICAgICBjb25zdCBpc09wZW4gPSB0aGlzLl9pc09wZW5cclxuXHJcbiAgICAgICAgdGhpcy5kaXNwb3NlKClcclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdHlwZW9mIHRoaXMub3B0aW9ucy50cmlnZ2VyID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgPyBvcHRpb25zLnRyaWdnZXJcclxuICAgICAgICAgICAgLnNwbGl0KCcgJylcclxuICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICB0cmlnZ2VyID0+IFsnY2xpY2snLCAnaG92ZXInLCAnZm9jdXMnXS5pbmRleE9mKHRyaWdnZXIpICE9PSAtMVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICA6IFtdXHJcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIGV2ZW50cywgdGhpcy5vcHRpb25zKVxyXG5cclxuICAgICAgICB0aGlzLnNldENsYXNzZXModGhpcy5fY2xhc3NlcylcclxuXHJcbiAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgdGhpcy5zaG93KClcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAobmVlZFBvcHBlclVwZGF0ZSkge1xyXG4gICAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2Rpc3Bvc2UgKCkge1xyXG4gICAgdGhpcy5fZXZlbnRzLmZvckVhY2goKHsgZnVuYywgZXZlbnQgfSkgPT4ge1xyXG4gICAgICB0aGlzLnJlZmVyZW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jKVxyXG4gICAgfSlcclxuICAgIHRoaXMuX2V2ZW50cyA9IFtdXHJcbiAgICBzdXBlci5fZGlzcG9zZSgpXHJcbiAgfVxyXG5cclxuICBfc2hvdyAoLi4uYXJncykge1xyXG4gICAgc3VwZXIuX3Nob3coLi4uYXJncylcclxuXHJcbiAgICBpZiAodGhpcy5fcGVuZGluZ0NsYXNzZXMpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc2VzKHRoaXMuX3BlbmRpbmdDbGFzc2VzKVxyXG4gICAgICB0aGlzLl9wZW5kaW5nQ2xhc3NlcyA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaXggcG9zaXRpb25cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXHJcbiAgICB9LCAwKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9vbHRpcCAoZWwsIHZhbHVlLCBtb2RpZmllcnMpIHtcclxuICBjb25zdCBjb250ZW50ID0gdmFsdWUuY29udGVudCB8fCB2YWx1ZVxyXG4gIGxldCBjbGFzc2VzID0gdmFsdWUuY2xhc3NlcyB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q2xhc3NcclxuXHJcbiAgY29uc3QgdG9vbHRpcCA9IGVsLl90b29sdGlwID0gbmV3IFN1cGVyVG9vbHRpcChlbCwge1xyXG4gICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICBodG1sOiB0cnVlLFxyXG4gICAgLi4uZ2V0T3B0aW9ucyh7XHJcbiAgICAgIC4uLnZhbHVlLFxyXG4gICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcclxuICAgIH0pLFxyXG4gIH0pXHJcbiAgdG9vbHRpcC5zZXRDbGFzc2VzKGNsYXNzZXMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc3Ryb3lUb29sdGlwIChlbCkge1xyXG4gIGlmIChlbC5fdG9vbHRpcCkge1xyXG4gICAgZWwuX3Rvb2x0aXAuZGlzcG9zZSgpXHJcbiAgICBkZWxldGUgZWwuX3Rvb2x0aXBcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpcmVjdGl2ZSA9IHtcclxuICBvcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcclxuICBiaW5kIChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzIH0pIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZSAmJiB2YWx1ZS5jb250ZW50IHx8IHZhbHVlXHJcbiAgICBkZXN0cm95VG9vbHRpcChlbClcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgIGNyZWF0ZVRvb2x0aXAoZWwsIHZhbHVlLCBtb2RpZmllcnMpXHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGUgKGVsLCB7IHZhbHVlLCBvbGRWYWx1ZSwgbW9kaWZpZXJzIH0pIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZSAmJiB2YWx1ZS5jb250ZW50IHx8IHZhbHVlXHJcbiAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgZGVzdHJveVRvb2x0aXAoZWwpXHJcbiAgICB9IGVsc2UgaWYgKGVsLl90b29sdGlwKSB7XHJcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBlbC5fdG9vbHRpcFxyXG4gICAgICAvLyBDb250ZW50XHJcbiAgICAgIHRvb2x0aXAuc2V0Q29udGVudChjb250ZW50KVxyXG4gICAgICAvLyBDU1MgQ2xhc3Nlc1xyXG4gICAgICB0b29sdGlwLnNldENsYXNzZXMoKHZhbHVlICYmIHZhbHVlLmNsYXNzZXMpIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzcylcclxuICAgICAgLy8gT3B0aW9uc1xyXG4gICAgICB0b29sdGlwLnNldE9wdGlvbnMoe1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIHBsYWNlbWVudDogZ2V0UGxhY2VtZW50KHZhbHVlLCBtb2RpZmllcnMpLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcclxuICAgIH1cclxuICB9LFxyXG4gIHVuYmluZCAoZWwpIHtcclxuICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpcmVjdGl2ZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdi10b29sdGlwLmpzIiwiXG5mdW5jdGlvbiBjb252ZXJ0VG9BcnJheSAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJyAnKVxyXG4gIH1cclxuICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzZXMgKGVsLCBjbGFzc2VzKSB7XHJcbiAgY2xhc3NlcyA9IGNvbnZlcnRUb0FycmF5KGNsYXNzZXMpXHJcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzc2VzIChlbCwgY2xhc3Nlcykge1xyXG4gIGNsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxyXG4gIGNsYXNzZXMuZm9yRWFjaChjID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoYylcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUNsYXNzZXMgKGVsLCBuZXdDbGFzc2VzLCBvbGRDbGFzc2VzKSB7XHJcbiAgcmVtb3ZlQ2xhc3NlcyhlbCwgb2xkQ2xhc3NlcylcclxuICBhZGRDbGFzc2VzKGVsLCBuZXdDbGFzc2VzKVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsInZhciBuYXRpdmVIaW50cyA9IFsnbmF0aXZlIGNvZGUnLCAnW29iamVjdCBNdXRhdGlvbk9ic2VydmVyQ29uc3RydWN0b3JdJ107XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgZnVuY3Rpb24gaXMgaW1wbGVtZW50ZWQgbmF0aXZlbHkgKGFzIG9wcG9zZWQgdG8gYSBwb2x5ZmlsbCkuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0Z1bmN0aW9uIHwgdW5kZWZpbmVkfSBmbiB0aGUgZnVuY3Rpb24gdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG52YXIgaXNOYXRpdmUgPSAoZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuYXRpdmVIaW50cy5zb21lKGZ1bmN0aW9uIChoaW50KSB7XG4gICAgcmV0dXJuIChmbiB8fCAnJykudG9TdHJpbmcoKS5pbmRleE9mKGhpbnQpID4gLTE7XG4gIH0pO1xufSk7XG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbnZhciBsb25nZXJUaW1lb3V0QnJvd3NlcnMgPSBbJ0VkZ2UnLCAnVHJpZGVudCcsICdGaXJlZm94J107XG52YXIgdGltZW91dER1cmF0aW9uID0gMDtcbmZvciAodmFyIGkgPSAwOyBpIDwgbG9uZ2VyVGltZW91dEJyb3dzZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gIGlmIChpc0Jyb3dzZXIgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKGxvbmdlclRpbWVvdXRCcm93c2Vyc1tpXSkgPj0gMCkge1xuICAgIHRpbWVvdXREdXJhdGlvbiA9IDE7XG4gICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWljcm90YXNrRGVib3VuY2UoZm4pIHtcbiAgdmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xuICB2YXIgaSA9IDA7XG4gIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIC8vIE11dGF0aW9uT2JzZXJ2ZXIgcHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIHNjaGVkdWxpbmcgbWljcm90YXNrcywgd2hpY2hcbiAgLy8gYXJlIHNjaGVkdWxlZCAqYmVmb3JlKiB0aGUgbmV4dCB0YXNrLiBUaGlzIGdpdmVzIHVzIGEgd2F5IHRvIGRlYm91bmNlXG4gIC8vIGEgZnVuY3Rpb24gYnV0IGVuc3VyZSBpdCdzIGNhbGxlZCAqYmVmb3JlKiB0aGUgbmV4dCBwYWludC5cbiAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgIGZuKCk7XG4gICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbSwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZSgneC1pbmRleCcsIGkpO1xuICAgICAgaSA9IGkgKyAxOyAvLyBkb24ndCB1c2UgY29tcHVuZCAoKz0pIGJlY2F1c2UgaXQgZG9lc24ndCBnZXQgb3B0aW1pemVkIGluIFY4XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB0YXNrRGVib3VuY2UoZm4pIHtcbiAgdmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc2NoZWR1bGVkKSB7XG4gICAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICBmbigpO1xuICAgICAgfSwgdGltZW91dER1cmF0aW9uKTtcbiAgICB9XG4gIH07XG59XG5cbi8vIEl0J3MgY29tbW9uIGZvciBNdXRhdGlvbk9ic2VydmVyIHBvbHlmaWxscyB0byBiZSBzZWVuIGluIHRoZSB3aWxkLCBob3dldmVyXG4vLyB0aGVzZSByZWx5IG9uIE11dGF0aW9uIEV2ZW50cyB3aGljaCBvbmx5IG9jY3VyIHdoZW4gYW4gZWxlbWVudCBpcyBjb25uZWN0ZWRcbi8vIHRvIHRoZSBET00uIFRoZSBhbGdvcml0aG0gdXNlZCBpbiB0aGlzIG1vZHVsZSBkb2VzIG5vdCB1c2UgYSBjb25uZWN0ZWQgZWxlbWVudCxcbi8vIGFuZCBzbyB3ZSBtdXN0IGVuc3VyZSB0aGF0IGEgKm5hdGl2ZSogTXV0YXRpb25PYnNlcnZlciBpcyBhdmFpbGFibGUuXG52YXIgc3VwcG9ydHNOYXRpdmVNdXRhdGlvbk9ic2VydmVyID0gaXNCcm93c2VyICYmIGlzTmF0aXZlKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKTtcblxuLyoqXG4qIENyZWF0ZSBhIGRlYm91bmNlZCB2ZXJzaW9uIG9mIGEgbWV0aG9kLCB0aGF0J3MgYXN5bmNocm9ub3VzbHkgZGVmZXJyZWRcbiogYnV0IGNhbGxlZCBpbiB0aGUgbWluaW11bSB0aW1lIHBvc3NpYmxlLlxuKlxuKiBAbWV0aG9kXG4qIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiogQGFyZ3VtZW50IHtGdW5jdGlvbn0gZm5cbiogQHJldHVybnMge0Z1bmN0aW9ufVxuKi9cbnZhciBkZWJvdW5jZSA9IHN1cHBvcnRzTmF0aXZlTXV0YXRpb25PYnNlcnZlciA/IG1pY3JvdGFza0RlYm91bmNlIDogdGFza0RlYm91bmNlO1xuXG4vKipcbiAqIFRlbGxzIGlmIGEgZ2l2ZW4gaW5wdXQgaXMgYSBudW1iZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gIHJldHVybiBuICE9PSAnJyAmJiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG59XG5cbi8qKlxuICogU2V0IHRoZSBzdHlsZSB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBzdHlsZSB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICB2YXIgdW5pdCA9ICcnO1xuICAgIC8vIGFkZCB1bml0IGlmIHRoZSB2YWx1ZSBpcyBudW1lcmljIGFuZCBpcyBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgIGlmIChbJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHByb3ApICE9PSAtMSAmJiBpc051bWVyaWMoc3R5bGVzW3Byb3BdKSkge1xuICAgICAgdW5pdCA9ICdweCc7XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF0gKyB1bml0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBmdW5jdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBbnl9IGZ1bmN0aW9uVG9DaGVjayAtIHZhcmlhYmxlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvOiBpcyBhIGZ1bmN0aW9uP1xuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmN0aW9uVG9DaGVjaykge1xuICB2YXIgZ2V0VHlwZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIGdldFR5cGUudG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIEdldCBDU1MgY29tcHV0ZWQgcHJvcGVydHkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIHZhciBjc3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTtcbiAgcmV0dXJuIHByb3BlcnR5ID8gY3NzW3Byb3BlcnR5XSA6IGNzcztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwYXJlbnROb2RlIG9yIHRoZSBob3N0IG9mIHRoZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlIHx8IGVsZW1lbnQuaG9zdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBzY3JvbGwgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFJldHVybiBib2R5LCBgZ2V0U2Nyb2xsYCB3aWxsIHRha2UgY2FyZSB0byBnZXQgdGhlIGNvcnJlY3QgYHNjcm9sbFRvcGAgZnJvbSBpdFxuICBpZiAoIWVsZW1lbnQgfHwgWydIVE1MJywgJ0JPRFknLCAnI2RvY3VtZW50J10uaW5kZXhPZihlbGVtZW50Lm5vZGVOYW1lKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHk7XG4gIH1cblxuICAvLyBGaXJlZm94IHdhbnQgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcblxuICB2YXIgX2dldFN0eWxlQ29tcHV0ZWRQcm9wID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93WTtcblxuICBpZiAoLyhhdXRvfHNjcm9sbCkvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xufVxuXG5mdW5jdGlvbiBpc09mZnNldENvbnRhaW5lcihlbGVtZW50KSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG5vZGVOYW1lID09PSAnSFRNTCcgfHwgZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5vZmZzZXRQYXJlbnQgPT09IGVsZW1lbnQ7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIHJvb3Qgbm9kZSAoZG9jdW1lbnQsIHNoYWRvd0RPTSByb290KSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcm9vdCBub2RlXG4gKi9cbmZ1bmN0aW9uIGdldFJvb3Qobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGdldFJvb3Qobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG9mZnNldCBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IG9mZnNldCBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgdmFyIG9mZnNldFBhcmVudCA9IGVsZW1lbnQgJiYgZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gIHZhciBub2RlTmFtZSA9IG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQubm9kZU5hbWU7XG5cbiAgaWYgKCFub2RlTmFtZSB8fCBub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQ7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIG9mZnNldCBwYXJlbnQgY29tbW9uIHRvIHRoZSB0d28gcHJvdmlkZWQgbm9kZXNcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDFcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBjb21tb24gb2Zmc2V0IHBhcmVudFxuICovXG5mdW5jdGlvbiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBlbGVtZW50Mikge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgaWYgKCFlbGVtZW50MSB8fCAhZWxlbWVudDEubm9kZVR5cGUgfHwgIWVsZW1lbnQyIHx8ICFlbGVtZW50Mi5ub2RlVHlwZSkge1xuICAgIHJldHVybiB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBtYWtlIHN1cmUgdG8gZ2l2ZSBhcyBcInN0YXJ0XCIgdGhlIGVsZW1lbnQgdGhhdCBjb21lcyBmaXJzdCBpbiB0aGUgRE9NXG4gIHZhciBvcmRlciA9IGVsZW1lbnQxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQyKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HO1xuICB2YXIgc3RhcnQgPSBvcmRlciA/IGVsZW1lbnQxIDogZWxlbWVudDI7XG4gIHZhciBlbmQgPSBvcmRlciA/IGVsZW1lbnQyIDogZWxlbWVudDE7XG5cbiAgLy8gR2V0IGNvbW1vbiBhbmNlc3RvciBjb250YWluZXJcbiAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xuICByYW5nZS5zZXRFbmQoZW5kLCAwKTtcbiAgdmFyIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG5cbiAgLy8gQm90aCBub2RlcyBhcmUgaW5zaWRlICNkb2N1bWVudFxuXG4gIGlmIChlbGVtZW50MSAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgJiYgZWxlbWVudDIgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIHx8IHN0YXJ0LmNvbnRhaW5zKGVuZCkpIHtcbiAgICBpZiAoaXNPZmZzZXRDb250YWluZXIoY29tbW9uQW5jZXN0b3JDb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChjb21tb25BbmNlc3RvckNvbnRhaW5lcik7XG4gIH1cblxuICAvLyBvbmUgb2YgdGhlIG5vZGVzIGlzIGluc2lkZSBzaGFkb3dET00sIGZpbmQgd2hpY2ggb25lXG4gIHZhciBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcbiAgaWYgKGVsZW1lbnQxcm9vdC5ob3N0KSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDFyb290Lmhvc3QsIGVsZW1lbnQyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZ2V0Um9vdChlbGVtZW50MikuaG9zdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzY3JvbGwgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQgaW4gdGhlIGdpdmVuIHNpZGUgKHRvcCBhbmQgbGVmdClcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHNpZGUgYHRvcGAgb3IgYGxlZnRgXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbW91bnQgb2Ygc2Nyb2xsZWQgcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIGdldFNjcm9sbChlbGVtZW50KSB7XG4gIHZhciBzaWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAndG9wJztcblxuICB2YXIgdXBwZXJTaWRlID0gc2lkZSA9PT0gJ3RvcCcgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgdmFyIGh0bWwgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBzY3JvbGxpbmdFbGVtZW50ID0gd2luZG93LmRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgaHRtbDtcbiAgICByZXR1cm4gc2Nyb2xsaW5nRWxlbWVudFt1cHBlclNpZGVdO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRbdXBwZXJTaWRlXTtcbn1cblxuLypcbiAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHJlY3QgLSBSZWN0IG9iamVjdCB5b3Ugd2FudCB0byBjaGFuZ2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBmcm9tIHRoZSBmdW5jdGlvbiByZWFkcyB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHBhcmFtIHtCb29sZWFufSBzdWJ0cmFjdCAtIHNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIHN1YnRyYWN0IHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY3QgLSBUaGUgbW9kaWZpZXIgcmVjdCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5jbHVkZVNjcm9sbChyZWN0LCBlbGVtZW50KSB7XG4gIHZhciBzdWJ0cmFjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gIHZhciBtb2RpZmllciA9IHN1YnRyYWN0ID8gLTEgOiAxO1xuICByZWN0LnRvcCArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZXR1cm4gcmVjdDtcbn1cblxuLypcbiAqIEhlbHBlciB0byBkZXRlY3QgYm9yZGVycyBvZiBhIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXG4gKiBSZXN1bHQgb2YgYGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eWAgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBheGlzIC0gYHhgIG9yIGB5YFxuICogQHJldHVybiB7bnVtYmVyfSBib3JkZXJzIC0gVGhlIGJvcmRlcnMgc2l6ZSBvZiB0aGUgZ2l2ZW4gYXhpc1xuICovXG5cbmZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcywgYXhpcykge1xuICB2YXIgc2lkZUEgPSBheGlzID09PSAneCcgPyAnTGVmdCcgOiAnVG9wJztcbiAgdmFyIHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICByZXR1cm4gK3N0eWxlc1snYm9yZGVyJyArIHNpZGVBICsgJ1dpZHRoJ10uc3BsaXQoJ3B4JylbMF0gKyArc3R5bGVzWydib3JkZXInICsgc2lkZUIgKyAnV2lkdGgnXS5zcGxpdCgncHgnKVswXTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93U2l6ZXMoKSB7XG4gIHZhciBib2R5ID0gd2luZG93LmRvY3VtZW50LmJvZHk7XG4gIHZhciBodG1sID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IE1hdGgubWF4KGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCksXG4gICAgd2lkdGg6IE1hdGgubWF4KGJvZHkuc2Nyb2xsV2lkdGgsIGJvZHkub2Zmc2V0V2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwub2Zmc2V0V2lkdGgpXG4gIH07XG59XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cblxuXG5cblxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIEdpdmVuIGVsZW1lbnQgb2Zmc2V0cywgZ2VuZXJhdGUgYW4gb3V0cHV0IHNpbWlsYXIgdG8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gb2Zmc2V0c1xuICogQHJldHVybnMge09iamVjdH0gQ2xpZW50UmVjdCBsaWtlIG91dHB1dFxuICovXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0KG9mZnNldHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvZmZzZXRzLCB7XG4gICAgcmlnaHQ6IG9mZnNldHMubGVmdCArIG9mZnNldHMud2lkdGgsXG4gICAgYm90dG9tOiBvZmZzZXRzLnRvcCArIG9mZnNldHMuaGVpZ2h0XG4gIH0pO1xufVxuXG4vKipcbiAqIFRlbGxzIGlmIHlvdSBhcmUgcnVubmluZyBJbnRlcm5ldCBFeHBsb3JlciAxMFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHJldHVybnMge0Jvb2xlYW59IGlzSUUxMFxuICovXG52YXIgaXNJRTEwID0gdW5kZWZpbmVkO1xuXG52YXIgaXNJRTEwJDEgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChpc0lFMTAgPT09IHVuZGVmaW5lZCkge1xuICAgIGlzSUUxMCA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoJ01TSUUgMTAnKSAhPT0gLTE7XG4gIH1cbiAgcmV0dXJuIGlzSUUxMDtcbn07XG5cbi8qKlxuICogR2V0IGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gY2xpZW50IHJlY3RcbiAqL1xuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSB7fTtcblxuICAvLyBJRTEwIDEwIEZJWDogUGxlYXNlLCBkb24ndCBhc2ssIHRoZSBlbGVtZW50IGlzbid0XG4gIC8vIGNvbnNpZGVyZWQgaW4gRE9NIGluIHNvbWUgY2lyY3Vtc3RhbmNlcy4uLlxuICAvLyBUaGlzIGlzbid0IHJlcHJvZHVjaWJsZSBpbiBJRTEwIGNvbXBhdGliaWxpdHkgbW9kZSBvZiBJRTExXG4gIGlmIChpc0lFMTAkMSgpKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICAgICAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQ7XG4gICAgICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9IGVsc2Uge1xuICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcbiAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3BcbiAgfTtcblxuICAvLyBzdWJ0cmFjdCBzY3JvbGxiYXIgc2l6ZSBmcm9tIHNpemVzXG4gIHZhciBzaXplcyA9IGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJyA/IGdldFdpbmRvd1NpemVzKCkgOiB7fTtcbiAgdmFyIHdpZHRoID0gc2l6ZXMud2lkdGggfHwgZWxlbWVudC5jbGllbnRXaWR0aCB8fCByZXN1bHQucmlnaHQgLSByZXN1bHQubGVmdDtcbiAgdmFyIGhlaWdodCA9IHNpemVzLmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCB8fCByZXN1bHQuYm90dG9tIC0gcmVzdWx0LnRvcDtcblxuICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldFdpZHRoIC0gd2lkdGg7XG4gIHZhciB2ZXJ0U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQ7XG5cbiAgLy8gaWYgYW4gaHlwb3RoZXRpY2FsIHNjcm9sbGJhciBpcyBkZXRlY3RlZCwgd2UgbXVzdCBiZSBzdXJlIGl0J3Mgbm90IGEgYGJvcmRlcmBcbiAgLy8gd2UgbWFrZSB0aGlzIGNoZWNrIGNvbmRpdGlvbmFsIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gIGlmIChob3JpelNjcm9sbGJhciB8fCB2ZXJ0U2Nyb2xsYmFyKSB7XG4gICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgICBob3JpelNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd4Jyk7XG4gICAgdmVydFNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd5Jyk7XG5cbiAgICByZXN1bHQud2lkdGggLT0gaG9yaXpTY3JvbGxiYXI7XG4gICAgcmVzdWx0LmhlaWdodCAtPSB2ZXJ0U2Nyb2xsYmFyO1xuICB9XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3QocmVzdWx0KTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGNoaWxkcmVuLCBwYXJlbnQpIHtcbiAgdmFyIGlzSUUxMCA9IGlzSUUxMCQxKCk7XG4gIHZhciBpc0hUTUwgPSBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJztcbiAgdmFyIGNoaWxkcmVuUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChjaGlsZHJlbik7XG4gIHZhciBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xuICB2YXIgb2Zmc2V0cyA9IGdldENsaWVudFJlY3Qoe1xuICAgIHRvcDogY2hpbGRyZW5SZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wLFxuICAgIGxlZnQ6IGNoaWxkcmVuUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgIHdpZHRoOiBjaGlsZHJlblJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBjaGlsZHJlblJlY3QuaGVpZ2h0XG4gIH0pO1xuXG4gIC8vIFN1YnRyYWN0IG1hcmdpbnMgb2YgZG9jdW1lbnRFbGVtZW50IGluIGNhc2UgaXQncyBiZWluZyB1c2VkIGFzIHBhcmVudFxuICAvLyB3ZSBkbyB0aGlzIG9ubHkgb24gSFRNTCBiZWNhdXNlIGl0J3MgdGhlIG9ubHkgZWxlbWVudCB0aGF0IGJlaGF2ZXNcbiAgLy8gZGlmZmVyZW50bHkgd2hlbiBtYXJnaW5zIGFyZSBhcHBsaWVkIHRvIGl0LiBUaGUgbWFyZ2lucyBhcmUgaW5jbHVkZWQgaW5cbiAgLy8gdGhlIGJveCBvZiB0aGUgZG9jdW1lbnRFbGVtZW50LCBpbiB0aGUgb3RoZXIgY2FzZXMgbm90LlxuICBpZiAoaXNIVE1MIHx8IHBhcmVudC5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShwYXJlbnQpO1xuICAgIHZhciBib3JkZXJUb3BXaWR0aCA9IGlzSUUxMCAmJiBpc0hUTUwgPyAwIDogK3N0eWxlcy5ib3JkZXJUb3BXaWR0aC5zcGxpdCgncHgnKVswXTtcbiAgICB2YXIgYm9yZGVyTGVmdFdpZHRoID0gaXNJRTEwICYmIGlzSFRNTCA/IDAgOiArc3R5bGVzLmJvcmRlckxlZnRXaWR0aC5zcGxpdCgncHgnKVswXTtcbiAgICB2YXIgbWFyZ2luVG9wID0gaXNJRTEwICYmIGlzSFRNTCA/IDAgOiArc3R5bGVzLm1hcmdpblRvcC5zcGxpdCgncHgnKVswXTtcbiAgICB2YXIgbWFyZ2luTGVmdCA9IGlzSUUxMCAmJiBpc0hUTUwgPyAwIDogK3N0eWxlcy5tYXJnaW5MZWZ0LnNwbGl0KCdweCcpWzBdO1xuXG4gICAgb2Zmc2V0cy50b3AgLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5ib3R0b20gLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5sZWZ0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG4gICAgb2Zmc2V0cy5yaWdodCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuXG4gICAgLy8gQXR0YWNoIG1hcmdpblRvcCBhbmQgbWFyZ2luTGVmdCBiZWNhdXNlIGluIHNvbWUgY2lyY3Vtc3RhbmNlcyB3ZSBtYXkgbmVlZCB0aGVtXG4gICAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdDtcbiAgfVxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoc2Nyb2xsUGFyZW50KSAmJiAoaXNJRTEwIHx8IHNjcm9sbFBhcmVudC5ub2RlTmFtZSAhPT0gJ0JPRFknKSkge1xuICAgIG9mZnNldHMgPSBpbmNsdWRlU2Nyb2xsKG9mZnNldHMsIHBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKGVsZW1lbnQpIHtcbiAgdmFyIGh0bWwgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgcmVsYXRpdmVPZmZzZXQgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoZWxlbWVudCwgaHRtbCk7XG4gIHZhciB3aWR0aCA9IE1hdGgubWF4KGh0bWwuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGh0bWwpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChodG1sLCAnbGVmdCcpO1xuXG4gIHZhciBvZmZzZXQgPSB7XG4gICAgdG9wOiBzY3JvbGxUb3AgLSByZWxhdGl2ZU9mZnNldC50b3AgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5Ub3AsXG4gICAgbGVmdDogc2Nyb2xsTGVmdCAtIHJlbGF0aXZlT2Zmc2V0LmxlZnQgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5MZWZ0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KG9mZnNldCk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgZml4ZWQgb3IgaXMgaW5zaWRlIGEgZml4ZWQgcGFyZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gY3VzdG9tQ29udGFpbmVyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvIFwiaXNGaXhlZD9cIlxuICovXG5mdW5jdGlvbiBpc0ZpeGVkKGVsZW1lbnQpIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGlzRml4ZWQoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG59XG5cbi8qKlxuICogQ29tcHV0ZWQgdGhlIGJvdW5kYXJpZXMgbGltaXRzIGFuZCByZXR1cm4gdGhlbVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYWRkaW5nXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudCAtIEVsZW1lbnQgdXNlZCB0byBkZWZpbmUgdGhlIGJvdW5kYXJpZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9IENvb3JkaW5hdGVzIG9mIHRoZSBib3VuZGFyaWVzXG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kYXJpZXMocG9wcGVyLCByZWZlcmVuY2UsIHBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIHZhciBib3VuZGFyaWVzID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCByZWZlcmVuY2UpO1xuXG4gIC8vIEhhbmRsZSB2aWV3cG9ydCBjYXNlXG4gIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgIGJvdW5kYXJpZXMgPSBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUob2Zmc2V0UGFyZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBIYW5kbGUgb3RoZXIgY2FzZXMgYmFzZWQgb24gRE9NIGVsZW1lbnQgdXNlZCBhcyBib3VuZGFyaWVzXG4gICAgdmFyIGJvdW5kYXJpZXNOb2RlID0gdm9pZCAwO1xuICAgIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUocG9wcGVyKSk7XG4gICAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICBib3VuZGFyaWVzTm9kZSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBib3VuZGFyaWVzRWxlbWVudDtcbiAgICB9XG5cbiAgICB2YXIgb2Zmc2V0cyA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShib3VuZGFyaWVzTm9kZSwgb2Zmc2V0UGFyZW50KTtcblxuICAgIC8vIEluIGNhc2Ugb2YgSFRNTCwgd2UgbmVlZCBhIGRpZmZlcmVudCBjb21wdXRhdGlvblxuICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmICFpc0ZpeGVkKG9mZnNldFBhcmVudCkpIHtcbiAgICAgIHZhciBfZ2V0V2luZG93U2l6ZXMgPSBnZXRXaW5kb3dTaXplcygpLFxuICAgICAgICAgIGhlaWdodCA9IF9nZXRXaW5kb3dTaXplcy5oZWlnaHQsXG4gICAgICAgICAgd2lkdGggPSBfZ2V0V2luZG93U2l6ZXMud2lkdGg7XG5cbiAgICAgIGJvdW5kYXJpZXMudG9wICs9IG9mZnNldHMudG9wIC0gb2Zmc2V0cy5tYXJnaW5Ub3A7XG4gICAgICBib3VuZGFyaWVzLmJvdHRvbSA9IGhlaWdodCArIG9mZnNldHMudG9wO1xuICAgICAgYm91bmRhcmllcy5sZWZ0ICs9IG9mZnNldHMubGVmdCAtIG9mZnNldHMubWFyZ2luTGVmdDtcbiAgICAgIGJvdW5kYXJpZXMucmlnaHQgPSB3aWR0aCArIG9mZnNldHMubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIGFsbCB0aGUgb3RoZXIgRE9NIGVsZW1lbnRzLCB0aGlzIG9uZSBpcyBnb29kXG4gICAgICBib3VuZGFyaWVzID0gb2Zmc2V0cztcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgcGFkZGluZ3NcbiAgYm91bmRhcmllcy5sZWZ0ICs9IHBhZGRpbmc7XG4gIGJvdW5kYXJpZXMudG9wICs9IHBhZGRpbmc7XG4gIGJvdW5kYXJpZXMucmlnaHQgLT0gcGFkZGluZztcbiAgYm91bmRhcmllcy5ib3R0b20gLT0gcGFkZGluZztcblxuICByZXR1cm4gYm91bmRhcmllcztcbn1cblxuLyoqXG4gKiBVdGlsaXR5IHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBgYXV0b2AgcGxhY2VtZW50IHRvIHRoZSBwbGFjZW1lbnQgd2l0aCBtb3JlXG4gKiBhdmFpbGFibGUgc3BhY2UuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChwbGFjZW1lbnQsIHJlZlJlY3QsIHBvcHBlciwgcmVmZXJlbmNlLCBib3VuZGFyaWVzRWxlbWVudCkge1xuICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2F1dG8nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG5cbiAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCAwLCBib3VuZGFyaWVzRWxlbWVudCk7XG5cbiAgdmFyIHNpZGVzID0ge1xuICAgIHRvcDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcCxcbiAgICByaWdodDogYm91bmRhcmllcy5yaWdodCAtIHJlZlJlY3QucmlnaHQsXG4gICAgYm90dG9tOiBib3VuZGFyaWVzLmJvdHRvbSAtIHJlZlJlY3QuYm90dG9tLFxuICAgIGxlZnQ6IHJlZlJlY3QubGVmdCAtIGJvdW5kYXJpZXMubGVmdFxuICB9O1xuXG4gIHZhciBjb21wdXRlZFBsYWNlbWVudCA9IE9iamVjdC5rZXlzKHNpZGVzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIHNpZGVzW2JdIC0gc2lkZXNbYV07XG4gIH0pWzBdO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgcmV0dXJuIGNvbXB1dGVkUGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcbn1cblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlKSB7XG4gIHZhciBjb21tb25PZmZzZXRQYXJlbnQgPSBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgcmVmZXJlbmNlKTtcbiAgcmV0dXJuIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShyZWZlcmVuY2UsIGNvbW1vbk9mZnNldFBhcmVudCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvdXRlciBzaXplcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCAob2Zmc2V0IHNpemUgKyBtYXJnaW5zKVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvYmplY3QgY29udGFpbmluZyB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZ2V0T3V0ZXJTaXplcyhlbGVtZW50KSB7XG4gIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3ApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblJpZ2h0KTtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCArIHksXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCArIHhcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudFxuICovXG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgdmFyIGhhc2ggPSB7IGxlZnQ6ICdyaWdodCcsIHJpZ2h0OiAnbGVmdCcsIGJvdHRvbTogJ3RvcCcsIHRvcDogJ2JvdHRvbScgfTtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uIC0gQ1NTIHBvc2l0aW9uIHRoZSBQb3BwZXIgd2lsbCBnZXQgYXBwbGllZFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0cyAtIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge1N0cmluZ30gcGxhY2VtZW50IC0gb25lIG9mIHRoZSB2YWxpZCBwbGFjZW1lbnQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gcG9wcGVyT2Zmc2V0cyAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGdldFBvcHBlck9mZnNldHMocG9wcGVyLCByZWZlcmVuY2VPZmZzZXRzLCBwbGFjZW1lbnQpIHtcbiAgcGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgLy8gR2V0IHBvcHBlciBub2RlIHNpemVzXG4gIHZhciBwb3BwZXJSZWN0ID0gZ2V0T3V0ZXJTaXplcyhwb3BwZXIpO1xuXG4gIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcbiAgdmFyIHBvcHBlck9mZnNldHMgPSB7XG4gICAgd2lkdGg6IHBvcHBlclJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBwb3BwZXJSZWN0LmhlaWdodFxuICB9O1xuXG4gIC8vIGRlcGVuZGluZyBieSB0aGUgcG9wcGVyIHBsYWNlbWVudCB3ZSBoYXZlIHRvIGNvbXB1dGUgaXRzIG9mZnNldHMgc2xpZ2h0bHkgZGlmZmVyZW50bHlcbiAgdmFyIGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICB2YXIgbWFpblNpZGUgPSBpc0hvcml6ID8gJ3RvcCcgOiAnbGVmdCc7XG4gIHZhciBzZWNvbmRhcnlTaWRlID0gaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICB2YXIgc2Vjb25kYXJ5TWVhc3VyZW1lbnQgPSAhaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBwb3BwZXJPZmZzZXRzW21haW5TaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbbWFpblNpZGVdICsgcmVmZXJlbmNlT2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC0gcG9wcGVyUmVjdFttZWFzdXJlbWVudF0gLyAyO1xuICBpZiAocGxhY2VtZW50ID09PSBzZWNvbmRhcnlTaWRlKSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gLSBwb3BwZXJSZWN0W3NlY29uZGFyeU1lYXN1cmVtZW50XTtcbiAgfSBlbHNlIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1tnZXRPcHBvc2l0ZVBsYWNlbWVudChzZWNvbmRhcnlTaWRlKV07XG4gIH1cblxuICByZXR1cm4gcG9wcGVyT2Zmc2V0cztcbn1cblxuLyoqXG4gKiBNaW1pY3MgdGhlIGBmaW5kYCBtZXRob2Qgb2YgQXJyYXlcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZnVuY3Rpb24gZmluZChhcnIsIGNoZWNrKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gICAgcmV0dXJuIGFyci5maW5kKGNoZWNrKTtcbiAgfVxuXG4gIC8vIHVzZSBgZmlsdGVyYCB0byBvYnRhaW4gdGhlIHNhbWUgYmVoYXZpb3Igb2YgYGZpbmRgXG4gIHJldHVybiBhcnIuZmlsdGVyKGNoZWNrKVswXTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBtYXRjaGluZyBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZnVuY3Rpb24gZmluZEluZGV4KGFyciwgcHJvcCwgdmFsdWUpIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kSW5kZXggaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KSB7XG4gICAgcmV0dXJuIGFyci5maW5kSW5kZXgoZnVuY3Rpb24gKGN1cikge1xuICAgICAgcmV0dXJuIGN1cltwcm9wXSA9PT0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvLyB1c2UgYGZpbmRgICsgYGluZGV4T2ZgIGlmIGBmaW5kSW5kZXhgIGlzbid0IHN1cHBvcnRlZFxuICB2YXIgbWF0Y2ggPSBmaW5kKGFyciwgZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmpbcHJvcF0gPT09IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIGFyci5pbmRleE9mKG1hdGNoKTtcbn1cblxuLyoqXG4gKiBMb29wIHRyb3VnaCB0aGUgbGlzdCBvZiBtb2RpZmllcnMgYW5kIHJ1biB0aGVtIGluIG9yZGVyLFxuICogZWFjaCBvZiB0aGVtIHdpbGwgdGhlbiBlZGl0IHRoZSBkYXRhIG9iamVjdC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5kcyAtIE9wdGlvbmFsIG1vZGlmaWVyIG5hbWUgdXNlZCBhcyBzdG9wcGVyXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH1cbiAqL1xuZnVuY3Rpb24gcnVuTW9kaWZpZXJzKG1vZGlmaWVycywgZGF0YSwgZW5kcykge1xuICB2YXIgbW9kaWZpZXJzVG9SdW4gPSBlbmRzID09PSB1bmRlZmluZWQgPyBtb2RpZmllcnMgOiBtb2RpZmllcnMuc2xpY2UoMCwgZmluZEluZGV4KG1vZGlmaWVycywgJ25hbWUnLCBlbmRzKSk7XG5cbiAgbW9kaWZpZXJzVG9SdW4uZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAobW9kaWZpZXIuZnVuY3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybignYG1vZGlmaWVyLmZ1bmN0aW9uYCBpcyBkZXByZWNhdGVkLCB1c2UgYG1vZGlmaWVyLmZuYCEnKTtcbiAgICB9XG4gICAgdmFyIGZuID0gbW9kaWZpZXIuZnVuY3Rpb24gfHwgbW9kaWZpZXIuZm47XG4gICAgaWYgKG1vZGlmaWVyLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIGRhdGEgPSBmbihkYXRhLCBtb2RpZmllcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyLCBjb21wdXRpbmcgdGhlIG5ldyBvZmZzZXRzIGFuZCBhcHBseWluZ1xuICogdGhlIG5ldyBzdHlsZS48YnIgLz5cbiAqIFByZWZlciBgc2NoZWR1bGVVcGRhdGVgIG92ZXIgYHVwZGF0ZWAgYmVjYXVzZSBvZiBwZXJmb3JtYW5jZSByZWFzb25zLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIC8vIGlmIHBvcHBlciBpcyBkZXN0cm95ZWQsIGRvbid0IHBlcmZvcm0gYW55IGZ1cnRoZXIgdXBkYXRlXG4gIGlmICh0aGlzLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGRhdGEgPSB7XG4gICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgc3R5bGVzOiB7fSxcbiAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICBmbGlwcGVkOiBmYWxzZSxcbiAgICBvZmZzZXRzOiB7fVxuICB9O1xuXG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0aGlzLnN0YXRlLCB0aGlzLnBvcHBlciwgdGhpcy5yZWZlcmVuY2UpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBkYXRhLnBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KHRoaXMub3B0aW9ucy5wbGFjZW1lbnQsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIHRoaXMucG9wcGVyLCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50KTtcblxuICAvLyBzdG9yZSB0aGUgY29tcHV0ZWQgcGxhY2VtZW50IGluc2lkZSBgb3JpZ2luYWxQbGFjZW1lbnRgXG4gIGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcblxuICAvLyBjb21wdXRlIHRoZSBwb3BwZXIgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0UG9wcGVyT2Zmc2V0cyh0aGlzLnBvcHBlciwgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSwgZGF0YS5wbGFjZW1lbnQpO1xuICBkYXRhLm9mZnNldHMucG9wcGVyLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblxuICAvLyBydW4gdGhlIG1vZGlmaWVyc1xuICBkYXRhID0gcnVuTW9kaWZpZXJzKHRoaXMubW9kaWZpZXJzLCBkYXRhKTtcblxuICAvLyB0aGUgZmlyc3QgYHVwZGF0ZWAgd2lsbCBjYWxsIGBvbkNyZWF0ZWAgY2FsbGJhY2tcbiAgLy8gdGhlIG90aGVyIG9uZXMgd2lsbCBjYWxsIGBvblVwZGF0ZWAgY2FsbGJhY2tcbiAgaWYgKCF0aGlzLnN0YXRlLmlzQ3JlYXRlZCkge1xuICAgIHRoaXMuc3RhdGUuaXNDcmVhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vcHRpb25zLm9uVXBkYXRlKGRhdGEpO1xuICB9XG59XG5cbi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgaXMgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc01vZGlmaWVyRW5hYmxlZChtb2RpZmllcnMsIG1vZGlmaWVyTmFtZSkge1xuICByZXR1cm4gbW9kaWZpZXJzLnNvbWUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgZW5hYmxlZCA9IF9yZWYuZW5hYmxlZDtcbiAgICByZXR1cm4gZW5hYmxlZCAmJiBuYW1lID09PSBtb2RpZmllck5hbWU7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcHJlZml4ZWQgc3VwcG9ydGVkIHByb3BlcnR5IG5hbWVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eSAoY2FtZWxDYXNlKVxuICogQHJldHVybnMge1N0cmluZ30gcHJlZml4ZWQgcHJvcGVydHkgKGNhbWVsQ2FzZSlcbiAqL1xuZnVuY3Rpb24gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnR5KSB7XG4gIHZhciBwcmVmaXhlcyA9IFtmYWxzZSwgJ21zJywgJ3dlYmtpdCcsICdtb3onLCAnbyddO1xuICB2YXIgdXBwZXJQcm9wID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICB2YXIgdG9DaGVjayA9IHByZWZpeCA/ICcnICsgcHJlZml4ICsgdXBwZXJQcm9wIDogcHJvcGVydHk7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZVt0b0NoZWNrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0b0NoZWNrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBEZXN0cm95IHRoZSBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgdGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgLy8gdG91Y2ggRE9NIG9ubHkgaWYgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGlzIGVuYWJsZWRcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKHRoaXMubW9kaWZpZXJzLCAnYXBwbHlTdHlsZScpKSB7XG4gICAgdGhpcy5wb3BwZXIucmVtb3ZlQXR0cmlidXRlKCd4LXBsYWNlbWVudCcpO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnRvcCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlW2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyldID0gJyc7XG4gIH1cblxuICB0aGlzLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuXG4gIC8vIHJlbW92ZSB0aGUgcG9wcGVyIGlmIHVzZXIgZXhwbGljaXR5IGFza2VkIGZvciB0aGUgZGVsZXRpb24gb24gZGVzdHJveVxuICAvLyBkbyBub3QgdXNlIGByZW1vdmVgIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnQgaXRcbiAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmVPbkRlc3Ryb3kpIHtcbiAgICB0aGlzLnBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wcGVyKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gYXR0YWNoVG9TY3JvbGxQYXJlbnRzKHNjcm9sbFBhcmVudCwgZXZlbnQsIGNhbGxiYWNrLCBzY3JvbGxQYXJlbnRzKSB7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQubm9kZU5hbWUgPT09ICdCT0RZJztcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IHdpbmRvdyA6IHNjcm9sbFBhcmVudDtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgaWYgKCFpc0JvZHkpIHtcbiAgICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoZ2V0U2Nyb2xsUGFyZW50KHRhcmdldC5wYXJlbnROb2RlKSwgZXZlbnQsIGNhbGxiYWNrLCBzY3JvbGxQYXJlbnRzKTtcbiAgfVxuICBzY3JvbGxQYXJlbnRzLnB1c2godGFyZ2V0KTtcbn1cblxuLyoqXG4gKiBTZXR1cCBuZWVkZWQgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBvcHRpb25zLCBzdGF0ZSwgdXBkYXRlQm91bmQpIHtcbiAgLy8gUmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBzdGF0ZS51cGRhdGVCb3VuZCA9IHVwZGF0ZUJvdW5kO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAvLyBTY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgdmFyIHNjcm9sbEVsZW1lbnQgPSBnZXRTY3JvbGxQYXJlbnQocmVmZXJlbmNlKTtcbiAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKHNjcm9sbEVsZW1lbnQsICdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCwgc3RhdGUuc2Nyb2xsUGFyZW50cyk7XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBzY3JvbGxFbGVtZW50O1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gdHJ1ZTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogSXQgd2lsbCBhZGQgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHN0YXJ0IHJlY2FsY3VsYXRpbmdcbiAqIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIgZWxlbWVudCB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICghdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHNldHVwRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucywgdGhpcy5zdGF0ZSwgdGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKHJlZmVyZW5jZSwgc3RhdGUpIHtcbiAgLy8gUmVtb3ZlIHJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcblxuICAvLyBSZW1vdmUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gIHN0YXRlLnNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcbiAgfSk7XG5cbiAgLy8gUmVzZXQgc3RhdGVcbiAgc3RhdGUudXBkYXRlQm91bmQgPSBudWxsO1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0gW107XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBudWxsO1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gZmFsc2U7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBJdCB3aWxsIHJlbW92ZSByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgd29uJ3QgcmVjYWxjdWxhdGUgcG9wcGVyIHBvc2l0aW9uXG4gKiB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC4gSXQgYWxzbyB3b24ndCB0cmlnZ2VyIG9uVXBkYXRlIGNhbGxiYWNrIGFueW1vcmUsXG4gKiB1bmxlc3MgeW91IGNhbGwgYHVwZGF0ZWAgbWV0aG9kIG1hbnVhbGx5LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICh0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9IHJlbW92ZUV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCB0aGlzLnN0YXRlKTtcbiAgfVxufVxuXG4vKipcbiAqIFNldCB0aGUgYXR0cmlidXRlcyB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBhdHRyaWJ1dGVzIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcF07XG4gICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cmlidXRlc1twcm9wXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5zdHlsZXMgLSBMaXN0IG9mIHN0eWxlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLmF0dHJpYnV0ZXMgLSBMaXN0IG9mIGF0dHJpYnV0ZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2FtZSBkYXRhIG9iamVjdFxuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlKGRhdGEsIG9wdGlvbnMpIHtcbiAgLy8gYXBwbHkgdGhlIGZpbmFsIG9mZnNldHMgdG8gdGhlIHBvcHBlclxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICB2YXIgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBkYXRhLm9mZnNldHMucG9wcGVyLnBvc2l0aW9uXG4gIH07XG5cbiAgdmFyIGF0dHJpYnV0ZXMgPSB7XG4gICAgJ3gtcGxhY2VtZW50JzogZGF0YS5wbGFjZW1lbnRcbiAgfTtcblxuICAvLyByb3VuZCB0b3AgYW5kIGxlZnQgdG8gYXZvaWQgYmx1cnJ5IHRleHRcbiAgdmFyIGxlZnQgPSBNYXRoLnJvdW5kKGRhdGEub2Zmc2V0cy5wb3BwZXIubGVmdCk7XG4gIHZhciB0b3AgPSBNYXRoLnJvdW5kKGRhdGEub2Zmc2V0cy5wb3BwZXIudG9wKTtcblxuICAvLyBpZiBncHVBY2NlbGVyYXRpb24gaXMgc2V0IHRvIHRydWUgYW5kIHRyYW5zZm9ybSBpcyBzdXBwb3J0ZWQsXG4gIC8vICB3ZSB1c2UgYHRyYW5zbGF0ZTNkYCB0byBhcHBseSB0aGUgcG9zaXRpb24gdG8gdGhlIHBvcHBlciB3ZVxuICAvLyBhdXRvbWF0aWNhbGx5IHVzZSB0aGUgc3VwcG9ydGVkIHByZWZpeGVkIHZlcnNpb24gaWYgbmVlZGVkXG4gIHZhciBwcmVmaXhlZFByb3BlcnR5ID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgaWYgKG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uICYmIHByZWZpeGVkUHJvcGVydHkpIHtcbiAgICBzdHlsZXNbcHJlZml4ZWRQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgsIDApJztcbiAgICBzdHlsZXMudG9wID0gMDtcbiAgICBzdHlsZXMubGVmdCA9IDA7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSAndHJhbnNmb3JtJztcbiAgfSBlbHNlIHtcbiAgICAvLyBvdGh3ZXJpc2UsIHdlIHVzZSB0aGUgc3RhbmRhcmQgYGxlZnRgIGFuZCBgdG9wYCBwcm9wZXJ0aWVzXG4gICAgc3R5bGVzLmxlZnQgPSBsZWZ0O1xuICAgIHN0eWxlcy50b3AgPSB0b3A7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSAndG9wLCBsZWZ0JztcbiAgfVxuXG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLnN0eWxlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIGluIHRoaXMgd2F5IHdlIGNhbiBtYWtlIHRoZSAzcmQgcGFydHkgbW9kaWZpZXJzIGFkZCBjdXN0b20gc3R5bGVzIHRvIGl0XG4gIC8vIEJlIGF3YXJlLCBtb2RpZmllcnMgY291bGQgb3ZlcnJpZGUgdGhlIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgcHJldmlvdXNcbiAgLy8gbGluZXMgb2YgdGhpcyBtb2RpZmllciFcbiAgc2V0U3R5bGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBfZXh0ZW5kcyh7fSwgc3R5bGVzLCBkYXRhLnN0eWxlcykpO1xuXG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLmF0dHJpYnV0ZXNgIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLFxuICAvLyB0aGV5IHdpbGwgYmUgc2V0IGFzIEhUTUwgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICBzZXRBdHRyaWJ1dGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywgZGF0YS5hdHRyaWJ1dGVzKSk7XG5cbiAgLy8gaWYgdGhlIGFycm93IHN0eWxlIGhhcyBiZWVuIGNvbXB1dGVkLCBhcHBseSB0aGUgYXJyb3cgc3R5bGVcbiAgaWYgKGRhdGEub2Zmc2V0cy5hcnJvdykge1xuICAgIHNldFN0eWxlcyhkYXRhLmFycm93RWxlbWVudCwgZGF0YS5vZmZzZXRzLmFycm93KTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFNldCB0aGUgeC1wbGFjZW1lbnQgYXR0cmlidXRlIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgYmVjYXVzZSBpdCBjb3VsZCBiZSB1c2VkXG4gKiB0byBhZGQgbWFyZ2lucyB0byB0aGUgcG9wcGVyIG1hcmdpbnMgbmVlZHMgdG8gYmUgY2FsY3VsYXRlZCB0byBnZXQgdGhlXG4gKiBjb3JyZWN0IHBvcHBlciBvZmZzZXRzLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5tb2RpZmllcnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBwb3BwZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFBvcHBlci5qcyBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGFwcGx5U3R5bGVPbkxvYWQocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMsIG1vZGlmaWVyT3B0aW9ucywgc3RhdGUpIHtcbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIHZhciByZWZlcmVuY2VPZmZzZXRzID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICB2YXIgcGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQob3B0aW9ucy5wbGFjZW1lbnQsIHJlZmVyZW5jZU9mZnNldHMsIHBvcHBlciwgcmVmZXJlbmNlLCBvcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50KTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcsIHBsYWNlbWVudCk7XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGRlcGVuZHMgZnJvbSBhbm90aGVyIG9uZS48YnIgLz5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgbmVlZGVkIG1vZGlmaWVyIGlzIGxpc3RlZCBhbmQgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVycyAtIGxpc3Qgb2YgbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGluZ05hbWUgLSBuYW1lIG9mIHJlcXVlc3RpbmcgbW9kaWZpZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0ZWROYW1lIC0gbmFtZSBvZiByZXF1ZXN0ZWQgbW9kaWZpZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc01vZGlmaWVyUmVxdWlyZWQobW9kaWZpZXJzLCByZXF1ZXN0aW5nTmFtZSwgcmVxdWVzdGVkTmFtZSkge1xuICB2YXIgcmVxdWVzdGluZyA9IGZpbmQobW9kaWZpZXJzLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgIHJldHVybiBuYW1lID09PSByZXF1ZXN0aW5nTmFtZTtcbiAgfSk7XG5cbiAgdmFyIGlzUmVxdWlyZWQgPSAhIXJlcXVlc3RpbmcgJiYgbW9kaWZpZXJzLnNvbWUoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09IHJlcXVlc3RlZE5hbWUgJiYgbW9kaWZpZXIuZW5hYmxlZCAmJiBtb2RpZmllci5vcmRlciA8IHJlcXVlc3Rpbmcub3JkZXI7XG4gIH0pO1xuXG4gIGlmICghaXNSZXF1aXJlZCkge1xuICAgIHZhciBfcmVxdWVzdGluZyA9ICdgJyArIHJlcXVlc3RpbmdOYW1lICsgJ2AnO1xuICAgIHZhciByZXF1ZXN0ZWQgPSAnYCcgKyByZXF1ZXN0ZWROYW1lICsgJ2AnO1xuICAgIGNvbnNvbGUud2FybihyZXF1ZXN0ZWQgKyAnIG1vZGlmaWVyIGlzIHJlcXVpcmVkIGJ5ICcgKyBfcmVxdWVzdGluZyArICcgbW9kaWZpZXIgaW4gb3JkZXIgdG8gd29yaywgYmUgc3VyZSB0byBpbmNsdWRlIGl0IGJlZm9yZSAnICsgX3JlcXVlc3RpbmcgKyAnIScpO1xuICB9XG4gIHJldHVybiBpc1JlcXVpcmVkO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gYXJyb3coZGF0YSwgb3B0aW9ucykge1xuICAvLyBhcnJvdyBkZXBlbmRzIG9uIGtlZXBUb2dldGhlciBpbiBvcmRlciB0byB3b3JrXG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnYXJyb3cnLCAna2VlcFRvZ2V0aGVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciBhcnJvd0VsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGEgc3RyaW5nLCBzdXBwb3NlIGl0J3MgYSBDU1Mgc2VsZWN0b3JcbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIG5vdCBmb3VuZCwgZG9uJ3QgcnVuIHRoZSBtb2RpZmllclxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgdGhlIGFycm93RWxlbWVudCBpc24ndCBhIHF1ZXJ5IHNlbGVjdG9yIHdlIG11c3QgY2hlY2sgdGhhdCB0aGVcbiAgICAvLyBwcm92aWRlZCBET00gbm9kZSBpcyBjaGlsZCBvZiBpdHMgcG9wcGVyIG5vZGVcbiAgICBpZiAoIWRhdGEuaW5zdGFuY2UucG9wcGVyLmNvbnRhaW5zKGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignV0FSTklORzogYGFycm93LmVsZW1lbnRgIG11c3QgYmUgY2hpbGQgb2YgaXRzIHBvcHBlciBlbGVtZW50IScpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBwb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuICB2YXIgcmVmZXJlbmNlID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcbiAgdmFyIGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICB2YXIgc2lkZSA9IGlzVmVydGljYWwgPyAndG9wJyA6ICdsZWZ0JztcbiAgdmFyIGFsdFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIHZhciBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICB2YXIgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xuXG4gIC8vXG4gIC8vIGV4dGVuZHMga2VlcFRvZ2V0aGVyIGJlaGF2aW9yIG1ha2luZyBzdXJlIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgaGF2ZSBlbm91Z2ggcGl4ZWxzIGluIGNvbmp1Y3Rpb25cbiAgLy9cblxuICAvLyB0b3AvbGVmdCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUgPCBwb3BwZXJbc2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC09IHBvcHBlcltzaWRlXSAtIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUpO1xuICB9XG4gIC8vIGJvdHRvbS9yaWdodCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbc2lkZV0gKyBhcnJvd0VsZW1lbnRTaXplID4gcG9wcGVyW29wU2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdICs9IHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgLSBwb3BwZXJbb3BTaWRlXTtcbiAgfVxuXG4gIC8vIGNvbXB1dGUgY2VudGVyIG9mIHRoZSBwb3BwZXJcbiAgdmFyIGNlbnRlciA9IHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyO1xuXG4gIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCBwb3BwZXIgb2Zmc2V0c1xuICB2YXIgc2lkZVZhbHVlID0gY2VudGVyIC0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKVtzaWRlXTtcblxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyBwb3BwZXJcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4ocG9wcGVyW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcblxuICBkYXRhLmFycm93RWxlbWVudCA9IGFycm93RWxlbWVudDtcbiAgZGF0YS5vZmZzZXRzLmFycm93ID0ge307XG4gIGRhdGEub2Zmc2V0cy5hcnJvd1tzaWRlXSA9IHNpZGVWYWx1ZTtcbiAgZGF0YS5vZmZzZXRzLmFycm93W2FsdFNpZGVdID0gJyc7IC8vIG1ha2Ugc3VyZSB0byB1bnNldCBhbnkgZXZlbnR1YWwgYWx0U2lkZSB2YWx1ZSBmcm9tIHRoZSBET00gbm9kZVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IHZhcmlhdGlvbiBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IHZhcmlhdGlvblxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbikge1xuICBpZiAodmFyaWF0aW9uID09PSAnZW5kJykge1xuICAgIHJldHVybiAnc3RhcnQnO1xuICB9IGVsc2UgaWYgKHZhcmlhdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgIHJldHVybiAnZW5kJztcbiAgfVxuICByZXR1cm4gdmFyaWF0aW9uO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgYWNjZXB0ZWQgcGxhY2VtZW50cyB0byB1c2UgYXMgdmFsdWVzIG9mIHRoZSBgcGxhY2VtZW50YCBvcHRpb24uPGJyIC8+XG4gKiBWYWxpZCBwbGFjZW1lbnRzIGFyZTpcbiAqIC0gYGF1dG9gXG4gKiAtIGB0b3BgXG4gKiAtIGByaWdodGBcbiAqIC0gYGJvdHRvbWBcbiAqIC0gYGxlZnRgXG4gKlxuICogRWFjaCBwbGFjZW1lbnQgY2FuIGhhdmUgYSB2YXJpYXRpb24gZnJvbSB0aGlzIGxpc3Q6XG4gKiAtIGAtc3RhcnRgXG4gKiAtIGAtZW5kYFxuICpcbiAqIFZhcmlhdGlvbnMgYXJlIGludGVycHJldGVkIGVhc2lseSBpZiB5b3UgdGhpbmsgb2YgdGhlbSBhcyB0aGUgbGVmdCB0byByaWdodFxuICogd3JpdHRlbiBsYW5ndWFnZXMuIEhvcml6b250YWxseSAoYHRvcGAgYW5kIGBib3R0b21gKSwgYHN0YXJ0YCBpcyBsZWZ0IGFuZCBgZW5kYFxuICogaXMgcmlnaHQuPGJyIC8+XG4gKiBWZXJ0aWNhbGx5IChgbGVmdGAgYW5kIGByaWdodGApLCBgc3RhcnRgIGlzIHRvcCBhbmQgYGVuZGAgaXMgYm90dG9tLlxuICpcbiAqIFNvbWUgdmFsaWQgZXhhbXBsZXMgYXJlOlxuICogLSBgdG9wLWVuZGAgKG9uIHRvcCBvZiByZWZlcmVuY2UsIHJpZ2h0IGFsaWduZWQpXG4gKiAtIGByaWdodC1zdGFydGAgKG9uIHJpZ2h0IG9mIHJlZmVyZW5jZSwgdG9wIGFsaWduZWQpXG4gKiAtIGBib3R0b21gIChvbiBib3R0b20sIGNlbnRlcmVkKVxuICogLSBgYXV0by1yaWdodGAgKG9uIHRoZSBzaWRlIHdpdGggbW9yZSBzcGFjZSBhdmFpbGFibGUsIGFsaWdubWVudCBkZXBlbmRzIGJ5IHBsYWNlbWVudClcbiAqXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAZW51bSB7U3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKiBAbWV0aG9kIHBsYWNlbWVudHNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xudmFyIHBsYWNlbWVudHMgPSBbJ2F1dG8tc3RhcnQnLCAnYXV0bycsICdhdXRvLWVuZCcsICd0b3Atc3RhcnQnLCAndG9wJywgJ3RvcC1lbmQnLCAncmlnaHQtc3RhcnQnLCAncmlnaHQnLCAncmlnaHQtZW5kJywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdsZWZ0LWVuZCcsICdsZWZ0JywgJ2xlZnQtc3RhcnQnXTtcblxuLy8gR2V0IHJpZCBvZiBgYXV0b2AgYGF1dG8tc3RhcnRgIGFuZCBgYXV0by1lbmRgXG52YXIgdmFsaWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5zbGljZSgzKTtcblxuLyoqXG4gKiBHaXZlbiBhbiBpbml0aWFsIHBsYWNlbWVudCwgcmV0dXJucyBhbGwgdGhlIHN1YnNlcXVlbnQgcGxhY2VtZW50c1xuICogY2xvY2t3aXNlIChvciBjb3VudGVyLWNsb2Nrd2lzZSkuXG4gKlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCAtIEEgdmFsaWQgcGxhY2VtZW50IChpdCBhY2NlcHRzIHZhcmlhdGlvbnMpXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IGNvdW50ZXIgLSBTZXQgdG8gdHJ1ZSB0byB3YWxrIHRoZSBwbGFjZW1lbnRzIGNvdW50ZXJjbG9ja3dpc2VcbiAqIEByZXR1cm5zIHtBcnJheX0gcGxhY2VtZW50cyBpbmNsdWRpbmcgdGhlaXIgdmFyaWF0aW9uc1xuICovXG5mdW5jdGlvbiBjbG9ja3dpc2UocGxhY2VtZW50KSB7XG4gIHZhciBjb3VudGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICB2YXIgaW5kZXggPSB2YWxpZFBsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpO1xuICB2YXIgYXJyID0gdmFsaWRQbGFjZW1lbnRzLnNsaWNlKGluZGV4ICsgMSkuY29uY2F0KHZhbGlkUGxhY2VtZW50cy5zbGljZSgwLCBpbmRleCkpO1xuICByZXR1cm4gY291bnRlciA/IGFyci5yZXZlcnNlKCkgOiBhcnI7XG59XG5cbnZhciBCRUhBVklPUlMgPSB7XG4gIEZMSVA6ICdmbGlwJyxcbiAgQ0xPQ0tXSVNFOiAnY2xvY2t3aXNlJyxcbiAgQ09VTlRFUkNMT0NLV0lTRTogJ2NvdW50ZXJjbG9ja3dpc2UnXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gZmxpcChkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGlmIGBpbm5lcmAgbW9kaWZpZXIgaXMgZW5hYmxlZCwgd2UgY2FuJ3QgdXNlIHRoZSBgZmxpcGAgbW9kaWZpZXJcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaW5uZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEuZmxpcHBlZCAmJiBkYXRhLnBsYWNlbWVudCA9PT0gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCkge1xuICAgIC8vIHNlZW1zIGxpa2UgZmxpcCBpcyB0cnlpbmcgdG8gbG9vcCwgcHJvYmFibHkgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIG9uIGFueSBvZiB0aGUgZmxpcHBhYmxlIHNpZGVzXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQpO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVsxXSB8fCAnJztcblxuICB2YXIgZmxpcE9yZGVyID0gW107XG5cbiAgc3dpdGNoIChvcHRpb25zLmJlaGF2aW9yKSB7XG4gICAgY2FzZSBCRUhBVklPUlMuRkxJUDpcbiAgICAgIGZsaXBPcmRlciA9IFtwbGFjZW1lbnQsIHBsYWNlbWVudE9wcG9zaXRlXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ09VTlRFUkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGZsaXBPcmRlciA9IG9wdGlvbnMuYmVoYXZpb3I7XG4gIH1cblxuICBmbGlwT3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgICBpZiAocGxhY2VtZW50ICE9PSBzdGVwIHx8IGZsaXBPcmRlci5sZW5ndGggPT09IGluZGV4ICsgMSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgICBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG4gICAgdmFyIHJlZk9mZnNldHMgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuXG4gICAgLy8gdXNpbmcgZmxvb3IgYmVjYXVzZSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgbWF5IGNvbnRhaW4gZGVjaW1hbHMgd2UgYXJlIG5vdCBnb2luZyB0byBjb25zaWRlciBoZXJlXG4gICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgb3ZlcmxhcHNSZWYgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKHJlZk9mZnNldHMubGVmdCkgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnICYmIGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihyZWZPZmZzZXRzLnJpZ2h0KSB8fCBwbGFjZW1lbnQgPT09ICd0b3AnICYmIGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKHJlZk9mZnNldHMudG9wKSB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKHJlZk9mZnNldHMuYm90dG9tKTtcblxuICAgIHZhciBvdmVyZmxvd3NMZWZ0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKGJvdW5kYXJpZXMubGVmdCk7XG4gICAgdmFyIG92ZXJmbG93c1JpZ2h0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihib3VuZGFyaWVzLnJpZ2h0KTtcbiAgICB2YXIgb3ZlcmZsb3dzVG9wID0gZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IoYm91bmRhcmllcy50b3ApO1xuICAgIHZhciBvdmVyZmxvd3NCb3R0b20gPSBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XG5cbiAgICB2YXIgb3ZlcmZsb3dzQm91bmRhcmllcyA9IHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIG92ZXJmbG93c0xlZnQgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0IHx8IHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgb3ZlcmZsb3dzVG9wIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgb3ZlcmZsb3dzQm90dG9tO1xuXG4gICAgLy8gZmxpcCB0aGUgdmFyaWF0aW9uIGlmIHJlcXVpcmVkXG4gICAgdmFyIGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICAgIHZhciBmbGlwcGVkVmFyaWF0aW9uID0gISFvcHRpb25zLmZsaXBWYXJpYXRpb25zICYmIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NMZWZ0IHx8IGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NSaWdodCB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzVG9wIHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzQm90dG9tKTtcblxuICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzIHx8IGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgIC8vIHRoaXMgYm9vbGVhbiB0byBkZXRlY3QgYW55IGZsaXAgbG9vcFxuICAgICAgZGF0YS5mbGlwcGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAgIHZhcmlhdGlvbiA9IGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGRhdGEucGxhY2VtZW50ID0gcGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRQb3BwZXJPZmZzZXRzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCBkYXRhLnBsYWNlbWVudCk7XG5cbiAgICAgIGRhdGEgPSBydW5Nb2RpZmllcnMoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGRhdGEsICdmbGlwJyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBrZWVwVG9nZXRoZXIoZGF0YSkge1xuICB2YXIgcG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcbiAgdmFyIHJlZmVyZW5jZSA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBzaWRlID0gaXNWZXJ0aWNhbCA/ICdyaWdodCcgOiAnYm90dG9tJztcbiAgdmFyIG9wU2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICBpZiAocG9wcGVyW3NpZGVdIDwgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pIC0gcG9wcGVyW21lYXN1cmVtZW50XTtcbiAgfVxuICBpZiAocG9wcGVyW29wU2lkZV0gPiBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW3NpZGVdKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyaW5nIGNvbnRhaW5pbmcgdmFsdWUgKyB1bml0IGludG8gYSBweCB2YWx1ZSBudW1iZXJcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzdHIgLSBWYWx1ZSArIHVuaXQgc3RyaW5nXG4gKiBAYXJndW1lbnQge1N0cmluZ30gbWVhc3VyZW1lbnQgLSBgaGVpZ2h0YCBvciBgd2lkdGhgXG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfVxuICogVmFsdWUgaW4gcGl4ZWxzLCBvciBvcmlnaW5hbCBzdHJpbmcgaWYgbm8gdmFsdWVzIHdlcmUgZXh0cmFjdGVkXG4gKi9cbmZ1bmN0aW9uIHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cykge1xuICAvLyBzZXBhcmF0ZSB2YWx1ZSBmcm9tIHVuaXRcbiAgdmFyIHNwbGl0ID0gc3RyLm1hdGNoKC8oKD86XFwtfFxcKyk/XFxkKlxcLj9cXGQqKSguKikvKTtcbiAgdmFyIHZhbHVlID0gK3NwbGl0WzFdO1xuICB2YXIgdW5pdCA9IHNwbGl0WzJdO1xuXG4gIC8vIElmIGl0J3Mgbm90IGEgbnVtYmVyIGl0J3MgYW4gb3BlcmF0b3IsIEkgZ3Vlc3NcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBpZiAodW5pdC5pbmRleE9mKCclJykgPT09IDApIHtcbiAgICB2YXIgZWxlbWVudCA9IHZvaWQgMDtcbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgIGNhc2UgJyVwJzpcbiAgICAgICAgZWxlbWVudCA9IHBvcHBlck9mZnNldHM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICBjYXNlICclcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50ID0gcmVmZXJlbmNlT2Zmc2V0cztcbiAgICB9XG5cbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3QoZWxlbWVudCk7XG4gICAgcmV0dXJuIHJlY3RbbWVhc3VyZW1lbnRdIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3ZoJyB8fCB1bml0ID09PSAndncnKSB7XG4gICAgLy8gaWYgaXMgYSB2aCBvciB2dywgd2UgY2FsY3VsYXRlIHRoZSBzaXplIGJhc2VkIG9uIHRoZSB2aWV3cG9ydFxuICAgIHZhciBzaXplID0gdm9pZCAwO1xuICAgIGlmICh1bml0ID09PSAndmgnKSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemUgLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBpcyBhbiBleHBsaWNpdCBwaXhlbCB1bml0LCB3ZSBnZXQgcmlkIG9mIHRoZSB1bml0IGFuZCBrZWVwIHRoZSB2YWx1ZVxuICAgIC8vIGlmIGlzIGFuIGltcGxpY2l0IHVuaXQsIGl0J3MgcHgsIGFuZCB3ZSByZXR1cm4ganVzdCB0aGUgdmFsdWVcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhbiBgb2Zmc2V0YCBzdHJpbmcgdG8gZXh0cmFwb2xhdGUgYHhgIGFuZCBgeWAgbnVtZXJpYyBvZmZzZXRzLlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IG9mZnNldFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gYmFzZVBsYWNlbWVudFxuICogQHJldHVybnMge0FycmF5fSBhIHR3byBjZWxscyBhcnJheSB3aXRoIHggYW5kIHkgb2Zmc2V0cyBpbiBudW1iZXJzXG4gKi9cbmZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cywgYmFzZVBsYWNlbWVudCkge1xuICB2YXIgb2Zmc2V0cyA9IFswLCAwXTtcblxuICAvLyBVc2UgaGVpZ2h0IGlmIHBsYWNlbWVudCBpcyBsZWZ0IG9yIHJpZ2h0IGFuZCBpbmRleCBpcyAwIG90aGVyd2lzZSB1c2Ugd2lkdGhcbiAgLy8gaW4gdGhpcyB3YXkgdGhlIGZpcnN0IG9mZnNldCB3aWxsIHVzZSBhbiBheGlzIGFuZCB0aGUgc2Vjb25kIG9uZVxuICAvLyB3aWxsIHVzZSB0aGUgb3RoZXIgb25lXG4gIHZhciB1c2VIZWlnaHQgPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAvLyBTcGxpdCB0aGUgb2Zmc2V0IHN0cmluZyB0byBvYnRhaW4gYSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHNcbiAgLy8gVGhlIHJlZ2V4IGFkZHJlc3NlcyB2YWx1ZXMgd2l0aCB0aGUgcGx1cyBvciBtaW51cyBzaWduIGluIGZyb250ICgrMTAsIC0yMCwgZXRjKVxuICB2YXIgZnJhZ21lbnRzID0gb2Zmc2V0LnNwbGl0KC8oXFwrfFxcLSkvKS5tYXAoZnVuY3Rpb24gKGZyYWcpIHtcbiAgICByZXR1cm4gZnJhZy50cmltKCk7XG4gIH0pO1xuXG4gIC8vIERldGVjdCBpZiB0aGUgb2Zmc2V0IHN0cmluZyBjb250YWlucyBhIHBhaXIgb2YgdmFsdWVzIG9yIGEgc2luZ2xlIG9uZVxuICAvLyB0aGV5IGNvdWxkIGJlIHNlcGFyYXRlZCBieSBjb21tYSBvciBzcGFjZVxuICB2YXIgZGl2aWRlciA9IGZyYWdtZW50cy5pbmRleE9mKGZpbmQoZnJhZ21lbnRzLCBmdW5jdGlvbiAoZnJhZykge1xuICAgIHJldHVybiBmcmFnLnNlYXJjaCgvLHxcXHMvKSAhPT0gLTE7XG4gIH0pKTtcblxuICBpZiAoZnJhZ21lbnRzW2RpdmlkZXJdICYmIGZyYWdtZW50c1tkaXZpZGVyXS5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgY29uc29sZS53YXJuKCdPZmZzZXRzIHNlcGFyYXRlZCBieSB3aGl0ZSBzcGFjZShzKSBhcmUgZGVwcmVjYXRlZCwgdXNlIGEgY29tbWEgKCwpIGluc3RlYWQuJyk7XG4gIH1cblxuICAvLyBJZiBkaXZpZGVyIGlzIGZvdW5kLCB3ZSBkaXZpZGUgdGhlIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kcyB0byBkaXZpZGVcbiAgLy8gdGhlbSBieSBvZnNldCBYIGFuZCBZLlxuICB2YXIgc3BsaXRSZWdleCA9IC9cXHMqLFxccyp8XFxzKy87XG4gIHZhciBvcHMgPSBkaXZpZGVyICE9PSAtMSA/IFtmcmFnbWVudHMuc2xpY2UoMCwgZGl2aWRlcikuY29uY2F0KFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMF1dKSwgW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVsxXV0uY29uY2F0KGZyYWdtZW50cy5zbGljZShkaXZpZGVyICsgMSkpXSA6IFtmcmFnbWVudHNdO1xuXG4gIC8vIENvbnZlcnQgdGhlIHZhbHVlcyB3aXRoIHVuaXRzIHRvIGFic29sdXRlIHBpeGVscyB0byBhbGxvdyBvdXIgY29tcHV0YXRpb25zXG4gIG9wcyA9IG9wcy5tYXAoZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgIC8vIE1vc3Qgb2YgdGhlIHVuaXRzIHJlbHkgb24gdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwb3BwZXJcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSAoaW5kZXggPT09IDEgPyAhdXNlSGVpZ2h0IDogdXNlSGVpZ2h0KSA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICByZXR1cm4gb3BcbiAgICAvLyBUaGlzIGFnZ3JlZ2F0ZXMgYW55IGArYCBvciBgLWAgc2lnbiB0aGF0IGFyZW4ndCBjb25zaWRlcmVkIG9wZXJhdG9yc1xuICAgIC8vIGUuZy46IDEwICsgKzUgPT4gWzEwLCArLCArNV1cbiAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYVthLmxlbmd0aCAtIDFdID09PSAnJyAmJiBbJysnLCAnLSddLmluZGV4T2YoYikgIT09IC0xKSB7XG4gICAgICAgIGFbYS5sZW5ndGggLSAxXSA9IGI7XG4gICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9IGVsc2UgaWYgKG1lcmdlV2l0aFByZXZpb3VzKSB7XG4gICAgICAgIGFbYS5sZW5ndGggLSAxXSArPSBiO1xuICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgIH1cbiAgICB9LCBbXSlcbiAgICAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIHN0cmluZyB2YWx1ZXMgaW50byBudW1iZXIgdmFsdWVzIChpbiBweClcbiAgICAubWFwKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBMb29wIHRyb3VnaCB0aGUgb2Zmc2V0cyBhcnJheXMgYW5kIGV4ZWN1dGUgdGhlIG9wZXJhdGlvbnNcbiAgb3BzLmZvckVhY2goZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgIG9wLmZvckVhY2goZnVuY3Rpb24gKGZyYWcsIGluZGV4Mikge1xuICAgICAgaWYgKGlzTnVtZXJpYyhmcmFnKSkge1xuICAgICAgICBvZmZzZXRzW2luZGV4XSArPSBmcmFnICogKG9wW2luZGV4MiAtIDFdID09PSAnLScgPyAtMSA6IDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQGFyZ3VtZW50IHtOdW1iZXJ8U3RyaW5nfSBvcHRpb25zLm9mZnNldD0wXG4gKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gb2Zmc2V0KGRhdGEsIF9yZWYpIHtcbiAgdmFyIG9mZnNldCA9IF9yZWYub2Zmc2V0O1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQsXG4gICAgICBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIHZhciBvZmZzZXRzID0gdm9pZCAwO1xuICBpZiAoaXNOdW1lcmljKCtvZmZzZXQpKSB7XG4gICAgb2Zmc2V0cyA9IFsrb2Zmc2V0LCAwXTtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXRzID0gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYmFzZVBsYWNlbWVudCk7XG4gIH1cblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0IC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wIC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1sxXTtcbiAgfVxuXG4gIGRhdGEucG9wcGVyID0gcG9wcGVyO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIGJvdW5kYXJpZXNFbGVtZW50ID0gb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCB8fCBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KTtcbiAgb3B0aW9ucy5ib3VuZGFyaWVzID0gYm91bmRhcmllcztcblxuICB2YXIgb3JkZXIgPSBvcHRpb25zLnByaW9yaXR5O1xuICB2YXIgcG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcblxuICB2YXIgY2hlY2sgPSB7XG4gICAgcHJpbWFyeTogZnVuY3Rpb24gcHJpbWFyeShwbGFjZW1lbnQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHBvcHBlcltwbGFjZW1lbnRdO1xuICAgICAgaWYgKHBvcHBlcltwbGFjZW1lbnRdIDwgYm91bmRhcmllc1twbGFjZW1lbnRdICYmICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1heChwb3BwZXJbcGxhY2VtZW50XSwgYm91bmRhcmllc1twbGFjZW1lbnRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgcGxhY2VtZW50LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IGZ1bmN0aW9uIHNlY29uZGFyeShwbGFjZW1lbnQpIHtcbiAgICAgIHZhciBtYWluU2lkZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgdmFyIHZhbHVlID0gcG9wcGVyW21haW5TaWRlXTtcbiAgICAgIGlmIChwb3BwZXJbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJiAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4ocG9wcGVyW21haW5TaWRlXSwgYm91bmRhcmllc1twbGFjZW1lbnRdIC0gKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IHBvcHBlci53aWR0aCA6IHBvcHBlci5oZWlnaHQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgbWFpblNpZGUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgb3JkZXIuZm9yRWFjaChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgdmFyIHNpZGUgPSBbJ2xlZnQnLCAndG9wJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknO1xuICAgIHBvcHBlciA9IF9leHRlbmRzKHt9LCBwb3BwZXIsIGNoZWNrW3NpZGVdKHBsYWNlbWVudCkpO1xuICB9KTtcblxuICBkYXRhLm9mZnNldHMucG9wcGVyID0gcG9wcGVyO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBzaGlmdChkYXRhKSB7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIHNoaWZ0dmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgLy8gaWYgc2hpZnQgc2hpZnR2YXJpYXRpb24gaXMgc3BlY2lmaWVkLCBydW4gdGhlIG1vZGlmaWVyXG4gIGlmIChzaGlmdHZhcmlhdGlvbikge1xuICAgIHZhciByZWZlcmVuY2UgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuICAgIHZhciBwb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuICAgIHZhciBpc1ZlcnRpY2FsID0gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG4gICAgdmFyIHNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICAgIHZhciBzaGlmdE9mZnNldHMgPSB7XG4gICAgICBzdGFydDogZGVmaW5lUHJvcGVydHkoe30sIHNpZGUsIHJlZmVyZW5jZVtzaWRlXSksXG4gICAgICBlbmQ6IGRlZmluZVByb3BlcnR5KHt9LCBzaWRlLCByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbWVhc3VyZW1lbnRdIC0gcG9wcGVyW21lYXN1cmVtZW50XSlcbiAgICB9O1xuXG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IF9leHRlbmRzKHt9LCBwb3BwZXIsIHNoaWZ0T2Zmc2V0c1tzaGlmdHZhcmlhdGlvbl0pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBoaWRlKGRhdGEpIHtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdoaWRlJywgJ3ByZXZlbnRPdmVyZmxvdycpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgcmVmUmVjdCA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG4gIHZhciBib3VuZCA9IGZpbmQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSAncHJldmVudE92ZXJmbG93JztcbiAgfSkuYm91bmRhcmllcztcblxuICBpZiAocmVmUmVjdC5ib3R0b20gPCBib3VuZC50b3AgfHwgcmVmUmVjdC5sZWZ0ID4gYm91bmQucmlnaHQgfHwgcmVmUmVjdC50b3AgPiBib3VuZC5ib3R0b20gfHwgcmVmUmVjdC5yaWdodCA8IGJvdW5kLmxlZnQpIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSB0cnVlO1xuICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IGZhbHNlO1xuICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gaW5uZXIoZGF0YSkge1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBwb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuICB2YXIgcmVmZXJlbmNlID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucmVmZXJlbmNlKTtcbiAgdmFyIGlzSG9yaXogPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICB2YXIgc3VidHJhY3RMZW5ndGggPSBbJ3RvcCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA9PT0gLTE7XG5cbiAgcG9wcGVyW2lzSG9yaXogPyAnbGVmdCcgOiAndG9wJ10gPSByZWZlcmVuY2VbcGxhY2VtZW50XSAtIChzdWJ0cmFjdExlbmd0aCA/IHBvcHBlcltpc0hvcml6ID8gJ3dpZHRoJyA6ICdoZWlnaHQnXSA6IDApO1xuXG4gIGRhdGEucGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QocG9wcGVyKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBNb2RpZmllciBmdW5jdGlvbiwgZWFjaCBtb2RpZmllciBjYW4gaGF2ZSBhIGZ1bmN0aW9uIG9mIHRoaXMgdHlwZSBhc3NpZ25lZFxuICogdG8gaXRzIGBmbmAgcHJvcGVydHkuPGJyIC8+XG4gKiBUaGVzZSBmdW5jdGlvbnMgd2lsbCBiZSBjYWxsZWQgb24gZWFjaCB1cGRhdGUsIHRoaXMgbWVhbnMgdGhhdCB5b3UgbXVzdFxuICogbWFrZSBzdXJlIHRoZXkgYXJlIHBlcmZvcm1hbnQgZW5vdWdoIHRvIGF2b2lkIHBlcmZvcm1hbmNlIGJvdHRsZW5lY2tzLlxuICpcbiAqIEBmdW5jdGlvbiBNb2RpZmllckZuXG4gKiBAYXJndW1lbnQge2RhdGFPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge2RhdGFPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuXG4vKipcbiAqIE1vZGlmaWVycyBhcmUgcGx1Z2lucyB1c2VkIHRvIGFsdGVyIHRoZSBiZWhhdmlvciBvZiB5b3VyIHBvcHBlcnMuPGJyIC8+XG4gKiBQb3BwZXIuanMgdXNlcyBhIHNldCBvZiA5IG1vZGlmaWVycyB0byBwcm92aWRlIGFsbCB0aGUgYmFzaWMgZnVuY3Rpb25hbGl0aWVzXG4gKiBuZWVkZWQgYnkgdGhlIGxpYnJhcnkuXG4gKlxuICogVXN1YWxseSB5b3UgZG9uJ3Qgd2FudCB0byBvdmVycmlkZSB0aGUgYG9yZGVyYCwgYGZuYCBhbmQgYG9uTG9hZGAgcHJvcHMuXG4gKiBBbGwgdGhlIG90aGVyIHByb3BlcnRpZXMgYXJlIGNvbmZpZ3VyYXRpb25zIHRoYXQgY291bGQgYmUgdHdlYWtlZC5cbiAqIEBuYW1lc3BhY2UgbW9kaWZpZXJzXG4gKi9cbnZhciBtb2RpZmllcnMgPSB7XG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIHNoaWZ0IHRoZSBwb3BwZXIgb24gdGhlIHN0YXJ0IG9yIGVuZCBvZiBpdHMgcmVmZXJlbmNlXG4gICAqIGVsZW1lbnQuPGJyIC8+XG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgdmFyaWF0aW9uIG9mIHRoZSBgcGxhY2VtZW50YCBwcm9wZXJ0eS48YnIgLz5cbiAgICogSXQgY2FuIGJlIG9uZSBlaXRoZXIgYC1lbmRgIG9yIGAtc3RhcnRgLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgc2hpZnQ6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAxMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBzaGlmdFxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgYG9mZnNldGAgbW9kaWZpZXIgY2FuIHNoaWZ0IHlvdXIgcG9wcGVyIG9uIGJvdGggaXRzIGF4aXMuXG4gICAqXG4gICAqIEl0IGFjY2VwdHMgdGhlIGZvbGxvd2luZyB1bml0czpcbiAgICogLSBgcHhgIG9yIHVuaXRsZXNzLCBpbnRlcnByZXRlZCBhcyBwaXhlbHNcbiAgICogLSBgJWAgb3IgYCVyYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgKiAtIGAlcGAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogLSBgdndgLCBDU1Mgdmlld3BvcnQgd2lkdGggdW5pdFxuICAgKiAtIGB2aGAsIENTUyB2aWV3cG9ydCBoZWlnaHQgdW5pdFxuICAgKlxuICAgKiBGb3IgbGVuZ3RoIGlzIGludGVuZGVkIHRoZSBtYWluIGF4aXMgcmVsYXRpdmUgdG8gdGhlIHBsYWNlbWVudCBvZiB0aGUgcG9wcGVyLjxiciAvPlxuICAgKiBUaGlzIG1lYW5zIHRoYXQgaWYgdGhlIHBsYWNlbWVudCBpcyBgdG9wYCBvciBgYm90dG9tYCwgdGhlIGxlbmd0aCB3aWxsIGJlIHRoZVxuICAgKiBgd2lkdGhgLiBJbiBjYXNlIG9mIGBsZWZ0YCBvciBgcmlnaHRgLCBpdCB3aWxsIGJlIHRoZSBoZWlnaHQuXG4gICAqXG4gICAqIFlvdSBjYW4gcHJvdmlkZSBhIHNpbmdsZSB2YWx1ZSAoYXMgYE51bWJlcmAgb3IgYFN0cmluZ2ApLCBvciBhIHBhaXIgb2YgdmFsdWVzXG4gICAqIGFzIGBTdHJpbmdgIGRpdmlkZWQgYnkgYSBjb21tYSBvciBvbmUgKG9yIG1vcmUpIHdoaXRlIHNwYWNlcy48YnIgLz5cbiAgICogVGhlIGxhdHRlciBpcyBhIGRlcHJlY2F0ZWQgbWV0aG9kIGJlY2F1c2UgaXQgbGVhZHMgdG8gY29uZnVzaW9uIGFuZCB3aWxsIGJlXG4gICAqIHJlbW92ZWQgaW4gdjIuPGJyIC8+XG4gICAqIEFkZGl0aW9uYWxseSwgaXQgYWNjZXB0cyBhZGRpdGlvbnMgYW5kIHN1YnRyYWN0aW9ucyBiZXR3ZWVuIGRpZmZlcmVudCB1bml0cy5cbiAgICogTm90ZSB0aGF0IG11bHRpcGxpY2F0aW9ucyBhbmQgZGl2aXNpb25zIGFyZW4ndCBzdXBwb3J0ZWQuXG4gICAqXG4gICAqIFZhbGlkIGV4YW1wbGVzIGFyZTpcbiAgICogYGBgXG4gICAqIDEwXG4gICAqICcxMCUnXG4gICAqICcxMCwgMTAnXG4gICAqICcxMCUsIDEwJ1xuICAgKiAnMTAgKyAxMCUnXG4gICAqICcxMCAtIDV2aCArIDMlJ1xuICAgKiAnLTEwcHggKyA1dmgsIDVweCAtIDYlJ1xuICAgKiBgYGBcbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIG9mZnNldDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0yMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDIwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IG9mZnNldCxcbiAgICAvKiogQHByb3Age051bWJlcnxTdHJpbmd9IG9mZnNldD0wXG4gICAgICogVGhlIG9mZnNldCB2YWx1ZSBhcyBkZXNjcmliZWQgaW4gdGhlIG1vZGlmaWVyIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgb2Zmc2V0OiAwXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gcHJldmVudCB0aGUgcG9wcGVyIGZyb20gYmVpbmcgcG9zaXRpb25lZCBvdXRzaWRlIHRoZSBib3VuZGFyeS5cbiAgICpcbiAgICogQW4gc2NlbmFyaW8gZXhpc3RzIHdoZXJlIHRoZSByZWZlcmVuY2UgaXRzZWxmIGlzIG5vdCB3aXRoaW4gdGhlIGJvdW5kYXJpZXMuPGJyIC8+XG4gICAqIFdlIGNhbiBzYXkgaXQgaGFzIFwiZXNjYXBlZCB0aGUgYm91bmRhcmllc1wiIOKAlCBvciBqdXN0IFwiZXNjYXBlZFwiLjxiciAvPlxuICAgKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBkZWNpZGUgd2hldGhlciB0aGUgcG9wcGVyIHNob3VsZCBlaXRoZXI6XG4gICAqXG4gICAqIC0gZGV0YWNoIGZyb20gdGhlIHJlZmVyZW5jZSBhbmQgcmVtYWluIFwidHJhcHBlZFwiIGluIHRoZSBib3VuZGFyaWVzLCBvclxuICAgKiAtIGlmIGl0IHNob3VsZCBpZ25vcmUgdGhlIGJvdW5kYXJ5IGFuZCBcImVzY2FwZSB3aXRoIGl0cyByZWZlcmVuY2VcIlxuICAgKlxuICAgKiBXaGVuIGBlc2NhcGVXaXRoUmVmZXJlbmNlYCBpcyBzZXQgdG9gdHJ1ZWAgYW5kIHJlZmVyZW5jZSBpcyBjb21wbGV0ZWx5XG4gICAqIG91dHNpZGUgaXRzIGJvdW5kYXJpZXMsIHRoZSBwb3BwZXIgd2lsbCBvdmVyZmxvdyAob3IgY29tcGxldGVseSBsZWF2ZSlcbiAgICogdGhlIGJvdW5kYXJpZXMgaW4gb3JkZXIgdG8gcmVtYWluIGF0dGFjaGVkIHRvIHRoZSBlZGdlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAzMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gICAgLyoqXG4gICAgICogQHByb3Age0FycmF5fSBwcmlvcml0eT1bJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddXG4gICAgICogUG9wcGVyIHdpbGwgdHJ5IHRvIHByZXZlbnQgb3ZlcmZsb3cgZm9sbG93aW5nIHRoZXNlIHByaW9yaXRpZXMgYnkgZGVmYXVsdCxcbiAgICAgKiB0aGVuLCBpdCBjb3VsZCBvdmVyZmxvdyBvbiB0aGUgbGVmdCBhbmQgb24gdG9wIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcHJpb3JpdHk6IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ10sXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogQW1vdW50IG9mIHBpeGVsIHVzZWQgdG8gZGVmaW5lIGEgbWluaW11bSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBib3VuZGFyaWVzXG4gICAgICogYW5kIHRoZSBwb3BwZXIgdGhpcyBtYWtlcyBzdXJlIHRoZSBwb3BwZXIgaGFzIGFsd2F5cyBhIGxpdHRsZSBwYWRkaW5nXG4gICAgICogYmV0d2VlbiB0aGUgZWRnZXMgb2YgaXRzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3Njcm9sbFBhcmVudCdcbiAgICAgKiBCb3VuZGFyaWVzIHVzZWQgYnkgdGhlIG1vZGlmaWVyLCBjYW4gYmUgYHNjcm9sbFBhcmVudGAsIGB3aW5kb3dgLFxuICAgICAqIGB2aWV3cG9ydGAgb3IgYW55IERPTSBlbGVtZW50LlxuICAgICAqL1xuICAgIGJvdW5kYXJpZXNFbGVtZW50OiAnc2Nyb2xsUGFyZW50J1xuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2Ugc3VyZSB0aGUgcmVmZXJlbmNlIGFuZCBpdHMgcG9wcGVyIHN0YXkgbmVhciBlYWNob3RoZXJzXG4gICAqIHdpdGhvdXQgbGVhdmluZyBhbnkgZ2FwIGJldHdlZW4gdGhlIHR3by4gRXhwZWNpYWxseSB1c2VmdWwgd2hlbiB0aGUgYXJyb3cgaXNcbiAgICogZW5hYmxlZCBhbmQgeW91IHdhbnQgdG8gYXNzdXJlIGl0IHRvIHBvaW50IHRvIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogSXQgY2FyZXMgb25seSBhYm91dCB0aGUgZmlyc3QgYXhpcywgeW91IGNhbiBzdGlsbCBoYXZlIHBvcHBlcnMgd2l0aCBtYXJnaW5cbiAgICogYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBrZWVwVG9nZXRoZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NDAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA0MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBrZWVwVG9nZXRoZXJcbiAgfSxcblxuICAvKipcbiAgICogVGhpcyBtb2RpZmllciBpcyB1c2VkIHRvIG1vdmUgdGhlIGBhcnJvd0VsZW1lbnRgIG9mIHRoZSBwb3BwZXIgdG8gbWFrZVxuICAgKiBzdXJlIGl0IGlzIHBvc2l0aW9uZWQgYmV0d2VlbiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgYW5kIGl0cyBwb3BwZXIgZWxlbWVudC5cbiAgICogSXQgd2lsbCByZWFkIHRoZSBvdXRlciBzaXplIG9mIHRoZSBgYXJyb3dFbGVtZW50YCBub2RlIHRvIGRldGVjdCBob3cgbWFueVxuICAgKiBwaXhlbHMgb2YgY29uanVjdGlvbiBhcmUgbmVlZGVkLlxuICAgKlxuICAgKiBJdCBoYXMgbm8gZWZmZWN0IGlmIG5vIGBhcnJvd0VsZW1lbnRgIGlzIHByb3ZpZGVkLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXJyb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA1MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcnJvdyxcbiAgICAvKiogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gZWxlbWVudD0nW3gtYXJyb3ddJyAtIFNlbGVjdG9yIG9yIG5vZGUgdXNlZCBhcyBhcnJvdyAqL1xuICAgIGVsZW1lbnQ6ICdbeC1hcnJvd10nXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gZmxpcCB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50IHdoZW4gaXQgc3RhcnRzIHRvIG92ZXJsYXAgaXRzXG4gICAqIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqXG4gICAqICoqTk9URToqKiB0aGlzIG1vZGlmaWVyIHdpbGwgaW50ZXJydXB0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZSBhbmQgd2lsbFxuICAgKiByZXN0YXJ0IGl0IGlmIGl0IGRldGVjdHMgdGhlIG5lZWQgdG8gZmxpcCB0aGUgcGxhY2VtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgZmxpcDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj02MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDYwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGZsaXAsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xBcnJheX0gYmVoYXZpb3I9J2ZsaXAnXG4gICAgICogVGhlIGJlaGF2aW9yIHVzZWQgdG8gY2hhbmdlIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQuIEl0IGNhbiBiZSBvbmUgb2ZcbiAgICAgKiBgZmxpcGAsIGBjbG9ja3dpc2VgLCBgY291bnRlcmNsb2Nrd2lzZWAgb3IgYW4gYXJyYXkgd2l0aCBhIGxpc3Qgb2YgdmFsaWRcbiAgICAgKiBwbGFjZW1lbnRzICh3aXRoIG9wdGlvbmFsIHZhcmlhdGlvbnMpLlxuICAgICAqL1xuICAgIGJlaGF2aW9yOiAnZmxpcCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogVGhlIHBvcHBlciB3aWxsIGZsaXAgaWYgaXQgaGl0cyB0aGUgZWRnZXMgb2YgdGhlIGBib3VuZGFyaWVzRWxlbWVudGBcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSd2aWV3cG9ydCdcbiAgICAgKiBUaGUgZWxlbWVudCB3aGljaCB3aWxsIGRlZmluZSB0aGUgYm91bmRhcmllcyBvZiB0aGUgcG9wcGVyIHBvc2l0aW9uLFxuICAgICAqIHRoZSBwb3BwZXIgd2lsbCBuZXZlciBiZSBwbGFjZWQgb3V0c2lkZSBvZiB0aGUgZGVmaW5lZCBib3VuZGFyaWVzXG4gICAgICogKGV4Y2VwdCBpZiBrZWVwVG9nZXRoZXIgaXMgZW5hYmxlZClcbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3ZpZXdwb3J0J1xuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2UgdGhlIHBvcHBlciBmbG93IHRvd2FyZCB0aGUgaW5uZXIgb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBCeSBkZWZhdWx0LCB3aGVuIHRoaXMgbW9kaWZpZXIgaXMgZGlzYWJsZWQsIHRoZSBwb3BwZXIgd2lsbCBiZSBwbGFjZWQgb3V0c2lkZVxuICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBpbm5lcjoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj03MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDcwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9ZmFsc2UgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaW5uZXJcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBoaWRlIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0c2lkZSBvZiB0aGVcbiAgICogcG9wcGVyIGJvdW5kYXJpZXMuIEl0IHdpbGwgc2V0IGEgYHgtb3V0LW9mLWJvdW5kYXJpZXNgIGF0dHJpYnV0ZSB3aGljaCBjYW5cbiAgICogYmUgdXNlZCB0byBoaWRlIHdpdGggYSBDU1Mgc2VsZWN0b3IgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgaXNcbiAgICogb3V0IG9mIGJvdW5kYXJpZXMuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGhpZGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBoaWRlXG4gIH0sXG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIGNvbXB1dGVkIHN0eWxlcyB0byB0aGUgcG9wcGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgYXJlIGxpbWl0ZWQgdG8gdGhpcyBtb2RpZmllci4gVGhpcyBpcyB1c2VmdWwgaW4gY2FzZVxuICAgKiB5b3Ugd2FudCB0byBpbnRlZ3JhdGUgUG9wcGVyLmpzIGluc2lkZSBhIGZyYW1ld29yayBvciB2aWV3IGxpYnJhcnkgYW5kIHlvdVxuICAgKiB3YW50IHRvIGRlbGVnYXRlIGFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgdG8gaXQuXG4gICAqXG4gICAqIEp1c3QgZGlzYWJsZSB0aGlzIG1vZGlmaWVyIGFuZCBkZWZpbmUgeW91IG93biB0byBhY2hpZXZlIHRoZSBkZXNpcmVkIGVmZmVjdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFwcGx5U3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9OTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA5MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcHBseVN0eWxlLFxuICAgIC8qKiBAcHJvcCB7RnVuY3Rpb259ICovXG4gICAgb25Mb2FkOiBhcHBseVN0eWxlT25Mb2FkLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzZCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHRydWVcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgYGRhdGFPYmplY3RgIGlzIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgaW5mb3JtYXRpb25zIHVzZWQgYnkgUG9wcGVyLmpzXG4gKiB0aGlzIG9iamVjdCBnZXQgcGFzc2VkIHRvIG1vZGlmaWVycyBhbmQgdG8gdGhlIGBvbkNyZWF0ZWAgYW5kIGBvblVwZGF0ZWAgY2FsbGJhY2tzLlxuICogQG5hbWUgZGF0YU9iamVjdFxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuaW5zdGFuY2UgVGhlIFBvcHBlci5qcyBpbnN0YW5jZVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEucGxhY2VtZW50IFBsYWNlbWVudCBhcHBsaWVkIHRvIHBvcHBlclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgUGxhY2VtZW50IG9yaWdpbmFsbHkgZGVmaW5lZCBvbiBpbml0XG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuZmxpcHBlZCBUcnVlIGlmIHBvcHBlciBoYXMgYmVlbiBmbGlwcGVkIGJ5IGZsaXAgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5oaWRlIFRydWUgaWYgdGhlIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dCBvZiBib3VuZGFyaWVzLCB1c2VmdWwgdG8ga25vdyB3aGVuIHRvIGhpZGUgdGhlIHBvcHBlci5cbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGRhdGEuYXJyb3dFbGVtZW50IE5vZGUgdXNlZCBhcyBhcnJvdyBieSBhcnJvdyBtb2RpZmllclxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuc3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLCBpdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYm91bmRhcmllcyBPZmZzZXRzIG9mIHRoZSBwb3BwZXIgYm91bmRhcmllc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cyBUaGUgbWVhc3VyZW1lbnRzIG9mIHBvcHBlciwgcmVmZXJlbmNlIGFuZCBhcnJvdyBlbGVtZW50cy5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucG9wcGVyIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLmFycm9dIGB0b3BgIGFuZCBgbGVmdGAgb2Zmc2V0cywgb25seSBvbmUgb2YgdGhlbSB3aWxsIGJlIGRpZmZlcmVudCBmcm9tIDBcbiAqL1xuXG4vKipcbiAqIERlZmF1bHQgb3B0aW9ucyBwcm92aWRlZCB0byBQb3BwZXIuanMgY29uc3RydWN0b3IuPGJyIC8+XG4gKiBUaGVzZSBjYW4gYmUgb3ZlcnJpZGVuIHVzaW5nIHRoZSBgb3B0aW9uc2AgYXJndW1lbnQgb2YgUG9wcGVyLmpzLjxiciAvPlxuICogVG8gb3ZlcnJpZGUgYW4gb3B0aW9uLCBzaW1wbHkgcGFzcyBhcyAzcmQgYXJndW1lbnQgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWVcbiAqIHN0cnVjdHVyZSBvZiB0aGlzIG9iamVjdCwgZXhhbXBsZTpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWYsIHBvcCwge1xuICogICBtb2RpZmllcnM6IHtcbiAqICAgICBwcmV2ZW50T3ZlcmZsb3c6IHsgZW5hYmxlZDogZmFsc2UgfVxuICogICB9XG4gKiB9KVxuICogYGBgXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHN0YXRpY1xuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG52YXIgREVGQVVMVFMgPSB7XG4gIC8qKlxuICAgKiBQb3BwZXIncyBwbGFjZW1lbnRcbiAgICogQHByb3Age1BvcHBlci5wbGFjZW1lbnRzfSBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICovXG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgZXZlbnRzIChyZXNpemUsIHNjcm9sbCkgYXJlIGluaXRpYWxseSBlbmFibGVkXG4gICAqIEBwcm9wIHtCb29sZWFufSBldmVudHNFbmFibGVkPXRydWVcbiAgICovXG4gIGV2ZW50c0VuYWJsZWQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSBwb3BwZXIgd2hlblxuICAgKiB5b3UgY2FsbCB0aGUgYGRlc3Ryb3lgIG1ldGhvZC5cbiAgICogQHByb3Age0Jvb2xlYW59IHJlbW92ZU9uRGVzdHJveT1mYWxzZVxuICAgKi9cbiAgcmVtb3ZlT25EZXN0cm95OiBmYWxzZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyBjcmVhdGVkLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvbkNyZWF0ZUNhbGxiYWNrfVxuICAgKi9cbiAgb25DcmVhdGU6IGZ1bmN0aW9uIG9uQ3JlYXRlKCkge30sXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgdXBkYXRlZCwgdGhpcyBjYWxsYmFjayBpcyBub3QgY2FsbGVkXG4gICAqIG9uIHRoZSBpbml0aWFsaXphdGlvbi9jcmVhdGlvbiBvZiB0aGUgcG9wcGVyLCBidXQgb25seSBvbiBzdWJzZXF1ZW50XG4gICAqIHVwZGF0ZXMuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uVXBkYXRlQ2FsbGJhY2t9XG4gICAqL1xuICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoKSB7fSxcblxuICAvKipcbiAgICogTGlzdCBvZiBtb2RpZmllcnMgdXNlZCB0byBtb2RpZnkgdGhlIG9mZnNldHMgYmVmb3JlIHRoZXkgYXJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci5cbiAgICogVGhleSBwcm92aWRlIG1vc3Qgb2YgdGhlIGZ1bmN0aW9uYWxpdGllcyBvZiBQb3BwZXIuanNcbiAgICogQHByb3Age21vZGlmaWVyc31cbiAgICovXG4gIG1vZGlmaWVyczogbW9kaWZpZXJzXG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBvbkNyZWF0ZUNhbGxiYWNrXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvblVwZGF0ZUNhbGxiYWNrXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuXG4vLyBVdGlsc1xuLy8gTWV0aG9kc1xudmFyIFBvcHBlciA9XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBQb3BwZXIuanMgaW5zdGFuY2VcbiAqIEBjbGFzcyBQb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8cmVmZXJlbmNlT2JqZWN0fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCBlbGVtZW50IHVzZWQgYXMgcG9wcGVyLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBZb3VyIGN1c3RvbSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBvbmVzIGRlZmluZWQgaW4gW0RFRkFVTFRTXSgjZGVmYXVsdHMpXG4gKiBAcmV0dXJuIHtPYmplY3R9IGluc3RhbmNlIC0gVGhlIGdlbmVyYXRlZCBQb3BwZXIuanMgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQb3BwZXIpO1xuICB0aGlzLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgdGhpcy5kZXN0cm95ID0gZGVzdHJveTtcbiAgdGhpcy5lbmFibGVFdmVudExpc3RlbmVycyA9IGVuYWJsZUV2ZW50TGlzdGVuZXJzO1xuICB0aGlzLmRpc2FibGVFdmVudExpc3RlbmVycyA9IGRpc2FibGVFdmVudExpc3RlbmVycztcblxuICB0aGlzLnNjaGVkdWxlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMudXBkYXRlKTtcbiAgfTtcblxuICAvLyBtYWtlIHVwZGF0ZSgpIGRlYm91bmNlZCwgc28gdGhhdCBpdCBvbmx5IHJ1bnMgYXQgbW9zdCBvbmNlLXBlci10aWNrXG4gIHRoaXMudXBkYXRlID0gZGVib3VuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgLy8gd2l0aCB7fSB3ZSBjcmVhdGUgYSBuZXcgb2JqZWN0IHdpdGggdGhlIG9wdGlvbnMgaW5zaWRlIGl0XG4gIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBQb3BwZXIuRGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gIC8vIGluaXQgc3RhdGVcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgaXNDcmVhdGVkOiBmYWxzZSxcbiAgICBzY3JvbGxQYXJlbnRzOiBbXVxuICB9O1xuXG4gIC8vIGdldCByZWZlcmVuY2UgYW5kIHBvcHBlciBlbGVtZW50cyAoYWxsb3cgalF1ZXJ5IHdyYXBwZXJzKVxuICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZS5qcXVlcnkgPyByZWZlcmVuY2VbMF0gOiByZWZlcmVuY2U7XG4gIHRoaXMucG9wcGVyID0gcG9wcGVyLmpxdWVyeSA/IHBvcHBlclswXSA6IHBvcHBlcjtcblxuICAvLyBtYWtlIHN1cmUgdG8gYXBwbHkgdGhlIHBvcHBlciBwb3NpdGlvbiBiZWZvcmUgYW55IGNvbXB1dGF0aW9uXG4gIHNldFN0eWxlcyh0aGlzLnBvcHBlciwgeyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9KTtcblxuICAvLyByZWZhY3RvcmluZyBtb2RpZmllcnMnIGxpc3QgKE9iamVjdCA9PiBBcnJheSlcbiAgdGhpcy5tb2RpZmllcnMgPSBPYmplY3Qua2V5cyhQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgbmFtZTogbmFtZVxuICAgIH0sIFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnNbbmFtZV0pO1xuICB9KTtcblxuICAvLyBhc3NpZ24gZGVmYXVsdCB2YWx1ZXMgdG8gbW9kaWZpZXJzLCBtYWtpbmcgc3VyZSB0byBvdmVycmlkZSB0aGVtIHdpdGhcbiAgLy8gdGhlIG9uZXMgZGVmaW5lZCBieSB1c2VyXG4gIHRoaXMubW9kaWZpZXJzID0gdGhpcy5tb2RpZmllcnMubWFwKGZ1bmN0aW9uIChkZWZhdWx0Q29uZmlnKSB7XG4gICAgdmFyIHVzZXJDb25maWcgPSBvcHRpb25zLm1vZGlmaWVycyAmJiBvcHRpb25zLm1vZGlmaWVyc1tkZWZhdWx0Q29uZmlnLm5hbWVdIHx8IHt9O1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZGVmYXVsdENvbmZpZywgdXNlckNvbmZpZyk7XG4gIH0pO1xuXG4gIC8vIGFkZCBjdXN0b20gbW9kaWZpZXJzIHRvIHRoZSBtb2RpZmllcnMgbGlzdFxuICBpZiAob3B0aW9ucy5tb2RpZmllcnMpIHtcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzID0gX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnMsIG9wdGlvbnMubW9kaWZpZXJzKTtcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zLm1vZGlmaWVycykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgLy8gdGFrZSBpbiBhY2NvdW50IG9ubHkgY3VzdG9tIG1vZGlmaWVyc1xuICAgICAgaWYgKFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgbW9kaWZpZXIgPSBvcHRpb25zLm1vZGlmaWVyc1tuYW1lXTtcbiAgICAgICAgbW9kaWZpZXIubmFtZSA9IG5hbWU7XG4gICAgICAgIF90aGlzLm1vZGlmaWVycy5wdXNoKG1vZGlmaWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIHNvcnQgdGhlIG1vZGlmaWVycyBieSBvcmRlclxuICB0aGlzLm1vZGlmaWVycyA9IHRoaXMubW9kaWZpZXJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XG4gIH0pO1xuXG4gIC8vIG1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgd2hlbiBQb3BwZXIuanMgZ2V0IGluaXRlZFxuICAvLyBzdWNoIGNvZGUgaXMgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgb2YgaXRzIG1vZGlmaWVyXG4gIC8vIHRoZXkgY291bGQgYWRkIG5ldyBwcm9wZXJ0aWVzIHRvIHRoZWlyIG9wdGlvbnMgY29uZmlndXJhdGlvblxuICAvLyBCRSBBV0FSRTogZG9uJ3QgYWRkIG9wdGlvbnMgdG8gYG9wdGlvbnMubW9kaWZpZXJzLm5hbWVgIGJ1dCB0byBgbW9kaWZpZXJPcHRpb25zYCFcbiAgdGhpcy5tb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXJPcHRpb25zKSB7XG4gICAgaWYgKG1vZGlmaWVyT3B0aW9ucy5lbmFibGVkICYmIGlzRnVuY3Rpb24obW9kaWZpZXJPcHRpb25zLm9uTG9hZCkpIHtcbiAgICAgIG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQoX3RoaXMucmVmZXJlbmNlLCBfdGhpcy5wb3BwZXIsIF90aGlzLm9wdGlvbnMsIG1vZGlmaWVyT3B0aW9ucywgX3RoaXMuc3RhdGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gZmlyZSB0aGUgZmlyc3QgdXBkYXRlIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIgaW4gdGhlIHJpZ2h0IHBsYWNlXG4gIHRoaXMudXBkYXRlKCk7XG5cbiAgdmFyIGV2ZW50c0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuZXZlbnRzRW5hYmxlZDtcbiAgaWYgKGV2ZW50c0VuYWJsZWQpIHtcbiAgICAvLyBzZXR1cCBldmVudCBsaXN0ZW5lcnMsIHRoZXkgd2lsbCB0YWtlIGNhcmUgb2YgdXBkYXRlIHRoZSBwb3NpdGlvbiBpbiBzcGVjaWZpYyBzaXR1YXRpb25zXG4gICAgdGhpcy5lbmFibGVFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkID0gZXZlbnRzRW5hYmxlZDtcbn07XG5cbi8qKlxuICogVGhlIGByZWZlcmVuY2VPYmplY3RgIGlzIGFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIGFuIGludGVyZmFjZSBjb21wYXRpYmxlIHdpdGggUG9wcGVyLmpzXG4gKiBhbmQgbGV0cyB5b3UgdXNlIGl0IGFzIHJlcGxhY2VtZW50IG9mIGEgcmVhbCBET00gbm9kZS48YnIgLz5cbiAqIFlvdSBjYW4gdXNlIHRoaXMgbWV0aG9kIHRvIHBvc2l0aW9uIGEgcG9wcGVyIHJlbGF0aXZlbHkgdG8gYSBzZXQgb2YgY29vcmRpbmF0ZXNcbiAqIGluIGNhc2UgeW91IGRvbid0IGhhdmUgYSBET00gbm9kZSB0byB1c2UgYXMgcmVmZXJlbmNlLlxuICpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWZlcmVuY2VPYmplY3QsIHBvcHBlck5vZGUpO1xuICogYGBgXG4gKlxuICogTkI6IFRoaXMgZmVhdHVyZSBpc24ndCBzdXBwb3J0ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTBcbiAqIEBuYW1lIHJlZmVyZW5jZU9iamVjdFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZGF0YS5nZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc2V0IG9mIGNvb3JkaW5hdGVzIGNvbXBhdGlibGUgd2l0aCB0aGUgbmF0aXZlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIG1ldGhvZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudFdpZHRoXG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50SGVpZ2h0XG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqL1xuXG5cblBvcHBlci5VdGlscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCkuUG9wcGVyVXRpbHM7XG5Qb3BwZXIucGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG5Qb3BwZXIuRGVmYXVsdHMgPSBERUZBVUxUUztcblxuZXhwb3J0IGRlZmF1bHQgUG9wcGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9wcGVyLmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9wb3BwZXIuanMvZGlzdC9lc20vcG9wcGVyLmpzIiwiaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQgeyp9IGZ1bmN0aW9uVG9DaGVjayAtIHZhcmlhYmxlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvOiBpcyBhIGZ1bmN0aW9uP1xuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmN0aW9uVG9DaGVjaykge1xuICB2YXIgZ2V0VHlwZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIGdldFR5cGUudG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cblxuXG5cblxuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgY29udGFpbmVyOiBmYWxzZSxcbiAgZGVsYXk6IDAsXG4gIGh0bWw6IGZhbHNlLFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICB0aXRsZTogJycsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICBvZmZzZXQ6IDBcbn07XG5cbnZhciBUb29sdGlwID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFRvb2x0aXAuanMgaW5zdGFuY2VcbiAgICogQGNsYXNzIFRvb2x0aXBcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHRvb2x0aXBcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMucGxhY2VtZW50PWJvdHRvbVxuICAgKiAgICAgIFBsYWNlbWVudCBvZiB0aGUgcG9wcGVyIGFjY2VwdGVkIHZhbHVlczogYHRvcCgtc3RhcnQsIC1lbmQpLCByaWdodCgtc3RhcnQsIC1lbmQpLCBib3R0b20oLXN0YXJ0LCAtZW5kKSxcbiAgICogICAgICBsZWZ0KC1zdGFydCwgLWVuZClgXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZSAtIFRoZSBET00gbm9kZSB1c2VkIGFzIHJlZmVyZW5jZSBvZiB0aGUgdG9vbHRpcCAoaXQgY2FuIGJlIGEgalF1ZXJ5IGVsZW1lbnQpLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYXRpb24gb2YgdGhlIHRvb2x0aXBcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxTdHJpbmd8ZmFsc2V9IG9wdGlvbnMuY29udGFpbmVyPWZhbHNlIC0gQXBwZW5kIHRoZSB0b29sdGlwIHRvIGEgc3BlY2lmaWMgZWxlbWVudC5cbiAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSBvcHRpb25zLmRlbGF5PTBcbiAgICogICAgICBEZWxheSBzaG93aW5nIGFuZCBoaWRpbmcgdGhlIHRvb2x0aXAgKG1zKSAtIGRvZXMgbm90IGFwcGx5IHRvIG1hbnVhbCB0cmlnZ2VyIHR5cGUuXG4gICAqICAgICAgSWYgYSBudW1iZXIgaXMgc3VwcGxpZWQsIGRlbGF5IGlzIGFwcGxpZWQgdG8gYm90aCBoaWRlL3Nob3cuXG4gICAqICAgICAgT2JqZWN0IHN0cnVjdHVyZSBpczogYHsgc2hvdzogNTAwLCBoaWRlOiAxMDAgfWBcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLmh0bWw9ZmFsc2UgLSBJbnNlcnQgSFRNTCBpbnRvIHRoZSB0b29sdGlwLiBJZiBmYWxzZSwgdGhlIGNvbnRlbnQgd2lsbCBpbnNlcnRlZCB3aXRoIGBpbm5lclRleHRgLlxuICAgKiBAcGFyYW0ge1N0cmluZ3xQbGFjZW1lbnRGdW5jdGlvbn0gb3B0aW9ucy5wbGFjZW1lbnQ9J3RvcCcgLSBPbmUgb2YgdGhlIGFsbG93ZWQgcGxhY2VtZW50cywgb3IgYSBmdW5jdGlvbiByZXR1cm5pbmcgb25lIG9mIHRoZW0uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnRlbXBsYXRlPSc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PidcbiAgICogICAgICBCYXNlIEhUTUwgdG8gdXNlZCB3aGVuIGNyZWF0aW5nIHRoZSB0b29sdGlwLlxuICAgKiAgICAgIFRoZSB0b29sdGlwJ3MgYHRpdGxlYCB3aWxsIGJlIGluamVjdGVkIGludG8gdGhlIGAudG9vbHRpcC1pbm5lcmAgb3IgYC50b29sdGlwX19pbm5lcmAuXG4gICAqICAgICAgYC50b29sdGlwLWFycm93YCBvciBgLnRvb2x0aXBfX2Fycm93YCB3aWxsIGJlY29tZSB0aGUgdG9vbHRpcCdzIGFycm93LlxuICAgKiAgICAgIFRoZSBvdXRlcm1vc3Qgd3JhcHBlciBlbGVtZW50IHNob3VsZCBoYXZlIHRoZSBgLnRvb2x0aXBgIGNsYXNzLlxuICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxUaXRsZUZ1bmN0aW9ufSBvcHRpb25zLnRpdGxlPScnIC0gRGVmYXVsdCB0aXRsZSB2YWx1ZSBpZiBgdGl0bGVgIGF0dHJpYnV0ZSBpc24ndCBwcmVzZW50LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy50cmlnZ2VyPSdob3ZlciBmb2N1cydcbiAgICogICAgICBIb3cgdG9vbHRpcCBpcyB0cmlnZ2VyZWQgLSBjbGljayB8IGhvdmVyIHwgZm9jdXMgfCBtYW51YWwuXG4gICAqICAgICAgWW91IG1heSBwYXNzIG11bHRpcGxlIHRyaWdnZXJzOyBzZXBhcmF0ZSB0aGVtIHdpdGggYSBzcGFjZS4gYG1hbnVhbGAgY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggYW55IG90aGVyIHRyaWdnZXIuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnRcbiAgICogICAgICBUaGUgZWxlbWVudCB1c2VkIGFzIGJvdW5kYXJpZXMgZm9yIHRoZSB0b29sdGlwLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiByZWZlciB0byBQb3BwZXIuanMnXG4gICAqICAgICAgW2JvdW5kYXJpZXNFbGVtZW50IGRvY3NdKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9wb3BwZXItZG9jdW1lbnRhdGlvbi5odG1sKVxuICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG9wdGlvbnMub2Zmc2V0PTAgLSBPZmZzZXQgb2YgdGhlIHRvb2x0aXAgcmVsYXRpdmUgdG8gaXRzIHJlZmVyZW5jZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24gcmVmZXIgdG8gUG9wcGVyLmpzJ1xuICAgKiAgICAgIFtvZmZzZXQgZG9jc10oaHR0cHM6Ly9wb3BwZXIuanMub3JnL3BvcHBlci1kb2N1bWVudGF0aW9uLmh0bWwpXG4gICAqIEByZXR1cm4ge09iamVjdH0gaW5zdGFuY2UgLSBUaGUgZ2VuZXJhdGVkIHRvb2x0aXAgaW5zdGFuY2VcbiAgICovXG4gIGZ1bmN0aW9uIFRvb2x0aXAocmVmZXJlbmNlLCBvcHRpb25zKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9vbHRpcCk7XG5cbiAgICBfaW5pdGlhbGlzZVByb3BzLmNhbGwodGhpcyk7XG5cbiAgICAvLyBhcHBseSB1c2VyIG9wdGlvbnMgb3ZlciBkZWZhdWx0IG9uZXNcbiAgICBvcHRpb25zID0gX2V4dGVuZHMoe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyk7XG5cbiAgICByZWZlcmVuY2UuanF1ZXJ5ICYmIChyZWZlcmVuY2UgPSByZWZlcmVuY2VbMF0pO1xuXG4gICAgLy8gY2FjaGUgcmVmZXJlbmNlIGFuZCBvcHRpb25zXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIC8vIGdldCBldmVudHMgbGlzdFxuICAgIHZhciBldmVudHMgPSB0eXBlb2Ygb3B0aW9ucy50cmlnZ2VyID09PSAnc3RyaW5nJyA/IG9wdGlvbnMudHJpZ2dlci5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgcmV0dXJuIFsnY2xpY2snLCAnaG92ZXInLCAnZm9jdXMnXS5pbmRleE9mKHRyaWdnZXIpICE9PSAtMTtcbiAgICB9KSA6IFtdO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgc3RhdGVcbiAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcblxuICAgIC8vIHNldCBldmVudCBsaXN0ZW5lcnNcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyhyZWZlcmVuY2UsIGV2ZW50cywgb3B0aW9ucyk7XG4gIH1cblxuICAvL1xuICAvLyBQdWJsaWMgbWV0aG9kc1xuICAvL1xuXG4gIC8qKlxuICAgKiBSZXZlYWxzIGFuIGVsZW1lbnQncyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSBcIm1hbnVhbFwiIHRyaWdnZXJpbmcgb2YgdGhlIHRvb2x0aXAuXG4gICAqIFRvb2x0aXBzIHdpdGggemVyby1sZW5ndGggdGl0bGVzIGFyZSBuZXZlciBkaXNwbGF5ZWQuXG4gICAqIEBtZW1iZXJvZiBUb29sdGlwXG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIEhpZGVzIGFuIGVsZW1lbnTigJlzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mIHRoZSB0b29sdGlwLlxuICAgKiBAbWVtYmVyb2YgVG9vbHRpcFxuICAgKi9cblxuXG4gIC8qKlxuICAgKiBIaWRlcyBhbmQgZGVzdHJveXMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC5cbiAgICogQG1lbWJlcm9mIFRvb2x0aXBcbiAgICovXG5cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW504oCZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZiB0aGUgdG9vbHRpcC5cbiAgICogQG1lbWJlcm9mIFRvb2x0aXBcbiAgICovXG5cblxuICAvL1xuICAvLyBEZWZhdWx0c1xuICAvL1xuXG5cbiAgLy9cbiAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gIC8vXG5cbiAgY3JlYXRlQ2xhc3MoVG9vbHRpcCwgW3tcbiAgICBrZXk6ICdfY3JlYXRlJyxcblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyB0b29sdGlwIG5vZGVcbiAgICAgKiBAbWVtYmVyb2YgVG9vbHRpcFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRlbXBsYXRlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8VGl0bGVGdW5jdGlvbn0gdGl0bGVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGFsbG93SHRtbFxuICAgICAqIEByZXR1cm4ge0hUTUxlbGVtZW50fSB0b29sdGlwTm9kZVxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBfY3JlYXRlKHJlZmVyZW5jZSwgdGVtcGxhdGUsIHRpdGxlLCBhbGxvd0h0bWwpIHtcbiAgICAgIC8vIGNyZWF0ZSB0b29sdGlwIGVsZW1lbnRcbiAgICAgIHZhciB0b29sdGlwR2VuZXJhdG9yID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9vbHRpcEdlbmVyYXRvci5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICAgIHZhciB0b29sdGlwTm9kZSA9IHRvb2x0aXBHZW5lcmF0b3IuY2hpbGROb2Rlc1swXTtcblxuICAgICAgLy8gYWRkIHVuaXF1ZSBJRCB0byBvdXIgdG9vbHRpcCAobmVlZGVkIGZvciBhY2Nlc3NpYmlsaXR5IHJlYXNvbnMpXG4gICAgICB0b29sdGlwTm9kZS5pZCA9ICd0b29sdGlwXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTApO1xuXG4gICAgICAvLyBzZXQgaW5pdGlhbCBgYXJpYS1oaWRkZW5gIHN0YXRlIHRvIGBmYWxzZWAgKGl0J3MgdmlzaWJsZSEpXG4gICAgICB0b29sdGlwTm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgIC8vIGFkZCB0aXRsZSB0byB0b29sdGlwXG4gICAgICB2YXIgdGl0bGVOb2RlID0gdG9vbHRpcEdlbmVyYXRvci5xdWVyeVNlbGVjdG9yKHRoaXMuaW5uZXJTZWxlY3Rvcik7XG4gICAgICBpZiAodGl0bGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgLy8gaWYgdGl0bGUgaXMgYSBub2RlLCBhcHBlbmQgaXQgb25seSBpZiBhbGxvd0h0bWwgaXMgdHJ1ZVxuICAgICAgICBhbGxvd0h0bWwgJiYgdGl0bGVOb2RlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aXRsZSkpIHtcbiAgICAgICAgLy8gaWYgdGl0bGUgaXMgYSBmdW5jdGlvbiwgY2FsbCBpdCBhbmQgc2V0IGlubmVyVGV4dCBvciBpbm5lckh0bWwgZGVwZW5kaW5nIGJ5IGBhbGxvd0h0bWxgIHZhbHVlXG4gICAgICAgIHZhciB0aXRsZVRleHQgPSB0aXRsZS5jYWxsKHJlZmVyZW5jZSk7XG4gICAgICAgIGFsbG93SHRtbCA/IHRpdGxlTm9kZS5pbm5lckhUTUwgPSB0aXRsZVRleHQgOiB0aXRsZU5vZGUuaW5uZXJUZXh0ID0gdGl0bGVUZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgaXQncyBqdXN0IGEgc2ltcGxlIHRleHQsIHNldCBpbm5lclRleHQgb3IgaW5uZXJIdG1sIGRlcGVuZGluZyBieSBgYWxsb3dIdG1sYCB2YWx1ZVxuICAgICAgICBhbGxvd0h0bWwgPyB0aXRsZU5vZGUuaW5uZXJIVE1MID0gdGl0bGUgOiB0aXRsZU5vZGUuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgICB9XG5cbiAgICAgIC8vIHJldHVybiB0aGUgZ2VuZXJhdGVkIHRvb2x0aXAgbm9kZVxuICAgICAgcmV0dXJuIHRvb2x0aXBOb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19zaG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Nob3cocmVmZXJlbmNlLCBvcHRpb25zKSB7XG4gICAgICAvLyBkb24ndCBzaG93IGlmIGl0J3MgYWxyZWFkeSB2aXNpYmxlXG4gICAgICBpZiAodGhpcy5faXNPcGVuKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNPcGVuID0gdHJ1ZTtcblxuICAgICAgLy8gaWYgdGhlIHRvb2x0aXBOb2RlIGFscmVhZHkgZXhpc3RzLCBqdXN0IHNob3cgaXRcbiAgICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xuICAgICAgICB0aGlzLl90b29sdGlwTm9kZS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGdldCB0aXRsZVxuICAgICAgdmFyIHRpdGxlID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCBvcHRpb25zLnRpdGxlO1xuXG4gICAgICAvLyBkb24ndCBzaG93IHRvb2x0aXAgaWYgbm8gdGl0bGUgaXMgZGVmaW5lZFxuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gY3JlYXRlIHRvb2x0aXAgbm9kZVxuICAgICAgdmFyIHRvb2x0aXBOb2RlID0gdGhpcy5fY3JlYXRlKHJlZmVyZW5jZSwgb3B0aW9ucy50ZW1wbGF0ZSwgdGl0bGUsIG9wdGlvbnMuaHRtbCk7XG5cbiAgICAgIC8vIEFkZCBgYXJpYS1kZXNjcmliZWRieWAgdG8gb3VyIHJlZmVyZW5jZSBlbGVtZW50IGZvciBhY2Nlc3NpYmlsaXR5IHJlYXNvbnNcbiAgICAgIHRvb2x0aXBOb2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRvb2x0aXBOb2RlLmlkKTtcblxuICAgICAgLy8gYXBwZW5kIHRvb2x0aXAgdG8gY29udGFpbmVyXG4gICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5fZmluZENvbnRhaW5lcihvcHRpb25zLmNvbnRhaW5lciwgcmVmZXJlbmNlKTtcblxuICAgICAgdGhpcy5fYXBwZW5kKHRvb2x0aXBOb2RlLCBjb250YWluZXIpO1xuXG4gICAgICB2YXIgcG9wcGVyT3B0aW9ucyA9IHtcbiAgICAgICAgcGxhY2VtZW50OiBvcHRpb25zLnBsYWNlbWVudCxcbiAgICAgICAgYXJyb3dFbGVtZW50OiB0aGlzLmFycm93U2VsZWN0b3JcbiAgICAgIH07XG5cbiAgICAgIGlmIChvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50KSB7XG4gICAgICAgIHBvcHBlck9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQgPSBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBvcHBlckluc3RhbmNlID0gbmV3IFBvcHBlcihyZWZlcmVuY2UsIHRvb2x0aXBOb2RlLCBwb3BwZXJPcHRpb25zKTtcblxuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUgPSB0b29sdGlwTm9kZTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2hpZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGlkZSgpIC8qcmVmZXJlbmNlLCBvcHRpb25zKi97XG4gICAgICAvLyBkb24ndCBoaWRlIGlmIGl0J3MgYWxyZWFkeSBoaWRkZW5cbiAgICAgIGlmICghdGhpcy5faXNPcGVuKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcblxuICAgICAgLy8gaGlkZSB0b29sdGlwTm9kZVxuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZGlzcG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9kaXNwb3NlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XG4gICAgICAgIHRoaXMuX2hpZGUoKTtcblxuICAgICAgICAvLyBkZXN0cm95IGluc3RhbmNlXG4gICAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UuZGVzdHJveSgpO1xuXG4gICAgICAgIC8vIHJlbW92ZSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgdGhpcy5fZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICB2YXIgZnVuYyA9IF9yZWYuZnVuYyxcbiAgICAgICAgICAgICAgZXZlbnQgPSBfcmVmLmV2ZW50O1xuXG4gICAgICAgICAgX3RoaXMuX3Rvb2x0aXBOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gW107XG5cbiAgICAgICAgLy8gZGVzdHJveSB0b29sdGlwTm9kZVxuICAgICAgICB0aGlzLl90b29sdGlwTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX3Rvb2x0aXBOb2RlKTtcbiAgICAgICAgdGhpcy5fdG9vbHRpcE5vZGUgPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2ZpbmRDb250YWluZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZENvbnRhaW5lcihjb250YWluZXIsIHJlZmVyZW5jZSkge1xuICAgICAgLy8gaWYgY29udGFpbmVyIGlzIGEgcXVlcnksIGdldCB0aGUgcmVsYXRpdmUgZWxlbWVudFxuICAgICAgaWYgKHR5cGVvZiBjb250YWluZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnRhaW5lciA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcik7XG4gICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lciA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gaWYgY29udGFpbmVyIGlzIGBmYWxzZWAsIHNldCBpdCB0byByZWZlcmVuY2UgcGFyZW50XG4gICAgICAgIGNvbnRhaW5lciA9IHJlZmVyZW5jZS5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgdG9vbHRpcCB0byBjb250YWluZXJcbiAgICAgKiBAbWVtYmVyb2YgVG9vbHRpcFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdG9vbHRpcFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8U3RyaW5nfGZhbHNlfSBjb250YWluZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX2FwcGVuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmQodG9vbHRpcE5vZGUsIGNvbnRhaW5lcikge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXBOb2RlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfc2V0RXZlbnRMaXN0ZW5lcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0RXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBldmVudHMsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZGlyZWN0RXZlbnRzID0gW107XG4gICAgICB2YXIgb3Bwb3NpdGVFdmVudHMgPSBbXTtcblxuICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQpIHtcbiAgICAgICAgICBjYXNlICdob3Zlcic6XG4gICAgICAgICAgICBkaXJlY3RFdmVudHMucHVzaCgnbW91c2VlbnRlcicpO1xuICAgICAgICAgICAgb3Bwb3NpdGVFdmVudHMucHVzaCgnbW91c2VsZWF2ZScpO1xuICAgICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICAgIGRpcmVjdEV2ZW50cy5wdXNoKCdmb2N1cycpO1xuICAgICAgICAgICAgb3Bwb3NpdGVFdmVudHMucHVzaCgnYmx1cicpO1xuICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAgIGRpcmVjdEV2ZW50cy5wdXNoKCdjbGljaycpO1xuICAgICAgICAgICAgb3Bwb3NpdGVFdmVudHMucHVzaCgnY2xpY2snKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHNjaGVkdWxlIHNob3cgdG9vbHRpcFxuICAgICAgZGlyZWN0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBmdW5jID0gZnVuY3Rpb24gZnVuYyhldnQpIHtcbiAgICAgICAgICBpZiAoX3RoaXMyLl9pc09wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZ0LnVzZWRCeVRvb2x0aXAgPSB0cnVlO1xuICAgICAgICAgIF90aGlzMi5fc2NoZWR1bGVTaG93KHJlZmVyZW5jZSwgb3B0aW9ucy5kZWxheSwgb3B0aW9ucywgZXZ0KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMyLl9ldmVudHMucHVzaCh7IGV2ZW50OiBldmVudCwgZnVuYzogZnVuYyB9KTtcbiAgICAgICAgcmVmZXJlbmNlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNjaGVkdWxlIGhpZGUgdG9vbHRpcFxuICAgICAgb3Bwb3NpdGVFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKGV2dCkge1xuICAgICAgICAgIGlmIChldnQudXNlZEJ5VG9vbHRpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpczIuX3NjaGVkdWxlSGlkZShyZWZlcmVuY2UsIG9wdGlvbnMuZGVsYXksIG9wdGlvbnMsIGV2dCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzMi5fZXZlbnRzLnB1c2goeyBldmVudDogZXZlbnQsIGZ1bmM6IGZ1bmMgfSk7XG4gICAgICAgIHJlZmVyZW5jZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19zY2hlZHVsZVNob3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2NoZWR1bGVTaG93KHJlZmVyZW5jZSwgZGVsYXksIG9wdGlvbnMgLyosIGV2dCAqLykge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIC8vIGRlZmF1bHRzIHRvIDBcbiAgICAgIHZhciBjb21wdXRlZERlbGF5ID0gZGVsYXkgJiYgZGVsYXkuc2hvdyB8fCBkZWxheSB8fCAwO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMzLl9zaG93KHJlZmVyZW5jZSwgb3B0aW9ucyk7XG4gICAgICB9LCBjb21wdXRlZERlbGF5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfc2NoZWR1bGVIaWRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NjaGVkdWxlSGlkZShyZWZlcmVuY2UsIGRlbGF5LCBvcHRpb25zLCBldnQpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAvLyBkZWZhdWx0cyB0byAwXG4gICAgICB2YXIgY29tcHV0ZWREZWxheSA9IGRlbGF5ICYmIGRlbGF5LmhpZGUgfHwgZGVsYXkgfHwgMDtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzNC5faXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoX3RoaXM0Ll90b29sdGlwTm9kZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB3ZSBhcmUgaGlkaW5nIGJlY2F1c2Ugb2YgYSBtb3VzZWxlYXZlLCB3ZSBtdXN0IGNoZWNrIHRoYXQgdGhlIG5ld1xuICAgICAgICAvLyByZWZlcmVuY2UgaXNuJ3QgdGhlIHRvb2x0aXAsIGJlY2F1c2UgaW4gdGhpcyBjYXNlIHdlIGRvbid0IHdhbnQgdG8gaGlkZSBpdFxuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdtb3VzZWxlYXZlJykge1xuICAgICAgICAgIHZhciBpc1NldCA9IF90aGlzNC5fc2V0VG9vbHRpcE5vZGVFdmVudChldnQsIHJlZmVyZW5jZSwgZGVsYXksIG9wdGlvbnMpO1xuXG4gICAgICAgICAgLy8gaWYgd2Ugc2V0IHRoZSBuZXcgZXZlbnQsIGRvbid0IGhpZGUgdGhlIHRvb2x0aXAgeWV0XG4gICAgICAgICAgLy8gdGhlIG5ldyBldmVudCB3aWxsIHRha2UgY2FyZSB0byBoaWRlIGl0IGlmIG5lY2Vzc2FyeVxuICAgICAgICAgIGlmIChpc1NldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzNC5faGlkZShyZWZlcmVuY2UsIG9wdGlvbnMpO1xuICAgICAgfSwgY29tcHV0ZWREZWxheSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBUb29sdGlwO1xufSgpO1xuXG4vKipcbiAqIFBsYWNlbWVudCBmdW5jdGlvbiwgaXRzIGNvbnRleHQgaXMgdGhlIFRvb2x0aXAgaW5zdGFuY2UuXG4gKiBAbWVtYmVyb2YgVG9vbHRpcFxuICogQGNhbGxiYWNrIFBsYWNlbWVudEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0b29sdGlwIC0gdG9vbHRpcCBET00gbm9kZS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZSAtIHJlZmVyZW5jZSBET00gbm9kZS5cbiAqIEByZXR1cm4ge1N0cmluZ30gcGxhY2VtZW50IC0gT25lIG9mIHRoZSBhbGxvd2VkIHBsYWNlbWVudCBvcHRpb25zLlxuICovXG5cbi8qKlxuICogVGl0bGUgZnVuY3Rpb24sIGl0cyBjb250ZXh0IGlzIHRoZSBUb29sdGlwIGluc3RhbmNlLlxuICogQG1lbWJlcm9mIFRvb2x0aXBcbiAqIEBjYWxsYmFjayBUaXRsZUZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHBsYWNlbWVudCAtIFRoZSBkZXNpcmVkIHRpdGxlLlxuICovXG5cblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICB0aGlzLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzNS5fc2hvdyhfdGhpczUucmVmZXJlbmNlLCBfdGhpczUub3B0aW9ucyk7XG4gIH07XG5cbiAgdGhpcy5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczUuX2hpZGUoKTtcbiAgfTtcblxuICB0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzNS5fZGlzcG9zZSgpO1xuICB9O1xuXG4gIHRoaXMudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpczUuX2lzT3Blbikge1xuICAgICAgcmV0dXJuIF90aGlzNS5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfdGhpczUuc2hvdygpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmFycm93U2VsZWN0b3IgPSAnLnRvb2x0aXAtYXJyb3csIC50b29sdGlwX19hcnJvdyc7XG4gIHRoaXMuaW5uZXJTZWxlY3RvciA9ICcudG9vbHRpcC1pbm5lciwgLnRvb2x0aXBfX2lubmVyJztcbiAgdGhpcy5fZXZlbnRzID0gW107XG5cbiAgdGhpcy5fc2V0VG9vbHRpcE5vZGVFdmVudCA9IGZ1bmN0aW9uIChldnQsIHJlZmVyZW5jZSwgZGVsYXksIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVsYXRlZHJlZmVyZW5jZSA9IGV2dC5yZWxhdGVkcmVmZXJlbmNlIHx8IGV2dC50b0VsZW1lbnQ7XG5cbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhldnQyKSB7XG4gICAgICB2YXIgcmVsYXRlZHJlZmVyZW5jZTIgPSBldnQyLnJlbGF0ZWRyZWZlcmVuY2UgfHwgZXZ0Mi50b0VsZW1lbnQ7XG5cbiAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBhZnRlciBjYWxsXG4gICAgICBfdGhpczUuX3Rvb2x0aXBOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LnR5cGUsIGNhbGxiYWNrKTtcblxuICAgICAgLy8gSWYgdGhlIG5ldyByZWZlcmVuY2UgaXMgbm90IHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgICAgaWYgKCFyZWZlcmVuY2UuY29udGFpbnMocmVsYXRlZHJlZmVyZW5jZTIpKSB7XG4gICAgICAgIC8vIFNjaGVkdWxlIHRvIGhpZGUgdG9vbHRpcFxuICAgICAgICBfdGhpczUuX3NjaGVkdWxlSGlkZShyZWZlcmVuY2UsIG9wdGlvbnMuZGVsYXksIG9wdGlvbnMsIGV2dDIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoX3RoaXM1Ll90b29sdGlwTm9kZS5jb250YWlucyhyZWxhdGVkcmVmZXJlbmNlKSkge1xuICAgICAgLy8gbGlzdGVuIHRvIG1vdXNlbGVhdmUgb24gdGhlIHRvb2x0aXAgZWxlbWVudCB0byBiZSBhYmxlIHRvIGhpZGUgdGhlIHRvb2x0aXBcbiAgICAgIF90aGlzNS5fdG9vbHRpcE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldnQudHlwZSwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvb2x0aXAuanMubWFwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Rvb2x0aXAuanMvZGlzdC9lc20vdG9vbHRpcC5qcyIsImltcG9ydCB2dG9vbHRpcCwgeyBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vdi10b29sdGlwJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xyXG4gIGlmIChpbnN0YWxsLmluc3RhbGxlZCkgcmV0dXJuXHJcbiAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlXHJcblxyXG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyB8fCB7fSlcclxuICB2dG9vbHRpcC5vcHRpb25zID0gb3B0aW9uc1xyXG4gIFZ1ZS5kaXJlY3RpdmUoJ3Rvb2x0aXAnLCB2dG9vbHRpcClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFZUb29sdGlwID0gdnRvb2x0aXBcclxuXHJcbmNvbnN0IHBsdWdpbiA9IHtcclxuICBpbnN0YWxsLFxyXG59XHJcblxyXG4vLyBBdXRvLWluc3RhbGxcclxubGV0IEdsb2JhbFZ1ZSA9IG51bGxcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgR2xvYmFsVnVlID0gd2luZG93LlZ1ZVxyXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgR2xvYmFsVnVlID0gZ2xvYmFsLlZ1ZVxyXG59XHJcbmlmIChHbG9iYWxWdWUpIHtcclxuICBHbG9iYWxWdWUudXNlKHBsdWdpbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=