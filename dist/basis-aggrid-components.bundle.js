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
/******/ 	return __webpack_require__(__webpack_require__.s = 134);
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


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
    throw new TypeError(required + ' argument' + required > 1 ? 's' : '' + ' required, but only ' + args.length + ' present');
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

  var offsetMilliseconds = Object(__WEBPACK_IMPORTED_MODULE_0__lib_tzParseTimezone__["a" /* default */])(timeZone, date);
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

  function BooleanEditor() {
    _classCallCheck(this, BooleanEditor);

    return _possibleConstructorReturn(this, _getPrototypeOf(BooleanEditor).apply(this, arguments));
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
    value: function destroy() {} // pass

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

      if (params && params.hasOwnProperty(name)) {
        option = params[name];
      } else {
        // try to fetch from the column def first
        if (params.hasOwnProperty('colDef') && params.colDef.hasOwnProperty(name)) {
          option = params.colDef[name];
        } else {
          // try to fetch from AGridComponentsMetaConfig|meta in the context
          var AGridComponentsMetaConfig = null;

          if (params.hasOwnProperty('context')) {
            AGridComponentsMetaConfig = params.context.AGridComponentsMetaConfig || params.context.meta;
          }

          if (AGridComponentsMetaConfig && AGridComponentsMetaConfig.hasOwnProperty(params.column.colId) && AGridComponentsMetaConfig[params.column.colId].hasOwnProperty(name)) {
            option = AGridComponentsMetaConfig[params.column.colId][name];
          } else if (AGridComponentsMetaConfig && AGridComponentsMetaConfig.hasOwnProperty(name)) {
            option = AGridComponentsMetaConfig[name];
          } else {
            // try to fetch from the context object itself
            var context = params.context;

            if (context && context.hasOwnProperty(name)) {
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BooleanSwitch).call(this));

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

  /**
   * Construct new BooleanRenderer
   */
  function BooleanRenderer() {
    var _this;

    _classCallCheck(this, BooleanRenderer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BooleanRenderer).call(this)); // will this affect BBj bui ?

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BooleanFilter).call(this));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

  function NumberEditor() {
    _classCallCheck(this, NumberEditor);

    return _possibleConstructorReturn(this, _getPrototypeOf(NumberEditor).apply(this, arguments));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

  function TextEditor() {
    _classCallCheck(this, TextEditor);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextEditor).apply(this, arguments));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

  /**
   * Construct new TemplateRenderer
   */
  function TemplateRenderer() {
    var _this;

    _classCallCheck(this, TemplateRenderer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateRenderer).call(this)); // will this affect BBj bui ?

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

  function ImageRenderer() {
    _classCallCheck(this, ImageRenderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageRenderer).apply(this, arguments));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

  function ConditionPanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConditionPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConditionPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  function JoinConditionPanel() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, JoinConditionPanel);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(JoinConditionPanel)).call.apply(_getPrototypeOf3, [this].concat(args)));

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

  function DateTimeFilter() {
    var _getPrototypeOf4;

    var _this5;

    _classCallCheck(this, DateTimeFilter);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this5 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(DateTimeFilter)).call.apply(_getPrototypeOf4, [this].concat(args)));
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
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

    function _temp() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, _temp);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_temp)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateTimeInput).call(this));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

  function DateTimeEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateTimeEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateTimeEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

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
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StringMask__ = __webpack_require__(139);
/*
 * This file is part of bbj-masks lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__StringMask__["a" /* default */]);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NumberMask__ = __webpack_require__(140);
/*
 * This file is part of bbj-masks lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__NumberMask__["a" /* default */]);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_expose_loader_BBj_Masks_bbj_masks_dist_bbj_masks_js__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_expose_loader_BBj_Masks_bbj_masks_dist_bbj_masks_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_expose_loader_BBj_Masks_bbj_masks_dist_bbj_masks_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_expose_loader_Basis_InputMasking_basis_input_masking_dist_basis_input_masking_js__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_expose_loader_Basis_InputMasking_basis_input_masking_dist_basis_input_masking_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_expose_loader_Basis_InputMasking_basis_input_masking_dist_basis_input_masking_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_flatpickr__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_flatpickr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_flatpickr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_flatpickr_dist_flatpickr_css__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_flatpickr_dist_flatpickr_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_flatpickr_dist_flatpickr_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(42);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BooleanEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__index__["BooleanEditor"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BooleanRenderer", function() { return __WEBPACK_IMPORTED_MODULE_4__index__["BooleanRenderer"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BooleanFilter", function() { return __WEBPACK_IMPORTED_MODULE_4__index__["BooleanFilter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NumberEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__index__["NumberEditor"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__index__["TextEditor"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TemplateRenderer", function() { return __WEBPACK_IMPORTED_MODULE_4__index__["TemplateRenderer"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ImageRenderer", function() { return __WEBPACK_IMPORTED_MODULE_4__index__["ImageRenderer"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DateTimeFilter", function() { return __WEBPACK_IMPORTED_MODULE_4__index__["DateTimeFilter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DateTimeEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__index__["DateTimeEditor"]; });
/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */






/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {if(!global["BBj"]) global["BBj"] = {};
module.exports = global["BBj"]["Masks"] = __webpack_require__(136);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? "undefined" : _typeof(exports)) === 'object' && ( false ? "undefined" : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["Masks"] = factory();else root["BBj"] = root["BBj"] || {}, root["BBj"]["Masks"] = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 5);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (immutable) */

      __webpack_exports__["a"] = toInteger;

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
      /***/

    },
    /* 1 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__NumberMask__ = __webpack_require__(6);
      /*
       * This file is part of bbj-masks lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      /* harmony default export */


      __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__NumberMask__["a"
      /* default */
      ];
      /***/
    },
    /* 2 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__DateMask__ = __webpack_require__(7);
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return __WEBPACK_IMPORTED_MODULE_0__DateMask__["e"];
      });
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return __WEBPACK_IMPORTED_MODULE_0__DateMask__["g"];
      });
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return __WEBPACK_IMPORTED_MODULE_0__DateMask__["h"];
      });
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return __WEBPACK_IMPORTED_MODULE_0__DateMask__["a"];
      });
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return __WEBPACK_IMPORTED_MODULE_0__DateMask__["b"];
      });
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return __WEBPACK_IMPORTED_MODULE_0__DateMask__["d"];
      });
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return __WEBPACK_IMPORTED_MODULE_0__DateMask__["f"];
      });
      /*
       * This file is part of bbj-masks lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      /* harmony default export */


      __webpack_exports__["c"] = __WEBPACK_IMPORTED_MODULE_0__DateMask__["c"
      /* default */
      ];
      /***/
    },
    /* 3 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (immutable) */

      __webpack_exports__["a"] = tzParseTimezone;
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__tzTokenizeDate_index_js__ = __webpack_require__(9);

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
          var tokens = Object(__WEBPACK_IMPORTED_MODULE_0__tzTokenizeDate_index_js__["a"
          /* default */
          ])(date, timezoneString);
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
      /***/

    },
    /* 4 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__StringMask__ = __webpack_require__(19);
      /*
       * This file is part of bbj-masks lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      /* harmony default export */


      __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__StringMask__["a"
      /* default */
      ];
      /***/
    },
    /* 5 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
      });
      /* harmony export (binding) */

      __webpack_require__.d(__webpack_exports__, "Utils", function () {
        return Utils;
      });
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_0__NumberMask__ = __webpack_require__(1);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1__DateMask__ = __webpack_require__(2);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_2__StringMask__ = __webpack_require__(4);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_3__Types__ = __webpack_require__(20);
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "Types", function () {
        return __WEBPACK_IMPORTED_MODULE_3__Types__["a"];
      });
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "NumberMask", function () {
        return __WEBPACK_IMPORTED_MODULE_0__NumberMask__["a"];
      });
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "DateMask", function () {
        return __WEBPACK_IMPORTED_MODULE_1__DateMask__["c"];
      });
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "StringMask", function () {
        return __WEBPACK_IMPORTED_MODULE_2__StringMask__["a"];
      });
      /*
       * This file is part of bbj-masks lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */


      var Utils = {
        Dates: {
          getDayOfYear: __WEBPACK_IMPORTED_MODULE_1__DateMask__["e"
          /* getDayOfYear */
          ],
          getWeekNumber: __WEBPACK_IMPORTED_MODULE_1__DateMask__["g"
          /* getWeekNumber */
          ],
          getWeekStartByLocale: __WEBPACK_IMPORTED_MODULE_1__DateMask__["h"
          /* getWeekStartByLocale */
          ],
          IS_DATE_REGEX: __WEBPACK_IMPORTED_MODULE_1__DateMask__["a"
          /* IS_DATE_REGEX */
          ],
          IS_TIME_REGEX: __WEBPACK_IMPORTED_MODULE_1__DateMask__["b"
          /* IS_TIME_REGEX */
          ],
          fixShortISO: __WEBPACK_IMPORTED_MODULE_1__DateMask__["d"
          /* fixShortISO */
          ],
          getTimezoneOrOffset: __WEBPACK_IMPORTED_MODULE_1__DateMask__["f"
          /* getTimezoneOrOffset */
          ]
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_3__Types__["a"
      /* default */
      ];
      /***/
    },
    /* 6 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      /*
       * This file is part of bbj-masks lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      /**
       * NumberMask
       *
       * A javascript implementation for BBj numbers masking
       *
       * @author Hyyan Abo Fakher <habofakher@basis.com>
       */


      var NumberMask = /*#__PURE__*/function () {
        function NumberMask() {
          _classCallCheck(this, NumberMask);
        }

        _createClass(NumberMask, null, [{
          key: "mask",

          /**
           * Mask the given number with the given mask according to BBj rules
           *
           * @param {Number} number the number to format
           * @param {String} mask the mask to use for formatting
           * @param {String} [groupingSeparator=,] - a char which will be used as a grouping separator
           * @param {String} [decimalSeparator=.]  - a char which will be used as a decimal separator
           * @param {Boolean} [forceTrailingZeros=false] - Affects the output by switching the way a mask with "#" characters in the trailing positions is filled.
           *                                              for example, the function `NumberMask.mask(.10:"#.##")` returns ` .10` instead of ` .1 `
           * @param {Boolean} [loose=true] when true , errors will be ignored and the method will try at apply the mask
           *                anyway , otherwise it will stop at first error and throw it.
           * 
           * @throws {MaskError} only if loose is disabled
           * 
           * @returns {String} the masked number
           */
          value: function mask(number, _mask) {
            var groupingSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
            var decimalSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
            var forceTrailingZeros = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var loose = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
            var maskLen = _mask.length;

            if (0 === maskLen) {
              if (loose) return str; // friendly silent fail
              else throw {
                  name: 'MaskError',
                  message: "MaskError: Mask is empty"
                };
            } // Get magnitude and precision of MASK


            var maskBeforeDecimal = 0;
            var maskAfterDecimal = 0;
            var foundDecimal = false;

            for (var i = 0; i < maskLen; ++i) {
              var m = _mask.charAt(i);

              if (m == '0' || m == '#') {
                if (foundDecimal) ++maskAfterDecimal;else ++maskBeforeDecimal;
              } else if (m == '.') foundDecimal = true;
            }

            var num = NumberMask._round(number, maskAfterDecimal);

            var bytes = NumberMask._toCharArray(num); // Get magnitude and precision of NUMBER


            var inLen = bytes.length;
            var numBeforeDecimal = 0;
            var numAfterDecimal = 0;
            foundDecimal = false;

            for (var _i = 0; _i < inLen; ++_i) {
              if (bytes[_i] == '.') foundDecimal = true;else {
                if (foundDecimal) ++numAfterDecimal;else ++numBeforeDecimal;
              }
            } // always ignore mask overflow


            if (numBeforeDecimal > maskBeforeDecimal) {
              if (loose) return number.toString(); // friendly silent fail
              else throw {
                  name: 'MaskError',
                  message: "MaskError: Number is too large for mask"
                };
            } // round if mask is for a lower precision number


            if (numAfterDecimal > maskAfterDecimal) {
              num = NumberMask._round(num, maskAfterDecimal);
              bytes = NumberMask._toCharArray(num);
              inLen = bytes.length; // Get new magnitude and precision of NUMBER

              numBeforeDecimal = 0;
              numAfterDecimal = 0;
              foundDecimal = false;

              for (var _i2 = 0; _i2 < inLen; ++_i2) {
                if (bytes[_i2] == '.') foundDecimal = true;else {
                  if (foundDecimal) ++numAfterDecimal;else ++numBeforeDecimal;
                }
              } // always ignore mask overflow


              if (numBeforeDecimal > maskBeforeDecimal) {
                if (loose) return number.toString(); // friendly silent fail
                else throw {
                    name: 'MaskError',
                    message: "MaskError: Number is too large for mask"
                  };
              }
            }

            var fillByte = ' ',
                floatByte = ' ';
            var inPos = 0,
                outPos = 0,
                floatPos = 0;
            if (_mask.charAt(0) == '*') fillByte = '*';
            var fillInit = fillByte;
            var isNegative = NumberMask._getSign(num) < 0;
            var emitDecimal = inLen > 0 || _mask.indexOf('0') >= 0;
            var foundZero = false;
            var foundDigit = false;
            var currency = false;
            foundDecimal = false;
            var ret = new Array(maskLen);

            for (var maskPos = 0; maskPos < maskLen; ++maskPos) {
              var _m = _mask.charAt(maskPos);

              switch (_m) {
                case '0':
                  --maskBeforeDecimal;

                  if (maskBeforeDecimal < numBeforeDecimal && inPos < inLen) {
                    ret[outPos] = bytes[inPos];
                    ++inPos;
                    foundDigit = true;
                  } else {
                    ret[outPos] = '0';
                    foundZero = true;
                  }

                  ++outPos;
                  break;

                case '#':
                  --maskBeforeDecimal;

                  if (maskBeforeDecimal < numBeforeDecimal && inPos < inLen) {
                    ret[outPos] = bytes[inPos];
                    ++inPos;
                    foundDigit = true;
                  } else {
                    ret[outPos] = foundDecimal && forceTrailingZeros && NumberMask._getSign(num) != 0 ? '0' : fillByte;
                    if (!foundDecimal) floatPos = maskPos;
                  }

                  ++outPos;
                  break;

                case ',':
                  if (foundZero || inPos > 0) ret[outPos] = groupingSeparator;else {
                    ret[outPos] = fillByte;
                    if (!foundDecimal) floatPos = maskPos;
                  }
                  ++outPos;
                  break;

                case '-':
                  if (!foundDigit && floatByte == ' ') {
                    if (isNegative) floatByte = '-';
                    ret[outPos] = fillByte;
                    floatPos = foundDecimal ? -1 : maskPos;
                  } else ret[outPos] = isNegative ? '-' : fillByte;

                  ++outPos;
                  break;

                case '+':
                  if (!foundDigit && floatByte == ' ') {
                    floatByte = isNegative ? '-' : '+';
                    ret[outPos] = fillByte;
                    floatPos = foundDecimal ? -1 : maskPos;
                  } else ret[outPos] = isNegative ? '-' : '+';

                  ++outPos;
                  break;

                case '$':
                  if (!foundDigit && floatByte == ' ') {
                    floatByte = '$';
                    ret[outPos] = fillByte;
                    floatPos = foundDecimal ? -1 : maskPos;
                  } else {
                    ret[outPos] = '$';
                  }

                  ++outPos;
                  break;
                // case '&':
                //   currency = true
                //   if (!foundDigit && floatByte == ' ') {
                //     floatByte = '&'
                //     ret[outPos] = fillByte
                //     floatPos = foundDecimal ? -1 : maskPos
                //   } else {
                //     ret[outPos] = '&'
                //   }
                //   ++outPos
                //   break
                // case '@':
                //   currency = true
                //   if (!foundDigit && floatByte == ' ') {
                //     floatByte = '@'
                //     ret[outPos] = fillByte
                //     floatPos = foundDecimal ? -1 : maskPos
                //   } else {
                //     ret[outPos] = '@'
                //   }
                //   ++outPos
                //   break

                case '(':
                  if (!foundDigit && floatByte == ' ') {
                    if (isNegative) floatByte = '(';
                    ret[outPos] = fillByte;
                    floatPos = foundDecimal ? -1 : maskPos;
                  } else {
                    if (isNegative) {
                      ret[outPos] = '(';
                    } else {
                      ret[outPos] = foundDecimal ? ' ' : fillByte;
                    }
                  }

                  ++outPos;
                  break;

                case ')':
                  if (isNegative) {
                    ret[outPos] = ')';
                  } else {
                    ret[outPos] = foundDecimal ? ' ' : fillByte;
                  }

                  ++outPos;
                  break;

                case 'C':
                  if (maskPos < maskLen - 1 && _mask.charAt(maskPos + 1) == 'R') {
                    if (isNegative) {
                      ret[outPos] = 'C';
                      ret[outPos + 1] = 'R';
                    } else {
                      ret[outPos] = ' ';
                      ret[outPos + 1] = ' ';
                    }

                    outPos += 2;
                    ++maskPos;
                  } else {
                    ret[outPos] = 'C';
                    ++outPos;
                  }

                  break;

                case 'D':
                  if (maskPos < maskLen - 1 && _mask.charAt(maskPos + 1) == 'R') {
                    if (isNegative) {
                      ret[outPos] = 'C';
                      ret[outPos + 1] = 'R';
                    } else {
                      ret[outPos] = 'D';
                      ret[outPos + 1] = 'R';
                    }

                    outPos += 2;
                    ++maskPos;
                  } else {
                    ret[outPos] = 'D';
                    ++outPos;
                  }

                  break;

                case '*':
                  ret[outPos] = '*';
                  ++outPos;
                  break;

                case '.':
                  ret[outPos] = emitDecimal ? decimalSeparator : fillByte;
                  fillByte = ' ';
                  foundDecimal = true;
                  ++inPos;
                  ++outPos;
                  break;

                case 'B':
                  ret[outPos] = ' ';
                  ++outPos;
                  break;

                default:
                  ret[outPos] = _m;
                  ++outPos;
                  break;
              }
            }

            if (floatByte != ' ') {
              if (floatPos < 0) floatPos = outPos;

              while (floatPos >= maskLen) {
                --floatPos;
              }

              if (ret[floatPos] == fillInit) ret[floatPos] = floatByte;
            }

            return ret.join('');
          }
        }, {
          key: "_shift",
          value: function _shift(number, precision, reverseShift) {
            if (reverseShift) precision = -precision;
            var numArray = ('' + number).split('e');
            return +(numArray[0] + 'e' + (numArray[1] ? +numArray[1] + precision : precision));
          }
        }, {
          key: "_round",
          value: function _round(number, precision) {
            return NumberMask._shift(Math.round(NumberMask._shift(number, precision, false)), precision, true);
          }
        }, {
          key: "_toCharArray",
          value: function _toCharArray(number) {
            var signum = NumberMask._getSign(number);

            var chars = [];

            if (signum !== 0) {
              var string = signum < 0 ? "".concat(-1 * number.toString()) : number.toString();
              if (string.length > 1 && string.charAt(0) == '0') string = string.substring(1); // The string contains only [0-9] and '.'

              chars = string.split('');
            }

            return chars;
          }
          /**
           * Returns the sign of a number
           *
           * @param {Number} x number
           * @returns {Number} A number representing the sign of the given argument.
           *                   If the argument is a positive number, negative number, positive zero
           *                   or negative zero, the function will return 1, -1, 0 or -0 respectively.
           *                   Otherwise, NaN is returned.
           */

        }, {
          key: "_getSign",
          value: function _getSign(x) {
            return (x > 0) - (x < 0) || +x;
          }
        }]);

        return NumberMask;
      }();
      /* harmony default export */


      __webpack_exports__["a"] = NumberMask;
      /***/
    },
    /* 7 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */

      __webpack_require__.d(__webpack_exports__, "b", function () {
        return IS_TIME_REGEX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return IS_DATE_REGEX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return getWeekStartByLocale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return getDayOfYear;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return fixShortISO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return getTimezoneOrOffset;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getWeekNumber;
      });
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_0_date_fns_tz_utcToZonedTime__ = __webpack_require__(8);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1_weekstart__ = __webpack_require__(15);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      /*
       * This file is part of bbj-masks lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */


      var IS_TIME_REGEX = /^(2[0-3]|[01][0-9]):?([0-5][0-9]):?([0-5][0-9])(Z|[+-](?:2[0-3]|[01][0-9])(?::?(?:[0-5][0-9]))?)$/;
      var IS_DATE_REGEX = /^(([12]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])(Z|[+-](?:2[0-3]|[01][0-9])(?::?(?:[0-5][0-9]))?))$/;
      /**
       * Find out when the first day of the week based on the passed locale
       *
       * @param {locale} locale
       *
       * @return {Number} a number 0 = sunday , 1 = monday , ....
       */

      var getWeekStartByLocale = function getWeekStartByLocale(locale) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_weekstart__["a"
        /* getWeekStartByLocale */
        ])(locale);
      };
      /**
       *  Get day number in the year of the passed date
       *
       * @param {Date} date
       *
       * @return {Number} day number
       */


      var getDayOfYear = function getDayOfYear(date) {
        var start = new Date(date.getFullYear(), 0, 0);
        var diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        return day;
      };
      /**
       * Takes incomplete iso string and return a complete one
       *
       * @param {String} date incomplete iso string
       *
       * @return {String} complete iso string
       */


      var fixShortISO = function fixShortISO(date) {
        var value = date;
        var offset = (value.match(/z$|[+\-]\d\d:\d\d$/i) || [])[0];

        if (!offset) {
          offset = 'Z';
          value += offset;
        }

        if (IS_TIME_REGEX.test(value)) {
          value = "1970-01-01T".concat(value);
        } else if (IS_DATE_REGEX.test(value)) {
          value = "".concat(value.split(offset)[0], "T00:00:00").concat(offset);
        }

        return value;
      };
      /**
       * Get the browser timezone name , if not supported then the browser
       * timezone offset formatted
       *
       * @return {String} timezone of offset
       */


      var getTimezoneOrOffset = function getTimezoneOrOffset() {
        var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        if (!timezone) {
          var pad = function pad(number, length) {
            var str = '' + number;

            while (str.length < length) {
              str = '0' + str;
            }

            return str;
          };

          var offset = new Date().getTimezoneOffset();
          offset = (offset < 0 ? '+' : '-') + // Note the reversed sign!
          pad(parseInt(Math.abs(offset / 60)), 2) + pad(Math.abs(offset % 60), 2);
          return offset;
        }

        return timezone;
      };
      /**
       * Get the Week Number in the passed date
       *
       * @param {Date} date - Date object
       * @param {Number} weekStart A number which defines the first day of the week (0  = sunday , 1 = monday , ...)
       *
       * @returns {Number} the week number
       */


      var getWeekNumber = function getWeekNumber(date, weekStart) {
        var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        var dayNum = d.getUTCDay() - (weekStart - 1) || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
      };
      /**
       * DateMask
       *
       * A javascript implementation for BBj dates masking
       *
       * @author Hyyan Abo Fakher <habofakher@basis.com>
       */


      var DateMask = /*#__PURE__*/function () {
        function DateMask() {
          _classCallCheck(this, DateMask);
        }

        _createClass(DateMask, null, [{
          key: "mask",

          /**
           * Mask date
           *
           * Mask the passed date with the passed mask
           *
           * @param {String} date date as a string
           * @param {String} mask mask as a string
           * @param {String} [locale=Browser's locale] the language to use ex(en-US). default is to the system language
           * @param {String} [timezone=System timezone] the time zone descriptor (e.g. America/Los_Angeles). default to the system
           *                          timezone
           *
           * @return {String} a date masked with the given mask
           */
          value: function mask(date, _mask, locale, timezone) {
            if (!date) return '';
            if (!_mask) return date;
            timezone = timezone || getTimezoneOrOffset();
            locale = locale || Intl.DateTimeFormat().resolvedOptions().locale || 'en-US'; // make sure we have a complete iso string

            date = date instanceof Date ? date : fixShortISO(date);
            var dateObject = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns_tz_utcToZonedTime__["a"
            /* default */
            ])(date, timezone);

            var translation = DateMask._buildTranslation({
              year: dateObject.getFullYear(),
              month: dateObject.getMonth() + 1,
              monthShort: new Intl.DateTimeFormat([locale], {
                month: 'short'
              }).format(dateObject),
              monthLong: new Intl.DateTimeFormat([locale], {
                month: 'long'
              }).format(dateObject),
              day: dateObject.getDate(),
              dayShort: new Intl.DateTimeFormat([locale], {
                weekday: 'short'
              }).format(dateObject),
              dayLong: new Intl.DateTimeFormat([locale], {
                weekday: 'long'
              }).format(dateObject),
              minutes: dateObject.getMinutes(),
              seconds: dateObject.getSeconds(),

              get hours24() {
                return dateObject.getHours();
              },

              get hours12() {
                return this.hours24 % 12 || 12;
              },

              dayOfYear: getDayOfYear(dateObject),
              dayOfWeek: dateObject.getDay() + 1,
              // Sunday = 1 in BBj but Sunday = 0 in JS
              weekNumber: getWeekNumber(dateObject, getWeekStartByLocale(locale)),
              locale: locale,
              timezone: timezone
            });

            var result = _mask;

            for (var k in translation) {
              result = result.replace(new RegExp('(%' + k + ')', 'g'), translation[k]);
            }

            return result;
          }
          /**
           * Get a map object which contains all possible forms of masks
           *
           * @param {Object} dateDetails date
           *
           * @return {Object} forms masks
           */

        }, {
          key: "_buildTranslation",
          value: function _buildTranslation(dateDetails) {
            return {
              // year
              Yz: dateDetails.year.toString().substr(-2),
              Ys: dateDetails.year,
              Yl: dateDetails.year,
              Yp: String.fromCharCode(dateDetails.year),
              Yd: dateDetails.year,
              Y: dateDetails.year,
              // month
              Mz: String(dateDetails.month).length == 1 ? '0' + dateDetails.month : dateDetails.month,
              Ms: dateDetails.monthShort,
              Ml: dateDetails.monthLong,
              Mp: String.fromCharCode(dateDetails.month),
              Md: dateDetails.month,
              M: dateDetails.month,
              // day
              Dz: String(dateDetails.day).length == 1 ? '0' + dateDetails.day : dateDetails.day,
              Ds: dateDetails.dayShort,
              Dl: dateDetails.dayLong,
              Dp: String.fromCharCode(dateDetails.day),
              Dd: dateDetails.day,
              D: dateDetails.day,
              // hour 24
              Hz: String(dateDetails.hours24).length == 1 ? '0' + dateDetails.hours24 : dateDetails.hours24,
              Hs: dateDetails.hours24,
              Hl: dateDetails.hours24,
              Hp: String.fromCharCode(dateDetails.hours24),
              Hd: dateDetails.hours24,
              H: dateDetails.hours24,
              // hour 12
              hz: String(dateDetails.hours12).length == 1 ? '0' + dateDetails.hours12 : dateDetails.hours12,
              hs: dateDetails.hours12,
              hl: dateDetails.hours12,
              hp: String.fromCharCode(dateDetails.hours12),
              hd: dateDetails.hours12,
              h: dateDetails.hours12,
              // minutes
              mz: String(dateDetails.minutes).length == 1 ? '0' + dateDetails.minutes : dateDetails.minutes,
              ms: dateDetails.minutes,
              ml: dateDetails.minutes,
              mp: String.fromCharCode(dateDetails.minutes),
              md: dateDetails.minutes,
              m: dateDetails.minutes,
              // seconds
              sz: String(dateDetails.seconds).length == 1 ? '0' + dateDetails.seconds : dateDetails.seconds,
              ss: dateDetails.seconds,
              sl: dateDetails.seconds,
              sp: String.fromCharCode(dateDetails.seconds),
              sd: dateDetails.seconds,
              s: dateDetails.seconds,
              // AM , PM
              PP: dateDetails.hours24 > 12 ? 'PM' : 'PM',
              P: dateDetails.hours24 > 12 ? 'PM' : 'AM',
              pp: dateDetails.hours24 > 12 ? 'pm' : 'am',
              p: dateDetails.hours24 > 12 ? 'pm' : 'am',
              // Day of Year
              Jz: String(dateDetails.dayOfYear).length == 1 ? '0' + dateDetails.dayOfYear : dateDetails.dayOfYear,
              Js: dateDetails.dayOfYear,
              Jl: dateDetails.dayOfYear,
              Jd: dateDetails.dayOfYear,
              J: dateDetails.dayOfYear,
              // Day Of Week
              Wz: String(dateDetails.dayOfWeek).length == 1 ? '0' + dateDetails.dayOfWeek : dateDetails.dayOfWeek,
              Ws: dateDetails.dayOfWeek,
              Wl: dateDetails.dayOfWeek,
              Wp: String.fromCharCode(dateDetails.dayOfWeek),
              Wd: dateDetails.dayOfWeek,
              W: dateDetails.dayOfWeek,
              // week number
              wz: String(dateDetails.weekNumber).length == 1 ? '0' + dateDetails.weekNumber : dateDetails.weekNumber,
              ws: dateDetails.weekNumber,
              wl: dateDetails.weekNumber,
              wp: String.fromCharCode(dateDetails.weekNumber),
              wd: dateDetails.weekNumber,
              w: dateDetails.weekNumber
            };
          }
        }]);

        return DateMask;
      }();
      /* harmony default export */


      __webpack_exports__["c"] = DateMask;
      /***/
    },
    /* 8 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (immutable) */

      __webpack_exports__["a"] = utcToZonedTime;
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__lib_tzParseTimezone__ = __webpack_require__(3);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1_date_fns_esm_subMilliseconds__ = __webpack_require__(10);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_2__toDate__ = __webpack_require__(13);
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
        var date = Object(__WEBPACK_IMPORTED_MODULE_2__toDate__["a"
        /* default */
        ])(dirtyDate, options); // This date has the UTC time values of the input date at the system time zone

        var utcDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()); // We just need to apply the offset indicated by the time zone to this localized date

        var offsetMilliseconds = Object(__WEBPACK_IMPORTED_MODULE_0__lib_tzParseTimezone__["a"
        /* default */
        ])(timeZone, date);
        return offsetMilliseconds ? Object(__WEBPACK_IMPORTED_MODULE_1_date_fns_esm_subMilliseconds__["a"
        /* default */
        ])(utcDate, offsetMilliseconds) : utcDate;
      }
      /***/

    },
    /* 9 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (immutable) */

      __webpack_exports__["a"] = tzTokenizeDate;
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
      /***/

    },
    /* 10 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (immutable) */

      __webpack_exports__["a"] = subMilliseconds;
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(0);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__ = __webpack_require__(11);
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
       * @param {Number} amount - the amount of milliseconds to be subtracted
       * @returns {Date} the new date with the milliseconds subtracted
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
       * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
       * //=> Thu Jul 10 2014 12:45:29.250
       */


      function subMilliseconds(dirtyDate, dirtyAmount) {
        if (arguments.length < 2) {
          throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
        }

        var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a"
        /* default */
        ])(dirtyAmount);
        return Object(__WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__["a"
        /* default */
        ])(dirtyDate, -amount);
      }
      /***/

    },
    /* 11 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (immutable) */

      __webpack_exports__["a"] = addMilliseconds;
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__(0);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__(12);
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
       * @param {Number} amount - the amount of milliseconds to be added
       * @returns {Date} the new date with the milliseconds added
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
       * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
       * //=> Thu Jul 10 2014 12:45:30.750
       */


      function addMilliseconds(dirtyDate, dirtyAmount) {
        if (arguments.length < 2) {
          throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
        }

        var timestamp = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a"
        /* default */
        ])(dirtyDate).getTime();
        var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a"
        /* default */
        ])(dirtyAmount);
        return new Date(timestamp + amount);
      }
      /***/

    },
    /* 12 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (immutable) */

      __webpack_exports__["a"] = toDate;
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
        if (arguments.length < 1) {
          throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
        }

        var argStr = Object.prototype.toString.call(argument); // Clone the date

        if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
          // Prevent the date to lose the milliseconds when passed to new Date() in IE10
          return new Date(argument.getTime());
        } else if (typeof argument === 'number' || argStr === '[object Number]') {
          return new Date(argument);
        } else {
          if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

            console.warn(new Error().stack);
          }

          return new Date(NaN);
        }
      }
      /***/

    },
    /* 13 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (immutable) */

      __webpack_exports__["a"] = toDate;
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0_date_fns_esm_lib_toInteger_index_js__ = __webpack_require__(0);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1_date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__(14);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_2__lib_tzParseTimezone__ = __webpack_require__(3);

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
        var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : Object(__WEBPACK_IMPORTED_MODULE_0_date_fns_esm_lib_toInteger_index_js__["a"
        /* default */
        ])(options.additionalDigits);

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
            offset = Object(__WEBPACK_IMPORTED_MODULE_2__lib_tzParseTimezone__["a"
            /* default */
            ])(dateStrings.timezone || options.timeZone, new Date(timestamp + time));

            if (isNaN(offset)) {
              return new Date(NaN);
            }
          } else {
            // get offset accurate to hour in timezones that change offset
            offset = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__["a"
            /* default */
            ])(new Date(timestamp + time));
            offset = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__["a"
            /* default */
            ])(new Date(timestamp + time + offset));
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
      /***/

    },
    /* 14 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (immutable) */

      __webpack_exports__["a"] = getTimezoneOffsetInMilliseconds;
      var MILLISECONDS_IN_MINUTE = 60000;
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
        var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
        return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
      }
      /***/

    },
    /* 15 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* unused harmony export getWeekStartByRegion */

      /* harmony export (binding) */

      __webpack_require__.d(__webpack_exports__, "a", function () {
        return getWeekStartByLocale$1;
      });
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_0__api_js__ = __webpack_require__(16);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1__langRegionMap_js__ = __webpack_require__(17);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_2__regionDayMap_js__ = __webpack_require__(18);

      function getWeekStartByRegion$1(regionCode) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__api_js__["b"
        /* getWeekStartByRegion */
        ])(regionCode, __WEBPACK_IMPORTED_MODULE_2__regionDayMap_js__["a"
        /* default */
        ]);
      }

      function getWeekStartByLocale$1(locale) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__api_js__["a"
        /* getWeekStartByLocale */
        ])(locale, __WEBPACK_IMPORTED_MODULE_1__langRegionMap_js__["a"
        /* default */
        ], __WEBPACK_IMPORTED_MODULE_2__regionDayMap_js__["a"
        /* default */
        ]);
      }
      /***/

    },
    /* 16 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */

      __webpack_require__.d(__webpack_exports__, "b", function () {
        return getWeekStartByRegion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return getWeekStartByLocale;
      });

      function getWeekStartByRegion(regionCode, regionDayMap) {
        var code = regionDayMap[typeof regionCode === 'string' ? regionCode.toUpperCase() : regionCode];
        return typeof code === 'number' ? code : 1;
      }

      function getWeekStartByLocale(locale, langRegionMap, regionDayMap) {
        if (locale) {
          var data = locale.toLowerCase().split(/[-_]/);
          var language = data[0];
          var country;

          if (data[1] && data[1].length === 4) {
            language += "_" + data[1];
            country = data[2];
          } else {
            country = data[1];
          }

          if (!country) {
            country = langRegionMap[language];
          }

          if (country) {
            return getWeekStartByRegion(country.match(/^\d+$/) ? Number(country) : country, regionDayMap);
          }
        }

        return 1;
      }
      /***/

    },
    /* 17 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var langRegionMap = {
        en: 'US',
        zh: 'CN',
        zh_hans: 'CN',
        hans: 'CN',
        wuu: 'CN',
        hsn: 'CN',
        hak: 'CN',
        nan: 'CN',
        gan: 'CN',
        hi: 'IN',
        te: 'IN',
        mr: 'IN',
        ta: 'IN',
        gu: 'IN',
        kn: 'IN',
        or: 'IN',
        ml: 'IN',
        pa_guru: 'IN',
        bho: 'IN',
        awa: 'IN',
        as: 'IN',
        mwr: 'IN',
        mai: 'IN',
        mag: 'IN',
        bgc: 'IN',
        hne: 'IN',
        dcc: 'IN',
        dz: 'BT',
        tn: 'BW',
        am: 'ET',
        om: 'ET',
        quc: 'GT',
        id: 'ID',
        jv: 'ID',
        su: 'ID',
        mad: 'ID',
        ms_arab: 'ID',
        ga: 'IE',
        he: 'IL',
        jam: 'JM',
        ja: 'JP',
        km: 'KH',
        ko: 'KR',
        lo: 'LA',
        mh: 'MH',
        my: 'MM',
        mt: 'MT',
        ne: 'NP',
        fil: 'PH',
        ceb: 'PH',
        ilo: 'PH',
        ur: 'PK',
        pa: 'PK',
        pa_arab: 'PK',
        arab: 'PK',
        lah: 'PK',
        ps: 'PK',
        sd: 'PK',
        sd_arab: 'PK',
        skr: 'PK',
        gn: 'PY',
        th: 'TH',
        tts: 'TH',
        aeb: 'TN',
        zh_hant: 'TW',
        hant: 'TW',
        sm: 'WS',
        zu: 'ZA',
        sn: 'ZW',
        arq: 'DZ',
        ar: 'EG',
        arz: 'EG',
        fa: 'IR',
        az_arab: 'IR',
        ary: 'MA',
        bn: 'BD',
        rkt: 'BD',
        dv: 'MV'
      };
      /* harmony default export */

      __webpack_exports__["a"] = langRegionMap;
      /***/
    },
    /* 18 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var regionDayMap = {
        AG: 0,
        ATG: 0,
        28: 0,
        AR: 0,
        ARG: 0,
        32: 0,
        AS: 0,
        ASM: 0,
        16: 0,
        AU: 0,
        AUS: 0,
        36: 0,
        BR: 0,
        BRA: 0,
        76: 0,
        BS: 0,
        BHS: 0,
        44: 0,
        BT: 0,
        BTN: 0,
        64: 0,
        BW: 0,
        BWA: 0,
        72: 0,
        BZ: 0,
        BLZ: 0,
        84: 0,
        CA: 0,
        CAN: 0,
        124: 0,
        CN: 0,
        CHN: 0,
        156: 0,
        CO: 0,
        COL: 0,
        170: 0,
        DM: 0,
        DMA: 0,
        212: 0,
        DO: 0,
        DOM: 0,
        214: 0,
        ET: 0,
        ETH: 0,
        231: 0,
        GT: 0,
        GTM: 0,
        320: 0,
        GU: 0,
        GUM: 0,
        316: 0,
        HK: 0,
        HKG: 0,
        344: 0,
        HN: 0,
        HND: 0,
        340: 0,
        ID: 0,
        IDN: 0,
        360: 0,
        IE: 0,
        IRL: 0,
        372: 0,
        IL: 0,
        ISR: 0,
        376: 0,
        IN: 0,
        IND: 0,
        356: 0,
        JM: 0,
        JAM: 0,
        388: 0,
        JP: 0,
        JPN: 0,
        392: 0,
        KE: 0,
        KEN: 0,
        404: 0,
        KH: 0,
        KHM: 0,
        116: 0,
        KR: 0,
        KOR: 0,
        410: 0,
        LA: 0,
        LA0: 0,
        418: 0,
        MH: 0,
        MHL: 0,
        584: 0,
        MM: 0,
        MMR: 0,
        104: 0,
        MO: 0,
        MAC: 0,
        446: 0,
        MT: 0,
        MLT: 0,
        470: 0,
        MX: 0,
        MEX: 0,
        484: 0,
        MZ: 0,
        MOZ: 0,
        508: 0,
        NI: 0,
        NIC: 0,
        558: 0,
        NP: 0,
        NPL: 0,
        524: 0,
        NZ: 0,
        NZL: 0,
        554: 0,
        PA: 0,
        PAN: 0,
        591: 0,
        PE: 0,
        PER: 0,
        604: 0,
        PH: 0,
        PHL: 0,
        608: 0,
        PK: 0,
        PAK: 0,
        586: 0,
        PR: 0,
        PRI: 0,
        630: 0,
        PY: 0,
        PRY: 0,
        600: 0,
        SA: 0,
        SAU: 0,
        682: 0,
        SG: 0,
        SGP: 0,
        702: 0,
        SV: 0,
        SLV: 0,
        222: 0,
        TH: 0,
        THA: 0,
        764: 0,
        TN: 0,
        TUN: 0,
        788: 0,
        TT: 0,
        TTO: 0,
        780: 0,
        TW: 0,
        TWN: 0,
        158: 0,
        UM: 0,
        UMI: 0,
        581: 0,
        US: 0,
        USA: 0,
        840: 0,
        VE: 0,
        VEN: 0,
        862: 0,
        VI: 0,
        VIR: 0,
        850: 0,
        WS: 0,
        WSM: 0,
        882: 0,
        YE: 0,
        YEM: 0,
        887: 0,
        ZA: 0,
        ZAF: 0,
        710: 0,
        ZW: 0,
        ZWE: 0,
        716: 0,
        AE: 6,
        ARE: 6,
        784: 6,
        AF: 6,
        AFG: 6,
        4: 6,
        BH: 6,
        BHR: 6,
        48: 6,
        DJ: 6,
        DJI: 6,
        262: 6,
        DZ: 6,
        DZA: 6,
        12: 6,
        EG: 6,
        EGY: 6,
        818: 6,
        IQ: 6,
        IRQ: 6,
        368: 6,
        IR: 6,
        IRN: 6,
        364: 6,
        JO: 6,
        JOR: 6,
        400: 6,
        KW: 6,
        KWT: 6,
        414: 6,
        LY: 6,
        LBY: 6,
        434: 6,
        MA: 6,
        MAR: 6,
        504: 6,
        OM: 6,
        OMN: 6,
        512: 6,
        QA: 6,
        QAT: 6,
        634: 6,
        SD: 6,
        SDN: 6,
        729: 6,
        SY: 6,
        SYR: 6,
        760: 6,
        BD: 5,
        BGD: 5,
        50: 5,
        MV: 5,
        MDV: 5,
        462: 5
      };
      /* harmony default export */

      __webpack_exports__["a"] = regionDayMap;
      /***/
    },
    /* 19 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      /*
       * This file is part of bbj-masks lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */


      var isNumberRegex = /^\d+$/;
      var isWhitespaceRegex = /\s/;
      var punctuationList = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
      /**
       * Check if the given string is in lower case
       *
       * @param {String} str
       */

      var isLowerCase = function isLowerCase(str) {
        return str == str.toLowerCase() && str != str.toUpperCase();
      };
      /**
       * Check if the given string is in upper case
       *
       * @param {String} str
       */


      var isUpperCase = function isUpperCase(str) {
        return str == str.toUpperCase() && str != str.toLowerCase();
      };

      var passOrThrowError = function passOrThrowError(loose, ret, i, str) {
        if (!loose) {
          var _char = str.charAt(i);

          var pos = i + 1;
          throw {
            name: 'StringMaskError',
            message: "StringMaskError: error applying mask at position \"".concat(pos, "\" , char \"").concat(_char, "\""),
            pos: pos,
            "char": _char
          };
        } else ret[i] = ' ';
      };
      /**
       * NumberMask
       *
       * A javascript implementation for BBj numbers masking
       *
       * @author Hyyan Abo Fakher <habofakher@basis.com>
       */


      var StringMask = /*#__PURE__*/function () {
        function StringMask() {
          _classCallCheck(this, StringMask);
        }

        _createClass(StringMask, null, [{
          key: "mask",

          /**
           * Mask the given string with the given mask according to BBj rules
           *
           * @param {String} str the string to mask
           * @param {String} mask the mask to use for formatting
           * @param {Boolean} [loose=true] when true , errors will be ignored and the method will try at apply the mask
           *                anyway , otherwise it will stop at first error and throw it.
           * 
           * @throws {MaskIsTooShortError}
           * @throws {StringMaskError}
           * @throws {MaskError}
           * 
           * @returns {String} the masked string
           */
          value: function mask(str, _mask) {
            var loose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            str = String(str);
            _mask = String(_mask);
            var maskLen = _mask.length;
            var strLen = str.length;

            if (strLen > maskLen) {
              if (loose) return str; // friendly silent fail
              else throw {
                  name: 'MaskIsTooShortError',
                  message: "MaskIsTooShortError: Mask is shorter than the passed string"
                };
            }

            var ret = new Array(maskLen);
            var pos = 0; // to keep track of the current position in the str

            var maskByte = '';

            for (var i = 0; i < maskLen; i++) {
              maskByte = _mask.charAt(i);

              switch (maskByte) {
                case 'X':
                  // match any character
                  ret[i] = pos < strLen ? str.charAt(pos) : ' ';
                  ++pos;
                  break;

                case 'A':
                  // match letter; force upper case
                  if (pos < strLen) {
                    var _byte = str.charAt(pos);

                    if (isUpperCase(_byte)) ret[i] = _byte;else if (isLowerCase(_byte)) ret[i] = _byte.toUpperCase();else passOrThrowError(loose, ret, i, str);
                  } else ret[i] = ' ';

                  ++pos;
                  break;

                case 'a':
                  // match letter
                  if (pos < strLen) {
                    var _byte2 = str.charAt(pos);

                    if (isUpperCase(_byte2) || isLowerCase(_byte2)) ret[i] = _byte2;else passOrThrowError(loose, ret, i, str);
                  } else ret[i] = ' ';

                  ++pos;
                  break;

                case '0':
                  // match digit
                  if (pos < strLen) {
                    var _byte3 = str.charAt(pos);

                    if (isNumberRegex.test(_byte3)) ret[i] = _byte3;else passOrThrowError(loose, ret, i, str);
                  } else ret[i] = ' ';

                  ++pos;
                  break;

                case 'Z':
                  // match letter or digit; force upper case
                  if (pos < strLen) {
                    var _byte4 = str.charAt(pos);

                    if (isUpperCase(_byte4) || isNumberRegex.test(_byte4)) ret[i] = _byte4;else if (isLowerCase(_byte4)) ret[i] = _byte4.toUpperCase();else passOrThrowError(loose, ret, i, str);
                  } else ret[i] = ' ';

                  ++pos;
                  break;

                case 'z':
                  // match letter or digit
                  if (pos < strLen) {
                    var _byte5 = str.charAt(pos);

                    if (isUpperCase(_byte5) || isLowerCase(_byte5) || isNumberRegex.test(_byte5)) ret[i] = _byte5;else passOrThrowError(loose, ret, i, str);
                  } else ret[i] = ' ';

                  ++pos;
                  break;
                  break;

                case 'U':
                  // match letter (force upper case), digit, whitespace or punctuation.
                  if (pos < strLen) {
                    var _byte6 = str.charAt(pos);

                    if (isLowerCase(_byte6)) ret[i] = _byte6.toUpperCase();else if (isUpperCase(_byte6) || isNumberRegex.test(_byte6) || isWhitespaceRegex.test(_byte6) || punctuationList.indexOf(_byte6) > -1) ret[i] = _byte6;else passOrThrowError(loose, ret, i, str);
                  } else ret[i] = ' ';

                  ++pos;
                  break;

                default:
                  ret[i] = maskByte;
                  break;
              }
            }

            if (pos < strLen) {
              if (!loose) {
                throw {
                  name: 'MaskError',
                  message: 'Mask cannot be applied'
                };
              }
            }

            return ret.join('');
          }
        }]);

        return StringMask;
      }();
      /* harmony default export */


      __webpack_exports__["a"] = StringMask;
      /***/
    },
    /* 20 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__Types__ = __webpack_require__(21);
      /*
       * This file is part of bbj-masks lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      /* harmony default export */


      __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Types__["a"
      /* default */
      ];
      /***/
    },
    /* 21 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__NumberMask__ = __webpack_require__(1);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1__DateMask__ = __webpack_require__(2);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_2__StringMask__ = __webpack_require__(4);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      /*
       * This file is part of bbj-masks lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      /**
       * Types
       *
       * BBj masks factory
       *
       * @author Hyyan Abo Fakher <habofakher@basis.com>
       */


      var Types = /*#__PURE__*/function () {
        function Types() {
          _classCallCheck(this, Types);
        }

        _createClass(Types, null, [{
          key: "number",

          /**
           * Mask the given number with the given mask according to BBj rules
           *
           * @param {Number} number the number to format
           * @param {String} mask the mask to use for formatting
           * @param {String} [groupingSeparator=,] - a char which will be used as a grouping separator
           * @param {String} [decimalSeparator=.]  - a char which will be used as a decimal separator
           * @param {Boolean} [forceTrailingZeros=false] - Affects the output by switching the way a mask with "#" characters in the trailing positions is filled.
           *                                              for example, the function `NumberMask.mask(.10:"#.##")` returns ` .10` instead of ` .1 `
           * @param {Boolean} [loose=true] when true , errors will be ignored and the method will try at apply the mask
           *                anyway , otherwise it will stop at first error and throw it.
           *
           * @returns {String} the masked number
           */
          value: function number(_number, mask) {
            var groupingSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
            var decimalSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
            var forceTrailingZeros = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var loose = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
            return __WEBPACK_IMPORTED_MODULE_0__NumberMask__["a"
            /* default */
            ].mask(_number, mask, groupingSeparator, decimalSeparator, forceTrailingZeros, loose);
          }
          /**
           * Mask a date according to bbj masking rules
           *
           * @param {String} date date as a string
           * @param {String} mask mask as a string
           * @param {String} [locale=Browser's locale] the language to use ex(en-US). default is to the system language
           * @param {String} [timezone=System timezone] the time zone descriptor (e.g. America/Los_Angeles). default to the system
           *                          timezone
           *
           * @return {String} number masked with the given mask
           */

        }, {
          key: "date",
          value: function date(_date, mask, locale, timezone) {
            return __WEBPACK_IMPORTED_MODULE_1__DateMask__["c"
            /* default */
            ].mask(_date, mask, locale, timezone);
          }
          /**
           * Mask the given string with the given mask according to BBj rules
           *
           * @param {String} str the string to mask
           * @param {String} mask the mask to use for formatting
           * @param {Boolean} [loose=true] when true , errors will be ignored and the method will try at apply the mask
           *                anyway , otherwise it will stop at first error and throw it.
           *
           * @throws {MaskIsTooShortError}
           * @throws {StringMaskError}
           * @throws {MaskError}
           *
           * @returns {String} the masked string
           */

        }, {
          key: "string",
          value: function string(str, mask) {
            var loose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            return __WEBPACK_IMPORTED_MODULE_2__StringMask__["a"
            /* default */
            ].mask(str, mask, loose);
          }
        }]);

        return Types;
      }();
      /* harmony default export */


      __webpack_exports__["a"] = Types;
      /***/
    }
    /******/
    ])
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(131)(module)))

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {if(!global["Basis"]) global["Basis"] = {};
module.exports = global["Basis"]["InputMasking"] = __webpack_require__(138);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? "undefined" : _typeof(exports)) === 'object' && ( false ? "undefined" : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(132), __webpack_require__(133));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(132), __webpack_require__(133)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["InputMasking"] = factory(require("bbj-masks/src/StringMask"), require("bbj-masks/src/NumberMask"));else root["Basis"] = root["Basis"] || {}, root["Basis"]["InputMasking"] = factory(root["BBj"]["Masks"]["StringMask"], root["BBj"]["Masks"]["NumberMask"]);
})(typeof self !== 'undefined' ? self : this, function (__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 1);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE_0__;
      /***/
    },
    /* 1 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
      });
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__TextInput__ = __webpack_require__(2);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1__NumberInput__ = __webpack_require__(5);
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "TextInput", function () {
        return __WEBPACK_IMPORTED_MODULE_0__TextInput__["a"];
      });
      /* harmony reexport (binding) */


      __webpack_require__.d(__webpack_exports__, "NumberInput", function () {
        return __WEBPACK_IMPORTED_MODULE_1__NumberInput__["a"];
      });
      /*
       * This file is part of basis-input-masking lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      /***/

    },
    /* 2 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__TextInput__ = __webpack_require__(3);
      /*
       * This file is part of basis-input-masking lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      /* harmony default export */


      __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__TextInput__["a"
      /* default */
      ];
      /***/
    },
    /* 3 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask__ = __webpack_require__(0);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask__);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1__tools_js__ = __webpack_require__(4);

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      /*
       * This file is part of basis-input-masking lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      /**
       * The `TextInput` will wrap text inputs and apply the given [bbj string mask](https://github.com/BasisHub/bbj-masks#string-masks)
       *
       * **Options**
       *
       * _Options can be passed via data attributes . For data attributes, append the option name to data-, as in data-mask_
       *
       * | Option    | Default | Description                                                                                             |
       * |-----------|---------|---------------------------------------------------------------------------------------------------------|
       * | mask |         | The bbj string mask @see [BBj String Masks](https://github.com/BasisHub/bbj-masks#string-masks) |
       *
       *  <br>
       *
       * **Example :**
       * ```html
       *  <input class="bbj-text-masked" name="test" id="test" value="ed23" data-mask="AA-00">
       *
       *  <script>
       *    document.addEventListener('DOMContentLoaded', function (e) {
       *      new Basis.InputMasking.TextInput({
       *         onUpdate: (maskedValue , rawValue , input) => {
       *            // do something
       *         },
       *         onInvalid: (err , input) => {
       *            // do something
       *         }
       *      })
       *    })
       *  </script>
       * ```
       *
       * @author Hyyan Abo Fakher <habofakher@basis.com>
       */


      var TextInput = /*#__PURE__*/function () {
        /**
         * Construct new TextInput
         *
         * @param {?Object} options - The input options.
         * @param {HTMLElement|String} [options.elements=".bbj-text-masked"] - The class name or the node to use
         * @param {HTMLDocument} [options.document=document] - Document instance to use
         * @param {String} [options.cssClassError="bbj-mask-error"] - A css class to attach to the input when it is invalid
         * @param {String} [options.cssClassSuccess="bbj-mask-success"] - A css class to attach to the input when it is valid after the user interaction
         * @param {Function} [options.onUpdate=null] - A callback to be called on the new masked value is set
         * @param {Function} [options.onInvalid=null] - A callback to be called on the input or the mask is invalid
         */
        function TextInput() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, TextInput);

          this.options = _objectSpread({}, {
            elements: '.bbj-text-masked',
            doc: document,
            cssClassError: 'bbj-mask-error',
            cssClassSuccess: 'bbj-mask-success',
            onUpdate: null,
            onInvalid: null
          }, {}, options);
          this._onKeystroke = this._onKeystroke.bind(this);
          this._onFocus = this._onFocus.bind(this);
          this.refresh();
        }
        /**
         * Initialize the component and wrap the input elements for masking in case
         * they are not wrapped yet
         */


        _createClass(TextInput, [{
          key: "refresh",
          value: function refresh() {
            var elements = typeof this.options.elements === 'string' ? this.options.doc.querySelectorAll(this.options.elements) : this.options.elements;
            var input, parentClass;

            for (var i = 0; i < elements.length; i++) {
              input = elements[i];

              if (input instanceof HTMLInputElement) {
                parentClass = input.parentNode.getAttribute('class');

                if (!input.getAttribute('id')) {
                  console.warn("BBjMasking: Input has no ID. Without an ID the input cannot be masked", input);
                  continue;
                } // we don't initialize the input's wrap twice


                var isWrapped = parentClass && parentClass.indexOf('textInputMask__wrap') > -1;

                this._wrap(input, isWrapped);
              } else {
                console.warn("BBjMasking: Invalid input element. The element will be ignored", input);
              }
            }
          }
          /**
           * Unwrap the input elements and remove attached listeners
           */

        }, {
          key: "destroy",
          value: function destroy() {
            var elements = typeof this.options.elements === 'string' ? this.options.doc.querySelectorAll(this.options.elements) : this.options.elements;
            var input, parent, parentClass;

            for (var i = 0; i < elements.length; i++) {
              input = elements[i];
              parent = input.parentNode;
              parentClass = parent.getAttribute('class');

              if (parentClass && parentClass.indexOf('textInputMask__wrap') > -1) {
                this._unwrap(parent);
              }
            }
          }
          /**
           * Create the text masking input wrapper
           *
           * @param {HTMLInputElement} input the input element
           * @param {Boolean} isWrapped when true the input is already wrapped and we need to add what is
           *                            missing only
           *
           * @returns {HTMLSpanElement} the wrap element
           *
           * @protected
           */

        }, {
          key: "_wrap",
          value: function _wrap(input, isWrapped) {
            var inputId = input.getAttribute('id'),
                inputName = input.getAttribute('name'),
                mask = input.dataset.mask || '',
                originalPattern = input.pattern,
                defaultPattern = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["b"
            /* generatePatternFromMask */
            ])(mask),
                pattern = originalPattern || defaultPattern;
            var wrap = null,
                unmaskInput = null;

            if (!isWrapped) {
              wrap = this.options.doc.createElement('span');
              unmaskInput = this.options.doc.createElement('input'); // hidden input with the unmasked values for forms
            } else {
              wrap = input.parentNode;
              unmaskInput = wrap.querySelector('.textInputMask__unmaskedInput');
            } // configure the actual input
            // -----------------------------------------------------


            input.value = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["c"
            /* maskIfNotMasked */
            ])(input.value, mask);
            input.pattern = pattern;
            input.classList.add('textInputMask__textInput');
            input.dataset.mask = mask;
            input.dataset.valueUnmasked = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["d"
            /* unmask */
            ])(input.value, mask);

            if (originalPattern && originalPattern !== defaultPattern) {
              input.dataset.isCustomPattern = true;
            }

            if (!isWrapped) {
              if (!(input.hasAttribute('readonly') || input.hasAttribute('disable'))) {
                input.addEventListener('keyup', this._onKeystroke);
                input.addEventListener('keypress', this._onKeystroke);
                input.addEventListener('paste', this._onKeystroke);
                input.addEventListener('focusin', this._onFocus);
                input.addEventListener('click', this._onFocus);
              }

              input.parentNode.insertBefore(wrap, input); // move the input outside the wrapper
            }

            if (this._validateInput(input)) {
              this.__fireOnUpdate(input.value, input.dataset.valueUnmasked, input);
            } // configure the unmasked input
            // ----------------------------------------------------


            unmaskInput.setAttribute('aria-hidden', 'true');
            unmaskInput.setAttribute('type', 'hidden');
            unmaskInput.classList.add('textInputMask__unmaskedInput');
            unmaskInput.value = input.dataset.valueUnmasked;
            if (inputId) unmaskInput.setAttribute('id', "".concat(inputId, "-unmasked"));
            if (inputName) unmaskInput.setAttribute('name', "".concat(inputName, "-unmasked"));

            if (!isWrapped) {
              // configure the wrapper
              wrap.setAttribute('class', 'textInputMask__wrap');
              wrap.appendChild(unmaskInput);
              wrap.appendChild(input);
            }

            return wrap;
          }
          /**
           * Unwrap the masked input and remove the value changed listener
           *
           * @param {HTMLSpanElement} textInput the wrapper span instance
           *
           * @protected
           */

        }, {
          key: "_unwrap",
          value: function _unwrap(textInput) {
            textInput.removeChild(textInput.querySelector('.textInputMask__unmaskedInput'));
            var input = textInput.querySelector('.textInputMask__textInput');
            input.removeEventListener('keyup', this._onKeystroke);
            input.removeEventListener('keypress', this._onKeystroke);
            input.removeEventListener('paste', this._onKeystroke);
            input.removeEventListener('focusin', this._onFocus);
            input.removeEventListener('click', this._onFocus);
            delete input.dataset.valueUnmasked;

            if (!input.dataset.isCustomPattern) {
              input.removeAttribute('pattern');
              delete input.dataset.isCustomPattern;
            }

            input.classList.remove(this.options.cssClassError);
            textInput.parentNode.insertBefore(input, textInput);
            textInput.parentNode.removeChild(textInput);
          }
          /**
           * Listen to every keystroke on the input and update the masked and the unmasked value
           *
           * @param {Event} e
           *
           * @protected
           */

        }, {
          key: "_onKeystroke",
          value: function _onKeystroke(e) {
            if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;
            if (e.keyCode !== 13) e.preventDefault();
            var input = e.target,
                mask = input.dataset.mask || this.options.mask,
                eventType = e.type;
            input.classList.remove(this.options.cssClassError);
            input.classList.remove(this.options.cssClassSuccess);
            input.setCustomValidity('');
            var value = input.value,
                keyCode = e.keyCode,
                keyContent = e.key || e.code.replace(/[^0-9]/g, ''),
                key = keyContent ? keyContent.length > 1 ? '' : keyContent : '',
                insertPosition = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["a"
            /* findCaretPosition */
            ])(value, mask),
                newValue,
                unmaskedValue,
                maskError = false;

            switch (eventType) {
              case 'paste':
                newValue = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["c"
                /* maskIfNotMasked */
                ])((e.clipboardData || window.clipboardData).getData('Text'), mask);
                break;

              case 'keyup':
                newValue = value;
                break;

              case 'keypress':
                var selectionStart = input.selectionStart;
                if (selectionStart !== insertPosition) insertPosition = selectionStart;
                newValue = value.substr(0, insertPosition) + key + value.substr(insertPosition);
                break;

              default:
                break;
            }

            unmaskedValue = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["d"
            /* unmask */
            ])(newValue, mask);

            if ([35, 36, 37, 38, 39, 40].indexOf(keyCode) === -1) {
              try {
                input.value = __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask___default.a.mask(unmaskedValue, mask, false);

                if (this._validateInput(input)) {
                  input.dataset.valueUnmasked = unmaskedValue;
                  this.options.doc.querySelector("#".concat(input.getAttribute('id'), "-unmasked")).value = unmaskedValue;

                  this.__applyCssClassState(input, 'success');

                  this.__fireOnUpdate(input.value, input.dataset.valueUnmasked, input);
                }

                maskError = false;
              } catch (error) {
                this.__applyCssClassState(input, 'error');

                this.__fireOnInvalid(error, input);

                maskError = true;
              }

              this._updateCaretPosition(input, mask);
            }

            if (!maskError) this._validateInput(input);
          }
          /**
           * Listen to focus events on the input and update the caret position
           * where the next char should be inserted according to the mask
           *
           * @param {FocusEvent} e
           *
           * @protected
           */

        }, {
          key: "_onFocus",
          value: function _onFocus(e) {
            var input = e.target;
            var mask = input.dataset.mask || this.options.mask;

            this._updateCaretPosition(input, mask);
          }
          /**
           * Update the caret position on the input based on the given mask
           *
           * @param {HTMLInputElement} input instance
           * @param {String} mask  bbj string
           *
           * @protected
           */

        }, {
          key: "_updateCaretPosition",
          value: function _updateCaretPosition(input, mask) {
            setTimeout(function () {
              var position = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["a"
              /* findCaretPosition */
              ])(input.value, mask);
              input.setSelectionRange(position, position);
            }, 0);
          }
          /**
           * Trigger `checkValidity` on the input
           *
           * @param {HTMLInputElement} input
           *
           * @returns {Boolean} true when valid , false otherwise
           *
           * @protected
           */

        }, {
          key: "_validateInput",
          value: function _validateInput(input) {
            var isValid = input.checkValidity();

            if (isValid) {
              this.__applyCssClassState(input, 'success');

              input.setCustomValidity('');
            } else {
              this.__applyCssClassState(input, 'error');

              this.__fireOnInvalid(input.validationMessage, input);
            }

            return isValid;
          }
          /**
           * @private
           */

        }, {
          key: "__fireOnUpdate",
          value: function __fireOnUpdate(valueMasked, valueUnmasked, input) {
            if (this.options.onUpdate) {
              this.options.onUpdate(valueMasked, valueUnmasked, input);
            }
          }
          /**
           * @private
           */

        }, {
          key: "__fireOnInvalid",
          value: function __fireOnInvalid(error, input) {
            if (this.options.onInvalid) {
              this.options.onInvalid(error, input);
            }
          }
          /**
           * @private
           */

        }, {
          key: "__applyCssClassState",
          value: function __applyCssClassState(input, state) {
            if (input.hasAttribute('readonly') || input.hasAttribute('disabled')) {
              input.classList.remove(this.options.cssClassError);
              input.classList.remove(this.options.cssClassSuccess);
            } else {
              if (state === 'success') {
                input.classList.remove(this.options.cssClassError);
                input.classList.add(this.options.cssClassSuccess);
              }

              if (state === 'error') {
                input.classList.add(this.options.cssClassError);
                input.classList.remove(this.options.cssClassSuccess);
              }
            }
          }
        }]);

        return TextInput;
      }();
      /* harmony default export */


      __webpack_exports__["a"] = TextInput;
      /***/
    },
    /* 4 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* unused harmony export isMaskedValue */

      /* harmony export (binding) */

      __webpack_require__.d(__webpack_exports__, "c", function () {
        return maskIfNotMasked;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return unmask;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return findCaretPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return generatePatternFromMask;
      });
      /* unused harmony export IS_UNICODE_PROPERTY_SUPPORTED */

      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask__ = __webpack_require__(0);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask__);
      /*
       * This file is part of basis-input-masking lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */


      var SUPPORTED_MASKS = ['X', 'a', 'A', '0', 'z', 'Z', 'U'];
      /**
       * When true , then the browser supports Unicode Property Escapes
       * otherwise it is false 
       * 
       * {@link https://github.com/tc39/proposal-regexp-unicode-property-escapes}
       */

      var IS_UNICODE_PROPERTY_SUPPORTED = false;

      try {
        eval('/\\p{L}/u');
        IS_UNICODE_PROPERTY_SUPPORTED = true;
      } catch (err) {
        IS_UNICODE_PROPERTY_SUPPORTED = false;
      }
      /**
       * Check if the given value is masked with the given mask or not
       *
       * @param {String} value masked or unmasked value
       * @param {String} mask  a bbj mask
       *
       * @return {Boolean} true when the value is masked with given mask , false otherwise
       */


      var isMaskedValue = function isMaskedValue(value, mask) {
        if (typeof isMaskedValue.__CACHE__ === 'undefined') {
          isMaskedValue.__CACHE__ = {};
        }

        var cacheKey = "".concat(value, "-").concat(mask);

        if (!isMaskedValue.__CACHE__[cacheKey]) {
          var unmaskedValue = unmask(value, mask);
          isMaskedValue.__CACHE__[cacheKey] = value === __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask___default.a.mask(unmaskedValue, mask);
        }

        return isMaskedValue.__CACHE__[cacheKey];
      };
      /**
       * Mask the given value with the given mask in case the value is not already masked with the
       * given mask
       *
       * @param {String} value masked or unmasked value
       * @param {String} mask  a bbj mask
       *
       * @return {String} a masked value
       */


      var maskIfNotMasked = function maskIfNotMasked(value, mask) {
        if (typeof maskIfNotMasked.__CACHE__ === 'undefined') {
          maskIfNotMasked.__CACHE__ = {};
        }

        var cacheKey = "".concat(value, "-").concat(mask);

        if (!maskIfNotMasked.__CACHE__[cacheKey]) {
          if (isMaskedValue(value, mask)) {
            maskIfNotMasked.__CACHE__[cacheKey] = value;
          } else {
            try {
              maskIfNotMasked.__CACHE__[cacheKey] = __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask___default.a.mask(value, mask, false);
            } catch (e) {
              maskIfNotMasked.__CACHE__[cacheKey] = __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask___default.a.mask('', mask);
            }
          }
        }

        return maskIfNotMasked.__CACHE__[cacheKey];
      };
      /**
       * Generate a regex patter based on the give task
       *
       * @param {String} mask  bbj string mask
       *
       * @return {String} regex for the give mask
       */


      var generatePatternFromMask = function generatePatternFromMask(mask) {
        if (typeof generatePatternFromMask.__CACHE__ === 'undefined') {
          generatePatternFromMask.__CACHE__ = {};
        }

        var cacheKey = mask;

        if (!generatePatternFromMask.__CACHE__[cacheKey]) {
          var maskAsArry = mask.split('');
          var regex = '';
          maskAsArry.forEach(function (c) {
            switch (c) {
              case 'X':
                regex += '([^ -~])';
                break;

              case 'a':
              case 'A':
                // https://mothereff.in/regexpu#input=var+regex+%3D+/%5Cp%7BL%7D/u%3B&unicodePropertyEscape=1
                // https://stackoverflow.com/questions/150033/regular-expression-to-match-non-ascii-characters#answer-48902765
                regex += IS_UNICODE_PROPERTY_SUPPORTED ? '\\p{L}' : "((?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]))";
                break;

              case '0':
                regex += '([0-9])';
                break;

              case 'z':
              case 'Z':
                regex += IS_UNICODE_PROPERTY_SUPPORTED ? '([0-9]|\\p{L})' : "([0-9]|(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]))";
                break;

              case 'U':
                regex += IS_UNICODE_PROPERTY_SUPPORTED ? '(([0-9])|(\\s)|([.,/#!$%^&*;:{}=-_`~()])|(\\p{L}))' : "(([0-9])|(\\s)|([.,/#!$%^&*;:{}=-_`~()])|(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]))";
                break;

              default:
                regex += c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                break;
            }
          });
          generatePatternFromMask.__CACHE__[cacheKey] = regex;
        }

        return generatePatternFromMask.__CACHE__[cacheKey];
      };
      /**
       * Unmask the given value
       *
       * @param {String} maskedValue masked string
       * @param {String} mask  the used mask to produce the masked string
       */


      var unmask = function unmask(maskedValue, mask) {
        if (typeof unmask.__CACHE__ === 'undefined') {
          unmask.__CACHE__ = {};
        }

        var cacheKey = "".concat(maskedValue, "-").concat(mask);

        if (!unmask.__CACHE__[cacheKey]) {
          var maskAsArray = mask.split('');
          var maskedValueAsArray = maskedValue.split('');
          var unmasked = '';

          for (var index = 0; index < maskedValueAsArray.length; index++) {
            var el = maskedValueAsArray[index];
            var _mask = maskAsArray[index];
            var elHasMask = SUPPORTED_MASKS.indexOf(_mask) > -1;

            if (elHasMask) {
              var pattern = new RegExp(generatePatternFromMask(_mask), IS_UNICODE_PROPERTY_SUPPORTED ? 'u' : '');
              if (pattern.test(el)) unmasked += el;else break;
            }
          }

          unmask.__CACHE__[cacheKey] = unmasked.toLocaleLowerCase();
        }

        return unmask.__CACHE__[cacheKey];
      };
      /**
       * Given the masked string , find the next caret position depending on
       * what is missing to complete the mask
       *
       * @param {String} maskedValue masked string
       * @param {String} mask  the used mask to produce the masked string
       */


      var findCaretPosition = function findCaretPosition(maskedValue, mask) {
        if (typeof findCaretPosition.__CACHE__ === 'undefined') {
          findCaretPosition.__CACHE__ = {};
        }

        var cacheKey = "".concat(maskedValue, "-").concat(mask);

        if (!findCaretPosition.__CACHE__[cacheKey]) {
          var maskAsArray = mask.split('');
          var maskedValueAsArray = maskedValue.split('');

          if (maskedValueAsArray.length < maskAsArray.length) {
            maskedValueAsArray = maskedValueAsArray.concat(new Array(maskAsArray.length - maskedValueAsArray.length).join(' ').split(''));
          }

          var position = -1;

          for (var index = 0; index < maskAsArray.length; index++) {
            var el = maskAsArray[index];

            if (el !== maskedValueAsArray[index]) {
              // if (maskedValueAsArray[index] === ' ') return index
              if (SUPPORTED_MASKS.indexOf(el) > -1) {
                var pattern = new RegExp(generatePatternFromMask(el), IS_UNICODE_PROPERTY_SUPPORTED ? 'u' : '');

                if (!pattern.test(maskedValueAsArray[index])) {
                  position = index;
                  break;
                }
              }
            }
          }

          findCaretPosition.__CACHE__[cacheKey] = position < 0 ? maskedValueAsArray.length : position;
        }

        return findCaretPosition.__CACHE__[cacheKey];
      };
      /***/

    },
    /* 5 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__NumberInput__ = __webpack_require__(6);
      /*
       * This file is part of basis-input-masking lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      /* harmony default export */


      __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__NumberInput__["a"
      /* default */
      ];
      /***/
    },
    /* 6 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_NumberMask__ = __webpack_require__(7);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_NumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_NumberMask__);

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      /*
       * This file is part of basis-input-masking lib.
       * (c) Basis Europe <eu@basis.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */


      var countDecimals = function countDecimals(value) {
        if (value % 1 != 0) {
          var split = value.toString().split('.');
          if (split.length === 2) return split[1].length;
        }

        return 0;
      };
      /**
       * The `NumberInput` will wrap text inputs and apply the given [bbj Number mask](https://github.com/BasisHub/bbj-masks#number-masks)
       *
       * **Options**
       *
       * _Options can be passed via data attributes . For data attributes, append the option name to data-, as in data-mask_
       *
       * | Option    | Default | Description                                                                                             |
       * |-----------|---------|---------------------------------------------------------------------------------------------------------|
       * | mask |         | The bbj number mask @see [BBj Number Masks](https://github.com/BasisHub/bbj-masks#number-masks) |
       * | min |         | The maximum value to accept for this input|
       * | max |         | The minimum value to accept for this input|
       * | step |         | A stepping interval to use when using up and down arrows to adjust the value, as well as for validation|
       * |grouping-separator | , | a char which will be used as a grouping separator |
       * |decimal-separator | . | a char which will be used as a decimal separator |
       * |force-trailing-zeros | false | Affects the output by switching the way a mask with "#" characters in the trailing positions is filled. for example, the function NumberMask.mask(.10:"#.##") returns .10 instead of .1|
       *
       *  <br>
       *
       * **Example :**
       * ```html
       *  <input class="bbj-number-masked" name="test" id="test" value="1234" data-mask="##,##0">
       *
       *  <script>
       *    document.addEventListener('DOMContentLoaded', function (e) {
       *      new Basis.InputMasking.NumberInput({
       *
       *         // @param {String} valueMasked  masked value
       *         // @param {Number} valueUnmasked  original value
       *         // @param {HTMLInputElement} input the actual input instance
       *         onUpdate: (valueMasked, valueUnmasked, input, isApplied, isInitial) => {
       *            // do something
       *         },
       *
       *         // @param {String|Object} error last occurred error. could be mask error or validation error
       *         // @param {HTMLInputElement} input the actual input instance
       *         onInvalid: (err , input) => {
       *            // do something
       *         }
       *      })
       *    })
       *  </script>
       * ```
       *
       * @author Hyyan Abo Fakher <habofakher@basis.com>
       */


      var NumberInput = /*#__PURE__*/function () {
        /**
         * Construct new NumberInput
         *
         * @param {?Object} options - The input options.
         * @param {HTMLElement|String} [options.elements=".bbj-number-masked"] - The class name or the node to use
         * @param {HTMLDocument} [options.document=document] - Document instance to use
         * @param {String} [options.cssClassError="bbj-mask-error"] - A css class to attach to the input when it is invalid
         * @param {String} [options.cssClassSuccess="bbj-mask-success"] - A css class to attach to the input when it is valid after the user interaction
         * @param {Function} [options.onUpdate=null] - A callback to be called on the new masked value is set
         * @param {Function} [options.onInvalid=null] - A callback to be called on the input or the mask is invalid
         */
        function NumberInput() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, NumberInput);

          this.options = _objectSpread({}, {
            elements: '.bbj-number-masked',
            doc: document,
            cssClassError: 'bbj-mask-error',
            cssClassSuccess: 'bbj-mask-success',
            onUpdate: null,
            onInvalid: null
          }, {}, options);
          this._actualInputHandler = this._actualInputHandler.bind(this);
          this._unmaskedInputHandler = this._unmaskedInputHandler.bind(this);
          this.refresh();
        }
        /**
         * Initialize the component and wrap the input elements for masking in case
         * they are not wrapped yet
         */


        _createClass(NumberInput, [{
          key: "refresh",
          value: function refresh() {
            var elements = typeof this.options.elements === 'string' ? this.options.doc.querySelectorAll(this.options.elements) : this.options.elements;
            var input, parentClass;

            for (var i = 0; i < elements.length; i++) {
              input = elements[i];

              if (input instanceof HTMLInputElement) {
                parentClass = input.parentNode.getAttribute('class');

                if (!input.getAttribute('id')) {
                  console.warn("BBjMasking: Input has no ID. Without an ID the input cannot be masked", input);
                  continue;
                } // we don't initialize the input's wrap twice


                var isWrapped = parentClass && parentClass.indexOf('numberInputMask__wrap') > -1;

                this._wrap(input, isWrapped);
              } else {
                console.warn("BBjMasking: Invalid input element. The element will be ignored", input);
              }
            }
          }
          /**
           * Unwrap the input elements and remove attached listeners
           */

        }, {
          key: "destroy",
          value: function destroy() {
            var elements = typeof this.options.elements === 'string' ? this.options.doc.querySelectorAll(this.options.elements) : this.options.elements;
            var input, parent, parentClass;

            for (var i = 0; i < elements.length; i++) {
              input = elements[i];
              parent = input.parentNode;
              parentClass = parent.getAttribute('class');

              if (parentClass && parentClass.indexOf('numberInputMask__wrap') > -1) {
                this._unwrap(parent);
              }
            }
          }
          /**
           * Create the number masking input wrapper
           *
           * @param {HTMLInputElement} actualInput the input element
           * @param {Boolean} isWrapped when true the input is already wrapped and we need to add what is
           *                            missing only
           *
           * @returns {HTMLSpanElement} wrapper instance
           *
           * @protected
           */

        }, {
          key: "_wrap",
          value: function _wrap(actualInput, isWrapped) {
            var actualInputId = actualInput.getAttribute('id'),
                actualInputName = actualInput.getAttribute('name'),
                actualInputStep = actualInput.dataset.step || null,
                actualInputMax = actualInput.dataset.max || null,
                actualInputMin = actualInput.dataset.min || null,
                actualInputGroupingSeparator = actualInput.dataset.groupingSeparator || ',',
                actualInputDecimalSeparator = actualInput.dataset.decimalSeparator || '.',
                actualInputForceTrailingZeros = actualInput.dataset.forceTrailingZeros || null,
                actualInputMask = actualInput.dataset.mask || '',
                actualInputClasses = actualInput.getAttribute('class'),
                actualInputRequired = actualInput.getAttribute('required') || null;
            var wrap = null,
                unmaskedInput = null;

            if (!isWrapped) {
              wrap = this.options.doc.createElement('span');
              unmaskedInput = this.options.doc.createElement('input'); // hidden input with the unmasked values for forms
            } else {
              wrap = actualInput.parentNode;
              unmaskedInput = wrap.querySelector('.numberInputMask__unmaskedInput');
            } // configure the actual input
            // -----------------------------------------------------


            if (!isWrapped) {
              actualInput.parentNode.insertBefore(wrap, actualInput); // move the input outside the wrapper

              if (!(actualInput.hasAttribute('readonly') || actualInput.hasAttribute('disabled'))) {
                actualInput.addEventListener('click', this._actualInputHandler);
                actualInput.addEventListener('focusin', this._actualInputHandler);
              }
            }

            actualInput.dataset.valueUnmasked = actualInput.value || 0;
            actualInput.dataset.groupingSeparator = actualInputGroupingSeparator;
            actualInput.dataset.decimalSeparator = actualInputDecimalSeparator;
            actualInput.dataset.forceTrailingZeros = actualInputForceTrailingZeros;
            actualInput.value = __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_NumberMask___default.a.mask(actualInput.dataset.valueUnmasked, actualInputMask, actualInputGroupingSeparator, actualInputDecimalSeparator, actualInputForceTrailingZeros).trim();
            actualInput.classList.add('numberInputMask__textInput', this.options.cssClassSuccess); // configure the unmasked input
            // ----------------------------------------------------

            unmaskedInput.value = actualInput.dataset.valueUnmasked;
            unmaskedInput.setAttribute('aria-hidden', 'true');
            unmaskedInput.setAttribute('type', 'hidden');
            unmaskedInput.setAttribute('class', actualInputClasses);
            if (actualInputId) unmaskedInput.setAttribute('id', "".concat(actualInputId, "-unmasked"));
            if (actualInputName) unmaskedInput.setAttribute('name', "".concat(actualInputName, "-unmasked"));
            if (actualInputRequired) unmaskedInput.setAttribute('required', 'required');
            if (actualInputStep) unmaskedInput.setAttribute('step', actualInputStep);else {
              var decimals = countDecimals(unmaskedInput.value);
              var step = '1';

              if (decimals > 0) {
                step = ".".concat(Array(decimals).join('0'), "1");
              }

              unmaskedInput.setAttribute('step', step);
            }
            if (actualInputMin) unmaskedInput.setAttribute('min', actualInputMin);
            if (actualInputMax) unmaskedInput.setAttribute('max', actualInputMax);
            unmaskedInput.dataset.inputId = actualInputId;
            unmaskedInput.dataset.mask = actualInputMask;
            unmaskedInput.dataset.groupingSeparator = actualInputGroupingSeparator;
            unmaskedInput.dataset.decimalSeparator = actualInputDecimalSeparator;
            if (actualInputForceTrailingZeros) unmaskedInput.dataset.forceTrailingZeros = actualInputForceTrailingZeros;

            if (!isWrapped) {
              unmaskedInput.classList.add('numberInputMask__unmaskedInput');
              unmaskedInput.addEventListener('keydown', this._unmaskedInputHandler);
              unmaskedInput.addEventListener('keyup', this._unmaskedInputHandler);
              unmaskedInput.addEventListener('focusout', this._unmaskedInputHandler); // configure the wrapper

              wrap.setAttribute('class', 'numberInputMask__wrap');
              wrap.appendChild(unmaskedInput);
              wrap.appendChild(actualInput);
            }

            if (!isNaN(Number(actualInput.dataset.valueUnmasked))) {
              if (this._validateInput(unmaskedInput, actualInput)) {
                this.__fireOnUpdate(actualInput.value, actualInput.dataset.valueUnmasked, actualInput);
              }
            } else {
              actualInput.classList.add(this.options.cssClassError);
            }

            return wrap;
          }
          /**
           * Unwrap the masked input and remove the value changed listener
           *
           * @param {HTMLSpanElement} wrapper the wrapper span instance
           *
           * @protected
           */

        }, {
          key: "_unwrap",
          value: function _unwrap(wrapper) {
            var actualInput = wrapper.querySelector('.numberInputMask__textInput'),
                actualInputId = actualInput.id,
                unmaskedInput = wrapper.querySelector("#".concat(actualInputId, "-unmasked"));
            unmaskedInput.removeEventListener('keyup', this._unmaskedInputHandler);
            unmaskedInput.removeEventListener('keypress', this._unmaskedInputHandler);
            unmaskedInput.removeEventListener('focusout', this._unmaskedInputHandler);
            wrapper.removeChild(unmaskedInput);
            actualInput.removeEventListener('click', this._actualInputHandler);
            actualInput.removeEventListener('focusin', this._actualInputHandler);
            actualInput.classList.remove('numberInputMask__textInput');
            actualInput.classList.remove(this.options.cssClassError);
            actualInput.classList.remove(this.options.cssClassSuccess);
            delete actualInput.dataset.valueUnmasked;
            wrapper.parentNode.insertBefore(actualInput, wrapper);
            wrapper.parentNode.removeChild(wrapper);
          }
          /**
           * Listen to click and focusin event on the actual input and toggle the number input
           *
           * @param {Event} e
           *
           * @protected
           */

        }, {
          key: "_actualInputHandler",
          value: function _actualInputHandler(e) {
            var actualInput = e.target,
                actualInputId = actualInput.id,
                unmaskedInput = this.options.doc.querySelector("#".concat(actualInputId, "-unmasked"));
            actualInput.setAttribute('aria-hidden', 'true');
            actualInput.setAttribute('type', 'hidden');
            unmaskedInput.removeAttribute('aria-hidden');
            unmaskedInput.setAttribute('type', 'number');

            this._validateInput(unmaskedInput, actualInput);

            setTimeout(function () {
              unmaskedInput.focus();
              var length = String(unmaskedInput.value).length;
              unmaskedInput.type = 'text';
              unmaskedInput.setSelectionRange(length, length);
              unmaskedInput.type = 'number';
            }, 0);
          }
          /**
           * Listen to the unmasked input keydown and focusout events and check
           * if the input value can be masked or not
           *
           * @param {Event} e
           *
           * @protected
           */

        }, {
          key: "_unmaskedInputHandler",
          value: function _unmaskedInputHandler(e) {
            var unmaskedInput = e.target,
                keyCode = e.keyCode,
                mask = unmaskedInput.dataset.mask,
                groupingSeparator = unmaskedInput.dataset.groupingSeparator,
                decimalSeparator = unmaskedInput.dataset.decimalSeparator,
                forceTrailingZeros = unmaskedInput.dataset.forceTrailingZeros,
                actualInputId = unmaskedInput.dataset.inputId,
                actualInput = this.options.doc.querySelector("#".concat(actualInputId));

            var restore = false,
                apply = false,
                maskedValue = false,
                isValid = this._validateInput(unmaskedInput, actualInput);

            try {
              maskedValue = __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_NumberMask___default.a.mask(unmaskedInput.value || 0, mask, groupingSeparator, decimalSeparator, forceTrailingZeros, false).trim();
            } catch (e) {
              maskedValue = false;

              this.__applyCssClassState(unmaskedInput, actualInput, 'error');

              this.__fireOnInvalid(e, actualInput);
            }

            restore = [13, 27].indexOf(keyCode) > -1 || e.type === 'focusout';
            apply = maskedValue && isValid;

            if (restore) {
              unmaskedInput.classList.remove(this.options.cssClassError);
              unmaskedInput.classList.remove(this.options.cssClassSuccess);
              unmaskedInput.setAttribute('aria-hidden', 'true');
              unmaskedInput.setAttribute('type', 'hidden');
              actualInput.removeAttribute('aria-hidden');
              actualInput.setAttribute('type', 'text');
              actualInput.classList.add(this.options.cssClassSuccess);

              if (apply) {
                actualInput.value = maskedValue;
                actualInput.dataset.valueUnmasked = unmaskedInput.value;

                this.__fireOnUpdate(maskedValue, unmaskedInput.value, actualInput);
              } else {
                unmaskedInput.value = actualInput.dataset.valueUnmasked;

                this.__applyCssClassState(unmaskedInput, actualInput, 'success');
              }
            }
          }
          /**
           * Trigger `checkValidity` on the input
           *
           * @param {HTMLInputElement} unmaskedInput
           * @param {HTMLInputElement} actualInput
           *
           * @returns {Boolean} true when valid , false otherwise
           *
           * @protected
           */

        }, {
          key: "_validateInput",
          value: function _validateInput(unmaskedInput, actualInput) {
            var isValid = true;
            var value = Number(unmaskedInput.value);

            if (unmaskedInput.getAttribute('type') === 'hidden' && !isNaN(value)) {
              var max = unmaskedInput.getAttribute('max');
              var min = unmaskedInput.getAttribute('min');
              var step = unmaskedInput.getAttribute('step');
              if (min) isValid = isValid && value >= Number(min);
              if (max) isValid = isValid && value <= Number(max);
              if (step) isValid = isValid && countDecimals(step) === countDecimals(unmaskedInput.value);
            } else isValid = unmaskedInput.checkValidity();

            if (isValid) {
              this.__applyCssClassState(unmaskedInput, actualInput, 'success');
            } else {
              this.__applyCssClassState(unmaskedInput, actualInput, 'error');

              this.__fireOnInvalid(unmaskedInput.validationMessage || 'Validity check fails', actualInput);
            }

            return isValid;
          }
          /**
           * @param {String} valueMasked  masked value
           * @param {Number} valueUnmasked  original value
           * @param {HTMLInputElement} input the actual input instance
           *
           * @private
           */

        }, {
          key: "__fireOnUpdate",
          value: function __fireOnUpdate(valueMasked, valueUnmasked, input) {
            if (this.options.onUpdate) {
              this.options.onUpdate(valueMasked, valueUnmasked, input);
            }
          }
          /**
           * @param {String|Object} error last occurred error. could be mask error or validation error
           * @param {HTMLInputElement} input the actual input instance
           *
           * @private
           */

        }, {
          key: "__fireOnInvalid",
          value: function __fireOnInvalid(error, input) {
            if (this.options.onInvalid) {
              this.options.onInvalid(error, input);
            }
          }
          /**
           * @private
           */

        }, {
          key: "__applyCssClassState",
          value: function __applyCssClassState(unmaskedInput, actualInput, state) {
            if (actualInput.hasAttribute('readonly') || actualInput.hasAttribute('disabled')) {
              actualInput.classList.remove(this.options.cssClassError);
              actualInput.classList.remove(this.options.cssClassSuccess);
              unmaskedInput.classList.remove(this.options.cssClassError);
              unmaskedInput.classList.remove(this.options.cssClassSuccess);
            } else {
              if (state === 'success') {
                actualInput.classList.remove(this.options.cssClassError);
                actualInput.classList.add(this.options.cssClassSuccess);
                unmaskedInput.classList.remove(this.options.cssClassError);
                unmaskedInput.classList.add(this.options.cssClassSuccess);
              }

              if (state === 'error') {
                actualInput.classList.add(this.options.cssClassError);
                actualInput.classList.remove(this.options.cssClassSuccess);
                unmaskedInput.classList.add(this.options.cssClassError);
                unmaskedInput.classList.remove(this.options.cssClassSuccess);
              }
            }
          }
        }]);

        return NumberInput;
      }();
      /* harmony default export */


      __webpack_exports__["a"] = NumberInput;
      /***/
    },
    /* 7 */

    /***/
    function (module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE_7__;
      /***/
    }
    /******/
    ])
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(131)(module)))

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of bbj-masks lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var isNumberRegex = /^\d+$/;
var isWhitespaceRegex = /\s/;
var punctuationList = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
/**
 * Check if the given string is in lower case
 *
 * @param {String} str
 */

var isLowerCase = function isLowerCase(str) {
  return str == str.toLowerCase() && str != str.toUpperCase();
};
/**
 * Check if the given string is in upper case
 *
 * @param {String} str
 */


var isUpperCase = function isUpperCase(str) {
  return str == str.toUpperCase() && str != str.toLowerCase();
};

var passOrThrowError = function passOrThrowError(loose, ret, i, str) {
  if (!loose) {
    var _char = str.charAt(i);

    var pos = i + 1;
    throw {
      name: 'StringMaskError',
      message: "StringMaskError: error applying mask at position \"".concat(pos, "\" , char \"").concat(_char, "\""),
      pos: pos,
      "char": _char
    };
  } else ret[i] = ' ';
};
/**
 * NumberMask
 *
 * A javascript implementation for BBj numbers masking
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */


var StringMask = /*#__PURE__*/function () {
  function StringMask() {
    _classCallCheck(this, StringMask);
  }

  _createClass(StringMask, null, [{
    key: "mask",

    /**
     * Mask the given string with the given mask according to BBj rules
     *
     * @param {String} str the string to mask
     * @param {String} mask the mask to use for formatting
     * @param {Boolean} [loose=true] when true , errors will be ignored and the method will try at apply the mask
     *                anyway , otherwise it will stop at first error and throw it.
     * 
     * @throws {MaskIsTooShortError}
     * @throws {StringMaskError}
     * @throws {MaskError}
     * 
     * @returns {String} the masked string
     */
    value: function mask(str, _mask) {
      var loose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      str = String(str);
      _mask = String(_mask);
      var maskLen = _mask.length;
      var strLen = str.length;

      if (strLen > maskLen) {
        if (loose) return str; // friendly silent fail
        else throw {
            name: 'MaskIsTooShortError',
            message: "MaskIsTooShortError: Mask is shorter than the passed string"
          };
      }

      var ret = new Array(maskLen);
      var pos = 0; // to keep track of the current position in the str

      var maskByte = '';

      for (var i = 0; i < maskLen; i++) {
        maskByte = _mask.charAt(i);

        switch (maskByte) {
          case 'X':
            // match any character
            ret[i] = pos < strLen ? str.charAt(pos) : ' ';
            ++pos;
            break;

          case 'A':
            // match letter; force upper case
            if (pos < strLen) {
              var _byte = str.charAt(pos);

              if (isUpperCase(_byte)) ret[i] = _byte;else if (isLowerCase(_byte)) ret[i] = _byte.toUpperCase();else passOrThrowError(loose, ret, i, str);
            } else ret[i] = ' ';

            ++pos;
            break;

          case 'a':
            // match letter
            if (pos < strLen) {
              var _byte2 = str.charAt(pos);

              if (isUpperCase(_byte2) || isLowerCase(_byte2)) ret[i] = _byte2;else passOrThrowError(loose, ret, i, str);
            } else ret[i] = ' ';

            ++pos;
            break;

          case '0':
            // match digit
            if (pos < strLen) {
              var _byte3 = str.charAt(pos);

              if (isNumberRegex.test(_byte3)) ret[i] = _byte3;else passOrThrowError(loose, ret, i, str);
            } else ret[i] = ' ';

            ++pos;
            break;

          case 'Z':
            // match letter or digit; force upper case
            if (pos < strLen) {
              var _byte4 = str.charAt(pos);

              if (isUpperCase(_byte4) || isNumberRegex.test(_byte4)) ret[i] = _byte4;else if (isLowerCase(_byte4)) ret[i] = _byte4.toUpperCase();else passOrThrowError(loose, ret, i, str);
            } else ret[i] = ' ';

            ++pos;
            break;

          case 'z':
            // match letter or digit
            if (pos < strLen) {
              var _byte5 = str.charAt(pos);

              if (isUpperCase(_byte5) || isLowerCase(_byte5) || isNumberRegex.test(_byte5)) ret[i] = _byte5;else passOrThrowError(loose, ret, i, str);
            } else ret[i] = ' ';

            ++pos;
            break;
            break;

          case 'U':
            // match letter (force upper case), digit, whitespace or punctuation.
            if (pos < strLen) {
              var _byte6 = str.charAt(pos);

              if (isLowerCase(_byte6)) ret[i] = _byte6.toUpperCase();else if (isUpperCase(_byte6) || isNumberRegex.test(_byte6) || isWhitespaceRegex.test(_byte6) || punctuationList.indexOf(_byte6) > -1) ret[i] = _byte6;else passOrThrowError(loose, ret, i, str);
            } else ret[i] = ' ';

            ++pos;
            break;

          default:
            ret[i] = maskByte;
            break;
        }
      }

      if (pos < strLen) {
        if (!loose) {
          throw {
            name: 'MaskError',
            message: 'Mask cannot be applied'
          };
        }
      }

      return ret.join('');
    }
  }]);

  return StringMask;
}();

/* harmony default export */ __webpack_exports__["a"] = (StringMask);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of bbj-masks lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * NumberMask
 *
 * A javascript implementation for BBj numbers masking
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
var NumberMask = /*#__PURE__*/function () {
  function NumberMask() {
    _classCallCheck(this, NumberMask);
  }

  _createClass(NumberMask, null, [{
    key: "mask",

    /**
     * Mask the given number with the given mask according to BBj rules
     *
     * @param {Number} number the number to format
     * @param {String} mask the mask to use for formatting
     * @param {String} [groupingSeparator=,] - a char which will be used as a grouping separator
     * @param {String} [decimalSeparator=.]  - a char which will be used as a decimal separator
     * @param {Boolean} [forceTrailingZeros=false] - Affects the output by switching the way a mask with "#" characters in the trailing positions is filled.
     *                                              for example, the function `NumberMask.mask(.10:"#.##")` returns ` .10` instead of ` .1 `
     * @param {Boolean} [loose=true] when true , errors will be ignored and the method will try at apply the mask
     *                anyway , otherwise it will stop at first error and throw it.
     * 
     * @throws {MaskError} only if loose is disabled
     * 
     * @returns {String} the masked number
     */
    value: function mask(number, _mask) {
      var groupingSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
      var decimalSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
      var forceTrailingZeros = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var loose = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      var maskLen = _mask.length;

      if (0 === maskLen) {
        if (loose) return str; // friendly silent fail
        else throw {
            name: 'MaskError',
            message: "MaskError: Mask is empty"
          };
      } // Get magnitude and precision of MASK


      var maskBeforeDecimal = 0;
      var maskAfterDecimal = 0;
      var foundDecimal = false;

      for (var i = 0; i < maskLen; ++i) {
        var m = _mask.charAt(i);

        if (m == '0' || m == '#') {
          if (foundDecimal) ++maskAfterDecimal;else ++maskBeforeDecimal;
        } else if (m == '.') foundDecimal = true;
      }

      var num = NumberMask._round(number, maskAfterDecimal);

      var bytes = NumberMask._toCharArray(num); // Get magnitude and precision of NUMBER


      var inLen = bytes.length;
      var numBeforeDecimal = 0;
      var numAfterDecimal = 0;
      foundDecimal = false;

      for (var _i = 0; _i < inLen; ++_i) {
        if (bytes[_i] == '.') foundDecimal = true;else {
          if (foundDecimal) ++numAfterDecimal;else ++numBeforeDecimal;
        }
      } // always ignore mask overflow


      if (numBeforeDecimal > maskBeforeDecimal) {
        if (loose) return number.toString(); // friendly silent fail
        else throw {
            name: 'MaskError',
            message: "MaskError: Number is too large for mask"
          };
      } // round if mask is for a lower precision number


      if (numAfterDecimal > maskAfterDecimal) {
        num = NumberMask._round(num, maskAfterDecimal);
        bytes = NumberMask._toCharArray(num);
        inLen = bytes.length; // Get new magnitude and precision of NUMBER

        numBeforeDecimal = 0;
        numAfterDecimal = 0;
        foundDecimal = false;

        for (var _i2 = 0; _i2 < inLen; ++_i2) {
          if (bytes[_i2] == '.') foundDecimal = true;else {
            if (foundDecimal) ++numAfterDecimal;else ++numBeforeDecimal;
          }
        } // always ignore mask overflow


        if (numBeforeDecimal > maskBeforeDecimal) {
          if (loose) return number.toString(); // friendly silent fail
          else throw {
              name: 'MaskError',
              message: "MaskError: Number is too large for mask"
            };
        }
      }

      var fillByte = ' ',
          floatByte = ' ';
      var inPos = 0,
          outPos = 0,
          floatPos = 0;
      if (_mask.charAt(0) == '*') fillByte = '*';
      var fillInit = fillByte;
      var isNegative = NumberMask._getSign(num) < 0;
      var emitDecimal = inLen > 0 || _mask.indexOf('0') >= 0;
      var foundZero = false;
      var foundDigit = false;
      var currency = false;
      foundDecimal = false;
      var ret = new Array(maskLen);

      for (var maskPos = 0; maskPos < maskLen; ++maskPos) {
        var _m = _mask.charAt(maskPos);

        switch (_m) {
          case '0':
            --maskBeforeDecimal;

            if (maskBeforeDecimal < numBeforeDecimal && inPos < inLen) {
              ret[outPos] = bytes[inPos];
              ++inPos;
              foundDigit = true;
            } else {
              ret[outPos] = '0';
              foundZero = true;
            }

            ++outPos;
            break;

          case '#':
            --maskBeforeDecimal;

            if (maskBeforeDecimal < numBeforeDecimal && inPos < inLen) {
              ret[outPos] = bytes[inPos];
              ++inPos;
              foundDigit = true;
            } else {
              ret[outPos] = foundDecimal && forceTrailingZeros && NumberMask._getSign(num) != 0 ? '0' : fillByte;
              if (!foundDecimal) floatPos = maskPos;
            }

            ++outPos;
            break;

          case ',':
            if (foundZero || inPos > 0) ret[outPos] = groupingSeparator;else {
              ret[outPos] = fillByte;
              if (!foundDecimal) floatPos = maskPos;
            }
            ++outPos;
            break;

          case '-':
            if (!foundDigit && floatByte == ' ') {
              if (isNegative) floatByte = '-';
              ret[outPos] = fillByte;
              floatPos = foundDecimal ? -1 : maskPos;
            } else ret[outPos] = isNegative ? '-' : fillByte;

            ++outPos;
            break;

          case '+':
            if (!foundDigit && floatByte == ' ') {
              floatByte = isNegative ? '-' : '+';
              ret[outPos] = fillByte;
              floatPos = foundDecimal ? -1 : maskPos;
            } else ret[outPos] = isNegative ? '-' : '+';

            ++outPos;
            break;

          case '$':
            if (!foundDigit && floatByte == ' ') {
              floatByte = '$';
              ret[outPos] = fillByte;
              floatPos = foundDecimal ? -1 : maskPos;
            } else {
              ret[outPos] = '$';
            }

            ++outPos;
            break;
          // case '&':
          //   currency = true
          //   if (!foundDigit && floatByte == ' ') {
          //     floatByte = '&'
          //     ret[outPos] = fillByte
          //     floatPos = foundDecimal ? -1 : maskPos
          //   } else {
          //     ret[outPos] = '&'
          //   }
          //   ++outPos
          //   break
          // case '@':
          //   currency = true
          //   if (!foundDigit && floatByte == ' ') {
          //     floatByte = '@'
          //     ret[outPos] = fillByte
          //     floatPos = foundDecimal ? -1 : maskPos
          //   } else {
          //     ret[outPos] = '@'
          //   }
          //   ++outPos
          //   break

          case '(':
            if (!foundDigit && floatByte == ' ') {
              if (isNegative) floatByte = '(';
              ret[outPos] = fillByte;
              floatPos = foundDecimal ? -1 : maskPos;
            } else {
              if (isNegative) {
                ret[outPos] = '(';
              } else {
                ret[outPos] = foundDecimal ? ' ' : fillByte;
              }
            }

            ++outPos;
            break;

          case ')':
            if (isNegative) {
              ret[outPos] = ')';
            } else {
              ret[outPos] = foundDecimal ? ' ' : fillByte;
            }

            ++outPos;
            break;

          case 'C':
            if (maskPos < maskLen - 1 && _mask.charAt(maskPos + 1) == 'R') {
              if (isNegative) {
                ret[outPos] = 'C';
                ret[outPos + 1] = 'R';
              } else {
                ret[outPos] = ' ';
                ret[outPos + 1] = ' ';
              }

              outPos += 2;
              ++maskPos;
            } else {
              ret[outPos] = 'C';
              ++outPos;
            }

            break;

          case 'D':
            if (maskPos < maskLen - 1 && _mask.charAt(maskPos + 1) == 'R') {
              if (isNegative) {
                ret[outPos] = 'C';
                ret[outPos + 1] = 'R';
              } else {
                ret[outPos] = 'D';
                ret[outPos + 1] = 'R';
              }

              outPos += 2;
              ++maskPos;
            } else {
              ret[outPos] = 'D';
              ++outPos;
            }

            break;

          case '*':
            ret[outPos] = '*';
            ++outPos;
            break;

          case '.':
            ret[outPos] = emitDecimal ? decimalSeparator : fillByte;
            fillByte = ' ';
            foundDecimal = true;
            ++inPos;
            ++outPos;
            break;

          case 'B':
            ret[outPos] = ' ';
            ++outPos;
            break;

          default:
            ret[outPos] = _m;
            ++outPos;
            break;
        }
      }

      if (floatByte != ' ') {
        if (floatPos < 0) floatPos = outPos;

        while (floatPos >= maskLen) {
          --floatPos;
        }

        if (ret[floatPos] == fillInit) ret[floatPos] = floatByte;
      }

      return ret.join('');
    }
  }, {
    key: "_shift",
    value: function _shift(number, precision, reverseShift) {
      if (reverseShift) precision = -precision;
      var numArray = ('' + number).split('e');
      return +(numArray[0] + 'e' + (numArray[1] ? +numArray[1] + precision : precision));
    }
  }, {
    key: "_round",
    value: function _round(number, precision) {
      return NumberMask._shift(Math.round(NumberMask._shift(number, precision, false)), precision, true);
    }
  }, {
    key: "_toCharArray",
    value: function _toCharArray(number) {
      var signum = NumberMask._getSign(number);

      var chars = [];

      if (signum !== 0) {
        var string = signum < 0 ? "".concat(-1 * number.toString()) : number.toString();
        if (string.length > 1 && string.charAt(0) == '0') string = string.substring(1); // The string contains only [0-9] and '.'

        chars = string.split('');
      }

      return chars;
    }
    /**
     * Returns the sign of a number
     *
     * @param {Number} x number
     * @returns {Number} A number representing the sign of the given argument.
     *                   If the argument is a positive number, negative number, positive zero
     *                   or negative zero, the function will return 1, -1, 0 or -0 respectively.
     *                   Otherwise, NaN is returned.
     */

  }, {
    key: "_getSign",
    value: function _getSign(x) {
      return (x > 0) - (x < 0) || +x;
    }
  }]);

  return NumberMask;
}();

/* harmony default export */ __webpack_exports__["a"] = (NumberMask);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* flatpickr v4.6.3, @license MIT */
(function (global, factory) {
  ( false ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (global = global || self, global.flatpickr = factory());
})(this, function () {
  'use strict';
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  };

  var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
  var defaults = {
    _disable: [],
    _enable: [],
    allowInput: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enable: [],
    enableSeconds: false,
    enableTime: false,
    errorHandler: function errorHandler(err) {
      return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function getWeek(givenDate) {
      var date = new Date(givenDate.getTime());
      date.setHours(0, 0, 0, 0); // Thursday in current week decides the year.

      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7); // January 4 is always in week 1.

      var week1 = new Date(date.getFullYear(), 0, 4); // Adjust to Thursday in week 1 and count number of weeks from date to week1.

      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    "static": false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false
  };
  var english = {
    weekdays: {
      shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    months: {
      shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function ordinal(nth) {
      var s = nth % 100;
      if (s > 3 && s < 21) return "th";

      switch (s % 10) {
        case 1:
          return "st";

        case 2:
          return "nd";

        case 3:
          return "rd";

        default:
          return "th";
      }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false
  };

  var pad = function pad(number) {
    return ("0" + number).slice(-2);
  };

  var _int = function _int(bool) {
    return bool === true ? 1 : 0;
  };
  /* istanbul ignore next */


  function debounce(func, wait, immediate) {
    if (immediate === void 0) {
      immediate = false;
    }

    var timeout;
    return function () {
      var context = this,
          args = arguments;
      timeout !== null && clearTimeout(timeout);
      timeout = window.setTimeout(function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }

  var arrayify = function arrayify(obj) {
    return obj instanceof Array ? obj : [obj];
  };

  function toggleClass(elem, className, bool) {
    if (bool === true) return elem.classList.add(className);
    elem.classList.remove(className);
  }

  function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined) e.textContent = content;
    return e;
  }

  function clearNode(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function findParent(node, condition) {
    if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
    return undefined; // nothing found
  }

  function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"),
        numInput = createElement("input", "numInput " + inputClassName),
        arrowUp = createElement("span", "arrowUp"),
        arrowDown = createElement("span", "arrowDown");

    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
      numInput.type = "number";
    } else {
      numInput.type = "text";
      numInput.pattern = "\\d*";
    }

    if (opts !== undefined) for (var key in opts) {
      numInput.setAttribute(key, opts[key]);
    }
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
  }

  function getEventTarget(event) {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }

    return event.target;
  }

  var doNothing = function doNothing() {
    return undefined;
  };

  var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
    return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
  };

  var revFormat = {
    D: doNothing,
    F: function F(dateObj, monthName, locale) {
      dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function G(dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    H: function H(dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    J: function J(dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    K: function K(dateObj, amPM, locale) {
      dateObj.setHours(dateObj.getHours() % 12 + 12 * _int(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function M(dateObj, shortMonth, locale) {
      dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function S(dateObj, seconds) {
      dateObj.setSeconds(parseFloat(seconds));
    },
    U: function U(_, unixSeconds) {
      return new Date(parseFloat(unixSeconds) * 1000);
    },
    W: function W(dateObj, weekNum, locale) {
      var weekNumber = parseInt(weekNum);
      var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
      date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
      return date;
    },
    Y: function Y(dateObj, year) {
      dateObj.setFullYear(parseFloat(year));
    },
    Z: function Z(_, ISODate) {
      return new Date(ISODate);
    },
    d: function d(dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    h: function h(dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    i: function i(dateObj, minutes) {
      dateObj.setMinutes(parseFloat(minutes));
    },
    j: function j(dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: function m(dateObj, month) {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function n(dateObj, month) {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function s(dateObj, seconds) {
      dateObj.setSeconds(parseFloat(seconds));
    },
    u: function u(_, unixMillSeconds) {
      return new Date(parseFloat(unixMillSeconds));
    },
    w: doNothing,
    y: function y(dateObj, year) {
      dateObj.setFullYear(2000 + parseFloat(year));
    }
  };
  var tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
  };
  var formats = {
    // get the date in UTC
    Z: function Z(date) {
      return date.toISOString();
    },
    // weekday name, short, e.g. Thu
    D: function D(date, locale, options) {
      return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    // full month name e.g. January
    F: function F(date, locale, options) {
      return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    // padded hour 1-12
    G: function G(date, locale, options) {
      return pad(formats.h(date, locale, options));
    },
    // hours with leading zero e.g. 03
    H: function H(date) {
      return pad(date.getHours());
    },
    // day (1-30) with ordinal suffix e.g. 1st, 2nd
    J: function J(date, locale) {
      return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
    },
    // AM/PM
    K: function K(date, locale) {
      return locale.amPM[_int(date.getHours() > 11)];
    },
    // shorthand month e.g. Jan, Sep, Oct, etc
    M: function M(date, locale) {
      return monthToStr(date.getMonth(), true, locale);
    },
    // seconds 00-59
    S: function S(date) {
      return pad(date.getSeconds());
    },
    // unix timestamp
    U: function U(date) {
      return date.getTime() / 1000;
    },
    W: function W(date, _, options) {
      return options.getWeek(date);
    },
    // full year e.g. 2016
    Y: function Y(date) {
      return date.getFullYear();
    },
    // day in month, padded (01-30)
    d: function d(date) {
      return pad(date.getDate());
    },
    // hour from 1-12 (am/pm)
    h: function h(date) {
      return date.getHours() % 12 ? date.getHours() % 12 : 12;
    },
    // minutes, padded with leading zero e.g. 09
    i: function i(date) {
      return pad(date.getMinutes());
    },
    // day in month (1-30)
    j: function j(date) {
      return date.getDate();
    },
    // weekday name, full, e.g. Thursday
    l: function l(date, locale) {
      return locale.weekdays.longhand[date.getDay()];
    },
    // padded month number (01-12)
    m: function m(date) {
      return pad(date.getMonth() + 1);
    },
    // the month number (1-12)
    n: function n(date) {
      return date.getMonth() + 1;
    },
    // seconds 0-59
    s: function s(date) {
      return date.getSeconds();
    },
    // Unix Milliseconds
    u: function u(date) {
      return date.getTime();
    },
    // number of the day of the week
    w: function w(date) {
      return date.getDay();
    },
    // last two digits of year e.g. 16 for 2016
    y: function y(date) {
      return String(date.getFullYear()).substring(2);
    }
  };

  var createDateFormatter = function createDateFormatter(_a) {
    var _b = _a.config,
        config = _b === void 0 ? defaults : _b,
        _c = _a.l10n,
        l10n = _c === void 0 ? english : _c;
    return function (dateObj, frmt, overrideLocale) {
      var locale = overrideLocale || l10n;

      if (config.formatDate !== undefined) {
        return config.formatDate(dateObj, frmt, locale);
      }

      return frmt.split("").map(function (c, i, arr) {
        return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
      }).join("");
    };
  };

  var createDateParser = function createDateParser(_a) {
    var _b = _a.config,
        config = _b === void 0 ? defaults : _b,
        _c = _a.l10n,
        l10n = _c === void 0 ? english : _c;
    return function (date, givenFormat, timeless, customLocale) {
      if (date !== 0 && !date) return undefined;
      var locale = customLocale || l10n;
      var parsedDate;
      var dateOrig = date;
      if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined // timestamp
      ) // create a copy
        parsedDate = new Date(date);else if (typeof date === "string") {
        // date string
        var format = givenFormat || (config || defaults).dateFormat;
        var datestr = String(date).trim();

        if (datestr === "today") {
          parsedDate = new Date();
          timeless = true;
        } else if (/Z$/.test(datestr) || /GMT$/.test(datestr) // datestrings w/ timezone
        ) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
          parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
          var matched = void 0,
              ops = [];

          for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
            var token_1 = format[i];
            var isBackSlash = token_1 === "\\";
            var escaped = format[i - 1] === "\\" || isBackSlash;

            if (tokenRegex[token_1] && !escaped) {
              regexStr += tokenRegex[token_1];
              var match = new RegExp(regexStr).exec(date);

              if (match && (matched = true)) {
                ops[token_1 !== "Y" ? "push" : "unshift"]({
                  fn: revFormat[token_1],
                  val: match[++matchIndex]
                });
              }
            } else if (!isBackSlash) regexStr += "."; // don't really care


            ops.forEach(function (_a) {
              var fn = _a.fn,
                  val = _a.val;
              return parsedDate = fn(parsedDate, val, locale) || parsedDate;
            });
          }

          parsedDate = matched ? parsedDate : undefined;
        }
      }
      /* istanbul ignore next */

      if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
        config.errorHandler(new Error("Invalid date provided: " + dateOrig));
        return undefined;
      }

      if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
      return parsedDate;
    };
  };
  /**
   * Compute the difference in dates, measured in ms
   */


  function compareDates(date1, date2, timeless) {
    if (timeless === void 0) {
      timeless = true;
    }

    if (timeless !== false) {
      return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
    }

    return date1.getTime() - date2.getTime();
  }

  var isBetween = function isBetween(ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
  };

  var duration = {
    DAY: 86400000
  };

  if (typeof Object.assign !== "function") {
    Object.assign = function (target) {
      var args = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }

      if (!target) {
        throw TypeError("Cannot convert undefined or null to object");
      }

      var _loop_1 = function _loop_1(source) {
        if (source) {
          Object.keys(source).forEach(function (key) {
            return target[key] = source[key];
          });
        }
      };

      for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var source = args_1[_a];

        _loop_1(source);
      }

      return target;
    };
  }

  var DEBOUNCED_CHANGE_MS = 300;

  function FlatpickrInstance(element, instanceConfig) {
    var self = {
      config: _assign({}, defaults, flatpickr.defaultConfig),
      l10n: english
    };
    self.parseDate = createDateParser({
      config: self.config,
      l10n: self.l10n
    });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = createElement;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;

    function setupHelperFunctions() {
      self.utils = {
        getDaysInMonth: function getDaysInMonth(month, yr) {
          if (month === void 0) {
            month = self.currentMonth;
          }

          if (yr === void 0) {
            yr = self.currentYear;
          }

          if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
          return self.l10n.daysInMonth[month];
        }
      };
    }

    function init() {
      self.element = self.input = element;
      self.isOpen = false;
      parseConfig();
      setupLocale();
      setupInputs();
      setupDates();
      setupHelperFunctions();
      if (!self.isMobile) build();
      bindEvents();

      if (self.selectedDates.length || self.config.noCalendar) {
        if (self.config.enableTime) {
          setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : undefined);
        }

        updateValue(false);
      }

      setCalendarWidth();
      self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      /* TODO: investigate this further
                 Currently, there is weird positioning behavior in safari causing pages
        to scroll up. https://github.com/chmln/flatpickr/issues/563
                 However, most browsers are not Safari and positioning is expensive when used
        in scale. https://github.com/chmln/flatpickr/issues/1096
      */

      if (!self.isMobile && isSafari) {
        positionCalendar();
      }

      triggerEvent("onReady");
    }

    function bindToInstance(fn) {
      return fn.bind(self);
    }

    function setCalendarWidth() {
      var config = self.config;
      if (config.weekNumbers === false && config.showMonths === 1) return;else if (config.noCalendar !== true) {
        window.requestAnimationFrame(function () {
          if (self.calendarContainer !== undefined) {
            self.calendarContainer.style.visibility = "hidden";
            self.calendarContainer.style.display = "block";
          }

          if (self.daysContainer !== undefined) {
            var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
            self.daysContainer.style.width = daysWidth + "px";
            self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
            self.calendarContainer.style.removeProperty("visibility");
            self.calendarContainer.style.removeProperty("display");
          }
        });
      }
    }
    /**
     * The handler for all events targeting the time inputs
     */


    function updateTime(e) {
      if (self.selectedDates.length === 0) {
        setDefaultTime();
      }

      if (e !== undefined && e.type !== "blur") {
        timeWrapper(e);
      }

      var prevValue = self._input.value;
      setHoursFromInputs();
      updateValue();

      if (self._input.value !== prevValue) {
        self._debouncedChange();
      }
    }

    function ampm2military(hour, amPM) {
      return hour % 12 + 12 * _int(amPM === self.l10n.amPM[1]);
    }

    function military2ampm(hour) {
      switch (hour % 24) {
        case 0:
        case 12:
          return 12;

        default:
          return hour % 12;
      }
    }
    /**
     * Syncs the selected date object time with user's time input
     */


    function setHoursFromInputs() {
      if (self.hourElement === undefined || self.minuteElement === undefined) return;
      var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
          minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
          seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

      if (self.amPM !== undefined) {
        hours = ampm2military(hours, self.amPM.textContent);
      }

      var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
      var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
      }

      if (limitMinHours) {
        var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours()) minutes = Math.max(minutes, minTime.getMinutes());
        if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
      }

      setHours(hours, minutes, seconds);
    }
    /**
     * Syncs time input values with a date
     */


    function setHoursFromDate(dateObj) {
      var date = dateObj || self.latestSelectedDateObj;
      if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }

    function setDefaultHours() {
      var hours = self.config.defaultHour;
      var minutes = self.config.defaultMinute;
      var seconds = self.config.defaultSeconds;

      if (self.config.minDate !== undefined) {
        var minHr = self.config.minDate.getHours();
        var minMinutes = self.config.minDate.getMinutes();
        hours = Math.max(hours, minHr);
        if (hours === minHr) minutes = Math.max(minMinutes, minutes);
        if (hours === minHr && minutes === minMinutes) seconds = self.config.minDate.getSeconds();
      }

      if (self.config.maxDate !== undefined) {
        var maxHr = self.config.maxDate.getHours();
        var maxMinutes = self.config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes) seconds = self.config.maxDate.getSeconds();
      }

      setHours(hours, minutes, seconds);
    }
    /**
     * Sets the hours, minutes, and optionally seconds
     * of the latest selected date object and the
     * corresponding time inputs
     * @param {Number} hours the hour. whether its military
     *                 or am-pm gets inferred from config
     * @param {Number} minutes the minutes
     * @param {Number} seconds the seconds (optional)
     */


    function setHours(hours, minutes, seconds) {
      if (self.latestSelectedDateObj !== undefined) {
        self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
      }

      if (!self.hourElement || !self.minuteElement || self.isMobile) return;
      self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * _int(hours % 12 === 0) : hours);
      self.minuteElement.value = pad(minutes);
      if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[_int(hours >= 12)];
      if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
    }
    /**
     * Handles the year input and incrementing events
     * @param {Event} event the keyup or increment event
     */


    function onYearInput(event) {
      var year = parseInt(event.target.value) + (event.delta || 0);

      if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
        changeYear(year);
      }
    }
    /**
     * Essentially addEventListener + tracking
     * @param {Element} element the element to addEventListener to
     * @param {String} event the event name
     * @param {Function} handler the event handler
     */


    function bind(element, event, handler, options) {
      if (event instanceof Array) return event.forEach(function (ev) {
        return bind(element, ev, handler, options);
      });
      if (element instanceof Array) return element.forEach(function (el) {
        return bind(el, event, handler, options);
      });
      element.addEventListener(event, handler, options);

      self._handlers.push({
        element: element,
        event: event,
        handler: handler,
        options: options
      });
    }
    /**
     * A mousedown handler which mimics click.
     * Minimizes latency, since we don't need to wait for mouseup in most cases.
     * Also, avoids handling right clicks.
     *
     * @param {Function} handler the event handler
     */


    function onClick(handler) {
      return function (evt) {
        evt.which === 1 && handler(evt);
      };
    }

    function triggerChange() {
      triggerEvent("onChange");
    }
    /**
     * Adds all the necessary event listeners
     */


    function bindEvents() {
      if (self.config.wrap) {
        ["open", "close", "toggle", "clear"].forEach(function (evt) {
          Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
            return bind(el, "click", self[evt]);
          });
        });
      }

      if (self.isMobile) {
        setupMobile();
        return;
      }

      var debouncedResize = debounce(onResize, 50);
      self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
      if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
        if (self.config.mode === "range") onMouseOver(e.target);
      });
      bind(window.document.body, "keydown", onKeyDown);
      if (!self.config.inline && !self.config["static"]) bind(window, "resize", debouncedResize);
      if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", onClick(documentClick));
      bind(window.document, "focus", documentClick, {
        capture: true
      });

      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "mousedown", onClick(self.open));
      }

      if (self.daysContainer !== undefined) {
        bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
        bind(self.monthNav, ["keyup", "increment"], onYearInput);
        bind(self.daysContainer, "mousedown", onClick(selectDate));
      }

      if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
        var selText = function selText(e) {
          return e.target.select();
        };

        bind(self.timeContainer, ["increment"], updateTime);
        bind(self.timeContainer, "blur", updateTime, {
          capture: true
        });
        bind(self.timeContainer, "mousedown", onClick(timeIncrement));
        bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
        if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
          return self.secondElement && self.secondElement.select();
        });

        if (self.amPM !== undefined) {
          bind(self.amPM, "mousedown", onClick(function (e) {
            updateTime(e);
            triggerChange();
          }));
        }
      }
    }
    /**
     * Set the calendar view to a particular date.
     * @param {Date} jumpDate the date to set the view to
     * @param {boolean} triggerChange if change events should be triggered
     */


    function jumpToDate(jumpDate, triggerChange) {
      var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
      var oldYear = self.currentYear;
      var oldMonth = self.currentMonth;

      try {
        if (jumpTo !== undefined) {
          self.currentYear = jumpTo.getFullYear();
          self.currentMonth = jumpTo.getMonth();
        }
      } catch (e) {
        /* istanbul ignore next */
        e.message = "Invalid date supplied: " + jumpTo;
        self.config.errorHandler(e);
      }

      if (triggerChange && self.currentYear !== oldYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }

      if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
        triggerEvent("onMonthChange");
      }

      self.redraw();
    }
    /**
     * The up/down arrow handler for time inputs
     * @param {Event} e the click event
     */


    function timeIncrement(e) {
      if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
    }
    /**
     * Increments/decrements the value of input associ-
     * ated with the up/down arrow by dispatching an
     * "increment" event on the input.
     *
     * @param {Event} e the click event
     * @param {Number} delta the diff (usually 1 or -1)
     * @param {Element} inputElem the input element
     */


    function incrementNumInput(e, delta, inputElem) {
      var target = e && e.target;
      var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
      var event = createEvent("increment");
      event.delta = delta;
      input && input.dispatchEvent(event);
    }

    function build() {
      var fragment = window.document.createDocumentFragment();
      self.calendarContainer = createElement("div", "flatpickr-calendar");
      self.calendarContainer.tabIndex = -1;

      if (!self.config.noCalendar) {
        fragment.appendChild(buildMonthNav());
        self.innerContainer = createElement("div", "flatpickr-innerContainer");

        if (self.config.weekNumbers) {
          var _a = buildWeeks(),
              weekWrapper = _a.weekWrapper,
              weekNumbers = _a.weekNumbers;

          self.innerContainer.appendChild(weekWrapper);
          self.weekNumbers = weekNumbers;
          self.weekWrapper = weekWrapper;
        }

        self.rContainer = createElement("div", "flatpickr-rContainer");
        self.rContainer.appendChild(buildWeekdays());

        if (!self.daysContainer) {
          self.daysContainer = createElement("div", "flatpickr-days");
          self.daysContainer.tabIndex = -1;
        }

        buildDays();
        self.rContainer.appendChild(self.daysContainer);
        self.innerContainer.appendChild(self.rContainer);
        fragment.appendChild(self.innerContainer);
      }

      if (self.config.enableTime) {
        fragment.appendChild(buildTime());
      }

      toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
      toggleClass(self.calendarContainer, "animate", self.config.animate === true);
      toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
      self.calendarContainer.appendChild(fragment);
      var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

      if (self.config.inline || self.config["static"]) {
        self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

        if (self.config.inline) {
          if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
        }

        if (self.config["static"]) {
          var wrapper = createElement("div", "flatpickr-wrapper");
          if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
          wrapper.appendChild(self.element);
          if (self.altInput) wrapper.appendChild(self.altInput);
          wrapper.appendChild(self.calendarContainer);
        }
      }

      if (!self.config["static"] && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
    }

    function createDay(className, date, dayNumber, i) {
      var dateIsEnabled = isEnabled(date, true),
          dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
      dayElement.dateObj = date;
      dayElement.$i = i;
      dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

      if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
        self.todayDateElem = dayElement;
        dayElement.classList.add("today");
        dayElement.setAttribute("aria-current", "date");
      }

      if (dateIsEnabled) {
        dayElement.tabIndex = -1;

        if (isDateSelected(date)) {
          dayElement.classList.add("selected");
          self.selectedDateElem = dayElement;

          if (self.config.mode === "range") {
            toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
            toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
            if (className === "nextMonthDay") dayElement.classList.add("inRange");
          }
        }
      } else {
        dayElement.classList.add("flatpickr-disabled");
      }

      if (self.config.mode === "range") {
        if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
      }

      if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
        self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
      }

      triggerEvent("onDayCreate", dayElement);
      return dayElement;
    }

    function focusOnDayElem(targetNode) {
      targetNode.focus();
      if (self.config.mode === "range") onMouseOver(targetNode);
    }

    function getFirstAvailableDay(delta) {
      var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
      var endMonth = delta > 0 ? self.config.showMonths : -1;

      for (var m = startMonth; m != endMonth; m += delta) {
        var month = self.daysContainer.children[m];
        var startIndex = delta > 0 ? 0 : month.children.length - 1;
        var endIndex = delta > 0 ? month.children.length : -1;

        for (var i = startIndex; i != endIndex; i += delta) {
          var c = month.children[i];
          if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
        }
      }

      return undefined;
    }

    function getNextAvailableDay(current, delta) {
      var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
      var endMonth = delta > 0 ? self.config.showMonths : -1;
      var loopDelta = delta > 0 ? 1 : -1;

      for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
        var month = self.daysContainer.children[m];
        var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
        var numMonthDays = month.children.length;

        for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
          var c = month.children[i];
          if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
        }
      }

      self.changeMonth(loopDelta);
      focusOnDay(getFirstAvailableDay(loopDelta), 0);
      return undefined;
    }

    function focusOnDay(current, offset) {
      var dayFocused = isInView(document.activeElement || document.body);
      var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
      if (startElem === undefined) return self._input.focus();
      if (!dayFocused) return focusOnDayElem(startElem);
      getNextAvailableDay(startElem, offset);
    }

    function buildMonthDays(year, month) {
      var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
      var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
      var daysInMonth = self.utils.getDaysInMonth(month),
          days = window.document.createDocumentFragment(),
          isMultiMonth = self.config.showMonths > 1,
          prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
          nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
      var dayNumber = prevMonthDays + 1 - firstOfMonth,
          dayIndex = 0; // prepend days from the ending of previous month

      for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
        days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
      } // Start at 1 since there is no 0th day


      for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
        days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
      } // append days from the next month


      for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
        days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
      } //updateNavigationCurrentMonth();


      var dayContainer = createElement("div", "dayContainer");
      dayContainer.appendChild(days);
      return dayContainer;
    }

    function buildDays() {
      if (self.daysContainer === undefined) {
        return;
      }

      clearNode(self.daysContainer); // TODO: week numbers for each month

      if (self.weekNumbers) clearNode(self.weekNumbers);
      var frag = document.createDocumentFragment();

      for (var i = 0; i < self.config.showMonths; i++) {
        var d = new Date(self.currentYear, self.currentMonth, 1);
        d.setMonth(self.currentMonth + i);
        frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
      }

      self.daysContainer.appendChild(frag);
      self.days = self.daysContainer.firstChild;

      if (self.config.mode === "range" && self.selectedDates.length === 1) {
        onMouseOver();
      }
    }

    function buildMonthSwitch() {
      if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;

      var shouldBuildMonth = function shouldBuildMonth(month) {
        if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
          return false;
        }

        return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
      };

      self.monthsDropdownContainer.tabIndex = -1;
      self.monthsDropdownContainer.innerHTML = "";

      for (var i = 0; i < 12; i++) {
        if (!shouldBuildMonth(i)) continue;
        var month = createElement("option", "flatpickr-monthDropdown-month");
        month.value = new Date(self.currentYear, i).getMonth().toString();
        month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
        month.tabIndex = -1;

        if (self.currentMonth === i) {
          month.selected = true;
        }

        self.monthsDropdownContainer.appendChild(month);
      }
    }

    function buildMonth() {
      var container = createElement("div", "flatpickr-month");
      var monthNavFragment = window.document.createDocumentFragment();
      var monthElement;

      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        monthElement = createElement("span", "cur-month");
      } else {
        self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
        bind(self.monthsDropdownContainer, "change", function (e) {
          var target = e.target;
          var selectedMonth = parseInt(target.value, 10);
          self.changeMonth(selectedMonth - self.currentMonth);
          triggerEvent("onMonthChange");
        });
        buildMonthSwitch();
        monthElement = self.monthsDropdownContainer;
      }

      var yearInput = createNumberInput("cur-year", {
        tabindex: "-1"
      });
      var yearElement = yearInput.getElementsByTagName("input")[0];
      yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);

      if (self.config.minDate) {
        yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
      }

      if (self.config.maxDate) {
        yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
        yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
      }

      var currentMonth = createElement("div", "flatpickr-current-month");
      currentMonth.appendChild(monthElement);
      currentMonth.appendChild(yearInput);
      monthNavFragment.appendChild(currentMonth);
      container.appendChild(monthNavFragment);
      return {
        container: container,
        yearElement: yearElement,
        monthElement: monthElement
      };
    }

    function buildMonths() {
      clearNode(self.monthNav);
      self.monthNav.appendChild(self.prevMonthNav);

      if (self.config.showMonths) {
        self.yearElements = [];
        self.monthElements = [];
      }

      for (var m = self.config.showMonths; m--;) {
        var month = buildMonth();
        self.yearElements.push(month.yearElement);
        self.monthElements.push(month.monthElement);
        self.monthNav.appendChild(month.container);
      }

      self.monthNav.appendChild(self.nextMonthNav);
    }

    function buildMonthNav() {
      self.monthNav = createElement("div", "flatpickr-months");
      self.yearElements = [];
      self.monthElements = [];
      self.prevMonthNav = createElement("span", "flatpickr-prev-month");
      self.prevMonthNav.innerHTML = self.config.prevArrow;
      self.nextMonthNav = createElement("span", "flatpickr-next-month");
      self.nextMonthNav.innerHTML = self.config.nextArrow;
      buildMonths();
      Object.defineProperty(self, "_hidePrevMonthArrow", {
        get: function get() {
          return self.__hidePrevMonthArrow;
        },
        set: function set(bool) {
          if (self.__hidePrevMonthArrow !== bool) {
            toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
            self.__hidePrevMonthArrow = bool;
          }
        }
      });
      Object.defineProperty(self, "_hideNextMonthArrow", {
        get: function get() {
          return self.__hideNextMonthArrow;
        },
        set: function set(bool) {
          if (self.__hideNextMonthArrow !== bool) {
            toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
            self.__hideNextMonthArrow = bool;
          }
        }
      });
      self.currentYearElement = self.yearElements[0];
      updateNavigationCurrentMonth();
      return self.monthNav;
    }

    function buildTime() {
      self.calendarContainer.classList.add("hasTime");
      if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
      self.timeContainer = createElement("div", "flatpickr-time");
      self.timeContainer.tabIndex = -1;
      var separator = createElement("span", "flatpickr-time-separator", ":");
      var hourInput = createNumberInput("flatpickr-hour", {
        "aria-label": self.l10n.hourAriaLabel
      });
      self.hourElement = hourInput.getElementsByTagName("input")[0];
      var minuteInput = createNumberInput("flatpickr-minute", {
        "aria-label": self.l10n.minuteAriaLabel
      });
      self.minuteElement = minuteInput.getElementsByTagName("input")[0];
      self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
      self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? self.config.defaultHour : military2ampm(self.config.defaultHour));
      self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
      self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
      self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
      self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
      self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
      self.minuteElement.setAttribute("min", "0");
      self.minuteElement.setAttribute("max", "59");
      self.timeContainer.appendChild(hourInput);
      self.timeContainer.appendChild(separator);
      self.timeContainer.appendChild(minuteInput);
      if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

      if (self.config.enableSeconds) {
        self.timeContainer.classList.add("hasSeconds");
        var secondInput = createNumberInput("flatpickr-second");
        self.secondElement = secondInput.getElementsByTagName("input")[0];
        self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);
        self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
        self.secondElement.setAttribute("min", "0");
        self.secondElement.setAttribute("max", "59");
        self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
        self.timeContainer.appendChild(secondInput);
      }

      if (!self.config.time_24hr) {
        // add self.amPM if appropriate
        self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[_int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
        self.amPM.title = self.l10n.toggleTitle;
        self.amPM.tabIndex = -1;
        self.timeContainer.appendChild(self.amPM);
      }

      return self.timeContainer;
    }

    function buildWeekdays() {
      if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");else clearNode(self.weekdayContainer);

      for (var i = self.config.showMonths; i--;) {
        var container = createElement("div", "flatpickr-weekdaycontainer");
        self.weekdayContainer.appendChild(container);
      }

      updateWeekdays();
      return self.weekdayContainer;
    }

    function updateWeekdays() {
      if (!self.weekdayContainer) {
        return;
      }

      var firstDayOfWeek = self.l10n.firstDayOfWeek;
      var weekdays = self.l10n.weekdays.shorthand.slice();

      if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
        weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
      }

      for (var i = self.config.showMonths; i--;) {
        self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
      }
    }
    /* istanbul ignore next */


    function buildWeeks() {
      self.calendarContainer.classList.add("hasWeeks");
      var weekWrapper = createElement("div", "flatpickr-weekwrapper");
      weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
      var weekNumbers = createElement("div", "flatpickr-weeks");
      weekWrapper.appendChild(weekNumbers);
      return {
        weekWrapper: weekWrapper,
        weekNumbers: weekNumbers
      };
    }

    function changeMonth(value, isOffset) {
      if (isOffset === void 0) {
        isOffset = true;
      }

      var delta = isOffset ? value : value - self.currentMonth;
      if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
      self.currentMonth += delta;

      if (self.currentMonth < 0 || self.currentMonth > 11) {
        self.currentYear += self.currentMonth > 11 ? 1 : -1;
        self.currentMonth = (self.currentMonth + 12) % 12;
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }

      buildDays();
      triggerEvent("onMonthChange");
      updateNavigationCurrentMonth();
    }

    function clear(triggerChangeEvent, toInitial) {
      if (triggerChangeEvent === void 0) {
        triggerChangeEvent = true;
      }

      if (toInitial === void 0) {
        toInitial = true;
      }

      self.input.value = "";
      if (self.altInput !== undefined) self.altInput.value = "";
      if (self.mobileInput !== undefined) self.mobileInput.value = "";
      self.selectedDates = [];
      self.latestSelectedDateObj = undefined;

      if (toInitial === true) {
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
      }

      self.showTimeInput = false;

      if (self.config.enableTime === true) {
        setDefaultHours();
      }

      self.redraw();
      if (triggerChangeEvent) // triggerChangeEvent is true (default) or an Event
        triggerEvent("onChange");
    }

    function close() {
      self.isOpen = false;

      if (!self.isMobile) {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.classList.remove("open");
        }

        if (self._input !== undefined) {
          self._input.classList.remove("active");
        }
      }

      triggerEvent("onClose");
    }

    function destroy() {
      if (self.config !== undefined) triggerEvent("onDestroy");

      for (var i = self._handlers.length; i--;) {
        var h = self._handlers[i];
        h.element.removeEventListener(h.event, h.handler, h.options);
      }

      self._handlers = [];

      if (self.mobileInput) {
        if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
        self.mobileInput = undefined;
      } else if (self.calendarContainer && self.calendarContainer.parentNode) {
        if (self.config["static"] && self.calendarContainer.parentNode) {
          var wrapper = self.calendarContainer.parentNode;
          wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

          if (wrapper.parentNode) {
            while (wrapper.firstChild) {
              wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
            }

            wrapper.parentNode.removeChild(wrapper);
          }
        } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
      }

      if (self.altInput) {
        self.input.type = "text";
        if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
        delete self.altInput;
      }

      if (self.input) {
        self.input.type = self.input._type;
        self.input.classList.remove("flatpickr-input");
        self.input.removeAttribute("readonly");
        self.input.value = "";
      }

      ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
        try {
          delete self[k];
        } catch (_) {}
      });
    }

    function isCalendarElem(elem) {
      if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
      return self.calendarContainer.contains(elem);
    }

    function documentClick(e) {
      if (self.isOpen && !self.config.inline) {
        var eventTarget_1 = getEventTarget(e);
        var isCalendarElement = isCalendarElem(eventTarget_1);
        var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || // web components
        // e.path is not present in all browsers. circumventing typechecks
        e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
        var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
        var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
          return elem.contains(eventTarget_1);
        });

        if (lostFocus && isIgnored) {
          if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
            updateTime();
          }

          self.close();

          if (self.config.mode === "range" && self.selectedDates.length === 1) {
            self.clear(false);
            self.redraw();
          }
        }
      }
    }

    function changeYear(newYear) {
      if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
      var newYearNum = newYear,
          isNewYear = self.currentYear !== newYearNum;
      self.currentYear = newYearNum || self.currentYear;

      if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
        self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
      } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
        self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
      }

      if (isNewYear) {
        self.redraw();
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
    }

    function isEnabled(date, timeless) {
      if (timeless === void 0) {
        timeless = true;
      }

      var dateToCheck = self.parseDate(date, undefined, timeless); // timeless

      if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
      if (self.config.enable.length === 0 && self.config.disable.length === 0) return true;
      if (dateToCheck === undefined) return false;
      var bool = self.config.enable.length > 0,
          array = bool ? self.config.enable : self.config.disable;

      for (var i = 0, d = void 0; i < array.length; i++) {
        d = array[i];
        if (typeof d === "function" && d(dateToCheck) // disabled by function
        ) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) // disabled by date
          return bool;else if (typeof d === "string" && dateToCheck !== undefined) {
          // disabled by date string
          var parsed = self.parseDate(d, undefined, true);
          return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
        } else if ( // disabled by range
        _typeof(d) === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
      }

      return !bool;
    }

    function isInView(elem) {
      if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && self.daysContainer.contains(elem);
      return false;
    }

    function onKeyDown(e) {
      // e.key                      e.keyCode
      // "Backspace"                        8
      // "Tab"                              9
      // "Enter"                           13
      // "Escape"     (IE "Esc")           27
      // "ArrowLeft"  (IE "Left")          37
      // "ArrowUp"    (IE "Up")            38
      // "ArrowRight" (IE "Right")         39
      // "ArrowDown"  (IE "Down")          40
      // "Delete"     (IE "Del")           46
      var isInput = e.target === self._input;
      var allowInput = self.config.allowInput;
      var allowKeydown = self.isOpen && (!allowInput || !isInput);
      var allowInlineKeydown = self.config.inline && isInput && !allowInput;

      if (e.keyCode === 13 && isInput) {
        if (allowInput) {
          self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
          return e.target.blur();
        } else {
          self.open();
        }
      } else if (isCalendarElem(e.target) || allowKeydown || allowInlineKeydown) {
        var isTimeObj = !!self.timeContainer && self.timeContainer.contains(e.target);

        switch (e.keyCode) {
          case 13:
            if (isTimeObj) {
              e.preventDefault();
              updateTime();
              focusAndClose();
            } else selectDate(e);

            break;

          case 27:
            // escape
            e.preventDefault();
            focusAndClose();
            break;

          case 8:
          case 46:
            if (isInput && !self.config.allowInput) {
              e.preventDefault();
              self.clear();
            }

            break;

          case 37:
          case 39:
            if (!isTimeObj && !isInput) {
              e.preventDefault();

              if (self.daysContainer !== undefined && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
                var delta_1 = e.keyCode === 39 ? 1 : -1;
                if (!e.ctrlKey) focusOnDay(undefined, delta_1);else {
                  e.stopPropagation();
                  changeMonth(delta_1);
                  focusOnDay(getFirstAvailableDay(1), 0);
                }
              }
            } else if (self.hourElement) self.hourElement.focus();

            break;

          case 38:
          case 40:
            e.preventDefault();
            var delta = e.keyCode === 40 ? 1 : -1;

            if (self.daysContainer && e.target.$i !== undefined || e.target === self.input || e.target === self.altInput) {
              if (e.ctrlKey) {
                e.stopPropagation();
                changeYear(self.currentYear - delta);
                focusOnDay(getFirstAvailableDay(1), 0);
              } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
            } else if (e.target === self.currentYearElement) {
              changeYear(self.currentYear - delta);
            } else if (self.config.enableTime) {
              if (!isTimeObj && self.hourElement) self.hourElement.focus();
              updateTime(e);

              self._debouncedChange();
            }

            break;

          case 9:
            if (isTimeObj) {
              var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(function (x) {
                return x;
              });
              var i = elems.indexOf(e.target);

              if (i !== -1) {
                var target = elems[i + (e.shiftKey ? -1 : 1)];
                e.preventDefault();

                (target || self._input).focus();
              }
            } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(e.target) && e.shiftKey) {
              e.preventDefault();

              self._input.focus();
            }

            break;

          default:
            break;
        }
      }

      if (self.amPM !== undefined && e.target === self.amPM) {
        switch (e.key) {
          case self.l10n.amPM[0].charAt(0):
          case self.l10n.amPM[0].charAt(0).toLowerCase():
            self.amPM.textContent = self.l10n.amPM[0];
            setHoursFromInputs();
            updateValue();
            break;

          case self.l10n.amPM[1].charAt(0):
          case self.l10n.amPM[1].charAt(0).toLowerCase():
            self.amPM.textContent = self.l10n.amPM[1];
            setHoursFromInputs();
            updateValue();
            break;
        }
      }

      if (isInput || isCalendarElem(e.target)) {
        triggerEvent("onKeyDown", e);
      }
    }

    function onMouseOver(elem) {
      if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled"))) return;
      var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
          initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
          rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
          rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
      var containsDisabled = false;
      var minRange = 0,
          maxRange = 0;

      for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
        if (!isEnabled(new Date(t), true)) {
          containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
          if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
        }
      }

      for (var m = 0; m < self.config.showMonths; m++) {
        var month = self.daysContainer.children[m];

        var _loop_1 = function _loop_1(i, l) {
          var dayElem = month.children[i],
              date = dayElem.dateObj;
          var timestamp = date.getTime();
          var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

          if (outOfRange) {
            dayElem.classList.add("notAllowed");
            ["inRange", "startRange", "endRange"].forEach(function (c) {
              dayElem.classList.remove(c);
            });
            return "continue";
          } else if (containsDisabled && !outOfRange) return "continue";

          ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
            dayElem.classList.remove(c);
          });

          if (elem !== undefined) {
            elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
            if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
            if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
          }
        };

        for (var i = 0, l = month.children.length; i < l; i++) {
          _loop_1(i, l);
        }
      }
    }

    function onResize() {
      if (self.isOpen && !self.config["static"] && !self.config.inline) positionCalendar();
    }

    function setDefaultTime() {
      self.setDate(self.config.minDate !== undefined ? new Date(self.config.minDate.getTime()) : new Date(), true);
      setDefaultHours();
      updateValue();
    }

    function open(e, positionElement) {
      if (positionElement === void 0) {
        positionElement = self._positionElement;
      }

      if (self.isMobile === true) {
        if (e) {
          e.preventDefault();
          e.target && e.target.blur();
        }

        if (self.mobileInput !== undefined) {
          self.mobileInput.focus();
          self.mobileInput.click();
        }

        triggerEvent("onOpen");
        return;
      }

      if (self._input.disabled || self.config.inline) return;
      var wasOpen = self.isOpen;
      self.isOpen = true;

      if (!wasOpen) {
        self.calendarContainer.classList.add("open");

        self._input.classList.add("active");

        triggerEvent("onOpen");
        positionCalendar(positionElement);
      }

      if (self.config.enableTime === true && self.config.noCalendar === true) {
        if (self.selectedDates.length === 0) {
          setDefaultTime();
        }

        if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
          setTimeout(function () {
            return self.hourElement.select();
          }, 50);
        }
      }
    }

    function minMaxDateSetter(type) {
      return function (date) {
        var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
        var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

        if (dateObj !== undefined) {
          self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
        }

        if (self.selectedDates) {
          self.selectedDates = self.selectedDates.filter(function (d) {
            return isEnabled(d);
          });
          if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
          updateValue();
        }

        if (self.daysContainer) {
          redraw();
          if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
          self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
        }
      };
    }

    function parseConfig() {
      var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

      var userConfig = _assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));

      var formats = {};
      self.config.parseDate = userConfig.parseDate;
      self.config.formatDate = userConfig.formatDate;
      Object.defineProperty(self.config, "enable", {
        get: function get() {
          return self.config._enable;
        },
        set: function set(dates) {
          self.config._enable = parseDateRules(dates);
        }
      });
      Object.defineProperty(self.config, "disable", {
        get: function get() {
          return self.config._disable;
        },
        set: function set(dates) {
          self.config._disable = parseDateRules(dates);
        }
      });
      var timeMode = userConfig.mode === "time";

      if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
        var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
        formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
      }

      if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
        var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
        formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
      }

      if (!userConfig.altInputClass) {
        self.config.altInputClass = self.input.className + " " + self.config.altInputClass;
      }

      Object.defineProperty(self.config, "minDate", {
        get: function get() {
          return self.config._minDate;
        },
        set: minMaxDateSetter("min")
      });
      Object.defineProperty(self.config, "maxDate", {
        get: function get() {
          return self.config._maxDate;
        },
        set: minMaxDateSetter("max")
      });

      var minMaxTimeSetter = function minMaxTimeSetter(type) {
        return function (val) {
          self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
        };
      };

      Object.defineProperty(self.config, "minTime", {
        get: function get() {
          return self.config._minTime;
        },
        set: minMaxTimeSetter("min")
      });
      Object.defineProperty(self.config, "maxTime", {
        get: function get() {
          return self.config._maxTime;
        },
        set: minMaxTimeSetter("max")
      });

      if (userConfig.mode === "time") {
        self.config.noCalendar = true;
        self.config.enableTime = true;
      }

      Object.assign(self.config, formats, userConfig);

      for (var i = 0; i < boolOpts.length; i++) {
        self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
      }

      HOOKS.filter(function (hook) {
        return self.config[hook] !== undefined;
      }).forEach(function (hook) {
        self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
      });
      self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      for (var i = 0; i < self.config.plugins.length; i++) {
        var pluginConf = self.config.plugins[i](self) || {};

        for (var key in pluginConf) {
          if (HOOKS.indexOf(key) > -1) {
            self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
          } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
        }
      }

      triggerEvent("onParseConfig");
    }

    function setupLocale() {
      if (_typeof(self.config.locale) !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
      self.l10n = _assign({}, flatpickr.l10ns["default"], _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
      tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";

      var userConfig = _assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));

      if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
        self.config.time_24hr = self.l10n.time_24hr;
      }

      self.formatDate = createDateFormatter(self);
      self.parseDate = createDateParser({
        config: self.config,
        l10n: self.l10n
      });
    }

    function positionCalendar(customPositionElement) {
      if (self.calendarContainer === undefined) return;
      triggerEvent("onPreCalendarPosition");
      var positionElement = customPositionElement || self._positionElement;
      var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
        return acc + child.offsetHeight;
      }, 0),
          calendarWidth = self.calendarContainer.offsetWidth,
          configPos = self.config.position.split(" "),
          configPosVertical = configPos[0],
          configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
          inputBounds = positionElement.getBoundingClientRect(),
          distanceFromBottom = window.innerHeight - inputBounds.bottom,
          showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
      var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
      toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
      toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
      if (self.config.inline) return;
      var left = window.pageXOffset + inputBounds.left - (configPosHorizontal != null && configPosHorizontal === "center" ? (calendarWidth - inputBounds.width) / 2 : 0);
      var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
      var rightMost = left + calendarWidth > window.document.body.offsetWidth;
      var centerMost = right + calendarWidth > window.document.body.offsetWidth;
      toggleClass(self.calendarContainer, "rightMost", rightMost);
      if (self.config["static"]) return;
      self.calendarContainer.style.top = top + "px";

      if (!rightMost) {
        self.calendarContainer.style.left = left + "px";
        self.calendarContainer.style.right = "auto";
      } else if (!centerMost) {
        self.calendarContainer.style.left = "auto";
        self.calendarContainer.style.right = right + "px";
      } else {
        var doc = document.styleSheets[0]; // some testing environments don't have css support

        if (doc === undefined) return;
        var bodyWidth = window.document.body.offsetWidth;
        var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
        var centerBefore = ".flatpickr-calendar.centerMost:before";
        var centerAfter = ".flatpickr-calendar.centerMost:after";
        var centerIndex = doc.cssRules.length;
        var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
        toggleClass(self.calendarContainer, "rightMost", false);
        toggleClass(self.calendarContainer, "centerMost", true);
        doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
        self.calendarContainer.style.left = centerLeft + "px";
        self.calendarContainer.style.right = "auto";
      }
    }

    function redraw() {
      if (self.config.noCalendar || self.isMobile) return;
      updateNavigationCurrentMonth();
      buildDays();
    }

    function focusAndClose() {
      self._input.focus();

      if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
        // hack - bugs in the way IE handles focus keeps the calendar open
        setTimeout(self.close, 0);
      } else {
        self.close();
      }
    }

    function selectDate(e) {
      e.preventDefault();
      e.stopPropagation();

      var isSelectable = function isSelectable(day) {
        return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
      };

      var t = findParent(e.target, isSelectable);
      if (t === undefined) return;
      var target = t;
      var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
      var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
      self.selectedDateElem = target;
      if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
        var selectedIndex = isDateSelected(selectedDate);
        if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
      } else if (self.config.mode === "range") {
        if (self.selectedDates.length === 2) {
          self.clear(false, false);
        }

        self.latestSelectedDateObj = selectedDate;
        self.selectedDates.push(selectedDate); // unless selecting same date twice, sort ascendingly

        if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
          return a.getTime() - b.getTime();
        });
      }
      setHoursFromInputs();

      if (shouldChangeMonth) {
        var isNewYear = self.currentYear !== selectedDate.getFullYear();
        self.currentYear = selectedDate.getFullYear();
        self.currentMonth = selectedDate.getMonth();

        if (isNewYear) {
          triggerEvent("onYearChange");
          buildMonthSwitch();
        }

        triggerEvent("onMonthChange");
      }

      updateNavigationCurrentMonth();
      buildDays();
      updateValue();
      if (self.config.enableTime) setTimeout(function () {
        return self.showTimeInput = true;
      }, 50); // maintain focus

      if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
        self.selectedDateElem && self.selectedDateElem.focus();
      }
      if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();

      if (self.config.closeOnSelect) {
        var single = self.config.mode === "single" && !self.config.enableTime;
        var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

        if (single || range) {
          focusAndClose();
        }
      }

      triggerChange();
    }

    var CALLBACKS = {
      locale: [setupLocale, updateWeekdays],
      showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
      minDate: [jumpToDate],
      maxDate: [jumpToDate]
    };

    function set(option, value) {
      if (option !== null && _typeof(option) === "object") {
        Object.assign(self.config, option);

        for (var key in option) {
          if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function (x) {
            return x();
          });
        }
      } else {
        self.config[option] = value;
        if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
          return x();
        });else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
      }

      self.redraw();
      updateValue(false);
    }

    function setSelectedDate(inputDate, format) {
      var dates = [];
      if (inputDate instanceof Array) dates = inputDate.map(function (d) {
        return self.parseDate(d, format);
      });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
        switch (self.config.mode) {
          case "single":
          case "time":
            dates = [self.parseDate(inputDate, format)];
            break;

          case "multiple":
            dates = inputDate.split(self.config.conjunction).map(function (date) {
              return self.parseDate(date, format);
            });
            break;

          case "range":
            dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
              return self.parseDate(date, format);
            });
            break;

          default:
            break;
        }
      } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
      self.selectedDates = dates.filter(function (d) {
        return d instanceof Date && isEnabled(d, false);
      });
      if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
        return a.getTime() - b.getTime();
      });
    }

    function setDate(date, triggerChange, format) {
      if (triggerChange === void 0) {
        triggerChange = false;
      }

      if (format === void 0) {
        format = self.config.dateFormat;
      }

      if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
      setSelectedDate(date, format);
      self.showTimeInput = self.selectedDates.length > 0;
      self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
      self.redraw();
      jumpToDate();
      setHoursFromDate();

      if (self.selectedDates.length === 0) {
        self.clear(false);
      }

      updateValue(triggerChange);
      if (triggerChange) triggerEvent("onChange");
    }

    function parseDateRules(arr) {
      return arr.slice().map(function (rule) {
        if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
          return self.parseDate(rule, undefined, true);
        } else if (rule && _typeof(rule) === "object" && rule.from && rule.to) return {
          from: self.parseDate(rule.from, undefined),
          to: self.parseDate(rule.to, undefined)
        };

        return rule;
      }).filter(function (x) {
        return x;
      }); // remove falsy values
    }

    function setupDates() {
      self.selectedDates = [];
      self.now = self.parseDate(self.config.now) || new Date(); // Workaround IE11 setting placeholder as the input's value

      var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
      if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
      self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
      if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
      if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
      if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
      self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
      self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
      Object.defineProperty(self, "showTimeInput", {
        get: function get() {
          return self._showTimeInput;
        },
        set: function set(bool) {
          self._showTimeInput = bool;
          if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
          self.isOpen && positionCalendar();
        }
      });
    }

    function setupInputs() {
      self.input = self.config.wrap ? element.querySelector("[data-input]") : element;
      /* istanbul ignore next */

      if (!self.input) {
        self.config.errorHandler(new Error("Invalid input element specified"));
        return;
      } // hack: store previous type to restore it after destroy()


      self.input._type = self.input.type;
      self.input.type = "text";
      self.input.classList.add("flatpickr-input");
      self._input = self.input;

      if (self.config.altInput) {
        // replicate self.element
        self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
        self._input = self.altInput;
        self.altInput.placeholder = self.input.placeholder;
        self.altInput.disabled = self.input.disabled;
        self.altInput.required = self.input.required;
        self.altInput.tabIndex = self.input.tabIndex;
        self.altInput.type = "text";
        self.input.setAttribute("type", "hidden");
        if (!self.config["static"] && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
      }

      if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
      self._positionElement = self.config.positionElement || self._input;
    }

    function setupMobile() {
      var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
      self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
      self.mobileInput.step = self.input.getAttribute("step") || "any";
      self.mobileInput.tabIndex = 1;
      self.mobileInput.type = inputType;
      self.mobileInput.disabled = self.input.disabled;
      self.mobileInput.required = self.input.required;
      self.mobileInput.placeholder = self.input.placeholder;
      self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

      if (self.selectedDates.length > 0) {
        self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
      }

      if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
      if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
      self.input.type = "hidden";
      if (self.altInput !== undefined) self.altInput.type = "hidden";

      try {
        if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
      } catch (_a) {}

      bind(self.mobileInput, "change", function (e) {
        self.setDate(e.target.value, false, self.mobileFormatStr);
        triggerEvent("onChange");
        triggerEvent("onClose");
      });
    }

    function toggle(e) {
      if (self.isOpen === true) return self.close();
      self.open(e);
    }

    function triggerEvent(event, data) {
      // If the instance has been destroyed already, all hooks have been removed
      if (self.config === undefined) return;
      var hooks = self.config[event];

      if (hooks !== undefined && hooks.length > 0) {
        for (var i = 0; hooks[i] && i < hooks.length; i++) {
          hooks[i](self.selectedDates, self.input.value, self, data);
        }
      }

      if (event === "onChange") {
        self.input.dispatchEvent(createEvent("change")); // many front-end frameworks bind to the input event

        self.input.dispatchEvent(createEvent("input"));
      }
    }

    function createEvent(name) {
      var e = document.createEvent("Event");
      e.initEvent(name, true, true);
      return e;
    }

    function isDateSelected(date) {
      for (var i = 0; i < self.selectedDates.length; i++) {
        if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
      }

      return false;
    }

    function isDateInRange(date) {
      if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
      return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
    }

    function updateNavigationCurrentMonth() {
      if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
      self.yearElements.forEach(function (yearElement, i) {
        var d = new Date(self.currentYear, self.currentMonth, 1);
        d.setMonth(self.currentMonth + i);

        if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
          self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
        } else {
          self.monthsDropdownContainer.value = d.getMonth().toString();
        }

        yearElement.value = d.getFullYear().toString();
      });
      self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
      self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
    }

    function getDateStr(format) {
      return self.selectedDates.map(function (dObj) {
        return self.formatDate(dObj, format);
      }).filter(function (d, i, arr) {
        return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
      }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
    }
    /**
     * Updates the values of inputs associated with the calendar
     */


    function updateValue(triggerChange) {
      if (triggerChange === void 0) {
        triggerChange = true;
      }

      if (self.mobileInput !== undefined && self.mobileFormatStr) {
        self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
      }

      self.input.value = getDateStr(self.config.dateFormat);

      if (self.altInput !== undefined) {
        self.altInput.value = getDateStr(self.config.altFormat);
      }

      if (triggerChange !== false) triggerEvent("onValueUpdate");
    }

    function onMonthNavClick(e) {
      var isPrevMonth = self.prevMonthNav.contains(e.target);
      var isNextMonth = self.nextMonthNav.contains(e.target);

      if (isPrevMonth || isNextMonth) {
        changeMonth(isPrevMonth ? -1 : 1);
      } else if (self.yearElements.indexOf(e.target) >= 0) {
        e.target.select();
      } else if (e.target.classList.contains("arrowUp")) {
        self.changeYear(self.currentYear + 1);
      } else if (e.target.classList.contains("arrowDown")) {
        self.changeYear(self.currentYear - 1);
      }
    }

    function timeWrapper(e) {
      e.preventDefault();
      var isKeyDown = e.type === "keydown",
          input = e.target;

      if (self.amPM !== undefined && e.target === self.amPM) {
        self.amPM.textContent = self.l10n.amPM[_int(self.amPM.textContent === self.l10n.amPM[0])];
      }

      var min = parseFloat(input.getAttribute("min")),
          max = parseFloat(input.getAttribute("max")),
          step = parseFloat(input.getAttribute("step")),
          curValue = parseInt(input.value, 10),
          delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
      var newValue = curValue + step * delta;

      if (typeof input.value !== "undefined" && input.value.length === 2) {
        var isHourElem = input === self.hourElement,
            isMinuteElem = input === self.minuteElement;

        if (newValue < min) {
          newValue = max + newValue + _int(!isHourElem) + (_int(isHourElem) && _int(!self.amPM));
          if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
        } else if (newValue > max) {
          newValue = input === self.hourElement ? newValue - max - _int(!self.amPM) : min;
          if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
        }

        if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
          self.amPM.textContent = self.l10n.amPM[_int(self.amPM.textContent === self.l10n.amPM[0])];
        }

        input.value = pad(newValue);
      }
    }

    init();
    return self;
  }
  /* istanbul ignore next */


  function _flatpickr(nodeList, config) {
    // static list
    var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
      return x instanceof HTMLElement;
    });
    var instances = [];

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      try {
        if (node.getAttribute("data-fp-omit") !== null) continue;

        if (node._flatpickr !== undefined) {
          node._flatpickr.destroy();

          node._flatpickr = undefined;
        }

        node._flatpickr = FlatpickrInstance(node, config || {});
        instances.push(node._flatpickr);
      } catch (e) {
        console.error(e);
      }
    }

    return instances.length === 1 ? instances[0] : instances;
  }
  /* istanbul ignore next */


  if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
    // browser env
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
      return _flatpickr(this, config);
    };

    HTMLElement.prototype.flatpickr = function (config) {
      return _flatpickr([this], config);
    };
  }
  /* istanbul ignore next */


  var flatpickr = function flatpickr(selector, config) {
    if (typeof selector === "string") {
      return _flatpickr(window.document.querySelectorAll(selector), config);
    } else if (selector instanceof Node) {
      return _flatpickr([selector], config);
    } else {
      return _flatpickr(selector, config);
    }
  };
  /* istanbul ignore next */


  flatpickr.defaultConfig = {};
  flatpickr.l10ns = {
    en: _assign({}, english),
    "default": _assign({}, english)
  };

  flatpickr.localize = function (l10n) {
    flatpickr.l10ns["default"] = _assign({}, flatpickr.l10ns["default"], l10n);
  };

  flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = _assign({}, flatpickr.defaultConfig, config);
  };

  flatpickr.parseDate = createDateParser({});
  flatpickr.formatDate = createDateFormatter({});
  flatpickr.compareDates = compareDates;
  /* istanbul ignore next */

  if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
      return _flatpickr(this, config);
    };
  } // eslint-disable-next-line @typescript-eslint/camelcase


  Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
  };

  if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
  }

  return flatpickr;
});

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(143);

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
  module.hot.accept("!!../../css-loader/index.js??ref--2-1!./flatpickr.css", function () {
    var newContent = require("!!../../css-loader/index.js??ref--2-1!./flatpickr.css");

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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,.08)}.flatpickr-calendar.inline,.flatpickr-calendar.open{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1);animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none!important;box-shadow:none!important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasTime .dayContainer,.flatpickr-calendar .hasWeeks .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:after,.flatpickr-calendar:before{position:absolute;display:block;pointer-events:none;border:solid transparent;content:\"\";height:0;width:0;left:22px}.flatpickr-calendar.rightMost:after,.flatpickr-calendar.rightMost:before{left:auto;right:22px}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:after,.flatpickr-calendar.arrowTop:before{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:after,.flatpickr-calendar.arrowBottom:before{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0,0,0,.9);fill:rgba(0,0,0,.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-next-month,.flatpickr-months .flatpickr-prev-month{text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0,0,0,.9);fill:rgba(0,0,0,.9)}.flatpickr-months .flatpickr-next-month.flatpickr-disabled,.flatpickr-months .flatpickr-prev-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-next-month i,.flatpickr-months .flatpickr-prev-month i{position:relative}.flatpickr-months .flatpickr-next-month.flatpickr-prev-month,.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month{left:0}.flatpickr-months .flatpickr-next-month.flatpickr-next-month,.flatpickr-months .flatpickr-prev-month.flatpickr-next-month{right:0}.flatpickr-months .flatpickr-next-month:hover,.flatpickr-months .flatpickr-prev-month:hover{color:#959ea9}.flatpickr-months .flatpickr-next-month:hover svg,.flatpickr-months .flatpickr-prev-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-next-month svg,.flatpickr-months .flatpickr-prev-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-next-month svg path,.flatpickr-months .flatpickr-prev-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-inner-spin-button,.numInputWrapper input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,.15);-webkit-box-sizing:border-box;box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,.1)}.numInputWrapper span:active{background:rgba(0,0,0,.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,.5)}.numInputWrapper:hover{background:rgba(0,0,0,.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:active,.flatpickr-current-month .flatpickr-monthDropdown-months:focus{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px}.flatpickr-weekdays,.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-weekdays .flatpickr-weekdaycontainer,span.flatpickr-weekday{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,.54);line-height:1;margin:0;text-align:center;display:block;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}.dayContainer+.dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day.nextMonthDay:focus,.flatpickr-day.nextMonthDay:hover,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.today.inRange,.flatpickr-day:focus,.flatpickr-day:hover{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:focus,.flatpickr-day.today:hover{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.endRange,.flatpickr-day.endRange.inRange,.flatpickr-day.endRange.nextMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.endRange:focus,.flatpickr-day.endRange:hover,.flatpickr-day.selected,.flatpickr-day.selected.inRange,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.selected:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange,.flatpickr-day.startRange.inRange,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.startRange:focus,.flatpickr-day.startRange:hover{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.endRange.startRange,.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.endRange.endRange,.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.endRange.startRange.endRange,.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.nextMonthDay,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.prevMonthDay{color:rgba(57,57,57,.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden}.flatpickr-innerContainer,.flatpickr-rContainer{-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-rContainer{display:inline-block;padding:0}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:700}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-am-pm,.flatpickr-time .flatpickr-time-separator{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:700;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time .flatpickr-am-pm:focus,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time input:hover{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fpFadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}", ""]);

// exports


/***/ })
/******/ ]);
});
//# sourceMappingURL=basis-aggrid-components.bundle.js.map