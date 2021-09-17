(() => {
var exports = {};
exports.id = "pages/portfolio";
exports.ids = ["pages/portfolio"];
exports.modules = {

/***/ "./components/TitleSubtitle.js":
/*!*************************************!*\
  !*** ./components/TitleSubtitle.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/pages.module.scss */ "./sass/pages.module.scss");
/* harmony import */ var _sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\Sites\\website_2\\my-portfoliosite\\components\\TitleSubtitle.js";




const TitleSubtitle = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wrap_title),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default().line_horizontal)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default().subtitle),
      children: props.subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleSubtitle);

/***/ }),

/***/ "./pages/portfolio.jsx":
/*!*****************************!*\
  !*** ./pages/portfolio.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/pages.module.scss */ "./sass/pages.module.scss");
/* harmony import */ var _sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_TitleSubtitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TitleSubtitle */ "./components/TitleSubtitle.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\Sites\\website_2\\my-portfoliosite\\pages\\portfolio.jsx";





const portfolio = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
    className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_3___default().body),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
      id: "contact",
      className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_3___default().side_right_container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_TitleSubtitle__WEBPACK_IMPORTED_MODULE_1__.default, {
        title: "Projects",
        subtitle: "some of my projects developed today"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolio);

/***/ }),

/***/ "./sass/pages.module.scss":
/*!********************************!*\
  !*** ./sass/pages.module.scss ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"body": "pages_body__35Xcg",
	"side_right_container": "pages_side_right_container__3v817",
	"wrap_title": "pages_wrap_title__1j1y-",
	"title": "pages_title__N-m82",
	"title_transtion": "pages_title_transtion__3QfHE",
	"subtitle": "pages_subtitle__2R5tI",
	"line_horizontal": "pages_line_horizontal__3E6n4",
	"line_horizontal_transtion": "pages_line_horizontal_transtion__mJsLb"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/portfolio.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcG9ydGZvbGlvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLE1BQU1FLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBQzdCLHNCQUNJO0FBQUssYUFBUyxFQUFJRiwyRUFBbEI7QUFBQSw0QkFFSTtBQUFLLGVBQVMsRUFBSUEsc0VBQWxCO0FBQUEsZ0JBQ0tFLEtBQUssQ0FBQ0U7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBTUk7QUFBTSxlQUFTLEVBQUlKLGdGQUFzQks7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQVFJO0FBQUksZUFBUyxFQUFJTCx5RUFBakI7QUFBQSxnQkFDS0UsS0FBSyxDQUFDSTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFjSCxDQWZEOztBQWlCQSxpRUFBZUwsYUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNTSxTQUFTLEdBQUcsTUFBTTtBQUNwQixzQkFDSTtBQUFPLGFBQVMsRUFBSVAscUVBQXBCO0FBQUEsMkJBRUE7QUFBUyxRQUFFLEVBQUMsU0FBWjtBQUFzQixlQUFTLEVBQUlBLHFGQUFuQztBQUFBLDZCQUdJLDhEQUFDLDhEQUFEO0FBQWUsYUFBSyxFQUFDLFVBQXJCO0FBQWdDLGdCQUFRLEVBQUU7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFZSCxDQWJEOztBQWNBLGlFQUFlTyxTQUFmOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvc2l0ZS8uL2NvbXBvbmVudHMvVGl0bGVTdWJ0aXRsZS5qcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW9zaXRlLy4vcGFnZXMvcG9ydGZvbGlvLmpzeCIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW9zaXRlLy4vc2Fzcy9wYWdlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW9zaXRlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW9zaXRlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zYXNzL3BhZ2VzLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgVGl0bGVTdWJ0aXRsZSA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMud3JhcF90aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aDEgIGNsYXNzTmFtZSA9IHtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge3N0eWxlcy5saW5lX2hvcml6b250YWx9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSB7c3R5bGVzLnN1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZVN1YnRpdGxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc2Fzcy9wYWdlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFRpdGxlU3VidGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZVN1YnRpdGxlJ1xyXG5cclxuY29uc3QgcG9ydGZvbGlvID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiAgY2xhc3NOYW1lID0ge3N0eWxlcy5ib2R5fT5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lID0ge3N0eWxlcy5zaWRlX3JpZ2h0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogLS0tLS0tLS0tLS1USVRVTE8gRSBTVUJUSUxPIC0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICAgICAgICA8VGl0bGVTdWJ0aXRsZSB0aXRsZT1cIlByb2plY3RzXCIgc3VidGl0bGU9IFwic29tZSBvZiBteSBwcm9qZWN0cyBkZXZlbG9wZWQgdG9kYXlcIi8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLUNPTlRFTlQgQVJFQSAtLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICAgICA8L3NlY3Rpb24+ICAgIFxyXG4gICAgPC9tYWluPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBwb3J0Zm9saW8iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJib2R5XCI6IFwicGFnZXNfYm9keV9fMzVYY2dcIixcblx0XCJzaWRlX3JpZ2h0X2NvbnRhaW5lclwiOiBcInBhZ2VzX3NpZGVfcmlnaHRfY29udGFpbmVyX18zdjgxN1wiLFxuXHRcIndyYXBfdGl0bGVcIjogXCJwYWdlc193cmFwX3RpdGxlX18xajF5LVwiLFxuXHRcInRpdGxlXCI6IFwicGFnZXNfdGl0bGVfX04tbTgyXCIsXG5cdFwidGl0bGVfdHJhbnN0aW9uXCI6IFwicGFnZXNfdGl0bGVfdHJhbnN0aW9uX18zUWZIRVwiLFxuXHRcInN1YnRpdGxlXCI6IFwicGFnZXNfc3VidGl0bGVfXzJSNXRJXCIsXG5cdFwibGluZV9ob3Jpem9udGFsXCI6IFwicGFnZXNfbGluZV9ob3Jpem9udGFsX18zRTZuNFwiLFxuXHRcImxpbmVfaG9yaXpvbnRhbF90cmFuc3Rpb25cIjogXCJwYWdlc19saW5lX2hvcml6b250YWxfdHJhbnN0aW9uX19tSnNMYlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIlRpdGxlU3VidGl0bGUiLCJwcm9wcyIsIndyYXBfdGl0bGUiLCJ0aXRsZSIsImxpbmVfaG9yaXpvbnRhbCIsInN1YnRpdGxlIiwicG9ydGZvbGlvIiwiYm9keSIsInNpZGVfcmlnaHRfY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==