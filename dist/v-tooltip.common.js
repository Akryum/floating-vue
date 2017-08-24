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

function createTooltip(el, value, modifiers) {
  var content = value.content || value;
  var classes = value.classes || directive.options.defaultClass;

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

    var content = value && value.content || value;
    destroyTooltip(el);
    if (content && state.enabled) {
      createTooltip(el, value, modifiers);
    }
  },
  update: function update(el, _ref3) {
    var value = _ref3.value,
        oldValue = _ref3.oldValue,
        modifiers = _ref3.modifiers;

    var content = value && value.content || value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODEwNTg0MjJiN2I3OGM4ZjJjNzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRvb2x0aXAuanNcIiJdLCJuYW1lcyI6WyJzdGF0ZSIsImVuYWJsZWQiLCJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50IiwidW5kZWZpbmVkIiwiZGVmYXVsdFBvcHBlck9wdGlvbnMiLCJhdXRvSGlkZSIsImdldE9wdGlvbnMiLCJvcHRpb25zIiwicGxhY2VtZW50IiwiZGlyZWN0aXZlIiwiZGVsYXkiLCJ0ZW1wbGF0ZSIsInRyaWdnZXIiLCJvZmZzZXQiLCJjb250YWluZXIiLCJib3VuZGFyaWVzRWxlbWVudCIsInBvcHBlck9wdGlvbnMiLCJnZXRQbGFjZW1lbnQiLCJ2YWx1ZSIsIm1vZGlmaWVycyIsInBvcyIsIlN1cGVyVG9vbHRpcCIsImNsYXNzZXMiLCJlbCIsIl90b29sdGlwTm9kZSIsIm9sZENsYXNzZXMiLCJfb2xkQ2xhc3NlcyIsInJlcGxhY2VDbGFzc2VzIiwiYWRkQ2xhc3NlcyIsInJlbW92ZUNsYXNzZXMiLCJfcGVuZGluZ0NsYXNzZXMiLCJfY2xhc3NlcyIsImNvbnRlbnQiLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclNlbGVjdG9yIiwiaW5uZXJIVE1MIiwicG9wcGVySW5zdGFuY2UiLCJ1cGRhdGUiLCJuZWVkUG9wcGVyVXBkYXRlIiwibmVlZFJlc3RhcnQiLCJrZXkiLCJpc09wZW4iLCJfaXNPcGVuIiwiZGlzcG9zZSIsImV2ZW50cyIsInNwbGl0IiwiZmlsdGVyIiwiaW5kZXhPZiIsIl9zZXRFdmVudExpc3RlbmVycyIsInJlZmVyZW5jZSIsInNldENsYXNzZXMiLCJzaG93IiwiYXJncyIsInJlc3VsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9ldmVudHMiLCJmb3JFYWNoIiwiZnVuYyIsImV2ZW50Iiwic2V0VGltZW91dCIsImNyZWF0ZVRvb2x0aXAiLCJvcHRzIiwiaHRtbCIsInRvb2x0aXAiLCJfdG9vbHRpcCIsImRlc3Ryb3lUb29sdGlwIiwiYmluZCIsIm9sZFZhbHVlIiwic2V0Q29udGVudCIsInNldE9wdGlvbnMiLCJ1bmJpbmQiLCJpbnN0YWxsIiwiVnVlIiwiaW5zdGFsbGVkIiwiT2JqZWN0IiwiYXNzaWduIiwidnRvb2x0aXAiLCJWVG9vbHRpcCIsInBsdWdpbiIsIkdsb2JhbFZ1ZSIsIndpbmRvdyIsImdsb2JhbCIsInVzZSIsImNvbnZlcnRUb0FycmF5IiwiY2xhc3NMaXN0IiwiYWRkIiwiYyIsInJlbW92ZSIsIm5ld0NsYXNzZXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRU8sSUFBSUEsUUFBUTtBQUNqQkMsV0FBUztBQURRLENBQVo7O0FBSVAsSUFBTUMsWUFBWSxDQUNoQixLQURnQixFQUVoQixXQUZnQixFQUdoQixTQUhnQixFQUloQixPQUpnQixFQUtoQixhQUxnQixFQU1oQixXQU5nQixFQU9oQixRQVBnQixFQVFoQixjQVJnQixFQVNoQixZQVRnQixFQVVoQixNQVZnQixFQVdoQixZQVhnQixFQVloQixVQVpnQixDQUFsQjs7QUFlTyxJQUFNQyxpQkFBaUI7QUFDNUI7QUFDQUMsb0JBQWtCLEtBRlU7QUFHNUI7QUFDQUMsZ0JBQWMsbUJBSmM7QUFLNUI7QUFDQTtBQUNBQyxtQkFBaUIsOEdBUFc7QUFRNUI7QUFDQUMsZ0JBQWMsQ0FUYztBQVU1QjtBQUNBQyxrQkFBZ0IsYUFYWTtBQVk1QjtBQUNBQyxpQkFBZSxDQWJhO0FBYzVCO0FBQ0FDLG9CQUFrQixNQWZVO0FBZ0I1QkMsNEJBQTBCQyxTQWhCRTtBQWlCNUJDLHdCQUFzQixFQWpCTTtBQWtCNUJDLFlBQVU7QUFsQmtCLENBQXZCOztBQXFCUCxTQUFTQyxVQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QixTQUFPO0FBQ0xDLGVBQVdELFFBQVFDLFNBQVIsSUFBcUJDLFVBQVVGLE9BQVYsQ0FBa0JaLGdCQUQ3QztBQUVMZSxXQUFPSCxRQUFRRyxLQUFSLElBQWlCRCxVQUFVRixPQUFWLENBQWtCVCxZQUZyQztBQUdMYSxjQUFVSixRQUFRSSxRQUFSLElBQW9CRixVQUFVRixPQUFWLENBQWtCVixlQUgzQztBQUlMZSxhQUFTTCxRQUFRSyxPQUFSLElBQW1CSCxVQUFVRixPQUFWLENBQWtCUixjQUp6QztBQUtMYyxZQUFRTixRQUFRTSxNQUFSLElBQWtCSixVQUFVRixPQUFWLENBQWtCUCxhQUx2QztBQU1MYyxlQUFXUCxRQUFRTyxTQUFSLElBQXFCTCxVQUFVRixPQUFWLENBQWtCTixnQkFON0M7QUFPTGMsdUJBQW1CUixRQUFRUSxpQkFBUixJQUE2Qk4sVUFBVUYsT0FBVixDQUFrQkwsd0JBUDdEO0FBUUxjLG1CQUFlVCxRQUFRUyxhQUFSLElBQXlCUCxVQUFVRixPQUFWLENBQWtCSDtBQVJyRCxHQUFQO0FBVUQ7O0FBRUQsU0FBU2EsWUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJDLFNBQTlCLEVBQXlDO0FBQ3ZDLE1BQUlYLFlBQVlVLE1BQU1WLFNBQXRCO0FBRHVDO0FBQUE7QUFBQTs7QUFBQTtBQUV2Qyx5QkFBa0JmLFNBQWxCLDhIQUE2QjtBQUFBLFVBQWxCMkIsR0FBa0I7O0FBQzNCLFVBQUlELFVBQVVDLEdBQVYsQ0FBSixFQUFvQjtBQUNsQlosb0JBQVlZLEdBQVo7QUFDRDtBQUNGO0FBTnNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT3ZDLFNBQU9aLFNBQVA7QUFDRDs7SUFFS2EsWTs7Ozs7Ozs7Ozs7K0JBQ1FDLE8sRUFBUztBQUNuQixVQUFNQyxLQUFLLEtBQUtDLFlBQWhCOztBQUVBLFVBQUlELEVBQUosRUFBUTtBQUNOLFlBQU1FLGFBQWEsS0FBS0MsV0FBeEI7QUFDQSxZQUFJSixPQUFKLEVBQWE7QUFDWCxjQUFJRyxVQUFKLEVBQWdCO0FBQ2RFLFlBQUEscUZBQUFBLENBQWVKLEVBQWYsRUFBbUJELE9BQW5CLEVBQTRCRyxVQUE1QjtBQUNELFdBRkQsTUFFTztBQUNMRyxZQUFBLGlGQUFBQSxDQUFXTCxFQUFYLEVBQWVELE9BQWY7QUFDRDtBQUNGLFNBTkQsTUFNTyxJQUFJRyxVQUFKLEVBQWdCO0FBQ3JCSSxVQUFBLG9GQUFBQSxDQUFjTixFQUFkLEVBQWtCRSxVQUFsQjtBQUNEO0FBQ0QsYUFBS0MsV0FBTCxHQUFtQkosT0FBbkI7QUFDRCxPQVpELE1BWU87QUFDTCxhQUFLUSxlQUFMLEdBQXVCUixPQUF2QjtBQUNEOztBQUVELFdBQUtTLFFBQUwsR0FBZ0JULE9BQWhCO0FBQ0Q7OzsrQkFFV1UsTyxFQUFTO0FBQ25CLFdBQUt6QixPQUFMLENBQWEwQixLQUFiLEdBQXFCRCxPQUFyQjtBQUNBLFVBQUksS0FBS1IsWUFBVCxFQUF1QjtBQUNyQixZQUFNRCxLQUFLLEtBQUtDLFlBQUwsQ0FBa0JVLGFBQWxCLENBQWdDLEtBQUtDLGFBQXJDLENBQVg7O0FBRUEsWUFBSVosRUFBSixFQUFRO0FBQ04sY0FBSSxDQUFDUyxPQUFMLEVBQWM7QUFDWlQsZUFBR2EsU0FBSCxHQUFlLEVBQWY7QUFDRCxXQUZELE1BRU87QUFDTGIsZUFBR2EsU0FBSCxHQUFlSixPQUFmO0FBQ0Q7O0FBRUQsZUFBS0ssY0FBTCxDQUFvQkMsTUFBcEI7QUFDRDtBQUNGO0FBQ0Y7OzsrQkFFVy9CLE8sRUFBUztBQUNuQkEsZ0JBQVVELFdBQVdDLE9BQVgsQ0FBVjs7QUFFQSxVQUFJZ0MsbUJBQW1CLEtBQXZCO0FBQ0EsVUFBSUMsY0FBYyxLQUFsQjs7QUFFQSxVQUNFLEtBQUtqQyxPQUFMLENBQWFNLE1BQWIsS0FBd0JOLFFBQVFNLE1BQWhDLElBQ0EsS0FBS04sT0FBTCxDQUFhQyxTQUFiLEtBQTJCRCxRQUFRQyxTQUZyQyxFQUdFO0FBQ0ErQiwyQkFBbUIsSUFBbkI7QUFDRDs7QUFFRCxVQUNFLEtBQUtoQyxPQUFMLENBQWFJLFFBQWIsS0FBMEJKLFFBQVFJLFFBQWxDLElBQ0EsS0FBS0osT0FBTCxDQUFhSyxPQUFiLEtBQXlCTCxRQUFRSyxPQURqQyxJQUVBLEtBQUtMLE9BQUwsQ0FBYU8sU0FBYixLQUEyQlAsUUFBUU8sU0FIckMsRUFJRTtBQUNBMEIsc0JBQWMsSUFBZDtBQUNEOztBQUVELFdBQUssSUFBTUMsR0FBWCxJQUFrQmxDLE9BQWxCLEVBQTJCO0FBQ3pCLGFBQUtBLE9BQUwsQ0FBYWtDLEdBQWIsSUFBb0JsQyxRQUFRa0MsR0FBUixDQUFwQjtBQUNEOztBQUVELFVBQUksS0FBS2pCLFlBQVQsRUFBdUI7QUFDckIsWUFBSWdCLFdBQUosRUFBaUI7QUFDZixjQUFNRSxTQUFTLEtBQUtDLE9BQXBCOztBQUVBLGVBQUtDLE9BQUw7O0FBRUEsY0FBTUMsU0FBUyxPQUFPLEtBQUt0QyxPQUFMLENBQWFLLE9BQXBCLEtBQWdDLFFBQWhDLEdBQ1hMLFFBQVFLLE9BQVIsQ0FDQ2tDLEtBREQsQ0FDTyxHQURQLEVBRUNDLE1BRkQsQ0FHRTtBQUFBLG1CQUFXLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEJDLE9BQTVCLENBQW9DcEMsT0FBcEMsTUFBaUQsQ0FBQyxDQUE3RDtBQUFBLFdBSEYsQ0FEVyxHQU1YLEVBTko7QUFPQSxlQUFLcUMsa0JBQUwsQ0FBd0IsS0FBS0MsU0FBN0IsRUFBd0NMLE1BQXhDLEVBQWdELEtBQUt0QyxPQUFyRDs7QUFFQSxlQUFLNEMsVUFBTCxDQUFnQixLQUFLcEIsUUFBckI7O0FBRUEsY0FBSVcsTUFBSixFQUFZO0FBQ1YsaUJBQUtVLElBQUw7QUFDRDtBQUNGLFNBbkJELE1BbUJPLElBQUliLGdCQUFKLEVBQXNCO0FBQzNCLGVBQUtGLGNBQUwsQ0FBb0JDLE1BQXBCO0FBQ0Q7QUFDRjtBQUNGOzs7OEJBRWlCO0FBQUE7O0FBQUEsd0NBQU5lLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNoQixVQUFNQyw0SkFBMEJELElBQTFCLEVBQU47O0FBRUEsVUFBSTNELGVBQWVXLFFBQWYsSUFBMkIsS0FBS0UsT0FBTCxDQUFhSyxPQUFiLENBQXFCb0MsT0FBckIsQ0FBNkIsT0FBN0IsTUFBMEMsQ0FBQyxDQUExRSxFQUE2RTtBQUMzRU0sZUFBT0MsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsS0FBS0MsSUFBM0M7QUFDQUYsZUFBT0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBS0MsSUFBdEM7QUFDRDs7QUFFRCxhQUFPRixNQUFQO0FBQ0Q7OzsrQkFFVztBQUFBOztBQUNWLFVBQUksS0FBSzlCLFlBQVQsRUFBdUI7QUFDckIsYUFBS0EsWUFBTCxDQUFrQmlDLG1CQUFsQixDQUFzQyxZQUF0QyxFQUFvRCxLQUFLRCxJQUF6RDtBQUNBLGFBQUtoQyxZQUFMLENBQWtCaUMsbUJBQWxCLENBQXNDLE9BQXRDLEVBQStDLEtBQUtELElBQXBEO0FBQ0Q7O0FBRUQsV0FBS0UsT0FBTCxDQUFhQyxPQUFiLENBQXFCLGdCQUFxQjtBQUFBLFlBQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxZQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQ3hDLGVBQUtYLFNBQUwsQ0FBZU8sbUJBQWYsQ0FBbUNJLEtBQW5DLEVBQTBDRCxJQUExQztBQUNELE9BRkQ7QUFHQSxXQUFLRixPQUFMLEdBQWUsRUFBZjtBQUNBO0FBQ0Q7Ozs0QkFFZTtBQUFBO0FBQUE7O0FBQUEseUNBQU5MLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNkLFVBQU1DLDBKQUF3QkQsSUFBeEIsRUFBTjs7QUFFQSxVQUFJLEtBQUt2QixlQUFULEVBQTBCO0FBQ3hCLGFBQUtxQixVQUFMLENBQWdCLEtBQUtyQixlQUFyQjtBQUNBLGFBQUtBLGVBQUwsR0FBdUIsSUFBdkI7QUFDRDs7QUFFRDtBQUNBZ0MsaUJBQVcsWUFBTTtBQUNmLGVBQUt6QixjQUFMLENBQW9CQyxNQUFwQjtBQUNELE9BRkQsRUFFRyxDQUZIOztBQUlBLGFBQU9nQixNQUFQO0FBQ0Q7Ozs7RUFqSXdCLGtEOztBQW9JM0IsU0FBU1MsYUFBVCxDQUF3QnhDLEVBQXhCLEVBQTRCTCxLQUE1QixFQUFtQ0MsU0FBbkMsRUFBOEM7QUFDNUMsTUFBTWEsVUFBVWQsTUFBTWMsT0FBTixJQUFpQmQsS0FBakM7QUFDQSxNQUFJSSxVQUFVSixNQUFNSSxPQUFOLElBQWlCYixVQUFVRixPQUFWLENBQWtCWCxZQUFqRDs7QUFFQSxNQUFNb0U7QUFDSi9CLFdBQU9ELE9BREg7QUFFSmlDLFVBQU07QUFGRixLQUdEM0Qsd0JBQ0VZLEtBREY7QUFFRFYsZUFBV1MsYUFBYUMsS0FBYixFQUFvQkMsU0FBcEI7QUFGVixLQUhDLENBQU47QUFRQSxNQUFNK0MsVUFBVTNDLEdBQUc0QyxRQUFILEdBQWMsSUFBSTlDLFlBQUosQ0FBaUJFLEVBQWpCLEVBQXFCeUMsSUFBckIsQ0FBOUI7QUFDQUUsVUFBUWYsVUFBUixDQUFtQjdCLE9BQW5CO0FBQ0Q7O0FBRUQsU0FBUzhDLGNBQVQsQ0FBeUI3QyxFQUF6QixFQUE2QjtBQUMzQixNQUFJQSxHQUFHNEMsUUFBUCxFQUFpQjtBQUNmNUMsT0FBRzRDLFFBQUgsQ0FBWXZCLE9BQVo7QUFDQSxXQUFPckIsR0FBRzRDLFFBQVY7QUFDRDtBQUNGOztBQUVELElBQU0xRCxZQUFZO0FBQ2hCRixXQUFTYixjQURPO0FBRWhCMkUsTUFGZ0IsZ0JBRVY5QyxFQUZVLFNBRWdCO0FBQUEsUUFBcEJMLEtBQW9CLFNBQXBCQSxLQUFvQjtBQUFBLFFBQWJDLFNBQWEsU0FBYkEsU0FBYTs7QUFDOUIsUUFBTWEsVUFBVWQsU0FBU0EsTUFBTWMsT0FBZixJQUEwQmQsS0FBMUM7QUFDQWtELG1CQUFlN0MsRUFBZjtBQUNBLFFBQUlTLFdBQVd6QyxNQUFNQyxPQUFyQixFQUE4QjtBQUM1QnVFLG9CQUFjeEMsRUFBZCxFQUFrQkwsS0FBbEIsRUFBeUJDLFNBQXpCO0FBQ0Q7QUFDRixHQVJlO0FBU2hCbUIsUUFUZ0Isa0JBU1JmLEVBVFEsU0FTNEI7QUFBQSxRQUE5QkwsS0FBOEIsU0FBOUJBLEtBQThCO0FBQUEsUUFBdkJvRCxRQUF1QixTQUF2QkEsUUFBdUI7QUFBQSxRQUFibkQsU0FBYSxTQUFiQSxTQUFhOztBQUMxQyxRQUFNYSxVQUFVZCxTQUFTQSxNQUFNYyxPQUFmLElBQTBCZCxLQUExQztBQUNBLFFBQUksQ0FBQ2MsT0FBRCxJQUFZLENBQUN6QyxNQUFNQyxPQUF2QixFQUFnQztBQUM5QjRFLHFCQUFlN0MsRUFBZjtBQUNELEtBRkQsTUFFTyxJQUFJQSxHQUFHNEMsUUFBUCxFQUFpQjtBQUN0QixVQUFNRCxVQUFVM0MsR0FBRzRDLFFBQW5CO0FBQ0E7QUFDQUQsY0FBUUssVUFBUixDQUFtQnZDLE9BQW5CO0FBQ0E7QUFDQWtDLGNBQVFmLFVBQVIsQ0FBb0JqQyxTQUFTQSxNQUFNSSxPQUFoQixJQUE0QmIsVUFBVUYsT0FBVixDQUFrQlgsWUFBakU7QUFDQTtBQUNBc0UsY0FBUU0sVUFBUixjQUNLdEQsS0FETDtBQUVFVixtQkFBV1MsYUFBYUMsS0FBYixFQUFvQkMsU0FBcEI7QUFGYjtBQUlELEtBWE0sTUFXQTtBQUNMNEMsb0JBQWN4QyxFQUFkLEVBQWtCTCxLQUFsQixFQUF5QkMsU0FBekI7QUFDRDtBQUNGLEdBM0JlO0FBNEJoQnNELFFBNUJnQixrQkE0QlJsRCxFQTVCUSxFQTRCSjtBQUNWNkMsbUJBQWU3QyxFQUFmO0FBQ0Q7QUE5QmUsQ0FBbEI7O0FBaUNBLHlEQUFlZCxTQUFmLEU7Ozs7Ozs7Ozs7O0FDL1BBOztBQUVPLFNBQVNpRSxPQUFULENBQWtCQyxHQUFsQixFQUF1QnBFLE9BQXZCLEVBQWdDO0FBQ3JDLE1BQUltRSxRQUFRRSxTQUFaLEVBQXVCO0FBQ3ZCRixVQUFRRSxTQUFSLEdBQW9CLElBQXBCOztBQUVBckUsWUFBVXNFLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLGtFQUFsQixFQUFrQ3ZFLFdBQVcsRUFBN0MsQ0FBVjtBQUNBd0UsRUFBQSwyREFBQUEsQ0FBU3hFLE9BQVQsR0FBbUJBLE9BQW5CO0FBQ0FvRSxNQUFJbEUsU0FBSixDQUFjLFNBQWQsRUFBeUIsMkRBQXpCO0FBQ0Q7O0FBRU0sSUFBTXVFLFdBQVcsMkRBQWpCOztBQUVQLElBQU1DLFNBQVM7QUFDYlAsa0JBRGE7O0FBR2IsTUFBSWxGLE9BQUosR0FBZTtBQUNiLFdBQU8seURBQUFELENBQU1DLE9BQWI7QUFDRCxHQUxZOztBQU9iLE1BQUlBLE9BQUosQ0FBYTBCLEtBQWIsRUFBb0I7QUFDbEIzQixJQUFBLHlEQUFBQSxDQUFNQyxPQUFOLEdBQWdCMEIsS0FBaEI7QUFDRDtBQVRZLENBQWY7O0FBWUE7QUFDQSxJQUFJZ0UsWUFBWSxJQUFoQjtBQUNBLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQ0QsY0FBWUMsT0FBT1IsR0FBbkI7QUFDRCxDQUZELE1BRU8sSUFBSSxPQUFPUyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ3hDRixjQUFZRSxPQUFPVCxHQUFuQjtBQUNEO0FBQ0QsSUFBSU8sU0FBSixFQUFlO0FBQ2JBLFlBQVVHLEdBQVYsQ0FBY0osTUFBZDtBQUNEOztBQUVELCtEQUFlQSxNQUFmLEU7Ozs7Ozs7Ozs7O0FDbkNBLFNBQVNLLGNBQVQsQ0FBeUJwRSxLQUF6QixFQUFnQztBQUM5QixNQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0JBLFlBQVFBLE1BQU00QixLQUFOLENBQVksR0FBWixDQUFSO0FBQ0Q7QUFDRCxTQUFPNUIsS0FBUDtBQUNEOztBQUVNLFNBQVNVLFVBQVQsQ0FBcUJMLEVBQXJCLEVBQXlCRCxPQUF6QixFQUFrQztBQUN2Q0EsWUFBVWdFLGVBQWVoRSxPQUFmLENBQVY7QUFDQUEsVUFBUXFDLE9BQVIsQ0FBZ0IsYUFBSztBQUNuQnBDLE9BQUdnRSxTQUFILENBQWFDLEdBQWIsQ0FBaUJDLENBQWpCO0FBQ0QsR0FGRDtBQUdEOztBQUVNLFNBQVM1RCxhQUFULENBQXdCTixFQUF4QixFQUE0QkQsT0FBNUIsRUFBcUM7QUFDMUNBLFlBQVVnRSxlQUFlaEUsT0FBZixDQUFWO0FBQ0FBLFVBQVFxQyxPQUFSLENBQWdCLGFBQUs7QUFDbkJwQyxPQUFHZ0UsU0FBSCxDQUFhRyxNQUFiLENBQW9CRCxDQUFwQjtBQUNELEdBRkQ7QUFHRDs7QUFFTSxTQUFTOUQsY0FBVCxDQUF5QkosRUFBekIsRUFBNkJvRSxVQUE3QixFQUF5Q2xFLFVBQXpDLEVBQXFEO0FBQzFESSxnQkFBY04sRUFBZCxFQUFrQkUsVUFBbEI7QUFDQUcsYUFBV0wsRUFBWCxFQUFlb0UsVUFBZjtBQUNELEM7Ozs7OztBQ3pCRCx1QyIsImZpbGUiOiJ2LXRvb2x0aXAuY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4MTA1ODQyMmI3Yjc4YzhmMmM3MCIsImltcG9ydCBUb29sdGlwIGZyb20gJ3Rvb2x0aXAuanMnXG5cbmltcG9ydCB7IGFkZENsYXNzZXMsIHJlbW92ZUNsYXNzZXMsIHJlcGxhY2VDbGFzc2VzIH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGxldCBzdGF0ZSA9IHtcbiAgZW5hYmxlZDogdHJ1ZSxcbn1cblxuY29uc3QgcG9zaXRpb25zID0gW1xuICAndG9wJyxcbiAgJ3RvcC1zdGFydCcsXG4gICd0b3AtZW5kJyxcbiAgJ3JpZ2h0JyxcbiAgJ3JpZ2h0LXN0YXJ0JyxcbiAgJ3JpZ2h0LWVuZCcsXG4gICdib3R0b20nLFxuICAnYm90dG9tLXN0YXJ0JyxcbiAgJ2JvdHRvbS1lbmQnLFxuICAnbGVmdCcsXG4gICdsZWZ0LXN0YXJ0JyxcbiAgJ2xlZnQtZW5kJyxcbl1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAvLyBEZWZhdWx0IHRvb2x0aXAgcGxhY2VtZW50IHJlbGF0aXZlIHRvIHRhcmdldCBlbGVtZW50XG4gIGRlZmF1bHRQbGFjZW1lbnQ6ICd0b3AnLFxuICAvLyBEZWZhdWx0IENTUyBjbGFzc2VzIGFwcGxpZWQgdG8gdGhlIHRvb2x0aXAgZWxlbWVudFxuICBkZWZhdWx0Q2xhc3M6ICd2dWUtdG9vbHRpcC10aGVtZScsXG4gIC8vIERlZmF1bHQgSFRNTCB0ZW1wbGF0ZSBvZiB0aGUgdG9vbHRpcCBlbGVtZW50XG4gIC8vIEl0IG11c3QgaW5jbHVkZSBgdG9vbHRpcGAgJiBgdG9vbHRpcC1pbm5lcmAgQ1NTIGNsYXNzZXNcbiAgZGVmYXVsdFRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICAvLyBEZWxheSAobXMpXG4gIGRlZmF1bHREZWxheTogMCxcbiAgLy8gRGVmYXVsdCBldmVudHMgdGhhdCB0cmlnZ2VyIHRoZSB0b29sdGlwXG4gIGRlZmF1bHRUcmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICAvLyBEZWZhdWx0IHBvc2l0aW9uIG9mZnNldCAocHgpXG4gIGRlZmF1bHRPZmZzZXQ6IDAsXG4gIC8vIERlZmF1bHQgY29udGFpbmVyIHdoZXJlIHRoZSB0b29sdGlwIHdpbGwgYmUgYXBwZW5kZWRcbiAgZGVmYXVsdENvbnRhaW5lcjogJ2JvZHknLFxuICBkZWZhdWx0Qm91bmRhcmllc0VsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFBvcHBlck9wdGlvbnM6IHt9LFxuICBhdXRvSGlkZTogdHJ1ZSxcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9ucyAob3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIHBsYWNlbWVudDogb3B0aW9ucy5wbGFjZW1lbnQgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFBsYWNlbWVudCxcbiAgICBkZWxheTogb3B0aW9ucy5kZWxheSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0RGVsYXksXG4gICAgdGVtcGxhdGU6IG9wdGlvbnMudGVtcGxhdGUgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFRlbXBsYXRlLFxuICAgIHRyaWdnZXI6IG9wdGlvbnMudHJpZ2dlciB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0VHJpZ2dlcixcbiAgICBvZmZzZXQ6IG9wdGlvbnMub2Zmc2V0IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRPZmZzZXQsXG4gICAgY29udGFpbmVyOiBvcHRpb25zLmNvbnRhaW5lciB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q29udGFpbmVyLFxuICAgIGJvdW5kYXJpZXNFbGVtZW50OiBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRCb3VuZGFyaWVzRWxlbWVudCxcbiAgICBwb3BwZXJPcHRpb25zOiBvcHRpb25zLnBvcHBlck9wdGlvbnMgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFBvcHBlck9wdGlvbnMsXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50ICh2YWx1ZSwgbW9kaWZpZXJzKSB7XG4gIGxldCBwbGFjZW1lbnQgPSB2YWx1ZS5wbGFjZW1lbnRcbiAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB7XG4gICAgaWYgKG1vZGlmaWVyc1twb3NdKSB7XG4gICAgICBwbGFjZW1lbnQgPSBwb3NcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBsYWNlbWVudFxufVxuXG5jbGFzcyBTdXBlclRvb2x0aXAgZXh0ZW5kcyBUb29sdGlwIHtcbiAgc2V0Q2xhc3NlcyAoY2xhc3Nlcykge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fdG9vbHRpcE5vZGVcblxuICAgIGlmIChlbCkge1xuICAgICAgY29uc3Qgb2xkQ2xhc3NlcyA9IHRoaXMuX29sZENsYXNzZXNcbiAgICAgIGlmIChjbGFzc2VzKSB7XG4gICAgICAgIGlmIChvbGRDbGFzc2VzKSB7XG4gICAgICAgICAgcmVwbGFjZUNsYXNzZXMoZWwsIGNsYXNzZXMsIG9sZENsYXNzZXMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkQ2xhc3NlcyhlbCwgY2xhc3NlcylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvbGRDbGFzc2VzKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXG4gICAgICB9XG4gICAgICB0aGlzLl9vbGRDbGFzc2VzID0gY2xhc3Nlc1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wZW5kaW5nQ2xhc3NlcyA9IGNsYXNzZXNcbiAgICB9XG5cbiAgICB0aGlzLl9jbGFzc2VzID0gY2xhc3Nlc1xuICB9XG5cbiAgc2V0Q29udGVudCAoY29udGVudCkge1xuICAgIHRoaXMub3B0aW9ucy50aXRsZSA9IGNvbnRlbnRcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fdG9vbHRpcE5vZGUucXVlcnlTZWxlY3Rvcih0aGlzLmlubmVyU2VsZWN0b3IpXG5cbiAgICAgIGlmIChlbCkge1xuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9IGNvbnRlbnRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRPcHRpb25zIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucylcblxuICAgIGxldCBuZWVkUG9wcGVyVXBkYXRlID0gZmFsc2VcbiAgICBsZXQgbmVlZFJlc3RhcnQgPSBmYWxzZVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLm9mZnNldCAhPT0gb3B0aW9ucy5vZmZzZXQgfHxcbiAgICAgIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQgIT09IG9wdGlvbnMucGxhY2VtZW50XG4gICAgKSB7XG4gICAgICBuZWVkUG9wcGVyVXBkYXRlID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy50ZW1wbGF0ZSAhPT0gb3B0aW9ucy50ZW1wbGF0ZSB8fFxuICAgICAgdGhpcy5vcHRpb25zLnRyaWdnZXIgIT09IG9wdGlvbnMudHJpZ2dlciB8fFxuICAgICAgdGhpcy5vcHRpb25zLmNvbnRhaW5lciAhPT0gb3B0aW9ucy5jb250YWluZXJcbiAgICApIHtcbiAgICAgIG5lZWRSZXN0YXJ0ID0gdHJ1ZVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XG4gICAgICBpZiAobmVlZFJlc3RhcnQpIHtcbiAgICAgICAgY29uc3QgaXNPcGVuID0gdGhpcy5faXNPcGVuXG5cbiAgICAgICAgdGhpcy5kaXNwb3NlKClcblxuICAgICAgICBjb25zdCBldmVudHMgPSB0eXBlb2YgdGhpcy5vcHRpb25zLnRyaWdnZXIgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyBvcHRpb25zLnRyaWdnZXJcbiAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICB0cmlnZ2VyID0+IFsnY2xpY2snLCAnaG92ZXInLCAnZm9jdXMnXS5pbmRleE9mKHRyaWdnZXIpICE9PSAtMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogW11cbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIGV2ZW50cywgdGhpcy5vcHRpb25zKVxuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3Nlcyh0aGlzLl9jbGFzc2VzKVxuXG4gICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICB0aGlzLnNob3coKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5lZWRQb3BwZXJVcGRhdGUpIHtcbiAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGUgKC4uLmFyZ3MpIHtcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fY3JlYXRlKC4uLmFyZ3MpXG5cbiAgICBpZiAoZGVmYXVsdE9wdGlvbnMuYXV0b0hpZGUgJiYgdGhpcy5vcHRpb25zLnRyaWdnZXIuaW5kZXhPZignaG92ZXInKSAhPT0gLTEpIHtcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIF9kaXNwb3NlICgpIHtcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcbiAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhpZGUpXG4gICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSlcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMuZm9yRWFjaCgoeyBmdW5jLCBldmVudCB9KSA9PiB7XG4gICAgICB0aGlzLnJlZmVyZW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jKVxuICAgIH0pXG4gICAgdGhpcy5fZXZlbnRzID0gW11cbiAgICByZXR1cm4gc3VwZXIuX2Rpc3Bvc2UoKVxuICB9XG5cbiAgX3Nob3cgKC4uLmFyZ3MpIHtcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fc2hvdyguLi5hcmdzKVxuXG4gICAgaWYgKHRoaXMuX3BlbmRpbmdDbGFzc2VzKSB7XG4gICAgICB0aGlzLnNldENsYXNzZXModGhpcy5fcGVuZGluZ0NsYXNzZXMpXG4gICAgICB0aGlzLl9wZW5kaW5nQ2xhc3NlcyA9IG51bGxcbiAgICB9XG5cbiAgICAvLyBGaXggcG9zaXRpb25cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcbiAgICB9LCAwKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvb2x0aXAgKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZS5jb250ZW50IHx8IHZhbHVlXG4gIGxldCBjbGFzc2VzID0gdmFsdWUuY2xhc3NlcyB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q2xhc3NcblxuICBjb25zdCBvcHRzID0ge1xuICAgIHRpdGxlOiBjb250ZW50LFxuICAgIGh0bWw6IHRydWUsXG4gICAgLi4uZ2V0T3B0aW9ucyh7XG4gICAgICAuLi52YWx1ZSxcbiAgICAgIHBsYWNlbWVudDogZ2V0UGxhY2VtZW50KHZhbHVlLCBtb2RpZmllcnMpLFxuICAgIH0pLFxuICB9XG4gIGNvbnN0IHRvb2x0aXAgPSBlbC5fdG9vbHRpcCA9IG5ldyBTdXBlclRvb2x0aXAoZWwsIG9wdHMpXG4gIHRvb2x0aXAuc2V0Q2xhc3NlcyhjbGFzc2VzKVxufVxuXG5mdW5jdGlvbiBkZXN0cm95VG9vbHRpcCAoZWwpIHtcbiAgaWYgKGVsLl90b29sdGlwKSB7XG4gICAgZWwuX3Rvb2x0aXAuZGlzcG9zZSgpXG4gICAgZGVsZXRlIGVsLl90b29sdGlwXG4gIH1cbn1cblxuY29uc3QgZGlyZWN0aXZlID0ge1xuICBvcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcbiAgYmluZCAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycyB9KSB7XG4gICAgY29uc3QgY29udGVudCA9IHZhbHVlICYmIHZhbHVlLmNvbnRlbnQgfHwgdmFsdWVcbiAgICBkZXN0cm95VG9vbHRpcChlbClcbiAgICBpZiAoY29udGVudCAmJiBzdGF0ZS5lbmFibGVkKSB7XG4gICAgICBjcmVhdGVUb29sdGlwKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKVxuICAgIH1cbiAgfSxcbiAgdXBkYXRlIChlbCwgeyB2YWx1ZSwgb2xkVmFsdWUsIG1vZGlmaWVycyB9KSB7XG4gICAgY29uc3QgY29udGVudCA9IHZhbHVlICYmIHZhbHVlLmNvbnRlbnQgfHwgdmFsdWVcbiAgICBpZiAoIWNvbnRlbnQgfHwgIXN0YXRlLmVuYWJsZWQpIHtcbiAgICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxuICAgIH0gZWxzZSBpZiAoZWwuX3Rvb2x0aXApIHtcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBlbC5fdG9vbHRpcFxuICAgICAgLy8gQ29udGVudFxuICAgICAgdG9vbHRpcC5zZXRDb250ZW50KGNvbnRlbnQpXG4gICAgICAvLyBDU1MgQ2xhc3Nlc1xuICAgICAgdG9vbHRpcC5zZXRDbGFzc2VzKCh2YWx1ZSAmJiB2YWx1ZS5jbGFzc2VzKSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q2xhc3MpXG4gICAgICAvLyBPcHRpb25zXG4gICAgICB0b29sdGlwLnNldE9wdGlvbnMoe1xuICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgcGxhY2VtZW50OiBnZXRQbGFjZW1lbnQodmFsdWUsIG1vZGlmaWVycyksXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVUb29sdGlwKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKVxuICAgIH1cbiAgfSxcbiAgdW5iaW5kIChlbCkge1xuICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXJlY3RpdmVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92LXRvb2x0aXAuanMiLCJpbXBvcnQgdnRvb2x0aXAsIHsgZGVmYXVsdE9wdGlvbnMsIHN0YXRlIH0gZnJvbSAnLi92LXRvb2x0aXAnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsIChWdWUsIG9wdGlvbnMpIHtcbiAgaWYgKGluc3RhbGwuaW5zdGFsbGVkKSByZXR1cm5cbiAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlXG5cbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIHx8IHt9KVxuICB2dG9vbHRpcC5vcHRpb25zID0gb3B0aW9uc1xuICBWdWUuZGlyZWN0aXZlKCd0b29sdGlwJywgdnRvb2x0aXApXG59XG5cbmV4cG9ydCBjb25zdCBWVG9vbHRpcCA9IHZ0b29sdGlwXG5cbmNvbnN0IHBsdWdpbiA9IHtcbiAgaW5zdGFsbCxcblxuICBnZXQgZW5hYmxlZCAoKSB7XG4gICAgcmV0dXJuIHN0YXRlLmVuYWJsZWRcbiAgfSxcblxuICBzZXQgZW5hYmxlZCAodmFsdWUpIHtcbiAgICBzdGF0ZS5lbmFibGVkID0gdmFsdWVcbiAgfSxcbn1cblxuLy8gQXV0by1pbnN0YWxsXG5sZXQgR2xvYmFsVnVlID0gbnVsbFxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIEdsb2JhbFZ1ZSA9IHdpbmRvdy5WdWVcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgR2xvYmFsVnVlID0gZ2xvYmFsLlZ1ZVxufVxuaWYgKEdsb2JhbFZ1ZSkge1xuICBHbG9iYWxWdWUudXNlKHBsdWdpbilcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJcbmZ1bmN0aW9uIGNvbnZlcnRUb0FycmF5ICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJyAnKVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3NlcyAoZWwsIGNsYXNzZXMpIHtcbiAgY2xhc3NlcyA9IGNvbnZlcnRUb0FycmF5KGNsYXNzZXMpXG4gIGNsYXNzZXMuZm9yRWFjaChjID0+IHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGMpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzc2VzIChlbCwgY2xhc3Nlcykge1xuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoYylcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDbGFzc2VzIChlbCwgbmV3Q2xhc3Nlcywgb2xkQ2xhc3Nlcykge1xuICByZW1vdmVDbGFzc2VzKGVsLCBvbGRDbGFzc2VzKVxuICBhZGRDbGFzc2VzKGVsLCBuZXdDbGFzc2VzKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG9vbHRpcC5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRvb2x0aXAuanNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9