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
      var classesUpdated = false;
      var classes = options && options.classes || directive.options.defaultClass;
      if (this._classes !== classes) {
        this.setClasses(classes);
        classesUpdated = true;
      }

      options = getOptions(options);

      var needPopperUpdate = false;
      var needRestart = false;

      if (this.options.offset !== options.offset || this.options.placement !== options.placement) {
        needPopperUpdate = true;
      }

      if (this.options.template !== options.template || this.options.trigger !== options.trigger || this.options.container !== options.container || classesUpdated) {
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

      var updateClasses = true;
      if (this._tooltipNode) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addClasses */])(this._tooltipNode, this._classes);
        updateClasses = false;
      }

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var result = (_get3 = _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_show', this)).call.apply(_get3, [this].concat(args));

      if (updateClasses && this._tooltipNode) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addClasses */])(this._tooltipNode, this._classes);
      }

      // Fix position
      setTimeout(function () {
        _this3.popperInstance.update();
      }, 0);

      clearTimeout(this._disposeTimer);

      return result;
    }
  }, {
    key: '_hide',
    value: function _hide() {
      var _get4,
          _this4 = this;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var result = (_get4 = _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_hide', this)).call.apply(_get4, [this].concat(args));

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
/* harmony export (immutable) */ __webpack_exports__["a"] = addClasses;

function convertToArray(value) {
  if (typeof value === 'string') {
    value = value.split(' ');
  }
  return value;
}

/**
 * Add classes to an element.
 * This method checks to ensure that the classes don't already exist before adding them.
 * It uses el.className rather than classList in order to be IE friendly.
 * @param {object} el - The element to add the classes to.
 * @param {classes} string - List of space separated classes to be added to the element.
 */
function addClasses(el, classes) {
  var newClasses = convertToArray(classes);
  var classList = convertToArray(el.className);
  newClasses.forEach(function (newClass) {
    if (classList.indexOf(newClass) === -1) {
      classList.push(newClass);
    }
  });
  el.className = classList.join(' ');
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("tooltip.js");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzIwMDUzZjkyMzljMzYwOTRmODUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRvb2x0aXAuanNcIiJdLCJuYW1lcyI6WyJzdGF0ZSIsImVuYWJsZWQiLCJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50IiwidW5kZWZpbmVkIiwiZGVmYXVsdFBvcHBlck9wdGlvbnMiLCJhdXRvSGlkZSIsImRpc3Bvc2VUaW1lb3V0IiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJwbGFjZW1lbnQiLCJkaXJlY3RpdmUiLCJkZWxheSIsInRlbXBsYXRlIiwidHJpZ2dlciIsIm9mZnNldCIsImNvbnRhaW5lciIsImJvdW5kYXJpZXNFbGVtZW50IiwicG9wcGVyT3B0aW9ucyIsImdldFBsYWNlbWVudCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zIiwiU3VwZXJUb29sdGlwIiwiY2xhc3NlcyIsIl9jbGFzc2VzIiwiY29udGVudCIsInRpdGxlIiwiX3Rvb2x0aXBOb2RlIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJTZWxlY3RvciIsImlubmVySFRNTCIsInBvcHBlckluc3RhbmNlIiwidXBkYXRlIiwiY2xhc3Nlc1VwZGF0ZWQiLCJzZXRDbGFzc2VzIiwibmVlZFBvcHBlclVwZGF0ZSIsIm5lZWRSZXN0YXJ0Iiwia2V5IiwiaXNPcGVuIiwiX2lzT3BlbiIsImRpc3Bvc2UiLCJldmVudHMiLCJzcGxpdCIsImZpbHRlciIsImluZGV4T2YiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJyZWZlcmVuY2UiLCJzaG93IiwiYXJncyIsInJlc3VsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9ldmVudHMiLCJmb3JFYWNoIiwiZnVuYyIsImV2ZW50IiwidXBkYXRlQ2xhc3NlcyIsImFkZENsYXNzZXMiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiX2Rpc3Bvc2VUaW1lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldENvbnRlbnQiLCJ0eXBlIiwiY3JlYXRlVG9vbHRpcCIsIm9wdHMiLCJodG1sIiwidG9vbHRpcCIsIl90b29sdGlwIiwiX3Z1ZUVsIiwiZGVzdHJveVRvb2x0aXAiLCJiaW5kIiwib2xkVmFsdWUiLCJzZXRDb250ZW50Iiwic2V0T3B0aW9ucyIsInVuYmluZCIsImluc3RhbGwiLCJWdWUiLCJpbnN0YWxsZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ2dG9vbHRpcCIsIlZUb29sdGlwIiwicGx1Z2luIiwiR2xvYmFsVnVlIiwid2luZG93IiwiZ2xvYmFsIiwidXNlIiwiY29udmVydFRvQXJyYXkiLCJuZXdDbGFzc2VzIiwiY2xhc3NMaXN0IiwiY2xhc3NOYW1lIiwibmV3Q2xhc3MiLCJwdXNoIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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QU1xRSxhQUFhRCxlQUFlcEUsT0FBZixDQUFuQjtBQUNBLE1BQU1zRSxZQUFZRixlQUFlL0QsR0FBR2tFLFNBQWxCLENBQWxCO0FBQ0FGLGFBQVdyQyxPQUFYLENBQW1CLFVBQUN3QyxRQUFELEVBQWM7QUFDL0IsUUFBSUYsVUFBVWhELE9BQVYsQ0FBa0JrRCxRQUFsQixNQUFnQyxDQUFDLENBQXJDLEVBQXdDO0FBQ3RDRixnQkFBVUcsSUFBVixDQUFlRCxRQUFmO0FBQ0Q7QUFDRixHQUpEO0FBS0FuRSxLQUFHa0UsU0FBSCxHQUFlRCxVQUFVSSxJQUFWLENBQWUsR0FBZixDQUFmO0FBQ0QsQzs7Ozs7O0FDeEJELHVDIiwiZmlsZSI6InYtdG9vbHRpcC5jb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDcyMDA1M2Y5MjM5YzM2MDk0Zjg1IiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAndG9vbHRpcC5qcydcblxuaW1wb3J0IHsgYWRkQ2xhc3NlcyB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBsZXQgc3RhdGUgPSB7XG4gIGVuYWJsZWQ6IHRydWUsXG59XG5cbmNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgJ3RvcCcsXG4gICd0b3Atc3RhcnQnLFxuICAndG9wLWVuZCcsXG4gICdyaWdodCcsXG4gICdyaWdodC1zdGFydCcsXG4gICdyaWdodC1lbmQnLFxuICAnYm90dG9tJyxcbiAgJ2JvdHRvbS1zdGFydCcsXG4gICdib3R0b20tZW5kJyxcbiAgJ2xlZnQnLFxuICAnbGVmdC1zdGFydCcsXG4gICdsZWZ0LWVuZCcsXG5dXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgLy8gRGVmYXVsdCB0b29sdGlwIHBsYWNlbWVudCByZWxhdGl2ZSB0byB0YXJnZXQgZWxlbWVudFxuICBkZWZhdWx0UGxhY2VtZW50OiAndG9wJyxcbiAgLy8gRGVmYXVsdCBDU1MgY2xhc3NlcyBhcHBsaWVkIHRvIHRoZSB0b29sdGlwIGVsZW1lbnRcbiAgZGVmYXVsdENsYXNzOiAndnVlLXRvb2x0aXAtdGhlbWUnLFxuICAvLyBEZWZhdWx0IEhUTUwgdGVtcGxhdGUgb2YgdGhlIHRvb2x0aXAgZWxlbWVudFxuICAvLyBJdCBtdXN0IGluY2x1ZGUgYHRvb2x0aXBgICYgYHRvb2x0aXAtaW5uZXJgIENTUyBjbGFzc2VzXG4gIGRlZmF1bHRUZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgLy8gRGVsYXkgKG1zKVxuICBkZWZhdWx0RGVsYXk6IDAsXG4gIC8vIERlZmF1bHQgZXZlbnRzIHRoYXQgdHJpZ2dlciB0aGUgdG9vbHRpcFxuICBkZWZhdWx0VHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgLy8gRGVmYXVsdCBwb3NpdGlvbiBvZmZzZXQgKHB4KVxuICBkZWZhdWx0T2Zmc2V0OiAwLFxuICAvLyBEZWZhdWx0IGNvbnRhaW5lciB3aGVyZSB0aGUgdG9vbHRpcCB3aWxsIGJlIGFwcGVuZGVkXG4gIGRlZmF1bHRDb250YWluZXI6ICdib2R5JyxcbiAgZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50OiB1bmRlZmluZWQsXG4gIGRlZmF1bHRQb3BwZXJPcHRpb25zOiB7fSxcbiAgYXV0b0hpZGU6IHRydWUsXG4gIC8vIEF1dG8gZGVzdHJveSB0b29sdGlwIERPTSBub2RlcyAobXMpXG4gIGRpc3Bvc2VUaW1lb3V0OiA1MDAwLFxufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zIChvcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgcGxhY2VtZW50OiBvcHRpb25zLnBsYWNlbWVudCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0UGxhY2VtZW50LFxuICAgIGRlbGF5OiBvcHRpb25zLmRlbGF5IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHREZWxheSxcbiAgICB0ZW1wbGF0ZTogb3B0aW9ucy50ZW1wbGF0ZSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0VGVtcGxhdGUsXG4gICAgdHJpZ2dlcjogb3B0aW9ucy50cmlnZ2VyIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRUcmlnZ2VyLFxuICAgIG9mZnNldDogb3B0aW9ucy5vZmZzZXQgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdE9mZnNldCxcbiAgICBjb250YWluZXI6IG9wdGlvbnMuY29udGFpbmVyIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDb250YWluZXIsXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6IG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50LFxuICAgIHBvcHBlck9wdGlvbnM6IG9wdGlvbnMucG9wcGVyT3B0aW9ucyB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0UG9wcGVyT3B0aW9ucyxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnQgKHZhbHVlLCBtb2RpZmllcnMpIHtcbiAgbGV0IHBsYWNlbWVudCA9IHZhbHVlLnBsYWNlbWVudFxuICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHtcbiAgICBpZiAobW9kaWZpZXJzW3Bvc10pIHtcbiAgICAgIHBsYWNlbWVudCA9IHBvc1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGxhY2VtZW50XG59XG5cbmNsYXNzIFN1cGVyVG9vbHRpcCBleHRlbmRzIFRvb2x0aXAge1xuICBzZXRDbGFzc2VzIChjbGFzc2VzKSB7XG4gICAgdGhpcy5fY2xhc3NlcyA9IGNsYXNzZXNcbiAgfVxuXG4gIHNldENvbnRlbnQgKGNvbnRlbnQpIHtcbiAgICB0aGlzLm9wdGlvbnMudGl0bGUgPSBjb250ZW50XG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX3Rvb2x0aXBOb2RlLnF1ZXJ5U2VsZWN0b3IodGhpcy5pbm5lclNlbGVjdG9yKVxuXG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gJydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBjb250ZW50XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0T3B0aW9ucyAob3B0aW9ucykge1xuICAgIGxldCBjbGFzc2VzVXBkYXRlZCA9IGZhbHNlXG4gICAgY29uc3QgY2xhc3NlcyA9IChvcHRpb25zICYmIG9wdGlvbnMuY2xhc3NlcykgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdENsYXNzXG4gICAgaWYgKHRoaXMuX2NsYXNzZXMgIT09IGNsYXNzZXMpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NlcyhjbGFzc2VzKVxuICAgICAgY2xhc3Nlc1VwZGF0ZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucylcblxuICAgIGxldCBuZWVkUG9wcGVyVXBkYXRlID0gZmFsc2VcbiAgICBsZXQgbmVlZFJlc3RhcnQgPSBmYWxzZVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLm9mZnNldCAhPT0gb3B0aW9ucy5vZmZzZXQgfHxcbiAgICAgIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQgIT09IG9wdGlvbnMucGxhY2VtZW50XG4gICAgKSB7XG4gICAgICBuZWVkUG9wcGVyVXBkYXRlID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy50ZW1wbGF0ZSAhPT0gb3B0aW9ucy50ZW1wbGF0ZSB8fFxuICAgICAgdGhpcy5vcHRpb25zLnRyaWdnZXIgIT09IG9wdGlvbnMudHJpZ2dlciB8fFxuICAgICAgdGhpcy5vcHRpb25zLmNvbnRhaW5lciAhPT0gb3B0aW9ucy5jb250YWluZXIgfHxcbiAgICAgIGNsYXNzZXNVcGRhdGVkXG4gICAgKSB7XG4gICAgICBuZWVkUmVzdGFydCA9IHRydWVcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XVxuICAgIH1cblxuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xuICAgICAgaWYgKG5lZWRSZXN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IGlzT3BlbiA9IHRoaXMuX2lzT3BlblxuXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpXG5cbiAgICAgICAgY29uc3QgZXZlbnRzID0gdHlwZW9mIHRoaXMub3B0aW9ucy50cmlnZ2VyID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gb3B0aW9ucy50cmlnZ2VyXG4gICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgdHJpZ2dlciA9PiBbJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10uaW5kZXhPZih0cmlnZ2VyKSAhPT0gLTFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IFtdXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCBldmVudHMsIHRoaXMub3B0aW9ucylcblxuICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5zaG93KClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChuZWVkUG9wcGVyVXBkYXRlKSB7XG4gICAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY3JlYXRlICguLi5hcmdzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2NyZWF0ZSguLi5hcmdzKVxuXG4gICAgaWYgKGRlZmF1bHRPcHRpb25zLmF1dG9IaWRlICYmIHRoaXMub3B0aW9ucy50cmlnZ2VyLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xKSB7XG4gICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGlkZSlcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBfZGlzcG9zZSAoKSB7XG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XG4gICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGUpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzLmZvckVhY2goKHsgZnVuYywgZXZlbnQgfSkgPT4ge1xuICAgICAgdGhpcy5yZWZlcmVuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuYylcbiAgICB9KVxuICAgIHRoaXMuX2V2ZW50cyA9IFtdXG4gICAgcmV0dXJuIHN1cGVyLl9kaXNwb3NlKClcbiAgfVxuXG4gIF9zaG93ICguLi5hcmdzKSB7XG4gICAgbGV0IHVwZGF0ZUNsYXNzZXMgPSB0cnVlXG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XG4gICAgICBhZGRDbGFzc2VzKHRoaXMuX3Rvb2x0aXBOb2RlLCB0aGlzLl9jbGFzc2VzKVxuICAgICAgdXBkYXRlQ2xhc3NlcyA9IGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX3Nob3coLi4uYXJncylcblxuICAgIGlmICh1cGRhdGVDbGFzc2VzICYmIHRoaXMuX3Rvb2x0aXBOb2RlKSB7XG4gICAgICBhZGRDbGFzc2VzKHRoaXMuX3Rvb2x0aXBOb2RlLCB0aGlzLl9jbGFzc2VzKVxuICAgIH1cblxuICAgIC8vIEZpeCBwb3NpdGlvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxuICAgIH0sIDApXG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzcG9zZVRpbWVyKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgX2hpZGUgKC4uLmFyZ3MpIHtcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5faGlkZSguLi5hcmdzKVxuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc3Bvc2VUaW1lcilcbiAgICB0aGlzLl9kaXNwb3NlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xuICAgICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxuICAgICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSlcbiAgICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl90b29sdGlwTm9kZSlcbiAgICAgICAgdGhpcy5fdG9vbHRpcE5vZGUgPSBudWxsXG4gICAgICB9XG4gICAgfSwgZGVmYXVsdE9wdGlvbnMuZGlzcG9zZVRpbWVvdXQpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29udGVudCAodmFsdWUpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZVxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB2YWx1ZS5jb250ZW50XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9vbHRpcCAoZWwsIHZhbHVlLCBtb2RpZmllcnMpIHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQodmFsdWUpXG4gIGxldCBjbGFzc2VzID0gdmFsdWUuY2xhc3NlcyB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q2xhc3NcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICB0aXRsZTogY29udGVudCxcbiAgICBodG1sOiB0cnVlLFxuICAgIC4uLmdldE9wdGlvbnMoe1xuICAgICAgLi4udmFsdWUsXG4gICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcbiAgICB9KSxcbiAgfVxuICBjb25zdCB0b29sdGlwID0gZWwuX3Rvb2x0aXAgPSBuZXcgU3VwZXJUb29sdGlwKGVsLCBvcHRzKVxuICB0b29sdGlwLnNldENsYXNzZXMoY2xhc3NlcylcbiAgdG9vbHRpcC5fdnVlRWwgPSBlbFxufVxuXG5mdW5jdGlvbiBkZXN0cm95VG9vbHRpcCAoZWwpIHtcbiAgaWYgKGVsLl90b29sdGlwKSB7XG4gICAgZWwuX3Rvb2x0aXAuZGlzcG9zZSgpXG4gICAgZGVsZXRlIGVsLl90b29sdGlwXG4gIH1cbn1cblxuY29uc3QgZGlyZWN0aXZlID0ge1xuICBvcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcbiAgYmluZCAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycyB9KSB7XG4gICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQodmFsdWUpXG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gICAgaWYgKGNvbnRlbnQgJiYgc3RhdGUuZW5hYmxlZCkge1xuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZSAoZWwsIHsgdmFsdWUsIG9sZFZhbHVlLCBtb2RpZmllcnMgfSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KHZhbHVlKVxuICAgIGlmICghY29udGVudCB8fCAhc3RhdGUuZW5hYmxlZCkge1xuICAgICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gICAgfSBlbHNlIGlmIChlbC5fdG9vbHRpcCkge1xuICAgICAgY29uc3QgdG9vbHRpcCA9IGVsLl90b29sdGlwXG4gICAgICAvLyBDb250ZW50XG4gICAgICB0b29sdGlwLnNldENvbnRlbnQoY29udGVudClcbiAgICAgIC8vIE9wdGlvbnNcbiAgICAgIHRvb2x0aXAuc2V0T3B0aW9ucyh7XG4gICAgICAgIC4uLnZhbHVlLFxuICAgICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVRvb2x0aXAoZWwsIHZhbHVlLCBtb2RpZmllcnMpXG4gICAgfVxuICB9LFxuICB1bmJpbmQgKGVsKSB7XG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpcmVjdGl2ZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3YtdG9vbHRpcC5qcyIsImltcG9ydCB2dG9vbHRpcCwgeyBkZWZhdWx0T3B0aW9ucywgc3RhdGUgfSBmcm9tICcuL3YtdG9vbHRpcCdcblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xuICBpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHJldHVyblxuICBpbnN0YWxsLmluc3RhbGxlZCA9IHRydWVcblxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgfHwge30pXG4gIHZ0b29sdGlwLm9wdGlvbnMgPSBvcHRpb25zXG4gIFZ1ZS5kaXJlY3RpdmUoJ3Rvb2x0aXAnLCB2dG9vbHRpcClcbn1cblxuZXhwb3J0IGNvbnN0IFZUb29sdGlwID0gdnRvb2x0aXBcblxuY29uc3QgcGx1Z2luID0ge1xuICBpbnN0YWxsLFxuXG4gIGdldCBlbmFibGVkICgpIHtcbiAgICByZXR1cm4gc3RhdGUuZW5hYmxlZFxuICB9LFxuXG4gIHNldCBlbmFibGVkICh2YWx1ZSkge1xuICAgIHN0YXRlLmVuYWJsZWQgPSB2YWx1ZVxuICB9LFxufVxuXG4vLyBBdXRvLWluc3RhbGxcbmxldCBHbG9iYWxWdWUgPSBudWxsXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgR2xvYmFsVnVlID0gd2luZG93LlZ1ZVxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICBHbG9iYWxWdWUgPSBnbG9iYWwuVnVlXG59XG5pZiAoR2xvYmFsVnVlKSB7XG4gIEdsb2JhbFZ1ZS51c2UocGx1Z2luKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIlxuZnVuY3Rpb24gY29udmVydFRvQXJyYXkgKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogQWRkIGNsYXNzZXMgdG8gYW4gZWxlbWVudC5cbiAqIFRoaXMgbWV0aG9kIGNoZWNrcyB0byBlbnN1cmUgdGhhdCB0aGUgY2xhc3NlcyBkb24ndCBhbHJlYWR5IGV4aXN0IGJlZm9yZSBhZGRpbmcgdGhlbS5cbiAqIEl0IHVzZXMgZWwuY2xhc3NOYW1lIHJhdGhlciB0aGFuIGNsYXNzTGlzdCBpbiBvcmRlciB0byBiZSBJRSBmcmllbmRseS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBlbCAtIFRoZSBlbGVtZW50IHRvIGFkZCB0aGUgY2xhc3NlcyB0by5cbiAqIEBwYXJhbSB7Y2xhc3Nlc30gc3RyaW5nIC0gTGlzdCBvZiBzcGFjZSBzZXBhcmF0ZWQgY2xhc3NlcyB0byBiZSBhZGRlZCB0byB0aGUgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzZXMgKGVsLCBjbGFzc2VzKSB7XG4gIGNvbnN0IG5ld0NsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxuICBjb25zdCBjbGFzc0xpc3QgPSBjb252ZXJ0VG9BcnJheShlbC5jbGFzc05hbWUpXG4gIG5ld0NsYXNzZXMuZm9yRWFjaCgobmV3Q2xhc3MpID0+IHtcbiAgICBpZiAoY2xhc3NMaXN0LmluZGV4T2YobmV3Q2xhc3MpID09PSAtMSkge1xuICAgICAgY2xhc3NMaXN0LnB1c2gobmV3Q2xhc3MpXG4gICAgfVxuICB9KVxuICBlbC5jbGFzc05hbWUgPSBjbGFzc0xpc3Quam9pbignICcpXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRvb2x0aXAuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ0b29sdGlwLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==