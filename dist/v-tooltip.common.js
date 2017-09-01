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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjE5NzY4NjI5OGJhODQxZjUwZjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRvb2x0aXAuanNcIiJdLCJuYW1lcyI6WyJzdGF0ZSIsImVuYWJsZWQiLCJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50IiwidW5kZWZpbmVkIiwiZGVmYXVsdFBvcHBlck9wdGlvbnMiLCJhdXRvSGlkZSIsImRpc3Bvc2VUaW1lb3V0IiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJwbGFjZW1lbnQiLCJkaXJlY3RpdmUiLCJkZWxheSIsInRlbXBsYXRlIiwidHJpZ2dlciIsIm9mZnNldCIsImNvbnRhaW5lciIsImJvdW5kYXJpZXNFbGVtZW50IiwicG9wcGVyT3B0aW9ucyIsImdldFBsYWNlbWVudCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zIiwiU3VwZXJUb29sdGlwIiwiY2xhc3NlcyIsImVsIiwiX3Rvb2x0aXBOb2RlIiwib2xkQ2xhc3NlcyIsIl9vbGRDbGFzc2VzIiwicmVwbGFjZUNsYXNzZXMiLCJhZGRDbGFzc2VzIiwicmVtb3ZlQ2xhc3NlcyIsIl9wZW5kaW5nQ2xhc3NlcyIsIl9jbGFzc2VzIiwiY29udGVudCIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJpbm5lckhUTUwiLCJwb3BwZXJJbnN0YW5jZSIsInVwZGF0ZSIsIm5lZWRQb3BwZXJVcGRhdGUiLCJuZWVkUmVzdGFydCIsImtleSIsImlzT3BlbiIsIl9pc09wZW4iLCJkaXNwb3NlIiwiZXZlbnRzIiwic3BsaXQiLCJmaWx0ZXIiLCJpbmRleE9mIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwicmVmZXJlbmNlIiwic2V0Q2xhc3NlcyIsInNob3ciLCJhcmdzIiwicmVzdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2V2ZW50cyIsImZvckVhY2giLCJmdW5jIiwiZXZlbnQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiX2Rpc3Bvc2VUaW1lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldENvbnRlbnQiLCJ0eXBlIiwiY3JlYXRlVG9vbHRpcCIsIm9wdHMiLCJodG1sIiwidG9vbHRpcCIsIl90b29sdGlwIiwiX3Z1ZUVsIiwiZGVzdHJveVRvb2x0aXAiLCJiaW5kIiwib2xkVmFsdWUiLCJzZXRDb250ZW50Iiwic2V0T3B0aW9ucyIsInVuYmluZCIsImluc3RhbGwiLCJWdWUiLCJpbnN0YWxsZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ2dG9vbHRpcCIsIlZUb29sdGlwIiwicGx1Z2luIiwiR2xvYmFsVnVlIiwid2luZG93IiwiZ2xvYmFsIiwidXNlIiwiY29udmVydFRvQXJyYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjIiwicmVtb3ZlIiwibmV3Q2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZE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Q0EsU0FBU0ssY0FBVCxDQUF5QjNFLEtBQXpCLEVBQWdDO0FBQzlCLE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QkEsWUFBUUEsTUFBTTRCLEtBQU4sQ0FBWSxHQUFaLENBQVI7QUFDRDtBQUNELFNBQU81QixLQUFQO0FBQ0Q7O0FBRU0sU0FBU1UsVUFBVCxDQUFxQkwsRUFBckIsRUFBeUJELE9BQXpCLEVBQWtDO0FBQ3ZDQSxZQUFVdUUsZUFBZXZFLE9BQWYsQ0FBVjtBQUNBQSxVQUFRcUMsT0FBUixDQUFnQixhQUFLO0FBQ25CcEMsT0FBR3VFLFNBQUgsQ0FBYUMsR0FBYixDQUFpQkMsQ0FBakI7QUFDRCxHQUZEO0FBR0Q7O0FBRU0sU0FBU25FLGFBQVQsQ0FBd0JOLEVBQXhCLEVBQTRCRCxPQUE1QixFQUFxQztBQUMxQ0EsWUFBVXVFLGVBQWV2RSxPQUFmLENBQVY7QUFDQUEsVUFBUXFDLE9BQVIsQ0FBZ0IsYUFBSztBQUNuQnBDLE9BQUd1RSxTQUFILENBQWFHLE1BQWIsQ0FBb0JELENBQXBCO0FBQ0QsR0FGRDtBQUdEOztBQUVNLFNBQVNyRSxjQUFULENBQXlCSixFQUF6QixFQUE2QjJFLFVBQTdCLEVBQXlDekUsVUFBekMsRUFBcUQ7QUFDMURJLGdCQUFjTixFQUFkLEVBQWtCRSxVQUFsQjtBQUNBRyxhQUFXTCxFQUFYLEVBQWUyRSxVQUFmO0FBQ0QsQzs7Ozs7O0FDekJELHVDIiwiZmlsZSI6InYtdG9vbHRpcC5jb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIxOTc2ODYyOThiYTg0MWY1MGY4IiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAndG9vbHRpcC5qcydcclxuXHJcbmltcG9ydCB7IGFkZENsYXNzZXMsIHJlbW92ZUNsYXNzZXMsIHJlcGxhY2VDbGFzc2VzIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBsZXQgc3RhdGUgPSB7XHJcbiAgZW5hYmxlZDogdHJ1ZSxcclxufVxyXG5cclxuY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICd0b3AnLFxyXG4gICd0b3Atc3RhcnQnLFxyXG4gICd0b3AtZW5kJyxcclxuICAncmlnaHQnLFxyXG4gICdyaWdodC1zdGFydCcsXHJcbiAgJ3JpZ2h0LWVuZCcsXHJcbiAgJ2JvdHRvbScsXHJcbiAgJ2JvdHRvbS1zdGFydCcsXHJcbiAgJ2JvdHRvbS1lbmQnLFxyXG4gICdsZWZ0JyxcclxuICAnbGVmdC1zdGFydCcsXHJcbiAgJ2xlZnQtZW5kJyxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIC8vIERlZmF1bHQgdG9vbHRpcCBwbGFjZW1lbnQgcmVsYXRpdmUgdG8gdGFyZ2V0IGVsZW1lbnRcclxuICBkZWZhdWx0UGxhY2VtZW50OiAndG9wJyxcclxuICAvLyBEZWZhdWx0IENTUyBjbGFzc2VzIGFwcGxpZWQgdG8gdGhlIHRvb2x0aXAgZWxlbWVudFxyXG4gIGRlZmF1bHRDbGFzczogJ3Z1ZS10b29sdGlwLXRoZW1lJyxcclxuICAvLyBEZWZhdWx0IEhUTUwgdGVtcGxhdGUgb2YgdGhlIHRvb2x0aXAgZWxlbWVudFxyXG4gIC8vIEl0IG11c3QgaW5jbHVkZSBgdG9vbHRpcGAgJiBgdG9vbHRpcC1pbm5lcmAgQ1NTIGNsYXNzZXNcclxuICBkZWZhdWx0VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXHJcbiAgLy8gRGVsYXkgKG1zKVxyXG4gIGRlZmF1bHREZWxheTogMCxcclxuICAvLyBEZWZhdWx0IGV2ZW50cyB0aGF0IHRyaWdnZXIgdGhlIHRvb2x0aXBcclxuICBkZWZhdWx0VHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcclxuICAvLyBEZWZhdWx0IHBvc2l0aW9uIG9mZnNldCAocHgpXHJcbiAgZGVmYXVsdE9mZnNldDogMCxcclxuICAvLyBEZWZhdWx0IGNvbnRhaW5lciB3aGVyZSB0aGUgdG9vbHRpcCB3aWxsIGJlIGFwcGVuZGVkXHJcbiAgZGVmYXVsdENvbnRhaW5lcjogJ2JvZHknLFxyXG4gIGRlZmF1bHRCb3VuZGFyaWVzRWxlbWVudDogdW5kZWZpbmVkLFxyXG4gIGRlZmF1bHRQb3BwZXJPcHRpb25zOiB7fSxcclxuICBhdXRvSGlkZTogdHJ1ZSxcclxuICAvLyBBdXRvIGRlc3Ryb3kgdG9vbHRpcCBET00gbm9kZXMgKG1zKVxyXG4gIGRpc3Bvc2VUaW1lb3V0OiA1MDAwLFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPcHRpb25zIChvcHRpb25zKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBsYWNlbWVudDogb3B0aW9ucy5wbGFjZW1lbnQgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFBsYWNlbWVudCxcclxuICAgIGRlbGF5OiBvcHRpb25zLmRlbGF5IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHREZWxheSxcclxuICAgIHRlbXBsYXRlOiBvcHRpb25zLnRlbXBsYXRlIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRUZW1wbGF0ZSxcclxuICAgIHRyaWdnZXI6IG9wdGlvbnMudHJpZ2dlciB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0VHJpZ2dlcixcclxuICAgIG9mZnNldDogb3B0aW9ucy5vZmZzZXQgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdE9mZnNldCxcclxuICAgIGNvbnRhaW5lcjogb3B0aW9ucy5jb250YWluZXIgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdENvbnRhaW5lcixcclxuICAgIGJvdW5kYXJpZXNFbGVtZW50OiBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRCb3VuZGFyaWVzRWxlbWVudCxcclxuICAgIHBvcHBlck9wdGlvbnM6IG9wdGlvbnMucG9wcGVyT3B0aW9ucyB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0UG9wcGVyT3B0aW9ucyxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBsYWNlbWVudCAodmFsdWUsIG1vZGlmaWVycykge1xyXG4gIGxldCBwbGFjZW1lbnQgPSB2YWx1ZS5wbGFjZW1lbnRcclxuICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHtcclxuICAgIGlmIChtb2RpZmllcnNbcG9zXSkge1xyXG4gICAgICBwbGFjZW1lbnQgPSBwb3NcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBsYWNlbWVudFxyXG59XHJcblxyXG5jbGFzcyBTdXBlclRvb2x0aXAgZXh0ZW5kcyBUb29sdGlwIHtcclxuICBzZXRDbGFzc2VzIChjbGFzc2VzKSB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuX3Rvb2x0aXBOb2RlXHJcblxyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIGNvbnN0IG9sZENsYXNzZXMgPSB0aGlzLl9vbGRDbGFzc2VzXHJcbiAgICAgIGlmIChjbGFzc2VzKSB7XHJcbiAgICAgICAgaWYgKG9sZENsYXNzZXMpIHtcclxuICAgICAgICAgIHJlcGxhY2VDbGFzc2VzKGVsLCBjbGFzc2VzLCBvbGRDbGFzc2VzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhZGRDbGFzc2VzKGVsLCBjbGFzc2VzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChvbGRDbGFzc2VzKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2xhc3NlcyhlbCwgb2xkQ2xhc3NlcylcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9vbGRDbGFzc2VzID0gY2xhc3Nlc1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcGVuZGluZ0NsYXNzZXMgPSBjbGFzc2VzXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY2xhc3NlcyA9IGNsYXNzZXNcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQgKGNvbnRlbnQpIHtcclxuICAgIHRoaXMub3B0aW9ucy50aXRsZSA9IGNvbnRlbnRcclxuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuX3Rvb2x0aXBOb2RlLnF1ZXJ5U2VsZWN0b3IodGhpcy5pbm5lclNlbGVjdG9yKVxyXG5cclxuICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBjb250ZW50XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnMgKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMpXHJcblxyXG4gICAgbGV0IG5lZWRQb3BwZXJVcGRhdGUgPSBmYWxzZVxyXG4gICAgbGV0IG5lZWRSZXN0YXJ0ID0gZmFsc2VcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMub3B0aW9ucy5vZmZzZXQgIT09IG9wdGlvbnMub2Zmc2V0IHx8XHJcbiAgICAgIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQgIT09IG9wdGlvbnMucGxhY2VtZW50XHJcbiAgICApIHtcclxuICAgICAgbmVlZFBvcHBlclVwZGF0ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMub3B0aW9ucy50ZW1wbGF0ZSAhPT0gb3B0aW9ucy50ZW1wbGF0ZSB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMudHJpZ2dlciAhPT0gb3B0aW9ucy50cmlnZ2VyIHx8XHJcbiAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIgIT09IG9wdGlvbnMuY29udGFpbmVyXHJcbiAgICApIHtcclxuICAgICAgbmVlZFJlc3RhcnQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xyXG4gICAgICB0aGlzLm9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xyXG4gICAgICBpZiAobmVlZFJlc3RhcnQpIHtcclxuICAgICAgICBjb25zdCBpc09wZW4gPSB0aGlzLl9pc09wZW5cclxuXHJcbiAgICAgICAgdGhpcy5kaXNwb3NlKClcclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdHlwZW9mIHRoaXMub3B0aW9ucy50cmlnZ2VyID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgPyBvcHRpb25zLnRyaWdnZXJcclxuICAgICAgICAgICAgLnNwbGl0KCcgJylcclxuICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICB0cmlnZ2VyID0+IFsnY2xpY2snLCAnaG92ZXInLCAnZm9jdXMnXS5pbmRleE9mKHRyaWdnZXIpICE9PSAtMVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICA6IFtdXHJcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIGV2ZW50cywgdGhpcy5vcHRpb25zKVxyXG5cclxuICAgICAgICB0aGlzLnNldENsYXNzZXModGhpcy5fY2xhc3NlcylcclxuXHJcbiAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgdGhpcy5zaG93KClcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAobmVlZFBvcHBlclVwZGF0ZSkge1xyXG4gICAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZSAoLi4uYXJncykge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2NyZWF0ZSguLi5hcmdzKVxyXG5cclxuICAgIGlmIChkZWZhdWx0T3B0aW9ucy5hdXRvSGlkZSAmJiB0aGlzLm9wdGlvbnMudHJpZ2dlci5pbmRleE9mKCdob3ZlcicpICE9PSAtMSkge1xyXG4gICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGlkZSlcclxuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIF9kaXNwb3NlICgpIHtcclxuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xyXG4gICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxyXG4gICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9ldmVudHMuZm9yRWFjaCgoeyBmdW5jLCBldmVudCB9KSA9PiB7XHJcbiAgICAgIHRoaXMucmVmZXJlbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5fZXZlbnRzID0gW11cclxuICAgIHJldHVybiBzdXBlci5fZGlzcG9zZSgpXHJcbiAgfVxyXG5cclxuICBfc2hvdyAoLi4uYXJncykge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX3Nob3coLi4uYXJncylcclxuXHJcbiAgICBpZiAodGhpcy5fcGVuZGluZ0NsYXNzZXMpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc2VzKHRoaXMuX3BlbmRpbmdDbGFzc2VzKVxyXG4gICAgICB0aGlzLl9wZW5kaW5nQ2xhc3NlcyA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaXggcG9zaXRpb25cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXHJcbiAgICB9LCAwKVxyXG5cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNwb3NlVGltZXIpXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgX2hpZGUgKC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9oaWRlKC4uLmFyZ3MpXHJcblxyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc3Bvc2VUaW1lcilcclxuICAgIHRoaXMuX2Rpc3Bvc2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcclxuICAgICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxyXG4gICAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlKVxyXG4gICAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fdG9vbHRpcE5vZGUpXHJcbiAgICAgICAgdGhpcy5fdG9vbHRpcE5vZGUgPSBudWxsXHJcbiAgICAgIH1cclxuICAgIH0sIGRlZmF1bHRPcHRpb25zLmRpc3Bvc2VUaW1lb3V0KVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbnRlbnQgKHZhbHVlKSB7XHJcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZVxyXG4gIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIHZhbHVlXHJcbiAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIHZhbHVlLmNvbnRlbnRcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb29sdGlwIChlbCwgdmFsdWUsIG1vZGlmaWVycykge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KHZhbHVlKVxyXG4gIGxldCBjbGFzc2VzID0gdmFsdWUuY2xhc3NlcyB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q2xhc3NcclxuICBjb25zdCBvcHRzID0ge1xyXG4gICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICBodG1sOiB0cnVlLFxyXG4gICAgLi4uZ2V0T3B0aW9ucyh7XHJcbiAgICAgIC4uLnZhbHVlLFxyXG4gICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcclxuICAgIH0pLFxyXG4gIH1cclxuICBjb25zdCB0b29sdGlwID0gZWwuX3Rvb2x0aXAgPSBuZXcgU3VwZXJUb29sdGlwKGVsLCBvcHRzKVxyXG4gIHRvb2x0aXAuc2V0Q2xhc3NlcyhjbGFzc2VzKVxyXG4gIHRvb2x0aXAuX3Z1ZUVsID0gZWxcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzdHJveVRvb2x0aXAgKGVsKSB7XHJcbiAgaWYgKGVsLl90b29sdGlwKSB7XHJcbiAgICBlbC5fdG9vbHRpcC5kaXNwb3NlKClcclxuICAgIGRlbGV0ZSBlbC5fdG9vbHRpcFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGlyZWN0aXZlID0ge1xyXG4gIG9wdGlvbnM6IGRlZmF1bHRPcHRpb25zLFxyXG4gIGJpbmQgKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMgfSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQodmFsdWUpXHJcbiAgICBkZXN0cm95VG9vbHRpcChlbClcclxuICAgIGlmIChjb250ZW50ICYmIHN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZSAoZWwsIHsgdmFsdWUsIG9sZFZhbHVlLCBtb2RpZmllcnMgfSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQodmFsdWUpXHJcbiAgICBpZiAoIWNvbnRlbnQgfHwgIXN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgZGVzdHJveVRvb2x0aXAoZWwpXHJcbiAgICB9IGVsc2UgaWYgKGVsLl90b29sdGlwKSB7XHJcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBlbC5fdG9vbHRpcFxyXG4gICAgICAvLyBDb250ZW50XHJcbiAgICAgIHRvb2x0aXAuc2V0Q29udGVudChjb250ZW50KVxyXG4gICAgICAvLyBDU1MgQ2xhc3Nlc1xyXG4gICAgICB0b29sdGlwLnNldENsYXNzZXMoKHZhbHVlICYmIHZhbHVlLmNsYXNzZXMpIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzcylcclxuICAgICAgLy8gT3B0aW9uc1xyXG4gICAgICB0b29sdGlwLnNldE9wdGlvbnMoe1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIHBsYWNlbWVudDogZ2V0UGxhY2VtZW50KHZhbHVlLCBtb2RpZmllcnMpLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcclxuICAgIH1cclxuICB9LFxyXG4gIHVuYmluZCAoZWwpIHtcclxuICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpcmVjdGl2ZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdi10b29sdGlwLmpzIiwiaW1wb3J0IHZ0b29sdGlwLCB7IGRlZmF1bHRPcHRpb25zLCBzdGF0ZSB9IGZyb20gJy4vdi10b29sdGlwJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xyXG4gIGlmIChpbnN0YWxsLmluc3RhbGxlZCkgcmV0dXJuXHJcbiAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlXHJcblxyXG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyB8fCB7fSlcclxuICB2dG9vbHRpcC5vcHRpb25zID0gb3B0aW9uc1xyXG4gIFZ1ZS5kaXJlY3RpdmUoJ3Rvb2x0aXAnLCB2dG9vbHRpcClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFZUb29sdGlwID0gdnRvb2x0aXBcclxuXHJcbmNvbnN0IHBsdWdpbiA9IHtcclxuICBpbnN0YWxsLFxyXG5cclxuICBnZXQgZW5hYmxlZCAoKSB7XHJcbiAgICByZXR1cm4gc3RhdGUuZW5hYmxlZFxyXG4gIH0sXHJcblxyXG4gIHNldCBlbmFibGVkICh2YWx1ZSkge1xyXG4gICAgc3RhdGUuZW5hYmxlZCA9IHZhbHVlXHJcbiAgfSxcclxufVxyXG5cclxuLy8gQXV0by1pbnN0YWxsXHJcbmxldCBHbG9iYWxWdWUgPSBudWxsXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIEdsb2JhbFZ1ZSA9IHdpbmRvdy5WdWVcclxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xyXG4gIEdsb2JhbFZ1ZSA9IGdsb2JhbC5WdWVcclxufVxyXG5pZiAoR2xvYmFsVnVlKSB7XHJcbiAgR2xvYmFsVnVlLnVzZShwbHVnaW4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJcbmZ1bmN0aW9uIGNvbnZlcnRUb0FycmF5ICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpXHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3NlcyAoZWwsIGNsYXNzZXMpIHtcclxuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcclxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGMpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMgKGVsLCBjbGFzc2VzKSB7XHJcbiAgY2xhc3NlcyA9IGNvbnZlcnRUb0FycmF5KGNsYXNzZXMpXHJcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2xhc3NlcyAoZWwsIG5ld0NsYXNzZXMsIG9sZENsYXNzZXMpIHtcclxuICByZW1vdmVDbGFzc2VzKGVsLCBvbGRDbGFzc2VzKVxyXG4gIGFkZENsYXNzZXMoZWwsIG5ld0NsYXNzZXMpXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG9vbHRpcC5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRvb2x0aXAuanNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9