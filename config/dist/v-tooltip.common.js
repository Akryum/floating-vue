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
  defaultPlacement: 'top',
  defaultClass: 'vue-tooltip-theme',
  defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  defaultDelay: 0,
  defaultTrigger: 'hover focus',
  defaultOffset: 0,
  defaultContainer: 'body',
  defaultBoundariesElement: undefined,
  defaultPopperOptions: {}
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

      if (this.options.trigger.indexOf('hover') !== -1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzNhNGZmNmJkN2Q0N2UxNjc4NDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRvb2x0aXAuanNcIiJdLCJuYW1lcyI6WyJzdGF0ZSIsImVuYWJsZWQiLCJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50IiwidW5kZWZpbmVkIiwiZGVmYXVsdFBvcHBlck9wdGlvbnMiLCJnZXRPcHRpb25zIiwib3B0aW9ucyIsInBsYWNlbWVudCIsImRpcmVjdGl2ZSIsImRlbGF5IiwidGVtcGxhdGUiLCJ0cmlnZ2VyIiwib2Zmc2V0IiwiY29udGFpbmVyIiwiYm91bmRhcmllc0VsZW1lbnQiLCJwb3BwZXJPcHRpb25zIiwiZ2V0UGxhY2VtZW50IiwidmFsdWUiLCJtb2RpZmllcnMiLCJwb3MiLCJTdXBlclRvb2x0aXAiLCJjbGFzc2VzIiwiZWwiLCJfdG9vbHRpcE5vZGUiLCJvbGRDbGFzc2VzIiwiX29sZENsYXNzZXMiLCJyZXBsYWNlQ2xhc3NlcyIsImFkZENsYXNzZXMiLCJyZW1vdmVDbGFzc2VzIiwiX3BlbmRpbmdDbGFzc2VzIiwiX2NsYXNzZXMiLCJjb250ZW50IiwidGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJTZWxlY3RvciIsImlubmVySFRNTCIsInBvcHBlckluc3RhbmNlIiwidXBkYXRlIiwibmVlZFBvcHBlclVwZGF0ZSIsIm5lZWRSZXN0YXJ0Iiwia2V5IiwiaXNPcGVuIiwiX2lzT3BlbiIsImRpc3Bvc2UiLCJldmVudHMiLCJzcGxpdCIsImZpbHRlciIsImluZGV4T2YiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJyZWZlcmVuY2UiLCJzZXRDbGFzc2VzIiwic2hvdyIsImFyZ3MiLCJyZXN1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXZlbnRzIiwiZm9yRWFjaCIsImZ1bmMiLCJldmVudCIsInNldFRpbWVvdXQiLCJjcmVhdGVUb29sdGlwIiwidG9vbHRpcCIsIl90b29sdGlwIiwiaHRtbCIsImRlc3Ryb3lUb29sdGlwIiwiYmluZCIsIm9sZFZhbHVlIiwic2V0Q29udGVudCIsInNldE9wdGlvbnMiLCJ1bmJpbmQiLCJpbnN0YWxsIiwiVnVlIiwiaW5zdGFsbGVkIiwiT2JqZWN0IiwiYXNzaWduIiwidnRvb2x0aXAiLCJWVG9vbHRpcCIsInBsdWdpbiIsIkdsb2JhbFZ1ZSIsIndpbmRvdyIsImdsb2JhbCIsInVzZSIsImNvbnZlcnRUb0FycmF5IiwiY2xhc3NMaXN0IiwiYWRkIiwiYyIsInJlbW92ZSIsIm5ld0NsYXNzZXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRU8sSUFB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LFlBQVFBLE1BQU00QixLQUFOLENBQVksR0FBWixDQUFSO0FBQ0Q7QUFDRCxTQUFPNUIsS0FBUDtBQUNEOztBQUVNLFNBQVNVLFVBQVQsQ0FBcUJMLEVBQXJCLEVBQXlCRCxPQUF6QixFQUFrQztBQUN2Q0EsWUFBVStELGVBQWUvRCxPQUFmLENBQVY7QUFDQUEsVUFBUXFDLE9BQVIsQ0FBZ0IsYUFBSztBQUNuQnBDLE9BQUcrRCxTQUFILENBQWFDLEdBQWIsQ0FBaUJDLENBQWpCO0FBQ0QsR0FGRDtBQUdEOztBQUVNLFNBQVMzRCxhQUFULENBQXdCTixFQUF4QixFQUE0QkQsT0FBNUIsRUFBcUM7QUFDMUNBLFlBQVUrRCxlQUFlL0QsT0FBZixDQUFWO0FBQ0FBLFVBQVFxQyxPQUFSLENBQWdCLGFBQUs7QUFDbkJwQyxPQUFHK0QsU0FBSCxDQUFhRyxNQUFiLENBQW9CRCxDQUFwQjtBQUNELEdBRkQ7QUFHRDs7QUFFTSxTQUFTN0QsY0FBVCxDQUF5QkosRUFBekIsRUFBNkJtRSxVQUE3QixFQUF5Q2pFLFVBQXpDLEVBQXFEO0FBQzFESSxnQkFBY04sRUFBZCxFQUFrQkUsVUFBbEI7QUFDQUcsYUFBV0wsRUFBWCxFQUFlbUUsVUFBZjtBQUNELEM7Ozs7OztBQ3pCRCx1QyIsImZpbGUiOiJ2LXRvb2x0aXAuY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzM2E0ZmY2YmQ3ZDQ3ZTE2Nzg0OSIsImltcG9ydCBUb29sdGlwIGZyb20gJ3Rvb2x0aXAuanMnXHJcblxyXG5pbXBvcnQgeyBhZGRDbGFzc2VzLCByZW1vdmVDbGFzc2VzLCByZXBsYWNlQ2xhc3NlcyB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgbGV0IHN0YXRlID0ge1xyXG4gIGVuYWJsZWQ6IHRydWUsXHJcbn1cclxuXHJcbmNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAndG9wJyxcclxuICAndG9wLXN0YXJ0JyxcclxuICAndG9wLWVuZCcsXHJcbiAgJ3JpZ2h0JyxcclxuICAncmlnaHQtc3RhcnQnLFxyXG4gICdyaWdodC1lbmQnLFxyXG4gICdib3R0b20nLFxyXG4gICdib3R0b20tc3RhcnQnLFxyXG4gICdib3R0b20tZW5kJyxcclxuICAnbGVmdCcsXHJcbiAgJ2xlZnQtc3RhcnQnLFxyXG4gICdsZWZ0LWVuZCcsXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICBkZWZhdWx0UGxhY2VtZW50OiAndG9wJyxcclxuICBkZWZhdWx0Q2xhc3M6ICd2dWUtdG9vbHRpcC10aGVtZScsXHJcbiAgZGVmYXVsdFRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxyXG4gIGRlZmF1bHREZWxheTogMCxcclxuICBkZWZhdWx0VHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcclxuICBkZWZhdWx0T2Zmc2V0OiAwLFxyXG4gIGRlZmF1bHRDb250YWluZXI6ICdib2R5JyxcclxuICBkZWZhdWx0Qm91bmRhcmllc0VsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICBkZWZhdWx0UG9wcGVyT3B0aW9uczoge30sXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9wdGlvbnMgKG9wdGlvbnMpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGxhY2VtZW50OiBvcHRpb25zLnBsYWNlbWVudCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0UGxhY2VtZW50LFxyXG4gICAgZGVsYXk6IG9wdGlvbnMuZGVsYXkgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdERlbGF5LFxyXG4gICAgdGVtcGxhdGU6IG9wdGlvbnMudGVtcGxhdGUgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFRlbXBsYXRlLFxyXG4gICAgdHJpZ2dlcjogb3B0aW9ucy50cmlnZ2VyIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRUcmlnZ2VyLFxyXG4gICAgb2Zmc2V0OiBvcHRpb25zLm9mZnNldCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0T2Zmc2V0LFxyXG4gICAgY29udGFpbmVyOiBvcHRpb25zLmNvbnRhaW5lciB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q29udGFpbmVyLFxyXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6IG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50LFxyXG4gICAgcG9wcGVyT3B0aW9uczogb3B0aW9ucy5wb3BwZXJPcHRpb25zIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRQb3BwZXJPcHRpb25zLFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50ICh2YWx1ZSwgbW9kaWZpZXJzKSB7XHJcbiAgbGV0IHBsYWNlbWVudCA9IHZhbHVlLnBsYWNlbWVudFxyXG4gIGZvciAoY29uc3QgcG9zIG9mIHBvc2l0aW9ucykge1xyXG4gICAgaWYgKG1vZGlmaWVyc1twb3NdKSB7XHJcbiAgICAgIHBsYWNlbWVudCA9IHBvc1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGxhY2VtZW50XHJcbn1cclxuXHJcbmNsYXNzIFN1cGVyVG9vbHRpcCBleHRlbmRzIFRvb2x0aXAge1xyXG4gIHNldENsYXNzZXMgKGNsYXNzZXMpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5fdG9vbHRpcE5vZGVcclxuXHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgY29uc3Qgb2xkQ2xhc3NlcyA9IHRoaXMuX29sZENsYXNzZXNcclxuICAgICAgaWYgKGNsYXNzZXMpIHtcclxuICAgICAgICBpZiAob2xkQ2xhc3Nlcykge1xyXG4gICAgICAgICAgcmVwbGFjZUNsYXNzZXMoZWwsIGNsYXNzZXMsIG9sZENsYXNzZXMpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFkZENsYXNzZXMoZWwsIGNsYXNzZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKG9sZENsYXNzZXMpIHtcclxuICAgICAgICByZW1vdmVDbGFzc2VzKGVsLCBvbGRDbGFzc2VzKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX29sZENsYXNzZXMgPSBjbGFzc2VzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9wZW5kaW5nQ2xhc3NlcyA9IGNsYXNzZXNcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jbGFzc2VzID0gY2xhc3Nlc1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudCAoY29udGVudCkge1xyXG4gICAgdGhpcy5vcHRpb25zLnRpdGxlID0gY29udGVudFxyXG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fdG9vbHRpcE5vZGUucXVlcnlTZWxlY3Rvcih0aGlzLmlubmVyU2VsZWN0b3IpXHJcblxyXG4gICAgICBpZiAoZWwpIHtcclxuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgIGVsLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsLmlubmVySFRNTCA9IGNvbnRlbnRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyAob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucylcclxuXHJcbiAgICBsZXQgbmVlZFBvcHBlclVwZGF0ZSA9IGZhbHNlXHJcbiAgICBsZXQgbmVlZFJlc3RhcnQgPSBmYWxzZVxyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5vcHRpb25zLm9mZnNldCAhPT0gb3B0aW9ucy5vZmZzZXQgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudCAhPT0gb3B0aW9ucy5wbGFjZW1lbnRcclxuICAgICkge1xyXG4gICAgICBuZWVkUG9wcGVyVXBkYXRlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5vcHRpb25zLnRlbXBsYXRlICE9PSBvcHRpb25zLnRlbXBsYXRlIHx8XHJcbiAgICAgIHRoaXMub3B0aW9ucy50cmlnZ2VyICE9PSBvcHRpb25zLnRyaWdnZXIgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLmNvbnRhaW5lciAhPT0gb3B0aW9ucy5jb250YWluZXJcclxuICAgICkge1xyXG4gICAgICBuZWVkUmVzdGFydCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XHJcbiAgICAgIGlmIChuZWVkUmVzdGFydCkge1xyXG4gICAgICAgIGNvbnN0IGlzT3BlbiA9IHRoaXMuX2lzT3BlblxyXG5cclxuICAgICAgICB0aGlzLmRpc3Bvc2UoKVxyXG5cclxuICAgICAgICBjb25zdCBldmVudHMgPSB0eXBlb2YgdGhpcy5vcHRpb25zLnRyaWdnZXIgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICA/IG9wdGlvbnMudHJpZ2dlclxyXG4gICAgICAgICAgICAuc3BsaXQoJyAnKVxyXG4gICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIHRyaWdnZXIgPT4gWydjbGljaycsICdob3ZlcicsICdmb2N1cyddLmluZGV4T2YodHJpZ2dlcikgIT09IC0xXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIDogW11cclxuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgZXZlbnRzLCB0aGlzLm9wdGlvbnMpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3Nlcyh0aGlzLl9jbGFzc2VzKVxyXG5cclxuICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3coKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChuZWVkUG9wcGVyVXBkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY3JlYXRlICguLi5hcmdzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fY3JlYXRlKC4uLmFyZ3MpXHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmlnZ2VyLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xKSB7XHJcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxyXG4gICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgX2Rpc3Bvc2UgKCkge1xyXG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XHJcbiAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhpZGUpXHJcbiAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2V2ZW50cy5mb3JFYWNoKCh7IGZ1bmMsIGV2ZW50IH0pID0+IHtcclxuICAgICAgdGhpcy5yZWZlcmVuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuYylcclxuICAgIH0pXHJcbiAgICB0aGlzLl9ldmVudHMgPSBbXVxyXG4gICAgcmV0dXJuIHN1cGVyLl9kaXNwb3NlKClcclxuICB9XHJcblxyXG4gIF9zaG93ICguLi5hcmdzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fc2hvdyguLi5hcmdzKVxyXG5cclxuICAgIGlmICh0aGlzLl9wZW5kaW5nQ2xhc3Nlcykge1xyXG4gICAgICB0aGlzLnNldENsYXNzZXModGhpcy5fcGVuZGluZ0NsYXNzZXMpXHJcbiAgICAgIHRoaXMuX3BlbmRpbmdDbGFzc2VzID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpeCBwb3NpdGlvblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcclxuICAgIH0sIDApXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9vbHRpcCAoZWwsIHZhbHVlLCBtb2RpZmllcnMpIHtcclxuICBjb25zdCBjb250ZW50ID0gdmFsdWUuY29udGVudCB8fCB2YWx1ZVxyXG4gIGxldCBjbGFzc2VzID0gdmFsdWUuY2xhc3NlcyB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q2xhc3NcclxuXHJcbiAgY29uc3QgdG9vbHRpcCA9IGVsLl90b29sdGlwID0gbmV3IFN1cGVyVG9vbHRpcChlbCwge1xyXG4gICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICBodG1sOiB0cnVlLFxyXG4gICAgLi4uZ2V0T3B0aW9ucyh7XHJcbiAgICAgIC4uLnZhbHVlLFxyXG4gICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcclxuICAgIH0pLFxyXG4gIH0pXHJcbiAgdG9vbHRpcC5zZXRDbGFzc2VzKGNsYXNzZXMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc3Ryb3lUb29sdGlwIChlbCkge1xyXG4gIGlmIChlbC5fdG9vbHRpcCkge1xyXG4gICAgZWwuX3Rvb2x0aXAuZGlzcG9zZSgpXHJcbiAgICBkZWxldGUgZWwuX3Rvb2x0aXBcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpcmVjdGl2ZSA9IHtcclxuICBvcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcclxuICBiaW5kIChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzIH0pIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZSAmJiB2YWx1ZS5jb250ZW50IHx8IHZhbHVlXHJcbiAgICBkZXN0cm95VG9vbHRpcChlbClcclxuICAgIGlmIChjb250ZW50ICYmIHN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZSAoZWwsIHsgdmFsdWUsIG9sZFZhbHVlLCBtb2RpZmllcnMgfSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHZhbHVlICYmIHZhbHVlLmNvbnRlbnQgfHwgdmFsdWVcclxuICAgIGlmICghY29udGVudCB8fCAhc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICBkZXN0cm95VG9vbHRpcChlbClcclxuICAgIH0gZWxzZSBpZiAoZWwuX3Rvb2x0aXApIHtcclxuICAgICAgY29uc3QgdG9vbHRpcCA9IGVsLl90b29sdGlwXHJcbiAgICAgIC8vIENvbnRlbnRcclxuICAgICAgdG9vbHRpcC5zZXRDb250ZW50KGNvbnRlbnQpXHJcbiAgICAgIC8vIENTUyBDbGFzc2VzXHJcbiAgICAgIHRvb2x0aXAuc2V0Q2xhc3NlcygodmFsdWUgJiYgdmFsdWUuY2xhc3NlcykgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdENsYXNzKVxyXG4gICAgICAvLyBPcHRpb25zXHJcbiAgICAgIHRvb2x0aXAuc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgcGxhY2VtZW50OiBnZXRQbGFjZW1lbnQodmFsdWUsIG1vZGlmaWVycyksXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjcmVhdGVUb29sdGlwKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdW5iaW5kIChlbCkge1xyXG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlyZWN0aXZlXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92LXRvb2x0aXAuanMiLCJpbXBvcnQgdnRvb2x0aXAsIHsgZGVmYXVsdE9wdGlvbnMsIHN0YXRlIH0gZnJvbSAnLi92LXRvb2x0aXAnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFsbCAoVnVlLCBvcHRpb25zKSB7XHJcbiAgaWYgKGluc3RhbGwuaW5zdGFsbGVkKSByZXR1cm5cclxuICBpbnN0YWxsLmluc3RhbGxlZCA9IHRydWVcclxuXHJcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIHx8IHt9KVxyXG4gIHZ0b29sdGlwLm9wdGlvbnMgPSBvcHRpb25zXHJcbiAgVnVlLmRpcmVjdGl2ZSgndG9vbHRpcCcsIHZ0b29sdGlwKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVlRvb2x0aXAgPSB2dG9vbHRpcFxyXG5cclxuY29uc3QgcGx1Z2luID0ge1xyXG4gIGluc3RhbGwsXHJcblxyXG4gIGdldCBlbmFibGVkICgpIHtcclxuICAgIHJldHVybiBzdGF0ZS5lbmFibGVkXHJcbiAgfSxcclxuXHJcbiAgc2V0IGVuYWJsZWQgKHZhbHVlKSB7XHJcbiAgICBzdGF0ZS5lbmFibGVkID0gdmFsdWVcclxuICB9LFxyXG59XHJcblxyXG4vLyBBdXRvLWluc3RhbGxcclxubGV0IEdsb2JhbFZ1ZSA9IG51bGxcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgR2xvYmFsVnVlID0gd2luZG93LlZ1ZVxyXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgR2xvYmFsVnVlID0gZ2xvYmFsLlZ1ZVxyXG59XHJcbmlmIChHbG9iYWxWdWUpIHtcclxuICBHbG9iYWxWdWUudXNlKHBsdWdpbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIlxuZnVuY3Rpb24gY29udmVydFRvQXJyYXkgKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJylcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc2VzIChlbCwgY2xhc3Nlcykge1xyXG4gIGNsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxyXG4gIGNsYXNzZXMuZm9yRWFjaChjID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoYylcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyAoZWwsIGNsYXNzZXMpIHtcclxuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcclxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDbGFzc2VzIChlbCwgbmV3Q2xhc3Nlcywgb2xkQ2xhc3Nlcykge1xyXG4gIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXHJcbiAgYWRkQ2xhc3NlcyhlbCwgbmV3Q2xhc3NlcylcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0b29sdGlwLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidG9vbHRpcC5qc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=