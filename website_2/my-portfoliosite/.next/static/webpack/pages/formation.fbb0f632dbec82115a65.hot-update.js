self["webpackHotUpdate_N_E"]("pages/formation",{

/***/ "./pages/formation.jsx":
/*!*****************************!*\
  !*** ./pages/formation.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/pages.module.scss */ "./sass/pages.module.scss");
/* harmony import */ var _sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\User\\Desktop\\Sites\\website_2\\my-portfoliosite\\pages\\formation.jsx",
    _this = undefined;


 //import Link from 'next/link'



var formation = function formation() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),
      children: "formation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (formation);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./sass/pages.module.scss":
/*!********************************!*\
  !*** ./sass/pages.module.scss ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./pages.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./sass/pages.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./pages.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./sass/pages.module.scss",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./pages.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./sass/pages.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./sass/pages.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./sass/pages.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pages_side_right_container__3v817 {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  position: relative;\n  left: 20%;\n  width: 80%;\n  min-height: 100vh;\n  margin: 0px;\n  -moz-box-align: center;\n       align-items: center;\n  font-size: 10px;\n  background-color: #151753;\n  /*for browsers that do not support gradients*/\n  background-image: -webkit-linear-gradient(130deg, #151753, #2a2d7a, #23255d, #17173a);\n  background-image: linear-gradient(320deg, #151753, #2a2d7a, #23255d, #17173a);\n}\n\n.pages_wrap_title__1j1y- {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-pack: center;\n       justify-content: center;\n  width: 90%;\n  height: auto;\n  margin-top: 2em;\n}\n\n.pages_title__N-m82 {\n  color: #0CB4FF;\n  font-weight: bold;\n  -webkit-animation: pages_title_transtion__3QfHE 1.5s both;\n          animation: pages_title_transtion__3QfHE 1.5s both;\n  opacity: 0;\n}\n\n.pages_subtitle__2R5tI {\n  color: #A5C8FB;\n  font-weight: lighter;\n  font-family: \"Bungee Hairline\", cursive;\n  letter-spacing: 5px;\n  -webkit-animation: pages_title_transtion__3QfHE 1.5s 0.6s both;\n          animation: pages_title_transtion__3QfHE 1.5s 0.6s both;\n  opacity: 0;\n}\n\n.pages_line_horizontal__3E6n4 {\n  width: 100%;\n  border-style: solid;\n  border-width: 1px 0px 0px 0px;\n  color: #314665;\n  -webkit-animation: pages_line_horizontal_transtion__mJsLb 1.5s 0.2s both;\n          animation: pages_line_horizontal_transtion__mJsLb 1.5s 0.2s both;\n}\n\n@-webkit-keyframes pages_line_horizontal_transtion__mJsLb {\n  0% {\n    -webkit-transform: scale3d(0, 1, 1);\n            transform: scale3d(0, 1, 1);\n    -webkit-transform-origin: -100%;\n            transform-origin: -100%;\n    position: relative;\n  }\n  100% {\n    position: relative;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pages_line_horizontal_transtion__mJsLb {\n  0% {\n    -webkit-transform: scale3d(0, 1, 1);\n            transform: scale3d(0, 1, 1);\n    -webkit-transform-origin: -100%;\n            transform-origin: -100%;\n    position: relative;\n  }\n  100% {\n    position: relative;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n@-webkit-keyframes pages_title_transtion__3QfHE {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-30%);\n            transform: translateX(-30%);\n    -webkit-transform-origin: -100%;\n            transform-origin: -100%;\n    position: relative;\n  }\n  100% {\n    position: relative;\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n@keyframes pages_title_transtion__3QfHE {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-30%);\n            transform: translateX(-30%);\n    -webkit-transform-origin: -100%;\n            transform-origin: -100%;\n    position: relative;\n  }\n  100% {\n    position: relative;\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}", "",{"version":3,"sources":["webpack://pages.module.scss"],"names":[],"mappings":"AAmBA;EACI,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,iBAAA;EACA,WAAA;EACA,sBAAA;OAAA,mBAAA;EACA,eAAA;EACA,yBAAA;EAAmC,6CAAA;EACnC,qFAAA;EAAA,6EAAA;AAjBJ;;AAqBA;EACI,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,qBAAA;OAAA,uBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;AAlBJ;;AAsBA;EACI,cAAA;EACA,iBAAA;EACA,yDAAA;UAAA,iDAAA;EACA,UAAA;AAnBJ;;AAsBA;EACI,cAAA;EACA,oBAAA;EACA,uCAAA;EACA,mBAAA;EACA,8DAAA;UAAA,sDAAA;EACA,UAAA;AAnBJ;;AAsBA;EACI,WAAA;EACA,mBAAA;EACA,6BAAA;EACA,cAAA;EACA,wEAAA;UAAA,gEAAA;AAnBJ;;AAsBA;EACI;IAEI,mCAAA;YAAA,2BAAA;IACA,+BAAA;YAAA,uBAAA;IACA,kBAAA;EApBN;EAuBE;IACI,kBAAA;IAEA,mCAAA;YAAA,2BAAA;EAtBN;AACF;;AAUA;EACI;IAEI,mCAAA;YAAA,2BAAA;IACA,+BAAA;YAAA,uBAAA;IACA,kBAAA;EApBN;EAuBE;IACI,kBAAA;IAEA,mCAAA;YAAA,2BAAA;EAtBN;AACF;AAwBA;EACI;IACI,UAAA;IAGA,mCAAA;YAAA,2BAAA;IACA,+BAAA;YAAA,uBAAA;IACA,kBAAA;EAxBN;EA2BE;IACI,kBAAA;IACA,UAAA;IAGA,iCAAA;YAAA,yBAAA;EA3BN;AACF;AAWA;EACI;IACI,UAAA;IAGA,mCAAA;YAAA,2BAAA;IACA,+BAAA;YAAA,uBAAA;IACA,kBAAA;EAxBN;EA2BE;IACI,kBAAA;IACA,UAAA;IAGA,iCAAA;YAAA,yBAAA;EA3BN;AACF","sourcesContent":["// .body{\r\n//     display: flex;\r\n//     //position necessario pro overflow funcionar na animação de escala \r\n//     position: absolute; \r\n//     width: 100%;\r\n//     max-height: 100vh;\r\n//     background-color: rgb(21, 23, 83); /*for browsers that do not support gradients*/\r\n//     background-image: linear-gradient(320deg, rgb(21, 23, 83),rgb(42, 45, 122), rgb(35, 37, 93), rgb(23, 23, 58));  \r\n//     overflow: hidden; \r\n// }\r\n////////////////////////////////////////////////COMMUNS STYLE////////////////////////////////\r\n// .sectionLeft{\r\n//     position: relative;\r\n//     width: 20%;\r\n//     min-height: 100vh;\r\n//     background-color: rgb(255, 230, 0);\r\n//     z-index: 999;\r\n// }\r\n\r\n.side_right_container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    left: 20%;\r\n    width: 80%;\r\n    min-height: 100vh;\r\n    margin: 0px;\r\n    align-items: center;\r\n    font-size: 10px;\r\n    background-color: rgb(21, 23, 83); /*for browsers that do not support gradients*/\r\n    background-image: linear-gradient(320deg, rgb(21, 23, 83),rgb(42, 45, 122), rgb(35, 37, 93), rgb(23, 23, 58));  \r\n}\r\n\r\n////////////////////////////////////////////////FIM COMMUNS STYLE////////////////////////////////\r\n.wrap_title{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 90%;\r\n    height: auto;\r\n    margin-top: 2em;\r\n    // border:rgb(255, 230, 0) solid 2px;\r\n}\r\n\r\n.title{ \r\n    color: #0CB4FF;\r\n    font-weight: bold;\r\n    animation: title_transtion 1.5s both;\r\n    opacity: 0;\r\n}\r\n\r\n.subtitle{\r\n    color: #A5C8FB;\r\n    font-weight: lighter;\r\n    font-family:  'Bungee Hairline', cursive;\r\n    letter-spacing: 5px;\r\n    animation: title_transtion 1.5s 0.6s both;\r\n    opacity: 0;\r\n}\r\n\r\n.line_horizontal{\r\n    width: 100%;\r\n    border-style: solid;\r\n    border-width: 1px 0px 0px 0px;\r\n    color: #314665;\r\n    animation: line_horizontal_transtion 1.5s 0.2s both; \r\n}\r\n\r\n@keyframes line_horizontal_transtion{\r\n    0%{\r\n        // -webkit-transform: translateX(-100%);\r\n        transform: scale3d(0,1,1);\r\n        transform-origin: -100%;\r\n        position: relative;\r\n           \r\n    }\r\n    100%{\r\n        position: relative;\r\n        // -webkit-transform: translateX(0%);\r\n        transform: scale3d(1,1,1);\r\n    }\r\n}\r\n@keyframes title_transtion{\r\n    0%{\r\n        opacity: 0; \r\n        // right: -100%;\r\n        // -webkit-transform: translateX(-100%);\r\n        transform: translateX(-30%);\r\n        transform-origin: -100%;\r\n        position: relative;\r\n           \r\n    }\r\n    100%{\r\n        position: relative;\r\n        opacity: 1; \r\n        // right: 0%;\r\n        // -webkit-transform: translateX(0%);\r\n        transform: translateX(0%)\r\n    }\r\n}\r\n\r\n// .footer{\r\n//     display: flex;\r\n//     // justify-content: center;\r\n//     // align-items: center;\r\n//     width: 100%;\r\n//     height: 20px;\r\n//     // position: relative;\r\n//     border:rgb(121, 223, 83) solid \r\n// }\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"side_right_container": "pages_side_right_container__3v817",
	"wrap_title": "pages_wrap_title__1j1y-",
	"title": "pages_title__N-m82",
	"title_transtion": "pages_title_transtion__3QfHE",
	"subtitle": "pages_subtitle__2R5tI",
	"line_horizontal": "pages_line_horizontal__3E6n4",
	"line_horizontal_transtion": "pages_line_horizontal_transtion__mJsLb"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybWF0aW9uLmZiYjBmNjMyZGJlYzgyMTE1YTY1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOzs7O0FBRUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQixzQkFDQTtBQUFBLDJCQUNJO0FBQUksZUFBUyxFQUFFRCxxRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQU9ILENBUkQ7O0FBU0EsK0RBQWVDLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBLFVBQVUsbUJBQU8sQ0FBQyxvTkFBd0c7QUFDMUgsMEJBQTBCLG1CQUFPLENBQUMsaXlCQUE4WTs7QUFFaGI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2QseUJBQXlCLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0saXlCQUE4WTtBQUNwWjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGl5QkFBOFk7O0FBRXhhOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7O0FDbkZBO0FBQ0Es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QixhQUFhLCtCQUErQixpREFBaUQsc0NBQXNDLFNBQVMsS0FBSywrQkFBK0IsV0FBVyx3QkFBd0IsNEJBQTRCLG9EQUFvRCx3Q0FBd0Msb0NBQW9DLCtCQUErQix3QkFBd0IsYUFBYSwrQkFBK0Isd0JBQXdCLHlCQUF5QixpREFBaUQsOENBQThDLEtBQUssbUJBQW1CLHlCQUF5QixzQ0FBc0Msa0NBQWtDLHVCQUF1Qix3QkFBd0IsaUNBQWlDLGtEQUFrRCwyQkFBMkI7QUFDNzhPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybWF0aW9uLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc2Fzcy9wYWdlcy5tb2R1bGUuc2Nzcz9iODE3Iiwid2VicGFjazovL19OX0UvLi9zYXNzL3BhZ2VzLm1vZHVsZS5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zYXNzL3BhZ2VzLm1vZHVsZS5zY3NzJ1xyXG4vL2ltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IGZvcm1hdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICBmb3JtYXRpb25cclxuICAgICAgICA8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0aW9uIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbM10udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsyXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbM10hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbM10udXNlWzRdIS4vcGFnZXMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbM10udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsyXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbM10hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbM10udXNlWzRdIS4vcGFnZXMubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbM10udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsyXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbM10hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbM10udXNlWzRdIS4vcGFnZXMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2VzX3NpZGVfcmlnaHRfY29udGFpbmVyX18zdjgxNyB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAyMCU7XFxuICB3aWR0aDogODAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDBweDtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNzUzO1xcbiAgLypmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMwZGVnLCAjMTUxNzUzLCAjMmEyZDdhLCAjMjMyNTVkLCAjMTcxNzNhKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjBkZWcsICMxNTE3NTMsICMyYTJkN2EsICMyMzI1NWQsICMxNzE3M2EpO1xcbn1cXG5cXG4ucGFnZXNfd3JhcF90aXRsZV9fMWoxeS0ge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAyZW07XFxufVxcblxcbi5wYWdlc190aXRsZV9fTi1tODIge1xcbiAgY29sb3I6ICMwQ0I0RkY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYWdlc190aXRsZV90cmFuc3Rpb25fXzNRZkhFIDEuNXMgYm90aDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwYWdlc190aXRsZV90cmFuc3Rpb25fXzNRZkhFIDEuNXMgYm90aDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wYWdlc19zdWJ0aXRsZV9fMlI1dEkge1xcbiAgY29sb3I6ICNBNUM4RkI7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQnVuZ2VlIEhhaXJsaW5lXFxcIiwgY3Vyc2l2ZTtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFnZXNfdGl0bGVfdHJhbnN0aW9uX18zUWZIRSAxLjVzIDAuNnMgYm90aDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwYWdlc190aXRsZV90cmFuc3Rpb25fXzNRZkhFIDEuNXMgMC42cyBib3RoO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnBhZ2VzX2xpbmVfaG9yaXpvbnRhbF9fM0U2bjQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDBweCAwcHg7XFxuICBjb2xvcjogIzMxNDY2NTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYWdlc19saW5lX2hvcml6b250YWxfdHJhbnN0aW9uX19tSnNMYiAxLjVzIDAuMnMgYm90aDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwYWdlc19saW5lX2hvcml6b250YWxfdHJhbnN0aW9uX19tSnNMYiAxLjVzIDAuMnMgYm90aDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHBhZ2VzX2xpbmVfaG9yaXpvbnRhbF90cmFuc3Rpb25fX21Kc0xiIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDEsIDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IC0xMDAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IC0xMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcGFnZXNfbGluZV9ob3Jpem9udGFsX3RyYW5zdGlvbl9fbUpzTGIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLCAxLCAxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogLTEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogLTEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHBhZ2VzX3RpdGxlX3RyYW5zdGlvbl9fM1FmSEUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwJSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogLTEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogLTEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHBhZ2VzX3RpdGxlX3RyYW5zdGlvbl9fM1FmSEUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwJSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogLTEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogLTEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBbUJBO0VBQ0ksaUJBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7RUFBQSwwQkFBQTtPQUFBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFBbUMsNkNBQUE7RUFDbkMscUZBQUE7RUFBQSw2RUFBQTtBQWpCSjs7QUFxQkE7RUFDSSxpQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLDBCQUFBO09BQUEsc0JBQUE7RUFDQSxxQkFBQTtPQUFBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBbEJKOztBQXNCQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7RUFDQSxVQUFBO0FBbkJKOztBQXNCQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSw4REFBQTtVQUFBLHNEQUFBO0VBQ0EsVUFBQTtBQW5CSjs7QUFzQkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx3RUFBQTtVQUFBLGdFQUFBO0FBbkJKOztBQXNCQTtFQUNJO0lBRUksbUNBQUE7WUFBQSwyQkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7SUFDQSxrQkFBQTtFQXBCTjtFQXVCRTtJQUNJLGtCQUFBO0lBRUEsbUNBQUE7WUFBQSwyQkFBQTtFQXRCTjtBQUNGOztBQVVBO0VBQ0k7SUFFSSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtJQUNBLGtCQUFBO0VBcEJOO0VBdUJFO0lBQ0ksa0JBQUE7SUFFQSxtQ0FBQTtZQUFBLDJCQUFBO0VBdEJOO0FBQ0Y7QUF3QkE7RUFDSTtJQUNJLFVBQUE7SUFHQSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtJQUNBLGtCQUFBO0VBeEJOO0VBMkJFO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBR0EsaUNBQUE7WUFBQSx5QkFBQTtFQTNCTjtBQUNGO0FBV0E7RUFDSTtJQUNJLFVBQUE7SUFHQSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtJQUNBLGtCQUFBO0VBeEJOO0VBMkJFO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBR0EsaUNBQUE7WUFBQSx5QkFBQTtFQTNCTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIC5ib2R5e1xcclxcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbi8vICAgICAvL3Bvc2l0aW9uIG5lY2Vzc2FyaW8gcHJvIG92ZXJmbG93IGZ1bmNpb25hciBuYSBhbmltYcOnw6NvIGRlIGVzY2FsYSBcXHJcXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlOyBcXHJcXG4vLyAgICAgd2lkdGg6IDEwMCU7XFxyXFxuLy8gICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEsIDIzLCA4Myk7IC8qZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzKi9cXHJcXG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyMGRlZywgcmdiKDIxLCAyMywgODMpLHJnYig0MiwgNDUsIDEyMiksIHJnYigzNSwgMzcsIDkzKSwgcmdiKDIzLCAyMywgNTgpKTsgIFxcclxcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuOyBcXHJcXG4vLyB9XFxyXFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vQ09NTVVOUyBTVFlMRS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxyXFxuLy8gLnNlY3Rpb25MZWZ0e1xcclxcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuLy8gICAgIHdpZHRoOiAyMCU7XFxyXFxuLy8gICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzAsIDApO1xcclxcbi8vICAgICB6LWluZGV4OiA5OTk7XFxyXFxuLy8gfVxcclxcblxcclxcbi5zaWRlX3JpZ2h0X2NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogMjAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxLCAyMywgODMpOyAvKmZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyovXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjBkZWcsIHJnYigyMSwgMjMsIDgzKSxyZ2IoNDIsIDQ1LCAxMjIpLCByZ2IoMzUsIDM3LCA5MyksIHJnYigyMywgMjMsIDU4KSk7ICBcXHJcXG59XFxyXFxuXFxyXFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vRklNIENPTU1VTlMgU1RZTEUvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcclxcbi53cmFwX3RpdGxle1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxyXFxuICAgIC8vIGJvcmRlcjpyZ2IoMjU1LCAyMzAsIDApIHNvbGlkIDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxleyBcXHJcXG4gICAgY29sb3I6ICMwQ0I0RkY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBhbmltYXRpb246IHRpdGxlX3RyYW5zdGlvbiAxLjVzIGJvdGg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZXtcXHJcXG4gICAgY29sb3I6ICNBNUM4RkI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICBmb250LWZhbWlseTogICdCdW5nZWUgSGFpcmxpbmUnLCBjdXJzaXZlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcclxcbiAgICBhbmltYXRpb246IHRpdGxlX3RyYW5zdGlvbiAxLjVzIDAuNnMgYm90aDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmVfaG9yaXpvbnRhbHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4IDBweCAwcHggMHB4O1xcclxcbiAgICBjb2xvcjogIzMxNDY2NTtcXHJcXG4gICAgYW5pbWF0aW9uOiBsaW5lX2hvcml6b250YWxfdHJhbnN0aW9uIDEuNXMgMC4ycyBib3RoOyBcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsaW5lX2hvcml6b250YWxfdHJhbnN0aW9ue1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIC8vIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLDEsMSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAtMTAwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgIFxcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAvLyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwxLDEpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgdGl0bGVfdHJhbnN0aW9ue1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7IFxcclxcbiAgICAgICAgLy8gcmlnaHQ6IC0xMDAlO1xcclxcbiAgICAgICAgLy8gLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMCUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogLTEwMCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICBcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTsgXFxyXFxuICAgICAgICAvLyByaWdodDogMCU7XFxyXFxuICAgICAgICAvLyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gLmZvb3RlcntcXHJcXG4vLyAgICAgZGlzcGxheTogZmxleDtcXHJcXG4vLyAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuLy8gICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuLy8gICAgIHdpZHRoOiAxMDAlO1xcclxcbi8vICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuLy8gICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4vLyAgICAgYm9yZGVyOnJnYigxMjEsIDIyMywgODMpIHNvbGlkIFxcclxcbi8vIH1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzaWRlX3JpZ2h0X2NvbnRhaW5lclwiOiBcInBhZ2VzX3NpZGVfcmlnaHRfY29udGFpbmVyX18zdjgxN1wiLFxuXHRcIndyYXBfdGl0bGVcIjogXCJwYWdlc193cmFwX3RpdGxlX18xajF5LVwiLFxuXHRcInRpdGxlXCI6IFwicGFnZXNfdGl0bGVfX04tbTgyXCIsXG5cdFwidGl0bGVfdHJhbnN0aW9uXCI6IFwicGFnZXNfdGl0bGVfdHJhbnN0aW9uX18zUWZIRVwiLFxuXHRcInN1YnRpdGxlXCI6IFwicGFnZXNfc3VidGl0bGVfXzJSNXRJXCIsXG5cdFwibGluZV9ob3Jpem9udGFsXCI6IFwicGFnZXNfbGluZV9ob3Jpem9udGFsX18zRTZuNFwiLFxuXHRcImxpbmVfaG9yaXpvbnRhbF90cmFuc3Rpb25cIjogXCJwYWdlc19saW5lX2hvcml6b250YWxfdHJhbnN0aW9uX19tSnNMYlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJyZWFjdCIsInN0eWxlcyIsImZvcm1hdGlvbiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9