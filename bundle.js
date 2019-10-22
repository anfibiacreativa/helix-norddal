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

eval("console.log('I am the header js');\n\n//# sourceURL=webpack:///../sources/components/header/header.entry.js?");

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

eval("var types = ['page', 'blog'];\nvar main = document.getElementsByTagName('main');\nvar blogAuthor = document.querySelector('.blog-author'); // because you should have a way to decide what type of \"template\" you want\n\nvar layout = function layout() {\n  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'blog';\n\n  if (type === 'blog') {\n    console.log(\"####### I am a \".concat(type, \" #######\"));\n\n    wrapSections = function wrapSections() {\n      var el = main[0];\n      var nodes = Array.from(el.childNodes);\n      var blog = [];\n      nodes.forEach(function (item) {\n        var content = item.innerHTML;\n\n        if (content) {\n          blog.push(item.innerHTML);\n        }\n      });\n      var section = document.createElement('section');\n      var aside = document.createElement('aside');\n      var blogBody = document.createElement('div'); // empty main from content\n\n      el.innerHTML = ''; // create a new section and append the necessary divs\n\n      el.appendChild(section);\n      section.appendChild(aside);\n      section.appendChild(blogBody);\n      var blogAuthor = blog.filter(function (item) {\n        return item.indexOf('mailto') > -1;\n      });\n      var blogHeroImg = blog.filter(function (item) {\n        return item.indexOf('<img') > -1;\n      });\n      var blogTitle = blog.filter(function (item) {\n        return item.indexOf('<h1') > -1;\n      });\n      var identifiedEls = [blogHeroImg[0], blogTitle[0], blogAuthor[0]];\n      console.log({\n        identifiedEls: identifiedEls\n      });\n      var blogText = blog.filter(function (item) {\n        return !identifiedEls.includes(item);\n      });\n      console.log({\n        blogText: blogText\n      });\n      var blogContent = {\n        image: blogHeroImg,\n        author: blogAuthor,\n        title: blogTitle,\n        text: blogText\n      };\n      el.insertAdjacentHTML('afterbegin', blogContent.image);\n      aside.insertAdjacentHTML('afterbegin', blogContent.author);\n      blogBody.insertAdjacentHTML('afterbegin', blogContent.text);\n      blogBody.insertAdjacentHTML('afterbegin', blogContent.title);\n    };\n\n    wrapSections();\n  }\n}; // run layout\n\n\nlayout();\n\n//# sourceURL=webpack:///../sources/js/layout.js?");

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