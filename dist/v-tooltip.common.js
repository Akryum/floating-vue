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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tooltip_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tooltip_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tooltip_js__);
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
/***/ (function(module, exports) {

module.exports = require("tooltip.js");

/***/ }),
/* 3 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDA4YjkzOWIzYjY5NmFiNTU4ZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG9vbHRpcC5qc1wiIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJwbGFjZW1lbnQiLCJkaXJlY3RpdmUiLCJkZWxheSIsInRlbXBsYXRlIiwidHJpZ2dlciIsIm9mZnNldCIsImNvbnRhaW5lciIsImdldFBsYWNlbWVudCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zIiwiU3VwZXJUb29sdGlwIiwiY2xhc3NlcyIsImVsIiwiX3Rvb2x0aXBOb2RlIiwib2xkQ2xhc3NlcyIsIl9vbGRDbGFzc2VzIiwicmVwbGFjZUNsYXNzZXMiLCJhZGRDbGFzc2VzIiwicmVtb3ZlQ2xhc3NlcyIsIl9wZW5kaW5nQ2xhc3NlcyIsIl9jbGFzc2VzIiwiY29udGVudCIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJpbm5lckhUTUwiLCJwb3BwZXJJbnN0YW5jZSIsInVwZGF0ZSIsIm5lZWRQb3BwZXJVcGRhdGUiLCJuZWVkUmVzdGFydCIsImtleSIsImlzT3BlbiIsIl9pc09wZW4iLCJkaXNwb3NlIiwiZXZlbnRzIiwic3BsaXQiLCJmaWx0ZXIiLCJpbmRleE9mIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwicmVmZXJlbmNlIiwic2V0Q2xhc3NlcyIsInNob3ciLCJfZXZlbnRzIiwiZm9yRWFjaCIsImZ1bmMiLCJldmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhcmdzIiwic2V0VGltZW91dCIsImNyZWF0ZVRvb2x0aXAiLCJ0b29sdGlwIiwiX3Rvb2x0aXAiLCJodG1sIiwiZGVzdHJveVRvb2x0aXAiLCJiaW5kIiwib2xkVmFsdWUiLCJzZXRDb250ZW50Iiwic2V0T3B0aW9ucyIsInVuYmluZCIsImNvbnZlcnRUb0FycmF5IiwiY2xhc3NMaXN0IiwiYWRkIiwiYyIsInJlbW92ZSIsIm5ld0NsYXNzZXMiLCJpbnN0YWxsIiwiVnVlIiwiaW5zdGFsbGVkIiwiT2JqZWN0IiwiYXNzaWduIiwidnRvb2x0aXAiLCJWVG9vbHRpcCIsInBsdWdpbiIsIkdsb2JhbFZ1ZSIsIndpbmRvdyIsImdsb2JhbCIsInVzZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRUEsSUFBTUEsWUFBWSxDQUNoQixLQURnQixFQUVoQixXQUZnQixFQUdoQixTQUhnQixFQUloQixPQUpnQixFQUtoQixhQUxnQixFQU1oQixXQU5nQixFQU9oQixRQVBnQixFQVFoQixjQVJnQixFQVNoQixZQVRnQixFQVVoQixNQVZnQixFQVdoQixZQVhnQixFQVloQixVQVpnQixDQUFs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LGtFQUFsQixFQUFrQ3ZFLFdBQVcsRUFBN0MsQ0FBVjtBQUNBd0UsRUFBQSwyREFBQUEsQ0FBU3hFLE9BQVQsR0FBbUJBLE9BQW5CO0FBQ0FvRSxNQUFJbEUsU0FBSixDQUFjLFNBQWQsRUFBeUIsMkRBQXpCO0FBQ0Q7O0FBRU0sSUFBTXVFLFdBQVcsMkRBQWpCOztBQUVQLElBQU1DLFNBQVM7QUFDYlA7QUFEYSxDQUFmOztBQUlBO0FBQ0EsSUFBSVEsWUFBWSxJQUFoQjtBQUNBLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQ0QsY0FBWUMsT0FBT1IsR0FBbkI7QUFDRCxDQUZELE1BRU8sSUFBSSxPQUFPUyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ3hDRixjQUFZRSxPQUFPVCxHQUFuQjtBQUNEO0FBQ0QsSUFBSU8sU0FBSixFQUFlO0FBQ2JBLFlBQVVHLEdBQVYsQ0FBY0osTUFBZDtBQUNEOztBQUVELDhEQUFlQSxNQUFmLEMiLCJmaWxlIjoidi10b29sdGlwLmNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAwOGI5MzliM2I2OTZhYjU1OGVmIiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAndG9vbHRpcC5qcydcclxuXHJcbmltcG9ydCB7IGFkZENsYXNzZXMsIHJlbW92ZUNsYXNzZXMsIHJlcGxhY2VDbGFzc2VzIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAndG9wJyxcclxuICAndG9wLXN0YXJ0JyxcclxuICAndG9wLWVuZCcsXHJcbiAgJ3JpZ2h0JyxcclxuICAncmlnaHQtc3RhcnQnLFxyXG4gICdyaWdodC1lbmQnLFxyXG4gICdib3R0b20nLFxyXG4gICdib3R0b20tc3RhcnQnLFxyXG4gICdib3R0b20tZW5kJyxcclxuICAnbGVmdCcsXHJcbiAgJ2xlZnQtc3RhcnQnLFxyXG4gICdsZWZ0LWVuZCcsXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICBkZWZhdWx0UGxhY2VtZW50OiAndG9wJyxcclxuICBkZWZhdWx0Q2xhc3M6ICd2dWUtdG9vbHRpcC10aGVtZScsXHJcbiAgZGVmYXVsdFRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxyXG4gIGRlZmF1bHREZWxheTogMCxcclxuICBkZWZhdWx0VHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcclxuICBkZWZhdWx0T2Zmc2V0OiAwLFxyXG4gIGRlZmF1bHRDb250YWluZXI6ICdib2R5JyxcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3B0aW9ucyAob3B0aW9ucykge1xyXG4gIHJldHVybiB7XHJcbiAgICBwbGFjZW1lbnQ6IG9wdGlvbnMucGxhY2VtZW50IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRQbGFjZW1lbnQsXHJcbiAgICBkZWxheTogb3B0aW9ucy5kZWxheSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0RGVsYXksXHJcbiAgICB0ZW1wbGF0ZTogb3B0aW9ucy50ZW1wbGF0ZSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICB0cmlnZ2VyOiBvcHRpb25zLnRyaWdnZXIgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFRyaWdnZXIsXHJcbiAgICBvZmZzZXQ6IG9wdGlvbnMub2Zmc2V0IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRPZmZzZXQsXHJcbiAgICBjb250YWluZXI6IG9wdGlvbnMuY29udGFpbmVyIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDb250YWluZXIsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnQgKHZhbHVlLCBtb2RpZmllcnMpIHtcclxuICBsZXQgcGxhY2VtZW50ID0gdmFsdWUucGxhY2VtZW50XHJcbiAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB7XHJcbiAgICBpZiAobW9kaWZpZXJzW3Bvc10pIHtcclxuICAgICAgcGxhY2VtZW50ID0gcG9zXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwbGFjZW1lbnRcclxufVxyXG5cclxuY2xhc3MgU3VwZXJUb29sdGlwIGV4dGVuZHMgVG9vbHRpcCB7XHJcbiAgc2V0Q2xhc3NlcyAoY2xhc3Nlcykge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLl90b29sdGlwTm9kZVxyXG5cclxuICAgIGlmIChlbCkge1xyXG4gICAgICBjb25zdCBvbGRDbGFzc2VzID0gdGhpcy5fb2xkQ2xhc3Nlc1xyXG4gICAgICBpZiAoY2xhc3Nlcykge1xyXG4gICAgICAgIGlmIChvbGRDbGFzc2VzKSB7XHJcbiAgICAgICAgICByZXBsYWNlQ2xhc3NlcyhlbCwgY2xhc3Nlcywgb2xkQ2xhc3NlcylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWRkQ2xhc3NlcyhlbCwgY2xhc3NlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAob2xkQ2xhc3Nlcykge1xyXG4gICAgICAgIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fb2xkQ2xhc3NlcyA9IGNsYXNzZXNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3BlbmRpbmdDbGFzc2VzID0gY2xhc3Nlc1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NsYXNzZXMgPSBjbGFzc2VzXHJcbiAgfVxyXG5cclxuICBzZXRDb250ZW50IChjb250ZW50KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMudGl0bGUgPSBjb250ZW50XHJcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcclxuICAgICAgY29uc3QgZWwgPSB0aGlzLl90b29sdGlwTm9kZS5xdWVyeVNlbGVjdG9yKHRoaXMuaW5uZXJTZWxlY3RvcilcclxuXHJcbiAgICAgIGlmIChlbCkge1xyXG4gICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gJydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gY29udGVudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zIChvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zKVxyXG5cclxuICAgIGxldCBuZWVkUG9wcGVyVXBkYXRlID0gZmFsc2VcclxuICAgIGxldCBuZWVkUmVzdGFydCA9IGZhbHNlXHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ICE9PSBvcHRpb25zLm9mZnNldCB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50ICE9PSBvcHRpb25zLnBsYWNlbWVudFxyXG4gICAgKSB7XHJcbiAgICAgIG5lZWRQb3BwZXJVcGRhdGUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm9wdGlvbnMudGVtcGxhdGUgIT09IG9wdGlvbnMudGVtcGxhdGUgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLnRyaWdnZXIgIT09IG9wdGlvbnMudHJpZ2dlciB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyICE9PSBvcHRpb25zLmNvbnRhaW5lclxyXG4gICAgKSB7XHJcbiAgICAgIG5lZWRSZXN0YXJ0ID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcclxuICAgICAgaWYgKG5lZWRSZXN0YXJ0KSB7XHJcbiAgICAgICAgY29uc3QgaXNPcGVuID0gdGhpcy5faXNPcGVuXHJcblxyXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpXHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHR5cGVvZiB0aGlzLm9wdGlvbnMudHJpZ2dlciA9PT0gJ3N0cmluZydcclxuICAgICAgICAgID8gb3B0aW9ucy50cmlnZ2VyXHJcbiAgICAgICAgICAgIC5zcGxpdCgnICcpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgdHJpZ2dlciA9PiBbJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10uaW5kZXhPZih0cmlnZ2VyKSAhPT0gLTFcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgOiBbXVxyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCBldmVudHMsIHRoaXMub3B0aW9ucylcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDbGFzc2VzKHRoaXMuX2NsYXNzZXMpXHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2hvdygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKG5lZWRQb3BwZXJVcGRhdGUpIHtcclxuICAgICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9kaXNwb3NlICgpIHtcclxuICAgIHRoaXMuX2V2ZW50cy5mb3JFYWNoKCh7IGZ1bmMsIGV2ZW50IH0pID0+IHtcclxuICAgICAgdGhpcy5yZWZlcmVuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuYylcclxuICAgIH0pXHJcbiAgICB0aGlzLl9ldmVudHMgPSBbXVxyXG4gICAgc3VwZXIuX2Rpc3Bvc2UoKVxyXG4gIH1cclxuXHJcbiAgX3Nob3cgKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyLl9zaG93KC4uLmFyZ3MpXHJcblxyXG4gICAgaWYgKHRoaXMuX3BlbmRpbmdDbGFzc2VzKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3Nlcyh0aGlzLl9wZW5kaW5nQ2xhc3NlcylcclxuICAgICAgdGhpcy5fcGVuZGluZ0NsYXNzZXMgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRml4IHBvc2l0aW9uXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxyXG4gICAgfSwgMClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvb2x0aXAgKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKSB7XHJcbiAgY29uc3QgY29udGVudCA9IHZhbHVlLmNvbnRlbnQgfHwgdmFsdWVcclxuICBsZXQgY2xhc3NlcyA9IHZhbHVlLmNsYXNzZXMgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdENsYXNzXHJcblxyXG4gIGNvbnN0IHRvb2x0aXAgPSBlbC5fdG9vbHRpcCA9IG5ldyBTdXBlclRvb2x0aXAoZWwsIHtcclxuICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgaHRtbDogdHJ1ZSxcclxuICAgIC4uLmdldE9wdGlvbnMoe1xyXG4gICAgICAuLi52YWx1ZSxcclxuICAgICAgcGxhY2VtZW50OiBnZXRQbGFjZW1lbnQodmFsdWUsIG1vZGlmaWVycyksXHJcbiAgICB9KSxcclxuICB9KVxyXG4gIHRvb2x0aXAuc2V0Q2xhc3NlcyhjbGFzc2VzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZXN0cm95VG9vbHRpcCAoZWwpIHtcclxuICBpZiAoZWwuX3Rvb2x0aXApIHtcclxuICAgIGVsLl90b29sdGlwLmRpc3Bvc2UoKVxyXG4gICAgZGVsZXRlIGVsLl90b29sdGlwXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkaXJlY3RpdmUgPSB7XHJcbiAgb3B0aW9uczogZGVmYXVsdE9wdGlvbnMsXHJcbiAgYmluZCAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycyB9KSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdmFsdWUgJiYgdmFsdWUuY29udGVudCB8fCB2YWx1ZVxyXG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICBjcmVhdGVUb29sdGlwKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlIChlbCwgeyB2YWx1ZSwgb2xkVmFsdWUsIG1vZGlmaWVycyB9KSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdmFsdWUgJiYgdmFsdWUuY29udGVudCB8fCB2YWx1ZVxyXG4gICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxyXG4gICAgfSBlbHNlIGlmIChlbC5fdG9vbHRpcCkge1xyXG4gICAgICBjb25zdCB0b29sdGlwID0gZWwuX3Rvb2x0aXBcclxuICAgICAgLy8gQ29udGVudFxyXG4gICAgICB0b29sdGlwLnNldENvbnRlbnQoY29udGVudClcclxuICAgICAgLy8gQ1NTIENsYXNzZXNcclxuICAgICAgdG9vbHRpcC5zZXRDbGFzc2VzKCh2YWx1ZSAmJiB2YWx1ZS5jbGFzc2VzKSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q2xhc3MpXHJcbiAgICAgIC8vIE9wdGlvbnNcclxuICAgICAgdG9vbHRpcC5zZXRPcHRpb25zKHtcclxuICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNyZWF0ZVRvb2x0aXAoZWwsIHZhbHVlLCBtb2RpZmllcnMpXHJcbiAgICB9XHJcbiAgfSxcclxuICB1bmJpbmQgKGVsKSB7XHJcbiAgICBkZXN0cm95VG9vbHRpcChlbClcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXJlY3RpdmVcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3YtdG9vbHRpcC5qcyIsIlxuZnVuY3Rpb24gY29udmVydFRvQXJyYXkgKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJylcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc2VzIChlbCwgY2xhc3Nlcykge1xyXG4gIGNsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxyXG4gIGNsYXNzZXMuZm9yRWFjaChjID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoYylcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyAoZWwsIGNsYXNzZXMpIHtcclxuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcclxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDbGFzc2VzIChlbCwgbmV3Q2xhc3Nlcywgb2xkQ2xhc3Nlcykge1xyXG4gIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXHJcbiAgYWRkQ2xhc3NlcyhlbCwgbmV3Q2xhc3NlcylcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0b29sdGlwLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidG9vbHRpcC5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB2dG9vbHRpcCwgeyBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vdi10b29sdGlwJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xyXG4gIGlmIChpbnN0YWxsLmluc3RhbGxlZCkgcmV0dXJuXHJcbiAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlXHJcblxyXG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyB8fCB7fSlcclxuICB2dG9vbHRpcC5vcHRpb25zID0gb3B0aW9uc1xyXG4gIFZ1ZS5kaXJlY3RpdmUoJ3Rvb2x0aXAnLCB2dG9vbHRpcClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFZUb29sdGlwID0gdnRvb2x0aXBcclxuXHJcbmNvbnN0IHBsdWdpbiA9IHtcclxuICBpbnN0YWxsLFxyXG59XHJcblxyXG4vLyBBdXRvLWluc3RhbGxcclxubGV0IEdsb2JhbFZ1ZSA9IG51bGxcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgR2xvYmFsVnVlID0gd2luZG93LlZ1ZVxyXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgR2xvYmFsVnVlID0gZ2xvYmFsLlZ1ZVxyXG59XHJcbmlmIChHbG9iYWxWdWUpIHtcclxuICBHbG9iYWxWdWUudXNlKHBsdWdpbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=