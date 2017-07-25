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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWZmMzdhMDRiYjU5NDRmYTY4ZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRvb2x0aXAuanNcIiJdLCJuYW1lcyI6WyJzdGF0ZSIsImVuYWJsZWQiLCJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJwbGFjZW1lbnQiLCJkaXJlY3RpdmUiLCJkZWxheSIsInRlbXBsYXRlIiwidHJpZ2dlciIsIm9mZnNldCIsImNvbnRhaW5lciIsImdldFBsYWNlbWVudCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zIiwiU3VwZXJUb29sdGlwIiwiY2xhc3NlcyIsImVsIiwiX3Rvb2x0aXBOb2RlIiwib2xkQ2xhc3NlcyIsIl9vbGRDbGFzc2VzIiwicmVwbGFjZUNsYXNzZXMiLCJhZGRDbGFzc2VzIiwicmVtb3ZlQ2xhc3NlcyIsIl9wZW5kaW5nQ2xhc3NlcyIsIl9jbGFzc2VzIiwiY29udGVudCIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJpbm5lckhUTUwiLCJwb3BwZXJJbnN0YW5jZSIsInVwZGF0ZSIsIm5lZWRQb3BwZXJVcGRhdGUiLCJuZWVkUmVzdGFydCIsImtleSIsImlzT3BlbiIsIl9pc09wZW4iLCJkaXNwb3NlIiwiZXZlbnRzIiwic3BsaXQiLCJmaWx0ZXIiLCJpbmRleE9mIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwicmVmZXJlbmNlIiwic2V0Q2xhc3NlcyIsInNob3ciLCJhcmdzIiwicmVzdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2V2ZW50cyIsImZvckVhY2giLCJmdW5jIiwiZXZlbnQiLCJzZXRUaW1lb3V0IiwiY3JlYXRlVG9vbHRpcCIsInRvb2x0aXAiLCJfdG9vbHRpcCIsImh0bWwiLCJkZXN0cm95VG9vbHRpcCIsImJpbmQiLCJvbGRWYWx1ZSIsInNldENvbnRlbnQiLCJzZXRPcHRpb25zIiwidW5iaW5kIiwiaW5zdGFsbCIsIlZ1ZSIsImluc3RhbGxlZCIsIk9iamVjdCIsImFzc2lnbiIsInZ0b29sdGlwIiwiVlRvb2x0aXAiLCJwbHVnaW4iLCJHbG9iYWxWdWUiLCJ3aW5kb3ciLCJnbG9iYWwiLCJ1c2UiLCJjb252ZXJ0VG9BcnJheSIsImNsYXNzTGlzdCIsImFkZCIsImMiLCJyZW1vdmUiLCJuZXdDbGFzc2VzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOztBQUVBOztBQUVPLElBQUlBLFFBQVE7QUFDakJDLFdBQVM7QUFEUSxDQUFaOztBQUlQLElBQU1DLFlBQVksQ0FDaEIsS0FEZ0IsRUFFaEIsV0FGZ0IsRUFHaEIsU0FIZ0IsRUFJaEIsT0FKZ0IsRUFL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Qk4sRUFBeEIsRUFBNEJELE9BQTVCLEVBQXFDO0FBQzFDQSxZQUFVK0QsZUFBZS9ELE9BQWYsQ0FBVjtBQUNBQSxVQUFRcUMsT0FBUixDQUFnQixhQUFLO0FBQ25CcEMsT0FBRytELFNBQUgsQ0FBYUcsTUFBYixDQUFvQkQsQ0FBcEI7QUFDRCxHQUZEO0FBR0Q7O0FBRU0sU0FBUzdELGNBQVQsQ0FBeUJKLEVBQXpCLEVBQTZCbUUsVUFBN0IsRUFBeUNqRSxVQUF6QyxFQUFxRDtBQUMxREksZ0JBQWNOLEVBQWQsRUFBa0JFLFVBQWxCO0FBQ0FHLGFBQVdMLEVBQVgsRUFBZW1FLFVBQWY7QUFDRCxDOzs7Ozs7QUN6QkQsdUMiLCJmaWxlIjoidi10b29sdGlwLmNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWZmMzdhMDRiYjU5NDRmYTY4ZWYiLCJpbXBvcnQgVG9vbHRpcCBmcm9tICd0b29sdGlwLmpzJ1xyXG5cclxuaW1wb3J0IHsgYWRkQ2xhc3NlcywgcmVtb3ZlQ2xhc3NlcywgcmVwbGFjZUNsYXNzZXMgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGxldCBzdGF0ZSA9IHtcclxuICBlbmFibGVkOiB0cnVlLFxyXG59XHJcblxyXG5jb25zdCBwb3NpdGlvbnMgPSBbXHJcbiAgJ3RvcCcsXHJcbiAgJ3RvcC1zdGFydCcsXHJcbiAgJ3RvcC1lbmQnLFxyXG4gICdyaWdodCcsXHJcbiAgJ3JpZ2h0LXN0YXJ0JyxcclxuICAncmlnaHQtZW5kJyxcclxuICAnYm90dG9tJyxcclxuICAnYm90dG9tLXN0YXJ0JyxcclxuICAnYm90dG9tLWVuZCcsXHJcbiAgJ2xlZnQnLFxyXG4gICdsZWZ0LXN0YXJ0JyxcclxuICAnbGVmdC1lbmQnLFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgZGVmYXVsdFBsYWNlbWVudDogJ3RvcCcsXHJcbiAgZGVmYXVsdENsYXNzOiAndnVlLXRvb2x0aXAtdGhlbWUnLFxyXG4gIGRlZmF1bHRUZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcclxuICBkZWZhdWx0RGVsYXk6IDAsXHJcbiAgZGVmYXVsdFRyaWdnZXI6ICdob3ZlciBmb2N1cycsXHJcbiAgZGVmYXVsdE9mZnNldDogMCxcclxuICBkZWZhdWx0Q29udGFpbmVyOiAnYm9keScsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9wdGlvbnMgKG9wdGlvbnMpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGxhY2VtZW50OiBvcHRpb25zLnBsYWNlbWVudCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0UGxhY2VtZW50LFxyXG4gICAgZGVsYXk6IG9wdGlvbnMuZGVsYXkgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdERlbGF5LFxyXG4gICAgdGVtcGxhdGU6IG9wdGlvbnMudGVtcGxhdGUgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFRlbXBsYXRlLFxyXG4gICAgdHJpZ2dlcjogb3B0aW9ucy50cmlnZ2VyIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRUcmlnZ2VyLFxyXG4gICAgb2Zmc2V0OiBvcHRpb25zLm9mZnNldCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0T2Zmc2V0LFxyXG4gICAgY29udGFpbmVyOiBvcHRpb25zLmNvbnRhaW5lciB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q29udGFpbmVyLFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50ICh2YWx1ZSwgbW9kaWZpZXJzKSB7XHJcbiAgbGV0IHBsYWNlbWVudCA9IHZhbHVlLnBsYWNlbWVudFxyXG4gIGZvciAoY29uc3QgcG9zIG9mIHBvc2l0aW9ucykge1xyXG4gICAgaWYgKG1vZGlmaWVyc1twb3NdKSB7XHJcbiAgICAgIHBsYWNlbWVudCA9IHBvc1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGxhY2VtZW50XHJcbn1cclxuXHJcbmNsYXNzIFN1cGVyVG9vbHRpcCBleHRlbmRzIFRvb2x0aXAge1xyXG4gIHNldENsYXNzZXMgKGNsYXNzZXMpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5fdG9vbHRpcE5vZGVcclxuXHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgY29uc3Qgb2xkQ2xhc3NlcyA9IHRoaXMuX29sZENsYXNzZXNcclxuICAgICAgaWYgKGNsYXNzZXMpIHtcclxuICAgICAgICBpZiAob2xkQ2xhc3Nlcykge1xyXG4gICAgICAgICAgcmVwbGFjZUNsYXNzZXMoZWwsIGNsYXNzZXMsIG9sZENsYXNzZXMpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFkZENsYXNzZXMoZWwsIGNsYXNzZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKG9sZENsYXNzZXMpIHtcclxuICAgICAgICByZW1vdmVDbGFzc2VzKGVsLCBvbGRDbGFzc2VzKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX29sZENsYXNzZXMgPSBjbGFzc2VzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9wZW5kaW5nQ2xhc3NlcyA9IGNsYXNzZXNcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jbGFzc2VzID0gY2xhc3Nlc1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudCAoY29udGVudCkge1xyXG4gICAgdGhpcy5vcHRpb25zLnRpdGxlID0gY29udGVudFxyXG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fdG9vbHRpcE5vZGUucXVlcnlTZWxlY3Rvcih0aGlzLmlubmVyU2VsZWN0b3IpXHJcblxyXG4gICAgICBpZiAoZWwpIHtcclxuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgIGVsLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsLmlubmVySFRNTCA9IGNvbnRlbnRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyAob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucylcclxuXHJcbiAgICBsZXQgbmVlZFBvcHBlclVwZGF0ZSA9IGZhbHNlXHJcbiAgICBsZXQgbmVlZFJlc3RhcnQgPSBmYWxzZVxyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5vcHRpb25zLm9mZnNldCAhPT0gb3B0aW9ucy5vZmZzZXQgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudCAhPT0gb3B0aW9ucy5wbGFjZW1lbnRcclxuICAgICkge1xyXG4gICAgICBuZWVkUG9wcGVyVXBkYXRlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5vcHRpb25zLnRlbXBsYXRlICE9PSBvcHRpb25zLnRlbXBsYXRlIHx8XHJcbiAgICAgIHRoaXMub3B0aW9ucy50cmlnZ2VyICE9PSBvcHRpb25zLnRyaWdnZXIgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLmNvbnRhaW5lciAhPT0gb3B0aW9ucy5jb250YWluZXJcclxuICAgICkge1xyXG4gICAgICBuZWVkUmVzdGFydCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XHJcbiAgICAgIGlmIChuZWVkUmVzdGFydCkge1xyXG4gICAgICAgIGNvbnN0IGlzT3BlbiA9IHRoaXMuX2lzT3BlblxyXG5cclxuICAgICAgICB0aGlzLmRpc3Bvc2UoKVxyXG5cclxuICAgICAgICBjb25zdCBldmVudHMgPSB0eXBlb2YgdGhpcy5vcHRpb25zLnRyaWdnZXIgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICA/IG9wdGlvbnMudHJpZ2dlclxyXG4gICAgICAgICAgICAuc3BsaXQoJyAnKVxyXG4gICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIHRyaWdnZXIgPT4gWydjbGljaycsICdob3ZlcicsICdmb2N1cyddLmluZGV4T2YodHJpZ2dlcikgIT09IC0xXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIDogW11cclxuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgZXZlbnRzLCB0aGlzLm9wdGlvbnMpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3Nlcyh0aGlzLl9jbGFzc2VzKVxyXG5cclxuICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3coKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChuZWVkUG9wcGVyVXBkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY3JlYXRlICguLi5hcmdzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fY3JlYXRlKC4uLmFyZ3MpXHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmlnZ2VyLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xKSB7XHJcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxyXG4gICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgX2Rpc3Bvc2UgKCkge1xyXG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XHJcbiAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhpZGUpXHJcbiAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2V2ZW50cy5mb3JFYWNoKCh7IGZ1bmMsIGV2ZW50IH0pID0+IHtcclxuICAgICAgdGhpcy5yZWZlcmVuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuYylcclxuICAgIH0pXHJcbiAgICB0aGlzLl9ldmVudHMgPSBbXVxyXG4gICAgcmV0dXJuIHN1cGVyLl9kaXNwb3NlKClcclxuICB9XHJcblxyXG4gIF9zaG93ICguLi5hcmdzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fc2hvdyguLi5hcmdzKVxyXG5cclxuICAgIGlmICh0aGlzLl9wZW5kaW5nQ2xhc3Nlcykge1xyXG4gICAgICB0aGlzLnNldENsYXNzZXModGhpcy5fcGVuZGluZ0NsYXNzZXMpXHJcbiAgICAgIHRoaXMuX3BlbmRpbmdDbGFzc2VzID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpeCBwb3NpdGlvblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcclxuICAgIH0sIDApXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9vbHRpcCAoZWwsIHZhbHVlLCBtb2RpZmllcnMpIHtcclxuICBjb25zdCBjb250ZW50ID0gdmFsdWUuY29udGVudCB8fCB2YWx1ZVxyXG4gIGxldCBjbGFzc2VzID0gdmFsdWUuY2xhc3NlcyB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q2xhc3NcclxuXHJcbiAgY29uc3QgdG9vbHRpcCA9IGVsLl90b29sdGlwID0gbmV3IFN1cGVyVG9vbHRpcChlbCwge1xyXG4gICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICBodG1sOiB0cnVlLFxyXG4gICAgLi4uZ2V0T3B0aW9ucyh7XHJcbiAgICAgIC4uLnZhbHVlLFxyXG4gICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcclxuICAgIH0pLFxyXG4gIH0pXHJcbiAgdG9vbHRpcC5zZXRDbGFzc2VzKGNsYXNzZXMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc3Ryb3lUb29sdGlwIChlbCkge1xyXG4gIGlmIChlbC5fdG9vbHRpcCkge1xyXG4gICAgZWwuX3Rvb2x0aXAuZGlzcG9zZSgpXHJcbiAgICBkZWxldGUgZWwuX3Rvb2x0aXBcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpcmVjdGl2ZSA9IHtcclxuICBvcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcclxuICBiaW5kIChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzIH0pIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZSAmJiB2YWx1ZS5jb250ZW50IHx8IHZhbHVlXHJcbiAgICBkZXN0cm95VG9vbHRpcChlbClcclxuICAgIGlmIChjb250ZW50ICYmIHN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZSAoZWwsIHsgdmFsdWUsIG9sZFZhbHVlLCBtb2RpZmllcnMgfSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHZhbHVlICYmIHZhbHVlLmNvbnRlbnQgfHwgdmFsdWVcclxuICAgIGlmICghY29udGVudCB8fCAhc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICBkZXN0cm95VG9vbHRpcChlbClcclxuICAgIH0gZWxzZSBpZiAoZWwuX3Rvb2x0aXApIHtcclxuICAgICAgY29uc3QgdG9vbHRpcCA9IGVsLl90b29sdGlwXHJcbiAgICAgIC8vIENvbnRlbnRcclxuICAgICAgdG9vbHRpcC5zZXRDb250ZW50KGNvbnRlbnQpXHJcbiAgICAgIC8vIENTUyBDbGFzc2VzXHJcbiAgICAgIHRvb2x0aXAuc2V0Q2xhc3NlcygodmFsdWUgJiYgdmFsdWUuY2xhc3NlcykgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdENsYXNzKVxyXG4gICAgICAvLyBPcHRpb25zXHJcbiAgICAgIHRvb2x0aXAuc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgcGxhY2VtZW50OiBnZXRQbGFjZW1lbnQodmFsdWUsIG1vZGlmaWVycyksXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjcmVhdGVUb29sdGlwKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdW5iaW5kIChlbCkge1xyXG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlyZWN0aXZlXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92LXRvb2x0aXAuanMiLCJpbXBvcnQgdnRvb2x0aXAsIHsgZGVmYXVsdE9wdGlvbnMsIHN0YXRlIH0gZnJvbSAnLi92LXRvb2x0aXAnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFsbCAoVnVlLCBvcHRpb25zKSB7XHJcbiAgaWYgKGluc3RhbGwuaW5zdGFsbGVkKSByZXR1cm5cclxuICBpbnN0YWxsLmluc3RhbGxlZCA9IHRydWVcclxuXHJcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIHx8IHt9KVxyXG4gIHZ0b29sdGlwLm9wdGlvbnMgPSBvcHRpb25zXHJcbiAgVnVlLmRpcmVjdGl2ZSgndG9vbHRpcCcsIHZ0b29sdGlwKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVlRvb2x0aXAgPSB2dG9vbHRpcFxyXG5cclxuY29uc3QgcGx1Z2luID0ge1xyXG4gIGluc3RhbGwsXHJcblxyXG4gIGdldCBlbmFibGVkICgpIHtcclxuICAgIHJldHVybiBzdGF0ZS5lbmFibGVkXHJcbiAgfSxcclxuXHJcbiAgc2V0IGVuYWJsZWQgKHZhbHVlKSB7XHJcbiAgICBzdGF0ZS5lbmFibGVkID0gdmFsdWVcclxuICB9LFxyXG59XHJcblxyXG4vLyBBdXRvLWluc3RhbGxcclxubGV0IEdsb2JhbFZ1ZSA9IG51bGxcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgR2xvYmFsVnVlID0gd2luZG93LlZ1ZVxyXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgR2xvYmFsVnVlID0gZ2xvYmFsLlZ1ZVxyXG59XHJcbmlmIChHbG9iYWxWdWUpIHtcclxuICBHbG9iYWxWdWUudXNlKHBsdWdpbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIlxuZnVuY3Rpb24gY29udmVydFRvQXJyYXkgKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJylcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc2VzIChlbCwgY2xhc3Nlcykge1xyXG4gIGNsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxyXG4gIGNsYXNzZXMuZm9yRWFjaChjID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoYylcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyAoZWwsIGNsYXNzZXMpIHtcclxuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcclxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDbGFzc2VzIChlbCwgbmV3Q2xhc3Nlcywgb2xkQ2xhc3Nlcykge1xyXG4gIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXHJcbiAgYWRkQ2xhc3NlcyhlbCwgbmV3Q2xhc3NlcylcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0b29sdGlwLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidG9vbHRpcC5qc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=