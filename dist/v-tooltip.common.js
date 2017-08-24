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
  } else if (type === 'object') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGMyZGM5N2Q0ZmFlZDBhZmJkNTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRvb2x0aXAuanNcIiJdLCJuYW1lcyI6WyJzdGF0ZSIsImVuYWJsZWQiLCJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50IiwidW5kZWZpbmVkIiwiZGVmYXVsdFBvcHBlck9wdGlvbnMiLCJhdXRvSGlkZSIsImRpc3Bvc2VUaW1lb3V0IiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJwbGFjZW1lbnQiLCJkaXJlY3RpdmUiLCJkZWxheSIsInRlbXBsYXRlIiwidHJpZ2dlciIsIm9mZnNldCIsImNvbnRhaW5lciIsImJvdW5kYXJpZXNFbGVtZW50IiwicG9wcGVyT3B0aW9ucyIsImdldFBsYWNlbWVudCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zIiwiU3VwZXJUb29sdGlwIiwiY2xhc3NlcyIsImVsIiwiX3Rvb2x0aXBOb2RlIiwib2xkQ2xhc3NlcyIsIl9vbGRDbGFzc2VzIiwicmVwbGFjZUNsYXNzZXMiLCJhZGRDbGFzc2VzIiwicmVtb3ZlQ2xhc3NlcyIsIl9wZW5kaW5nQ2xhc3NlcyIsIl9jbGFzc2VzIiwiY29udGVudCIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJpbm5lckhUTUwiLCJwb3BwZXJJbnN0YW5jZSIsInVwZGF0ZSIsIm5lZWRQb3BwZXJVcGRhdGUiLCJuZWVkUmVzdGFydCIsImtleSIsImlzT3BlbiIsIl9pc09wZW4iLCJkaXNwb3NlIiwiZXZlbnRzIiwic3BsaXQiLCJmaWx0ZXIiLCJpbmRleE9mIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwicmVmZXJlbmNlIiwic2V0Q2xhc3NlcyIsInNob3ciLCJhcmdzIiwicmVzdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2V2ZW50cyIsImZvckVhY2giLCJmdW5jIiwiZXZlbnQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiX2Rpc3Bvc2VUaW1lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldENvbnRlbnQiLCJ0eXBlIiwiY3JlYXRlVG9vbHRpcCIsIm9wdHMiLCJodG1sIiwidG9vbHRpcCIsIl90b29sdGlwIiwiX3Z1ZUVsIiwiZGVzdHJveVRvb2x0aXAiLCJiaW5kIiwib2xkVmFsdWUiLCJzZXRDb250ZW50Iiwic2V0T3B0aW9ucyIsInVuYmluZCIsImluc3RhbGwiLCJWdWUiLCJpbnN0YWxsZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ2dG9vbHRpcCIsIlZUb29sdGlwIiwicGx1Z2luIiwiR2xvYmFsVnVlIiwid2luZG93IiwiZ2xvYmFsIiwidXNlIiwiY29udmVydFRvQXJyYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjIiwicmVtb3ZlIiwibmV3Q2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZE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SyxjQUFULENBQXlCM0UsS0FBekIsRUFBZ0M7QUFDOUIsTUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCQSxZQUFRQSxNQUFNNEIsS0FBTixDQUFZLEdBQVosQ0FBUjtBQUNEO0FBQ0QsU0FBTzVCLEtBQVA7QUFDRDs7QUFFTSxTQUFTVSxVQUFULENBQXFCTCxFQUFyQixFQUF5QkQsT0FBekIsRUFBa0M7QUFDdkNBLFlBQVV1RSxlQUFldkUsT0FBZixDQUFWO0FBQ0FBLFVBQVFxQyxPQUFSLENBQWdCLGFBQUs7QUFDbkJwQyxPQUFHdUUsU0FBSCxDQUFhQyxHQUFiLENBQWlCQyxDQUFqQjtBQUNELEdBRkQ7QUFHRDs7QUFFTSxTQUFTbkUsYUFBVCxDQUF3Qk4sRUFBeEIsRUFBNEJELE9BQTVCLEVBQXFDO0FBQzFDQSxZQUFVdUUsZUFBZXZFLE9BQWYsQ0FBVjtBQUNBQSxVQUFRcUMsT0FBUixDQUFnQixhQUFLO0FBQ25CcEMsT0FBR3VFLFNBQUgsQ0FBYUcsTUFBYixDQUFvQkQsQ0FBcEI7QUFDRCxHQUZEO0FBR0Q7O0FBRU0sU0FBU3JFLGNBQVQsQ0FBeUJKLEVBQXpCLEVBQTZCMkUsVUFBN0IsRUFBeUN6RSxVQUF6QyxFQUFxRDtBQUMxREksZ0JBQWNOLEVBQWQsRUFBa0JFLFVBQWxCO0FBQ0FHLGFBQVdMLEVBQVgsRUFBZTJFLFVBQWY7QUFDRCxDOzs7Ozs7QUN6QkQsdUMiLCJmaWxlIjoidi10b29sdGlwLmNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGMyZGM5N2Q0ZmFlZDBhZmJkNTIiLCJpbXBvcnQgVG9vbHRpcCBmcm9tICd0b29sdGlwLmpzJ1xuXG5pbXBvcnQgeyBhZGRDbGFzc2VzLCByZW1vdmVDbGFzc2VzLCByZXBsYWNlQ2xhc3NlcyB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBsZXQgc3RhdGUgPSB7XG4gIGVuYWJsZWQ6IHRydWUsXG59XG5cbmNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgJ3RvcCcsXG4gICd0b3Atc3RhcnQnLFxuICAndG9wLWVuZCcsXG4gICdyaWdodCcsXG4gICdyaWdodC1zdGFydCcsXG4gICdyaWdodC1lbmQnLFxuICAnYm90dG9tJyxcbiAgJ2JvdHRvbS1zdGFydCcsXG4gICdib3R0b20tZW5kJyxcbiAgJ2xlZnQnLFxuICAnbGVmdC1zdGFydCcsXG4gICdsZWZ0LWVuZCcsXG5dXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgLy8gRGVmYXVsdCB0b29sdGlwIHBsYWNlbWVudCByZWxhdGl2ZSB0byB0YXJnZXQgZWxlbWVudFxuICBkZWZhdWx0UGxhY2VtZW50OiAndG9wJyxcbiAgLy8gRGVmYXVsdCBDU1MgY2xhc3NlcyBhcHBsaWVkIHRvIHRoZSB0b29sdGlwIGVsZW1lbnRcbiAgZGVmYXVsdENsYXNzOiAndnVlLXRvb2x0aXAtdGhlbWUnLFxuICAvLyBEZWZhdWx0IEhUTUwgdGVtcGxhdGUgb2YgdGhlIHRvb2x0aXAgZWxlbWVudFxuICAvLyBJdCBtdXN0IGluY2x1ZGUgYHRvb2x0aXBgICYgYHRvb2x0aXAtaW5uZXJgIENTUyBjbGFzc2VzXG4gIGRlZmF1bHRUZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgLy8gRGVsYXkgKG1zKVxuICBkZWZhdWx0RGVsYXk6IDAsXG4gIC8vIERlZmF1bHQgZXZlbnRzIHRoYXQgdHJpZ2dlciB0aGUgdG9vbHRpcFxuICBkZWZhdWx0VHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgLy8gRGVmYXVsdCBwb3NpdGlvbiBvZmZzZXQgKHB4KVxuICBkZWZhdWx0T2Zmc2V0OiAwLFxuICAvLyBEZWZhdWx0IGNvbnRhaW5lciB3aGVyZSB0aGUgdG9vbHRpcCB3aWxsIGJlIGFwcGVuZGVkXG4gIGRlZmF1bHRDb250YWluZXI6ICdib2R5JyxcbiAgZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50OiB1bmRlZmluZWQsXG4gIGRlZmF1bHRQb3BwZXJPcHRpb25zOiB7fSxcbiAgYXV0b0hpZGU6IHRydWUsXG4gIC8vIEF1dG8gZGVzdHJveSB0b29sdGlwIERPTSBub2RlcyAobXMpXG4gIGRpc3Bvc2VUaW1lb3V0OiA1MDAwLFxufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zIChvcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgcGxhY2VtZW50OiBvcHRpb25zLnBsYWNlbWVudCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0UGxhY2VtZW50LFxuICAgIGRlbGF5OiBvcHRpb25zLmRlbGF5IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHREZWxheSxcbiAgICB0ZW1wbGF0ZTogb3B0aW9ucy50ZW1wbGF0ZSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0VGVtcGxhdGUsXG4gICAgdHJpZ2dlcjogb3B0aW9ucy50cmlnZ2VyIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRUcmlnZ2VyLFxuICAgIG9mZnNldDogb3B0aW9ucy5vZmZzZXQgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdE9mZnNldCxcbiAgICBjb250YWluZXI6IG9wdGlvbnMuY29udGFpbmVyIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDb250YWluZXIsXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6IG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50LFxuICAgIHBvcHBlck9wdGlvbnM6IG9wdGlvbnMucG9wcGVyT3B0aW9ucyB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0UG9wcGVyT3B0aW9ucyxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnQgKHZhbHVlLCBtb2RpZmllcnMpIHtcbiAgbGV0IHBsYWNlbWVudCA9IHZhbHVlLnBsYWNlbWVudFxuICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHtcbiAgICBpZiAobW9kaWZpZXJzW3Bvc10pIHtcbiAgICAgIHBsYWNlbWVudCA9IHBvc1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGxhY2VtZW50XG59XG5cbmNsYXNzIFN1cGVyVG9vbHRpcCBleHRlbmRzIFRvb2x0aXAge1xuICBzZXRDbGFzc2VzIChjbGFzc2VzKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl90b29sdGlwTm9kZVxuXG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBvbGRDbGFzc2VzID0gdGhpcy5fb2xkQ2xhc3Nlc1xuICAgICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgICAgaWYgKG9sZENsYXNzZXMpIHtcbiAgICAgICAgICByZXBsYWNlQ2xhc3NlcyhlbCwgY2xhc3Nlcywgb2xkQ2xhc3NlcylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDbGFzc2VzKGVsLCBjbGFzc2VzKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9sZENsYXNzZXMpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3NlcyhlbCwgb2xkQ2xhc3NlcylcbiAgICAgIH1cbiAgICAgIHRoaXMuX29sZENsYXNzZXMgPSBjbGFzc2VzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BlbmRpbmdDbGFzc2VzID0gY2xhc3Nlc1xuICAgIH1cblxuICAgIHRoaXMuX2NsYXNzZXMgPSBjbGFzc2VzXG4gIH1cblxuICBzZXRDb250ZW50IChjb250ZW50KSB7XG4gICAgdGhpcy5vcHRpb25zLnRpdGxlID0gY29udGVudFxuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl90b29sdGlwTm9kZS5xdWVyeVNlbGVjdG9yKHRoaXMuaW5uZXJTZWxlY3RvcilcblxuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9ICcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gY29udGVudFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zKVxuXG4gICAgbGV0IG5lZWRQb3BwZXJVcGRhdGUgPSBmYWxzZVxuICAgIGxldCBuZWVkUmVzdGFydCA9IGZhbHNlXG5cbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ICE9PSBvcHRpb25zLm9mZnNldCB8fFxuICAgICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudCAhPT0gb3B0aW9ucy5wbGFjZW1lbnRcbiAgICApIHtcbiAgICAgIG5lZWRQb3BwZXJVcGRhdGUgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLnRlbXBsYXRlICE9PSBvcHRpb25zLnRlbXBsYXRlIHx8XG4gICAgICB0aGlzLm9wdGlvbnMudHJpZ2dlciAhPT0gb3B0aW9ucy50cmlnZ2VyIHx8XG4gICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyICE9PSBvcHRpb25zLmNvbnRhaW5lclxuICAgICkge1xuICAgICAgbmVlZFJlc3RhcnQgPSB0cnVlXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcbiAgICAgIGlmIChuZWVkUmVzdGFydCkge1xuICAgICAgICBjb25zdCBpc09wZW4gPSB0aGlzLl9pc09wZW5cblxuICAgICAgICB0aGlzLmRpc3Bvc2UoKVxuXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHR5cGVvZiB0aGlzLm9wdGlvbnMudHJpZ2dlciA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IG9wdGlvbnMudHJpZ2dlclxuICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgIHRyaWdnZXIgPT4gWydjbGljaycsICdob3ZlcicsICdmb2N1cyddLmluZGV4T2YodHJpZ2dlcikgIT09IC0xXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBbXVxuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgZXZlbnRzLCB0aGlzLm9wdGlvbnMpXG5cbiAgICAgICAgdGhpcy5zZXRDbGFzc2VzKHRoaXMuX2NsYXNzZXMpXG5cbiAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgIHRoaXMuc2hvdygpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobmVlZFBvcHBlclVwZGF0ZSkge1xuICAgICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZSAoLi4uYXJncykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9jcmVhdGUoLi4uYXJncylcblxuICAgIGlmIChkZWZhdWx0T3B0aW9ucy5hdXRvSGlkZSAmJiB0aGlzLm9wdGlvbnMudHJpZ2dlci5pbmRleE9mKCdob3ZlcicpICE9PSAtMSkge1xuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhpZGUpXG4gICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgX2Rpc3Bvc2UgKCkge1xuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGlkZSlcbiAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlKVxuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cy5mb3JFYWNoKCh7IGZ1bmMsIGV2ZW50IH0pID0+IHtcbiAgICAgIHRoaXMucmVmZXJlbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMpXG4gICAgfSlcbiAgICB0aGlzLl9ldmVudHMgPSBbXVxuICAgIHJldHVybiBzdXBlci5fZGlzcG9zZSgpXG4gIH1cblxuICBfc2hvdyAoLi4uYXJncykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9zaG93KC4uLmFyZ3MpXG5cbiAgICBpZiAodGhpcy5fcGVuZGluZ0NsYXNzZXMpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3Nlcyh0aGlzLl9wZW5kaW5nQ2xhc3NlcylcbiAgICAgIHRoaXMuX3BlbmRpbmdDbGFzc2VzID0gbnVsbFxuICAgIH1cblxuICAgIC8vIEZpeCBwb3NpdGlvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxuICAgIH0sIDApXG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzcG9zZVRpbWVyKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgX2hpZGUgKC4uLmFyZ3MpIHtcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5faGlkZSguLi5hcmdzKVxuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc3Bvc2VUaW1lcilcbiAgICB0aGlzLl9kaXNwb3NlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xuICAgICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxuICAgICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSlcbiAgICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl90b29sdGlwTm9kZSlcbiAgICAgICAgdGhpcy5fdG9vbHRpcE5vZGUgPSBudWxsXG4gICAgICB9XG4gICAgfSwgZGVmYXVsdE9wdGlvbnMuZGlzcG9zZVRpbWVvdXQpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29udGVudCAodmFsdWUpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZVxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB2YWx1ZS5jb250ZW50XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9vbHRpcCAoZWwsIHZhbHVlLCBtb2RpZmllcnMpIHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQodmFsdWUpXG4gIGxldCBjbGFzc2VzID0gdmFsdWUuY2xhc3NlcyB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q2xhc3NcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICB0aXRsZTogY29udGVudCxcbiAgICBodG1sOiB0cnVlLFxuICAgIC4uLmdldE9wdGlvbnMoe1xuICAgICAgLi4udmFsdWUsXG4gICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcbiAgICB9KSxcbiAgfVxuICBjb25zdCB0b29sdGlwID0gZWwuX3Rvb2x0aXAgPSBuZXcgU3VwZXJUb29sdGlwKGVsLCBvcHRzKVxuICB0b29sdGlwLnNldENsYXNzZXMoY2xhc3NlcylcbiAgdG9vbHRpcC5fdnVlRWwgPSBlbFxufVxuXG5mdW5jdGlvbiBkZXN0cm95VG9vbHRpcCAoZWwpIHtcbiAgaWYgKGVsLl90b29sdGlwKSB7XG4gICAgZWwuX3Rvb2x0aXAuZGlzcG9zZSgpXG4gICAgZGVsZXRlIGVsLl90b29sdGlwXG4gIH1cbn1cblxuY29uc3QgZGlyZWN0aXZlID0ge1xuICBvcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcbiAgYmluZCAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycyB9KSB7XG4gICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQodmFsdWUpXG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gICAgaWYgKGNvbnRlbnQgJiYgc3RhdGUuZW5hYmxlZCkge1xuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZSAoZWwsIHsgdmFsdWUsIG9sZFZhbHVlLCBtb2RpZmllcnMgfSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KHZhbHVlKVxuICAgIGlmICghY29udGVudCB8fCAhc3RhdGUuZW5hYmxlZCkge1xuICAgICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gICAgfSBlbHNlIGlmIChlbC5fdG9vbHRpcCkge1xuICAgICAgY29uc3QgdG9vbHRpcCA9IGVsLl90b29sdGlwXG4gICAgICAvLyBDb250ZW50XG4gICAgICB0b29sdGlwLnNldENvbnRlbnQoY29udGVudClcbiAgICAgIC8vIENTUyBDbGFzc2VzXG4gICAgICB0b29sdGlwLnNldENsYXNzZXMoKHZhbHVlICYmIHZhbHVlLmNsYXNzZXMpIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzcylcbiAgICAgIC8vIE9wdGlvbnNcbiAgICAgIHRvb2x0aXAuc2V0T3B0aW9ucyh7XG4gICAgICAgIC4uLnZhbHVlLFxuICAgICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVRvb2x0aXAoZWwsIHZhbHVlLCBtb2RpZmllcnMpXG4gICAgfVxuICB9LFxuICB1bmJpbmQgKGVsKSB7XG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpcmVjdGl2ZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3YtdG9vbHRpcC5qcyIsImltcG9ydCB2dG9vbHRpcCwgeyBkZWZhdWx0T3B0aW9ucywgc3RhdGUgfSBmcm9tICcuL3YtdG9vbHRpcCdcblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xuICBpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHJldHVyblxuICBpbnN0YWxsLmluc3RhbGxlZCA9IHRydWVcblxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgfHwge30pXG4gIHZ0b29sdGlwLm9wdGlvbnMgPSBvcHRpb25zXG4gIFZ1ZS5kaXJlY3RpdmUoJ3Rvb2x0aXAnLCB2dG9vbHRpcClcbn1cblxuZXhwb3J0IGNvbnN0IFZUb29sdGlwID0gdnRvb2x0aXBcblxuY29uc3QgcGx1Z2luID0ge1xuICBpbnN0YWxsLFxuXG4gIGdldCBlbmFibGVkICgpIHtcbiAgICByZXR1cm4gc3RhdGUuZW5hYmxlZFxuICB9LFxuXG4gIHNldCBlbmFibGVkICh2YWx1ZSkge1xuICAgIHN0YXRlLmVuYWJsZWQgPSB2YWx1ZVxuICB9LFxufVxuXG4vLyBBdXRvLWluc3RhbGxcbmxldCBHbG9iYWxWdWUgPSBudWxsXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgR2xvYmFsVnVlID0gd2luZG93LlZ1ZVxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICBHbG9iYWxWdWUgPSBnbG9iYWwuVnVlXG59XG5pZiAoR2xvYmFsVnVlKSB7XG4gIEdsb2JhbFZ1ZS51c2UocGx1Z2luKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIlxuZnVuY3Rpb24gY29udmVydFRvQXJyYXkgKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc2VzIChlbCwgY2xhc3Nlcykge1xuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoYylcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMgKGVsLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUNsYXNzZXMgKGVsLCBuZXdDbGFzc2VzLCBvbGRDbGFzc2VzKSB7XG4gIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXG4gIGFkZENsYXNzZXMoZWwsIG5ld0NsYXNzZXMpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0b29sdGlwLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidG9vbHRpcC5qc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=