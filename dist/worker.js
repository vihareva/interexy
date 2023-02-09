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

/***/ "./src/worker.js":
/*!***********************!*\
  !*** ./src/worker.js ***!
  \***********************/
/***/ (() => {

eval("// import {hardCalc} from \"./index.js\";\r\n//\r\n// onmessage = function(e) {\r\n//     console.log(e.data);\r\n//     hardCalc(e.data)\r\n//     postMessage('message received from worker');\r\n// }\r\n//To load web worker from FILE in a project set up with Webpack\r\n(() => {\r\n    console.log(\"worker_function loaded\");\r\n\r\n    window.worker_function = function() {\r\n        self.onmessage = (e) => {\r\n            console.log(e);\r\n\r\n            function fibonacci(num) {\r\n                if (num < 2) {\r\n                    return num\r\n                }\r\n                return fibonacci(num - 1) + fibonacci(num - 2)\r\n            }\r\n            self.postMessage(fibonacci(e.data));\r\n        };\r\n\r\n}\r\n})();\r\n\n\n//# sourceURL=webpack://interexy/./src/worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/worker.js"]();
/******/ 	
/******/ })()
;