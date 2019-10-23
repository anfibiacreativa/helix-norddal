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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../sources/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../sources/components/header/header.entry.js":
/*!****************************************************!*\
  !*** ../sources/components/header/header.entry.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//\n\n//# sourceURL=webpack:///../sources/components/header/header.entry.js?");

/***/ }),

/***/ "../sources/js/index.js":
/*!******************************!*\
  !*** ../sources/js/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_commons_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/commons/styles.scss */ \"../sources/styles/commons/styles.scss\");\n/* harmony import */ var _styles_commons_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_commons_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.js */ \"../sources/js/layout.js\");\n/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_js_header_header_entry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components.js/header/header.entry.js */ \"../sources/components/header/header.entry.js\");\n/* harmony import */ var components_js_header_header_entry_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(components_js_header_header_entry_js__WEBPACK_IMPORTED_MODULE_2__);\n // Import custom components JS\n// To inject in the helix page\n\n\n\n\n//# sourceURL=webpack:///../sources/js/index.js?");

/***/ }),

/***/ "../sources/js/layout.js":
/*!*******************************!*\
  !*** ../sources/js/layout.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar main = document.getElementsByTagName('main'); // because you should have a way to decide what type of \"template\" you want\n\nvar layout = function layout() {\n  var el = main[0];\n\n  var isBlog = function isBlog() {\n    return el.lastChild.className.indexOf('author-page') === -1;\n  };\n\n  wrapSections = function wrapSections() {\n    var blogHeroImg = {};\n    var blogTitle = {};\n    var blogAuthor = {};\n    var blogBody = {}; // convert HTML Collection to iterable list for easier DOM Manipulation\n\n    var els = _toConsumableArray(el.children);\n\n    if (isBlog()) {\n      // create a new section and append the necessary divs\n      var section = document.createElement('section');\n      var aside = document.createElement('aside');\n      var blogBodyDiv = document.createElement('div');\n\n      if (els && els.length > 0) {\n        els.forEach(function (element) {\n          if (element.className.indexOf('blog-author') >= 0) {\n            blogAuthor = element;\n          } else if (element.querySelector('img')) {\n            blogHeroImg = element;\n          } else if (element.querySelector('h1')) {\n            blogTitle = element;\n          } else {\n            blogBody = element;\n          }\n        });\n      } // empty main from content\n\n\n      el.innerHTML = '';\n\n      if (blogHeroImg) {\n        el.appendChild(blogHeroImg);\n      }\n\n      el.appendChild(section);\n      section.appendChild(aside);\n      section.appendChild(blogBodyDiv);\n\n      if (blogTitle && blogTitle.childElementCount > 0) {\n        blogBodyDiv.appendChild(blogTitle);\n      }\n\n      if (blogBody && blogBody.childElementCount > 0) {\n        blogBodyDiv.appendChild(blogBody);\n      }\n\n      if (blogAuthor && blogAuthor.childElementCount > 0) {\n        aside.appendChild(blogAuthor);\n      }\n    } else {\n      var authorTeaser = document.createElement('section');\n      authorTeaser.classList.add('author-teaser__base');\n      var authorImg = el.lastChild.querySelector('img');\n      var authorBioWrapper = document.createElement('div');\n      console.log({\n        authorImg: authorImg\n      });\n      el.appendChild(authorTeaser);\n      authorTeaser.appendChild(authorImg);\n\n      var authorData = _toConsumableArray(el.children);\n\n      authorData.pop();\n      authorTeaser.appendChild(authorBioWrapper);\n      authorData.forEach(function (child) {\n        authorBioWrapper.appendChild(child);\n      });\n    }\n  };\n\n  wrapSections();\n}; // run layout\n\n\nlayout();\n\n//# sourceURL=webpack:///../sources/js/layout.js?");

/***/ }),

/***/ "../sources/styles/commons/styles.scss":
/*!*********************************************!*\
  !*** ../sources/styles/commons/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../sources/styles/commons/styles.scss?");

/***/ })

/******/ });