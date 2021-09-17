"use strict";
self["webpackHotUpdate_N_E"]("pages/skills",{

/***/ "./components/Particles.js":
/*!*********************************!*\
  !*** ./components/Particles.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\User\\Desktop\\Sites\\website_2\\my-portfoliosite\\components\\Particles.js",
    _this = undefined;




window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

$(document).ready(function () {
  $('#canvas').mousedown(function () {
    settings.velocity_x += 2;
  }).mouseup(function () {
    settings.velocity_x -= 2;
  });

  star = function star() {
    this.offset = 0;
    this.x = 0, this.y = 0, this.params = {
      velocity_x: 1,
      velocity_y: 1,
      opacicty: 1,
      lifetime: 3,
      x_offset: 0,
      y_offset: 0,
      radius: 0,
      decay: 0,
      growth: 0,
      amplitude: 100,
      phaseshift: 360,
      freq: 0.05,
      color: '255,255,255'
    };
  };

  star.prototype.init = function () {
    //Randomize
    this.params.phaseshift = Math.random() * 0.01;
    this.params.amplitude = Math.ceil(Math.random() * settings.amplitudeSeed);
    this.params.freq = Math.random() * settings.freqSeed;
    this.params.x_offset = Math.ceil(Math.random() * 1000);
    this.params.y_offset = settings.y_center + Math.ceil(Math.random() * settings.y_offsetSeed);
    this.params.lifetime = Math.ceil(Math.random() * 3);
    this.params.velocity_x = Math.random() * settings.velocity_xSeed;
    this.params.velocity_y = Math.random() * settings.velocity_ySeed;
    this.params.radius = Math.random() * settings.maxradius;
    this.params.opacity = Math.round(Math.random() * settings.opacSeed, 2) / 100;

    if (settings.decay) {
      this.params.decay = Math.round(Math.random() * 1.5) * Math.random() * 0.01;
    }

    if (settings.growth) {
      this.params.growth = Math.round(Math.random() * 1.2) * Math.random() * 0.01;
    }

    if (settings.irregColors) {
      switch (Math.ceil(Math.random() * settings.colorPct)) {
        case 1:
          this.params.color = '255,0,0';
          break;

        case 2:
          this.params.color = '0,255,255';
          break;

        case 3:
          this.params.color = '0,255,200';
          break;

        case 4:
          this.params.color = '255,0,255';
          break;

        default:
          this.params.color = '255,255,255';
          break;
      }
    }

    this.x = this.params.x_offset;
  };

  star.prototype.draw = function (ctx, new_x) {
    this.offset = this.offset + 1;
    var t = this.params.x_offset + this.offset;

    if (this.params.opacity > settings.opacMax) {
      this.params.decay *= -1;
      this.params.lifetime--;
    } else if (this.params.opacity <= settings.opacMin) {
      this.params.lifetime--;
      this.params.decay *= -1;
      this.params.opacity = 0;
    }

    if (this.params.radius > settings.maxradius) {
      this.params.growth *= -1;
    } else if (this.params.radius <= 0.2) {
      this.params.growth *= -1;
      this.params.radius = 0.2;
    }

    this.params.radius += 2 * this.params.growth;
    this.params.opacity += 2 * this.params.decay;
    this.y = this.params.y_offset + this.params.amplitude / 4 * Math.sin((2 + t * settings.velocity_y * 0.03) * this.params.freq) * this.params.velocity_y * settings.scale_y;
    this.x += 1 * this.params.velocity_x * settings.velocity_x;
    ctx.beginPath();
    ctx.fillStyle = "rgba(" + this.params.color + "," + Math.round(this.params.opacity * 100) / 100 + ")";
    ctx.arc(this.x, this.y, this.params.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };

  settings = {
    velocity_x: 1,
    scale_y: 1,
    y_center: 250,
    y_offsetSeed: 0,
    velocity_y: 1,
    particles: 1100,
    maxradius: 7,
    irregColors: true,
    decay: true,
    growth: true,
    freqSeed: 1.4,
    amplitudeSeed: 200,
    velocity_xSeed: 3,
    velocity_ySeed: 3,
    opacMax: 0.601,
    opacMin: 0.01,
    opacSeed: 90,
    colorPct: 10
  };
  var stars = [];

  init = function init() {
    for (i = 0; i < settings.particles; i++) {
      stars[i] = new star();
      stars[i].init();
    }
  };

  var gui = new dat.GUI();
  gui.add(settings, 'velocity_x', -10.1, 10.1);
  gui.add(settings, 'velocity_y', 0.0, 10.111);
  gui.add(settings, 'scale_y', -10.1, 10.1);
  gui.add(settings, 'y_offsetSeed', 0, 500).onChange(function (value) {
    init();
  });
  gui.add(settings, 'y_center', 0, 500).onChange(function (value) {
    init();
  });
  gui.add(settings, 'maxradius', 0.2, 100.1).onChange(function (value) {
    init();
  });
  gui.add(settings, 'decay').onChange(function (value) {
    init();
  });
  gui.add(settings, 'colorPct', 4, 100).onChange(function (value) {
    init();
  });
  gui.add(settings, 'growth').onChange(function (value) {
    init();
  });
  gui.add(settings, 'irregColors').onChange(function (value) {
    init();
  });
  gui.add(settings, 'particles', 1, 9000).onChange(function (value) {
    init();
  });
  gui.add(settings, 'freqSeed', 0.1, 30.1).onChange(function (value) {
    init();
  });
  gui.add(settings, 'amplitudeSeed', 1, 500).onChange(function (value) {
    init();
  });
  gui.add(settings, 'velocity_xSeed', 1, 10).onChange(function (value) {
    init();
  });
  gui.add(settings, 'velocity_ySeed', 1, 10).onChange(function (value) {
    init();
  });
  gui.add(settings, 'opacMax', 0.01, 1.00).onChange(function (value) {
    init();
  });
  gui.add(settings, 'opacMin', 0.01, 1.00).onChange(function (value) {
    init();
  });
  gui.add(settings, 'opacSeed', 1, 100).onChange(function (value) {
    init();
  });
  gui.open();

  var deg2rad = function deg2rad(angle) {
    return angle * .017453292519943295; // (angle / 180) * Math.PI;
  };

  var colorfreq = function colorfreq(i) {
    var frequency = .3;
    i = i % 32;
    var red = Math.ceil(Math.sin(frequency * i + 0) * 127 + 128);
    var green = Math.ceil(Math.sin(frequency * i + 2) * 127 + 128);
    var blue = Math.ceil(Math.sin(frequency * i + 4) * 127 + 128);
    return "rgba(" + red + "," + green + "," + blue + "," + settings.alpha + ")";
  };

  init();
  var ctx = document.getElementById("canvas").getContext('2d');
  var offset = 0;

  (function animloop() {
    requestAnimFrame(animloop);
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(0, 0, 1000, 1000);

    for (i = 0; i < settings.particles; i++) {
      stars[i].draw(ctx);
      ctx.beginPath();
      ctx.fill();

      if (stars[i].x > 998 || stars[i].params.lifetime < 0 && stars[i].params.opacity <= 0 || stars[i].y < 0 - settings.maxradius || stars[i].x < 0 - settings.maxradius || stars[i].y > 500 + settings.maxradius) {
        stars[i] = new star();
        stars[i].init();
        stars[i].params.x_offset = -1 * offset;
        stars[i].x -= Math.random() * 200;
        stars[i].params.opacity = 0;
      }
    }
  })();
});

var Particles = function Particles() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("canvas", {
      height: "500",
      width: "1000",
      className: styles.canvas,
      id: "canvas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 12
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 233,
    columnNumber: 9
  }, _this);
};

_c = Particles;
/* harmony default export */ __webpack_exports__["default"] = (Particles);

var _c;

$RefreshReg$(_c, "Particles");

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

/***/ "./pages/skills.jsx":
/*!**************************!*\
  !*** ./pages/skills.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sass/pages.module.scss */ "./sass/pages.module.scss");
/* harmony import */ var _sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _communs_components_SideLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../communs_components/SideLeft */ "./communs_components/SideLeft.js");
/* harmony import */ var _components_Particles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Particles.js */ "./components/Particles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\User\\Desktop\\Sites\\website_2\\my-portfoliosite\\pages\\skills.jsx",
    _this = undefined;








 // import SwithPage from '../components/SwithPage.js'



var skills = function skills() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("title", {
        children: "WebPortfolio: Abra\xE3o Morais"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("meta", {
        name: "keywords",
        content: "web developer, programmer, react, nextjs, javascript"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5/dat.gui.min.js",
        type: "text/javascript"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("main", {
      className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_8___default().body),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
        className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sectionLeft),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_communs_components_SideLeft__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
        id: "skills",
        className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_8___default().side_right_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_8___default().wrap_title),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
            className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),
            children: "Soft Skills"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_8___default().line_horizontal)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
            className: (_sass_pages_module_scss__WEBPACK_IMPORTED_MODULE_8___default().subtitle),
            children: "My personality and behavior"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
}; // export async function getServerSideProps() {
//     await new Promise((resolve)=>{
//         setTimeout(resolve, 2000)
//     })
//     return { props:{}}
// }


/* harmony default export */ __webpack_exports__["default"] = (skills);

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2tpbGxzLmQyZTU1MDIzNjhiYTBjMDk3N2Q3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUVBQyxNQUFNLENBQUNDLGdCQUFQLEdBQTJCLFlBQVk7QUFDbkMsU0FBT0QsTUFBTSxDQUFDRSxxQkFBUCxJQUFnQ0YsTUFBTSxDQUFDRywyQkFBdkMsSUFBc0VILE1BQU0sQ0FBQ0ksd0JBQTdFLElBQXlHLFVBQVVDLFFBQVYsRUFBb0I7QUFDaElMLElBQUFBLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQkQsUUFBbEIsRUFBNEIsT0FBTyxFQUFuQztBQUNILEdBRkQ7QUFHSCxDQUp5QixFQUExQjs7QUFPQUUsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCRixFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFHLFNBQWIsQ0FBdUIsWUFBWTtBQUMvQkMsSUFBQUEsUUFBUSxDQUFDQyxVQUFULElBQXVCLENBQXZCO0FBRUgsR0FIRCxFQUdHQyxPQUhILENBR1csWUFBWTtBQUNuQkYsSUFBQUEsUUFBUSxDQUFDQyxVQUFULElBQXVCLENBQXZCO0FBRUgsR0FORDs7QUFPQUUsRUFBQUEsSUFBSSxHQUFHLGdCQUFZO0FBQ2YsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsQ0FBVCxFQUNBLEtBQUtDLENBQUwsR0FBUyxDQURULEVBRUEsS0FBS0MsTUFBTCxHQUFjO0FBQ1ZOLE1BQUFBLFVBQVUsRUFBRSxDQURGO0FBRVZPLE1BQUFBLFVBQVUsRUFBRSxDQUZGO0FBR1ZDLE1BQUFBLFFBQVEsRUFBRSxDQUhBO0FBSVZDLE1BQUFBLFFBQVEsRUFBRSxDQUpBO0FBS1ZDLE1BQUFBLFFBQVEsRUFBRSxDQUxBO0FBTVZDLE1BQUFBLFFBQVEsRUFBRSxDQU5BO0FBT1ZDLE1BQUFBLE1BQU0sRUFBRSxDQVBFO0FBUVZDLE1BQUFB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QTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEosZUFtQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVDSCxDQXhDRCxFQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLCtEQUFlUSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFydGljbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9za2lsbHMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG53aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNjYW52YXMnKS5tb3VzZWRvd24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldHRpbmdzLnZlbG9jaXR5X3ggKz0gMjtcclxuXHJcbiAgICB9KS5tb3VzZXVwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXR0aW5ncy52ZWxvY2l0eV94IC09IDI7XHJcblxyXG4gICAgfSk7XHJcbiAgICBzdGFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcclxuICAgICAgICB0aGlzLnggPSAwLFxyXG4gICAgICAgIHRoaXMueSA9IDAsXHJcbiAgICAgICAgdGhpcy5wYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHZlbG9jaXR5X3g6IDEsXHJcbiAgICAgICAgICAgIHZlbG9jaXR5X3k6IDEsXHJcbiAgICAgICAgICAgIG9wYWNpY3R5OiAxLFxyXG4gICAgICAgICAgICBsaWZldGltZTogMyxcclxuICAgICAgICAgICAgeF9vZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIHlfb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICByYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGRlY2F5OiAwLFxyXG4gICAgICAgICAgICBncm93dGg6IDAsXHJcbiAgICAgICAgICAgIGFtcGxpdHVkZTogMTAwLFxyXG4gICAgICAgICAgICBwaGFzZXNoaWZ0OiAzNjAsXHJcbiAgICAgICAgICAgIGZyZXE6IDAuMDUsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnMjU1LDI1NSwyNTUnXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHN0YXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9SYW5kb21pemVcclxuICAgICAgICB0aGlzLnBhcmFtcy5waGFzZXNoaWZ0ID0gKE1hdGgucmFuZG9tKCkgKiAwLjAxKTtcclxuICAgICAgICB0aGlzLnBhcmFtcy5hbXBsaXR1ZGUgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIHNldHRpbmdzLmFtcGxpdHVkZVNlZWQpO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmZyZXEgPSAoTWF0aC5yYW5kb20oKSAqIHNldHRpbmdzLmZyZXFTZWVkKTtcclxuICAgICAgICB0aGlzLnBhcmFtcy54X29mZnNldCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCk7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMueV9vZmZzZXQgPSBzZXR0aW5ncy55X2NlbnRlciArIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MueV9vZmZzZXRTZWVkKTtcclxuICAgICAgICB0aGlzLnBhcmFtcy5saWZldGltZSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMudmVsb2NpdHlfeCA9IChNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MudmVsb2NpdHlfeFNlZWQpXHJcbiAgICAgICAgdGhpcy5wYXJhbXMudmVsb2NpdHlfeSA9IChNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MudmVsb2NpdHlfeVNlZWQpXHJcbiAgICAgICAgdGhpcy5wYXJhbXMucmFkaXVzID0gKE1hdGgucmFuZG9tKCkgKiBzZXR0aW5ncy5tYXhyYWRpdXMpO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLm9wYWNpdHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBzZXR0aW5ncy5vcGFjU2VlZCwgMikgLyAxMDA7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLmRlY2F5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmRlY2F5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMS41KSAqIE1hdGgucmFuZG9tKCkgKiAwLjAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2V0dGluZ3MuZ3Jvd3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmdyb3d0aCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEuMikgKiBNYXRoLnJhbmRvbSgpICogMC4wMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5ncy5pcnJlZ0NvbG9ycykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MuY29sb3JQY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuY29sb3IgPSAnMjU1LDAsMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuY29sb3IgPSAnMCwyNTUsMjU1JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jb2xvciA9ICcwLDI1NSwyMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNvbG9yID0gJzI1NSwwLDI1NSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNvbG9yID0gJzI1NSwyNTUsMjU1JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnggPSB0aGlzLnBhcmFtcy54X29mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgbmV3X3gpIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9ICh0aGlzLm9mZnNldCArIDEpO1xyXG4gICAgICAgIHZhciB0ID0gKHRoaXMucGFyYW1zLnhfb2Zmc2V0ICsgdGhpcy5vZmZzZXQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMub3BhY2l0eSA+IHNldHRpbmdzLm9wYWNNYXgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMuZGVjYXkgKj0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmxpZmV0aW1lLS07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhcmFtcy5vcGFjaXR5IDw9IHNldHRpbmdzLm9wYWNNaW4pIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMubGlmZXRpbWUtLTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMuZGVjYXkgKj0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMucmFkaXVzID4gc2V0dGluZ3MubWF4cmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmdyb3d0aCAqPSAtMTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhcmFtcy5yYWRpdXMgPD0gMC4yKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmdyb3d0aCAqPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMucmFkaXVzID0gMC4yO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcmFtcy5yYWRpdXMgKz0gMiAqICh0aGlzLnBhcmFtcy5ncm93dGgpO1xyXG5cclxuICAgICAgICB0aGlzLnBhcmFtcy5vcGFjaXR5ICs9IDIgKiAodGhpcy5wYXJhbXMuZGVjYXkpO1xyXG5cclxuICAgICAgICB0aGlzLnkgPSB0aGlzLnBhcmFtcy55X29mZnNldCArICh0aGlzLnBhcmFtcy5hbXBsaXR1ZGUgLyA0ICogTWF0aC5zaW4oKDIgKyB0ICogc2V0dGluZ3MudmVsb2NpdHlfeSAqIDAuMDMpICogdGhpcy5wYXJhbXMuZnJlcSkpICogdGhpcy5wYXJhbXMudmVsb2NpdHlfeSAqIHNldHRpbmdzLnNjYWxlX3lcclxuICAgICAgICB0aGlzLnggKz0gKDEgKiB0aGlzLnBhcmFtcy52ZWxvY2l0eV94ICogc2V0dGluZ3MudmVsb2NpdHlfeCk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoXCIgKyB0aGlzLnBhcmFtcy5jb2xvciArIFwiLFwiICsgTWF0aC5yb3VuZCh0aGlzLnBhcmFtcy5vcGFjaXR5ICogMTAwKSAvIDEwMCArIFwiKVwiO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucGFyYW1zLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXR0aW5ncyA9IHtcclxuICAgICAgICB2ZWxvY2l0eV94OiAxLFxyXG4gICAgICAgIHNjYWxlX3k6IDEsXHJcbiAgICAgICAgeV9jZW50ZXI6IDI1MCxcclxuICAgICAgICB5X29mZnNldFNlZWQ6IDAsXHJcbiAgICAgICAgdmVsb2NpdHlfeTogMSxcclxuICAgICAgICBwYXJ0aWNsZXM6IDExMDAsXHJcbiAgICAgICAgbWF4cmFkaXVzOiA3LFxyXG4gICAgICAgIGlycmVnQ29sb3JzOiB0cnVlLFxyXG4gICAgICAgIGRlY2F5OiB0cnVlLFxyXG4gICAgICAgIGdyb3d0aDogdHJ1ZSxcclxuICAgICAgICBmcmVxU2VlZDogMS40LFxyXG4gICAgICAgIGFtcGxpdHVkZVNlZWQ6IDIwMCxcclxuICAgICAgICB2ZWxvY2l0eV94U2VlZDogMyxcclxuICAgICAgICB2ZWxvY2l0eV95U2VlZDogMyxcclxuICAgICAgICBvcGFjTWF4OiAwLjYwMSxcclxuICAgICAgICBvcGFjTWluOiAwLjAxLFxyXG4gICAgICAgIG9wYWNTZWVkOiA5MCxcclxuICAgICAgICBjb2xvclBjdDogMTBcclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RhcnMgPSBbXTtcclxuICAgIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNldHRpbmdzLnBhcnRpY2xlczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0YXJzW2ldID0gbmV3IHN0YXIoKTtcclxuICAgICAgICAgICAgc3RhcnNbaV0uaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGd1aSA9IG5ldyBkYXQuR1VJKCk7XHJcbiAgICBndWkuYWRkKHNldHRpbmdzLCAndmVsb2NpdHlfeCcsIC0xMC4xLCAxMC4xKTtcclxuICAgIGd1aS5hZGQoc2V0dGluZ3MsICd2ZWxvY2l0eV95JywgMC4wLCAxMC4xMTEpO1xyXG4gICAgZ3VpLmFkZChzZXR0aW5ncywgJ3NjYWxlX3knLCAtMTAuMSwgMTAuMSk7XHJcbiAgICBndWkuYWRkKHNldHRpbmdzLCAneV9vZmZzZXRTZWVkJywgMCwgNTAwKS5vbkNoYW5nZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpbml0KCk7XHJcbiAgICB9KVxyXG4gICAgZ3VpLmFkZChzZXR0aW5ncywgJ3lfY2VudGVyJywgMCwgNTAwKS5vbkNoYW5nZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpbml0KCk7XHJcbiAgICB9KVxyXG4gICAgZ3VpLmFkZChzZXR0aW5ncywgJ21heHJhZGl1cycsIDAuMiwgMTAwLjEpLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH0pO1xyXG4gICAgZ3VpLmFkZChzZXR0aW5ncywgJ2RlY2F5Jykub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgICBndWkuYWRkKHNldHRpbmdzLCAnY29sb3JQY3QnLCA0LCAxMDApLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH0pO1xyXG4gICAgZ3VpLmFkZChzZXR0aW5ncywgJ2dyb3d0aCcpLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH0pO1xyXG4gICAgZ3VpLmFkZChzZXR0aW5ncywgJ2lycmVnQ29sb3JzJykub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgICBndWkuYWRkKHNldHRpbmdzLCAncGFydGljbGVzJywgMSwgOTAwMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgfSlcclxuICAgIGd1aS5hZGQoc2V0dGluZ3MsICdmcmVxU2VlZCcsIDAuMSwgMzAuMSkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgICBndWkuYWRkKHNldHRpbmdzLCAnYW1wbGl0dWRlU2VlZCcsIDEsIDUwMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgICBndWkuYWRkKHNldHRpbmdzLCAndmVsb2NpdHlfeFNlZWQnLCAxLCAxMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgICBndWkuYWRkKHNldHRpbmdzLCAndmVsb2NpdHlfeVNlZWQnLCAxLCAxMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgICBndWkuYWRkKHNldHRpbmdzLCAnb3BhY01heCcsIDAuMDEsIDEuMDApLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH0pO1xyXG4gICAgZ3VpLmFkZChzZXR0aW5ncywgJ29wYWNNaW4nLCAwLjAxLCAxLjAwKS5vbkNoYW5nZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpbml0KCk7XHJcbiAgICB9KTtcclxuICAgIGd1aS5hZGQoc2V0dGluZ3MsICdvcGFjU2VlZCcsIDEsIDEwMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZ3VpLm9wZW4oKTtcclxuXHJcbiAgICB2YXIgZGVnMnJhZCA9IGZ1bmN0aW9uIChhbmdsZSkge1xyXG4gICAgICAgIHJldHVybiBhbmdsZSAqIC4wMTc0NTMyOTI1MTk5NDMyOTU7IC8vIChhbmdsZSAvIDE4MCkgKiBNYXRoLlBJO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb2xvcmZyZXEgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHZhciBmcmVxdWVuY3kgPSAuMztcclxuICAgICAgICBpID0gaSAlIDMyO1xyXG4gICAgICAgIHZhciByZWQgPSBNYXRoLmNlaWwoTWF0aC5zaW4oZnJlcXVlbmN5ICogaSArIDApICogMTI3ICsgMTI4KTtcclxuICAgICAgICB2YXIgZ3JlZW4gPSBNYXRoLmNlaWwoTWF0aC5zaW4oZnJlcXVlbmN5ICogaSArIDIpICogMTI3ICsgMTI4KTtcclxuICAgICAgICB2YXIgYmx1ZSA9IE1hdGguY2VpbChNYXRoLnNpbihmcmVxdWVuY3kgKiBpICsgNCkgKiAxMjcgKyAxMjgpO1xyXG4gICAgICAgIHJldHVybiBcInJnYmEoXCIgKyByZWQgKyBcIixcIiArIGdyZWVuICsgXCIsXCIgKyBibHVlICsgXCIsXCIgKyBzZXR0aW5ncy5hbHBoYSArIFwiKVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTtcclxuICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAoZnVuY3Rpb24gYW5pbWxvb3AoKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1GcmFtZShhbmltbG9vcCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCAxMDAwLCAxMDAwKTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2V0dGluZ3MucGFydGljbGVzOyBpKyspIHtcclxuICAgICAgICAgICAgc3RhcnNbaV0uZHJhdyhjdHgpO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIGlmIChzdGFyc1tpXS54ID4gOTk4IHx8IChzdGFyc1tpXS5wYXJhbXMubGlmZXRpbWUgPCAwICYmIHN0YXJzW2ldLnBhcmFtcy5vcGFjaXR5IDw9IDApIHx8IChzdGFyc1tpXS55IDwgKDAgLSBzZXR0aW5ncy5tYXhyYWRpdXMpKSB8fCAoc3RhcnNbaV0ueCA8ICgwIC0gc2V0dGluZ3MubWF4cmFkaXVzKSkgfHwgKHN0YXJzW2ldLnkgPiAoNTAwICsgc2V0dGluZ3MubWF4cmFkaXVzKSkpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJzW2ldID0gbmV3IHN0YXIoKTtcclxuICAgICAgICAgICAgICAgIHN0YXJzW2ldLmluaXQoKTtcclxuICAgICAgICAgICAgICAgIHN0YXJzW2ldLnBhcmFtcy54X29mZnNldCA9ICgtMSkgKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBzdGFyc1tpXS54IC09IE1hdGgucmFuZG9tKCkgKiAyMDA7XHJcbiAgICAgICAgICAgICAgICBzdGFyc1tpXS5wYXJhbXMub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KSgpO1xyXG59KTtcclxuXHJcbmNvbnN0IFBhcnRpY2xlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICA8Y2FudmFzIGhlaWdodD1cIjUwMFwiIHdpZHRoPVwiMTAwMFwiIGNsYXNzTmFtZSA9IHtzdHlsZXMuY2FudmFzfSBpZD1cImNhbnZhc1wiPjwvY2FudmFzPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc2Fzcy9wYWdlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcclxuaW1wb3J0IFNpZGVMZWZ0IGZyb20gJy4uL2NvbW11bnNfY29tcG9uZW50cy9TaWRlTGVmdCdcclxuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICcuLi9jb21wb25lbnRzL1BhcnRpY2xlcy5qcydcclxuLy8gaW1wb3J0IFN3aXRoUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1N3aXRoUGFnZS5qcydcclxuXHJcbmNvbnN0IHNraWxscyA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIFdlYlBvcnRmb2xpbzogQWJyYcOjbyBNb3JhaXNcclxuICAgICAgICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD0nd2ViIGRldmVsb3BlciwgcHJvZ3JhbW1lciwgcmVhY3QsIG5leHRqcywgamF2YXNjcmlwdCcvPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9kYXQtZ3VpLzAuNS9kYXQuZ3VpLm1pbi5qc1wiIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxtYWluICBjbGFzc05hbWUgPSB7c3R5bGVzLmJvZHl9PiAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZSA9IHtzdHlsZXMuc2VjdGlvbkxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlTGVmdC8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cInNraWxsc1wiIGNsYXNzTmFtZSA9IHtzdHlsZXMuc2lkZV9yaWdodF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS1USVRVTE8gRSBTVUJUSUxPIC0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy53cmFwX3RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lID0ge3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb2Z0IFNraWxsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge3N0eWxlcy5saW5lX2hvcml6b250YWx9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSB7c3R5bGVzLnN1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IHBlcnNvbmFsaXR5IGFuZCBiZWhhdmlvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLVNPRlQgU0tJTExTIEFSRUEgLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICA8L0ZyYWdtZW50PiAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuLy8gICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4vLyAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwMClcclxuLy8gICAgIH0pXHJcbi8vICAgICByZXR1cm4geyBwcm9wczp7fX1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2tpbGxzIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2luZG93IiwicmVxdWVzdEFuaW1GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwibW91c2Vkb3duIiwic2V0dGluZ3MiLCJ2ZWxvY2l0eV94IiwibW91c2V1cCIsInN0YXIiLCJvZmZzZXQiLCJ4IiwieSIsInBhcmFtcyIsInZlbG9jaXR5X3kiLCJvcGFjaWN0eSIsImxpZmV0aW1lIiwieF9vZmZzZXQiLCJ5X29mZnNldCIsInJhZGl1cyIsImRlY2F5IiwiZ3Jvd3RoIiwiYW1wbGl0dWRlIiwicGhhc2VzaGlmdCIsImZyZXEiLCJjb2xvciIsInByb3RvdHlwZSIsImluaXQiLCJNYXRoIiwicmFuZG9tIiwiY2VpbCIsImFtcGxpdHVkZVNlZWQiLCJmcmVxU2VlZCIsInlfY2VudGVyIiwieV9vZmZzZXRTZWVkIiwidmVsb2NpdHlfeFNlZWQiLCJ2ZWxvY2l0eV95U2VlZCIsIm1heHJhZGl1cyIsIm9wYWNpdHkiLCJyb3VuZCIsIm9wYWNTZWVkIiwiaXJyZWdDb2xvcnMiLCJjb2xvclBjdCIsImRyYXciLCJjdHgiLCJuZXdfeCIsInQiLCJvcGFjTWF4Iiwib3BhY01pbiIsInNpbiIsInNjYWxlX3kiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJQSSIsImZpbGwiLCJwYXJ0aWNsZXMiLCJzdGFycyIsImkiLCJndWkiLCJkYXQiLCJHVUkiLCJhZGQiLCJvbkNoYW5nZSIsInZhbHVlIiwib3BlbiIsImRlZzJyYWQiLCJhbmdsZSIsImNvbG9yZnJlcSIsImZyZXF1ZW5jeSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiYW5pbWxvb3AiLCJmaWxsUmVjdCIsIlBhcnRpY2xlcyIsInN0eWxlcyIsImNhbnZhcyIsIkZyYWdtZW50IiwiTGluayIsIkltYWdlIiwiSGVhZCIsIkZvb3RlciIsIlNpZGVMZWZ0Iiwic2tpbGxzIiwiYm9keSIsInNlY3Rpb25MZWZ0Iiwic2lkZV9yaWdodF9jb250YWluZXIiLCJ3cmFwX3RpdGxlIiwidGl0bGUiLCJsaW5lX2hvcml6b250YWwiLCJzdWJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=