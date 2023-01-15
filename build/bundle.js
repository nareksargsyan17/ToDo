/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _js_TodoTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/TodoTitle */ \"./src/js/TodoTitle.js\");\n/* harmony import */ var _js_TodoHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/TodoHeader */ \"./src/js/TodoHeader.js\");\n/* harmony import */ var _js_TodoListItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/TodoListItems */ \"./src/js/TodoListItems.js\");\n/* harmony import */ var _js_TodoFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/TodoFooter */ \"./src/js/TodoFooter.js\");\n\n\n\n\nfunction App () {\nconst root = document.querySelector(\"#root\");\n\ndocument.body.style = \"margin: 24px\"\n\nroot.style = `\n\tmax-width: 320px;\n\tmargin: 50px auto;\n\tpadding: 24px;\n\tborder-radius: 7px;\n\tbackground: #303F9F;\n\tfont-family: tahoma;\n`;\n\n\troot.innerHTML = \"\";\n\tfunction refresh (arr, data) {\n\t\tarr.forEach((item, index) => {\n\t\t\tif (data[index].isComplete === true) {\n\t\t\t\titem.setAttribute(\"checked\", \"\");\n\t\t\t}\n\t\t});\n\t}\n\troot.append((0,_js_TodoTitle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), (0,_js_TodoHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_js_TodoListItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), (0,_js_TodoFooter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\tfetch(\"http://localhost:7000/data/\")\n\t.then(data => data.json())\n\t.then(data => {\n\t\trefresh(document.querySelectorAll(\"input[type='checkbox']\"), data);\n\t})\n}\n\nApp();\n\n//# sourceURL=webpack://grouptest2-master/./src/index.js?");

/***/ }),

/***/ "./src/js/TodoFooter.js":
/*!******************************!*\
  !*** ./src/js/TodoFooter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoFooter)\n/* harmony export */ });\nfunction TodoFooter () {\r\n\tconst elem = document.createElement(\"div\");\r\n\tfetch(\"http://localhost:7000/data/\")\r\n\t.then(data => data.json())\r\n\t.then(data => {\r\n\tconst filteredArr = data.filter(obj => obj.isComplete === true);\r\nconsole.log(data);\r\n\telem.innerHTML = `\r\n\t\t<span style=\"font-style: italic;color: #FFEB3B\">${filteredArr.length} / ${data.length} Completed</span>\r\n\t`;\r\n\r\n})\r\n\treturn elem;\r\n}\r\n\n\n//# sourceURL=webpack://grouptest2-master/./src/js/TodoFooter.js?");

/***/ }),

/***/ "./src/js/TodoHeader.js":
/*!******************************!*\
  !*** ./src/js/TodoHeader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoHeader)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../index */ \"./src/index.js\");\n\r\nfunction TodoHeader () {\r\n\tconst elem = document.createElement(\"form\");\r\n\r\n\telem.style = \"margin-bottom: 24px; display: flex\"\r\n\r\n\telem.innerHTML = `\r\n\t\t<input \r\n\t\t\ttype=\"text\" \r\n\t\t\tplaceholder=\"Type here\"\r\n\t\t\tstyle=\"\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tpadding: 7px;\r\n\t\t\t\tborder: 1px solid #3F51B5;\r\n\t\t\t\toutline: 0;\r\n\t\t\t\tborder-radius: 7px 0px 0px 7px;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\"\r\n\t\t>\r\n\t\t<button style=\"\r\n\t\t\tpadding: 7px;\r\n\t\t\tborder: 1px solid #3F51B5;\r\n\t\t\toutline: 0;\r\n\t\t\tborder-radius: 0px 7px 7px 0px;\r\n\t\t\tbackground: #FFEB3B;\r\n\t\t\tcolor: #111;\r\n\t\t\tcursor: pointer;\r\n\t\t\tfont-weight: bold;\r\n\t\t\">\r\n\t\t\tADD\r\n\t\t</button>\r\n\t`;\r\n\r\n\telem.addEventListener(\"submit\", (e) => {\r\n\t\te.preventDefault();\r\n\t\tconst val = elem.firstElementChild.value.trim();\r\n\r\n\t\tif (val !== \"\" && val !== undefined) {\r\n\t\t\tfetch(\"http://localhost:7000/data/\")\r\n\t\t\t.then(data => data.json())\r\n\t\t\t.then(data => {\r\n\t\t\t\tfetch(\"http://localhost:7000/data/\", {\r\n\t\t\t\t\tmethod: \"POST\",\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"content-type\" : \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({\r\n\t\t\t\t\t\tname: val,\r\n\t\t\t\t\t\tisComplete: false,\r\n\t\t\t\t\t\tid: data.length==0?1:data[data.length-1].id+1\r\n\t\t\t\t\t})\r\n\t\t\t\t})\r\n\t\t\t\t;(0,_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\t\t\t})\r\n\t\t}\r\n\t\te.target.reset();\r\n\t});\r\n\treturn elem;\r\n}\n\n//# sourceURL=webpack://grouptest2-master/./src/js/TodoHeader.js?");

/***/ }),

/***/ "./src/js/TodoListItem.js":
/*!********************************!*\
  !*** ./src/js/TodoListItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoListItem)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../index */ \"./src/index.js\");\n\r\nfunction TodoListItem (obj) {\r\n\tconst elem = document.createElement(\"div\");\r\n\r\n\telem.innerHTML = `\r\n\t\t<div style=\"\r\n\t\t\tdisplay:flex;\r\n\t\t\tjustify-content:space-between;\r\n\t\t\talign-items:center;\r\n\t\t\tmargin-bottom: 12px;\r\n\t\t\">\r\n\t\t\t<label\r\n\t\t\t\tstyle=\"\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\"\r\n\t\t\t>\r\n\t\t\t\t<input type=\"checkbox\">\r\n\t\t\t\t<span>${obj.name}</span>\r\n\t\t\t</label>\r\n\t\t\t<button\r\n\t\t\t\tstyle=\"\r\n\t\t\t\t\tbackground: #3F51B5;\r\n\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\tborder: none;\r\n\t\t\t\t\tpadding: 7px;\r\n\t\t\t\t\tborder-radius: 7px;\r\n\t\t\t\t\tfont-size: 12px;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\"\r\n\t\t\t\tdata-rm\r\n\t\t\t>\r\n\t\t\t\tRemove\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t`;\r\n\r\n\telem.querySelectorAll(\"input\").forEach((item) => {\r\n\t\titem.addEventListener(\"change\", () => {\r\n\t\t\t\tfetch(`http://localhost:7000/data/${obj.id}`, {\r\n\t\t\t\t\tmethod: \"PATCH\",\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"content-type\" : \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({\r\n\t\t\t\t\t\tisComplete: item.checked\r\n\t\t\t\t\t})\r\n\t\t\t\t})\r\n\t\t\t\t;(0,_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\t\t});\r\n\t});\r\n\telem.querySelectorAll(\"[data-rm]\").forEach((item) => {\r\n\t\titem.addEventListener(\"click\", () => {\r\n\t\t\tfetch(\"http://localhost:7000/data/\")\r\n\t\t\t.then(data => data.json())\r\n\t\t\t.then(data => {\r\n\t\t\t\tlet index = data.findIndex(val => item.previousElementSibling.lastElementChild.textContent==val.name)\r\n\t\t\t\titem.parentElement.remove();\r\n\t\t\t\tfetch(`http://localhost:7000/data/${data[index].id}`, {\r\n\t\t\t\t\tmethod: \"DELETE\"\r\n\t\t\t\t})\r\n\t\t\t\tconsole.log(data);\r\n\t\t\t\t(0,_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\t\t\t})\r\n\t\t});\r\n\t});\r\n\r\n\treturn elem;\r\n}\n\n//# sourceURL=webpack://grouptest2-master/./src/js/TodoListItem.js?");

/***/ }),

/***/ "./src/js/TodoListItems.js":
/*!*********************************!*\
  !*** ./src/js/TodoListItems.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoListItems)\n/* harmony export */ });\n/* harmony import */ var _TodoListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoListItem */ \"./src/js/TodoListItem.js\");\n\r\nfunction TodoListItems () {\r\n\tconst elem = document.createElement(\"div\");\r\n\tfetch(\"http://localhost:7000/data/\")\r\n\t.then(data => data.json())\r\n\t.then(data => {\r\n\t\tdata.forEach(obj => {\r\n\t\t\telem.append((0,_TodoListItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj));\r\n\t\t});\r\n\t})\r\n\treturn elem;\r\n}\n\n//# sourceURL=webpack://grouptest2-master/./src/js/TodoListItems.js?");

/***/ }),

/***/ "./src/js/TodoTitle.js":
/*!*****************************!*\
  !*** ./src/js/TodoTitle.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoTitle)\n/* harmony export */ });\nfunction TodoTitle () {\r\n\tconst elem = document.createElement(\"h1\");\r\n\telem.style = \"color: #FFEB3B; font-size: 24px; margin-bottom: 24px; text-align:center;\"\r\n\telem.textContent = \"ToDo Application\"\r\n\treturn elem;\r\n}\n\n//# sourceURL=webpack://grouptest2-master/./src/js/TodoTitle.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;