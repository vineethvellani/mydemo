/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const http = __webpack_require__(/*! http */ \"http\");\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/html' });\n  res.end(`\n    <html>\n      <head>\n        <title>Cheers to 2025!</title>\n        <style>\n          body {\n            font-family: 'Arial', sans-serif;\n            background-color: #f0f8ff;\n            text-align: center;\n            color: #3e8e41;\n            margin: 0;\n            padding: 0;\n          }\n          h1 {\n            font-size: 4em;\n            margin-top: 50px;\n            color: #ff6347;\n            animation: fadeIn 3s ease-in-out;\n          }\n          h2 {\n            font-size: 2.5em;\n            color: #ff4500;\n            animation: fadeIn 4s ease-in-out;\n          }\n          .message {\n            font-size: 1.8em;\n            margin-top: 20px;\n            color: #4682b4;\n            animation: fadeIn 5s ease-in-out;\n          }\n          .container {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-direction: column;\n            margin-top: 50px;\n          }\n          .cheers-icon {\n            font-size: 5em;\n            color: #ffdf00;\n            animation: bounce 2s infinite;\n          }\n          @keyframes fadeIn {\n            0% { opacity: 0; }\n            100% { opacity: 1; }\n          }\n          @keyframes bounce {\n            0% { transform: translateY(0); }\n            50% { transform: translateY(-20px); }\n            100% { transform: translateY(0); }\n          }\n        </style>\n      </head>\n      <body>\n        <div class=\"container\">\n          <h1>Happy New Year 2025!</h1>\n          <h2>Wishing you a year full of joy, success, and prosperity!</h2>\n          <div class=\"message\">Cheers to new beginnings, amazing memories, and endless possibilities!</div>\n          <div class=\"cheers-icon\">🍻</div>\n        </div>\n      </body>\n    </html>\n  `);\n});\n\nserver.listen(3000, () => {\n  console.log('Node.js server is running on http://localhost:3000');\n});\n\n\n\n//# sourceURL=webpack://mydemo/./index.js?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;