(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AgGridComponents"] = factory();
	else
		root["Basis"] = root["Basis"] || {}, root["Basis"]["AgGridComponents"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(45);
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Component__["a" /* default */]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = autobind;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(7);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var defineProperty = Object.defineProperty,
    getPrototypeOf = Object.getPrototypeOf;
var mapStore;

function getBoundSuper(obj, fn) {
  if (typeof WeakMap === 'undefined') {
    throw new Error("Using @autobind on ".concat(fn.name, "() requires WeakMap support due to its use of super.").concat(fn.name, "()\n      See https://github.com/jayphelps/core-decorators.js/issues/20"));
  }

  if (!mapStore) {
    mapStore = new WeakMap();
  }

  if (mapStore.has(obj) === false) {
    mapStore.set(obj, new WeakMap());
  }

  var superStore = mapStore.get(obj);

  if (superStore.has(fn) === false) {
    superStore.set(fn, Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["a" /* bind */])(fn, obj));
  }

  return superStore.get(fn);
}

function autobindClass(klass) {
  var descs = Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["e" /* getOwnPropertyDescriptors */])(klass.prototype);
  var keys = Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["d" /* getOwnKeys */])(descs);

  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    var desc = descs[key];

    if (typeof desc.value !== 'function' || key === 'constructor') {
      continue;
    }

    defineProperty(klass.prototype, key, autobindMethod(klass.prototype, key, desc));
  }
}

function autobindMethod(target, key, _ref) {
  var fn = _ref.value,
      configurable = _ref.configurable,
      enumerable = _ref.enumerable;

  if (typeof fn !== 'function') {
    throw new SyntaxError("@autobind can only be used on functions, not: ".concat(fn));
  }

  var constructor = target.constructor;
  return {
    configurable: configurable,
    enumerable: enumerable,
    get: function get() {
      // Class.prototype.key lookup
      // Someone accesses the property directly on the prototype on which it is
      // actually defined on, i.e. Class.prototype.hasOwnProperty(key)
      if (this === target) {
        return fn;
      } // Class.prototype.key lookup
      // Someone accesses the property directly on a prototype but it was found
      // up the chain, not defined directly on it
      // i.e. Class.prototype.hasOwnProperty(key) == false && key in Class.prototype


      if (this.constructor !== constructor && getPrototypeOf(this).constructor === constructor) {
        return fn;
      } // Autobound method calling super.sameMethod() which is also autobound and so on.


      if (this.constructor !== constructor && key in this.constructor.prototype) {
        return getBoundSuper(this, fn);
      }

      var boundFn = Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["a" /* bind */])(fn, this);
      defineProperty(this, key, {
        configurable: true,
        writable: true,
        // NOT enumerable when it's a bound method
        enumerable: false,
        value: boundFn
      });
      return boundFn;
    },
    set: Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["b" /* createDefaultSetter */])(key)
  };
}

function handle(args) {
  if (args.length === 1) {
    return autobindClass.apply(void 0, _toConsumableArray(args));
  } else {
    return autobindMethod.apply(void 0, _toConsumableArray(args));
  }
}

function autobind() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    return function () {
      return handle(arguments);
    };
  } else {
    return handle(args);
  }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = override;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var GENERIC_FUNCTION_ERROR = '{child} does not properly override {parent}';
var FUNCTION_REGEXP = /^function ([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?(\([^\)]*\))[\s\S]+$/;

var SyntaxErrorReporter = /*#__PURE__*/function () {
  _createClass(SyntaxErrorReporter, [{
    key: "_getTopic",
    value: function _getTopic(descriptor) {
      if (descriptor === undefined) {
        return null;
      }

      if ('value' in descriptor) {
        return descriptor.value;
      }

      if ('get' in descriptor) {
        return descriptor.get;
      }

      if ('set' in descriptor) {
        return descriptor.set;
      }
    }
  }, {
    key: "_extractTopicSignature",
    value: function _extractTopicSignature(topic) {
      switch (_typeof(topic)) {
        case 'function':
          return this._extractFunctionSignature(topic);

        default:
          return this.key;
      }
    }
  }, {
    key: "_extractFunctionSignature",
    value: function _extractFunctionSignature(fn) {
      var _this = this;

      return fn.toString().replace(FUNCTION_REGEXP, function (match) {
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.key;
        var params = arguments.length > 2 ? arguments[2] : undefined;
        return name + params;
      });
    }
  }, {
    key: "key",
    get: function get() {
      return this.childDescriptor.key;
    }
  }, {
    key: "parentNotation",
    get: function get() {
      return "".concat(this.parentKlass.constructor.name, "#").concat(this.parentPropertySignature);
    }
  }, {
    key: "childNotation",
    get: function get() {
      return "".concat(this.childKlass.constructor.name, "#").concat(this.childPropertySignature);
    }
  }, {
    key: "parentTopic",
    get: function get() {
      return this._getTopic(this.parentDescriptor);
    }
  }, {
    key: "childTopic",
    get: function get() {
      return this._getTopic(this.childDescriptor);
    }
  }, {
    key: "parentPropertySignature",
    get: function get() {
      return this._extractTopicSignature(this.parentTopic);
    }
  }, {
    key: "childPropertySignature",
    get: function get() {
      return this._extractTopicSignature(this.childTopic);
    }
  }]);

  function SyntaxErrorReporter(parentKlass, childKlass, parentDescriptor, childDescriptor) {
    _classCallCheck(this, SyntaxErrorReporter);

    this.parentKlass = void 0;
    this.childKlass = void 0;
    this.parentDescriptor = void 0;
    this.childDescriptor = void 0;
    this.parentKlass = parentKlass;
    this.childKlass = childKlass;
    this.parentDescriptor = parentDescriptor;
    this.childDescriptor = childDescriptor;
  }

  _createClass(SyntaxErrorReporter, [{
    key: "assert",
    value: function assert(condition) {
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (condition !== true) {
        this.error(GENERIC_FUNCTION_ERROR + msg);
      }
    }
  }, {
    key: "error",
    value: function error(msg) {
      var _this2 = this;

      msg = msg // Replace lazily, because they actually might not
      // be available in all cases
      .replace('{parent}', function (m) {
        return _this2.parentNotation;
      }).replace('{child}', function (m) {
        return _this2.childNotation;
      });
      throw new SyntaxError(msg);
    }
  }]);

  return SyntaxErrorReporter;
}();

function getDescriptorType(descriptor) {
  if (descriptor.hasOwnProperty('value')) {
    return 'data';
  }

  if (descriptor.hasOwnProperty('get') || descriptor.hasOwnProperty('set')) {
    return 'accessor';
  } // If none of them exist, browsers treat it as
  // a data descriptor with a value of `undefined`


  return 'data';
}

function checkFunctionSignatures(parent, child, reporter) {
  reporter.assert(parent.length === child.length);
}

function checkDataDescriptors(parent, child, reporter) {
  var parentValueType = _typeof(parent.value);

  var childValueType = _typeof(child.value);

  if (parentValueType === 'undefined' && childValueType === 'undefined') {
    // class properties can be any expression, which isn't ran until the
    // the instance is created, so we can't reliably get type information
    // for them yet (per spec). Perhaps when Babel includes flow-type info
    // in runtime? Tried regex solutions, but super hacky and only feasible
    // on primitives, which is confusing for usage...
    reporter.error("descriptor values are both undefined. (class properties are are not currently supported)'");
  }

  if (parentValueType !== childValueType) {
    var isFunctionOverUndefined = childValueType === 'function' && parentValueType === undefined; // Even though we don't support class properties, this
    // will still handle more than just functions, just in case.
    // Shadowing an undefined value is an error if the inherited
    // value was undefined (usually a class property, not a method)

    if (isFunctionOverUndefined || parentValueType !== undefined) {
      reporter.error("value types do not match. {parent} is \"".concat(parentValueType, "\", {child} is \"").concat(childValueType, "\""));
    }
  } // Switch, in preparation for supporting more types


  switch (childValueType) {
    case 'function':
      checkFunctionSignatures(parent.value, child.value, reporter);
      break;

    default:
      reporter.error("Unexpected error. Please file a bug with: {parent} is \"".concat(parentValueType, "\", {child} is \"").concat(childValueType, "\""));
      break;
  }
}

function checkAccessorDescriptors(parent, child, reporter) {
  var parentHasGetter = typeof parent.get === 'function';
  var childHasGetter = typeof child.get === 'function';
  var parentHasSetter = typeof parent.set === 'function';
  var childHasSetter = typeof child.set === 'function';

  if (parentHasGetter || childHasGetter) {
    if (!parentHasGetter && parentHasSetter) {
      reporter.error("{parent} is setter but {child} is getter");
    }

    if (!childHasGetter && childHasSetter) {
      reporter.error("{parent} is getter but {child} is setter");
    }

    checkFunctionSignatures(parent.get, child.get, reporter);
  }

  if (parentHasSetter || childHasSetter) {
    if (!parentHasSetter && parentHasGetter) {
      reporter.error("{parent} is getter but {child} is setter");
    }

    if (!childHasSetter && childHasGetter) {
      reporter.error("{parent} is setter but {child} is getter");
    }

    checkFunctionSignatures(parent.set, child.set, reporter);
  }
}

function checkDescriptors(parent, child, reporter) {
  var parentType = getDescriptorType(parent);
  var childType = getDescriptorType(child);

  if (parentType !== childType) {
    reporter.error("descriptor types do not match. {parent} is \"".concat(parentType, "\", {child} is \"").concat(childType, "\""));
  }

  switch (childType) {
    case 'data':
      checkDataDescriptors(parent, child, reporter);
      break;

    case 'accessor':
      checkAccessorDescriptors(parent, child, reporter);
      break;
  }
}

var suggestionTransforms = [function (key) {
  return key.toLowerCase();
}, function (key) {
  return key.toUpperCase();
}, function (key) {
  return key + 's';
}, function (key) {
  return key.slice(0, -1);
}, function (key) {
  return key.slice(1, key.length);
}];

function findPossibleAlternatives(superKlass, key) {
  for (var i = 0, l = suggestionTransforms.length; i < l; i++) {
    var fn = suggestionTransforms[i];
    var suggestion = fn(key);

    if (suggestion in superKlass) {
      return suggestion;
    }
  }

  return null;
}

function handleDescriptor(target, key, descriptor) {
  descriptor.key = key;
  var superKlass = Object.getPrototypeOf(target);
  var superDescriptor = Object.getOwnPropertyDescriptor(superKlass, key);
  var reporter = new SyntaxErrorReporter(superKlass, target, superDescriptor, descriptor);

  if (superDescriptor === undefined) {
    var suggestedKey = findPossibleAlternatives(superKlass, key);
    var suggestion = suggestedKey ? "\n\n  Did you mean \"".concat(suggestedKey, "\"?") : '';
    reporter.error("No descriptor matching {child} was found on the prototype chain.".concat(suggestion));
  }

  checkDescriptors(superDescriptor, descriptor, reporter);
  return descriptor;
}

function override() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(50);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(73);



/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value) : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isDescriptor */
/* harmony export (immutable) */ __webpack_exports__["c"] = decorate;
/* unused harmony export metaFor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getOwnKeys; });
/* harmony export (immutable) */ __webpack_exports__["e"] = getOwnPropertyDescriptors;
/* harmony export (immutable) */ __webpack_exports__["b"] = createDefaultSetter;
/* harmony export (immutable) */ __webpack_exports__["a"] = bind;
/* unused harmony export warn */
/* unused harmony export internalDeprecation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lazy_initialize__ = __webpack_require__(47);
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var defineProperty = Object.defineProperty,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    getOwnPropertySymbols = Object.getOwnPropertySymbols;
function isDescriptor(desc) {
  if (!desc || !desc.hasOwnProperty) {
    return false;
  }

  var keys = ['value', 'initializer', 'get', 'set'];

  for (var i = 0, l = keys.length; i < l; i++) {
    if (desc.hasOwnProperty(keys[i])) {
      return true;
    }
  }

  return false;
}
function decorate(handleDescriptor, entryArgs) {
  if (isDescriptor(entryArgs[entryArgs.length - 1])) {
    return handleDescriptor.apply(void 0, _toConsumableArray(entryArgs).concat([[]]));
  } else {
    return function () {
      return handleDescriptor.apply(void 0, _toConsumableArray(Array.prototype.slice.call(arguments)).concat([entryArgs]));
    };
  }
}
var Meta = (_class = (_temp = function Meta() {
  _classCallCheck(this, Meta);

  _initializerDefineProperty(this, "debounceTimeoutIds", _descriptor, this);

  _initializerDefineProperty(this, "throttleTimeoutIds", _descriptor2, this);

  _initializerDefineProperty(this, "throttlePreviousTimestamps", _descriptor3, this);

  _initializerDefineProperty(this, "throttleTrailingArgs", _descriptor4, this);

  _initializerDefineProperty(this, "profileLastRan", _descriptor5, this);
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "debounceTimeoutIds", [__WEBPACK_IMPORTED_MODULE_0__lazy_initialize__["a" /* default */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "throttleTimeoutIds", [__WEBPACK_IMPORTED_MODULE_0__lazy_initialize__["a" /* default */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "throttlePreviousTimestamps", [__WEBPACK_IMPORTED_MODULE_0__lazy_initialize__["a" /* default */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "throttleTrailingArgs", [__WEBPACK_IMPORTED_MODULE_0__lazy_initialize__["a" /* default */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "profileLastRan", [__WEBPACK_IMPORTED_MODULE_0__lazy_initialize__["a" /* default */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
})), _class);
var META_KEY = typeof Symbol === 'function' ? Symbol('__core_decorators__') : '__core_decorators__';
function metaFor(obj) {
  if (obj.hasOwnProperty(META_KEY) === false) {
    defineProperty(obj, META_KEY, {
      // Defaults: NOT enumerable, configurable, or writable
      value: new Meta()
    });
  }

  return obj[META_KEY];
}
var getOwnKeys = getOwnPropertySymbols ? function (object) {
  return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
} : getOwnPropertyNames;
function getOwnPropertyDescriptors(obj) {
  var descs = {};
  getOwnKeys(obj).forEach(function (key) {
    return descs[key] = getOwnPropertyDescriptor(obj, key);
  });
  return descs;
}
function createDefaultSetter(key) {
  return function set(newValue) {
    Object.defineProperty(this, key, {
      configurable: true,
      writable: true,
      // IS enumerable when reassigned by the outside word
      enumerable: true,
      value: newValue
    });
    return newValue;
  };
}
function bind(fn, context) {
  if (fn.bind) {
    return fn.bind(context);
  } else {
    return function __autobind__() {
      return fn.apply(context, arguments);
    };
  }
}
var warn = function () {
  if ((typeof console === "undefined" ? "undefined" : _typeof(console)) !== 'object' || !console || typeof console.warn !== 'function') {
    return function () {};
  } else {
    return bind(console.warn, console);
  }
}();
var seenDeprecations = {};
function internalDeprecation(msg) {
  if (seenDeprecations[msg] !== true) {
    seenDeprecations[msg] = true;
    warn('DEPRECATION: ' + msg);
  }
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["a"] = (isObject);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(10);

/** Built-in value references. */

var _Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;
/* harmony default export */ __webpack_exports__["a"] = (_Symbol);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(20);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();
/* harmony default export */ __webpack_exports__["a"] = (root);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/* harmony default export */ __webpack_exports__["a"] = (eq);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isLength_js__ = __webpack_require__(26);


/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && Object(__WEBPACK_IMPORTED_MODULE_1__isLength_js__["a" /* default */])(value.length) && !Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (isArrayLike);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toInteger;
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = requiredArgs;
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BooleanSwitch__ = __webpack_require__(46);
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__BooleanSwitch__["a" /* default */]);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateRenderer__ = __webpack_require__(65);
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__TemplateRenderer__["a" /* default */]);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defineProperty_js__ = __webpack_require__(18);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function baseAssignValue(object, key, value) {
  if (key == '__proto__' && __WEBPACK_IMPORTED_MODULE_0__defineProperty_js__["a" /* default */]) {
    Object(__WEBPACK_IMPORTED_MODULE_0__defineProperty_js__["a" /* default */])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (baseAssignValue);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(70);


var defineProperty = function () {
  try {
    var func = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

/* harmony default export */ __webpack_exports__["a"] = (defineProperty);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObject_js__ = __webpack_require__(8);


/** `Object#toString` result references. */

var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__isObject_js__["a" /* default */])(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ __webpack_exports__["a"] = (isFunction);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(21)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overRest_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setToString_js__ = __webpack_require__(80);



/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */

function baseRest(func, start) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__setToString_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__overRest_js__["a" /* default */])(func, start, __WEBPACK_IMPORTED_MODULE_0__identity_js__["a" /* default */]), func + '');
}

/* harmony default export */ __webpack_exports__["a"] = (baseRest);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ __webpack_exports__["a"] = (identity);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

/* harmony default export */ __webpack_exports__["a"] = (apply);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eq_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isIndex_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isObject_js__ = __webpack_require__(8);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */

function isIterateeCall(value, index, object) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_3__isObject_js__["a" /* default */])(object)) {
    return false;
  }

  var type = _typeof(index);

  if (type == 'number' ? Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a" /* default */])(object) && Object(__WEBPACK_IMPORTED_MODULE_2__isIndex_js__["a" /* default */])(index, object.length) : type == 'string' && index in object) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__eq_js__["a" /* default */])(object[index], value);
  }

  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (isIterateeCall);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ __webpack_exports__["a"] = (isLength);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/* harmony default export */ __webpack_exports__["a"] = (isIndex);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseTimes_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArguments_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArray_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isBuffer_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isIndex_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isTypedArray_js__ = __webpack_require__(90);






/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = Object(__WEBPACK_IMPORTED_MODULE_2__isArray_js__["a" /* default */])(value),
      isArg = !isArr && Object(__WEBPACK_IMPORTED_MODULE_1__isArguments_js__["a" /* default */])(value),
      isBuff = !isArr && !isArg && Object(__WEBPACK_IMPORTED_MODULE_3__isBuffer_js__["a" /* default */])(value),
      isType = !isArr && !isArg && !isBuff && Object(__WEBPACK_IMPORTED_MODULE_5__isTypedArray_js__["a" /* default */])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? Object(__WEBPACK_IMPORTED_MODULE_0__baseTimes_js__["a" /* default */])(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    Object(__WEBPACK_IMPORTED_MODULE_4__isIndex_js__["a" /* default */])(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (arrayLikeKeys);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
/* harmony default export */ __webpack_exports__["a"] = (isArray);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

/* harmony default export */ __webpack_exports__["a"] = (isPrototype);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isPlainObject_js__ = __webpack_require__(97);



/** `Object#toString` result references. */

var domExcTag = '[object DOMException]',
    errorTag = '[object Error]';
/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */

function isError(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["a" /* default */])(value)) {
    return false;
  }

  var tag = Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value);
  return tag == errorTag || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !Object(__WEBPACK_IMPORTED_MODULE_2__isPlainObject_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (isError);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (arrayMap);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used to match template delimiters. */
var reInterpolate = /<%=([\s\S]+?)%>/g;
/* harmony default export */ __webpack_exports__["a"] = (reInterpolate);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseToString_js__ = __webpack_require__(109);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : Object(__WEBPACK_IMPORTED_MODULE_0__baseToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (toString);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = readonly;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(7);


function handleDescriptor(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function readonly() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = utcToZonedTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_tzParseTimezone__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_esm_subMilliseconds__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate__ = __webpack_require__(121);



/**
 * @name utcToZonedTime
 * @category Time Zone Helpers
 * @summary Get a date/time representing local time in a given time zone from the UTC date
 *
 * @description
 * Returns a date instance with values representing the local time in the time zone
 * specified of the UTC time from the date provided. In other words, when the new date
 * is formatted it will show the equivalent hours in the target time zone regardless
 * of the current system time zone.
 *
 * @param {Date|String|Number} date - the date with the relevant UTC time
 * @param {String} timeZone - the time zone to get local time for, can be an offset or IANA time zone
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the equivalent time in the time zone
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am UTC is 6am in New York (-04:00)
 * const result = utcToZonedTime('2014-06-25T10:00:00.000Z', 'America/New_York')
 * //=> Jun 25 2014 06:00:00
 */

function utcToZonedTime(dirtyDate, timeZone, options) {
  var date = Object(__WEBPACK_IMPORTED_MODULE_2__toDate__["a" /* default */])(dirtyDate, options); // This date has the UTC time values of the input date at the system time zone

  var utcDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()); // We just need to apply the offset indicated by the time zone to this localized date

  var offsetMilliseconds = Object(__WEBPACK_IMPORTED_MODULE_0__lib_tzParseTimezone__["a" /* default */])(timeZone, utcDate);
  return offsetMilliseconds ? Object(__WEBPACK_IMPORTED_MODULE_1_date_fns_esm_subMilliseconds__["a" /* default */])(utcDate, offsetMilliseconds) : utcDate;
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tzParseTimezone;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tzTokenizeDate_index_js__ = __webpack_require__(117);

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var patterns = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
  timezoneIANA: /(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
}; // Parse various time zone offset formats to an offset in milliseconds

function tzParseTimezone(timezoneString, date) {
  var token;
  var absoluteOffset; // Z

  token = patterns.timezoneZ.exec(timezoneString);

  if (token) {
    return 0;
  }

  var hours; // ±hh

  token = patterns.timezoneHH.exec(timezoneString);

  if (token) {
    hours = parseInt(token[2], 10);

    if (!validateTimezone(hours)) {
      return NaN;
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR;
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  } // ±hh:mm or ±hhmm


  token = patterns.timezoneHHMM.exec(timezoneString);

  if (token) {
    hours = parseInt(token[2], 10);
    var minutes = parseInt(token[3], 10);

    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  } // IANA time zone


  token = patterns.timezoneIANA.exec(timezoneString);

  if (token) {
    // var [fYear, fMonth, fDay, fHour, fMinute, fSecond] = tzTokenizeDate(date, timezoneString)
    var tokens = Object(__WEBPACK_IMPORTED_MODULE_0__tzTokenizeDate_index_js__["a" /* default */])(date, timezoneString);
    var asUTC = Date.UTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3], tokens[4], tokens[5]);
    var timestampWithMsZeroed = date.getTime() - date.getTime() % 1000;
    return -(asUTC - timestampWithMsZeroed);
  }

  return 0;
}

function validateTimezone(hours, minutes) {
  if (minutes != null && (minutes < 0 || minutes > 59)) {
    return false;
  }

  return true;
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventsMixin__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__EventsMixin__["b"]; });
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__EventsMixin__["a" /* EventsMixin */]);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DateTimeInput__ = __webpack_require__(124);
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__DateTimeInput__["a" /* default */]);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BooleanEditor__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BooleanRenderer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BooleanFilter__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NumberEditor__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TextEditor__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TemplateRenderer__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ImageRenderer__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DateTimeFilter__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DateTimeEditor__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanEditor", function() { return __WEBPACK_IMPORTED_MODULE_0__BooleanEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanRenderer", function() { return __WEBPACK_IMPORTED_MODULE_1__BooleanRenderer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanFilter", function() { return __WEBPACK_IMPORTED_MODULE_2__BooleanFilter__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NumberEditor", function() { return __WEBPACK_IMPORTED_MODULE_3__NumberEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__TextEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRenderer", function() { return __WEBPACK_IMPORTED_MODULE_5__TemplateRenderer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ImageRenderer", function() { return __WEBPACK_IMPORTED_MODULE_6__ImageRenderer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFilter", function() { return __WEBPACK_IMPORTED_MODULE_7__DateTimeFilter__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeEditor", function() { return __WEBPACK_IMPORTED_MODULE_8__DateTimeEditor__["a"]; });
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */











/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BooleanEditor__ = __webpack_require__(44);
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__BooleanEditor__["a" /* default */]);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BooleanSwitch__ = __webpack_require__(15);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/**
 * Booleans Editor
 *
 * Handle boolean values Editing
 *
 * ## Options
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **booleanUsedTrueValue**   | undefined    | the value to return when the editor changes the current cell value to true. in case it is undefined then we use the first item in **booleanTrueValue[]**
 * | **booleanUsedFalseValue**   | undefined    | the value to return when the editor changes the current cell value to false. in case it is undefined then we use the first item in **booleanFalseValue[]**
 * | **booleanTrueValue[]**       | true(bool)  	| The options describes what is considered `true`                                                                                	|
 * | **booleanFalseValue[]**      | false(bool) 	| The options describes what is considered `false`
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */

var BooleanEditor = /*#__PURE__*/function (_Component) {
  _inherits(BooleanEditor, _Component);

  var _super = _createSuper(BooleanEditor);

  function BooleanEditor() {
    _classCallCheck(this, BooleanEditor);

    return _super.apply(this, arguments);
  }

  _createClass(BooleanEditor, [{
    key: "init",

    /**
     *  @inheritDoc
     */
    value: function init(params) {
      var _this = this;

      if (params.keyPress !== null) {
        this._value = Boolean(params.keyPress);
      } else if (params.charPress !== null) {
        this._value = Boolean(params.charPress);
      }

      this._trueValue = [].concat(this.getOption('booleanTrueValue', params, [true]));
      this._falseValue = [].concat(this.getOption('booleanFalseValue', params, [false]));
      this._returnTrueValue = this.getOption('booleanUsedTrueValue', params, this._trueValue[0]);
      this._returnFalseValue = this.getOption('booleanUsedFalseValue', params, this._falseValue[0]);
      this._trueValue = this._trueValue.map(function (x) {
        return String(x);
      });
      this._falseValue = this._falseValue.map(function (x) {
        return String(x);
      });
      this.focusAfterAttached = params.cellStartedEdit;

      if (this.focusAfterAttached) {
        var keyPressBackspaceOrDelete = params.keyPress == 32 || params.keyPress == 46; // space // delete

        if (keyPressBackspaceOrDelete) {
          this._value = false;
        } else if (params.charPress !== null) {
          this._value = params.charPress;
        } else {
          this._value = params.value;
        }
      } else {
        this._value = params.value;
      }

      this._value = this._convertValue(this._value, this._trueValue, this._falseValue);
      this._switcher = new __WEBPACK_IMPORTED_MODULE_1__BooleanSwitch__["a" /* default */](this._value, function (switcher) {
        _this._value = _this._convertValue(switcher.isChecked(), _this._trueValue, _this._falseValue);
      });

      this._switcher.init(params);
    }
    /**
     *  @inheritDoc
     */

  }, {
    key: "getGui",
    value: function getGui() {
      return this._switcher.getGui();
    }
    /**
     *  @inheritDoc
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._switcher.destroy();
    }
    /**
     * Gets called once after GUI is attached to DOM.
     * Make sure the container is always focused and listening to key changes
     */

  }, {
    key: "afterGuiAttached",
    value: function afterGuiAttached() {
      if (this.focusAfterAttached) {
        this.focusIn();
      }
    }
    /**
     * Get the final value to the grid, the result of the editing
     *
     * @return {Boolean}
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this._value ? this._returnTrueValue : this._returnFalseValue;
    }
    /**
     * Gets called once after initialized and returns false so the editor appears in the cell
     *
     * @return {Boolean} always false
     **/

  }, {
    key: "isPopup",
    value: function isPopup() {
      return false;
    }
    /**
     * If doing full row edit, then gets called when tabbing into the cell.
     *
     * @return {Boolean}
     */

  }, {
    key: "focusIn",
    value: function focusIn() {
      this._switcher.setDisabled(false);

      this._switcher.focus();

      return true;
    }
    /**
     * If doing full row edit, then gets called when tabbing out of the cell.
     *
     * @return {Boolean}
     */

  }, {
    key: "focusOut",
    value: function focusOut() {
      this._switcher.setDisabled(true);

      return true;
    }
    /**
     * @param {Boolean} value the current cell value
     * @param {String|Number} trueValue true value alias
     * @param {String|Number} falseValue false value alias
     */

  }, {
    key: "_convertValue",
    value: function _convertValue(value, trueValue, falseValue) {
      var valueAsString = String(value);
      return trueValue.indexOf(valueAsString) > -1 ? true : falseValue.indexOf(valueAsString) > -1 ? false : value;
    }
  }]);

  return BooleanEditor;
}(__WEBPACK_IMPORTED_MODULE_0__Component__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (BooleanEditor);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-disable no-prototype-builtins */

/**
 * The base component class
 *
 * This class is the abstract class which all components should use
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);

    this._gui = null;
  }

  _createClass(Component, [{
    key: "init",

    /**
     * Initialize the component
     *
     * @param {Object} params
     *
     * @return void
     */
    // eslint-disable-next-line no-unused-vars
    value: function init(params) {
      console.warn("".concat(this.constructor.name, " does not implement the [init] method"));
    }
    /**
     * Return the DOM element of the component, this is what the grid puts into the cell
     *
     * @return {HTMLElement}
     */

  }, {
    key: "getGui",
    value: function getGui() {
      return this._gui;
    }
    /**
     * Gets called when the component is destroyed. If your custom component needs to do
     * any resource cleaning up, do it here.
     */

  }, {
    key: "destroy",
    value: function destroy() {// pass
    }
    /**
     * Find the required option value
     *
     * This function will try to find the passed option's value in the following order
     *
     *  1. params
     *  2. Search `params.colDef`
     *  3. Search `params.context.AGridComponentsMetaConfig[COLUMN_ID]` or `params.context.meta[COLUMN_ID]`
     *  4. Search `params.context.AGridComponentsMetaConfig` or `params.context.meta`
     *  5. Search `params.context`
     *  6. If none found return the fallback
     *
     * @param {String} name the name of the option
     * @param {params} params an object used to search for the option
     * @param {String} fallback a value to return in case the option can not be found
     */

  }, {
    key: "getOption",
    value: function getOption(name, params) {
      var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var option;

      if (params && params.hasOwnProperty(name) && params[name] !== null) {
        option = params[name];
      } else {
        // try to fetch from the column def first
        if (params.hasOwnProperty('colDef') && params.colDef.hasOwnProperty(name) && params.colDef[name] !== null) {
          option = params.colDef[name];
        } else {
          // try to fetch from AGridComponentsMetaConfig|meta in the context
          var AGridComponentsMetaConfig = null;

          if (params.hasOwnProperty('context')) {
            AGridComponentsMetaConfig = params.context.AGridComponentsMetaConfig || params.context.meta;
          }

          if (AGridComponentsMetaConfig && AGridComponentsMetaConfig.hasOwnProperty(params.column.colId) && AGridComponentsMetaConfig[params.column.colId].hasOwnProperty(name) && AGridComponentsMetaConfig[params.column.colId][name] !== null) {
            option = AGridComponentsMetaConfig[params.column.colId][name];
          } else if (AGridComponentsMetaConfig && AGridComponentsMetaConfig.hasOwnProperty(name) && AGridComponentsMetaConfig[name] !== null) {
            option = AGridComponentsMetaConfig[name];
          } else {
            // try to fetch from the context object itself
            var context = params.context;

            if (context && context.hasOwnProperty(name) && context[name] !== null) {
              option = context[name];
            } else {
              // try to check params itself or fallback to default
              option = fallback;
            }
          }
        }
      }

      return typeof option !== 'undefined' ? option : fallback;
    }
    /**
     * Get Window Instance
     *
     * @param {params} params an object used to search for the window instance
     *
     * @return {Window}
     */

  }, {
    key: "getWin",
    value: function getWin(params) {
      var win = this.getOption('window', params) || window || null;

      if (!win) {
        throw new Error('Current environment does not support window');
      }

      return win;
    }
    /**
     * Get document Instance
     *
     * @param {params} params an object used to search for the document instance
     *
     * @return {HTMLDocument}
     */

  }, {
    key: "getDoc",
    value: function getDoc(params) {
      var doc = this.getOption('document', params) || document || null;

      if (!doc) {
        throw new Error('Current environment does not support document');
      }

      return doc;
    }
  }]);

  return Component;
}();

/* harmony default export */ __webpack_exports__["a"] = (Component);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);
var _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */




/**
 * Boolean Renderer
 *
 * Simple toggle switch to handle boolean values
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */

var BooleanSwitch = (_class = /*#__PURE__*/function (_Component) {
  _inherits(BooleanSwitch, _Component);

  var _super = _createSuper(BooleanSwitch);

  /**
   * Construct new BooleanSwitch Component
   *
   * @param {Boolean} [initialValue = false] the default state , checked or unchecked
   * @param {Function} [listener = null] a listener to be called when the state is changed
   */
  function BooleanSwitch() {
    var _this;

    var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, BooleanSwitch);

    _this = _super.call(this);

    _this.setChecked(initialValue);

    _this.setListener(listener);

    _this.setDisabled(false);

    return _this;
  }
  /**
   *  @inheritDoc
   */


  _createClass(BooleanSwitch, [{
    key: "init",
    value: function init(params) {
      this._params = params;
      this._onClick = this._onClick.bind(this);
      this._onKeydown = this._onKeydown.bind(this);
      this._gui = this.getDoc(params).createElement('div');
      this._gui.className = 'boolSwitch__wrapper';
      this._gui.tabIndex = -1;
      this.render();
    }
    /**
     * Render the switch slider and hidden input.
     */

  }, {
    key: "render",
    value: function render() {
      var doc = this.getDoc(this._params);
      var boolSwitch = document.createElement('div');
      boolSwitch.className = 'boolSwitch'; // input

      this._input = doc.createElement('input');
      this._input.id = "el-".concat(Math.random());
      this._input.name = 'checkbox';
      this._input.className = 'boolSwitch__checkbox';
      this._input.type = 'checkbox';
      this._input.checked = this.isChecked();
      this._input.disabled = this.isDisabled();
      this._input.tabIndex = '0'; // label

      var label = document.createElement('label');
      label.className = 'boolSwitch__label';
      label["for"] = this._input.id;
      label.innerHTML =
      /* html */
      "\n      <span class=\"boolSwitch__inner\"></span>\n      <span class=\"boolSwitch__switch\"></span>\n    "; // attache input and slider to component

      boolSwitch.appendChild(this._input);
      boolSwitch.appendChild(label);
      boolSwitch.addEventListener('click', this._onClick);

      this._gui.addEventListener('keydown', this._onKeydown);

      this._gui.appendChild(boolSwitch);
    }
    /**
     *  @inheritDoc
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var boolSwitch = this._gui.querySelector('.boolSwitch');

      boolSwitch.removeEventListener('click', this._onClick);

      this._gui.removeEventListener('keydown', this._onKeydown);
    }
    /**
     * Focus the component
     */

  }, {
    key: "focus",
    value: function focus() {
      this._gui.focus();

      this._input.focus();
    }
    /**
     * Set a listener to be called when the switch state is changed
     *
     * @param {Function} listener
     */

  }, {
    key: "setListener",
    value: function setListener(listener) {
      this._listener = listener;
    }
    /**
     * Get the listener instance , if
     *
     * @return {Function|null}
     */

  }, {
    key: "getListener",
    value: function getListener() {
      return this._listener;
    }
    /**
     * Set checked
     *
     * @param {Boolean} value true to check , false to uncheck
     */

  }, {
    key: "setChecked",
    value: function setChecked(value) {
      this._checked = value;

      if (this._input) {
        this._input.checked = value;
      }
    }
    /**
     * Check the if switch is checked
     *
     * @return {Boolean}  true when checked , false otherwise
     */

  }, {
    key: "isChecked",
    value: function isChecked() {
      return this._checked;
    }
    /**
     * Toggle the component state
     */

  }, {
    key: "toggle",
    value: function toggle() {
      this.setChecked(!this.isChecked());
    }
    /**
     * Set disabled
     *
     * @param {Boolean} value true to disabled , false to enable
     */

  }, {
    key: "setDisabled",
    value: function setDisabled(value) {
      this._disabled = value;

      if (this._input) {
        this._input.disabled = value;
      }
    }
    /**
     * Check if the switch is disabled
     *
     * @return {Boolean} true when disabled , false otherwise
     */

  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this._disabled;
    }
    /**
     * The default click listener of the switch. It will toggle the state and fire any registered listener
     *
     * @param {Event} e the event object
     *
     * @protected
     */

  }, {
    key: "_onClick",
    value: function _onClick(e) {
      if (this._disabled) {
        return false;
      }

      this.toggle();

      if (this._listener) {
        this._listener(this);
      }
    }
    /**
     * The default key listener of the switch. It will toggle the state using keyboard keys (left , right , space)
     * and fire any registered listener
     *
     * @param {Event} e  the event object
     *
     * @protected
     */

  }, {
    key: "_onKeydown",
    value: function _onKeydown(e) {
      if (this._disabled) {
        return false;
      }

      var key = e.which || e.keyCode; // space

      if (key == 32) {
        this.toggle();

        if (this._listener) {
          this._listener(this);
        }

        e.stopPropagation();
      } // right
      else if (key == 39) {
          this.setChecked(true);

          if (this._listener) {
            this._listener(this);
          }

          e.stopPropagation();
        } // left
        else if (key == 37) {
            this.setChecked(false);

            if (this._listener) {
              this._listener(this);
            }

            e.stopPropagation();
          }
    }
  }]);

  return BooleanSwitch;
}(__WEBPACK_IMPORTED_MODULE_2__Component__["a" /* default */]), (_applyDecoratedDescriptor(_class.prototype, "init", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "init"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "destroy", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "destroy"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onClick", [__WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onKeydown", [__WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onKeydown"), _class.prototype)), _class);
/* harmony default export */ __webpack_exports__["a"] = (BooleanSwitch);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lazyInitialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(7);

var defineProperty = Object.defineProperty;

function handleDescriptor(target, key, descriptor) {
  var configurable = descriptor.configurable,
      enumerable = descriptor.enumerable,
      initializer = descriptor.initializer,
      value = descriptor.value;
  return {
    configurable: configurable,
    enumerable: enumerable,
    get: function get() {
      // This happens if someone accesses the
      // property directly on the prototype
      if (this === target) {
        return;
      }

      var ret = initializer ? initializer.call(this) : value;
      defineProperty(this, key, {
        configurable: configurable,
        enumerable: enumerable,
        writable: true,
        value: ret
      });
      return ret;
    },
    set: Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["b" /* createDefaultSetter */])(key)
  };
}

function lazyInitialize() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(49);

if (typeof content === 'string') content = [[module.i, content, '']];
var transform;
var insertInto;
var options = {
  "hmr": true
};
options.transform = transform;

options.insertInto = function () {
  return window.parent.document.head;
};

var update = __webpack_require__(4)(content, options);

if (content.locals) module.exports = content.locals;

if (false) {
  module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss", function () {
    var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss");

    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];

    var locals = function (a, b) {
      var key,
          idx = 0;

      for (key in a) {
        if (!b || a[key] !== b[key]) return false;
        idx++;
      }

      for (key in b) {
        idx--;
      }

      return idx === 0;
    }(content.locals, newContent.locals);

    if (!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');
    update(newContent);
  });
  module.hot.dispose(function () {
    update();
  });
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".ag-cell-inline-editing .boolSwitch__wrapper{margin:auto 11px}.boolSwitch__wrapper{display:flex;width:100%;height:100%;align-items:center;outline:none;padding-left:6px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.boolSwitch{position:relative;width:55px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.boolSwitch__checkbox{display:none}.boolSwitch__label{display:block;overflow:hidden;cursor:pointer;border:2px solid var(--ag-input-border-color, var(--ag-border-color, #babfc7));border-radius:20px}.boolSwitch__inner{display:block;width:200%;margin-left:-100%;transition:margin 0.3s ease-in 0s}.boolSwitch__inner:before,.boolSwitch__inner:after{display:block;float:left;width:50%;height:15px;padding:0;line-height:15px;font-size:14px;color:white;font-family:'Segoe UI Symbol', Trebuchet, Arial, sans-serif;font-weight:bold;box-sizing:border-box}.boolSwitch__inner:before{content:'\\2714';padding-left:10px;background-color:var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3));color:#ffffff}.boolSwitch__inner:after{content:'\\2718';padding-right:10px;background-color:var(--ag-background-color);color:var(--ag-input-border-color, var(--ag-border-color, #babfc7));text-align:right}.boolSwitch__switch{display:block;width:18px;margin:1px;background:#ffffff;position:absolute;top:0;bottom:0;right:35px;border:2px solid var(--ag-input-border-color, var(--ag-border-color, #babfc7));border-radius:20px;transition:all 0.3s ease-in 0s}.boolSwitch__checkbox:checked+.boolSwitch__label .boolSwitch__inner{margin-left:0}.boolSwitch__checkbox:checked+.boolSwitch__label .boolSwitch__switch{right:0px}\n", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BooleanRenderer__ = __webpack_require__(52);
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__BooleanRenderer__["a" /* default */]);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BooleanSwitch__ = __webpack_require__(15);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/* eslint-disable no-prototype-builtins */

/**
 * Booleans Renderer
 *
 * Handle boolean values Rendering
 *
 * ## Options
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **booleanTrueRenderValue**  	| switch      	| The option controls how to render `true` values. <br> **switch** is a special value used to render true values as a switch component  	|
 * | **booleanFalseRenderValue** 	| switch      	| The option controls how to render `false` values. <br> **switch** is a special value used to render true values as a switch component 	|
 * | **booleanTrueValue[]**       | true(bool)  	| The options describes what is considered `true`                                                                                	|
 * | **booleanFalseValue[]**      | false(bool) 	| The options describes what is considered `false`                                                                               	|
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */

var BooleanRenderer = /*#__PURE__*/function (_Component) {
  _inherits(BooleanRenderer, _Component);

  var _super = _createSuper(BooleanRenderer);

  /**
   * Construct new BooleanRenderer
   */
  function BooleanRenderer() {
    var _this;

    _classCallCheck(this, BooleanRenderer);

    _this = _super.call(this); // will this affect BBj bui ?

    _this._gui = document.createElement('span');
    _this._gui.className = 'boolRenderer';
    _this._gui.style.fontFamily = '"Segoe UI Symbol",Trebuchet, Arial, sans-serif';
    return _this;
  }
  /**
   *  @inheritDoc
   */


  _createClass(BooleanRenderer, [{
    key: "init",
    value: function init(params) {
      this.refresh(params, true);
    }
    /**
     *  @inheritDoc
     */

  }, {
    key: "getGui",
    value: function getGui() {
      return this._gui;
    }
    /**
     *  @inheritDoc
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this._switcher) {
        this._switcher.destroy();
      }
    }
    /**
     * Refresh the cell
     *
     * @param {Object} params cell renderer params
     * @param {Boolean} isInit true when this method is being called in `init` phase , false otherwise
     *
     * @return {Boolean} true if the refresh succeeded, otherwise return false.
     */
    // eslint-disable-next-line no-unused-vars

  }, {
    key: "refresh",
    value: function refresh(params, isInit) {
      var value = params.valueFormatted ? params.valueFormatted : params.value;

      if (value === null || typeof value === 'undefined') {
        this._gui.innerHTML = '';
      } else {
        value = String(value);
        var booleanTrueRenderValue = String(this.getOption('booleanTrueRenderValue', params, 'switch'));
        var booleanFalseRenderValue = String(this.getOption('booleanFalseRenderValue', params, 'switch'));
        var booleanTrueValue = [].concat(this.getOption('booleanTrueValue', params, [true])).map(function (x) {
          return String(x);
        });
        var booleanFalseValue = [].concat(this.getOption('booleanFalseValue', params, [false])).map(function (x) {
          return String(x);
        }); // handle true values

        if (booleanTrueValue.indexOf(value) > -1) {
          if (!booleanTrueRenderValue.length || booleanTrueRenderValue === 'switch') {
            var switcher = this._getSwitcher(params);

            switcher.setChecked(true);
            this._gui.innerHTML = '';

            this._gui.appendChild(switcher.getGui());
          } else {
            this._gui.innerHTML = booleanTrueRenderValue;
          }
        } // handle false values
        else if (booleanFalseValue.indexOf(value) > -1) {
            if (!booleanFalseRenderValue.length || booleanFalseRenderValue === 'switch') {
              var _switcher = this._getSwitcher(params);

              _switcher.setChecked(false);

              this._gui.innerHTML = '';

              this._gui.appendChild(_switcher.getGui());
            } else {
              this._gui.innerHTML = booleanFalseRenderValue;
            }
          } else {
            this._gui.innerHTML = value;
          }
      }

      return true;
    }
    /**
     * Get switch instance if available , or create it otherwise
     *
     * @param {Object} params
     *
     * @return {BooleanSwitch} switch instance
     */

  }, {
    key: "_getSwitcher",
    value: function _getSwitcher(params) {
      if (!this._switcher) {
        this._switcher = new __WEBPACK_IMPORTED_MODULE_1__BooleanSwitch__["a" /* default */]();

        this._switcher.setDisabled(true);

        this._switcher.init(params);
      }

      return this._switcher;
    }
  }]);

  return BooleanRenderer;
}(__WEBPACK_IMPORTED_MODULE_0__Component__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (BooleanRenderer);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BooleanFilter__ = __webpack_require__(54);
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__BooleanFilter__["a" /* default */]);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);
var _class, _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */





var toTitleCase = function toTitleCase(phrase) {
  return phrase.toLowerCase().split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

var stripHTML = function stripHTML(html) {
  var tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};
/**
 * Booleans Filter
 *
 * Handle boolean values Filtering
 *
 * ## Options
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **booleanUsedTrueValue**   | undefined    | the value to use when the filter displays the true state . in case it is undefined then we use the first item in **booleanTrueValue[]**
 * | **booleanUsedFalseValue**   | undefined    | the value to use when the filter displays the false state. in case it is undefined then we use the first item in **booleanFalseValue[]**
 * | **booleanTrueValue[]**       | true(bool)  	| The options describes what is considered `true`                                                                                	|
 * | **booleanFalseValue[]**      | false(bool) 	| The options describes what is considered `false`
 * | **clearButton**   | false    |  Set to true to have the filter use a Clear button. The Clear button will clear the (form) details of the filter without removing any active filters on the column.
 * | **applyButton**   | false    |  Set to true to have the filter use an Apply button. If the Apply button is present, then the filter is only applied after the user hits the Apply button.
 * | **resetButton**   | false    |  Set to true to have the filter use a Reset button. The Reset button will clear the details of the filter and any active filters on that column.
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */


var BooleanFilter = (_class = (_temp = /*#__PURE__*/function (_Component) {
  _inherits(BooleanFilter, _Component);

  var _super = _createSuper(BooleanFilter);

  /**
   * True , false translation
   *
   * @type {Object}
   */

  /**
   * Construct new BooleanFilter
   */
  function BooleanFilter() {
    var _this;

    _classCallCheck(this, BooleanFilter);

    _this = _super.call(this);
    _this._booleanFilterTranslation = {};
    _this._gui = document.createElement('div');
    _this._gui.className = 'booleanFilter ag-filter-body-wrapper';
    _this._gui.tabIndex = '0';
    return _this;
  }
  /**
   * @inheritDoc
   */


  _createClass(BooleanFilter, [{
    key: "init",
    value: function init(params) {
      var translate = params.api.gridOptionsWrapper.getLocaleTextFunc();
      var isClearFilter = this.getOption('clearButton', params, false);
      var isResetButton = this.getOption('resetButton', params, false);
      var isApplyButton = this.getOption('applyButton', params, false);
      this._trueValue = [].concat(this.getOption('booleanTrueValue', params, [true])).map(function (x) {
        return String(x);
      });
      this._falseValue = [].concat(this.getOption('booleanFalseValue', params, [false])).map(function (x) {
        return String(x);
      });
      this._usedTrueValue = String(this.getOption('booleanUsedTrueValue', params, this._trueValue[0]));
      this._usedFalseValue = String(this.getOption('booleanUsedFalseValue', params, this._falseValue[0]));
      this._booleanFilterTranslation = this.getOption('booleanFilterTranslation', params, {
        "true": translate('booleanTrue', toTitleCase(String(this._usedTrueValue))),
        "false": translate('booleanFalse', toTitleCase(String(this._usedFalseValue))),
        reset: translate('booleanReset', translate('resetFilter', 'Reset Filter'))
      });
      this._params = params;
      this._filterText = null;
      this._onRadioChange = this._onRadioChange.bind(this, isApplyButton); // create body

      var body = document.createElement('div');
      body.className = 'booleanFilter__body ag-filter-body';
      body.style.padding = '5px 15px';
      body.innerHTML =
      /* html */
      "\n      <div class=\"booleanFilter__body__labels\">\n\n        <label class=\"ag-input-field-label ag-label ag-radio-button-label\">       \n            <div class=\"ag-wrapper-true ag-wrapper ag-input-wrapper ag-radio-button-input-wrapper\">\n              <input class=\"true-input ag-input-field-input ag-radio-button-input\" type=\"radio\" name=\"boolean\" value=\"true\"/>              \n          </div> \n          <span>".concat(this._booleanFilterTranslation["true"], "</span>\n        </label>\n\n\n        <label class=\"ag-input-field-label ag-label ag-radio-button-label\">       \n            <div class=\"ag-wrapper-false ag-wrapper ag-input-wrapper ag-radio-button-input-wrapper\">\n              <input class=\"false-input ag-input-field-input ag-radio-button-input\" type=\"radio\" name=\"boolean\" value=\"false\"/>              \n          </div> \n          <span>").concat(this._booleanFilterTranslation["false"], "</span>\n        </label>\n          \n          ").concat(!isResetButton ?
      /* html */
      "\n              <label class=\"ag-input-field-label ag-label ag-radio-button-label\">       \n                  <div class=\"ag-wrapper-reset ag-wrapper ag-input-wrapper ag-radio-button-input-wrapper ag-checked\">\n                    <input class=\"reset-input ag-input-field-input ag-radio-button-input\" type=\"radio\" name=\"boolean\" value=\"\" checked/>              \n                </div> \n                <span>".concat(this._booleanFilterTranslation.reset, "</span>\n              </label>                \n              ") : '', "       \n        </div>\n    ");
      body.addEventListener('change', this._onRadioChange);

      this._gui.appendChild(body); // create apply filter panel


      var applyFilterPanel = document.createElement('div');
      applyFilterPanel.className = "booleanFilter__body__applyPanel ag-filter-apply-panel ag-hidden";
      applyFilterPanel.innerHTML =
      /* html */
      "\n      <button class=\"ag-standard-button ag-filter-apply-panel-button clear ".concat(!isClearFilter && 'ag-hidden', "\" type=\"button\">").concat(translate('clearFilter', 'Clear Filter'), "</button>\n      <button class=\"ag-standard-button ag-filter-apply-panel-button reset ").concat(!isResetButton && 'ag-hidden', "\" type=\"button\">").concat(translate('resetFilter', 'Reset Filter'), "</button>\n      <button class=\"ag-standard-button ag-filter-apply-panel-button apply ").concat(!isApplyButton && 'ag-hidden', "\" type=\"button\">").concat(translate('applyFilter', 'Apply Filter'), "</button>\n    ");

      if (isClearFilter || isResetButton || isApplyButton) {
        applyFilterPanel.classList.remove('ag-hidden');
      }

      applyFilterPanel.addEventListener('click', this._ApplyFilterPanelButtonClick);

      this._gui.appendChild(applyFilterPanel);
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._gui.querySelector('.booleanFilter__body__labels').removeEventListener('change', this._onRadioChange);

      this._gui.querySelector('.booleanFilter__body__applyPanel').removeEventListener('click', this._ApplyFilterPanelButtonClick);
    }
    /**
     * Check whether selected filter matches the passed cell data
     *
     * @param {Object} params
     *
     * @return {Boolean} true when pass, false otherwise
     */

  }, {
    key: "doesFilterPass",
    value: function doesFilterPass(params) {
      // eslint-disable-next-line no-prototype-builtins
      var value = String( // eslint-disable-next-line no-prototype-builtins
      this._params.hasOwnProperty('filterValueGetter') ? this._params.filterValueGetter(params) : this._params.valueGetter(params));
      return this._filterText === 'true' ? this._trueValue.indexOf(value) > -1 : this._falseValue.indexOf(value) > -1;
    }
    /**
     * Check whether the component is applying any filter on the column
     *
     * @return {Boolean}
     **/

  }, {
    key: "isFilterActive",
    value: function isFilterActive() {
      return this._filterText !== null && this._filterText !== undefined && this._filterText !== '';
    }
    /**
     * Gets the filter state. If filter is not active, then should return null/undefined.
     * The grid calls getModel() on all active filters when gridApi.getFilterModel() is called.
     *
     * @return Object | null the filter state
     */

  }, {
    key: "getModel",
    value: function getModel() {
      if (!this.isFilterActive()) {
        return null;
      }

      var model = {
        value: this._filterText,
        filterType: 'boolean'
      };
      return model;
    }
    /**
     * Restores the filter state. Called by the grid after gridApi.setFilterModel(model) is called.
     * The grid will pass undefined/null to clear the filter.
     *
     * @param {Object | null} model
     */

  }, {
    key: "setModel",
    value: function setModel(model) {
      /* eslint-disable no-prototype-builtins */
      this._filterText = model && model.hasOwnProperty('value') ? model.value : '';
      var filterTextAsString = String(this._filterText);

      var body = this._gui.querySelector('.booleanFilter__body');

      body.querySelectorAll('input[type="radio"]').forEach(function (i) {
        if (i.value == filterTextAsString) {
          i.checked = true;
        } else {
          i.checked = false;
        }
      });
    }
    /**
     * Get the filter model as plain string to display in the floating filter input
     *
     * @param {Object | null} model
     */

  }, {
    key: "getModelAsString",
    value: function getModelAsString(model) {
      if (!model) {
        return '';
      }

      return stripHTML(model.value === 'true' ? this._booleanFilterTranslation["true"] : this._booleanFilterTranslation["false"]);
    }
    /**
     * Reset the filter state
     */

  }, {
    key: "reset",
    value: function reset() {
      var body = this._gui.querySelector('.booleanFilter__body');

      body.querySelectorAll('input[type="radio"]').forEach(function (i) {
        i.checked = false;
      });
      body.querySelector('.ag-wrapper-true').classList.remove('ag-checked');
      body.querySelector('.ag-wrapper-false').classList.remove('ag-checked');

      try {
        body.querySelector('.ag-wrapper-reset').classList.remove('ag-checked');
      } catch (e) {
        /* pass */
      }

      this._filterText = null;
    }
    /**
     * Listen to selection changes in the filter radio buttons and update the current filter text
     *
     * @param {Event} e
     */

  }, {
    key: "_onRadioChange",
    value: function _onRadioChange(isApplyButton, e) {
      var target = e.target;
      this._filterText = target.value;

      var body = this._gui.querySelector('.booleanFilter__body');

      if (body) {
        if (target.classList.contains('true-input')) {
          body.querySelector('.ag-wrapper-true').classList.add('ag-checked');
          body.querySelector('.ag-wrapper-false').classList.remove('ag-checked');

          try {
            body.querySelector('.ag-wrapper-reset').classList.remove('ag-checked');
          } catch (e) {
            /* pass */
          }
        } else if (target.classList.contains('false-input')) {
          body.querySelector('.ag-wrapper-true').classList.remove('ag-checked');
          body.querySelector('.ag-wrapper-false').classList.add('ag-checked');

          try {
            body.querySelector('.ag-wrapper-reset').classList.remove('ag-checked');
          } catch (e) {
            /* pass */
          }
        } else {
          body.querySelector('.ag-wrapper-true').classList.remove('ag-checked');
          body.querySelector('.ag-wrapper-false').classList.remove('ag-checked');

          try {
            body.querySelector('.ag-wrapper-reset').classList.add('ag-checked');
          } catch (e) {
            /* pass */
          }
        }
      }

      if (false === isApplyButton) {
        this._params.filterChangedCallback();
      }
    }
    /**
     * Listen to the button clicks in the buttons panel and apply the chosen action
     *
     * @param {Event} e
     */

  }, {
    key: "_ApplyFilterPanelButtonClick",
    value: function _ApplyFilterPanelButtonClick(e) {
      var target = e.target;

      if (target.nodeName === 'BUTTON') {
        if (target.classList.contains('reset')) {
          this.reset();

          this._params.filterChangedCallback();
        } else if (target.classList.contains('clear')) {
          this.reset();
        } else if (target.classList.contains('apply')) {
          this._params.filterChangedCallback();
        }
      }
    }
  }]);

  return BooleanFilter;
}(__WEBPACK_IMPORTED_MODULE_2__Component__["a" /* default */]), _temp), (_applyDecoratedDescriptor(_class.prototype, "init", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "init"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "destroy", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "destroy"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_ApplyFilterPanelButtonClick", [__WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_ApplyFilterPanelButtonClick"), _class.prototype)), _class);
/* harmony default export */ __webpack_exports__["a"] = (BooleanFilter);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(56);

if (typeof content === 'string') content = [[module.i, content, '']];
var transform;
var insertInto;
var options = {
  "hmr": true
};
options.transform = transform;

options.insertInto = function () {
  return window.parent.document.head;
};

var update = __webpack_require__(4)(content, options);

if (content.locals) module.exports = content.locals;

if (false) {
  module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss", function () {
    var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss");

    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];

    var locals = function (a, b) {
      var key,
          idx = 0;

      for (key in a) {
        if (!b || a[key] !== b[key]) return false;
        idx++;
      }

      for (key in b) {
        idx--;
      }

      return idx === 0;
    }(content.locals, newContent.locals);

    if (!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');
    update(newContent);
  });
  module.hot.dispose(function () {
    update();
  });
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".booleanFilter__body__labels label{display:block;padding:6px}.booleanFilter__body__labels label{display:block;padding:6px 0}.booleanFilter__body__labels label span{padding-left:6px}\n", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NumberEditor__ = __webpack_require__(58);
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__NumberEditor__["a" /* default */]);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_decorators_src_autobind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_decorators_src_override__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);
var _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */




/**
 * Numbers Editor
 *
 * Handle number values Editing
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **numberMinValue**   | undefined    | min allowed value
 * | **numberMaxValue**   | undefined    | max allowed value
 * | **numberStepValue**       | undefined  	| number of step by increment or decrement
 * | **numberMask**       | undefined  	| a bbj number mask to validate the number against
 * |**numberGroupingSeparator** | , | a char which will be used as a grouping separator. The options is used only when **numberMask** is defined |
 * |**numberDecimalSeparator** | . | a char which will be used as a decimal separator. The options is used only when **numberMask** is defined  |
 * |**numberForceTrailingZeros** | false | Affects the output by switching the way a mask with "#" characters in the trailing positions is filled. for example, the function NumberMask.mask(.10:"#.##") returns .10 instead of .1 . The options is used only when **numberMask** is defined|
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */

var NumberEditor = (_class = /*#__PURE__*/function (_Component) {
  _inherits(NumberEditor, _Component);

  var _super = _createSuper(NumberEditor);

  function NumberEditor() {
    _classCallCheck(this, NumberEditor);

    return _super.apply(this, arguments);
  }

  _createClass(NumberEditor, [{
    key: "init",

    /**
     *  @inheritDoc
     */
    value: function init(params) {
      var min = this.getOption('numberMinValue', params);
      var max = this.getOption('numberMaxValue', params);
      var step = this.getOption('numberStepValue', params);
      var mask = this.getOption('numberMask', params);
      var startValue;
      this._focusAfterAttached = params.cellStartedEdit;

      if (this._focusAfterAttached) {
        var keyPressBackspaceOrDelete = params.keyPress == 32 || params.keyPress == 46; // space // delete

        if (keyPressBackspaceOrDelete) {
          startValue = '';
        } else if (params.charPress) {
          startValue = params.charPress;
        } else {
          startValue = params.value;

          if (params.keyPress != 113) {
            //F2
            this._highlightAllOnFocus = true;
          }
        }
      } else {
        startValue = params.value;
      } // make params it accessible from tall methods


      this._params = params; // create the input wrapper

      this._gui = document.createElement('label');
      this._gui.className = 'numberEditor ag-cell-edit-wrapper';
      this._gui.tabIndex = '0';
      this._gui.innerHTML =
      /* html */
      "\n    <div class=\"ag-cell-editor ag-labeled ag-label-align-left ag-text-field ag-input-field\">\n      <div class=\"ag-wrapper ag-input-wrapper ag-text-field-input-wrapper\">\n      </div>\n    </div>\n    "; // create the input

      this._inputGeneratedId = Math.random().toString(16).slice(2, 10); // generate random id

      this._input = document.createElement('input');
      this._input.className = 'numberEditor__input ag-cell-edit-input';
      this._input.id = "el-".concat(this._inputGeneratedId);
      this._input.type = mask ? 'text' : 'number';
      this._input.value = startValue;
      this._input.tabIndex = 0; // place the input inside the wrapper

      this._gui.querySelector('.ag-input-wrapper').appendChild(this._input);

      if (min !== null) {
        mask ? this._input.dataset.min = min : this._input.min = min;
      }

      if (max !== null) {
        mask ? this._input.dataset.max = max : this._input.max = max;
      }

      if (step !== null) {
        mask ? this._input.dataset.step = step : this._input.step = step;
      } // If there is a mask then we use the `Basis.InputMasking.NumberInput`


      if (mask) {
        var groupingSeparator = this.getOption('numberGroupingSeparator', params, this.getOption('numberGroupSep', params));
        var decimalSeparator = this.getOption('numberDecimalSeparator', params, this.getOption('numberDecimalSep', params));
        var forceTrailingZeros = this.getOption('numberForceTrailingZeros', params);

        if (groupingSeparator !== null) {
          this._input.dataset.groupingSeparator = groupingSeparator;
        }

        if (decimalSeparator !== null) {
          this._input.dataset.decimalSeparator = decimalSeparator;
        }

        if (forceTrailingZeros !== null) {
          this._input.dataset.forceTrailingZeros = forceTrailingZeros;
        }

        this._input.dataset.mask = mask;
        this._numberInput = new Basis.InputMasking.NumberInput({
          elements: [this._input],
          // doc: this.getDoc(params),
          onUpdate: this._onNumberInputUpdate,
          onInvalid: this._onNumberInputInvalid
        });
      } else {
        this._input.addEventListener('keydown', this._onInputKeyDownUp);

        this._input.addEventListener('keyup', this._onInputKeyDownUp);

        this._input.addEventListener('change', this._onChange);
      }

      this._gui.addEventListener('keydown', this._onComponentKeyDown); // update `currentValue` the value which this component is managing


      this._currentValue = startValue;
      this.__isMasked__ = mask && mask.length;
    }
    /**
     *  @inheritDoc
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (!this.__isMasked__) {
        this._input.removeEventListener('keydown', this._onInputKeyDownUp);

        this._input.removeEventListener('keyup', this._onInputKeyDownUp);

        this._input.removeEventListener('change', this._onChange);
      } else {
        this._numberInput.destroy();
      }

      this._gui.removeEventListener('keydown', this._onComponentKeyDown);
    }
    /**
     * Gets called once after GUI is attached to DOM.
     *
     * Make sure container is always focused to listen to key changes
     */

  }, {
    key: "afterGuiAttached",
    value: function afterGuiAttached() {
      if (!this.__isMasked__) {
        this._validateInput(this._input);
      }

      if (this._highlightAllOnFocus) {
        this._input.select();
      } else {
        if (this._focusAfterAttached) {
          this.focusIn();
        }
      }
    }
    /**
     * Get The component value
     *
     * @return {Number}
     */

  }, {
    key: "getValue",
    value: function getValue() {
      var casted = Number(this._currentValue);
      var retValue = isNaN(casted) ? this._currentValue : casted;
      return this.__isMasked__ ? retValue : this._params.parseValue(retValue);
    }
    /**
     * If doing full row edit, then gets called when tabbing into the cell.
     */

  }, {
    key: "focusIn",
    value: function focusIn() {
      if (!this.__isMasked__) {
        this._input.focus();
      } else {
        this._input.click();
      }
    }
    /**
     * Gets called once after initialized and returns false so the editor appears in the cell
     *
     * @return {Boolean} always false
     **/

  }, {
    key: "isPopup",
    value: function isPopup() {
      return false;
    }
    /**
     * Update `currentValue` when the checkbox value is changed
     */

  }, {
    key: "_onChange",
    value: function _onChange(event) {
      var isValid = this._validateInput(event.target);

      if (isValid) {
        this._currentValue = this._input.value;
      }
    }
    /**
     * Update the current value when the NumberInput components fire the update
     * event.
     *
     * @param {String} _masked  the masked value
     * @param {Number} unmasked  the unmasked value
     */

  }, {
    key: "_onNumberInputUpdate",
    value: function _onNumberInputUpdate(_masked, unmasked) {
      this._currentValue = unmasked;
      this.focusIn(); // we pass the last captured event back to the grid to handle it internally

      if (this.__lastComponentKeyboardPress__) {
        this._params.onKeyDown(this.__lastComponentKeyboardPress__);

        this.__lastComponentKeyboardPress__ = null;
      }
    }
    /**
     * On invalid inputs , update the input with a custom validity message
     *
     * @param {String|Object} error the error message reported by NumberInput
     * @param {HTMLElement} input The input element used instance
     */

  }, {
    key: "_onNumberInputInvalid",
    value: function _onNumberInputInvalid(error, input) {
      this.focusIn(); // restore the original value of the cell

      this._currentValue = this._params.value;

      if (typeof error === 'string') {
        input.setCustomValidity(error);
      } else {
        input.setCustomValidity(error.message);
      }
    }
    /**
     * Capture all keyboard events to allow value processing by the NumberInput component
     *
     * @param {KeyboardEvent} e
     */

  }, {
    key: "_onComponentKeyDown",
    value: function _onComponentKeyDown(e) {
      var key = event.which || event.keyCode;
      var isNavigationKey = key === 37 || // left
      key === 38 || // up
      key === 39 || // right
      key === 40 || // down
      key === 33 || // page up
      key === 34 || // page down
      key === 35 || // page home
      key === 36 || // page end
      key === 13; // enter

      if (isNavigationKey) {
        event.stopPropagation(); // save the last capture key so NumberInput can pass it again to the grid.

        this.__lastComponentKeyboardPress__ = e;
      }
    }
    /**
     * Listen to key changes and validate the input
     *
     * @param {Event} event
     */

  }, {
    key: "_onInputKeyDownUp",
    value: function _onInputKeyDownUp(event) {
      var isValid = this._validateInput(event.target);

      if (!isValid) {
        return;
      }

      var key = event.which || event.keyCode;

      if (key == 38 || key == 40) {
        // top | down
        this._currentValue = this._input.value;
        event.stopPropagation();
      } else if (key == 13 || key === 9) {
        // enter
        this._currentValue = this._input.value;
      } // we pass the last captured event back to the grid to handle it internally


      if (this.__lastComponentKeyboardPress__) {
        this._params.onKeyDown(this.__lastComponentKeyboardPress__);

        this.__lastComponentKeyboardPress__ = null;
      }
    }
    /**
     * Validate the given input element
     *
     * @param {HTMLInputElement} input input element
     *
     * @return {Boolean} true when valid , false otherwise
     */

  }, {
    key: "_validateInput",
    value: function _validateInput(input) {
      var isValid = input.checkValidity();

      if (!isValid) {
        input.classList.add('bbj-mask-error');
        input.classList.remove('bbj-mask-success'); // restore the original value

        this._currentValue = this._params.value;
      } else {
        input.classList.remove('bbj-mask-error');
        input.classList.add('bbj-mask-success');
      }

      return isValid;
    }
  }]);

  return NumberEditor;
}(__WEBPACK_IMPORTED_MODULE_0__Component__["a" /* default */]), (_applyDecoratedDescriptor(_class.prototype, "init", [__WEBPACK_IMPORTED_MODULE_2_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "init"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "destroy", [__WEBPACK_IMPORTED_MODULE_2_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "destroy"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onChange", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onNumberInputUpdate", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onNumberInputUpdate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onNumberInputInvalid", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onNumberInputInvalid"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onComponentKeyDown", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onComponentKeyDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onInputKeyDownUp", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onInputKeyDownUp"), _class.prototype)), _class);
/* harmony default export */ __webpack_exports__["a"] = (NumberEditor);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(60);

if (typeof content === 'string') content = [[module.i, content, '']];
var transform;
var insertInto;
var options = {
  "hmr": true
};
options.transform = transform;

options.insertInto = function () {
  return window.parent.document.head;
};

var update = __webpack_require__(4)(content, options);

if (content.locals) module.exports = content.locals;

if (false) {
  module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss", function () {
    var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss");

    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];

    var locals = function (a, b) {
      var key,
          idx = 0;

      for (key in a) {
        if (!b || a[key] !== b[key]) return false;
        idx++;
      }

      for (key in b) {
        idx--;
      }

      return idx === 0;
    }(content.locals, newContent.locals);

    if (!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');
    update(newContent);
  });
  module.hot.dispose(function () {
    update();
  });
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".numberEditor{overflow:hidden}.numberEditor .numberInputMask__wrap{width:100%;height:100%;box-sizing:border-box;outline:none;display:block;padding:0;margin:0;display:flex;flex:1 1 auto;align-items:center;line-height:normal;position:relative;overflow:hidden}.numberEditor .bbj-mask-error{box-shadow:0 -2px 0 #e91e63 inset}.numberEditor .bbj-mask-success{box-shadow:0 -2px 0 #4caf50 inset}.numberEditor__input{padding-left:6px;border:thin solid var(--ag-input-focus-border-color, rgba(33,150,243,0.4));border-radius:3px;background-color:var(--ag-background-color);color:inherit}.ag-theme-alpine .numberEditor__input,.ag-theme-balham .numberEditor__input,.ag-theme-material .numberEditor__input{background-color:var(--ag-background-color, #fff)}.ag-theme-alpine-dark .numberEditor__input,.ag-theme-balham-dark .numberEditor__input{background-color:var(--ag-background-color, #2d3436)}\n", ""]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TextEditor__ = __webpack_require__(62);
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__TextEditor__["a" /* default */]);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_decorators_src_autobind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_decorators_src_override__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);
var _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */




/**
 * Text Editor
 *
 * Handle text values Editing
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **textPattern**   | undefined    | A regular expression that the input's value must match in order for the value to pass constraint validation
 * | **textRequired**   | undefined    | Boolean. A value is required to consider the input valid
 * | **textMask**   | undefined    | A bbj string mask to validate the value
 * | **textTitle**   | null    | The input title , when null and the **textMask** options is defined , then we use the mask as title , when set to `default` we the browser's default title , otherwise the value defined in this option
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */

var TextEditor = (_class = /*#__PURE__*/function (_Component) {
  _inherits(TextEditor, _Component);

  var _super = _createSuper(TextEditor);

  function TextEditor() {
    _classCallCheck(this, TextEditor);

    return _super.apply(this, arguments);
  }

  _createClass(TextEditor, [{
    key: "init",

    /**
     *  @inheritDoc
     */
    value: function init(params) {
      var pattern = this.getOption('textPattern', params);
      var required = this.getOption('textRequired', params);
      var mask = this.getOption('textMask', params);
      var title = this.getOption('textTitle', params);
      var startValue;
      this._focusAfterAttached = params.cellStartedEdit;

      if (this._focusAfterAttached) {
        var keyPressBackspaceOrDelete = params.keyPress == 32 || params.keyPress == 46; // space // delete

        if (keyPressBackspaceOrDelete) {
          startValue = '';
        } else if (params.charPress) {
          startValue = params.charPress;
        } else {
          startValue = params.value;

          if (params.keyPress != 113) {
            //F2
            this._highlightAllOnFocus = true;
          }
        }
      } else {
        startValue = params.value;
      }

      this._params = params;
      this._gui = document.createElement('div');
      this._gui.className = 'textEditor ag-cell-edit-wrapper';
      this._gui.tabIndex = '0';
      this._gui.innerHTML =
      /* html */
      "\n    <div class=\"ag-cell-editor ag-labeled ag-label-align-left ag-text-field ag-input-field\">\n      <div class=\"ag-wrapper ag-input-wrapper ag-text-field-input-wrapper\">\n      </div>\n    </div>\n    "; // input

      this._input = document.createElement('input');
      this._input.className = 'textEditor__input ag-cell-edit-input ag-input-field-input ag-text-field-input';
      this._input.id = "el-".concat(Math.random().toString(16).slice(2, 10)); // generate random id

      this._input.type = 'text';
      this._input.value = startValue;
      this._input.tabIndex = 0;

      this._gui.querySelector('.ag-input-wrapper').appendChild(this._input);

      if (pattern !== null) {
        this._input.setAttribute('pattern', pattern);
      }

      if (required === true) {
        this._input.setAttribute('required', 'required');
      }

      if (title !== null) {
        if (title !== 'default') {
          this._input.title = title;
        }
      } else if (mask) {
        this._input.title = mask;
      } // If there is a mask then we use the `Basis.InputMasking.TextInput`


      if (mask) {
        this._input.dataset.mask = mask;
        this._textInput = new Basis.InputMasking.TextInput({
          elements: [this._input],
          doc: this.getDoc(params),
          onUpdate: this._onTextInputUpdate,
          onInvalid: this._onTextInputInvalid
        });
      } else {
        this._input.addEventListener('keydown', this._onInputKeyDownUp);

        this._input.addEventListener('keyup', this._onInputKeyDownUp);

        this._input.addEventListener('input', this._onChange);

        this._input.addEventListener('change', this._onChange);
      }

      this._gui.addEventListener('keydown', this._onComponentKeyDown); // update `currentValue` the value which this component is managing


      this._currentValue = startValue;
      this.__isMasked__ = mask && mask.length;
    }
    /**
     *  @inheritDoc
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (!this.__isMasked__) {
        this._input.removeEventListener('keydown', this._onInputKeyDownUp);

        this._input.removeEventListener('keyup', this._onInputKeyDownUp);

        this._input.removeEventListener('input', this._onChange);

        this._input.removeEventListener('change', this._onChange);
      } else {
        this._textInput.destroy();
      }

      this._gui.removeEventListener('keydown', this._onComponentKeyDown);
    }
    /**
     * Gets called once after GUI is attached to DOM.
     *
     * Make sure container is always focused to listen to key changes
     */

  }, {
    key: "afterGuiAttached",
    value: function afterGuiAttached() {
      if (!this.__isMasked__) {
        this._validateInput(this._input);
      }

      if (this._highlightAllOnFocus) {
        this._input.select();
      } else {
        if (this._focusAfterAttached) {
          this.focusIn();
        }
      }
    }
    /**
     * Get The component value
     *
     * @return {Number}
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this._params.parseValue(this._currentValue);
    }
    /**
     * If doing full row edit, then gets called when tabbing into the cell.
     */

  }, {
    key: "focusIn",
    value: function focusIn() {
      this._input.focus();
    }
    /**
     * Gets called once after initialized and returns false so the editor appears in the cell
     *
     * @return {Boolean} always false
     **/

  }, {
    key: "isPopup",
    value: function isPopup() {
      return false;
    }
    /**
     * Update the current value when the TextInput component fires the update
     * event.
     *
     * @param {String} _masked  the masked value
     * @param {String} unmasked  the unmasked value
     */

  }, {
    key: "_onTextInputUpdate",
    value: function _onTextInputUpdate(_masked, unmasked, input) {
      this._currentValue = unmasked;
      input.setCustomValidity('');
      this.focusIn(); // we pass the last captured event back to the grid to handle it internally

      if (this.__lastComponentKeyboardPress__) {
        this._params.onKeyDown(this.__lastComponentKeyboardPress__);

        this.__lastComponentKeyboardPress__ = null;
      }
    }
    /**
     * On invalid inputs , update the input with a custom validity message
     *
     * @param {String|Object} error the error message reported by TextInput
     * @param {HTMLElement} input The input element used instance
     */

  }, {
    key: "_onTextInputInvalid",
    value: function _onTextInputInvalid(error, input) {
      this.focusIn(); // restore the original value of the cell

      this._currentValue = this._params.value;

      if (typeof error === 'string') {
        input.setCustomValidity(error);
      }
    }
    /**
     * Capture all keyboard events to allow value processing by the NumberInput component
     *
     * @param {KeyboardEvent} e
     */

  }, {
    key: "_onComponentKeyDown",
    value: function _onComponentKeyDown(e) {
      var key = event.which || event.keyCode;
      var isNavigationKey = key === 37 || // left
      key === 38 || // up
      key === 39 || // right
      key === 40 || // down
      key === 33 || // page up
      key === 34 || // page down
      key === 35 || // page home
      key === 36 || // page end
      key === 13; // enter

      if (isNavigationKey) {
        event.stopPropagation(); // save the last capture key so NumberInput can pass it again to the grid.

        this.__lastComponentKeyboardPress__ = e;
      }
    }
    /**
     * Listen to key changes and validate the input
     *
     * @param {Event} event
     */

  }, {
    key: "_onInputKeyDownUp",
    value: function _onInputKeyDownUp(event) {
      var isValid = this._validateInput(event.target);

      if (!isValid) {
        return;
      }

      var key = event.which || event.keyCode;

      if (key == 13 || key === 9) {
        // enter
        this._currentValue = this._input.value;
      } // we pass the last captured event back to the grid to handle it internally


      if (this.__lastComponentKeyboardPress__) {
        this._params.onKeyDown(this.__lastComponentKeyboardPress__);

        this.__lastComponentKeyboardPress__ = null;
      }
    }
    /**
     * Update `currentValue` on the input value is changed and it is valid
     */

  }, {
    key: "_onChange",
    value: function _onChange(event) {
      var isValid = this._validateInput(event.target);

      if (isValid) {
        this._currentValue = this._input.value;
      }
    }
    /**
     * Validate the given input element
     *
     * @param {HTMLInputElement} input input element
     *
     * @return {Boolean} true when valid , false otherwise
     */

  }, {
    key: "_validateInput",
    value: function _validateInput(input) {
      var isValid = input.checkValidity();

      if (!isValid) {
        input.classList.add('bbj-mask-error');
        input.classList.remove('bbj-mask-success'); // restore the original value

        this._currentValue = this._params.value;
      } else {
        input.classList.remove('bbj-mask-error');
        input.classList.add('bbj-mask-success');
      }

      return isValid;
    }
  }]);

  return TextEditor;
}(__WEBPACK_IMPORTED_MODULE_0__Component__["a" /* default */]), (_applyDecoratedDescriptor(_class.prototype, "init", [__WEBPACK_IMPORTED_MODULE_2_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "init"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "destroy", [__WEBPACK_IMPORTED_MODULE_2_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "destroy"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onTextInputUpdate", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onTextInputUpdate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onTextInputInvalid", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onTextInputInvalid"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onComponentKeyDown", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onComponentKeyDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onInputKeyDownUp", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onInputKeyDownUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onChange", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onChange"), _class.prototype)), _class);
/* harmony default export */ __webpack_exports__["a"] = (TextEditor);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(64);

if (typeof content === 'string') content = [[module.i, content, '']];
var transform;
var insertInto;
var options = {
  "hmr": true
};
options.transform = transform;

options.insertInto = function () {
  return window.parent.document.head;
};

var update = __webpack_require__(4)(content, options);

if (content.locals) module.exports = content.locals;

if (false) {
  module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss", function () {
    var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss");

    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];

    var locals = function (a, b) {
      var key,
          idx = 0;

      for (key in a) {
        if (!b || a[key] !== b[key]) return false;
        idx++;
      }

      for (key in b) {
        idx--;
      }

      return idx === 0;
    }(content.locals, newContent.locals);

    if (!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');
    update(newContent);
  });
  module.hot.dispose(function () {
    update();
  });
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".textEditor{overflow:hidden}.textEditor .textInputMask__wrap{width:100%;height:100%;box-sizing:border-box;outline:none;display:block;padding:0;margin:0;display:flex;flex:1 1 auto;align-items:center;line-height:normal;position:relative;overflow:hidden}.textEditor .bbj-mask-error{box-shadow:0 -2px 0 #e91e63 inset}.textEditor .bbj-mask-success{box-shadow:0 -2px 0 #4caf50 inset}.textEditor__input{padding-left:6px;border:thin solid var(--ag-input-focus-border-color, rgba(33,150,243,0.4));border-radius:3px;background-color:var(--ag-background-color);color:inherit}.ag-theme-alpine .textEditor__input,.ag-theme-balham .textEditor__input,.ag-theme-material .textEditor__input{background-color:var(--ag-background-color, #fff)}.ag-theme-alpine-dark .textEditor__input,.ag-theme-balham-dark .textEditor__input{background-color:var(--ag-background-color, #2d3436)}\n", ""]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_template__ = __webpack_require__(66);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/**
 * Numbers Editor
 *
 * Handle number values Editing
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **renderTemplate**   | undefined    | lodash template
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */

var TemplateRenderer = /*#__PURE__*/function (_Component) {
  _inherits(TemplateRenderer, _Component);

  var _super = _createSuper(TemplateRenderer);

  /**
   * Construct new TemplateRenderer
   */
  function TemplateRenderer() {
    var _this;

    _classCallCheck(this, TemplateRenderer);

    _this = _super.call(this); // will this affect BBj bui ?

    _this._gui = document.createElement('div');
    _this._gui.className = 'templateRenderer ag-cell-wrapper';
    _this._gui.style.width = '100%';
    _this._gui.style.height = '100%';
    _this._gui.style.lineHeight = 'normal';
    return _this;
  }
  /**
   *  @inheritDoc
   */


  _createClass(TemplateRenderer, [{
    key: "init",
    value: function init(params) {
      this.refresh(params, true);
    }
    /**
     *  @inheritDoc
     */

  }, {
    key: "getGui",
    value: function getGui() {
      return this._gui;
    }
    /**
     * Refresh the cell l
     *
     * @param {Object} params cell renderer params
     * @param {Boolean} isInit true when this method is being called in `init` phase , false otherwise
     *
     * @return {Boolean} true if the refresh succeeded, otherwise return false.
     */

  }, {
    key: "refresh",
    value: function refresh(params, isInit) {
      if (isInit) {
        this._compiledTemplate = Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_template__["a" /* default */])(this.getOption('renderTemplate', params, ''));
      }

      var content;

      if (typeof this._compiledTemplate === 'function') {
        content = this._compiledTemplate({
          params: params
        });
      } else {
        content = params.valueFormatted ? params.valueFormatted : params.value;
      }

      this._gui.innerHTML = content;
      return true;
    }
  }]);

  return TemplateRenderer;
}(__WEBPACK_IMPORTED_MODULE_0__Component__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (TemplateRenderer);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assignInWith_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attempt_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseValues_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customDefaultsAssignIn_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__escapeStringChar_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isError_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isIterateeCall_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__keys_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reInterpolate_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__templateSettings_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toString_js__ = __webpack_require__(36);











/** Used to match empty string literals in compiled template source. */

var reEmptyStringLeading = /\b__p \+= '';/g,
    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
/**
 * Used to match
 * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
 */

var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
/** Used to ensure capturing order of template delimiters. */

var reNoMatch = /($^)/;
/** Used to match unescaped characters in compiled string literals. */

var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates a compiled template function that can interpolate data properties
 * in "interpolate" delimiters, HTML-escape interpolated data properties in
 * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
 * properties may be accessed as free variables in the template. If a setting
 * object is given, it takes precedence over `_.templateSettings` values.
 *
 * **Note:** In the development build `_.template` utilizes
 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
 * for easier debugging.
 *
 * For more information on precompiling templates see
 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
 *
 * For more information on Chrome extension sandboxes see
 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The template string.
 * @param {Object} [options={}] The options object.
 * @param {RegExp} [options.escape=_.templateSettings.escape]
 *  The HTML "escape" delimiter.
 * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
 *  The "evaluate" delimiter.
 * @param {Object} [options.imports=_.templateSettings.imports]
 *  An object to import into the template as free variables.
 * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
 *  The "interpolate" delimiter.
 * @param {string} [options.sourceURL='templateSources[n]']
 *  The sourceURL of the compiled template.
 * @param {string} [options.variable='obj']
 *  The data object variable name.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the compiled template function.
 * @example
 *
 * // Use the "interpolate" delimiter to create a compiled template.
 * var compiled = _.template('hello <%= user %>!');
 * compiled({ 'user': 'fred' });
 * // => 'hello fred!'
 *
 * // Use the HTML "escape" delimiter to escape data property values.
 * var compiled = _.template('<b><%- value %></b>');
 * compiled({ 'value': '<script>' });
 * // => '<b>&lt;script&gt;</b>'
 *
 * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
 * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the internal `print` function in "evaluate" delimiters.
 * var compiled = _.template('<% print("hello " + user); %>!');
 * compiled({ 'user': 'barney' });
 * // => 'hello barney!'
 *
 * // Use the ES template literal delimiter as an "interpolate" delimiter.
 * // Disable support by replacing the "interpolate" delimiter.
 * var compiled = _.template('hello ${ user }!');
 * compiled({ 'user': 'pebbles' });
 * // => 'hello pebbles!'
 *
 * // Use backslashes to treat delimiters as plain text.
 * var compiled = _.template('<%= "\\<%- value %\\>" %>');
 * compiled({ 'value': 'ignored' });
 * // => '<%- value %>'
 *
 * // Use the `imports` option to import `jQuery` as `jq`.
 * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
 * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the `sourceURL` option to specify a custom sourceURL for the template.
 * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
 * compiled(data);
 * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
 *
 * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
 * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
 * compiled.source;
 * // => function(data) {
 * //   var __t, __p = '';
 * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
 * //   return __p;
 * // }
 *
 * // Use custom template delimiters.
 * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
 * var compiled = _.template('hello {{ user }}!');
 * compiled({ 'user': 'mustache' });
 * // => 'hello mustache!'
 *
 * // Use the `source` property to inline compiled templates for meaningful
 * // line numbers in error messages and stack traces.
 * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
 *   var JST = {\
 *     "main": ' + _.template(mainText).source + '\
 *   };\
 * ');
 */

function template(string, options, guard) {
  // Based on John Resig's `tmpl` implementation
  // (http://ejohn.org/blog/javascript-micro-templating/)
  // and Laura Doktorova's doT.js (https://github.com/olado/doT).
  var settings = __WEBPACK_IMPORTED_MODULE_9__templateSettings_js__["a" /* default */].imports._.templateSettings || __WEBPACK_IMPORTED_MODULE_9__templateSettings_js__["a" /* default */];

  if (guard && Object(__WEBPACK_IMPORTED_MODULE_6__isIterateeCall_js__["a" /* default */])(string, options, guard)) {
    options = undefined;
  }

  string = Object(__WEBPACK_IMPORTED_MODULE_10__toString_js__["a" /* default */])(string);
  options = Object(__WEBPACK_IMPORTED_MODULE_0__assignInWith_js__["a" /* default */])({}, options, settings, __WEBPACK_IMPORTED_MODULE_3__customDefaultsAssignIn_js__["a" /* default */]);
  var imports = Object(__WEBPACK_IMPORTED_MODULE_0__assignInWith_js__["a" /* default */])({}, options.imports, settings.imports, __WEBPACK_IMPORTED_MODULE_3__customDefaultsAssignIn_js__["a" /* default */]),
      importsKeys = Object(__WEBPACK_IMPORTED_MODULE_7__keys_js__["a" /* default */])(imports),
      importsValues = Object(__WEBPACK_IMPORTED_MODULE_2__baseValues_js__["a" /* default */])(imports, importsKeys);
  var isEscaping,
      isEvaluating,
      index = 0,
      interpolate = options.interpolate || reNoMatch,
      source = "__p += '"; // Compile the regexp to match each delimiter.

  var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === __WEBPACK_IMPORTED_MODULE_8__reInterpolate_js__["a" /* default */] ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g'); // Use a sourceURL for easier debugging.
  // The sourceURL gets injected into the source that's eval-ed, so be careful
  // with lookup (in case of e.g. prototype pollution), and strip newlines if any.
  // A newline wouldn't be a valid sourceURL anyway, and it'd enable code injection.

  var sourceURL = hasOwnProperty.call(options, 'sourceURL') ? '//# sourceURL=' + (options.sourceURL + '').replace(/[\r\n]/g, ' ') + '\n' : '';
  string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
    interpolateValue || (interpolateValue = esTemplateValue); // Escape characters that can't be included in string literals.

    source += string.slice(index, offset).replace(reUnescapedString, __WEBPACK_IMPORTED_MODULE_4__escapeStringChar_js__["a" /* default */]); // Replace delimiters with snippets.

    if (escapeValue) {
      isEscaping = true;
      source += "' +\n__e(" + escapeValue + ") +\n'";
    }

    if (evaluateValue) {
      isEvaluating = true;
      source += "';\n" + evaluateValue + ";\n__p += '";
    }

    if (interpolateValue) {
      source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
    }

    index = offset + match.length; // The JS engine embedded in Adobe products needs `match` returned in
    // order to produce the correct `offset` value.

    return match;
  });
  source += "';\n"; // If `variable` is not specified wrap a with-statement around the generated
  // code to add the data object to the top of the scope chain.
  // Like with sourceURL, we take care to not check the option's prototype,
  // as this configuration is a code injection vector.

  var variable = hasOwnProperty.call(options, 'variable') && options.variable;

  if (!variable) {
    source = 'with (obj) {\n' + source + '\n}\n';
  } // Cleanup code by stripping empty strings.


  source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;'); // Frame code as the function body.

  source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
  var result = Object(__WEBPACK_IMPORTED_MODULE_1__attempt_js__["a" /* default */])(function () {
    return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
  }); // Provide the compiled function's source by its `toString` method or
  // the `source` property as a convenience for inlining compiled templates.

  result.source = source;

  if (Object(__WEBPACK_IMPORTED_MODULE_5__isError_js__["a" /* default */])(result)) {
    throw result;
  }

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (template);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__copyObject_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createAssigner_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keysIn_js__ = __webpack_require__(84);



/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */

var assignInWith = Object(__WEBPACK_IMPORTED_MODULE_1__createAssigner_js__["a" /* default */])(function (object, source, srcIndex, customizer) {
  Object(__WEBPACK_IMPORTED_MODULE_0__copyObject_js__["a" /* default */])(source, Object(__WEBPACK_IMPORTED_MODULE_2__keysIn_js__["a" /* default */])(source), object, customizer);
});
/* harmony default export */ __webpack_exports__["a"] = (assignInWith);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assignValue_js__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseAssignValue_js__ = __webpack_require__(17);


/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */

function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      Object(__WEBPACK_IMPORTED_MODULE_1__baseAssignValue_js__["a" /* default */])(object, key, newValue);
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__assignValue_js__["a" /* default */])(object, key, newValue);
    }
  }

  return object;
}

/* harmony default export */ __webpack_exports__["a"] = (copyObject);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseAssignValue_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eq_js__ = __webpack_require__(11);


/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && Object(__WEBPACK_IMPORTED_MODULE_1__eq_js__["a" /* default */])(objValue, value)) || value === undefined && !(key in object)) {
    Object(__WEBPACK_IMPORTED_MODULE_0__baseAssignValue_js__["a" /* default */])(object, key, value);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (assignValue);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsNative_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getValue_js__ = __webpack_require__(77);


/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = Object(__WEBPACK_IMPORTED_MODULE_1__getValue_js__["a" /* default */])(object, key);
  return Object(__WEBPACK_IMPORTED_MODULE_0__baseIsNative_js__["a" /* default */])(value) ? value : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = (getNative);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isMasked_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObject_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toSource_js__ = __webpack_require__(76);




/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObject_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_1__isMasked_js__["a" /* default */])(value)) {
    return false;
  }

  var pattern = Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__["a" /* default */])(value) ? reIsNative : reIsHostCtor;
  return pattern.test(Object(__WEBPACK_IMPORTED_MODULE_3__toSource_js__["a" /* default */])(value));
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsNative);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(9);

/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coreJsData_js__ = __webpack_require__(75);

/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(__WEBPACK_IMPORTED_MODULE_0__coreJsData_js__["a" /* default */] && __WEBPACK_IMPORTED_MODULE_0__coreJsData_js__["a" /* default */].keys && __WEBPACK_IMPORTED_MODULE_0__coreJsData_js__["a" /* default */].keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/* harmony default export */ __webpack_exports__["a"] = (isMasked);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(10);

/** Used to detect overreaching core-js shims. */

var coreJsData = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */]['__core-js_shared__'];
/* harmony default export */ __webpack_exports__["a"] = (coreJsData);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

/* harmony default export */ __webpack_exports__["a"] = (toSource);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ __webpack_exports__["a"] = (getValue);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseRest_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isIterateeCall_js__ = __webpack_require__(25);


/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */

function createAssigner(assigner) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__baseRest_js__["a" /* default */])(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && Object(__WEBPACK_IMPORTED_MODULE_1__isIterateeCall_js__["a" /* default */])(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

/* harmony default export */ __webpack_exports__["a"] = (createAssigner);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apply_js__ = __webpack_require__(24);

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return Object(__WEBPACK_IMPORTED_MODULE_0__apply_js__["a" /* default */])(func, this, otherArgs);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overRest);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseSetToString_js__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shortOut_js__ = __webpack_require__(83);


/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var setToString = Object(__WEBPACK_IMPORTED_MODULE_1__shortOut_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__baseSetToString_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (setToString);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defineProperty_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity_js__ = __webpack_require__(23);



/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var baseSetToString = !__WEBPACK_IMPORTED_MODULE_1__defineProperty_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_2__identity_js__["a" /* default */] : function (func, string) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__defineProperty_js__["a" /* default */])(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(string),
    'writable': true
  });
};
/* harmony default export */ __webpack_exports__["a"] = (baseSetToString);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (constant);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (shortOut);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayLikeKeys_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseKeysIn_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArrayLike_js__ = __webpack_require__(12);



/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */

function keysIn(object) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__isArrayLike_js__["a" /* default */])(object) ? Object(__WEBPACK_IMPORTED_MODULE_0__arrayLikeKeys_js__["a" /* default */])(object, true) : Object(__WEBPACK_IMPORTED_MODULE_1__baseKeysIn_js__["a" /* default */])(object);
}

/* harmony default export */ __webpack_exports__["a"] = (keysIn);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (baseTimes);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsArguments_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(6);


/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = Object(__WEBPACK_IMPORTED_MODULE_0__baseIsArguments_js__["a" /* default */])(function () {
  return arguments;
}()) ? __WEBPACK_IMPORTED_MODULE_0__baseIsArguments_js__["a" /* default */] : function (value) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["a" /* default */])(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/* harmony default export */ __webpack_exports__["a"] = (isArguments);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(6);


/** `Object#toString` result references. */

var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["a" /* default */])(value) && Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) == argsTag;
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsArguments);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stubFalse_js__ = __webpack_require__(89);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/** Detect free variable `exports`. */

var freeExports = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || __WEBPACK_IMPORTED_MODULE_1__stubFalse_js__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (isBuffer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(30)(module)))

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (stubFalse);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsTypedArray_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseUnary_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__ = __webpack_require__(93);



/* Node.js helper references. */

var nodeIsTypedArray = __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__["a" /* default */] && __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__["a" /* default */].isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? Object(__WEBPACK_IMPORTED_MODULE_1__baseUnary_js__["a" /* default */])(nodeIsTypedArray) : __WEBPACK_IMPORTED_MODULE_0__baseIsTypedArray_js__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (isTypedArray);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isLength_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(6);



/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) && Object(__WEBPACK_IMPORTED_MODULE_1__isLength_js__["a" /* default */])(value.length) && !!typedArrayTags[Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value)];
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsTypedArray);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (baseUnary);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(20);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/** Detect free variable `exports`. */

var freeExports = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */].process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

/* harmony default export */ __webpack_exports__["a"] = (nodeUtil);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(30)(module)))

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPrototype_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nativeKeysIn_js__ = __webpack_require__(95);



/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(object)) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__nativeKeysIn_js__["a" /* default */])(object);
  }

  var isProto = Object(__WEBPACK_IMPORTED_MODULE_1__isPrototype_js__["a" /* default */])(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (baseKeysIn);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (nativeKeysIn);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apply_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseRest_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isError_js__ = __webpack_require__(32);



/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * var elements = _.attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 *
 * if (_.isError(elements)) {
 *   elements = [];
 * }
 */

var attempt = Object(__WEBPACK_IMPORTED_MODULE_1__baseRest_js__["a" /* default */])(function (func, args) {
  try {
    return Object(__WEBPACK_IMPORTED_MODULE_0__apply_js__["a" /* default */])(func, undefined, args);
  } catch (e) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__isError_js__["a" /* default */])(e) ? e : new Error(e);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (attempt);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(6);



/** `Object#toString` result references. */

var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }

  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(33);

/** Built-in value references. */

var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);
/* harmony default export */ __webpack_exports__["a"] = (getPrototype);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayMap_js__ = __webpack_require__(34);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */

function baseValues(object, props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__arrayMap_js__["a" /* default */])(props, function (key) {
    return object[key];
  });
}

/* harmony default export */ __webpack_exports__["a"] = (baseValues);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eq_js__ = __webpack_require__(11);

/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */

function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined || Object(__WEBPACK_IMPORTED_MODULE_0__eq_js__["a" /* default */])(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
    return srcValue;
  }

  return objValue;
}

/* harmony default export */ __webpack_exports__["a"] = (customDefaultsAssignIn);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used to escape characters for inclusion in compiled string literals. */
var stringEscapes = {
  '\\': '\\',
  "'": "'",
  '\n': 'n',
  '\r': 'r',
  "\u2028": 'u2028',
  "\u2029": 'u2029'
};
/**
 * Used by `_.template` to escape characters for inclusion in compiled string literals.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */

function escapeStringChar(chr) {
  return '\\' + stringEscapes[chr];
}

/* harmony default export */ __webpack_exports__["a"] = (escapeStringChar);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayLikeKeys_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseKeys_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArrayLike_js__ = __webpack_require__(12);



/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */

function keys(object) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__isArrayLike_js__["a" /* default */])(object) ? Object(__WEBPACK_IMPORTED_MODULE_0__arrayLikeKeys_js__["a" /* default */])(object) : Object(__WEBPACK_IMPORTED_MODULE_1__baseKeys_js__["a" /* default */])(object);
}

/* harmony default export */ __webpack_exports__["a"] = (keys);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPrototype_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nativeKeys_js__ = __webpack_require__(104);


/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isPrototype_js__["a" /* default */])(object)) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__nativeKeys_js__["a" /* default */])(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (baseKeys);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(33);

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeKeys = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.keys, Object);
/* harmony default export */ __webpack_exports__["a"] = (nativeKeys);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__escape_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reEscape_js__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reEvaluate_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reInterpolate_js__ = __webpack_require__(35);




/**
 * By default, the template delimiters used by lodash are like those in
 * embedded Ruby (ERB) as well as ES2015 template strings. Change the
 * following template settings to use alternative delimiters.
 *
 * @static
 * @memberOf _
 * @type {Object}
 */

var templateSettings = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'escape': __WEBPACK_IMPORTED_MODULE_1__reEscape_js__["a" /* default */],

  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'evaluate': __WEBPACK_IMPORTED_MODULE_2__reEvaluate_js__["a" /* default */],

  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'interpolate': __WEBPACK_IMPORTED_MODULE_3__reInterpolate_js__["a" /* default */],

  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  'variable': '',

  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  'imports': {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    '_': {
      'escape': __WEBPACK_IMPORTED_MODULE_0__escape_js__["a" /* default */]
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (templateSettings);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__escapeHtmlChar_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toString_js__ = __webpack_require__(36);


/** Used to match HTML entities and HTML characters. */

var reUnescapedHtml = /[&<>"']/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */

function escape(string) {
  string = Object(__WEBPACK_IMPORTED_MODULE_1__toString_js__["a" /* default */])(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, __WEBPACK_IMPORTED_MODULE_0__escapeHtmlChar_js__["a" /* default */]) : string;
}

/* harmony default export */ __webpack_exports__["a"] = (escape);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basePropertyOf_js__ = __webpack_require__(108);

/** Used to map characters to HTML entities. */

var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */

var escapeHtmlChar = Object(__WEBPACK_IMPORTED_MODULE_0__basePropertyOf_js__["a" /* default */])(htmlEscapes);
/* harmony default export */ __webpack_exports__["a"] = (escapeHtmlChar);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (basePropertyOf);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrayMap_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArray_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isSymbol_js__ = __webpack_require__(110);




/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_2__isArray_js__["a" /* default */])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return Object(__WEBPACK_IMPORTED_MODULE_1__arrayMap_js__["a" /* default */])(value, baseToString) + '';
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_3__isSymbol_js__["a" /* default */])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["a"] = (baseToString);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) == 'symbol' || Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["a" /* default */])(value) && Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) == symbolTag;
}

/* harmony default export */ __webpack_exports__["a"] = (isSymbol);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used to match template delimiters. */
var reEscape = /<%-([\s\S]+?)%>/g;
/* harmony default export */ __webpack_exports__["a"] = (reEscape);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used to match template delimiters. */
var reEvaluate = /<%([\s\S]+?)%>/g;
/* harmony default export */ __webpack_exports__["a"] = (reEvaluate);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ImageRenderer__ = __webpack_require__(114);
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__ImageRenderer__["a" /* default */]);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateRenderer__ = __webpack_require__(16);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Numbers Editor
 *
 * Handle number values Editing
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **imageRendererWidth**   | 28px    | image width
 * | **imageRendererHeight**   | 28px    | image height
 * | **imageRendererList**       | {}  	| a list of which maps images with cell values as JSON or plain JS object
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 *
 * @see https://lodash.com/docs/4.17.15#template
 */

var ImageRenderer = /*#__PURE__*/function (_TemplateRenderer) {
  _inherits(ImageRenderer, _TemplateRenderer);

  var _super = _createSuper(ImageRenderer);

  function ImageRenderer() {
    _classCallCheck(this, ImageRenderer);

    return _super.apply(this, arguments);
  }

  _createClass(ImageRenderer, [{
    key: "refresh",

    /**
     * @inheritDoc
     */
    value: function refresh(params, isInit) {
      var value = params.value;
      var imageWidth = this.getOption('imageRendererWidth', params, '28px');
      var imageHeight = this.getOption('imageRendererHeight', params, '28px');
      var imageList = this.getOption('imageRendererList', params);

      try {
        imageList = JSON.parse(imageList);
      } catch (e) {
        imageList = imageList || {};
      }
      /* eslint-disable no-prototype-builtins */


      if (imageList && imageList.hasOwnProperty(value)) {
        params.renderTemplate =
        /*html*/
        "\n        <img \n          src=\"".concat(imageList[params.value], "\" \n          width=\"").concat(imageWidth, "\"\n          height=\"").concat(imageHeight, "\"  \n        />\n      ");
      } else {
        params.renderTemplate = value;
      }

      return _get(_getPrototypeOf(ImageRenderer.prototype), "refresh", this).call(this, params, isInit);
    }
  }]);

  return ImageRenderer;
}(__WEBPACK_IMPORTED_MODULE_0__TemplateRenderer__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (ImageRenderer);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DateTimeFilter__ = __webpack_require__(116);
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__DateTimeFilter__["a" /* default */]);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_decorators_src_readonly__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_tz_utcToZonedTime__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EventsMixin__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DateTimeInput__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_scss__);
var _class, _class2, _init, _descriptor, _class3, _temp, _class4, _class5, _init2, _descriptor2, _class6, _temp2, _class7, _temp3;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */








var TOKENS = {
  TOKEN_EQUAL: 'equals',
  TOKEN_NOT_EQUAL: 'notEqual',
  TOKEN_LESS: 'lessThan',
  TOKEN_GREATER: 'greaterThan',
  TOKEN_RANGE: 'inRange',
  TOKEN_AND: 'AND',
  TOKEN_OR: 'OR'
};

var ConditionPanel = Object(__WEBPACK_IMPORTED_MODULE_4__EventsMixin__["a" /* withEventsMixin */])(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
  _inherits(ConditionPanel, _Component);

  var _super = _createSuper(ConditionPanel);

  function ConditionPanel() {
    var _this;

    _classCallCheck(this, ConditionPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "state", _descriptor, _assertThisInitialized(_this));

    _this._filterTimeInput = new __WEBPACK_IMPORTED_MODULE_5__DateTimeInput__["a" /* default */]();
    _this._filterToDateTimeInput = new __WEBPACK_IMPORTED_MODULE_5__DateTimeInput__["a" /* default */]();
    _this._filterOptions = [];
    _this._defaultOption = -1;
    return _this;
  }

  _createClass(ConditionPanel, [{
    key: "init",

    /**
     * @inheritDoc
     */
    value: function init(params) {
      var _optionsTranslations,
          _this2 = this;

      var translate = params.api.gridOptionsWrapper.getLocaleTextFunc();
      this._filterOptions = this.getOption('filterOptions', params, [TOKENS.TOKEN_EQUAL, TOKENS.TOKEN_NOT_EQUAL, TOKENS.TOKEN_LESS, TOKENS.TOKEN_GREATER, TOKENS.TOKEN_RANGE]);
      this._defaultOption = this.getOption('defaultOption', params, this._filterOptions.indexOf(TOKENS.TOKEN_EQUAL) > -1 ? TOKENS.TOKEN_EQUAL : this._filterOptions[0]);
      this.state.type = this._defaultOption;
      var optionsTranslations = (_optionsTranslations = {}, _defineProperty(_optionsTranslations, TOKENS.TOKEN_EQUAL, translate(TOKENS.TOKEN_EQUAL, 'Equals')), _defineProperty(_optionsTranslations, TOKENS.TOKEN_NOT_EQUAL, translate(TOKENS.TOKEN_EQUAL, 'Not equal')), _defineProperty(_optionsTranslations, TOKENS.TOKEN_LESS, translate(TOKENS.TOKEN_LESS, 'Less than')), _defineProperty(_optionsTranslations, TOKENS.TOKEN_GREATER, translate(TOKENS.TOKEN_GREATER, 'Greater than')), _defineProperty(_optionsTranslations, TOKENS.TOKEN_RANGE, translate(TOKENS.TOKEN_RANGE, 'In range')), _optionsTranslations);
      this._gui = document.createElement('div');
      this._gui.className = 'dateTimeFilter ag-filter-body-wrapper';
      this._gui.innerHTML =
      /* html */
      "\n      <select class=\"ag-filter-select dateTimeFilter__select\"  ".concat(this._filterOptions.length === 1 ? 'disabled' : '', ">\n        ").concat(this._filterOptions.map(function (option) {
        return (
          /* html */
          "\n          <option \n            value=\"".concat(option, "\" \n            ").concat(option === _this2._defaultOption ? 'selected' : '', "\n          >\n              ").concat(optionsTranslations[option], "\n          </option>")
        );
      }), "\n      </select>\n      <div class=\"ag-filter-body\">\n        <div class=\"ag-filter-date-from\">\n        </div>\n        <div class=\"ag-filter-date-to ag-hidden\">\n        </div>\n      </div>\n    ");

      this._filterTimeInput.init(params);

      this._filterTimeInput.on(__WEBPACK_IMPORTED_MODULE_5__DateTimeInput__["a" /* default */].ON_DATE_CHANGED, function (selectedDate) {
        _this2.state.filter = selectedDate;

        _this2.notify(ConditionPanel.ON_CONDITION_CHANGED, _this2.state);
      });

      this._filterToDateTimeInput.init(params);

      this._filterToDateTimeInput.on(__WEBPACK_IMPORTED_MODULE_5__DateTimeInput__["a" /* default */].ON_DATE_CHANGED, function (selectedDate) {
        _this2.state.filterTo = selectedDate;

        _this2.notify(ConditionPanel.ON_CONDITION_CHANGED, _this2.state);
      });

      this._gui.querySelector('.ag-filter-date-from').appendChild(this._filterTimeInput.getGui());

      this._gui.querySelector('.ag-filter-date-to').appendChild(this._filterToDateTimeInput.getGui());

      var select = this._gui.querySelector('.ag-filter-select');

      select.addEventListener('change', this._onTypeChange);
      this.setState(this._state);
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.off(ConditionPanel.ON_CONDITION_CHANGED);

      this._filterTimeInput.destroy();

      this._filterToDateTimeInput.destroy();

      this._gui.querySelector('.ag-filter-select').removeEventListener('change', this._onTypeChange);

      this.reset();
    }
    /**
     * Reset the state
     */

  }, {
    key: "reset",
    value: function reset() {
      this.state.filter = null;
      this.state.filterTo = null;

      this._filterTimeInput.reset();

      this._filterToDateTimeInput.reset();

      this.notify(ConditionPanel.ON_CONDITION_CHANGED, this.state);
    }
    /**
     * Set the condition state
     *
     * @param {Object} state
     */

  }, {
    key: "setState",
    value: function setState(state) {
      state = state || {};
      this.state.filter = state.filter || null;
      this.state.filterTo = state.filterTo || null;
      this.state.type = state.type || this._defaultOption;
      var gui = this._gui;
      var filterOptions = this._filterOptions;
      var selectEl = gui.querySelector('.ag-filter-select');
      var filterInput = this._filterTimeInput;
      var filterToInput = this._filterToDateTimeInput;
      selectEl.selectedIndex = filterOptions.indexOf(this.state.type);
      filterInput.setDate(this.state.filter);
      filterToInput.setDate(this.state.filterTo); // we fire on change event in case the filter options contain
      // one option which is in Range "inRange"

      if ('createEvent' in document) {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('change', false, true);
        selectEl.dispatchEvent(evt);
      } else {
        selectEl.fireEvent('onchange');
      }

      this.notify(ConditionPanel.ON_CONDITION_CHANGED, this.state);
    }
    /**
     * Update the state with the selected type
     *
     * @param {Event} e
     */

  }, {
    key: "_onTypeChange",
    value: function _onTypeChange(e) {
      var el = e.target;

      var filterDateTo = this._gui.querySelector('.ag-filter-date-to');

      this.state.type = el.options[el.selectedIndex].value;

      if (this.state.type === TOKENS.TOKEN_RANGE) {
        filterDateTo.classList.remove('ag-hidden');
      } else {
        filterDateTo.classList.add('ag-hidden');
      }

      this.notify(ConditionPanel.ON_CONDITION_CHANGED, this.state);
    }
  }]);

  return ConditionPanel;
}(__WEBPACK_IMPORTED_MODULE_6__Component__["a" /* default */]), _class3.ON_CONDITION_CHANGED = 'ConditionPanel.ON_CONDITION_CHANGED', _temp), (_applyDecoratedDescriptor(_class2, "ON_CONDITION_CHANGED", [__WEBPACK_IMPORTED_MODULE_2_core_decorators_src_readonly__["a" /* default */]], (_init = Object.getOwnPropertyDescriptor(_class2, "ON_CONDITION_CHANGED"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class2), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "state", [__WEBPACK_IMPORTED_MODULE_2_core_decorators_src_readonly__["a" /* default */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      type: TOKENS.TOKEN_EQUAL,
      filter: null,
      filterTo: null
    };
  }
}), _applyDecoratedDescriptor(_class2.prototype, "init", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class2.prototype, "init"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "destroy", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class2.prototype, "destroy"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_onTypeChange", [__WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class2.prototype, "_onTypeChange"), _class2.prototype)), _class2)) || _class;

var JoinConditionPanel = Object(__WEBPACK_IMPORTED_MODULE_4__EventsMixin__["a" /* withEventsMixin */])(_class4 = (_class5 = (_temp2 = _class6 = /*#__PURE__*/function (_Component2) {
  _inherits(JoinConditionPanel, _Component2);

  var _super2 = _createSuper(JoinConditionPanel);

  function JoinConditionPanel() {
    var _this3;

    _classCallCheck(this, JoinConditionPanel);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super2.call.apply(_super2, [this].concat(args));

    _initializerDefineProperty(_this3, "state", _descriptor2, _assertThisInitialized(_this3));

    _this3._firstConditionPanel = new ConditionPanel();
    _this3._secondConditionPanel = new ConditionPanel();
    _this3._operatorPanel = null;
    _this3._params = null;
    return _this3;
  }

  _createClass(JoinConditionPanel, [{
    key: "init",

    /**
     * @inheritDoc
     */
    value: function init(params) {
      var translate = params.api.gridOptionsWrapper.getLocaleTextFunc();
      this._params = params;

      this._firstConditionPanel.init(params);

      this._firstConditionPanel.on(ConditionPanel.ON_CONDITION_CHANGED, this._onFirstConditionChanged);

      this._secondConditionPanel.init(params);

      this._secondConditionPanel.on(ConditionPanel.ON_CONDITION_CHANGED, this._onSecondConditionChanged);

      this._secondConditionPanel.getGui().classList.add('ag-hidden');

      this._gui = document.createElement('div');
      this._gui.className = 'ag-filter-body-wrapper ag-simple-filter-body-wrapper';

      this._gui.appendChild(this._firstConditionPanel.getGui()); //prettier-ignore


      var idOne = '_' + Math.random().toString(36).substr(2, 9),
          idTwo = '_' + Math.random().toString(36).substr(2, 9);
      this._operatorPanel = document.createElement('div');
      this._operatorPanel.className = 'ag-filter-condition ag-hidden';
      this._operatorPanel.innerHTML =
      /* html */
      "\n    <div class=\"ag-filter-condition-operator ag-filter-condition-operator-and ag-labeled ag-label-align-right ag-radio-button ag-input-field\">\n        <label class=\"ag-input-field-label ag-label ag-radio-button-label\" for=\"".concat(idOne, "\">       \n          ").concat(translate('andCondition', 'AND'), "\n        </label>\n        <div class=\"ag-wrapper-and ag-wrapper ag-input-wrapper ag-radio-button-input-wrapper ag-checked\">\n          <input id=\"").concat(idOne, "\" class=\"AND ag-input-field-input ag-radio-button-input\" type=\"radio\" name=\"orAndRadio\" value=\"").concat(TOKENS.TOKEN_AND, "\"/>              \n        </div> \n    </div>   \n    \n    <div class=\"ag-filter-condition-operator ag-filter-condition-operator-and ag-labeled ag-label-align-right ag-radio-button ag-input-field\">\n        <label class=\"ag-input-field-label ag-label ag-radio-button-label\" for=\"").concat(idTwo, "\">       \n          ").concat(translate('orCondition', 'OR'), "\n        </label>\n        <div class=\"ag-wrapper-or ag-wrapper ag-input-wrapper ag-radio-button-input-wrapper\">\n          <input id=\"").concat(idTwo, "\" class=\"OR ag-input-field-input ag-radio-button-input\" type=\"radio\" name=\"orAndRadio\" value=\"").concat(TOKENS.TOKEN_OR, "\"/>              \n        </div>         \n    </div>   \n    ");

      this._gui.appendChild(this._operatorPanel);

      this._operatorPanel.addEventListener('change', this._onOperatorChanged);

      this._gui.appendChild(this._secondConditionPanel.getGui());
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._firstConditionPanel.destroy();

      this._secondConditionPanel.destroy();

      this._operatorPanel.removeEventListener('change', this._onOperatorChanged);

      this.off(JoinConditionPanel.ON_JOIN_CONDITION_CHANGED);
      this.reset();
    }
    /**
     * Reset the state
     */

  }, {
    key: "reset",
    value: function reset() {
      this._firstConditionPanel.reset();

      this._secondConditionPanel.reset();

      this.notify(ConditionPanel.ON_CONDITION_CHANGED, this.state);
    }
    /**
     * Set the condition join state
     *
     * @param {Object} state
     */

  }, {
    key: "setState",
    value: function setState(state) {
      var _this4 = this;

      state = state || {};
      this.state.operator = state.operator || TOKENS.TOKEN_OR;
      this.state.condition1 = state.condition1 || null;
      this.state.condition2 = state.condition2 || null;

      this._firstConditionPanel.setState(this.state.condition1);

      this._secondConditionPanel.setState(this.state.condition2);

      this._operatorPanel.querySelectorAll('input').forEach(function (input) {
        if (input.classList.contains(_this4.state.operator)) {
          input.checked = true;
        } else {
          input.checked = false;
        }
      });

      this.notify(JoinConditionPanel.ON_JOIN_CONDITION_CHANGED, this.state);
    }
    /**
     * Add the selected condition to the component stater
     *
     * @param {Event} e
     */

  }, {
    key: "_onOperatorChanged",
    value: function _onOperatorChanged(e) {
      var target = e.target;
      this.state.operator = target.value;

      if (target.classList.contains('OR')) {
        this._operatorPanel.querySelector('.ag-wrapper-or').classList.add('ag-checked');

        this._operatorPanel.querySelector('.ag-wrapper-and').classList.remove('ag-checked');
      } else {
        this._operatorPanel.querySelector('.ag-wrapper-or').classList.remove('ag-checked');

        this._operatorPanel.querySelector('.ag-wrapper-and').classList.add('ag-checked');
      }

      this.notify(JoinConditionPanel.ON_JOIN_CONDITION_CHANGED, this.state);
    }
    /**
     * @param {Object} state  the option state
     */

  }, {
    key: "_onFirstConditionChanged",
    value: function _onFirstConditionChanged(state) {
      this.state.condition1 = state;
      var suppressAndOrCondition = this.getOption('suppressAndOrCondition', this._params, false);

      if (!suppressAndOrCondition) {
        var _this$state$condition = this.state.condition1,
            filter = _this$state$condition.filter,
            filterTo = _this$state$condition.filterTo,
            type = _this$state$condition.type;

        var secondConditionGui = this._secondConditionPanel.getGui();

        var operatorPanelGui = this._operatorPanel;
        var condition = type === TOKENS.TOKEN_RANGE ? !filter || !filterTo : !filter;

        if (condition) {
          secondConditionGui.classList.add('ag-hidden');
          operatorPanelGui.classList.add('ag-hidden');
        } else {
          secondConditionGui.classList.remove('ag-hidden');
          operatorPanelGui.classList.remove('ag-hidden');
        }
      }

      this.notify(JoinConditionPanel.ON_JOIN_CONDITION_CHANGED, this.state);
    }
    /**
     * @param {Object} state  the option state
     */

  }, {
    key: "_onSecondConditionChanged",
    value: function _onSecondConditionChanged(state) {
      this.state.condition2 = state;
      this.notify(JoinConditionPanel.ON_JOIN_CONDITION_CHANGED, this.state);
    }
  }]);

  return JoinConditionPanel;
}(__WEBPACK_IMPORTED_MODULE_6__Component__["a" /* default */]), _class6.ON_JOIN_CONDITION_CHANGED = 'JoinConditionPanel.ON_JOIN_CONDITION_CHANGED', _temp2), (_applyDecoratedDescriptor(_class5, "ON_JOIN_CONDITION_CHANGED", [__WEBPACK_IMPORTED_MODULE_2_core_decorators_src_readonly__["a" /* default */]], (_init2 = Object.getOwnPropertyDescriptor(_class5, "ON_JOIN_CONDITION_CHANGED"), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _class5), _descriptor2 = _applyDecoratedDescriptor(_class5.prototype, "state", [__WEBPACK_IMPORTED_MODULE_2_core_decorators_src_readonly__["a" /* default */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      condition1: {},
      condition2: {},
      operator: TOKENS.TOKEN_OR
    };
  }
}), _applyDecoratedDescriptor(_class5.prototype, "init", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class5.prototype, "init"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "destroy", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class5.prototype, "destroy"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "_onOperatorChanged", [__WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class5.prototype, "_onOperatorChanged"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "_onFirstConditionChanged", [__WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class5.prototype, "_onFirstConditionChanged"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "_onSecondConditionChanged", [__WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class5.prototype, "_onSecondConditionChanged"), _class5.prototype)), _class5)) || _class4;
/**
 * DateTime Filter
 *
 * ## Options
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **dateTimeEnableTime**   | false    | enable / disable time
 * | **dateTimeEnable24HR**   | false    | enable / disable time 24 format
 * | **dateTimeEnableSeconds**   | false    | enable / disable seconds management
 * | **dateTimeEnableCalendar**   | false    | enable / disable Calendar.
 * | **dateTimeMask**   | false    | The mask used to format the selected date
 * | **dateTimeMax**   | undefined    |  Max allowed date
 * | **dateTimeMin**   | undefined    |  Min allowed date
 * | **dateTimeFormatter**   | undefined    |  A function or expression to format the date (@see supported param)
 * | **dateTimeLocale**   | System default    |  A locale to use for date formatting
 * | **dateTimeDefaultHour**   | 12    |  Initial value of the hour element.
 * | **dateTimeDefaultMinute**   | 0    |  Initial value of the minute element.
 * | **dateTimeDisableMobile**   | false    |  Set disableMobile to true to always use the non-native picker.
 * | **dateTimeEnableWeekNumber**   | true    |  Enables display of week numbers in calendar.
 * | **filterOptions**   | Equals, Greater Than, Less Than, Not Equals, In Range.    |  What Filter Options to present to the user.
 * | **defaultOption**   | Equals    |  The default Filter Options to be selected.
 * | **suppressAndOrCondition**   | false    |  If true, the filter will only offer Condition 1.
 * | **inRangeInclusive**   | false    |  If true then doing 'inRange' filter option will include values equal to the start and end of the range.
 * | **clearButton**   | false    |  Set to true to have the filter use a Clear button. The Clear button will clear the (form) details of the filter without removing any active filters on the column.
 * | **applyButton**   | false    |  Set to true to have the filter use an Apply button. If the Apply button is present, then the filter is only applied after the user hits the Apply button.
 * | **resetButton**   | false    |  Set to true to have the filter use a Reset button. The Reset button will clear the details of the filter and any active filters on that column.
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */


var DateTimeFilter = (_class7 = (_temp3 = /*#__PURE__*/function (_Component3) {
  _inherits(DateTimeFilter, _Component3);

  var _super3 = _createSuper(DateTimeFilter);

  function DateTimeFilter() {
    var _this5;

    _classCallCheck(this, DateTimeFilter);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this5 = _super3.call.apply(_super3, [this].concat(args));
    _this5._JoinConditionPanel = new JoinConditionPanel();
    _this5._state = {};
    _this5._params = {};
    _this5._doesFilterPassOptions = null;
    return _this5;
  }

  _createClass(DateTimeFilter, [{
    key: "init",

    /**
     * @inheritDoc
     */
    value: function init(params) {
      var _this6 = this;

      var translate = params.api.gridOptionsWrapper.getLocaleTextFunc();
      var isClearFilter = this.getOption('clearButton', params, false);
      var isResetButton = this.getOption('resetButton', params, false);
      var isApplyButton = this.getOption('applyButton', params, false);
      this._gui = document.createElement('div');

      this._JoinConditionPanel.init(params);

      this._JoinConditionPanel.on(JoinConditionPanel.ON_JOIN_CONDITION_CHANGED, function (state) {
        if (!_this6.__disableStateChangeListener) {
          _this6._onJoinConditionPanelStateChanged(state, isApplyButton);
        }
      });

      this._gui.appendChild(this._JoinConditionPanel.getGui());

      var applyFilterPanel = document.createElement('div');
      applyFilterPanel.className = "ag-filter-apply-panel ag-hidden";
      applyFilterPanel.innerHTML =
      /* html */
      "\n      <button class=\"ag-standard-button ag-filter-apply-panel-button clear ".concat(!isClearFilter && 'ag-hidden', "\" type=\"button\">").concat(translate('clearFilter', 'Clear Filter'), "</button>\n      <button class=\"ag-standard-button ag-filter-apply-panel-button reset ").concat(!isResetButton && 'ag-hidden', "\" type=\"button\">").concat(translate('resetFilter', 'Reset Filter'), "</button>\n      <button class=\"ag-standard-button ag-filter-apply-panel-button apply ").concat(!isApplyButton && 'ag-hidden', "\" type=\"button\">").concat(translate('applyFilter', 'Apply Filter'), "</button>\n    ");

      if (isClearFilter || isResetButton || isApplyButton) {
        applyFilterPanel.classList.remove('ag-hidden');
      }

      applyFilterPanel.addEventListener('click', this._ApplyFilterPanelButtonClick);

      this._gui.appendChild(applyFilterPanel);

      this._state = this._JoinConditionPanel.state;
      this._params = params;
      this._doesFilterPassOptions = {
        enableTime: this.getOption('dateTimeEnableTime', this._params, true),
        inRangeInclusive: this.getOption('inRangeInclusive', this._params, false),
        // eslint-disable-next-line no-prototype-builtins
        valueGetter: this._params.hasOwnProperty('filterValueGetter') ? this._params.filterValueGetter : this._params.valueGetter
      };
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._JoinConditionPanel.destroy();
    }
    /**
     * Check whether selected filter matches the passed cell data
     *
     * @param {Object} params
     *
     * @return {Boolean} true when pass, false otherwise
     */

  }, {
    key: "doesFilterPass",
    value: function doesFilterPass(params) {
      var value = this._doesFilterPassOptions.valueGetter(params);

      var _this$_state = this._state,
          condition1 = _this$_state.condition1,
          condition2 = _this$_state.condition2,
          operator = _this$_state.operator;

      var doesPassFirstCondition = this._doesPassCondition(condition1, value);

      var doesPassSecondCondition = this._doesPassCondition(condition2, value);

      return operator === TOKENS.TOKEN_OR ? doesPassFirstCondition || doesPassSecondCondition : doesPassFirstCondition && doesPassSecondCondition;
    }
    /**
     * Check whether the component is applying any filter on the column
     *
     * @return {Boolean}
     **/

  }, {
    key: "isFilterActive",
    value: function isFilterActive() {
      var condition1 = this._state.condition1;

      if (condition1 && condition1.filter) {
        if (condition1.filterTo && condition1.type === TOKENS.TOKEN_RANGE) {
          return condition1.filter !== null && condition1.filterTo !== null;
        }

        return condition1.filter !== null;
      }

      return false;
    }
    /**
     * Gets the filter state. If filter is not active, then should return null/undefined.
     * The grid calls getModel() on all active filters when gridApi.getFilterModel() is called.
     *
     * @return Object | null the filter state
     */

  }, {
    key: "getModel",
    value: function getModel() {
      var _this7 = this;

      var clone = JSON.parse(JSON.stringify(this._state));
      [clone.condition1, clone.condition2].forEach(function (condition, i) {
        if (condition.filter) {
          condition.filter = _this7._state["condition".concat(i + 1)].filter.toISOString();
        }

        if (condition.filterTo) {
          condition.filterTo = _this7._state["condition".concat(i + 1)].filterTo.toISOString();
        }
      });
      clone.filterType = 'datetime';
      clone.condition1.filterType = 'datetime';
      clone.condition2.filterType = 'datetime'; // eslint-disable-next-line no-prototype-builtins

      return clone.hasOwnProperty('condition2') && // eslint-disable-next-line no-prototype-builtins
      clone.condition2.hasOwnProperty('filter') && clone.condition2.filter ? clone : clone.condition1;
    }
    /**
     * Restores the filter state. Called by the grid after gridApi.setFilterModel(model) is called.
     * The grid will pass undefined/null to clear the filter.
     *
     * @param {Object | null} model
     */

  }, {
    key: "setModel",
    value: function setModel(model) {
      if (model && // eslint-disable-next-line no-prototype-builtins
      !model.hasOwnProperty('condition1') && // eslint-disable-next-line no-prototype-builtins
      !model.hasOwnProperty('condition2')) {
        model = {
          condition1: model
        };
      }

      this.__disableStateChangeListener = true;

      this._JoinConditionPanel.setState(model);

      this.__disableStateChangeListener = false;
      this._state = this._JoinConditionPanel.state;
      [this._state.condition1, this._state.condition2].forEach(function (condition) {
        if (condition.filter) {
          condition.filter = new Date(condition.filter);
        }

        if (condition.filterTo) {
          condition.filterTo = new Date(condition.filterTo);
        }
      });
    }
    /**
     * Get the filter model as plain string to display in the floating filter input
     *
     * @param {Object | null} model
     */

  }, {
    key: "getModelAsString",
    value: function getModelAsString(model) {
      if (!model) {
        return '';
      }

      var dateTimeMask = this.getOption('dateTimeMask', this._params, // @todo Find a better way for this
      this._JoinConditionPanel._firstConditionPanel._filterTimeInput.picker.config['dateFormat']);
      var locale = this.getOption('dateTimeLocale', this._params, Intl.DateTimeFormat().resolvedOptions().locale || 'en-US');

      var _JSON$parse = JSON.parse(JSON.stringify(model)),
          condition1 = _JSON$parse.condition1,
          condition2 = _JSON$parse.condition2,
          operator = _JSON$parse.operator;

      [condition1, condition2].forEach(function (condition) {
        if (condition.filter) {
          condition.filter = BBj.Masks.DateMask.mask(condition.filter, dateTimeMask, locale);
        }

        if (condition.filterTo) {
          condition.filterTo = BBj.Masks.DateMask.mask(condition.filterTo, dateTimeMask, locale);
        }
      });
      var firstConditionAsString = "".concat(condition1.filter || '', " ").concat(condition1.filterTo ? '→ ' + condition1.filterTo : '');
      var secondConditionAsString = "".concat(condition2.filter || '', " ").concat(condition2.filterTo ? '→ ' + condition2.filterTo : '');
      var operatorAsString = "".concat(condition2.filter && operator ? operator : '');
      return "".concat(firstConditionAsString, " ").concat(operatorAsString, " ").concat(secondConditionAsString).trim();
    }
    /**
     * Check if the given value passes the filter defined in the passed ConditionPanel's state
     *
     * @param {Object} condition condition panel state
     * @param {String} value cell value
     *
     * @return {Boolean} true when pass, false otherwise
     */

  }, {
    key: "_doesPassCondition",
    value: function _doesPassCondition(condition, value) {
      if (!condition.filter || !value) {
        return false;
      }

      var filter = condition.filter,
          filterTo = condition.filterTo,
          type = condition.type;
      var timezone = BBj.Masks.Utils.Dates.getTimezoneOrOffset();
      var inRangeInclusive = this._doesFilterPassOptions.inRangeInclusive;
      var enableTime = this._doesFilterPassOptions.enableTime;
      var passed = false;

      if (BBj.Masks.Utils.Dates.IS_TIME_REGEX.test(value)) {
        value = value = BBj.Masks.Utils.Dates.fixShortISO(value);
        [filter, filterTo].forEach(function (date) {
          if (date instanceof Date) {
            date.setFullYear(1970);
            date.setMonth(0);
            date.setDate(1);
          }
        });
      } else if (BBj.Masks.Utils.Dates.IS_DATE_REGEX.test(value)) {
        value = BBj.Masks.Utils.Dates.fixShortISO(value);
      } // convert the datetime from utc to locale


      value = Object(__WEBPACK_IMPORTED_MODULE_3_date_fns_tz_utcToZonedTime__["a" /* default */])(value, timezone); // firstDate = firstDate ? zonedTimeToUtc(firstDate , timezone) : firstDate
      // secondDate = secondDate ? zonedTimeToUtc(secondDate , timezone) : secondDate

      if (!enableTime) {
        // remove the time portion from the date
        // eslint-disable-next-line no-extra-semi
        ;
        [value, filter, filterTo].forEach(function (date) {
          if (date instanceof Date) {
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            date.setMilliseconds(0);
          }
        });
      }

      if (type === TOKENS.TOKEN_EQUAL) {
        passed = filter > value === false && filter < value == false;
      } else if (type === TOKENS.TOKEN_NOT_EQUAL) {
        passed = !(filter > value === false && filter < value == false);
      } else if (type === TOKENS.TOKEN_GREATER) {
        passed = filter < value;
      } else if (type === TOKENS.TOKEN_LESS) {
        passed = filter > value;
      } else if (type === TOKENS.TOKEN_RANGE && filterTo) {
        if (inRangeInclusive) {
          passed = (filter < value || filter > value === false && filter < value == false) && filterTo > value || filterTo > value === false && filterTo < value == false;
        } else {
          passed = filter < value && filterTo > value;
        }
      }

      return passed;
    }
    /**
     * List to click button event on the filter panel and execute the
     * right action
     *
     * @param {Event} e
     */

  }, {
    key: "_ApplyFilterPanelButtonClick",
    value: function _ApplyFilterPanelButtonClick(e) {
      var target = e.target;

      if (target.nodeName === 'BUTTON') {
        if (target.classList.contains('reset')) {
          this._JoinConditionPanel.reset();

          this._params.filterChangedCallback();
        } else if (target.classList.contains('clear')) {
          this._JoinConditionPanel.reset();
        } else if (target.classList.contains('apply')) {
          this._params.filterChangedCallback();
        }
      }
    }
    /**
     * Update the filter state and Apply the filter depending on
     * whether the `isApplyButtonActive` is true or false
     *
     * @param {Object} state
     * @param {Boolean} isApplyButtonActive
     */

  }, {
    key: "_onJoinConditionPanelStateChanged",
    value: function _onJoinConditionPanelStateChanged(state, isApplyButtonActive) {
      this._state = state;

      if (false === isApplyButtonActive) {
        this._params.filterChangedCallback();
      }
    }
  }]);

  return DateTimeFilter;
}(__WEBPACK_IMPORTED_MODULE_6__Component__["a" /* default */]), _temp3), (_applyDecoratedDescriptor(_class7.prototype, "init", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class7.prototype, "init"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "destroy", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class7.prototype, "destroy"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "_ApplyFilterPanelButtonClick", [__WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class7.prototype, "_ApplyFilterPanelButtonClick"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "_onJoinConditionPanelStateChanged", [__WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class7.prototype, "_onJoinConditionPanelStateChanged"), _class7.prototype)), _class7);
/* harmony default export */ __webpack_exports__["a"] = (DateTimeFilter);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tzTokenizeDate;
/**
 * Returns the [year, month, day, hour, minute, seconds] tokens of the provided
 * `date` as it will be rendered in the `timeZone`.
 */
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone);
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date);
  var filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var pos = typeToPos[formatted[i].type];

    if (pos >= 0) {
      filled[pos] = parseInt(formatted[i].value, 10);
    }
  }

  return filled;
}

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, '');
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted); // var [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
  // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]

  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]];
} // Get a cached Intl.DateTimeFormat instance for the IANA `timeZone`. This can be used
// to get deterministic local date/time output according to the `en-US` locale which
// can be used to extract local time parts as necessary.


var dtfCache = {};

function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    // New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
    var testDateFormatted = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: 'America/New_York',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(new Date('2014-06-25T04:00:00.123Z'));
    var hourCycleSupported = testDateFormatted === '06/25/2014, 00:00:00' || testDateFormatted === '‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00';
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }) : new Intl.DateTimeFormat('en-US', {
      hourCycle: 'h23',
      timeZone: timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  return dtfCache[timeZone];
}

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subMilliseconds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(14);



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addMilliseconds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__(14);



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var timestamp = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate).getTime();
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toDate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__(14);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toDate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_esm_lib_toInteger_index_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_tzParseTimezone__ = __webpack_require__(39);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [/^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [/^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // timezone tokens (to identify the presence of a tz)
  timezone: /([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
};
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 * If the function cannot parse the string or the values are invalid, it returns Invalid Date.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */

function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  if (argument === null) {
    return new Date(NaN);
  }

  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : Object(__WEBPACK_IMPORTED_MODULE_0_date_fns_esm_lib_toInteger_index_js__["a" /* default */])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  } // Clone the date


  if (argument instanceof Date || _typeof(argument) === 'object' && Object.prototype.toString.call(argument) === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || Object.prototype.toString.call(argument) === '[object Number]') {
    return new Date(argument);
  } else if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;
  var date = parseDate(restDateString, year);

  if (isNaN(date)) {
    return new Date(NaN);
  }

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);

      if (isNaN(time)) {
        return new Date(NaN);
      }
    }

    if (dateStrings.timezone || options.timeZone) {
      offset = Object(__WEBPACK_IMPORTED_MODULE_2__lib_tzParseTimezone__["a" /* default */])(dateStrings.timezone || options.timeZone, new Date(timestamp + time));

      if (isNaN(offset)) {
        return new Date(NaN);
      }

      offset = Object(__WEBPACK_IMPORTED_MODULE_2__lib_tzParseTimezone__["a" /* default */])(dateStrings.timezone || options.timeZone, new Date(timestamp + time + offset));

      if (isNaN(offset)) {
        return new Date(NaN);
      }
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(new Date(timestamp + time));
      offset = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(new Date(timestamp + time + offset));
    }

    return new Date(timestamp + time + offset);
  } else {
    return new Date(NaN);
  }
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    dateStrings.timezone = array[2];

    if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];
  var token; // YYYY or ±YYYYY

  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);

  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  } // YY or ±YYY


  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);

  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  } // Invalid ISO-formatted year


  return {
    year: null
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null;
  }

  var token;
  var date;
  var month;
  var week; // YYYY

  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date;
  } // YYYY-MM


  token = patterns.MM.exec(dateString);

  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;

    if (!validateDate(year, month)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month);
    return date;
  } // YYYY-DDD or YYYYDDD


  token = patterns.DDD.exec(dateString);

  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);

    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  } // yyyy-MM-dd or YYYYMMDD


  token = patterns.MMDD.exec(dateString);

  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);

    if (!validateDate(year, month, day)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, day);
    return date;
  } // YYYY-Www or YYYYWww


  token = patterns.Www.exec(dateString);

  if (token) {
    week = parseInt(token[1], 10) - 1;

    if (!validateWeekDate(year, week)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week);
  } // YYYY-Www-D or YYYYWwwD


  token = patterns.WwwD.exec(dateString);

  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;

    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } // Invalid ISO-formatted date


  return null;
}

function parseTime(timeString) {
  var token;
  var hours;
  var minutes; // hh

  token = patterns.HH.exec(timeString);

  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));

    if (!validateTime(hours)) {
      return NaN;
    }

    return hours % 24 * MILLISECONDS_IN_HOUR;
  } // hh:mm or hhmm


  token = patterns.HHMM.exec(timeString);

  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));

    if (!validateTime(hours, minutes)) {
      return NaN;
    }

    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  } // hh:mm:ss or hhmmss


  token = patterns.HHMMSS.exec(timeString);

  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));

    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }

    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
  } // Invalid ISO-formatted time


  return null;
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions


var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }

  if (date != null) {
    if (date < 1) {
      return false;
    }

    var isLeapYear = isLeapYearIndex(year);

    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }

    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }

  return true;
}

function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }

  var isLeapYear = isLeapYearIndex(year);

  if (isLeapYear && dayOfYear > 366) {
    return false;
  }

  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }

  return true;
}

function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false;
  }

  if (day != null && (day < 0 || day > 6)) {
    return false;
  }

  return true;
}

function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false;
  }

  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }

  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }

  return true;
}

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTimezoneOffsetInMilliseconds;
var MILLISECONDS_IN_MINUTE = 60000;

function getDateMillisecondsPart(date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE;
}
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */


function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
  date.setSeconds(0, 0);
  var hasNegativeUTCOffset = baseTimezoneOffset > 0;
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE : getDateMillisecondsPart(date);
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withEventsMixin; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-disable no-prototype-builtins */

/**
 * Events Mixin
 *
 * Allow classes to have their own events manager
 *
 * @param {Class} superClass
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
var EventsMixin = function EventsMixin(superClass) {
  var _temp;

  return _temp = /*#__PURE__*/function (_superClass) {
    _inherits(_temp, _superClass);

    var _super = _createSuper(_temp);

    function _temp() {
      var _this;

      _classCallCheck(this, _temp);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.__handlers = {};
      return _this;
    }

    _createClass(_temp, [{
      key: "on",

      /**
       * Register an event handler
       *
       * @param {String} name event name
       * @param {Function} handler handler function
       */
      value: function on(name, handler) {
        this.__handlers[name] = this.__handlers[name] || [];

        this.__handlers[name].push(handler);
      }
      /**
       * Remove an event handler
       *
       * **Note :** if handler is not provided then all registered handler for the given event will be removed
       *
       * @param {String} name event name
       * @param {Function} handler handler function
       */

    }, {
      key: "off",
      value: function off(name, handler) {
        this.__handlers[name] = this.__handlers[name] || [];

        if (!handler) {
          delete this.__handlers[name];
        } else {
          for (var registeredHandler in this.__handlers) {
            if (this.__handlers.hasOwnProperty(registeredHandler) && this.__handlers[registeredHandler] === handler) {
              delete this.__handlers[name];
            }
          }
        }
      }
      /**
       * Notify handlers
       *
       * @param {String} name event name
       * @param {Object} event payload
       */

    }, {
      key: "notify",
      value: function notify(name, payload) {
        var handlers = this.__handlers[name] || [];
        handlers.forEach(function (handler) {
          handler(payload);
        });
      }
    }]);

    return _temp;
  }(superClass), _temp;
};
/**
 * An events mixin decorator
 *
 * @param {Class} superClass
 *
 * @see {EventsMixin}
 */


function withEventsMixin(superClass) {
  return EventsMixin(superClass);
}

/* unused harmony default export */ var _unused_webpack_default_export = (EventsMixin);


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_decorators_src_readonly__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EventsMixin__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_scss__);
var _class, _class2, _init, _class3, _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */






/**
 * DateTimeInput
 *
 * Simple DateTimeInput component which integrates the flatpickr
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */

var DateTimeInput = Object(__WEBPACK_IMPORTED_MODULE_3__EventsMixin__["a" /* withEventsMixin */])(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
  _inherits(DateTimeInput, _Component);

  var _super = _createSuper(DateTimeInput);

  /**
   * Constant which describes the event name that will be fired when a date
   * is selected using the date picker
   *
   * @type {String}
   */

  /**
   * The date picker instance
   *
   * @type {FlatpickrFn}
   */

  /**
   * The last selected date
   *
   * @type {Date|null}
   */

  /**
   * The component received params when init is called
   *s
   * @type {Object}
   */

  /**
   * Construct new DateTimeInput
   *
   * @param {Boolean} isEditor when true , the input will styled to fit as a cell editor
   */
  function DateTimeInput() {
    var _this;

    var isEditor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, DateTimeInput);

    _this = _super.call(this);
    _this.picker = null;
    _this.selectedDate = null;
    _this._params = {};
    _this._gui = document.createElement('div');
    _this._gui.className = 'ag-cell-edit-wrapper';
    _this._gui.innerHTML =
    /* html */
    "\n    <div class=\"ag-cell-editor ag-labeled ag-label-align-left ag-text-field ag-input-field\">\n      <div class=\"datetime__input ".concat(isEditor ? 'datetime__input--editor ' : '', " ag-wrapper ag-input-wrapper ag-text-field-input-wrapper\">\n          <input class=\"datetime__input__input ").concat(isEditor ? 'ag-cell-edit-input ' : '', " ag-input-field-input ag-text-field-input\" type=\"text\" data-input>\n          <a class=\"datetime__input__clear\" data-clear>\n            <i class=\"datetime__input__clear__icon ag-icon ag-icon-cross\"></i>\n          </a>    \n      </div>\n    </div>\n    ");
    return _this;
  }
  /**
   * @inheritDoc
   */


  _createClass(DateTimeInput, [{
    key: "init",
    value: function init(params) {
      this._params = params;
      var enableTime = this.getOption('dateTimeEnableTime', params, true);
      var time_24hr = this.getOption('dateTimeEnable24HR', params, true);
      var enableSeconds = this.getOption('dateTimeEnableSeconds', params, false);
      var noCalendar = !this.getOption('dateTimeEnableCalendar', params, true);
      var dateFormat = this.getOption('dateTimeMask', params); // try to generate a default date format based on the options

      if (!dateFormat) {
        dateFormat = noCalendar ? '' : '%Y/%Mz/%Dz';

        if (enableTime) {
          dateFormat += time_24hr ? ' %Hz:%mz' : ' %hz:%mz';

          if (enableSeconds) {
            dateFormat += ':%sz';
          }
        }
      }

      dateFormat = dateFormat.trim(); // init the date picker

      this.picker = flatpickr(this._gui, {
        wrap: true,
        // allow entering the date manually requires date parsing from string
        // this is a tough thing and requires libs like moment
        allowInput: false,
        onChange: this._onDateChanged,
        formatDate: this.formatDate,
        maxDate: this.getOption('dateTimeMax', params, null),
        minDate: this.getOption('dateTimeMin', params, null),
        defaultHour: this.getOption('dateTimeDefaultHour', params, 12),
        defaultMinute: this.getOption('dateTimeDefaultMinute', params, 0),
        disableMobile: this.getOption('dateTimeDisableMobile', params, false),
        weekNumbers: this.getOption('dateTimeEnableWeekNumber', params, false),
        locale: this._getPickerLocale(),
        noCalendar: noCalendar,
        dateFormat: dateFormat,
        enableTime: enableTime,
        enableSeconds: enableSeconds,
        time_24hr: time_24hr
      }); // force dialog overflow

      this.picker.calendarContainer.classList.add('ag-custom-component-popup');
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.picker.destroy();
      this.off(DateTimeInput.ON_DATE_CHANGED);
    }
    /**
     * Set the picker date
     *
     * @param {Date|String} value the date value to set
     */

  }, {
    key: "setDate",
    value: function setDate(value) {
      this.picker.setDate(value, true);
    }
    /**
     * Open Picker
     */

  }, {
    key: "open",
    value: function open() {
      this.picker.open();

      this._gui.querySelector('input').focus();
    }
    /**
     * Close picker
     */

  }, {
    key: "close",
    value: function close() {
      this.picker.close();
    }
    /**
     * Reset the picker
     */

  }, {
    key: "reset",
    value: function reset() {
      /** this check because the tests fail here for some reasons  */
      if (this.picker.config) {
        this.picker.clear();
      }
    }
    /**
     * Format the date using `BBj.Masks.Types.date`
     *
     * @param {String} date date as a string
     * @param {String} format BBj date format
     *
     * @return {String} formatted date as string
     */

  }, {
    key: "formatDate",
    value: function formatDate(date, format) {
      var dateTimeFormatter = this.getOption('dateTimeFormatter', this._params);
      var locale = this.getOption('dateTimeLocale', this._params, Intl.DateTimeFormat().resolvedOptions().locale || 'en-US');

      if (dateTimeFormatter) {
        var type = _typeof(dateTimeFormatter);

        var expression = dateTimeFormatter;

        switch (type) {
          case 'string':
            if (!(expression.indexOf('return') >= 0)) {
              expression = 'return ' + expression + ';';
            }

            return new Function('date', 'format', 'locale', 'DateMask', expression)(date, format, locale, BBj.Masks.DateMask);

          case 'function':
            return dateTimeFormatter(date, format, locale, BBj.Masks.DateMask);

          default:
            throw new Error("Invalid dateTimeFormatter defined for column \"".concat(this._params.colDef.field, "\". The formatter should be an expression or plain function"));
        }
      } else {
        if (!format || format && format.indexOf('%') < 0) {
          return;
        }

        return BBj.Masks.DateMask.mask(date, format, locale);
      }
    }
    /**
     * Listen to date picker changes and update the selected date
     *
     * @param {Array} selectedDates  array of selected dates
     */

  }, {
    key: "_onDateChanged",
    value: function _onDateChanged(selectedDates) {
      this.selectedDate = selectedDates[0] || null;
      this.notify(DateTimeInput.ON_DATE_CHANGED, this.selectedDate);
    }
    /**
     * Get picker global localization which will work with any locale
     *
     * @return {Object}
     *
     * https://github.com/flatpickr/flatpickr/blob/master/src/l10n/default.ts
     */

  }, {
    key: "_getPickerLocale",
    value: function _getPickerLocale() {
      var locale = Intl.DateTimeFormat().resolvedOptions().locale || 'en-US';
      var weekDaysShort = [];
      var weekDaysLong = [];

      for (var day = 4; day < 11; day++) {
        var date = new Date(1970, 1 - 1, day);
        weekDaysShort.push(date.toLocaleString(locale, {
          weekday: 'short'
        }).split(',')[0] // the date-time-format-timezone polyfill attach the date also
        );
        weekDaysLong.push(date.toLocaleString(locale, {
          weekday: 'long'
        }).split(',')[0] // the date-time-format-timezone polyfill attach the date also
        );
      }

      var monthsShort = [];
      var monthsLong = [];

      for (var month = 0; month < 12; month++) {
        var _date = new Date(1970, month, 4);

        monthsShort.push(_date.toLocaleString(locale, {
          month: 'short'
        }));
        monthsLong.push(_date.toLocaleString(locale, {
          month: 'long'
        }));
      }

      return {
        weekdays: {
          shorthand: weekDaysShort,
          longhand: weekDaysLong
        },
        months: {
          shorthand: monthsShort,
          longhand: monthsLong
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: BBj.Masks.Utils.Dates.getWeekStartByLocale(locale),
        // eslint-disable-next-line no-unused-vars
        ordinal: function ordinal(number) {
          return '';
        },
        rangeSeparator: '  ',
        weekAbbreviation: '',
        scrollTitle: '',
        toggleTitle: '',
        amPM: ['AM', 'PM'],
        yearAriaLabel: '',
        hourAriaLabel: '',
        minuteAriaLabel: ''
      };
    }
  }]);

  return DateTimeInput;
}(__WEBPACK_IMPORTED_MODULE_4__Component__["a" /* default */]), _class3.ON_DATE_CHANGED = 'DateTimeInput.ON_DATE_CHANGED', _temp), (_applyDecoratedDescriptor(_class2, "ON_DATE_CHANGED", [__WEBPACK_IMPORTED_MODULE_2_core_decorators_src_readonly__["a" /* default */]], (_init = Object.getOwnPropertyDescriptor(_class2, "ON_DATE_CHANGED"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class2), _applyDecoratedDescriptor(_class2.prototype, "init", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class2.prototype, "init"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "destroy", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class2.prototype, "destroy"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "formatDate", [__WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class2.prototype, "formatDate"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_onDateChanged", [__WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class2.prototype, "_onDateChanged"), _class2.prototype)), _class2)) || _class;

/* harmony default export */ __webpack_exports__["a"] = (DateTimeInput);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(126);

if (typeof content === 'string') content = [[module.i, content, '']];
var transform;
var insertInto;
var options = {
  "hmr": true
};
options.transform = transform;

options.insertInto = function () {
  return window.parent.document.head;
};

var update = __webpack_require__(4)(content, options);

if (content.locals) module.exports = content.locals;

if (false) {
  module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss", function () {
    var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss");

    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];

    var locals = function (a, b) {
      var key,
          idx = 0;

      for (key in a) {
        if (!b || a[key] !== b[key]) return false;
        idx++;
      }

      for (key in b) {
        idx--;
      }

      return idx === 0;
    }(content.locals, newContent.locals);

    if (!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');
    update(newContent);
  });
  module.hot.dispose(function () {
    update();
  });
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".datetime__input{display:flex;align-items:center;width:100%;height:100%;overflow:hidden;border:1px solid var(--ag-input-border-color, var(--ag-border-color, #babfc7));border-radius:3px}.datetime__input:focus,.datetime__input:active,.datetime__input:hover{border-color:var(--ag-input-focus-border-color, rgba(33,150,243,0.4))}.datetime__input__input{flex:1;padding:6px;border:none;outline:none;background-color:var(--ag-background-color);color:inherit}.ag-theme-alpine .datetime__input__input,.ag-theme-balham .datetime__input__input,.ag-theme-material .datetime__input__input{background-color:var(--ag-background-color, #fff)}.ag-theme-alpine-dark .datetime__input__input,.ag-theme-balham-dark .datetime__input__input{background-color:var(--ag-background-color, #2d3436)}.datetime__input__clear{margin-left:1px;margin-top:1px;padding:6px;text-align:center;border:none;outline:none;cursor:pointer;color:inherit}.datetime__input--editor{border-color:var(--ag-input-focus-border-color, rgba(33,150,243,0.4))}.datetime__input--editor .datetime__input__input{padding:0;padding-left:6px}\n", ""]);

// exports


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(128);

if (typeof content === 'string') content = [[module.i, content, '']];
var transform;
var insertInto;
var options = {
  "hmr": true
};
options.transform = transform;

options.insertInto = function () {
  return window.parent.document.head;
};

var update = __webpack_require__(4)(content, options);

if (content.locals) module.exports = content.locals;

if (false) {
  module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss", function () {
    var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss");

    if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];

    var locals = function (a, b) {
      var key,
          idx = 0;

      for (key in a) {
        if (!b || a[key] !== b[key]) return false;
        idx++;
      }

      for (key in b) {
        idx--;
      }

      return idx === 0;
    }(content.locals, newContent.locals);

    if (!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');
    update(newContent);
  });
  module.hot.dispose(function () {
    update();
  });
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".dateTimeFilter select{margin-bottom:9px;padding:6px;border-radius:3px;border:1px solid var(--ag-input-border-color, var(--ag-border-color, #babfc7));color:inherit}.dateTimeFilter select:focus,.dateTimeFilter select:active{border-color:var(--ag-input-focus-border-color, rgba(33,150,243,0.4))}.dateTimeFilter select option{text-indent:6px}\n", ""]);

// exports


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DateTimeEditor__ = __webpack_require__(130);
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__DateTimeEditor__["a" /* default */]);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_tz_utcToZonedTime__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DateTimeInput__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Component__ = __webpack_require__(0);
var _class, _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */





/**
 * DateTimeInput
 *
 * Simple DateTimeInput component which integrates the flatpickr
 *
 * ## Options
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **dateTimeEnableTime**   | false    | enable / disable time
 * | **dateTimeEnable24HR**   | false    | enable / disable time 24 format
 * | **dateTimeEnableSeconds**   | false    | enable / disable seconds management
 * | **dateTimeEnableCalendar**   | false    | enable / disable Calendar.
 * | **dateTimeMask**   | false    | The mask used to format the selected date
 * | **dateTimeMax**   | undefined    |  Max allowed date
 * | **dateTimeMin**   | undefined    |  Min allowed date
 * | **dateTimeFormatter**   | false    |  A function or expression to format the date (@see supported param)
 * | **dateTimeLocale**   | System default    |  A locale to use for date formatting
 * | **dateTimeDefaultHour**   | 12    |  Initial value of the hour element.
 * | **dateTimeDefaultMinute**   | 0    |  Initial value of the minute element.
 * | **dateTimeDisableMobile**   | false    |  Set disableMobile to true to always use the non-native picker.
 * | **dateTimeEnableWeekNumber**   | true    |  Enables display of week numbers in calendar.
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */

var DateTimeEditor = (_class = (_temp = /*#__PURE__*/function (_Component) {
  _inherits(DateTimeEditor, _Component);

  var _super = _createSuper(DateTimeEditor);

  function DateTimeEditor() {
    var _this;

    _classCallCheck(this, DateTimeEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this._input = new __WEBPACK_IMPORTED_MODULE_3__DateTimeInput__["a" /* default */](true);
    _this._value = null;
    _this._params = null;
    return _this;
  }

  _createClass(DateTimeEditor, [{
    key: "init",

    /**
     * @inheritDoc
     */
    value: function init(params) {
      this._params = params;
      this.focusAfterAttached = params.cellStartedEdit;

      if (this.focusAfterAttached) {
        var keyPressBackspaceOrDelete = params.keyPress == 32 || params.keyPress == 46; // space // delete

        if (keyPressBackspaceOrDelete) {
          this._value = '';
        } else if (params.charPress !== null) {
          this._value = params.charPress;
        } else {
          this._value = params.value;

          if (params.keyPress != 113) {
            //F2
            this.highlightAllOnFocus = true;
          }
        }
      } else {
        this._value = params.value;
      }

      this._value = DateTimeEditor.fixShortISO(this._value);

      this._input.init(params);

      this._input.on(__WEBPACK_IMPORTED_MODULE_3__DateTimeInput__["a" /* default */].ON_DATE_CHANGED, this._onDateChange);

      if (this._value) {
        this._input.setDate(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns_tz_utcToZonedTime__["a" /* default */])(this._value, BBj.Masks.Utils.Dates.getTimezoneOrOffset()));
      }

      this._gui = this._input.getGui();
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._input.destroy();
    }
    /**
     * Gets called once after GUI is attached to DOM.
     * Make sure the container is always focused and listening to key changes
     */

  }, {
    key: "afterGuiAttached",
    value: function afterGuiAttached() {
      if (this.focusAfterAttached) {
        this.focusIn();
      }
    }
    /**
     * Get the final value to the grid, the result of the editing
     *
     * @return {Boolean}
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this._params.parseValue(this._value);
    }
    /**
     * Gets called once after initialized and returns false so the editor appears in the cell
     *
     * @return {Boolean} always false
     **/

  }, {
    key: "isPopup",
    value: function isPopup() {
      return false;
    }
    /**
     * If doing full row edit, then gets called when tabbing into the cell.
     */

  }, {
    key: "focusIn",
    value: function focusIn() {
      this._input.open();
    }
    /**
     * If doing full row edit, then gets called when tabbing out of the cell.
     */

  }, {
    key: "focusOut",
    value: function focusOut() {
      this._input.close();
    }
    /**
     * Update the editor value with selected date from the input
     *
     * @param {String} date
     */

  }, {
    key: "_onDateChange",
    value: function _onDateChange(date) {
      this._value = date instanceof Date ? date.toISOString() : '';
    }
  }], [{
    key: "fixShortISO",

    /**
     * Takes incomplete iso string and return a complete one
     *
     * @param {String} date incomplete iso string
     *
     * @return {String} complete iso string
     */
    value: function fixShortISO(value) {
      return BBj.Masks.Utils.Dates.fixShortISO(value);
    }
  }]);

  return DateTimeEditor;
}(__WEBPACK_IMPORTED_MODULE_4__Component__["a" /* default */]), _temp), (_applyDecoratedDescriptor(_class.prototype, "init", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "init"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "destroy", [__WEBPACK_IMPORTED_MODULE_1_core_decorators_src_override__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "destroy"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_onDateChange", [__WEBPACK_IMPORTED_MODULE_0_core_decorators_src_autobind__["a" /* default */]], Object.getOwnPropertyDescriptor(_class.prototype, "_onDateChange"), _class.prototype)), _class);
/* harmony default export */ __webpack_exports__["a"] = (DateTimeEditor);

/***/ })
/******/ ]);
});
//# sourceMappingURL=basis-aggrid-components.js.map