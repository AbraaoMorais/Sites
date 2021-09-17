(() => {
var exports = {};
exports.id = "pages/formation";
exports.ids = ["pages/formation"];
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

/***/ "./pages/formation.jsx":
/*!*****************************!*\
  !*** ./pages/formation.jsx ***!
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
var _jsxFileName = "C:\\Users\\User\\Desktop\\Sites\\website_2\\my-portfoliosite\\pages\\formation.jsx";


 //import Link from 'next/link'



const formation = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
      className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_3___default().body),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
        id: "formation",
        className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_3___default().side_right_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_TitleSubtitle__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Education",
          subtitle: "My academic education"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formation);

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
var __webpack_exports__ = (__webpack_exec__("./pages/formation.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZm9ybWF0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLE1BQU1FLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBQzdCLHNCQUNJO0FBQUssYUFBUyxFQUFJRiwyRUFBbEI7QUFBQSw0QkFFSTtBQUFLLGVBQVMsRUFBSUEsc0VBQWxCO0FBQUEsZ0JBQ0tFLEtBQUssQ0FBQ0U7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBTUk7QUFBTSxlQUFTLEVBQUlKLGdGQUFzQks7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQVFJO0FBQUksZUFBUyxFQUFJTCx5RUFBakI7QUFBQSxnQkFDS0UsS0FBSyxDQUFDSTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFjSCxDQWZEOztBQWlCQSxpRUFBZUwsYUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtDQUVBOzs7O0FBRUEsTUFBTVEsU0FBUyxHQUFHLE1BQU07QUFDcEIsc0JBQ0EsOERBQUMsMkNBQUQ7QUFBQSwyQkFDSTtBQUFPLGVBQVMsRUFBSVQscUVBQXBCO0FBQUEsNkJBRUk7QUFBUyxVQUFFLEVBQUMsV0FBWjtBQUF3QixpQkFBUyxFQUFJQSxxRkFBckM7QUFBQSwrQkFHSSw4REFBQyw4REFBRDtBQUFlLGVBQUssRUFBQyxXQUFyQjtBQUFpQyxrQkFBUSxFQUFFO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQTtBQWdCSCxDQWpCRDs7QUFrQkEsaUVBQWVTLFNBQWY7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW9zaXRlLy4vY29tcG9uZW50cy9UaXRsZVN1YnRpdGxlLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpb3NpdGUvLi9wYWdlcy9mb3JtYXRpb24uanN4Iiwid2VicGFjazovL215LXBvcnRmb2xpb3NpdGUvLi9zYXNzL3BhZ2VzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL215LXBvcnRmb2xpb3NpdGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL215LXBvcnRmb2xpb3NpdGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3Nhc3MvcGFnZXMubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBUaXRsZVN1YnRpdGxlID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy53cmFwX3RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lID0ge3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLmxpbmVfaG9yaXpvbnRhbH0+PC9zcGFuPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9IHtzdHlsZXMuc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlU3VidGl0bGU7XHJcbiIsImltcG9ydCByZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3Nhc3MvcGFnZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBUaXRsZVN1YnRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGVTdWJ0aXRsZSdcclxuLy9pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBmb3JtYXRpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPG1haW4gIGNsYXNzTmFtZSA9IHtzdHlsZXMuYm9keX0+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImZvcm1hdGlvblwiIGNsYXNzTmFtZSA9IHtzdHlsZXMuc2lkZV9yaWdodF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS1USVRVTE8gRSBTVUJUSUxPIC0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICAgICAgICAgICAgPFRpdGxlU3VidGl0bGUgdGl0bGU9XCJFZHVjYXRpb25cIiBzdWJ0aXRsZT0gXCJNeSBhY2FkZW1pYyBlZHVjYXRpb25cIi8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tQ09OVEVOVCBBUkVBIC0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+ICAgIFxyXG4gICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICA8L0ZyYWdtZW50PiAgICBcclxuICAgIFxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdGlvbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvZHlcIjogXCJwYWdlc19ib2R5X18zNVhjZ1wiLFxuXHRcInNpZGVfcmlnaHRfY29udGFpbmVyXCI6IFwicGFnZXNfc2lkZV9yaWdodF9jb250YWluZXJfXzN2ODE3XCIsXG5cdFwid3JhcF90aXRsZVwiOiBcInBhZ2VzX3dyYXBfdGl0bGVfXzFqMXktXCIsXG5cdFwidGl0bGVcIjogXCJwYWdlc190aXRsZV9fTi1tODJcIixcblx0XCJ0aXRsZV90cmFuc3Rpb25cIjogXCJwYWdlc190aXRsZV90cmFuc3Rpb25fXzNRZkhFXCIsXG5cdFwic3VidGl0bGVcIjogXCJwYWdlc19zdWJ0aXRsZV9fMlI1dElcIixcblx0XCJsaW5lX2hvcml6b250YWxcIjogXCJwYWdlc19saW5lX2hvcml6b250YWxfXzNFNm40XCIsXG5cdFwibGluZV9ob3Jpem9udGFsX3RyYW5zdGlvblwiOiBcInBhZ2VzX2xpbmVfaG9yaXpvbnRhbF90cmFuc3Rpb25fX21Kc0xiXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiVGl0bGVTdWJ0aXRsZSIsInByb3BzIiwid3JhcF90aXRsZSIsInRpdGxlIiwibGluZV9ob3Jpem9udGFsIiwic3VidGl0bGUiLCJyZWFjdCIsIkZyYWdtZW50IiwiZm9ybWF0aW9uIiwiYm9keSIsInNpZGVfcmlnaHRfY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==