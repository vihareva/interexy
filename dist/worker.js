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

/***/ "./src/worker.ts":
/*!***********************!*\
  !*** ./src/worker.ts ***!
  \***********************/
/***/ (() => {

eval("\r\nonmessage = function (e) {\r\n    console.log(e);\r\n    // function fibonacci(num:number):number {\r\n    //     if (num < 2) {\r\n    //         return num\r\n    //     }\r\n    //     return fibonacci(num - 1) + fibonacci(num - 2)\r\n    // }\r\n    //postMessage(fibonacci(e.data));\r\n    postMessage(e.data);\r\n};\r\n\n\n//# sourceURL=webpack://interexy/./src/worker.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/worker.ts"]();
/******/ 	
/******/ })()
;