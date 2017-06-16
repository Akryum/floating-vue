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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultOptions; });
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

/* harmony default export */ __webpack_exports__["default"] = plugin;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDEwNDIyYWJjZjE3M2IyODk5YjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG9vbHRpcC5qc1wiIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImVuYWJsZWQiLCJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJwbGFjZW1lbnQiLCJkaXJlY3RpdmUiLCJkZWxheSIsInRlbXBsYXRlIiwidHJpZ2dlciIsIm9mZnNldCIsImNvbnRhaW5lciIsImdldFBsYWNlbWVudCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zIiwiU3VwZXJUb29sdGlwIiwiY2xhc3NlcyIsImVsIiwiX3Rvb2x0aXBOb2RlIiwib2xkQ2xhc3NlcyIsIl9vbGRDbGFzc2VzIiwicmVwbGFjZUNsYXNzZXMiLCJhZGRDbGFzc2VzIiwicmVtb3ZlQ2xhc3NlcyIsIl9wZW5kaW5nQ2xhc3NlcyIsIl9jbGFzc2VzIiwiY29udGVudCIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJpbm5lckhUTUwiLCJwb3BwZXJJbnN0YW5jZSIsInVwZGF0ZSIsIm5lZWRQb3BwZXJVcGRhdGUiLCJuZWVkUmVzdGFydCIsImtleSIsImlzT3BlbiIsIl9pc09wZW4iLCJkaXNwb3NlIiwiZXZlbnRzIiwic3BsaXQiLCJmaWx0ZXIiLCJpbmRleE9mIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwicmVmZXJlbmNlIiwic2V0Q2xhc3NlcyIsInNob3ciLCJhcmdzIiwicmVzdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2V2ZW50cyIsImZvckVhY2giLCJmdW5jIiwiZXZlbnQiLCJzZXRUaW1lb3V0IiwiY3JlYXRlVG9vbHRpcCIsInRvb2x0aXAiLCJfdG9vbHRpcCIsImh0bWwiLCJkZXN0cm95VG9vbHRpcCIsImJpbmQiLCJvbGRWYWx1ZSIsInNldENvbnRlbnQiLCJzZXRPcHRpb25zIiwidW5iaW5kIiwiY29udmVydFRvQXJyYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjIiwicmVtb3ZlIiwibmV3Q2xhc3NlcyIsImluc3RhbGwiLCJWdWUiLCJpbnN0YWxsZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ2dG9vbHRpcCIsIlZUb29sdGlwIiwicGx1Z2luIiwiR2xvYmFsVnVlIiwid2luZG93IiwiZ2xvYmFsIiwidXNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRU8sSUFBSUEsUUFBUTtBQUNqQkMsV0FBUztBQURRLENBQVo7O0FBSVAsSUFBTUMsWUFBWSxDQUNoQixLQURnQixFQUVoQixXQUZnQixFQUdoQixTQUhnQixFQUloQixPQUpnQixFQUtoQixh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QUEsQ0FBTUMsT0FBTixHQUFnQm9CLEtBQWhCO0FBQ0Q7QUFUWSxDQUFmOztBQVlBO0FBQ0EsSUFBSXFFLFlBQVksSUFBaEI7QUFDQSxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNELGNBQVlDLE9BQU9SLEdBQW5CO0FBQ0QsQ0FGRCxNQUVPLElBQUksT0FBT1MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUN4Q0YsY0FBWUUsT0FBT1QsR0FBbkI7QUFDRDtBQUNELElBQUlPLFNBQUosRUFBZTtBQUNiQSxZQUFVRyxHQUFWLENBQWNKLE1BQWQ7QUFDRDs7QUFFRCw4REFBZUEsTUFBZixDIiwiZmlsZSI6InYtdG9vbHRpcC5jb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkMTA0MjJhYmNmMTczYjI4OTliMSIsImltcG9ydCBUb29sdGlwIGZyb20gJ3Rvb2x0aXAuanMnXHJcblxyXG5pbXBvcnQgeyBhZGRDbGFzc2VzLCByZW1vdmVDbGFzc2VzLCByZXBsYWNlQ2xhc3NlcyB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgbGV0IHN0YXRlID0ge1xyXG4gIGVuYWJsZWQ6IHRydWUsXHJcbn1cclxuXHJcbmNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAndG9wJyxcclxuICAndG9wLXN0YXJ0JyxcclxuICAndG9wLWVuZCcsXHJcbiAgJ3JpZ2h0JyxcclxuICAncmlnaHQtc3RhcnQnLFxyXG4gICdyaWdodC1lbmQnLFxyXG4gICdib3R0b20nLFxyXG4gICdib3R0b20tc3RhcnQnLFxyXG4gICdib3R0b20tZW5kJyxcclxuICAnbGVmdCcsXHJcbiAgJ2xlZnQtc3RhcnQnLFxyXG4gICdsZWZ0LWVuZCcsXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICBkZWZhdWx0UGxhY2VtZW50OiAndG9wJyxcclxuICBkZWZhdWx0Q2xhc3M6ICd2dWUtdG9vbHRpcC10aGVtZScsXHJcbiAgZGVmYXVsdFRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxyXG4gIGRlZmF1bHREZWxheTogMCxcclxuICBkZWZhdWx0VHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcclxuICBkZWZhdWx0T2Zmc2V0OiAwLFxyXG4gIGRlZmF1bHRDb250YWluZXI6ICdib2R5JyxcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3B0aW9ucyAob3B0aW9ucykge1xyXG4gIHJldHVybiB7XHJcbiAgICBwbGFjZW1lbnQ6IG9wdGlvbnMucGxhY2VtZW50IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRQbGFjZW1lbnQsXHJcbiAgICBkZWxheTogb3B0aW9ucy5kZWxheSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0RGVsYXksXHJcbiAgICB0ZW1wbGF0ZTogb3B0aW9ucy50ZW1wbGF0ZSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICB0cmlnZ2VyOiBvcHRpb25zLnRyaWdnZXIgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFRyaWdnZXIsXHJcbiAgICBvZmZzZXQ6IG9wdGlvbnMub2Zmc2V0IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRPZmZzZXQsXHJcbiAgICBjb250YWluZXI6IG9wdGlvbnMuY29udGFpbmVyIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDb250YWluZXIsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnQgKHZhbHVlLCBtb2RpZmllcnMpIHtcclxuICBsZXQgcGxhY2VtZW50ID0gdmFsdWUucGxhY2VtZW50XHJcbiAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB7XHJcbiAgICBpZiAobW9kaWZpZXJzW3Bvc10pIHtcclxuICAgICAgcGxhY2VtZW50ID0gcG9zXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwbGFjZW1lbnRcclxufVxyXG5cclxuY2xhc3MgU3VwZXJUb29sdGlwIGV4dGVuZHMgVG9vbHRpcCB7XHJcbiAgc2V0Q2xhc3NlcyAoY2xhc3Nlcykge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLl90b29sdGlwTm9kZVxyXG5cclxuICAgIGlmIChlbCkge1xyXG4gICAgICBjb25zdCBvbGRDbGFzc2VzID0gdGhpcy5fb2xkQ2xhc3Nlc1xyXG4gICAgICBpZiAoY2xhc3Nlcykge1xyXG4gICAgICAgIGlmIChvbGRDbGFzc2VzKSB7XHJcbiAgICAgICAgICByZXBsYWNlQ2xhc3NlcyhlbCwgY2xhc3Nlcywgb2xkQ2xhc3NlcylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWRkQ2xhc3NlcyhlbCwgY2xhc3NlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAob2xkQ2xhc3Nlcykge1xyXG4gICAgICAgIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fb2xkQ2xhc3NlcyA9IGNsYXNzZXNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3BlbmRpbmdDbGFzc2VzID0gY2xhc3Nlc1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NsYXNzZXMgPSBjbGFzc2VzXHJcbiAgfVxyXG5cclxuICBzZXRDb250ZW50IChjb250ZW50KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMudGl0bGUgPSBjb250ZW50XHJcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcclxuICAgICAgY29uc3QgZWwgPSB0aGlzLl90b29sdGlwTm9kZS5xdWVyeVNlbGVjdG9yKHRoaXMuaW5uZXJTZWxlY3RvcilcclxuXHJcbiAgICAgIGlmIChlbCkge1xyXG4gICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gJydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gY29udGVudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zIChvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zKVxyXG5cclxuICAgIGxldCBuZWVkUG9wcGVyVXBkYXRlID0gZmFsc2VcclxuICAgIGxldCBuZWVkUmVzdGFydCA9IGZhbHNlXHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ICE9PSBvcHRpb25zLm9mZnNldCB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50ICE9PSBvcHRpb25zLnBsYWNlbWVudFxyXG4gICAgKSB7XHJcbiAgICAgIG5lZWRQb3BwZXJVcGRhdGUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm9wdGlvbnMudGVtcGxhdGUgIT09IG9wdGlvbnMudGVtcGxhdGUgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLnRyaWdnZXIgIT09IG9wdGlvbnMudHJpZ2dlciB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyICE9PSBvcHRpb25zLmNvbnRhaW5lclxyXG4gICAgKSB7XHJcbiAgICAgIG5lZWRSZXN0YXJ0ID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcclxuICAgICAgaWYgKG5lZWRSZXN0YXJ0KSB7XHJcbiAgICAgICAgY29uc3QgaXNPcGVuID0gdGhpcy5faXNPcGVuXHJcblxyXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpXHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHR5cGVvZiB0aGlzLm9wdGlvbnMudHJpZ2dlciA9PT0gJ3N0cmluZydcclxuICAgICAgICAgID8gb3B0aW9ucy50cmlnZ2VyXHJcbiAgICAgICAgICAgIC5zcGxpdCgnICcpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgdHJpZ2dlciA9PiBbJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10uaW5kZXhPZih0cmlnZ2VyKSAhPT0gLTFcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgOiBbXVxyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCBldmVudHMsIHRoaXMub3B0aW9ucylcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDbGFzc2VzKHRoaXMuX2NsYXNzZXMpXHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2hvdygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKG5lZWRQb3BwZXJVcGRhdGUpIHtcclxuICAgICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jcmVhdGUgKC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9jcmVhdGUoLi4uYXJncylcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnRyaWdnZXIuaW5kZXhPZignaG92ZXInKSAhPT0gLTEpIHtcclxuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhpZGUpXHJcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG5cclxuICBfZGlzcG9zZSAoKSB7XHJcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcclxuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGlkZSlcclxuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGUpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZXZlbnRzLmZvckVhY2goKHsgZnVuYywgZXZlbnQgfSkgPT4ge1xyXG4gICAgICB0aGlzLnJlZmVyZW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jKVxyXG4gICAgfSlcclxuICAgIHRoaXMuX2V2ZW50cyA9IFtdXHJcbiAgICByZXR1cm4gc3VwZXIuX2Rpc3Bvc2UoKVxyXG4gIH1cclxuXHJcbiAgX3Nob3cgKC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9zaG93KC4uLmFyZ3MpXHJcblxyXG4gICAgaWYgKHRoaXMuX3BlbmRpbmdDbGFzc2VzKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3Nlcyh0aGlzLl9wZW5kaW5nQ2xhc3NlcylcclxuICAgICAgdGhpcy5fcGVuZGluZ0NsYXNzZXMgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRml4IHBvc2l0aW9uXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxyXG4gICAgfSwgMClcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb29sdGlwIChlbCwgdmFsdWUsIG1vZGlmaWVycykge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZS5jb250ZW50IHx8IHZhbHVlXHJcbiAgbGV0IGNsYXNzZXMgPSB2YWx1ZS5jbGFzc2VzIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzc1xyXG5cclxuICBjb25zdCB0b29sdGlwID0gZWwuX3Rvb2x0aXAgPSBuZXcgU3VwZXJUb29sdGlwKGVsLCB7XHJcbiAgICB0aXRsZTogY29udGVudCxcclxuICAgIGh0bWw6IHRydWUsXHJcbiAgICAuLi5nZXRPcHRpb25zKHtcclxuICAgICAgLi4udmFsdWUsXHJcbiAgICAgIHBsYWNlbWVudDogZ2V0UGxhY2VtZW50KHZhbHVlLCBtb2RpZmllcnMpLFxyXG4gICAgfSksXHJcbiAgfSlcclxuICB0b29sdGlwLnNldENsYXNzZXMoY2xhc3NlcylcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzdHJveVRvb2x0aXAgKGVsKSB7XHJcbiAgaWYgKGVsLl90b29sdGlwKSB7XHJcbiAgICBlbC5fdG9vbHRpcC5kaXNwb3NlKClcclxuICAgIGRlbGV0ZSBlbC5fdG9vbHRpcFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGlyZWN0aXZlID0ge1xyXG4gIG9wdGlvbnM6IGRlZmF1bHRPcHRpb25zLFxyXG4gIGJpbmQgKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMgfSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHZhbHVlICYmIHZhbHVlLmNvbnRlbnQgfHwgdmFsdWVcclxuICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxyXG4gICAgaWYgKGNvbnRlbnQgJiYgc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICBjcmVhdGVUb29sdGlwKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlIChlbCwgeyB2YWx1ZSwgb2xkVmFsdWUsIG1vZGlmaWVycyB9KSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdmFsdWUgJiYgdmFsdWUuY29udGVudCB8fCB2YWx1ZVxyXG4gICAgaWYgKCFjb250ZW50IHx8ICFzdGF0ZS5lbmFibGVkKSB7XHJcbiAgICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxyXG4gICAgfSBlbHNlIGlmIChlbC5fdG9vbHRpcCkge1xyXG4gICAgICBjb25zdCB0b29sdGlwID0gZWwuX3Rvb2x0aXBcclxuICAgICAgLy8gQ29udGVudFxyXG4gICAgICB0b29sdGlwLnNldENvbnRlbnQoY29udGVudClcclxuICAgICAgLy8gQ1NTIENsYXNzZXNcclxuICAgICAgdG9vbHRpcC5zZXRDbGFzc2VzKCh2YWx1ZSAmJiB2YWx1ZS5jbGFzc2VzKSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q2xhc3MpXHJcbiAgICAgIC8vIE9wdGlvbnNcclxuICAgICAgdG9vbHRpcC5zZXRPcHRpb25zKHtcclxuICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNyZWF0ZVRvb2x0aXAoZWwsIHZhbHVlLCBtb2RpZmllcnMpXHJcbiAgICB9XHJcbiAgfSxcclxuICB1bmJpbmQgKGVsKSB7XHJcbiAgICBkZXN0cm95VG9vbHRpcChlbClcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXJlY3RpdmVcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3YtdG9vbHRpcC5qcyIsIlxuZnVuY3Rpb24gY29udmVydFRvQXJyYXkgKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJylcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc2VzIChlbCwgY2xhc3Nlcykge1xyXG4gIGNsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxyXG4gIGNsYXNzZXMuZm9yRWFjaChjID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoYylcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyAoZWwsIGNsYXNzZXMpIHtcclxuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcclxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDbGFzc2VzIChlbCwgbmV3Q2xhc3Nlcywgb2xkQ2xhc3Nlcykge1xyXG4gIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXHJcbiAgYWRkQ2xhc3NlcyhlbCwgbmV3Q2xhc3NlcylcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0b29sdGlwLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidG9vbHRpcC5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB2dG9vbHRpcCwgeyBkZWZhdWx0T3B0aW9ucywgc3RhdGUgfSBmcm9tICcuL3YtdG9vbHRpcCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsIChWdWUsIG9wdGlvbnMpIHtcclxuICBpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHJldHVyblxyXG4gIGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZVxyXG5cclxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgfHwge30pXHJcbiAgdnRvb2x0aXAub3B0aW9ucyA9IG9wdGlvbnNcclxuICBWdWUuZGlyZWN0aXZlKCd0b29sdGlwJywgdnRvb2x0aXApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBWVG9vbHRpcCA9IHZ0b29sdGlwXHJcblxyXG5jb25zdCBwbHVnaW4gPSB7XHJcbiAgaW5zdGFsbCxcclxuXHJcbiAgZ2V0IGVuYWJsZWQgKCkge1xyXG4gICAgcmV0dXJuIHN0YXRlLmVuYWJsZWRcclxuICB9LFxyXG5cclxuICBzZXQgZW5hYmxlZCAodmFsdWUpIHtcclxuICAgIHN0YXRlLmVuYWJsZWQgPSB2YWx1ZVxyXG4gIH0sXHJcbn1cclxuXHJcbi8vIEF1dG8taW5zdGFsbFxyXG5sZXQgR2xvYmFsVnVlID0gbnVsbFxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBHbG9iYWxWdWUgPSB3aW5kb3cuVnVlXHJcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBHbG9iYWxWdWUgPSBnbG9iYWwuVnVlXHJcbn1cclxuaWYgKEdsb2JhbFZ1ZSkge1xyXG4gIEdsb2JhbFZ1ZS51c2UocGx1Z2luKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==