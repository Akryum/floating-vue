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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzdmNTA5OTNlNzdmMGJlYjhkNTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG9vbHRpcC5qc1wiIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJwbGFjZW1lbnQiLCJkaXJlY3RpdmUiLCJkZWxheSIsInRlbXBsYXRlIiwidHJpZ2dlciIsIm9mZnNldCIsImNvbnRhaW5lciIsImdldFBsYWNlbWVudCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zIiwiU3VwZXJUb29sdGlwIiwiY2xhc3NlcyIsImVsIiwiX3Rvb2x0aXBOb2RlIiwib2xkQ2xhc3NlcyIsIl9vbGRDbGFzc2VzIiwicmVwbGFjZUNsYXNzZXMiLCJhZGRDbGFzc2VzIiwicmVtb3ZlQ2xhc3NlcyIsIl9wZW5kaW5nQ2xhc3NlcyIsIl9jbGFzc2VzIiwiY29udGVudCIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJpbm5lckhUTUwiLCJwb3BwZXJJbnN0YW5jZSIsInVwZGF0ZSIsIm5lZWRQb3BwZXJVcGRhdGUiLCJuZWVkUmVzdGFydCIsImtleSIsImlzT3BlbiIsIl9pc09wZW4iLCJkaXNwb3NlIiwiZXZlbnRzIiwic3BsaXQiLCJmaWx0ZXIiLCJpbmRleE9mIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwicmVmZXJlbmNlIiwic2V0Q2xhc3NlcyIsInNob3ciLCJhcmdzIiwicmVzdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2V2ZW50cyIsImZvckVhY2giLCJmdW5jIiwiZXZlbnQiLCJzZXRUaW1lb3V0IiwiY3JlYXRlVG9vbHRpcCIsInRvb2x0aXAiLCJfdG9vbHRpcCIsImh0bWwiLCJkZXN0cm95VG9vbHRpcCIsImJpbmQiLCJvbGRWYWx1ZSIsInNldENvbnRlbnQiLCJzZXRPcHRpb25zIiwidW5iaW5kIiwiY29udmVydFRvQXJyYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjIiwicmVtb3ZlIiwibmV3Q2xhc3NlcyIsImluc3RhbGwiLCJWdWUiLCJpbnN0YWxsZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ2dG9vbHRpcCIsIlZUb29sdGlwIiwicGx1Z2luIiwiR2xvYmFsVnVlIiwid2luZG93IiwiZ2xvYmFsIiwidXNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7QUFFQTs7QUFFQSxJQUFNQSxZQUFZLENBQ2hCLEtBRGdCLEVBRWhCLFdBRmdCLEVBR2hCLFNBSGdCLEVBSWhCLE9BSmdCLEVBS2hCLGFBTGdCLEVBTWhCLFdBTmdCLEVBT2hCLFFBUGdCLEVBUWhCLGNBUmdCLEVBU2hCLFlBVGdCLEVBVWhC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Q0FBY0osTUFBZDtBQUNEOztBQUVELDhEQUFlQSxNQUFmLEMiLCJmaWxlIjoidi10b29sdGlwLmNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM3ZjUwOTkzZTc3ZjBiZWI4ZDU5IiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAndG9vbHRpcC5qcydcclxuXHJcbmltcG9ydCB7IGFkZENsYXNzZXMsIHJlbW92ZUNsYXNzZXMsIHJlcGxhY2VDbGFzc2VzIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAndG9wJyxcclxuICAndG9wLXN0YXJ0JyxcclxuICAndG9wLWVuZCcsXHJcbiAgJ3JpZ2h0JyxcclxuICAncmlnaHQtc3RhcnQnLFxyXG4gICdyaWdodC1lbmQnLFxyXG4gICdib3R0b20nLFxyXG4gICdib3R0b20tc3RhcnQnLFxyXG4gICdib3R0b20tZW5kJyxcclxuICAnbGVmdCcsXHJcbiAgJ2xlZnQtc3RhcnQnLFxyXG4gICdsZWZ0LWVuZCcsXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICBkZWZhdWx0UGxhY2VtZW50OiAndG9wJyxcclxuICBkZWZhdWx0Q2xhc3M6ICd2dWUtdG9vbHRpcC10aGVtZScsXHJcbiAgZGVmYXVsdFRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxyXG4gIGRlZmF1bHREZWxheTogMCxcclxuICBkZWZhdWx0VHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcclxuICBkZWZhdWx0T2Zmc2V0OiAwLFxyXG4gIGRlZmF1bHRDb250YWluZXI6ICdib2R5JyxcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3B0aW9ucyAob3B0aW9ucykge1xyXG4gIHJldHVybiB7XHJcbiAgICBwbGFjZW1lbnQ6IG9wdGlvbnMucGxhY2VtZW50IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRQbGFjZW1lbnQsXHJcbiAgICBkZWxheTogb3B0aW9ucy5kZWxheSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0RGVsYXksXHJcbiAgICB0ZW1wbGF0ZTogb3B0aW9ucy50ZW1wbGF0ZSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICB0cmlnZ2VyOiBvcHRpb25zLnRyaWdnZXIgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFRyaWdnZXIsXHJcbiAgICBvZmZzZXQ6IG9wdGlvbnMub2Zmc2V0IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRPZmZzZXQsXHJcbiAgICBjb250YWluZXI6IG9wdGlvbnMuY29udGFpbmVyIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDb250YWluZXIsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnQgKHZhbHVlLCBtb2RpZmllcnMpIHtcclxuICBsZXQgcGxhY2VtZW50ID0gdmFsdWUucGxhY2VtZW50XHJcbiAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB7XHJcbiAgICBpZiAobW9kaWZpZXJzW3Bvc10pIHtcclxuICAgICAgcGxhY2VtZW50ID0gcG9zXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwbGFjZW1lbnRcclxufVxyXG5cclxuY2xhc3MgU3VwZXJUb29sdGlwIGV4dGVuZHMgVG9vbHRpcCB7XHJcbiAgc2V0Q2xhc3NlcyAoY2xhc3Nlcykge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLl90b29sdGlwTm9kZVxyXG5cclxuICAgIGlmIChlbCkge1xyXG4gICAgICBjb25zdCBvbGRDbGFzc2VzID0gdGhpcy5fb2xkQ2xhc3Nlc1xyXG4gICAgICBpZiAoY2xhc3Nlcykge1xyXG4gICAgICAgIGlmIChvbGRDbGFzc2VzKSB7XHJcbiAgICAgICAgICByZXBsYWNlQ2xhc3NlcyhlbCwgY2xhc3Nlcywgb2xkQ2xhc3NlcylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWRkQ2xhc3NlcyhlbCwgY2xhc3NlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAob2xkQ2xhc3Nlcykge1xyXG4gICAgICAgIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fb2xkQ2xhc3NlcyA9IGNsYXNzZXNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3BlbmRpbmdDbGFzc2VzID0gY2xhc3Nlc1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NsYXNzZXMgPSBjbGFzc2VzXHJcbiAgfVxyXG5cclxuICBzZXRDb250ZW50IChjb250ZW50KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMudGl0bGUgPSBjb250ZW50XHJcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcclxuICAgICAgY29uc3QgZWwgPSB0aGlzLl90b29sdGlwTm9kZS5xdWVyeVNlbGVjdG9yKHRoaXMuaW5uZXJTZWxlY3RvcilcclxuXHJcbiAgICAgIGlmIChlbCkge1xyXG4gICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gJydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gY29udGVudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zIChvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zKVxyXG5cclxuICAgIGxldCBuZWVkUG9wcGVyVXBkYXRlID0gZmFsc2VcclxuICAgIGxldCBuZWVkUmVzdGFydCA9IGZhbHNlXHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ICE9PSBvcHRpb25zLm9mZnNldCB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50ICE9PSBvcHRpb25zLnBsYWNlbWVudFxyXG4gICAgKSB7XHJcbiAgICAgIG5lZWRQb3BwZXJVcGRhdGUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm9wdGlvbnMudGVtcGxhdGUgIT09IG9wdGlvbnMudGVtcGxhdGUgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLnRyaWdnZXIgIT09IG9wdGlvbnMudHJpZ2dlciB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyICE9PSBvcHRpb25zLmNvbnRhaW5lclxyXG4gICAgKSB7XHJcbiAgICAgIG5lZWRSZXN0YXJ0ID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcclxuICAgICAgaWYgKG5lZWRSZXN0YXJ0KSB7XHJcbiAgICAgICAgY29uc3QgaXNPcGVuID0gdGhpcy5faXNPcGVuXHJcblxyXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpXHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHR5cGVvZiB0aGlzLm9wdGlvbnMudHJpZ2dlciA9PT0gJ3N0cmluZydcclxuICAgICAgICAgID8gb3B0aW9ucy50cmlnZ2VyXHJcbiAgICAgICAgICAgIC5zcGxpdCgnICcpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgdHJpZ2dlciA9PiBbJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10uaW5kZXhPZih0cmlnZ2VyKSAhPT0gLTFcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgOiBbXVxyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCBldmVudHMsIHRoaXMub3B0aW9ucylcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDbGFzc2VzKHRoaXMuX2NsYXNzZXMpXHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2hvdygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKG5lZWRQb3BwZXJVcGRhdGUpIHtcclxuICAgICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jcmVhdGUgKC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9jcmVhdGUoLi4uYXJncylcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnRyaWdnZXIuaW5kZXhPZignaG92ZXInKSAhPT0gLTEpIHtcclxuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhpZGUpXHJcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG5cclxuICBfZGlzcG9zZSAoKSB7XHJcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcclxuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGlkZSlcclxuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGUpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZXZlbnRzLmZvckVhY2goKHsgZnVuYywgZXZlbnQgfSkgPT4ge1xyXG4gICAgICB0aGlzLnJlZmVyZW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jKVxyXG4gICAgfSlcclxuICAgIHRoaXMuX2V2ZW50cyA9IFtdXHJcbiAgICByZXR1cm4gc3VwZXIuX2Rpc3Bvc2UoKVxyXG4gIH1cclxuXHJcbiAgX3Nob3cgKC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9zaG93KC4uLmFyZ3MpXHJcblxyXG4gICAgaWYgKHRoaXMuX3BlbmRpbmdDbGFzc2VzKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3Nlcyh0aGlzLl9wZW5kaW5nQ2xhc3NlcylcclxuICAgICAgdGhpcy5fcGVuZGluZ0NsYXNzZXMgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRml4IHBvc2l0aW9uXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxyXG4gICAgfSwgMClcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb29sdGlwIChlbCwgdmFsdWUsIG1vZGlmaWVycykge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZS5jb250ZW50IHx8IHZhbHVlXHJcbiAgbGV0IGNsYXNzZXMgPSB2YWx1ZS5jbGFzc2VzIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzc1xyXG5cclxuICBjb25zdCB0b29sdGlwID0gZWwuX3Rvb2x0aXAgPSBuZXcgU3VwZXJUb29sdGlwKGVsLCB7XHJcbiAgICB0aXRsZTogY29udGVudCxcclxuICAgIGh0bWw6IHRydWUsXHJcbiAgICAuLi5nZXRPcHRpb25zKHtcclxuICAgICAgLi4udmFsdWUsXHJcbiAgICAgIHBsYWNlbWVudDogZ2V0UGxhY2VtZW50KHZhbHVlLCBtb2RpZmllcnMpLFxyXG4gICAgfSksXHJcbiAgfSlcclxuICB0b29sdGlwLnNldENsYXNzZXMoY2xhc3NlcylcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzdHJveVRvb2x0aXAgKGVsKSB7XHJcbiAgaWYgKGVsLl90b29sdGlwKSB7XHJcbiAgICBlbC5fdG9vbHRpcC5kaXNwb3NlKClcclxuICAgIGRlbGV0ZSBlbC5fdG9vbHRpcFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGlyZWN0aXZlID0ge1xyXG4gIG9wdGlvbnM6IGRlZmF1bHRPcHRpb25zLFxyXG4gIGJpbmQgKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMgfSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHZhbHVlICYmIHZhbHVlLmNvbnRlbnQgfHwgdmFsdWVcclxuICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZSAoZWwsIHsgdmFsdWUsIG9sZFZhbHVlLCBtb2RpZmllcnMgfSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHZhbHVlICYmIHZhbHVlLmNvbnRlbnQgfHwgdmFsdWVcclxuICAgIGlmICghY29udGVudCkge1xyXG4gICAgICBkZXN0cm95VG9vbHRpcChlbClcclxuICAgIH0gZWxzZSBpZiAoZWwuX3Rvb2x0aXApIHtcclxuICAgICAgY29uc3QgdG9vbHRpcCA9IGVsLl90b29sdGlwXHJcbiAgICAgIC8vIENvbnRlbnRcclxuICAgICAgdG9vbHRpcC5zZXRDb250ZW50KGNvbnRlbnQpXHJcbiAgICAgIC8vIENTUyBDbGFzc2VzXHJcbiAgICAgIHRvb2x0aXAuc2V0Q2xhc3NlcygodmFsdWUgJiYgdmFsdWUuY2xhc3NlcykgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdENsYXNzKVxyXG4gICAgICAvLyBPcHRpb25zXHJcbiAgICAgIHRvb2x0aXAuc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgcGxhY2VtZW50OiBnZXRQbGFjZW1lbnQodmFsdWUsIG1vZGlmaWVycyksXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjcmVhdGVUb29sdGlwKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdW5iaW5kIChlbCkge1xyXG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlyZWN0aXZlXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92LXRvb2x0aXAuanMiLCJcbmZ1bmN0aW9uIGNvbnZlcnRUb0FycmF5ICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpXHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3NlcyAoZWwsIGNsYXNzZXMpIHtcclxuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcclxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGMpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMgKGVsLCBjbGFzc2VzKSB7XHJcbiAgY2xhc3NlcyA9IGNvbnZlcnRUb0FycmF5KGNsYXNzZXMpXHJcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2xhc3NlcyAoZWwsIG5ld0NsYXNzZXMsIG9sZENsYXNzZXMpIHtcclxuICByZW1vdmVDbGFzc2VzKGVsLCBvbGRDbGFzc2VzKVxyXG4gIGFkZENsYXNzZXMoZWwsIG5ld0NsYXNzZXMpXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG9vbHRpcC5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRvb2x0aXAuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdnRvb2x0aXAsIHsgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3YtdG9vbHRpcCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsIChWdWUsIG9wdGlvbnMpIHtcclxuICBpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHJldHVyblxyXG4gIGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZVxyXG5cclxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgfHwge30pXHJcbiAgdnRvb2x0aXAub3B0aW9ucyA9IG9wdGlvbnNcclxuICBWdWUuZGlyZWN0aXZlKCd0b29sdGlwJywgdnRvb2x0aXApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBWVG9vbHRpcCA9IHZ0b29sdGlwXHJcblxyXG5jb25zdCBwbHVnaW4gPSB7XHJcbiAgaW5zdGFsbCxcclxufVxyXG5cclxuLy8gQXV0by1pbnN0YWxsXHJcbmxldCBHbG9iYWxWdWUgPSBudWxsXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIEdsb2JhbFZ1ZSA9IHdpbmRvdy5WdWVcclxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xyXG4gIEdsb2JhbFZ1ZSA9IGdsb2JhbC5WdWVcclxufVxyXG5pZiAoR2xvYmFsVnVlKSB7XHJcbiAgR2xvYmFsVnVlLnVzZShwbHVnaW4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9