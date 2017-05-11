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
      }

      return result;
    }
  }, {
    key: '_dispose',
    value: function _dispose() {
      var _this2 = this;

      if (this._tooltipNode) {
        this._tooltipNode.removeEventListener('mouseenter', this.hide);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmM3NTBhMTdkYTA2YjE0OGRiYmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG9vbHRpcC5qc1wiIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJwbGFjZW1lbnQiLCJkaXJlY3RpdmUiLCJkZWxheSIsInRlbXBsYXRlIiwidHJpZ2dlciIsIm9mZnNldCIsImNvbnRhaW5lciIsImdldFBsYWNlbWVudCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zIiwiU3VwZXJUb29sdGlwIiwiY2xhc3NlcyIsImVsIiwiX3Rvb2x0aXBOb2RlIiwib2xkQ2xhc3NlcyIsIl9vbGRDbGFzc2VzIiwicmVwbGFjZUNsYXNzZXMiLCJhZGRDbGFzc2VzIiwicmVtb3ZlQ2xhc3NlcyIsIl9wZW5kaW5nQ2xhc3NlcyIsIl9jbGFzc2VzIiwiY29udGVudCIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJpbm5lckhUTUwiLCJwb3BwZXJJbnN0YW5jZSIsInVwZGF0ZSIsIm5lZWRQb3BwZXJVcGRhdGUiLCJuZWVkUmVzdGFydCIsImtleSIsImlzT3BlbiIsIl9pc09wZW4iLCJkaXNwb3NlIiwiZXZlbnRzIiwic3BsaXQiLCJmaWx0ZXIiLCJpbmRleE9mIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwicmVmZXJlbmNlIiwic2V0Q2xhc3NlcyIsInNob3ciLCJhcmdzIiwicmVzdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2V2ZW50cyIsImZvckVhY2giLCJmdW5jIiwiZXZlbnQiLCJzZXRUaW1lb3V0IiwiY3JlYXRlVG9vbHRpcCIsInRvb2x0aXAiLCJfdG9vbHRpcCIsImh0bWwiLCJkZXN0cm95VG9vbHRpcCIsImJpbmQiLCJvbGRWYWx1ZSIsInNldENvbnRlbnQiLCJzZXRPcHRpb25zIiwidW5iaW5kIiwiY29udmVydFRvQXJyYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjIiwicmVtb3ZlIiwibmV3Q2xhc3NlcyIsImluc3RhbGwiLCJWdWUiLCJpbnN0YWxsZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ2dG9vbHRpcCIsIlZUb29sdGlwIiwicGx1Z2luIiwiR2xvYmFsVnVlIiwid2luZG93IiwiZ2xvYmFsIiwidXNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7QUFFQTs7QUFFQSxJQUFNQSxZQUFZLENBQ2hCLEtBRGdCLEVBRWhCLFdBRmdCLEVBR2hCLFNBSGdCLEVBSWhCLE9BSmdCLEVBS2hCLGFBTGdCLEVBTWhCLFdBTmdCLEVBT2hCLFFBUGdCLEVBUWhCLGNBUmdCLEVBU2hCLFlBVGdCLEVBVWhC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QUNBQSxVQUFRcUMsT0FBUixDQUFnQixhQUFLO0FBQ25CcEMsT0FBR21ELFNBQUgsQ0FBYUcsTUFBYixDQUFvQkQsQ0FBcEI7QUFDRCxHQUZEO0FBR0Q7O0FBRU0sU0FBU2pELGNBQVQsQ0FBeUJKLEVBQXpCLEVBQTZCdUQsVUFBN0IsRUFBeUNyRCxVQUF6QyxFQUFxRDtBQUMxREksZ0JBQWNOLEVBQWQsRUFBa0JFLFVBQWxCO0FBQ0FHLGFBQVdMLEVBQVgsRUFBZXVELFVBQWY7QUFDRCxDOzs7Ozs7QUN6QkQsdUM7Ozs7Ozs7Ozs7O0FDQUE7O0FBRU8sU0FBU0MsT0FBVCxDQUFrQkMsR0FBbEIsRUFBdUJ2RSxPQUF2QixFQUFnQztBQUNyQyxNQUFJc0UsUUFBUUUsU0FBWixFQUF1QjtBQUN2QkYsVUFBUUUsU0FBUixHQUFvQixJQUFwQjs7QUFFQXhFLFlBQVV5RSxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQixrRUFBbEIsRUFBa0MxRSxXQUFXLEVBQTdDLENBQVY7QUFDQTJFLEVBQUEsMkRBQUFBLENBQVMzRSxPQUFULEdBQW1CQSxPQUFuQjtBQUNBdUUsTUFBSXJFLFNBQUosQ0FBYyxTQUFkLEVBQXlCLDJEQUF6QjtBQUNEOztBQUVNLElBQU0wRSxXQUFXLDJEQUFqQjs7QUFFUCxJQUFNQyxTQUFTO0FBQ2JQO0FBRGEsQ0FBZjs7QUFJQTtBQUNBLElBQUlRLFlBQVksSUFBaEI7QUFDQSxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNELGNBQVlDLE9BQU9SLEdBQW5CO0FBQ0QsQ0FGRCxNQUVPLElBQUksT0FBT1MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUN4Q0YsY0FBWUUsT0FBT1QsR0FBbkI7QUFDRDtBQUNELElBQUlPLFNBQUosRUFBZTtBQUNiQSxZQUFVRyxHQUFWLENBQWNKLE1BQWQ7QUFDRDs7QUFFRCw4REFBZUEsTUFBZixDIiwiZmlsZSI6InYtdG9vbHRpcC5jb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2Yzc1MGExN2RhMDZiMTQ4ZGJiYiIsImltcG9ydCBUb29sdGlwIGZyb20gJ3Rvb2x0aXAuanMnXHJcblxyXG5pbXBvcnQgeyBhZGRDbGFzc2VzLCByZW1vdmVDbGFzc2VzLCByZXBsYWNlQ2xhc3NlcyB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5jb25zdCBwb3NpdGlvbnMgPSBbXHJcbiAgJ3RvcCcsXHJcbiAgJ3RvcC1zdGFydCcsXHJcbiAgJ3RvcC1lbmQnLFxyXG4gICdyaWdodCcsXHJcbiAgJ3JpZ2h0LXN0YXJ0JyxcclxuICAncmlnaHQtZW5kJyxcclxuICAnYm90dG9tJyxcclxuICAnYm90dG9tLXN0YXJ0JyxcclxuICAnYm90dG9tLWVuZCcsXHJcbiAgJ2xlZnQnLFxyXG4gICdsZWZ0LXN0YXJ0JyxcclxuICAnbGVmdC1lbmQnLFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgZGVmYXVsdFBsYWNlbWVudDogJ3RvcCcsXHJcbiAgZGVmYXVsdENsYXNzOiAndnVlLXRvb2x0aXAtdGhlbWUnLFxyXG4gIGRlZmF1bHRUZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcclxuICBkZWZhdWx0RGVsYXk6IDAsXHJcbiAgZGVmYXVsdFRyaWdnZXI6ICdob3ZlciBmb2N1cycsXHJcbiAgZGVmYXVsdE9mZnNldDogMCxcclxuICBkZWZhdWx0Q29udGFpbmVyOiAnYm9keScsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9wdGlvbnMgKG9wdGlvbnMpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGxhY2VtZW50OiBvcHRpb25zLnBsYWNlbWVudCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0UGxhY2VtZW50LFxyXG4gICAgZGVsYXk6IG9wdGlvbnMuZGVsYXkgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdERlbGF5LFxyXG4gICAgdGVtcGxhdGU6IG9wdGlvbnMudGVtcGxhdGUgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFRlbXBsYXRlLFxyXG4gICAgdHJpZ2dlcjogb3B0aW9ucy50cmlnZ2VyIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRUcmlnZ2VyLFxyXG4gICAgb2Zmc2V0OiBvcHRpb25zLm9mZnNldCB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0T2Zmc2V0LFxyXG4gICAgY29udGFpbmVyOiBvcHRpb25zLmNvbnRhaW5lciB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q29udGFpbmVyLFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50ICh2YWx1ZSwgbW9kaWZpZXJzKSB7XHJcbiAgbGV0IHBsYWNlbWVudCA9IHZhbHVlLnBsYWNlbWVudFxyXG4gIGZvciAoY29uc3QgcG9zIG9mIHBvc2l0aW9ucykge1xyXG4gICAgaWYgKG1vZGlmaWVyc1twb3NdKSB7XHJcbiAgICAgIHBsYWNlbWVudCA9IHBvc1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGxhY2VtZW50XHJcbn1cclxuXHJcbmNsYXNzIFN1cGVyVG9vbHRpcCBleHRlbmRzIFRvb2x0aXAge1xyXG4gIHNldENsYXNzZXMgKGNsYXNzZXMpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5fdG9vbHRpcE5vZGVcclxuXHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgY29uc3Qgb2xkQ2xhc3NlcyA9IHRoaXMuX29sZENsYXNzZXNcclxuICAgICAgaWYgKGNsYXNzZXMpIHtcclxuICAgICAgICBpZiAob2xkQ2xhc3Nlcykge1xyXG4gICAgICAgICAgcmVwbGFjZUNsYXNzZXMoZWwsIGNsYXNzZXMsIG9sZENsYXNzZXMpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFkZENsYXNzZXMoZWwsIGNsYXNzZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKG9sZENsYXNzZXMpIHtcclxuICAgICAgICByZW1vdmVDbGFzc2VzKGVsLCBvbGRDbGFzc2VzKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX29sZENsYXNzZXMgPSBjbGFzc2VzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9wZW5kaW5nQ2xhc3NlcyA9IGNsYXNzZXNcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jbGFzc2VzID0gY2xhc3Nlc1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudCAoY29udGVudCkge1xyXG4gICAgdGhpcy5vcHRpb25zLnRpdGxlID0gY29udGVudFxyXG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fdG9vbHRpcE5vZGUucXVlcnlTZWxlY3Rvcih0aGlzLmlubmVyU2VsZWN0b3IpXHJcblxyXG4gICAgICBpZiAoZWwpIHtcclxuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgIGVsLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsLmlubmVySFRNTCA9IGNvbnRlbnRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyAob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucylcclxuXHJcbiAgICBsZXQgbmVlZFBvcHBlclVwZGF0ZSA9IGZhbHNlXHJcbiAgICBsZXQgbmVlZFJlc3RhcnQgPSBmYWxzZVxyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5vcHRpb25zLm9mZnNldCAhPT0gb3B0aW9ucy5vZmZzZXQgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudCAhPT0gb3B0aW9ucy5wbGFjZW1lbnRcclxuICAgICkge1xyXG4gICAgICBuZWVkUG9wcGVyVXBkYXRlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5vcHRpb25zLnRlbXBsYXRlICE9PSBvcHRpb25zLnRlbXBsYXRlIHx8XHJcbiAgICAgIHRoaXMub3B0aW9ucy50cmlnZ2VyICE9PSBvcHRpb25zLnRyaWdnZXIgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLmNvbnRhaW5lciAhPT0gb3B0aW9ucy5jb250YWluZXJcclxuICAgICkge1xyXG4gICAgICBuZWVkUmVzdGFydCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBOb2RlKSB7XHJcbiAgICAgIGlmIChuZWVkUmVzdGFydCkge1xyXG4gICAgICAgIGNvbnN0IGlzT3BlbiA9IHRoaXMuX2lzT3BlblxyXG5cclxuICAgICAgICB0aGlzLmRpc3Bvc2UoKVxyXG5cclxuICAgICAgICBjb25zdCBldmVudHMgPSB0eXBlb2YgdGhpcy5vcHRpb25zLnRyaWdnZXIgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICA/IG9wdGlvbnMudHJpZ2dlclxyXG4gICAgICAgICAgICAuc3BsaXQoJyAnKVxyXG4gICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIHRyaWdnZXIgPT4gWydjbGljaycsICdob3ZlcicsICdmb2N1cyddLmluZGV4T2YodHJpZ2dlcikgIT09IC0xXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIDogW11cclxuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgZXZlbnRzLCB0aGlzLm9wdGlvbnMpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3Nlcyh0aGlzLl9jbGFzc2VzKVxyXG5cclxuICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3coKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChuZWVkUG9wcGVyVXBkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY3JlYXRlICguLi5hcmdzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fY3JlYXRlKC4uLmFyZ3MpXHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmlnZ2VyLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xKSB7XHJcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIF9kaXNwb3NlICgpIHtcclxuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xyXG4gICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2V2ZW50cy5mb3JFYWNoKCh7IGZ1bmMsIGV2ZW50IH0pID0+IHtcclxuICAgICAgdGhpcy5yZWZlcmVuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuYylcclxuICAgIH0pXHJcbiAgICB0aGlzLl9ldmVudHMgPSBbXVxyXG4gICAgcmV0dXJuIHN1cGVyLl9kaXNwb3NlKClcclxuICB9XHJcblxyXG4gIF9zaG93ICguLi5hcmdzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fc2hvdyguLi5hcmdzKVxyXG5cclxuICAgIGlmICh0aGlzLl9wZW5kaW5nQ2xhc3Nlcykge1xyXG4gICAgICB0aGlzLnNldENsYXNzZXModGhpcy5fcGVuZGluZ0NsYXNzZXMpXHJcbiAgICAgIHRoaXMuX3BlbmRpbmdDbGFzc2VzID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpeCBwb3NpdGlvblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UudXBkYXRlKClcclxuICAgIH0sIDApXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9vbHRpcCAoZWwsIHZhbHVlLCBtb2RpZmllcnMpIHtcclxuICBjb25zdCBjb250ZW50ID0gdmFsdWUuY29udGVudCB8fCB2YWx1ZVxyXG4gIGxldCBjbGFzc2VzID0gdmFsdWUuY2xhc3NlcyB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q2xhc3NcclxuXHJcbiAgY29uc3QgdG9vbHRpcCA9IGVsLl90b29sdGlwID0gbmV3IFN1cGVyVG9vbHRpcChlbCwge1xyXG4gICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICBodG1sOiB0cnVlLFxyXG4gICAgLi4uZ2V0T3B0aW9ucyh7XHJcbiAgICAgIC4uLnZhbHVlLFxyXG4gICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcclxuICAgIH0pLFxyXG4gIH0pXHJcbiAgdG9vbHRpcC5zZXRDbGFzc2VzKGNsYXNzZXMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc3Ryb3lUb29sdGlwIChlbCkge1xyXG4gIGlmIChlbC5fdG9vbHRpcCkge1xyXG4gICAgZWwuX3Rvb2x0aXAuZGlzcG9zZSgpXHJcbiAgICBkZWxldGUgZWwuX3Rvb2x0aXBcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpcmVjdGl2ZSA9IHtcclxuICBvcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcclxuICBiaW5kIChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzIH0pIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZSAmJiB2YWx1ZS5jb250ZW50IHx8IHZhbHVlXHJcbiAgICBkZXN0cm95VG9vbHRpcChlbClcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgIGNyZWF0ZVRvb2x0aXAoZWwsIHZhbHVlLCBtb2RpZmllcnMpXHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGUgKGVsLCB7IHZhbHVlLCBvbGRWYWx1ZSwgbW9kaWZpZXJzIH0pIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZSAmJiB2YWx1ZS5jb250ZW50IHx8IHZhbHVlXHJcbiAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgZGVzdHJveVRvb2x0aXAoZWwpXHJcbiAgICB9IGVsc2UgaWYgKGVsLl90b29sdGlwKSB7XHJcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBlbC5fdG9vbHRpcFxyXG4gICAgICAvLyBDb250ZW50XHJcbiAgICAgIHRvb2x0aXAuc2V0Q29udGVudChjb250ZW50KVxyXG4gICAgICAvLyBDU1MgQ2xhc3Nlc1xyXG4gICAgICB0b29sdGlwLnNldENsYXNzZXMoKHZhbHVlICYmIHZhbHVlLmNsYXNzZXMpIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzcylcclxuICAgICAgLy8gT3B0aW9uc1xyXG4gICAgICB0b29sdGlwLnNldE9wdGlvbnMoe1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIHBsYWNlbWVudDogZ2V0UGxhY2VtZW50KHZhbHVlLCBtb2RpZmllcnMpLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcclxuICAgIH1cclxuICB9LFxyXG4gIHVuYmluZCAoZWwpIHtcclxuICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpcmVjdGl2ZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdi10b29sdGlwLmpzIiwiXG5mdW5jdGlvbiBjb252ZXJ0VG9BcnJheSAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJyAnKVxyXG4gIH1cclxuICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzZXMgKGVsLCBjbGFzc2VzKSB7XHJcbiAgY2xhc3NlcyA9IGNvbnZlcnRUb0FycmF5KGNsYXNzZXMpXHJcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzc2VzIChlbCwgY2xhc3Nlcykge1xyXG4gIGNsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxyXG4gIGNsYXNzZXMuZm9yRWFjaChjID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoYylcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUNsYXNzZXMgKGVsLCBuZXdDbGFzc2VzLCBvbGRDbGFzc2VzKSB7XHJcbiAgcmVtb3ZlQ2xhc3NlcyhlbCwgb2xkQ2xhc3NlcylcclxuICBhZGRDbGFzc2VzKGVsLCBuZXdDbGFzc2VzKVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRvb2x0aXAuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ0b29sdGlwLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHZ0b29sdGlwLCB7IGRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi92LXRvb2x0aXAnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFsbCAoVnVlLCBvcHRpb25zKSB7XHJcbiAgaWYgKGluc3RhbGwuaW5zdGFsbGVkKSByZXR1cm5cclxuICBpbnN0YWxsLmluc3RhbGxlZCA9IHRydWVcclxuXHJcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIHx8IHt9KVxyXG4gIHZ0b29sdGlwLm9wdGlvbnMgPSBvcHRpb25zXHJcbiAgVnVlLmRpcmVjdGl2ZSgndG9vbHRpcCcsIHZ0b29sdGlwKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVlRvb2x0aXAgPSB2dG9vbHRpcFxyXG5cclxuY29uc3QgcGx1Z2luID0ge1xyXG4gIGluc3RhbGwsXHJcbn1cclxuXHJcbi8vIEF1dG8taW5zdGFsbFxyXG5sZXQgR2xvYmFsVnVlID0gbnVsbFxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBHbG9iYWxWdWUgPSB3aW5kb3cuVnVlXHJcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBHbG9iYWxWdWUgPSBnbG9iYWwuVnVlXHJcbn1cclxuaWYgKEdsb2JhbFZ1ZSkge1xyXG4gIEdsb2JhbFZ1ZS51c2UocGx1Z2luKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==