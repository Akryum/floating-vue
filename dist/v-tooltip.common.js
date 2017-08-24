module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tooltip_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tooltip_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tooltip_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var state = {
  enabled: true
};

var positions = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'];

var defaultOptions = {
  // Default tooltip placement relative to target element
  defaultPlacement: 'top',
  // Default CSS classes applied to the tooltip element
  defaultClass: 'vue-tooltip-theme',
  // Default HTML template of the tooltip element
  // It must include `tooltip` & `tooltip-inner` CSS classes
  defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  // Delay (ms)
  defaultDelay: 0,
  // Default events that trigger the tooltip
  defaultTrigger: 'hover focus',
  // Default position offset (px)
  defaultOffset: 0,
  // Default container where the tooltip will be appended
  defaultContainer: 'body',
  defaultBoundariesElement: undefined,
  defaultPopperOptions: {},
  autoHide: true
};

function getOptions(options) {
  return {
    placement: options.placement || directive.options.defaultPlacement,
    delay: options.delay || directive.options.defaultDelay,
    template: options.template || directive.options.defaultTemplate,
    trigger: options.trigger || directive.options.defaultTrigger,
    offset: options.offset || directive.options.defaultOffset,
    container: options.container || directive.options.defaultContainer,
    boundariesElement: options.boundariesElement || directive.options.defaultBoundariesElement,
    popperOptions: options.popperOptions || directive.options.defaultPopperOptions
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
    key: '_create',
    value: function _create() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var result = (_get2 = _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_create', this)).call.apply(_get2, [this].concat(args));

      if (defaultOptions.autoHide && this.options.trigger.indexOf('hover') !== -1) {
        result.addEventListener('mouseenter', this.hide);
        result.addEventListener('click', this.hide);
      }

      return result;
    }
  }, {
    key: '_dispose',
    value: function _dispose() {
      var _this2 = this;

      if (this._tooltipNode) {
        this._tooltipNode.removeEventListener('mouseenter', this.hide);
        this._tooltipNode.removeEventListener('click', this.hide);
      }

      this._events.forEach(function (_ref) {
        var func = _ref.func,
            event = _ref.event;

        _this2.reference.removeEventListener(event, func);
      });
      this._events = [];
      return _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_dispose', this).call(this);
    }
  }, {
    key: '_show',
    value: function _show() {
      var _get3,
          _this3 = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var result = (_get3 = _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_show', this)).call.apply(_get3, [this].concat(args));

      if (this._pendingClasses) {
        this.setClasses(this._pendingClasses);
        this._pendingClasses = null;
      }

      // Fix position
      setTimeout(function () {
        _this3.popperInstance.update();
      }, 0);

      return result;
    }
  }]);

  return SuperTooltip;
}(__WEBPACK_IMPORTED_MODULE_0_tooltip_js___default.a);

function getContent(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  console.log('value', value, 'type', type);
  if (type === 'string') {
    return value;
  } else if (type === 'object') {
    return value.content;
  } else {
    return false;
  }
}

function createTooltip(el, value, modifiers) {
  var content = getContent(value);
  var classes = value.classes || directive.options.defaultClass;
  console.log('createTooltip', content);
  var opts = _extends({
    title: content,
    html: true
  }, getOptions(_extends({}, value, {
    placement: getPlacement(value, modifiers)
  })));
  var tooltip = el._tooltip = new SuperTooltip(el, opts);
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

    var content = getContent(value);
    console.log('content', content);
    destroyTooltip(el);
    if (content && state.enabled) {
      createTooltip(el, value, modifiers);
    }
  },
  update: function update(el, _ref3) {
    var value = _ref3.value,
        oldValue = _ref3.oldValue,
        modifiers = _ref3.modifiers;

    var content = getContent(value);
    if (!content || !state.enabled) {
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

/* harmony default export */ __webpack_exports__["b"] = (directive);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["install"] = install;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTooltip", function() { return VTooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v_tooltip__ = __webpack_require__(0);


function install(Vue, options) {
  if (install.installed) return;
  install.installed = true;

  options = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["a" /* defaultOptions */], options || {});
  __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["b" /* default */].options = options;
  Vue.directive('tooltip', __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["b" /* default */]);
}

var VTooltip = __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["b" /* default */];

var plugin = {
  install: install,

  get enabled() {
    return __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["c" /* state */].enabled;
  },

  set enabled(value) {
    __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["c" /* state */].enabled = value;
  }
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

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("tooltip.js");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMThlMzRjZWJjYmYwZWUwZjhjZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRvb2x0aXAuanNcIiJdLCJuYW1lcyI6WyJzdGF0ZSIsImVuYWJsZWQiLCJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50IiwidW5kZWZpbmVkIiwiZGVmYXVsdFBvcHBlck9wdGlvbnMiLCJhdXRvSGlkZSIsImdldE9wdGlvbnMiLCJvcHRpb25zIiwicGxhY2VtZW50IiwiZGlyZWN0aXZlIiwiZGVsYXkiLCJ0ZW1wbGF0ZSIsInRyaWdnZXIiLCJvZmZzZXQiLCJjb250YWluZXIiLCJib3VuZGFyaWVzRWxlbWVudCIsInBvcHBlck9wdGlvbnMiLCJnZXRQbGFjZW1lbnQiLCJ2YWx1ZSIsIm1vZGlmaWVycyIsInBvcyIsIlN1cGVyVG9vbHRpcCIsImNsYXNzZXMiLCJlbCIsIl90b29sdGlwTm9kZSIsIm9sZENsYXNzZXMiLCJfb2xkQ2xhc3NlcyIsInJlcGxhY2VDbGFzc2VzIiwiYWRkQ2xhc3NlcyIsInJlbW92ZUNsYXNzZXMiLCJfcGVuZGluZ0NsYXNzZXMiLCJfY2xhc3NlcyIsImNvbnRlbnQiLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclNlbGVjdG9yIiwiaW5uZXJIVE1MIiwicG9wcGVySW5zdGFuY2UiLCJ1cGRhdGUiLCJuZWVkUG9wcGVyVXBkYXRlIiwibmVlZFJlc3RhcnQiLCJrZXkiLCJpc09wZW4iLCJfaXNPcGVuIiwiZGlzcG9zZSIsImV2ZW50cyIsInNwbGl0IiwiZmlsdGVyIiwiaW5kZXhPZiIsIl9zZXRFdmVudExpc3RlbmVycyIsInJlZmVyZW5jZSIsInNldENsYXNzZXMiLCJzaG93IiwiYXJncyIsInJlc3VsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9ldmVudHMiLCJmb3JFYWNoIiwiZnVuYyIsImV2ZW50Iiwic2V0VGltZW91dCIsImdldENvbnRlbnQiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVRvb2x0aXAiLCJvcHRzIiwiaHRtbCIsInRvb2x0aXAiLCJfdG9vbHRpcCIsImRlc3Ryb3lUb29sdGlwIiwiYmluZCIsIm9sZFZhbHVlIiwic2V0Q29udGVudCIsInNldE9wdGlvbnMiLCJ1bmJpbmQiLCJpbnN0YWxsIiwiVnVlIiwiaW5zdGFsbGVkIiwiT2JqZWN0IiwiYXNzaWduIiwidnRvb2x0aXAiLCJWVG9vbHRpcCIsInBsdWdpbiIsIkdsb2JhbFZ1ZSIsIndpbmRvdyIsImdsb2JhbCIsInVzZSIsImNvbnZlcnRUb0FycmF5IiwiY2xhc3NMaXN0IiwiYWRkIiwiYyIsInJlbW92ZSIsIm5ld0NsYXNzZXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztB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QUFDRCxHQUZEO0FBR0Q7O0FBRU0sU0FBU2xFLGNBQVQsQ0FBeUJKLEVBQXpCLEVBQTZCd0UsVUFBN0IsRUFBeUN0RSxVQUF6QyxFQUFxRDtBQUMxREksZ0JBQWNOLEVBQWQsRUFBa0JFLFVBQWxCO0FBQ0FHLGFBQVdMLEVBQVgsRUFBZXdFLFVBQWY7QUFDRCxDOzs7Ozs7QUN6QkQsdUMiLCJmaWxlIjoidi10b29sdGlwLmNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMThlMzRjZWJjYmYwZWUwZjhjZDUiLCJpbXBvcnQgVG9vbHRpcCBmcm9tICd0b29sdGlwLmpzJ1xuXG5pbXBvcnQgeyBhZGRDbGFzc2VzLCByZW1vdmVDbGFzc2VzLCByZXBsYWNlQ2xhc3NlcyB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBsZXQgc3RhdGUgPSB7XG4gIGVuYWJsZWQ6IHRydWUsXG59XG5cbmNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgJ3RvcCcsXG4gICd0b3Atc3RhcnQnLFxuICAndG9wLWVuZCcsXG4gICdyaWdodCcsXG4gICdyaWdodC1zdGFydCcsXG4gICdyaWdodC1lbmQnLFxuICAnYm90dG9tJyxcbiAgJ2JvdHRvbS1zdGFydCcsXG4gICdib3R0b20tZW5kJyxcbiAgJ2xlZnQnLFxuICAnbGVmdC1zdGFydCcsXG4gICdsZWZ0LWVuZCcsXG5dXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgLy8gRGVmYXVsdCB0b29sdGlwIHBsYWNlbWVudCByZWxhdGl2ZSB0byB0YXJnZXQgZWxlbWVudFxuICBkZWZhdWx0UGxhY2VtZW50OiAndG9wJyxcbiAgLy8gRGVmYXVsdCBDU1MgY2xhc3NlcyBhcHBsaWVkIHRvIHRoZSB0b29sdGlwIGVsZW1lbnRcbiAgZGVmYXVsdENsYXNzOiAndnVlLXRvb2x0aXAtdGhlbWUnLFxuICAvLyBEZWZhdWx0IEhUTUwgdGVtcGxhdGUgb2YgdGhlIHRvb2x0aXAgZWxlbWVudFxuICAvLyBJdCBtdXN0IGluY2x1ZGUgYHRvb2x0aXBgICYgYHRvb2x0aXAtaW5uZXJgIENTUyBjbGFzc2VzXG4gIGRlZmF1bHRUZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgLy8gRGVsYXkgKG1zKVxuICBkZWZhdWx0RGVsYXk6IDAsXG4gIC8vIERlZmF1bHQgZXZlbnRzIHRoYXQgdHJpZ2dlciB0aGUgdG9vbHRpcFxuICBkZWZhdWx0VHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgLy8gRGVmYXVsdCBwb3NpdGlvbiBvZmZzZXQgKHB4KVxuICBkZWZhdWx0T2Zmc2V0OiAwLFxuICAvLyBEZWZhdWx0IGNvbnRhaW5lciB3aGVyZSB0aGUgdG9vbHRpcCB3aWxsIGJlIGFwcGVuZGVkXG4gIGRlZmF1bHRDb250YWluZXI6ICdib2R5JyxcbiAgZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50OiB1bmRlZmluZWQsXG4gIGRlZmF1bHRQb3BwZXJPcHRpb25zOiB7fSxcbiAgYXV0b0hpZGU6IHRydWUsXG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICBwbGFjZW1lbnQ6IG9wdGlvbnMucGxhY2VtZW50IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRQbGFjZW1lbnQsXG4gICAgZGVsYXk6IG9wdGlvbnMuZGVsYXkgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdERlbGF5LFxuICAgIHRlbXBsYXRlOiBvcHRpb25zLnRlbXBsYXRlIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRUZW1wbGF0ZSxcbiAgICB0cmlnZ2VyOiBvcHRpb25zLnRyaWdnZXIgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFRyaWdnZXIsXG4gICAgb2Zmc2V0OiBvcHRpb25zLm9mZnNldCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0T2Zmc2V0LFxuICAgIGNvbnRhaW5lcjogb3B0aW9ucy5jb250YWluZXIgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdENvbnRhaW5lcixcbiAgICBib3VuZGFyaWVzRWxlbWVudDogb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Qm91bmRhcmllc0VsZW1lbnQsXG4gICAgcG9wcGVyT3B0aW9uczogb3B0aW9ucy5wb3BwZXJPcHRpb25zIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRQb3BwZXJPcHRpb25zLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBsYWNlbWVudCAodmFsdWUsIG1vZGlmaWVycykge1xuICBsZXQgcGxhY2VtZW50ID0gdmFsdWUucGxhY2VtZW50XG4gIGZvciAoY29uc3QgcG9zIG9mIHBvc2l0aW9ucykge1xuICAgIGlmIChtb2RpZmllcnNbcG9zXSkge1xuICAgICAgcGxhY2VtZW50ID0gcG9zXG4gICAgfVxuICB9XG4gIHJldHVybiBwbGFjZW1lbnRcbn1cblxuY2xhc3MgU3VwZXJUb29sdGlwIGV4dGVuZHMgVG9vbHRpcCB7XG4gIHNldENsYXNzZXMgKGNsYXNzZXMpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX3Rvb2x0aXBOb2RlXG5cbiAgICBpZiAoZWwpIHtcbiAgICAgIGNvbnN0IG9sZENsYXNzZXMgPSB0aGlzLl9vbGRDbGFzc2VzXG4gICAgICBpZiAoY2xhc3Nlcykge1xuICAgICAgICBpZiAob2xkQ2xhc3Nlcykge1xuICAgICAgICAgIHJlcGxhY2VDbGFzc2VzKGVsLCBjbGFzc2VzLCBvbGRDbGFzc2VzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENsYXNzZXMoZWwsIGNsYXNzZXMpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob2xkQ2xhc3Nlcykge1xuICAgICAgICByZW1vdmVDbGFzc2VzKGVsLCBvbGRDbGFzc2VzKVxuICAgICAgfVxuICAgICAgdGhpcy5fb2xkQ2xhc3NlcyA9IGNsYXNzZXNcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGVuZGluZ0NsYXNzZXMgPSBjbGFzc2VzXG4gICAgfVxuXG4gICAgdGhpcy5fY2xhc3NlcyA9IGNsYXNzZXNcbiAgfVxuXG4gIHNldENvbnRlbnQgKGNvbnRlbnQpIHtcbiAgICB0aGlzLm9wdGlvbnMudGl0bGUgPSBjb250ZW50XG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX3Rvb2x0aXBOb2RlLnF1ZXJ5U2VsZWN0b3IodGhpcy5pbm5lclNlbGVjdG9yKVxuXG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gJydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBjb250ZW50XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0T3B0aW9ucyAob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBsZXQgbmVlZFBvcHBlclVwZGF0ZSA9IGZhbHNlXG4gICAgbGV0IG5lZWRSZXN0YXJ0ID0gZmFsc2VcblxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy5vZmZzZXQgIT09IG9wdGlvbnMub2Zmc2V0IHx8XG4gICAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50ICE9PSBvcHRpb25zLnBsYWNlbWVudFxuICAgICkge1xuICAgICAgbmVlZFBvcHBlclVwZGF0ZSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdGlvbnMudGVtcGxhdGUgIT09IG9wdGlvbnMudGVtcGxhdGUgfHxcbiAgICAgIHRoaXMub3B0aW9ucy50cmlnZ2VyICE9PSBvcHRpb25zLnRyaWdnZXIgfHxcbiAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIgIT09IG9wdGlvbnMuY29udGFpbmVyXG4gICAgKSB7XG4gICAgICBuZWVkUmVzdGFydCA9IHRydWVcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XVxuICAgIH1cblxuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xuICAgICAgaWYgKG5lZWRSZXN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IGlzT3BlbiA9IHRoaXMuX2lzT3BlblxuXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpXG5cbiAgICAgICAgY29uc3QgZXZlbnRzID0gdHlwZW9mIHRoaXMub3B0aW9ucy50cmlnZ2VyID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gb3B0aW9ucy50cmlnZ2VyXG4gICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgdHJpZ2dlciA9PiBbJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10uaW5kZXhPZih0cmlnZ2VyKSAhPT0gLTFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IFtdXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCBldmVudHMsIHRoaXMub3B0aW9ucylcblxuICAgICAgICB0aGlzLnNldENsYXNzZXModGhpcy5fY2xhc3NlcylcblxuICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5zaG93KClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChuZWVkUG9wcGVyVXBkYXRlKSB7XG4gICAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY3JlYXRlICguLi5hcmdzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2NyZWF0ZSguLi5hcmdzKVxuXG4gICAgaWYgKGRlZmF1bHRPcHRpb25zLmF1dG9IaWRlICYmIHRoaXMub3B0aW9ucy50cmlnZ2VyLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xKSB7XG4gICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGlkZSlcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBfZGlzcG9zZSAoKSB7XG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XG4gICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGUpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzLmZvckVhY2goKHsgZnVuYywgZXZlbnQgfSkgPT4ge1xuICAgICAgdGhpcy5yZWZlcmVuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuYylcbiAgICB9KVxuICAgIHRoaXMuX2V2ZW50cyA9IFtdXG4gICAgcmV0dXJuIHN1cGVyLl9kaXNwb3NlKClcbiAgfVxuXG4gIF9zaG93ICguLi5hcmdzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX3Nob3coLi4uYXJncylcblxuICAgIGlmICh0aGlzLl9wZW5kaW5nQ2xhc3Nlcykge1xuICAgICAgdGhpcy5zZXRDbGFzc2VzKHRoaXMuX3BlbmRpbmdDbGFzc2VzKVxuICAgICAgdGhpcy5fcGVuZGluZ0NsYXNzZXMgPSBudWxsXG4gICAgfVxuXG4gICAgLy8gRml4IHBvc2l0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXG4gICAgfSwgMClcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb250ZW50ICh2YWx1ZSkge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlXG4gIGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlLCAndHlwZScsIHR5cGUpXG4gIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHZhbHVlLmNvbnRlbnRcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb29sdGlwIChlbCwgdmFsdWUsIG1vZGlmaWVycykge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCh2YWx1ZSlcbiAgbGV0IGNsYXNzZXMgPSB2YWx1ZS5jbGFzc2VzIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzc1xuICBjb25zb2xlLmxvZygnY3JlYXRlVG9vbHRpcCcsIGNvbnRlbnQpXG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgdGl0bGU6IGNvbnRlbnQsXG4gICAgaHRtbDogdHJ1ZSxcbiAgICAuLi5nZXRPcHRpb25zKHtcbiAgICAgIC4uLnZhbHVlLFxuICAgICAgcGxhY2VtZW50OiBnZXRQbGFjZW1lbnQodmFsdWUsIG1vZGlmaWVycyksXG4gICAgfSksXG4gIH1cbiAgY29uc3QgdG9vbHRpcCA9IGVsLl90b29sdGlwID0gbmV3IFN1cGVyVG9vbHRpcChlbCwgb3B0cylcbiAgdG9vbHRpcC5zZXRDbGFzc2VzKGNsYXNzZXMpXG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lUb29sdGlwIChlbCkge1xuICBpZiAoZWwuX3Rvb2x0aXApIHtcbiAgICBlbC5fdG9vbHRpcC5kaXNwb3NlKClcbiAgICBkZWxldGUgZWwuX3Rvb2x0aXBcbiAgfVxufVxuXG5jb25zdCBkaXJlY3RpdmUgPSB7XG4gIG9wdGlvbnM6IGRlZmF1bHRPcHRpb25zLFxuICBiaW5kIChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzIH0pIHtcbiAgICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCh2YWx1ZSlcbiAgICBjb25zb2xlLmxvZygnY29udGVudCcsIGNvbnRlbnQpXG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gICAgaWYgKGNvbnRlbnQgJiYgc3RhdGUuZW5hYmxlZCkge1xuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZSAoZWwsIHsgdmFsdWUsIG9sZFZhbHVlLCBtb2RpZmllcnMgfSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KHZhbHVlKVxuICAgIGlmICghY29udGVudCB8fCAhc3RhdGUuZW5hYmxlZCkge1xuICAgICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gICAgfSBlbHNlIGlmIChlbC5fdG9vbHRpcCkge1xuICAgICAgY29uc3QgdG9vbHRpcCA9IGVsLl90b29sdGlwXG4gICAgICAvLyBDb250ZW50XG4gICAgICB0b29sdGlwLnNldENvbnRlbnQoY29udGVudClcbiAgICAgIC8vIENTUyBDbGFzc2VzXG4gICAgICB0b29sdGlwLnNldENsYXNzZXMoKHZhbHVlICYmIHZhbHVlLmNsYXNzZXMpIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzcylcbiAgICAgIC8vIE9wdGlvbnNcbiAgICAgIHRvb2x0aXAuc2V0T3B0aW9ucyh7XG4gICAgICAgIC4uLnZhbHVlLFxuICAgICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVRvb2x0aXAoZWwsIHZhbHVlLCBtb2RpZmllcnMpXG4gICAgfVxuICB9LFxuICB1bmJpbmQgKGVsKSB7XG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpcmVjdGl2ZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3YtdG9vbHRpcC5qcyIsImltcG9ydCB2dG9vbHRpcCwgeyBkZWZhdWx0T3B0aW9ucywgc3RhdGUgfSBmcm9tICcuL3YtdG9vbHRpcCdcblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xuICBpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHJldHVyblxuICBpbnN0YWxsLmluc3RhbGxlZCA9IHRydWVcblxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgfHwge30pXG4gIHZ0b29sdGlwLm9wdGlvbnMgPSBvcHRpb25zXG4gIFZ1ZS5kaXJlY3RpdmUoJ3Rvb2x0aXAnLCB2dG9vbHRpcClcbn1cblxuZXhwb3J0IGNvbnN0IFZUb29sdGlwID0gdnRvb2x0aXBcblxuY29uc3QgcGx1Z2luID0ge1xuICBpbnN0YWxsLFxuXG4gIGdldCBlbmFibGVkICgpIHtcbiAgICByZXR1cm4gc3RhdGUuZW5hYmxlZFxuICB9LFxuXG4gIHNldCBlbmFibGVkICh2YWx1ZSkge1xuICAgIHN0YXRlLmVuYWJsZWQgPSB2YWx1ZVxuICB9LFxufVxuXG4vLyBBdXRvLWluc3RhbGxcbmxldCBHbG9iYWxWdWUgPSBudWxsXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgR2xvYmFsVnVlID0gd2luZG93LlZ1ZVxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICBHbG9iYWxWdWUgPSBnbG9iYWwuVnVlXG59XG5pZiAoR2xvYmFsVnVlKSB7XG4gIEdsb2JhbFZ1ZS51c2UocGx1Z2luKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIlxuZnVuY3Rpb24gY29udmVydFRvQXJyYXkgKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc2VzIChlbCwgY2xhc3Nlcykge1xuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoYylcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMgKGVsLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUNsYXNzZXMgKGVsLCBuZXdDbGFzc2VzLCBvbGRDbGFzc2VzKSB7XG4gIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXG4gIGFkZENsYXNzZXMoZWwsIG5ld0NsYXNzZXMpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0b29sdGlwLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidG9vbHRpcC5qc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=