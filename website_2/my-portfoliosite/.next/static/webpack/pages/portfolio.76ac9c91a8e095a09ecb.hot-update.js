self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./components/TitleSubtitle.js":
/*!*************************************!*\
  !*** ./components/TitleSubtitle.js ***!
  \*************************************/
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
var _jsxFileName = "C:\\Users\\User\\Desktop\\Sites\\website_2\\my-portfoliosite\\components\\TitleSubtitle.js",
    _this = undefined;





var TitleSubtitle = function TitleSubtitle(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wrap_title),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default().line_horizontal)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default().subtitle),
      children: props.subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, _this);
};

_c = TitleSubtitle;
/* harmony default export */ __webpack_exports__["default"] = (TitleSubtitle);

var _c;

$RefreshReg$(_c, "TitleSubtitle");

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

/***/ "./pages/portfolio.jsx":
/*!*****************************!*\
  !*** ./pages/portfolio.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TitleSubtitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TitleSubtitle */ "./components/TitleSubtitle.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\User\\Desktop\\Sites\\website_2\\my-portfoliosite\\pages\\portfolio.jsx",
    _this = undefined;






var portfolio = function portfolio(_ref) {
  var props = _ref.props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      children: "portfolio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      children: "subtitle"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);
  {
    props.portfolio;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (portfolio);

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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    // istanbul ignore next
                    styleTarget = null;
                }
            }
            memo[target] = styleTarget;
        }
        return memo[target];
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

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
___CSS_LOADER_EXPORT___.push([module.id, ".pages_body__35Xcg {\n  display: -moz-box;\n  display: flex;\n  position: absolute;\n  width: 100%;\n  max-height: 100vh;\n  background-color: #151753;\n  /*for browsers that do not support gradients*/\n  background-image: -webkit-linear-gradient(130deg, #151753, #2a2d7a, #23255d, #17173a);\n  background-image: linear-gradient(320deg, #151753, #2a2d7a, #23255d, #17173a);\n  overflow: hidden;\n}\n\n.pages_side_right_container__3v817 {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  position: relative;\n  left: 20%;\n  width: 80%;\n  min-height: 100vh;\n  margin: 0px;\n  -moz-box-align: center;\n       align-items: center;\n  font-size: 10px;\n  background-color: #151753;\n  /*for browsers that do not support gradients*/\n  background-image: -webkit-linear-gradient(130deg, #151753, #2a2d7a, #23255d, #17173a);\n  background-image: linear-gradient(320deg, #151753, #2a2d7a, #23255d, #17173a);\n}\n\n.pages_wrap_title__1j1y- {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-pack: center;\n       justify-content: center;\n  width: 90%;\n  height: auto;\n  margin-top: 2em;\n}\n\n.pages_title__N-m82 {\n  color: #0CB4FF;\n  font-weight: bold;\n  -webkit-animation: pages_title_transtion__3QfHE 1.5s both;\n          animation: pages_title_transtion__3QfHE 1.5s both;\n  opacity: 0;\n}\n\n.pages_subtitle__2R5tI {\n  color: #A5C8FB;\n  font-weight: lighter;\n  font-family: \"Bungee Hairline\", cursive;\n  letter-spacing: 5px;\n  -webkit-animation: pages_title_transtion__3QfHE 1.5s 0.6s both;\n          animation: pages_title_transtion__3QfHE 1.5s 0.6s both;\n  opacity: 0;\n}\n\n.pages_line_horizontal__3E6n4 {\n  width: 100%;\n  border-style: solid;\n  border-width: 1px 0px 0px 0px;\n  color: #314665;\n  -webkit-animation: pages_line_horizontal_transtion__mJsLb 1.5s 0.2s both;\n          animation: pages_line_horizontal_transtion__mJsLb 1.5s 0.2s both;\n}\n\n@-webkit-keyframes pages_line_horizontal_transtion__mJsLb {\n  0% {\n    -webkit-transform: scale3d(0, 1, 1);\n            transform: scale3d(0, 1, 1);\n    -webkit-transform-origin: -100%;\n            transform-origin: -100%;\n    position: relative;\n  }\n  100% {\n    position: relative;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pages_line_horizontal_transtion__mJsLb {\n  0% {\n    -webkit-transform: scale3d(0, 1, 1);\n            transform: scale3d(0, 1, 1);\n    -webkit-transform-origin: -100%;\n            transform-origin: -100%;\n    position: relative;\n  }\n  100% {\n    position: relative;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n@-webkit-keyframes pages_title_transtion__3QfHE {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-30%);\n            transform: translateX(-30%);\n    -webkit-transform-origin: -100%;\n            transform-origin: -100%;\n    position: relative;\n  }\n  100% {\n    position: relative;\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n@keyframes pages_title_transtion__3QfHE {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-30%);\n            transform: translateX(-30%);\n    -webkit-transform-origin: -100%;\n            transform-origin: -100%;\n    position: relative;\n  }\n  100% {\n    position: relative;\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}", "",{"version":3,"sources":["webpack://pages.module.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EAAA,aAAA;EAEA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,yBAAA;EAAmC,6CAAA;EACnC,qFAAA;EAAA,6EAAA;EACA,gBAAA;AACJ;;AAUA;EACI,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,iBAAA;EACA,WAAA;EACA,sBAAA;OAAA,mBAAA;EACA,eAAA;EACA,yBAAA;EAAmC,6CAAA;EACnC,qFAAA;EAAA,6EAAA;AANJ;;AAUA;EACI,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,qBAAA;OAAA,uBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;AAPJ;;AAWA;EACI,cAAA;EACA,iBAAA;EACA,yDAAA;UAAA,iDAAA;EACA,UAAA;AARJ;;AAWA;EACI,cAAA;EACA,oBAAA;EACA,uCAAA;EACA,mBAAA;EACA,8DAAA;UAAA,sDAAA;EACA,UAAA;AARJ;;AAWA;EACI,WAAA;EACA,mBAAA;EACA,6BAAA;EACA,cAAA;EACA,wEAAA;UAAA,gEAAA;AARJ;;AAWA;EACI;IAEI,mCAAA;YAAA,2BAAA;IACA,+BAAA;YAAA,uBAAA;IACA,kBAAA;EATN;EAYE;IACI,kBAAA;IAEA,mCAAA;YAAA,2BAAA;EAXN;AACF;;AADA;EACI;IAEI,mCAAA;YAAA,2BAAA;IACA,+BAAA;YAAA,uBAAA;IACA,kBAAA;EATN;EAYE;IACI,kBAAA;IAEA,mCAAA;YAAA,2BAAA;EAXN;AACF;AAaA;EACI;IACI,UAAA;IAGA,mCAAA;YAAA,2BAAA;IACA,+BAAA;YAAA,uBAAA;IACA,kBAAA;EAbN;EAgBE;IACI,kBAAA;IACA,UAAA;IAGA,iCAAA;YAAA,yBAAA;EAhBN;AACF;AAAA;EACI;IACI,UAAA;IAGA,mCAAA;YAAA,2BAAA;IACA,+BAAA;YAAA,uBAAA;IACA,kBAAA;EAbN;EAgBE;IACI,kBAAA;IACA,UAAA;IAGA,iCAAA;YAAA,yBAAA;EAhBN;AACF","sourcesContent":[".body{\r\n    display: flex;\r\n    //position necessario pro overflow funcionar na animação de escala \r\n    position: absolute; \r\n    width: 100%;\r\n    max-height: 100vh;\r\n    background-color: rgb(21, 23, 83); /*for browsers that do not support gradients*/\r\n    background-image: linear-gradient(320deg, rgb(21, 23, 83),rgb(42, 45, 122), rgb(35, 37, 93), rgb(23, 23, 58));  \r\n    overflow: hidden; \r\n}\r\n////////////////////////////////////////////////COMMUNS STYLE////////////////////////////////\r\n// .sectionLeft{\r\n//     position: relative;\r\n//     width: 20%;\r\n//     min-height: 100vh;\r\n//     background-color: rgb(255, 230, 0);\r\n//     z-index: 999;\r\n// }\r\n\r\n.side_right_container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    left: 20%;\r\n    width: 80%;\r\n    min-height: 100vh;\r\n    margin: 0px;\r\n    align-items: center;\r\n    font-size: 10px;\r\n    background-color: rgb(21, 23, 83); /*for browsers that do not support gradients*/\r\n    background-image: linear-gradient(320deg, rgb(21, 23, 83),rgb(42, 45, 122), rgb(35, 37, 93), rgb(23, 23, 58));  \r\n}\r\n\r\n////////////////////////////////////////////////FIM COMMUNS STYLE////////////////////////////////\r\n.wrap_title{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 90%;\r\n    height: auto;\r\n    margin-top: 2em;\r\n    // border:rgb(255, 230, 0) solid 2px;\r\n}\r\n\r\n.title{ \r\n    color: #0CB4FF;\r\n    font-weight: bold;\r\n    animation: title_transtion 1.5s both;\r\n    opacity: 0;\r\n}\r\n\r\n.subtitle{\r\n    color: #A5C8FB;\r\n    font-weight: lighter;\r\n    font-family:  'Bungee Hairline', cursive;\r\n    letter-spacing: 5px;\r\n    animation: title_transtion 1.5s 0.6s both;\r\n    opacity: 0;\r\n}\r\n\r\n.line_horizontal{\r\n    width: 100%;\r\n    border-style: solid;\r\n    border-width: 1px 0px 0px 0px;\r\n    color: #314665;\r\n    animation: line_horizontal_transtion 1.5s 0.2s both; \r\n}\r\n\r\n@keyframes line_horizontal_transtion{\r\n    0%{\r\n        // -webkit-transform: translateX(-100%);\r\n        transform: scale3d(0,1,1);\r\n        transform-origin: -100%;\r\n        position: relative;\r\n           \r\n    }\r\n    100%{\r\n        position: relative;\r\n        // -webkit-transform: translateX(0%);\r\n        transform: scale3d(1,1,1);\r\n    }\r\n}\r\n@keyframes title_transtion{\r\n    0%{\r\n        opacity: 0; \r\n        // right: -100%;\r\n        // -webkit-transform: translateX(-100%);\r\n        transform: translateX(-30%);\r\n        transform-origin: -100%;\r\n        position: relative;\r\n           \r\n    }\r\n    100%{\r\n        position: relative;\r\n        opacity: 1; \r\n        // right: 0%;\r\n        // -webkit-transform: translateX(0%);\r\n        transform: translateX(0%)\r\n    }\r\n}\r\n\r\n// .footer{\r\n//     display: flex;\r\n//     // justify-content: center;\r\n//     // align-items: center;\r\n//     width: 100%;\r\n//     height: 20px;\r\n//     // position: relative;\r\n//     border:rgb(121, 223, 83) solid \r\n// }\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"body": "pages_body__35Xcg",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGZvbGlvLjc2YWM5YzkxYThlMDk1YTA5ZWNiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUM3QixzQkFDSTtBQUFLLGFBQVMsRUFBSUYsMkVBQWxCO0FBQUEsNEJBRUk7QUFBSyxlQUFTLEVBQUlBLHNFQUFsQjtBQUFBLGdCQUNLRSxLQUFLLENBQUNFO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBTUk7QUFBTSxlQUFTLEVBQUlKLGdGQUFzQks7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KLGVBUUk7QUFBSSxlQUFTLEVBQUlMLHlFQUFqQjtBQUFBLGdCQUNLRSxLQUFLLENBQUNJO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBY0gsQ0FmRDs7S0FBTUw7QUFpQk4sK0RBQWVBLGFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWE7QUFBQSxNQUFYTCxLQUFXLFFBQVhBLEtBQVc7QUFDM0Isc0JBRUk7QUFBQSw0QkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILGVBRUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQU9BO0FBQUNBLElBQUFBLEtBQUssQ0FBQ0ssU0FBTjtBQUFnQjtBQUNwQixDQVREOztBQVVBLCtEQUFlQSxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGl0bGVTdWJ0aXRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc2Fzcy9wYWdlcy5tb2R1bGUuc2Nzcz9iODE3Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2Fzcy9wYWdlcy5tb2R1bGUuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3Nhc3MvcGFnZXMubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBUaXRsZVN1YnRpdGxlID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy53cmFwX3RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lID0ge3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLmxpbmVfaG9yaXpvbnRhbH0+PC9zcGFuPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9IHtzdHlsZXMuc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlU3VidGl0bGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zYXNzL3BhZ2VzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgVGl0bGVTdWJ0aXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlU3VidGl0bGUnXHJcblxyXG5jb25zdCBwb3J0Zm9saW8gPSAoe3Byb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIDxoMT5wb3J0Zm9saW88L2gxPlxyXG4gICAgICAgICAgIDxoMj5zdWJ0aXRsZTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAge3Byb3BzLnBvcnRmb2xpb31cclxufVxyXG5leHBvcnQgZGVmYXVsdCBwb3J0Zm9saW8iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbM10udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbNF0hLi9wYWdlcy5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbM10udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbNF0hLi9wYWdlcy5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbM10udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbNF0hLi9wYWdlcy5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFMSgpIHtcbiAgICBsZXQgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAgICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAgICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG59KCk7XG5jb25zdCBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQxKCkge1xuICAgIGNvbnN0IG1lbW8gPSB7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbGV0IHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICAgICAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgICAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gICAgfTtcbn0oKTtcbmNvbnN0IHN0eWxlc0luRG9tID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgbGV0IHJlc3VsdCA9IC0xO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gICAgY29uc3QgaWRDb3VudE1hcCA9IHtcbiAgICB9O1xuICAgIGNvbnN0IGlkZW50aWZpZXJzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBpdGVtID0gbGlzdFtpXTtcbiAgICAgICAgY29uc3QgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICAgICAgY29uc3QgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gaWQgKyAnICcgKyBjb3VudC50b1N0cmluZygpO1xuICAgICAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICAgICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICAgICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IG5vbmNlID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICAgIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi8gY29uc3QgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dDEoKSB7XG4gICAgY29uc3QgdGV4dFN0b3JlID0gW107XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gICAgfTtcbn0oKTtcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICAgIGNvbnN0IGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gJ0BtZWRpYSAnICsgb2JqLm1lZGlhICsgJyB7JyArIG9iai5jc3MgKyAnfScgOiBvYmouY3NzO1xuICAgIC8vIEZvciBvbGQgSUVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcbiAgICAgICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgICBsZXQgY3NzID0gb2JqLmNzcztcbiAgICBjb25zdCBtZWRpYSA9IG9iai5tZWRpYTtcbiAgICBjb25zdCBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICAgIGlmIChtZWRpYSkge1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLyc7XG4gICAgfVxuICAgIC8vIEZvciBvbGQgSUVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZShzdHlsZS5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbn1cbmxldCBzaW5nbGV0b24gPSBudWxsO1xubGV0IHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gICAgbGV0IHN0eWxlO1xuICAgIGxldCB1cGRhdGU7XG4gICAgbGV0IHJlbW92ZTtcbiAgICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICAgICAgY29uc3Qgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICAgICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgICAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuICAgICAgICByZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHVwZGF0ZShvYmopO1xuICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICAgICAgaWYgKG5ld09iaikge1xuICAgICAgICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge1xuICAgIH07XG4gICAgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gICAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuICAgIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gICAgfVxuICAgIGxpc3QgPSBsaXN0IHx8IFtdO1xuICAgIGxldCBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgICBmb3IobGV0IGkxID0gMDsgaTEgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpMSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaTFdO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGlmIChzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gICAgfTtcbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZXNfYm9keV9fMzVYY2cge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE3NTM7XFxuICAvKmZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzBkZWcsICMxNTE3NTMsICMyYTJkN2EsICMyMzI1NWQsICMxNzE3M2EpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyMGRlZywgIzE1MTc1MywgIzJhMmQ3YSwgIzIzMjU1ZCwgIzE3MTczYSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucGFnZXNfc2lkZV9yaWdodF9jb250YWluZXJfXzN2ODE3IHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDIwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE3NTM7XFxuICAvKmZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzBkZWcsICMxNTE3NTMsICMyYTJkN2EsICMyMzI1NWQsICMxNzE3M2EpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyMGRlZywgIzE1MTc1MywgIzJhMmQ3YSwgIzIzMjU1ZCwgIzE3MTczYSk7XFxufVxcblxcbi5wYWdlc193cmFwX3RpdGxlX18xajF5LSB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuXFxuLnBhZ2VzX3RpdGxlX19OLW04MiB7XFxuICBjb2xvcjogIzBDQjRGRjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhZ2VzX3RpdGxlX3RyYW5zdGlvbl9fM1FmSEUgMS41cyBib3RoO1xcbiAgICAgICAgICBhbmltYXRpb246IHBhZ2VzX3RpdGxlX3RyYW5zdGlvbl9fM1FmSEUgMS41cyBib3RoO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnBhZ2VzX3N1YnRpdGxlX18yUjV0SSB7XFxuICBjb2xvcjogI0E1QzhGQjtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCdW5nZWUgSGFpcmxpbmVcXFwiLCBjdXJzaXZlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYWdlc190aXRsZV90cmFuc3Rpb25fXzNRZkhFIDEuNXMgMC42cyBib3RoO1xcbiAgICAgICAgICBhbmltYXRpb246IHBhZ2VzX3RpdGxlX3RyYW5zdGlvbl9fM1FmSEUgMS41cyAwLjZzIGJvdGg7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucGFnZXNfbGluZV9ob3Jpem9udGFsX18zRTZuNCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDFweCAwcHggMHB4IDBweDtcXG4gIGNvbG9yOiAjMzE0NjY1O1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhZ2VzX2xpbmVfaG9yaXpvbnRhbF90cmFuc3Rpb25fX21Kc0xiIDEuNXMgMC4ycyBib3RoO1xcbiAgICAgICAgICBhbmltYXRpb246IHBhZ2VzX2xpbmVfaG9yaXpvbnRhbF90cmFuc3Rpb25fX21Kc0xiIDEuNXMgMC4ycyBib3RoO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcGFnZXNfbGluZV9ob3Jpem9udGFsX3RyYW5zdGlvbl9fbUpzTGIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLCAxLCAxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogLTEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogLTEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBwYWdlc19saW5lX2hvcml6b250YWxfdHJhbnN0aW9uX19tSnNMYiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAxLCAxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAtMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAtMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcGFnZXNfdGl0bGVfdHJhbnN0aW9uX18zUWZIRSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAlKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAtMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAtMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcGFnZXNfdGl0bGVfdHJhbnN0aW9uX18zUWZIRSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAlKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAtMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAtMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGlCQUFBO0VBQUEsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFBbUMsNkNBQUE7RUFDbkMscUZBQUE7RUFBQSw2RUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBVUE7RUFDSSxpQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLDBCQUFBO09BQUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7T0FBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUFtQyw2Q0FBQTtFQUNuQyxxRkFBQTtFQUFBLDZFQUFBO0FBTko7O0FBVUE7RUFDSSxpQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLDBCQUFBO09BQUEsc0JBQUE7RUFDQSxxQkFBQTtPQUFBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBUEo7O0FBV0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5REFBQTtVQUFBLGlEQUFBO0VBQ0EsVUFBQTtBQVJKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLDhEQUFBO1VBQUEsc0RBQUE7RUFDQSxVQUFBO0FBUko7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx3RUFBQTtVQUFBLGdFQUFBO0FBUko7O0FBV0E7RUFDSTtJQUVJLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0lBQ0Esa0JBQUE7RUFUTjtFQVlFO0lBQ0ksa0JBQUE7SUFFQSxtQ0FBQTtZQUFBLDJCQUFBO0VBWE47QUFDRjs7QUFEQTtFQUNJO0lBRUksbUNBQUE7WUFBQSwyQkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7SUFDQSxrQkFBQTtFQVROO0VBWUU7SUFDSSxrQkFBQTtJQUVBLG1DQUFBO1lBQUEsMkJBQUE7RUFYTjtBQUNGO0FBYUE7RUFDSTtJQUNJLFVBQUE7SUFHQSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtJQUNBLGtCQUFBO0VBYk47RUFnQkU7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFHQSxpQ0FBQTtZQUFBLHlCQUFBO0VBaEJOO0FBQ0Y7QUFBQTtFQUNJO0lBQ0ksVUFBQTtJQUdBLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0lBQ0Esa0JBQUE7RUFiTjtFQWdCRTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUdBLGlDQUFBO1lBQUEseUJBQUE7RUFoQk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9keXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLy9wb3NpdGlvbiBuZWNlc3NhcmlvIHBybyBvdmVyZmxvdyBmdW5jaW9uYXIgbmEgYW5pbWHDp8OjbyBkZSBlc2NhbGEgXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxLCAyMywgODMpOyAvKmZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyovXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjBkZWcsIHJnYigyMSwgMjMsIDgzKSxyZ2IoNDIsIDQ1LCAxMjIpLCByZ2IoMzUsIDM3LCA5MyksIHJnYigyMywgMjMsIDU4KSk7ICBcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXFxyXFxufVxcclxcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0NPTU1VTlMgU1RZTEUvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcclxcbi8vIC5zZWN0aW9uTGVmdHtcXHJcXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbi8vICAgICB3aWR0aDogMjAlO1xcclxcbi8vICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjMwLCAwKTtcXHJcXG4vLyAgICAgei1pbmRleDogOTk5O1xcclxcbi8vIH1cXHJcXG5cXHJcXG4uc2lkZV9yaWdodF9jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6IDIwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMjMsIDgzKTsgLypmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzIwZGVnLCByZ2IoMjEsIDIzLCA4MykscmdiKDQyLCA0NSwgMTIyKSwgcmdiKDM1LCAzNywgOTMpLCByZ2IoMjMsIDIzLCA1OCkpOyAgXFxyXFxufVxcclxcblxcclxcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0ZJTSBDT01NVU5TIFNUWUxFLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cXHJcXG4ud3JhcF90aXRsZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcclxcbiAgICAvLyBib3JkZXI6cmdiKDI1NSwgMjMwLCAwKSBzb2xpZCAycHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZXsgXFxyXFxuICAgIGNvbG9yOiAjMENCNEZGO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYW5pbWF0aW9uOiB0aXRsZV90cmFuc3Rpb24gMS41cyBib3RoO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VidGl0bGV7XFxyXFxuICAgIGNvbG9yOiAjQTVDOEZCO1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICAnQnVuZ2VlIEhhaXJsaW5lJywgY3Vyc2l2ZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXHJcXG4gICAgYW5pbWF0aW9uOiB0aXRsZV90cmFuc3Rpb24gMS41cyAwLjZzIGJvdGg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5saW5lX2hvcml6b250YWx7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDFweCAwcHggMHB4IDBweDtcXHJcXG4gICAgY29sb3I6ICMzMTQ2NjU7XFxyXFxuICAgIGFuaW1hdGlvbjogbGluZV9ob3Jpem9udGFsX3RyYW5zdGlvbiAxLjVzIDAuMnMgYm90aDsgXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbGluZV9ob3Jpem9udGFsX3RyYW5zdGlvbntcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICAvLyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwxLDEpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogLTEwMCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICBcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgLy8gLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsMSwxKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHRpdGxlX3RyYW5zdGlvbntcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwOyBcXHJcXG4gICAgICAgIC8vIHJpZ2h0OiAtMTAwJTtcXHJcXG4gICAgICAgIC8vIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAlKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IC0xMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgXFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7IFxcclxcbiAgICAgICAgLy8gcmlnaHQ6IDAlO1xcclxcbiAgICAgICAgLy8gLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8vIC5mb290ZXJ7XFxyXFxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuLy8gICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbi8vICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbi8vICAgICB3aWR0aDogMTAwJTtcXHJcXG4vLyAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbi8vICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuLy8gICAgIGJvcmRlcjpyZ2IoMTIxLCAyMjMsIDgzKSBzb2xpZCBcXHJcXG4vLyB9XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYm9keVwiOiBcInBhZ2VzX2JvZHlfXzM1WGNnXCIsXG5cdFwic2lkZV9yaWdodF9jb250YWluZXJcIjogXCJwYWdlc19zaWRlX3JpZ2h0X2NvbnRhaW5lcl9fM3Y4MTdcIixcblx0XCJ3cmFwX3RpdGxlXCI6IFwicGFnZXNfd3JhcF90aXRsZV9fMWoxeS1cIixcblx0XCJ0aXRsZVwiOiBcInBhZ2VzX3RpdGxlX19OLW04MlwiLFxuXHRcInRpdGxlX3RyYW5zdGlvblwiOiBcInBhZ2VzX3RpdGxlX3RyYW5zdGlvbl9fM1FmSEVcIixcblx0XCJzdWJ0aXRsZVwiOiBcInBhZ2VzX3N1YnRpdGxlX18yUjV0SVwiLFxuXHRcImxpbmVfaG9yaXpvbnRhbFwiOiBcInBhZ2VzX2xpbmVfaG9yaXpvbnRhbF9fM0U2bjRcIixcblx0XCJsaW5lX2hvcml6b250YWxfdHJhbnN0aW9uXCI6IFwicGFnZXNfbGluZV9ob3Jpem9udGFsX3RyYW5zdGlvbl9fbUpzTGJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJUaXRsZVN1YnRpdGxlIiwicHJvcHMiLCJ3cmFwX3RpdGxlIiwidGl0bGUiLCJsaW5lX2hvcml6b250YWwiLCJzdWJ0aXRsZSIsInBvcnRmb2xpbyJdLCJzb3VyY2VSb290IjoiIn0=