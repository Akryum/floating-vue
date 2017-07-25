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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDk2ZjBlZWZmNjU3N2Y5Mzg4NDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRvb2x0aXAuanNcIiJdLCJuYW1lcyI6WyJzdGF0ZSIsImVuYWJsZWQiLCJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50IiwidW5kZWZpbmVkIiwiZGVmYXVsdFBvcHBlck9wdGlvbnMiLCJnZXRPcHRpb25zIiwib3B0aW9ucyIsInBsYWNlbWVudCIsImRpcmVjdGl2ZSIsImRlbGF5IiwidGVtcGxhdGUiLCJ0cmlnZ2VyIiwib2Zmc2V0IiwiY29udGFpbmVyIiwiYm91bmRhcmllc0VsZW1lbnQiLCJwb3BwZXJPcHRpb25zIiwiZ2V0UGxhY2VtZW50IiwidmFsdWUiLCJtb2RpZmllcnMiLCJwb3MiLCJTdXBlclRvb2x0aXAiLCJjbGFzc2VzIiwiZWwiLCJfdG9vbHRpcE5vZGUiLCJvbGRDbGFzc2VzIiwiX29sZENsYXNzZXMiLCJyZXBsYWNlQ2xhc3NlcyIsImFkZENsYXNzZXMiLCJyZW1vdmVDbGFzc2VzIiwiX3BlbmRpbmdDbGFzc2VzIiwiX2NsYXNzZXMiLCJjb250ZW50IiwidGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJTZWxlY3RvciIsImlubmVySFRNTCIsInBvcHBlckluc3RhbmNlIiwidXBkYXRlIiwibmVlZFBvcHBlclVwZGF0ZSIsIm5lZWRSZXN0YXJ0Iiwia2V5IiwiaXNPcGVuIiwiX2lzT3BlbiIsImRpc3Bvc2UiLCJldmVudHMiLCJzcGxpdCIsImZpbHRlciIsImluZGV4T2YiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJyZWZlcmVuY2UiLCJzZXRDbGFzc2VzIiwic2hvdyIsImFyZ3MiLCJyZXN1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXZlbnRzIiwiZm9yRWFjaCIsImZ1bmMiLCJldmVudCIsInNldFRpbWVvdXQiLCJjcmVhdGVUb29sdGlwIiwib3B0cyIsImh0bWwiLCJ0b29sdGlwIiwiX3Rvb2x0aXAiLCJkZXN0cm95VG9vbHRpcCIsImJpbmQiLCJvbGRWYWx1ZSIsInNldENvbnRlbnQiLCJzZXRPcHRpb25zIiwidW5iaW5kIiwiaW5zdGFsbCIsIlZ1ZSIsImluc3RhbGxlZCIsIk9iamVjdCIsImFzc2lnbiIsInZ0b29sdGlwIiwiVlRvb2x0aXAiLCJwbHVnaW4iLCJHbG9iYWxWdWUiLCJ3aW5kb3ciLCJnbG9iYWwiLCJ1c2UiLCJjb252ZXJ0VG9BcnJheSIsImNsYXNzTGlzdCIsImFkZCIsImMiLCJyZW1vdmUiLCJuZXdDbGFzc2VzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOztBQUVBOztB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T0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QkEsWUFBUUEsTUFBTTRCLEtBQU4sQ0FBWSxHQUFaLENBQVI7QUFDRDtBQUNELFNBQU81QixLQUFQO0FBQ0Q7O0FBRU0sU0FBU1UsVUFBVCxDQUFxQkwsRUFBckIsRUFBeUJELE9BQXpCLEVBQWtDO0FBQ3ZDQSxZQUFVZ0UsZUFBZWhFLE9BQWYsQ0FBVjtBQUNBQSxVQUFRcUMsT0FBUixDQUFnQixhQUFLO0FBQ25CcEMsT0FBR2dFLFNBQUgsQ0FBYUMsR0FBYixDQUFpQkMsQ0FBakI7QUFDRCxHQUZEO0FBR0Q7O0FBRU0sU0FBUzVELGFBQVQsQ0FBd0JOLEVBQXhCLEVBQTRCRCxPQUE1QixFQUFxQztBQUMxQ0EsWUFBVWdFLGVBQWVoRSxPQUFmLENBQVY7QUFDQUEsVUFBUXFDLE9BQVIsQ0FBZ0IsYUFBSztBQUNuQnBDLE9BQUdnRSxTQUFILENBQWFHLE1BQWIsQ0FBb0JELENBQXBCO0FBQ0QsR0FGRDtBQUdEOztBQUVNLFNBQVM5RCxjQUFULENBQXlCSixFQUF6QixFQUE2Qm9FLFVBQTdCLEVBQXlDbEUsVUFBekMsRUFBcUQ7QUFDMURJLGdCQUFjTixFQUFkLEVBQWtCRSxVQUFsQjtBQUNBRyxhQUFXTCxFQUFYLEVBQWVvRSxVQUFmO0FBQ0QsQzs7Ozs7O0FDekJELHVDIiwiZmlsZSI6InYtdG9vbHRpcC5jb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ5NmYwZWVmZjY1NzdmOTM4ODQyIiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAndG9vbHRpcC5qcydcclxuXHJcbmltcG9ydCB7IGFkZENsYXNzZXMsIHJlbW92ZUNsYXNzZXMsIHJlcGxhY2VDbGFzc2VzIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBsZXQgc3RhdGUgPSB7XHJcbiAgZW5hYmxlZDogdHJ1ZSxcclxufVxyXG5cclxuY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICd0b3AnLFxyXG4gICd0b3Atc3RhcnQnLFxyXG4gICd0b3AtZW5kJyxcclxuICAncmlnaHQnLFxyXG4gICdyaWdodC1zdGFydCcsXHJcbiAgJ3JpZ2h0LWVuZCcsXHJcbiAgJ2JvdHRvbScsXHJcbiAgJ2JvdHRvbS1zdGFydCcsXHJcbiAgJ2JvdHRvbS1lbmQnLFxyXG4gICdsZWZ0JyxcclxuICAnbGVmdC1zdGFydCcsXHJcbiAgJ2xlZnQtZW5kJyxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIGRlZmF1bHRQbGFjZW1lbnQ6ICd0b3AnLFxyXG4gIGRlZmF1bHRDbGFzczogJ3Z1ZS10b29sdGlwLXRoZW1lJyxcclxuICBkZWZhdWx0VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXHJcbiAgZGVmYXVsdERlbGF5OiAwLFxyXG4gIGRlZmF1bHRUcmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxyXG4gIGRlZmF1bHRPZmZzZXQ6IDAsXHJcbiAgZGVmYXVsdENvbnRhaW5lcjogJ2JvZHknLFxyXG4gIGRlZmF1bHRCb3VuZGFyaWVzRWxlbWVudDogdW5kZWZpbmVkLFxyXG4gIGRlZmF1bHRQb3BwZXJPcHRpb25zOiB7fSxcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3B0aW9ucyAob3B0aW9ucykge1xyXG4gIHJldHVybiB7XHJcbiAgICBwbGFjZW1lbnQ6IG9wdGlvbnMucGxhY2VtZW50IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRQbGFjZW1lbnQsXHJcbiAgICBkZWxheTogb3B0aW9ucy5kZWxheSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0RGVsYXksXHJcbiAgICB0ZW1wbGF0ZTogb3B0aW9ucy50ZW1wbGF0ZSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICB0cmlnZ2VyOiBvcHRpb25zLnRyaWdnZXIgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFRyaWdnZXIsXHJcbiAgICBvZmZzZXQ6IG9wdGlvbnMub2Zmc2V0IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRPZmZzZXQsXHJcbiAgICBjb250YWluZXI6IG9wdGlvbnMuY29udGFpbmVyIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDb250YWluZXIsXHJcbiAgICBib3VuZGFyaWVzRWxlbWVudDogb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Qm91bmRhcmllc0VsZW1lbnQsXHJcbiAgICBwb3BwZXJPcHRpb25zOiBvcHRpb25zLnBvcHBlck9wdGlvbnMgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFBvcHBlck9wdGlvbnMsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnQgKHZhbHVlLCBtb2RpZmllcnMpIHtcclxuICBsZXQgcGxhY2VtZW50ID0gdmFsdWUucGxhY2VtZW50XHJcbiAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB7XHJcbiAgICBpZiAobW9kaWZpZXJzW3Bvc10pIHtcclxuICAgICAgcGxhY2VtZW50ID0gcG9zXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwbGFjZW1lbnRcclxufVxyXG5cclxuY2xhc3MgU3VwZXJUb29sdGlwIGV4dGVuZHMgVG9vbHRpcCB7XHJcbiAgc2V0Q2xhc3NlcyAoY2xhc3Nlcykge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLl90b29sdGlwTm9kZVxyXG5cclxuICAgIGlmIChlbCkge1xyXG4gICAgICBjb25zdCBvbGRDbGFzc2VzID0gdGhpcy5fb2xkQ2xhc3Nlc1xyXG4gICAgICBpZiAoY2xhc3Nlcykge1xyXG4gICAgICAgIGlmIChvbGRDbGFzc2VzKSB7XHJcbiAgICAgICAgICByZXBsYWNlQ2xhc3NlcyhlbCwgY2xhc3Nlcywgb2xkQ2xhc3NlcylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWRkQ2xhc3NlcyhlbCwgY2xhc3NlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAob2xkQ2xhc3Nlcykge1xyXG4gICAgICAgIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fb2xkQ2xhc3NlcyA9IGNsYXNzZXNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3BlbmRpbmdDbGFzc2VzID0gY2xhc3Nlc1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NsYXNzZXMgPSBjbGFzc2VzXHJcbiAgfVxyXG5cclxuICBzZXRDb250ZW50IChjb250ZW50KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMudGl0bGUgPSBjb250ZW50XHJcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcclxuICAgICAgY29uc3QgZWwgPSB0aGlzLl90b29sdGlwTm9kZS5xdWVyeVNlbGVjdG9yKHRoaXMuaW5uZXJTZWxlY3RvcilcclxuXHJcbiAgICAgIGlmIChlbCkge1xyXG4gICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gJydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gY29udGVudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zIChvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zKVxyXG5cclxuICAgIGxldCBuZWVkUG9wcGVyVXBkYXRlID0gZmFsc2VcclxuICAgIGxldCBuZWVkUmVzdGFydCA9IGZhbHNlXHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ICE9PSBvcHRpb25zLm9mZnNldCB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50ICE9PSBvcHRpb25zLnBsYWNlbWVudFxyXG4gICAgKSB7XHJcbiAgICAgIG5lZWRQb3BwZXJVcGRhdGUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm9wdGlvbnMudGVtcGxhdGUgIT09IG9wdGlvbnMudGVtcGxhdGUgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLnRyaWdnZXIgIT09IG9wdGlvbnMudHJpZ2dlciB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyICE9PSBvcHRpb25zLmNvbnRhaW5lclxyXG4gICAgKSB7XHJcbiAgICAgIG5lZWRSZXN0YXJ0ID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcclxuICAgICAgaWYgKG5lZWRSZXN0YXJ0KSB7XHJcbiAgICAgICAgY29uc3QgaXNPcGVuID0gdGhpcy5faXNPcGVuXHJcblxyXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpXHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHR5cGVvZiB0aGlzLm9wdGlvbnMudHJpZ2dlciA9PT0gJ3N0cmluZydcclxuICAgICAgICAgID8gb3B0aW9ucy50cmlnZ2VyXHJcbiAgICAgICAgICAgIC5zcGxpdCgnICcpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgdHJpZ2dlciA9PiBbJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10uaW5kZXhPZih0cmlnZ2VyKSAhPT0gLTFcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgOiBbXVxyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCBldmVudHMsIHRoaXMub3B0aW9ucylcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDbGFzc2VzKHRoaXMuX2NsYXNzZXMpXHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2hvdygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKG5lZWRQb3BwZXJVcGRhdGUpIHtcclxuICAgICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jcmVhdGUgKC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9jcmVhdGUoLi4uYXJncylcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnRyaWdnZXIuaW5kZXhPZignaG92ZXInKSAhPT0gLTEpIHtcclxuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhpZGUpXHJcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG5cclxuICBfZGlzcG9zZSAoKSB7XHJcbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcclxuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGlkZSlcclxuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGUpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZXZlbnRzLmZvckVhY2goKHsgZnVuYywgZXZlbnQgfSkgPT4ge1xyXG4gICAgICB0aGlzLnJlZmVyZW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jKVxyXG4gICAgfSlcclxuICAgIHRoaXMuX2V2ZW50cyA9IFtdXHJcbiAgICByZXR1cm4gc3VwZXIuX2Rpc3Bvc2UoKVxyXG4gIH1cclxuXHJcbiAgX3Nob3cgKC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9zaG93KC4uLmFyZ3MpXHJcblxyXG4gICAgaWYgKHRoaXMuX3BlbmRpbmdDbGFzc2VzKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3Nlcyh0aGlzLl9wZW5kaW5nQ2xhc3NlcylcclxuICAgICAgdGhpcy5fcGVuZGluZ0NsYXNzZXMgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRml4IHBvc2l0aW9uXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxyXG4gICAgfSwgMClcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb29sdGlwIChlbCwgdmFsdWUsIG1vZGlmaWVycykge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZS5jb250ZW50IHx8IHZhbHVlXHJcbiAgbGV0IGNsYXNzZXMgPSB2YWx1ZS5jbGFzc2VzIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzc1xyXG5cclxuICBjb25zdCBvcHRzID0ge1xyXG4gICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICBodG1sOiB0cnVlLFxyXG4gICAgLi4uZ2V0T3B0aW9ucyh7XHJcbiAgICAgIC4uLnZhbHVlLFxyXG4gICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcclxuICAgIH0pLFxyXG4gIH1cclxuICBjb25zdCB0b29sdGlwID0gZWwuX3Rvb2x0aXAgPSBuZXcgU3VwZXJUb29sdGlwKGVsLCBvcHRzKVxyXG4gIHRvb2x0aXAuc2V0Q2xhc3NlcyhjbGFzc2VzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZXN0cm95VG9vbHRpcCAoZWwpIHtcclxuICBpZiAoZWwuX3Rvb2x0aXApIHtcclxuICAgIGVsLl90b29sdGlwLmRpc3Bvc2UoKVxyXG4gICAgZGVsZXRlIGVsLl90b29sdGlwXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkaXJlY3RpdmUgPSB7XHJcbiAgb3B0aW9uczogZGVmYXVsdE9wdGlvbnMsXHJcbiAgYmluZCAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycyB9KSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdmFsdWUgJiYgdmFsdWUuY29udGVudCB8fCB2YWx1ZVxyXG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXHJcbiAgICBpZiAoY29udGVudCAmJiBzdGF0ZS5lbmFibGVkKSB7XHJcbiAgICAgIGNyZWF0ZVRvb2x0aXAoZWwsIHZhbHVlLCBtb2RpZmllcnMpXHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGUgKGVsLCB7IHZhbHVlLCBvbGRWYWx1ZSwgbW9kaWZpZXJzIH0pIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZSAmJiB2YWx1ZS5jb250ZW50IHx8IHZhbHVlXHJcbiAgICBpZiAoIWNvbnRlbnQgfHwgIXN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgZGVzdHJveVRvb2x0aXAoZWwpXHJcbiAgICB9IGVsc2UgaWYgKGVsLl90b29sdGlwKSB7XHJcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBlbC5fdG9vbHRpcFxyXG4gICAgICAvLyBDb250ZW50XHJcbiAgICAgIHRvb2x0aXAuc2V0Q29udGVudChjb250ZW50KVxyXG4gICAgICAvLyBDU1MgQ2xhc3Nlc1xyXG4gICAgICB0b29sdGlwLnNldENsYXNzZXMoKHZhbHVlICYmIHZhbHVlLmNsYXNzZXMpIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzcylcclxuICAgICAgLy8gT3B0aW9uc1xyXG4gICAgICB0b29sdGlwLnNldE9wdGlvbnMoe1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIHBsYWNlbWVudDogZ2V0UGxhY2VtZW50KHZhbHVlLCBtb2RpZmllcnMpLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcclxuICAgIH1cclxuICB9LFxyXG4gIHVuYmluZCAoZWwpIHtcclxuICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpcmVjdGl2ZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdi10b29sdGlwLmpzIiwiaW1wb3J0IHZ0b29sdGlwLCB7IGRlZmF1bHRPcHRpb25zLCBzdGF0ZSB9IGZyb20gJy4vdi10b29sdGlwJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xyXG4gIGlmIChpbnN0YWxsLmluc3RhbGxlZCkgcmV0dXJuXHJcbiAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlXHJcblxyXG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyB8fCB7fSlcclxuICB2dG9vbHRpcC5vcHRpb25zID0gb3B0aW9uc1xyXG4gIFZ1ZS5kaXJlY3RpdmUoJ3Rvb2x0aXAnLCB2dG9vbHRpcClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFZUb29sdGlwID0gdnRvb2x0aXBcclxuXHJcbmNvbnN0IHBsdWdpbiA9IHtcclxuICBpbnN0YWxsLFxyXG5cclxuICBnZXQgZW5hYmxlZCAoKSB7XHJcbiAgICByZXR1cm4gc3RhdGUuZW5hYmxlZFxyXG4gIH0sXHJcblxyXG4gIHNldCBlbmFibGVkICh2YWx1ZSkge1xyXG4gICAgc3RhdGUuZW5hYmxlZCA9IHZhbHVlXHJcbiAgfSxcclxufVxyXG5cclxuLy8gQXV0by1pbnN0YWxsXHJcbmxldCBHbG9iYWxWdWUgPSBudWxsXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIEdsb2JhbFZ1ZSA9IHdpbmRvdy5WdWVcclxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xyXG4gIEdsb2JhbFZ1ZSA9IGdsb2JhbC5WdWVcclxufVxyXG5pZiAoR2xvYmFsVnVlKSB7XHJcbiAgR2xvYmFsVnVlLnVzZShwbHVnaW4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJcbmZ1bmN0aW9uIGNvbnZlcnRUb0FycmF5ICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpXHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3NlcyAoZWwsIGNsYXNzZXMpIHtcclxuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcclxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGMpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMgKGVsLCBjbGFzc2VzKSB7XHJcbiAgY2xhc3NlcyA9IGNvbnZlcnRUb0FycmF5KGNsYXNzZXMpXHJcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2xhc3NlcyAoZWwsIG5ld0NsYXNzZXMsIG9sZENsYXNzZXMpIHtcclxuICByZW1vdmVDbGFzc2VzKGVsLCBvbGRDbGFzc2VzKVxyXG4gIGFkZENsYXNzZXMoZWwsIG5ld0NsYXNzZXMpXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG9vbHRpcC5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRvb2x0aXAuanNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9