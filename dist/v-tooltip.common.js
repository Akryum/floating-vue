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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tether_tooltip__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tether_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tether_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* unused harmony export defaultTetherOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultOptions; });




var positions = ['top-left', 'left-top', 'left-middle', 'left-bottom', 'bottom-left', 'bottom-center', 'bottom-right', 'right-bottom', 'right-middle', 'right-top', 'top-right', 'top-center'];

var defaultTetherOptions = {
  constraints: [{
    to: 'window',
    attachment: 'together',
    pin: true
  }]
};

var defaultOptions = {
  tetherOptions: defaultTetherOptions,
  defaultClass: 'vue-tooltip-theme'
};

function createTooltip(el, value, modifiers) {
  var position = 'top-center';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = positions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pos = _step.value;

      if (modifiers[pos]) {
        position = pos;
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

  position = position.replace('-', ' ');

  var content = value.content || value;

  var classes = directive.options.defaultClass;
  if (value.classes) {
    classes = value.classes;
  }

  el._tooltip = new __WEBPACK_IMPORTED_MODULE_0_tether_tooltip___default.a({
    target: el,
    position: position,
    content: content,
    classes: classes,
    tetherOptions: directive.options.tetherOptions
  });
}

function destroyTooltip(el) {
  if (el._tooltip) {
    el._tooltip.destroy();
    delete el._tooltip;
  }
}

var directive = {
  options: defaultOptions,
  bind: function bind(el, _ref) {
    var value = _ref.value,
        modifiers = _ref.modifiers;

    var content = value && value.content || value;
    destroyTooltip(el);
    if (content) {
      createTooltip(el, value, modifiers);
    }
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue,
        modifiers = _ref2.modifiers;

    var content = value && value.content || value;
    if (!content) {
      destroyTooltip(el);
    } else if (el._tooltip) {
      var drop = el._tooltip.drop;

      // Content
      drop.content.innerHTML = content;

      // CSS classes
      var oldClasses = oldValue && oldValue.classes;
      if (value && value.classes) {
        if (oldClasses) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* replaceClasses */])(drop.drop, value.classes, oldClasses);
        } else {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* addClasses */])(drop.drop, value.classes);
        }
      } else if (oldClasses) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* removeClasses */])(drop.drop, oldClasses);
      }
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
/* unused harmony export mirrorAttachment */
/* unused harmony export sortAttach */
/* unused harmony export getTetherAttachments */

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

var MIRROR_ATTACH = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
  middle: 'middle',
  center: 'center'
};

function mirrorAttachment(attachment) {
  var dropAttach = attachment.split(' ');
  dropAttach[0] = MIRROR_ATTACH[dropAttach[0]];
  dropAttach = dropAttach.join(' ');
  return dropAttach;
}

function sortAttach(str) {
  var list = str.split(' ');

  var first = list[0];
  var second = list[1];

  if (['left', 'right'].indexOf(first) >= 0) {
    var _ref = [second, first];
    first = _ref[0];
    second = _ref[1];
  }
  return [first, second].join(' ');
}

function getTetherAttachments(position) {
  var dropAttach = mirrorAttachment(position);
  return {
    attachment: sortAttach(dropAttach),
    targetAttachment: sortAttach(position)
  };
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("tether-tooltip");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v_tooltip__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["install"] = install;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTooltip", function() { return VTooltip; });


function install(Vue, options) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWJjODRkYWJiNmYzZTkyYjA3NWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGV0aGVyLXRvb2x0aXBcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsicG9zaXRpb25zIiwiZGVmYXVsdFRldGhlck9wdGlvbnMiLCJjb25zdHJhaW50cyIsInRvIiwiYXR0YWNobWVudCIsInBpbiIsImRlZmF1bHRPcHRpb25zIiwidGV0aGVyT3B0aW9ucyIsImRlZmF1bHRDbGFzcyIsImNyZWF0ZVRvb2x0aXAiLCJlbCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zaXRpb24iLCJwb3MiLCJyZXBsYWNlIiwiY29udGVudCIsImNsYXNzZXMiLCJkaXJlY3RpdmUiLCJvcHRpb25zIiwiX3Rvb2x0aXAiLCJ0YXJnZXQiLCJkZXN0cm95VG9vbHRpcCIsImRlc3Ryb3kiLCJiaW5kIiwidXBkYXRlIiwib2xkVmFsdWUiLCJkcm9wIiwiaW5uZXJIVE1MIiwib2xkQ2xhc3NlcyIsInJlcGxhY2VDbGFzc2VzIiwiYWRkQ2xhc3NlcyIsInJlbW92ZUNsYXNzZXMiLCJ1bmJpbmQiLCJjb252ZXJ0VG9BcnJheSIsInNwbGl0IiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImFkZCIsImMiLCJyZW1vdmUiLCJuZXdDbGFzc2VzIiwiTUlSUk9SX0FUVEFDSCIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIm1pZGRsZSIsImNlbnRlciIsIm1pcnJvckF0dGFjaG1lbnQiLCJkcm9wQXR0YWNoIiwiam9pbiIsInNvcnRBdHRhY2giLCJzdHIiLCJsaXN0IiwiZmlyc3QiLCJzZWNvbmQiLCJpbmRleE9mIiwiX3JlZiIsImdldFRldGhlckF0dGFjaG1lbnRzIiwidGFyZ2V0QXR0YWNobWVudCIsImluc3RhbGwiLCJWdWUiLCJPYmplY3QiLCJhc3NpZ24iLCJ2dG9vbHRpcCIsIlZUb29sdGlwIiwicGx1Z2luIiwiR2xvYmFsVnVlIiwid2luZG93IiwiZ2xvYmFsIiwidXNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRUEsSUFBTUEsWUFBWSxDQUNoQixVQURnQixFQUVoQixVQUZnQixFQUdoQixhQUhnQixFQUloQixhQUpnQixFQUtoQixhQUxnQixFQU1oQixlQU5nQixFQU9oQixjQVBnQixFQVFoQixjQVJnQixFQVNoQixjQVRnQixFQVVoQixXQVZnQixFQVdoQixXQVhnQixFQVloQixZQVpnQixDQUFsQjs7QUFlTyxJQUFNQyx1QkFBdUI7QUFDbENDLGVBQWEsQ0FDWDtBQUNFQyxRQUFJLFFBRE47QUFFRUMsZ0JBQVksVUFGZDtBQUdFQyxTQUFLO0FBSFAsR0FEVztBQURxQixDQUE3Qjs7QUFVQSxJQUFNQyxpQkFBaUI7QUFDNUJDLGlCQUFlTixvQkFEYTtBQUU1Qk8sZ0JBQWM7QUFGYyxDQUF2Qjs7QUFLUCxTQUFTQyxhQUFULENBQXdCQyxFQUF4QixFQUE0QkMsS0FBNUIsRUFBbUNDLFNBQW5DLEVBQThDO0FBQzVDLE1BQUlDLFdBQVcsWUFBZjtBQUQ0QztBQUFBO0FBQUE7O0FBQUE7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QUFoQjtBQUNBLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQ0QsY0FBWUMsT0FBT1AsR0FBbkI7QUFDRCxDQUZELE1BRU8sSUFBSSxPQUFPUSxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ3hDRixjQUFZRSxPQUFPUixHQUFuQjtBQUNEO0FBQ0QsSUFBSU0sU0FBSixFQUFlO0FBQ2JBLFlBQVVHLEdBQVYsQ0FBY0osTUFBZDtBQUNEOztBQUVELDhEQUFlQSxNQUFmLEMiLCJmaWxlIjoidi10b29sdGlwLmNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFiYzg0ZGFiYjZmM2U5MmIwNzVkIiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAndGV0aGVyLXRvb2x0aXAnXG5cbmltcG9ydCB7IGFkZENsYXNzZXMsIHJlbW92ZUNsYXNzZXMsIHJlcGxhY2VDbGFzc2VzIH0gZnJvbSAnLi91dGlscydcblxuY29uc3QgcG9zaXRpb25zID0gW1xuICAndG9wLWxlZnQnLFxuICAnbGVmdC10b3AnLFxuICAnbGVmdC1taWRkbGUnLFxuICAnbGVmdC1ib3R0b20nLFxuICAnYm90dG9tLWxlZnQnLFxuICAnYm90dG9tLWNlbnRlcicsXG4gICdib3R0b20tcmlnaHQnLFxuICAncmlnaHQtYm90dG9tJyxcbiAgJ3JpZ2h0LW1pZGRsZScsXG4gICdyaWdodC10b3AnLFxuICAndG9wLXJpZ2h0JyxcbiAgJ3RvcC1jZW50ZXInLFxuXVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFRldGhlck9wdGlvbnMgPSB7XG4gIGNvbnN0cmFpbnRzOiBbXG4gICAge1xuICAgICAgdG86ICd3aW5kb3cnLFxuICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcbiAgICAgIHBpbjogdHJ1ZSxcbiAgICB9LFxuICBdLFxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIHRldGhlck9wdGlvbnM6IGRlZmF1bHRUZXRoZXJPcHRpb25zLFxuICBkZWZhdWx0Q2xhc3M6ICd2dWUtdG9vbHRpcC10aGVtZScsXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvb2x0aXAgKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKSB7XG4gIGxldCBwb3NpdGlvbiA9ICd0b3AtY2VudGVyJ1xuICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHtcbiAgICBpZiAobW9kaWZpZXJzW3Bvc10pIHtcbiAgICAgIHBvc2l0aW9uID0gcG9zXG4gICAgfVxuICB9XG4gIHBvc2l0aW9uID0gcG9zaXRpb24ucmVwbGFjZSgnLScsICcgJylcblxuICBjb25zdCBjb250ZW50ID0gdmFsdWUuY29udGVudCB8fCB2YWx1ZVxuXG4gIGxldCBjbGFzc2VzID0gZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdENsYXNzXG4gIGlmICh2YWx1ZS5jbGFzc2VzKSB7XG4gICAgY2xhc3NlcyA9IHZhbHVlLmNsYXNzZXNcbiAgfVxuXG4gIGVsLl90b29sdGlwID0gbmV3IFRvb2x0aXAoe1xuICAgIHRhcmdldDogZWwsXG4gICAgcG9zaXRpb24sXG4gICAgY29udGVudCxcbiAgICBjbGFzc2VzLFxuICAgIHRldGhlck9wdGlvbnM6IGRpcmVjdGl2ZS5vcHRpb25zLnRldGhlck9wdGlvbnMsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lUb29sdGlwIChlbCkge1xuICBpZiAoZWwuX3Rvb2x0aXApIHtcbiAgICBlbC5fdG9vbHRpcC5kZXN0cm95KClcbiAgICBkZWxldGUgZWwuX3Rvb2x0aXBcbiAgfVxufVxuXG5jb25zdCBkaXJlY3RpdmUgPSB7XG4gIG9wdGlvbnM6IGRlZmF1bHRPcHRpb25zLFxuICBiaW5kIChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzIH0pIHtcbiAgICBjb25zdCBjb250ZW50ID0gdmFsdWUgJiYgdmFsdWUuY29udGVudCB8fCB2YWx1ZVxuICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBjcmVhdGVUb29sdGlwKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKVxuICAgIH1cbiAgfSxcbiAgdXBkYXRlIChlbCwgeyB2YWx1ZSwgb2xkVmFsdWUsIG1vZGlmaWVycyB9KSB7XG4gICAgY29uc3QgY29udGVudCA9IHZhbHVlICYmIHZhbHVlLmNvbnRlbnQgfHwgdmFsdWVcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxuICAgIH0gZWxzZSBpZiAoZWwuX3Rvb2x0aXApIHtcbiAgICAgIGNvbnN0IGRyb3AgPSBlbC5fdG9vbHRpcC5kcm9wXG5cbiAgICAgIC8vIENvbnRlbnRcbiAgICAgIGRyb3AuY29udGVudC5pbm5lckhUTUwgPSBjb250ZW50XG5cbiAgICAgIC8vIENTUyBjbGFzc2VzXG4gICAgICBjb25zdCBvbGRDbGFzc2VzID0gb2xkVmFsdWUgJiYgb2xkVmFsdWUuY2xhc3Nlc1xuICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmNsYXNzZXMpIHtcbiAgICAgICAgaWYgKG9sZENsYXNzZXMpIHtcbiAgICAgICAgICByZXBsYWNlQ2xhc3Nlcyhkcm9wLmRyb3AsIHZhbHVlLmNsYXNzZXMsIG9sZENsYXNzZXMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkQ2xhc3Nlcyhkcm9wLmRyb3AsIHZhbHVlLmNsYXNzZXMpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob2xkQ2xhc3Nlcykge1xuICAgICAgICByZW1vdmVDbGFzc2VzKGRyb3AuZHJvcCwgb2xkQ2xhc3NlcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcbiAgICB9XG4gIH0sXG4gIHVuYmluZCAoZWwpIHtcbiAgICBkZXN0cm95VG9vbHRpcChlbClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlyZWN0aXZlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdi10b29sdGlwLmpzIiwiXG5mdW5jdGlvbiBjb252ZXJ0VG9BcnJheSAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJylcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzZXMgKGVsLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyAoZWwsIGNsYXNzZXMpIHtcbiAgY2xhc3NlcyA9IGNvbnZlcnRUb0FycmF5KGNsYXNzZXMpXG4gIGNsYXNzZXMuZm9yRWFjaChjID0+IHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2xhc3NlcyAoZWwsIG5ld0NsYXNzZXMsIG9sZENsYXNzZXMpIHtcbiAgcmVtb3ZlQ2xhc3NlcyhlbCwgb2xkQ2xhc3NlcylcbiAgYWRkQ2xhc3NlcyhlbCwgbmV3Q2xhc3Nlcylcbn1cblxuY29uc3QgTUlSUk9SX0FUVEFDSCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgdG9wOiAnYm90dG9tJyxcbiAgYm90dG9tOiAndG9wJyxcbiAgbWlkZGxlOiAnbWlkZGxlJyxcbiAgY2VudGVyOiAnY2VudGVyJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pcnJvckF0dGFjaG1lbnQgKGF0dGFjaG1lbnQpIHtcbiAgdmFyIGRyb3BBdHRhY2ggPSBhdHRhY2htZW50LnNwbGl0KCcgJylcbiAgZHJvcEF0dGFjaFswXSA9IE1JUlJPUl9BVFRBQ0hbZHJvcEF0dGFjaFswXV1cbiAgZHJvcEF0dGFjaCA9IGRyb3BBdHRhY2guam9pbignICcpXG4gIHJldHVybiBkcm9wQXR0YWNoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QXR0YWNoIChzdHIpIHtcbiAgdmFyIGxpc3QgPSBzdHIuc3BsaXQoJyAnKVxuXG4gIHZhciBmaXJzdCA9IGxpc3RbMF1cbiAgdmFyIHNlY29uZCA9IGxpc3RbMV1cblxuICBpZiAoWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihmaXJzdCkgPj0gMCkge1xuICAgIHZhciBfcmVmID0gW3NlY29uZCwgZmlyc3RdXG4gICAgZmlyc3QgPSBfcmVmWzBdXG4gICAgc2Vjb25kID0gX3JlZlsxXVxuICB9XG4gIHJldHVybiBbZmlyc3QsIHNlY29uZF0uam9pbignICcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXRoZXJBdHRhY2htZW50cyAocG9zaXRpb24pIHtcbiAgY29uc3QgZHJvcEF0dGFjaCA9IG1pcnJvckF0dGFjaG1lbnQocG9zaXRpb24pXG4gIHJldHVybiB7XG4gICAgYXR0YWNobWVudDogc29ydEF0dGFjaChkcm9wQXR0YWNoKSxcbiAgICB0YXJnZXRBdHRhY2htZW50OiBzb3J0QXR0YWNoKHBvc2l0aW9uKSxcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGV0aGVyLXRvb2x0aXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ0ZXRoZXItdG9vbHRpcFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB2dG9vbHRpcCwgeyBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vdi10b29sdGlwJ1xuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFsbCAoVnVlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyB8fCB7fSlcbiAgdnRvb2x0aXAub3B0aW9ucyA9IG9wdGlvbnNcbiAgVnVlLmRpcmVjdGl2ZSgndG9vbHRpcCcsIHZ0b29sdGlwKVxufVxuXG5leHBvcnQgY29uc3QgVlRvb2x0aXAgPSB2dG9vbHRpcFxuXG5jb25zdCBwbHVnaW4gPSB7XG4gIGluc3RhbGwsXG59XG5cbi8vIEF1dG8taW5zdGFsbFxubGV0IEdsb2JhbFZ1ZSA9IG51bGxcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBHbG9iYWxWdWUgPSB3aW5kb3cuVnVlXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIEdsb2JhbFZ1ZSA9IGdsb2JhbC5WdWVcbn1cbmlmIChHbG9iYWxWdWUpIHtcbiAgR2xvYmFsVnVlLnVzZShwbHVnaW4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==