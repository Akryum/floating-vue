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

/* harmony default export */ __webpack_exports__["default"] = {
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
  GlobalVue.use(install);
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzc4ZjY0OGRhNTg2Yzg2OGRiZDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGV0aGVyLXRvb2x0aXBcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsicG9zaXRpb25zIiwiZGVmYXVsdFRldGhlck9wdGlvbnMiLCJjb25zdHJhaW50cyIsInRvIiwiYXR0YWNobWVudCIsInBpbiIsImRlZmF1bHRPcHRpb25zIiwidGV0aGVyT3B0aW9ucyIsImRlZmF1bHRDbGFzcyIsImNyZWF0ZVRvb2x0aXAiLCJlbCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zaXRpb24iLCJwb3MiLCJyZXBsYWNlIiwiY29udGVudCIsImNsYXNzZXMiLCJkaXJlY3RpdmUiLCJvcHRpb25zIiwiX3Rvb2x0aXAiLCJ0YXJnZXQiLCJkZXN0cm95VG9vbHRpcCIsImRlc3Ryb3kiLCJiaW5kIiwidXBkYXRlIiwib2xkVmFsdWUiLCJkcm9wIiwiaW5uZXJIVE1MIiwib2xkQ2xhc3NlcyIsInJlcGxhY2VDbGFzc2VzIiwiYWRkQ2xhc3NlcyIsInJlbW92ZUNsYXNzZXMiLCJ1bmJpbmQiLCJjb252ZXJ0VG9BcnJheSIsInNwbGl0IiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImFkZCIsImMiLCJyZW1vdmUiLCJuZXdDbGFzc2VzIiwiTUlSUk9SX0FUVEFDSCIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIm1pZGRsZSIsImNlbnRlciIsIm1pcnJvckF0dGFjaG1lbnQiLCJkcm9wQXR0YWNoIiwiam9pbiIsInNvcnRBdHRhY2giLCJzdHIiLCJsaXN0IiwiZmlyc3QiLCJzZWNvbmQiLCJpbmRleE9mIiwiX3JlZiIsImdldFRldGhlckF0dGFjaG1lbnRzIiwidGFyZ2V0QXR0YWNobWVudCIsImluc3RhbGwiLCJWdWUiLCJPYmplY3QiLCJhc3NpZ24iLCJ2dG9vbHRpcCIsIlZUb29sdGlwIiwiR2xvYmFsVnVlIiwid2luZG93IiwiZ2xvYmFsIiwidXNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRUEsSUFBTUEsWUFBWSxDQUNoQixVQURnQixFQUVoQixVQUZnQixFQUdoQixhQUhnQixFQUloQixhQUpnQixFQUtoQixhQUxnQixFQU1oQixlQU5nQixFQU9oQixjQVBnQixFQVFoQixjQVJnQixFQVNoQixjQVRnQixFQVVoQixXQVZnQixFQVdoQixXQVhnQixFQVloQixZQVpnQixDQUFsQjs7QUFlTyxJQUFNQyx1QkFBdUI7QUFDbENDLGVBQWEsQ0FDWDtBQUNFQyxRQUFJLFFBRE47QUFFRUMsZ0JBQVksVUFGZDtBQUdFQyxTQUFLO0FBSFAsR0FEVztBQURxQixDQUE3Qjs7QUFVQSxJQUFNQyxpQkFBaUI7QUFDNUJDLGlCQUFlTixvQkFEYTtBQUU1Qk8sZ0JBQWM7QUFGYyxDQUF2Qjs7QUFLUCxTQUFTQyxhQUFULENBQXdCQyxFQUF4QixFQUE0QkMsS0FBNUIsRUFBbUNDLFNBQW5DLEVBQThDO0FBQzVDLE1BQUlDLFdBQVcsWUFBZjtBQUQ0QztBQUFBO0FBQUE7O0FBQUE7QUFFNUMseUJB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LE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNELGNBQVlDLE9BQU9OLEdBQW5CO0FBQ0QsQ0FGRCxNQUVPLElBQUksT0FBT08sTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUN4Q0YsY0FBWUUsT0FBT1AsR0FBbkI7QUFDRDtBQUNELElBQUlLLFNBQUosRUFBZTtBQUNiQSxZQUFVRyxHQUFWLENBQWNULE9BQWQ7QUFDRCxDIiwiZmlsZSI6InYtdG9vbHRpcC5jb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjNzhmNjQ4ZGE1ODZjODY4ZGJkNyIsImltcG9ydCBUb29sdGlwIGZyb20gJ3RldGhlci10b29sdGlwJ1xuXG5pbXBvcnQgeyBhZGRDbGFzc2VzLCByZW1vdmVDbGFzc2VzLCByZXBsYWNlQ2xhc3NlcyB9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgJ3RvcC1sZWZ0JyxcbiAgJ2xlZnQtdG9wJyxcbiAgJ2xlZnQtbWlkZGxlJyxcbiAgJ2xlZnQtYm90dG9tJyxcbiAgJ2JvdHRvbS1sZWZ0JyxcbiAgJ2JvdHRvbS1jZW50ZXInLFxuICAnYm90dG9tLXJpZ2h0JyxcbiAgJ3JpZ2h0LWJvdHRvbScsXG4gICdyaWdodC1taWRkbGUnLFxuICAncmlnaHQtdG9wJyxcbiAgJ3RvcC1yaWdodCcsXG4gICd0b3AtY2VudGVyJyxcbl1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUZXRoZXJPcHRpb25zID0ge1xuICBjb25zdHJhaW50czogW1xuICAgIHtcbiAgICAgIHRvOiAnd2luZG93JyxcbiAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcicsXG4gICAgICBwaW46IHRydWUsXG4gICAgfSxcbiAgXSxcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICB0ZXRoZXJPcHRpb25zOiBkZWZhdWx0VGV0aGVyT3B0aW9ucyxcbiAgZGVmYXVsdENsYXNzOiAndnVlLXRvb2x0aXAtdGhlbWUnLFxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb29sdGlwIChlbCwgdmFsdWUsIG1vZGlmaWVycykge1xuICBsZXQgcG9zaXRpb24gPSAndG9wLWNlbnRlcidcbiAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB7XG4gICAgaWYgKG1vZGlmaWVyc1twb3NdKSB7XG4gICAgICBwb3NpdGlvbiA9IHBvc1xuICAgIH1cbiAgfVxuICBwb3NpdGlvbiA9IHBvc2l0aW9uLnJlcGxhY2UoJy0nLCAnICcpXG5cbiAgY29uc3QgY29udGVudCA9IHZhbHVlLmNvbnRlbnQgfHwgdmFsdWVcblxuICBsZXQgY2xhc3NlcyA9IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzc1xuICBpZiAodmFsdWUuY2xhc3Nlcykge1xuICAgIGNsYXNzZXMgPSB2YWx1ZS5jbGFzc2VzXG4gIH1cblxuICBlbC5fdG9vbHRpcCA9IG5ldyBUb29sdGlwKHtcbiAgICB0YXJnZXQ6IGVsLFxuICAgIHBvc2l0aW9uLFxuICAgIGNvbnRlbnQsXG4gICAgY2xhc3NlcyxcbiAgICB0ZXRoZXJPcHRpb25zOiBkaXJlY3RpdmUub3B0aW9ucy50ZXRoZXJPcHRpb25zLFxuICB9KVxufVxuXG5mdW5jdGlvbiBkZXN0cm95VG9vbHRpcCAoZWwpIHtcbiAgaWYgKGVsLl90b29sdGlwKSB7XG4gICAgZWwuX3Rvb2x0aXAuZGVzdHJveSgpXG4gICAgZGVsZXRlIGVsLl90b29sdGlwXG4gIH1cbn1cblxuY29uc3QgZGlyZWN0aXZlID0ge1xuICBvcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcbiAgYmluZCAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycyB9KSB7XG4gICAgY29uc3QgY29udGVudCA9IHZhbHVlICYmIHZhbHVlLmNvbnRlbnQgfHwgdmFsdWVcbiAgICBkZXN0cm95VG9vbHRpcChlbClcbiAgICBpZiAoY29udGVudCkge1xuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZSAoZWwsIHsgdmFsdWUsIG9sZFZhbHVlLCBtb2RpZmllcnMgfSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZSAmJiB2YWx1ZS5jb250ZW50IHx8IHZhbHVlXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICBkZXN0cm95VG9vbHRpcChlbClcbiAgICB9IGVsc2UgaWYgKGVsLl90b29sdGlwKSB7XG4gICAgICBjb25zdCBkcm9wID0gZWwuX3Rvb2x0aXAuZHJvcFxuXG4gICAgICAvLyBDb250ZW50XG4gICAgICBkcm9wLmNvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudFxuXG4gICAgICAvLyBDU1MgY2xhc3Nlc1xuICAgICAgY29uc3Qgb2xkQ2xhc3NlcyA9IG9sZFZhbHVlICYmIG9sZFZhbHVlLmNsYXNzZXNcbiAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5jbGFzc2VzKSB7XG4gICAgICAgIGlmIChvbGRDbGFzc2VzKSB7XG4gICAgICAgICAgcmVwbGFjZUNsYXNzZXMoZHJvcC5kcm9wLCB2YWx1ZS5jbGFzc2VzLCBvbGRDbGFzc2VzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENsYXNzZXMoZHJvcC5kcm9wLCB2YWx1ZS5jbGFzc2VzKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9sZENsYXNzZXMpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3Nlcyhkcm9wLmRyb3AsIG9sZENsYXNzZXMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVRvb2x0aXAoZWwsIHZhbHVlLCBtb2RpZmllcnMpXG4gICAgfVxuICB9LFxuICB1bmJpbmQgKGVsKSB7XG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpcmVjdGl2ZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3YtdG9vbHRpcC5qcyIsIlxuZnVuY3Rpb24gY29udmVydFRvQXJyYXkgKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc2VzIChlbCwgY2xhc3Nlcykge1xuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoYylcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMgKGVsLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUNsYXNzZXMgKGVsLCBuZXdDbGFzc2VzLCBvbGRDbGFzc2VzKSB7XG4gIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXG4gIGFkZENsYXNzZXMoZWwsIG5ld0NsYXNzZXMpXG59XG5cbmNvbnN0IE1JUlJPUl9BVFRBQ0ggPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIHRvcDogJ2JvdHRvbScsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIG1pZGRsZTogJ21pZGRsZScsXG4gIGNlbnRlcjogJ2NlbnRlcicsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXJyb3JBdHRhY2htZW50IChhdHRhY2htZW50KSB7XG4gIHZhciBkcm9wQXR0YWNoID0gYXR0YWNobWVudC5zcGxpdCgnICcpXG4gIGRyb3BBdHRhY2hbMF0gPSBNSVJST1JfQVRUQUNIW2Ryb3BBdHRhY2hbMF1dXG4gIGRyb3BBdHRhY2ggPSBkcm9wQXR0YWNoLmpvaW4oJyAnKVxuICByZXR1cm4gZHJvcEF0dGFjaFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydEF0dGFjaCAoc3RyKSB7XG4gIHZhciBsaXN0ID0gc3RyLnNwbGl0KCcgJylcblxuICB2YXIgZmlyc3QgPSBsaXN0WzBdXG4gIHZhciBzZWNvbmQgPSBsaXN0WzFdXG5cbiAgaWYgKFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoZmlyc3QpID49IDApIHtcbiAgICB2YXIgX3JlZiA9IFtzZWNvbmQsIGZpcnN0XVxuICAgIGZpcnN0ID0gX3JlZlswXVxuICAgIHNlY29uZCA9IF9yZWZbMV1cbiAgfVxuICByZXR1cm4gW2ZpcnN0LCBzZWNvbmRdLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV0aGVyQXR0YWNobWVudHMgKHBvc2l0aW9uKSB7XG4gIGNvbnN0IGRyb3BBdHRhY2ggPSBtaXJyb3JBdHRhY2htZW50KHBvc2l0aW9uKVxuICByZXR1cm4ge1xuICAgIGF0dGFjaG1lbnQ6IHNvcnRBdHRhY2goZHJvcEF0dGFjaCksXG4gICAgdGFyZ2V0QXR0YWNobWVudDogc29ydEF0dGFjaChwb3NpdGlvbiksXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRldGhlci10b29sdGlwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidGV0aGVyLXRvb2x0aXBcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdnRvb2x0aXAsIHsgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3YtdG9vbHRpcCdcblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgfHwge30pXG4gIHZ0b29sdGlwLm9wdGlvbnMgPSBvcHRpb25zXG4gIFZ1ZS5kaXJlY3RpdmUoJ3Rvb2x0aXAnLCB2dG9vbHRpcClcbn1cblxuZXhwb3J0IGNvbnN0IFZUb29sdGlwID0gdnRvb2x0aXBcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbnN0YWxsLFxufVxuXG4vLyBBdXRvLWluc3RhbGxcbmxldCBHbG9iYWxWdWUgPSBudWxsXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgR2xvYmFsVnVlID0gd2luZG93LlZ1ZVxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICBHbG9iYWxWdWUgPSBnbG9iYWwuVnVlXG59XG5pZiAoR2xvYmFsVnVlKSB7XG4gIEdsb2JhbFZ1ZS51c2UoaW5zdGFsbClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=