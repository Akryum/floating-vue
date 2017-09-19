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
  autoHide: true,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000
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
    value: function _show(reference, options) {
      var _this3 = this;

      if (options && typeof options.container === 'string') {
        var container = document.querySelector(options.container);
        if (!container) return;
      }

      var result = _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_show', this).call(this, reference, options);

      if (this._pendingClasses) {
        this.setClasses(this._pendingClasses);
        this._pendingClasses = null;
      }

      // Fix position
      setTimeout(function () {
        if (_this3.popperInstance) {
          _this3.popperInstance.update();
        }
      }, 0);

      clearTimeout(this._disposeTimer);

      return result;
    }
  }, {
    key: '_hide',
    value: function _hide() {
      var _get3,
          _this4 = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var result = (_get3 = _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_hide', this)).call.apply(_get3, [this].concat(args));

      clearTimeout(this._disposeTimer);
      this._disposeTimer = setTimeout(function () {
        if (_this4._tooltipNode) {
          _this4._tooltipNode.removeEventListener('mouseenter', _this4.hide);
          _this4._tooltipNode.removeEventListener('click', _this4.hide);
          _this4._tooltipNode.parentNode.removeChild(_this4._tooltipNode);
          _this4._tooltipNode = null;
        }
      }, defaultOptions.disposeTimeout);

      return result;
    }
  }]);

  return SuperTooltip;
}(__WEBPACK_IMPORTED_MODULE_0_tooltip_js___default.a);

function getContent(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type === 'string') {
    return value;
  } else if (value && type === 'object') {
    return value.content;
  } else {
    return false;
  }
}

function createTooltip(el, value, modifiers) {
  var content = getContent(value);
  var classes = value.classes || directive.options.defaultClass;
  var opts = _extends({
    title: content,
    html: true
  }, getOptions(_extends({}, value, {
    placement: getPlacement(value, modifiers)
  })));
  var tooltip = el._tooltip = new SuperTooltip(el, opts);
  tooltip.setClasses(classes);
  tooltip._vueEl = el;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzA2YTRmNzdjMTlkZTRkYmYzMjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRvb2x0aXAuanNcIiJdLCJuYW1lcyI6WyJzdGF0ZSIsImVuYWJsZWQiLCJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50IiwidW5kZWZpbmVkIiwiZGVmYXVsdFBvcHBlck9wdGlvbnMiLCJhdXRvSGlkZSIsImRpc3Bvc2VUaW1lb3V0IiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJwbGFjZW1lbnQiLCJkaXJlY3RpdmUiLCJkZWxheSIsInRlbXBsYXRlIiwidHJpZ2dlciIsIm9mZnNldCIsImNvbnRhaW5lciIsImJvdW5kYXJpZXNFbGVtZW50IiwicG9wcGVyT3B0aW9ucyIsImdldFBsYWNlbWVudCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zIiwiU3VwZXJUb29sdGlwIiwiY2xhc3NlcyIsImVsIiwiX3Rvb2x0aXBOb2RlIiwib2xkQ2xhc3NlcyIsIl9vbGRDbGFzc2VzIiwicmVwbGFjZUNsYXNzZXMiLCJhZGRDbGFzc2VzIiwicmVtb3ZlQ2xhc3NlcyIsIl9wZW5kaW5nQ2xhc3NlcyIsIl9jbGFzc2VzIiwiY29udGVudCIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJpbm5lckhUTUwiLCJwb3BwZXJJbnN0YW5jZSIsInVwZGF0ZSIsIm5lZWRQb3BwZXJVcGRhdGUiLCJuZWVkUmVzdGFydCIsImtleSIsImlzT3BlbiIsIl9pc09wZW4iLCJkaXNwb3NlIiwiZXZlbnRzIiwic3BsaXQiLCJmaWx0ZXIiLCJpbmRleE9mIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwicmVmZXJlbmNlIiwic2V0Q2xhc3NlcyIsInNob3ciLCJhcmdzIiwicmVzdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2V2ZW50cyIsImZvckVhY2giLCJmdW5jIiwiZXZlbnQiLCJkb2N1bWVudCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJfZGlzcG9zZVRpbWVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZ2V0Q29udGVudCIsInR5cGUiLCJjcmVhdGVUb29sdGlwIiwib3B0cyIsImh0bWwiLCJ0b29sdGlwIiwiX3Rvb2x0aXAiLCJfdnVlRWwiLCJkZXN0cm95VG9vbHRpcCIsImJpbmQiLCJvbGRWYWx1ZSIsInNldENvbnRlbnQiLCJzZXRPcHRpb25zIiwidW5iaW5kIiwiaW5zdGFsbCIsIlZ1ZSIsImluc3RhbGxlZCIsIk9iamVjdCIsImFzc2lnbiIsInZ0b29sdGlwIiwiVlRvb2x0aXAiLCJwbHVnaW4iLCJHbG9iYWxWdWUiLCJ3aW5kb3ciLCJnbG9iYWwiLCJ1c2UiLCJjb252ZXJ0VG9BcnJheSIsImNsYXNzTGlzdCIsImFkZCIsImMiLCJyZW1vdmUiLCJuZXdDbGFzc2VzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBC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WUMsT0FBT1IsR0FBbkI7QUFDRCxDQUZELE1BRU8sSUFBSSxPQUFPUyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ3hDRixjQUFZRSxPQUFPVCxHQUFuQjtBQUNEO0FBQ0QsSUFBSU8sU0FBSixFQUFlO0FBQ2JBLFlBQVVHLEdBQVYsQ0FBY0osTUFBZDtBQUNEOztBQUVELCtEQUFlQSxNQUFmLEU7Ozs7Ozs7Ozs7O0FDbkNBLFNBQVNLLGNBQVQsQ0FBeUI1RSxLQUF6QixFQUFnQztBQUM5QixNQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0JBLFlBQVFBLE1BQU00QixLQUFOLENBQVksR0FBWixDQUFSO0FBQ0Q7QUFDRCxTQUFPNUIsS0FBUDtBQUNEOztBQUVNLFNBQVNVLFVBQVQsQ0FBcUJMLEVBQXJCLEVBQXlCRCxPQUF6QixFQUFrQztBQUN2Q0EsWUFBVXdFLGVBQWV4RSxPQUFmLENBQVY7QUFDQUEsVUFBUXFDLE9BQVIsQ0FBZ0IsYUFBSztBQUNuQnBDLE9BQUd3RSxTQUFILENBQWFDLEdBQWIsQ0FBaUJDLENBQWpCO0FBQ0QsR0FGRDtBQUdEOztBQUVNLFNBQVNwRSxhQUFULENBQXdCTixFQUF4QixFQUE0QkQsT0FBNUIsRUFBcUM7QUFDMUNBLFlBQVV3RSxlQUFleEUsT0FBZixDQUFWO0FBQ0FBLFVBQVFxQyxPQUFSLENBQWdCLGFBQUs7QUFDbkJwQyxPQUFHd0UsU0FBSCxDQUFhRyxNQUFiLENBQW9CRCxDQUFwQjtBQUNELEdBRkQ7QUFHRDs7QUFFTSxTQUFTdEUsY0FBVCxDQUF5QkosRUFBekIsRUFBNkI0RSxVQUE3QixFQUF5QzFFLFVBQXpDLEVBQXFEO0FBQzFESSxnQkFBY04sRUFBZCxFQUFrQkUsVUFBbEI7QUFDQUcsYUFBV0wsRUFBWCxFQUFlNEUsVUFBZjtBQUNELEM7Ozs7OztBQ3pCRCx1QyIsImZpbGUiOiJ2LXRvb2x0aXAuY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MDZhNGY3N2MxOWRlNGRiZjMyNyIsImltcG9ydCBUb29sdGlwIGZyb20gJ3Rvb2x0aXAuanMnXG5cbmltcG9ydCB7IGFkZENsYXNzZXMsIHJlbW92ZUNsYXNzZXMsIHJlcGxhY2VDbGFzc2VzIH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGxldCBzdGF0ZSA9IHtcbiAgZW5hYmxlZDogdHJ1ZSxcbn1cblxuY29uc3QgcG9zaXRpb25zID0gW1xuICAndG9wJyxcbiAgJ3RvcC1zdGFydCcsXG4gICd0b3AtZW5kJyxcbiAgJ3JpZ2h0JyxcbiAgJ3JpZ2h0LXN0YXJ0JyxcbiAgJ3JpZ2h0LWVuZCcsXG4gICdib3R0b20nLFxuICAnYm90dG9tLXN0YXJ0JyxcbiAgJ2JvdHRvbS1lbmQnLFxuICAnbGVmdCcsXG4gICdsZWZ0LXN0YXJ0JyxcbiAgJ2xlZnQtZW5kJyxcbl1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAvLyBEZWZhdWx0IHRvb2x0aXAgcGxhY2VtZW50IHJlbGF0aXZlIHRvIHRhcmdldCBlbGVtZW50XG4gIGRlZmF1bHRQbGFjZW1lbnQ6ICd0b3AnLFxuICAvLyBEZWZhdWx0IENTUyBjbGFzc2VzIGFwcGxpZWQgdG8gdGhlIHRvb2x0aXAgZWxlbWVudFxuICBkZWZhdWx0Q2xhc3M6ICd2dWUtdG9vbHRpcC10aGVtZScsXG4gIC8vIERlZmF1bHQgSFRNTCB0ZW1wbGF0ZSBvZiB0aGUgdG9vbHRpcCBlbGVtZW50XG4gIC8vIEl0IG11c3QgaW5jbHVkZSBgdG9vbHRpcGAgJiBgdG9vbHRpcC1pbm5lcmAgQ1NTIGNsYXNzZXNcbiAgZGVmYXVsdFRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICAvLyBEZWxheSAobXMpXG4gIGRlZmF1bHREZWxheTogMCxcbiAgLy8gRGVmYXVsdCBldmVudHMgdGhhdCB0cmlnZ2VyIHRoZSB0b29sdGlwXG4gIGRlZmF1bHRUcmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICAvLyBEZWZhdWx0IHBvc2l0aW9uIG9mZnNldCAocHgpXG4gIGRlZmF1bHRPZmZzZXQ6IDAsXG4gIC8vIERlZmF1bHQgY29udGFpbmVyIHdoZXJlIHRoZSB0b29sdGlwIHdpbGwgYmUgYXBwZW5kZWRcbiAgZGVmYXVsdENvbnRhaW5lcjogJ2JvZHknLFxuICBkZWZhdWx0Qm91bmRhcmllc0VsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFBvcHBlck9wdGlvbnM6IHt9LFxuICBhdXRvSGlkZTogdHJ1ZSxcbiAgLy8gQXV0byBkZXN0cm95IHRvb2x0aXAgRE9NIG5vZGVzIChtcylcbiAgZGlzcG9zZVRpbWVvdXQ6IDUwMDAsXG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICBwbGFjZW1lbnQ6IG9wdGlvbnMucGxhY2VtZW50IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRQbGFjZW1lbnQsXG4gICAgZGVsYXk6IG9wdGlvbnMuZGVsYXkgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdERlbGF5LFxuICAgIHRlbXBsYXRlOiBvcHRpb25zLnRlbXBsYXRlIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRUZW1wbGF0ZSxcbiAgICB0cmlnZ2VyOiBvcHRpb25zLnRyaWdnZXIgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFRyaWdnZXIsXG4gICAgb2Zmc2V0OiBvcHRpb25zLm9mZnNldCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0T2Zmc2V0LFxuICAgIGNvbnRhaW5lcjogb3B0aW9ucy5jb250YWluZXIgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdENvbnRhaW5lcixcbiAgICBib3VuZGFyaWVzRWxlbWVudDogb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Qm91bmRhcmllc0VsZW1lbnQsXG4gICAgcG9wcGVyT3B0aW9uczogb3B0aW9ucy5wb3BwZXJPcHRpb25zIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRQb3BwZXJPcHRpb25zLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBsYWNlbWVudCAodmFsdWUsIG1vZGlmaWVycykge1xuICBsZXQgcGxhY2VtZW50ID0gdmFsdWUucGxhY2VtZW50XG4gIGZvciAoY29uc3QgcG9zIG9mIHBvc2l0aW9ucykge1xuICAgIGlmIChtb2RpZmllcnNbcG9zXSkge1xuICAgICAgcGxhY2VtZW50ID0gcG9zXG4gICAgfVxuICB9XG4gIHJldHVybiBwbGFjZW1lbnRcbn1cblxuY2xhc3MgU3VwZXJUb29sdGlwIGV4dGVuZHMgVG9vbHRpcCB7XG4gIHNldENsYXNzZXMgKGNsYXNzZXMpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX3Rvb2x0aXBOb2RlXG5cbiAgICBpZiAoZWwpIHtcbiAgICAgIGNvbnN0IG9sZENsYXNzZXMgPSB0aGlzLl9vbGRDbGFzc2VzXG4gICAgICBpZiAoY2xhc3Nlcykge1xuICAgICAgICBpZiAob2xkQ2xhc3Nlcykge1xuICAgICAgICAgIHJlcGxhY2VDbGFzc2VzKGVsLCBjbGFzc2VzLCBvbGRDbGFzc2VzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENsYXNzZXMoZWwsIGNsYXNzZXMpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob2xkQ2xhc3Nlcykge1xuICAgICAgICByZW1vdmVDbGFzc2VzKGVsLCBvbGRDbGFzc2VzKVxuICAgICAgfVxuICAgICAgdGhpcy5fb2xkQ2xhc3NlcyA9IGNsYXNzZXNcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGVuZGluZ0NsYXNzZXMgPSBjbGFzc2VzXG4gICAgfVxuXG4gICAgdGhpcy5fY2xhc3NlcyA9IGNsYXNzZXNcbiAgfVxuXG4gIHNldENvbnRlbnQgKGNvbnRlbnQpIHtcbiAgICB0aGlzLm9wdGlvbnMudGl0bGUgPSBjb250ZW50XG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX3Rvb2x0aXBOb2RlLnF1ZXJ5U2VsZWN0b3IodGhpcy5pbm5lclNlbGVjdG9yKVxuXG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gJydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBjb250ZW50XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0T3B0aW9ucyAob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBsZXQgbmVlZFBvcHBlclVwZGF0ZSA9IGZhbHNlXG4gICAgbGV0IG5lZWRSZXN0YXJ0ID0gZmFsc2VcblxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy5vZmZzZXQgIT09IG9wdGlvbnMub2Zmc2V0IHx8XG4gICAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50ICE9PSBvcHRpb25zLnBsYWNlbWVudFxuICAgICkge1xuICAgICAgbmVlZFBvcHBlclVwZGF0ZSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdGlvbnMudGVtcGxhdGUgIT09IG9wdGlvbnMudGVtcGxhdGUgfHxcbiAgICAgIHRoaXMub3B0aW9ucy50cmlnZ2VyICE9PSBvcHRpb25zLnRyaWdnZXIgfHxcbiAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIgIT09IG9wdGlvbnMuY29udGFpbmVyXG4gICAgKSB7XG4gICAgICBuZWVkUmVzdGFydCA9IHRydWVcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XVxuICAgIH1cblxuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xuICAgICAgaWYgKG5lZWRSZXN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IGlzT3BlbiA9IHRoaXMuX2lzT3BlblxuXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpXG5cbiAgICAgICAgY29uc3QgZXZlbnRzID0gdHlwZW9mIHRoaXMub3B0aW9ucy50cmlnZ2VyID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gb3B0aW9ucy50cmlnZ2VyXG4gICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgdHJpZ2dlciA9PiBbJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10uaW5kZXhPZih0cmlnZ2VyKSAhPT0gLTFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IFtdXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCBldmVudHMsIHRoaXMub3B0aW9ucylcblxuICAgICAgICB0aGlzLnNldENsYXNzZXModGhpcy5fY2xhc3NlcylcblxuICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5zaG93KClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChuZWVkUG9wcGVyVXBkYXRlKSB7XG4gICAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY3JlYXRlICguLi5hcmdzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2NyZWF0ZSguLi5hcmdzKVxuXG4gICAgaWYgKGRlZmF1bHRPcHRpb25zLmF1dG9IaWRlICYmIHRoaXMub3B0aW9ucy50cmlnZ2VyLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xKSB7XG4gICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGlkZSlcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBfZGlzcG9zZSAoKSB7XG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XG4gICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGUpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzLmZvckVhY2goKHsgZnVuYywgZXZlbnQgfSkgPT4ge1xuICAgICAgdGhpcy5yZWZlcmVuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuYylcbiAgICB9KVxuICAgIHRoaXMuX2V2ZW50cyA9IFtdXG4gICAgcmV0dXJuIHN1cGVyLl9kaXNwb3NlKClcbiAgfVxuXG4gIF9zaG93IChyZWZlcmVuY2UsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5jb250YWluZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyKVxuICAgICAgaWYgKCFjb250YWluZXIpIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9zaG93KHJlZmVyZW5jZSwgb3B0aW9ucylcblxuICAgIGlmICh0aGlzLl9wZW5kaW5nQ2xhc3Nlcykge1xuICAgICAgdGhpcy5zZXRDbGFzc2VzKHRoaXMuX3BlbmRpbmdDbGFzc2VzKVxuICAgICAgdGhpcy5fcGVuZGluZ0NsYXNzZXMgPSBudWxsXG4gICAgfVxuXG4gICAgLy8gRml4IHBvc2l0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXG4gICAgICB9XG4gICAgfSwgMClcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNwb3NlVGltZXIpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBfaGlkZSAoLi4uYXJncykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9oaWRlKC4uLmFyZ3MpXG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzcG9zZVRpbWVyKVxuICAgIHRoaXMuX2Rpc3Bvc2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhpZGUpXG4gICAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlKVxuICAgICAgICB0aGlzLl90b29sdGlwTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX3Rvb2x0aXBOb2RlKVxuICAgICAgICB0aGlzLl90b29sdGlwTm9kZSA9IG51bGxcbiAgICAgIH1cbiAgICB9LCBkZWZhdWx0T3B0aW9ucy5kaXNwb3NlVGltZW91dClcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb250ZW50ICh2YWx1ZSkge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlXG4gIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9IGVsc2UgaWYgKHZhbHVlICYmIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHZhbHVlLmNvbnRlbnRcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb29sdGlwIChlbCwgdmFsdWUsIG1vZGlmaWVycykge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCh2YWx1ZSlcbiAgbGV0IGNsYXNzZXMgPSB2YWx1ZS5jbGFzc2VzIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzc1xuICBjb25zdCBvcHRzID0ge1xuICAgIHRpdGxlOiBjb250ZW50LFxuICAgIGh0bWw6IHRydWUsXG4gICAgLi4uZ2V0T3B0aW9ucyh7XG4gICAgICAuLi52YWx1ZSxcbiAgICAgIHBsYWNlbWVudDogZ2V0UGxhY2VtZW50KHZhbHVlLCBtb2RpZmllcnMpLFxuICAgIH0pLFxuICB9XG4gIGNvbnN0IHRvb2x0aXAgPSBlbC5fdG9vbHRpcCA9IG5ldyBTdXBlclRvb2x0aXAoZWwsIG9wdHMpXG4gIHRvb2x0aXAuc2V0Q2xhc3NlcyhjbGFzc2VzKVxuICB0b29sdGlwLl92dWVFbCA9IGVsXG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lUb29sdGlwIChlbCkge1xuICBpZiAoZWwuX3Rvb2x0aXApIHtcbiAgICBlbC5fdG9vbHRpcC5kaXNwb3NlKClcbiAgICBkZWxldGUgZWwuX3Rvb2x0aXBcbiAgfVxufVxuXG5jb25zdCBkaXJlY3RpdmUgPSB7XG4gIG9wdGlvbnM6IGRlZmF1bHRPcHRpb25zLFxuICBiaW5kIChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzIH0pIHtcbiAgICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCh2YWx1ZSlcbiAgICBkZXN0cm95VG9vbHRpcChlbClcbiAgICBpZiAoY29udGVudCAmJiBzdGF0ZS5lbmFibGVkKSB7XG4gICAgICBjcmVhdGVUb29sdGlwKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKVxuICAgIH1cbiAgfSxcbiAgdXBkYXRlIChlbCwgeyB2YWx1ZSwgb2xkVmFsdWUsIG1vZGlmaWVycyB9KSB7XG4gICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQodmFsdWUpXG4gICAgaWYgKCFjb250ZW50IHx8ICFzdGF0ZS5lbmFibGVkKSB7XG4gICAgICBkZXN0cm95VG9vbHRpcChlbClcbiAgICB9IGVsc2UgaWYgKGVsLl90b29sdGlwKSB7XG4gICAgICBjb25zdCB0b29sdGlwID0gZWwuX3Rvb2x0aXBcbiAgICAgIC8vIENvbnRlbnRcbiAgICAgIHRvb2x0aXAuc2V0Q29udGVudChjb250ZW50KVxuICAgICAgLy8gQ1NTIENsYXNzZXNcbiAgICAgIHRvb2x0aXAuc2V0Q2xhc3NlcygodmFsdWUgJiYgdmFsdWUuY2xhc3NlcykgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdENsYXNzKVxuICAgICAgLy8gT3B0aW9uc1xuICAgICAgdG9vbHRpcC5zZXRPcHRpb25zKHtcbiAgICAgICAgLi4udmFsdWUsXG4gICAgICAgIHBsYWNlbWVudDogZ2V0UGxhY2VtZW50KHZhbHVlLCBtb2RpZmllcnMpLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcbiAgICB9XG4gIH0sXG4gIHVuYmluZCAoZWwpIHtcbiAgICBkZXN0cm95VG9vbHRpcChlbClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlyZWN0aXZlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdi10b29sdGlwLmpzIiwiaW1wb3J0IHZ0b29sdGlwLCB7IGRlZmF1bHRPcHRpb25zLCBzdGF0ZSB9IGZyb20gJy4vdi10b29sdGlwJ1xuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFsbCAoVnVlLCBvcHRpb25zKSB7XG4gIGlmIChpbnN0YWxsLmluc3RhbGxlZCkgcmV0dXJuXG4gIGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZVxuXG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyB8fCB7fSlcbiAgdnRvb2x0aXAub3B0aW9ucyA9IG9wdGlvbnNcbiAgVnVlLmRpcmVjdGl2ZSgndG9vbHRpcCcsIHZ0b29sdGlwKVxufVxuXG5leHBvcnQgY29uc3QgVlRvb2x0aXAgPSB2dG9vbHRpcFxuXG5jb25zdCBwbHVnaW4gPSB7XG4gIGluc3RhbGwsXG5cbiAgZ2V0IGVuYWJsZWQgKCkge1xuICAgIHJldHVybiBzdGF0ZS5lbmFibGVkXG4gIH0sXG5cbiAgc2V0IGVuYWJsZWQgKHZhbHVlKSB7XG4gICAgc3RhdGUuZW5hYmxlZCA9IHZhbHVlXG4gIH0sXG59XG5cbi8vIEF1dG8taW5zdGFsbFxubGV0IEdsb2JhbFZ1ZSA9IG51bGxcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBHbG9iYWxWdWUgPSB3aW5kb3cuVnVlXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIEdsb2JhbFZ1ZSA9IGdsb2JhbC5WdWVcbn1cbmlmIChHbG9iYWxWdWUpIHtcbiAgR2xvYmFsVnVlLnVzZShwbHVnaW4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiXG5mdW5jdGlvbiBjb252ZXJ0VG9BcnJheSAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJylcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzZXMgKGVsLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyAoZWwsIGNsYXNzZXMpIHtcbiAgY2xhc3NlcyA9IGNvbnZlcnRUb0FycmF5KGNsYXNzZXMpXG4gIGNsYXNzZXMuZm9yRWFjaChjID0+IHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2xhc3NlcyAoZWwsIG5ld0NsYXNzZXMsIG9sZENsYXNzZXMpIHtcbiAgcmVtb3ZlQ2xhc3NlcyhlbCwgb2xkQ2xhc3NlcylcbiAgYWRkQ2xhc3NlcyhlbCwgbmV3Q2xhc3Nlcylcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRvb2x0aXAuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ0b29sdGlwLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==