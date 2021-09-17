"use strict";
self["webpackHotUpdate_N_E"]("components_Particles_js",{

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




var Particles = function Particles() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("canvas", {
      height: "500",
      width: "1000",
      className: styles.canvas,
      id: "canvas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svY29tcG9uZW50c19QYXJ0aWNsZXNfanMuODAwMjllMWJmODBkMmNkYWY1NjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUVwQixzQkFDSTtBQUFBLDJCQUNHO0FBQVEsWUFBTSxFQUFDLEtBQWY7QUFBcUIsV0FBSyxFQUFDLE1BQTNCO0FBQWtDLGVBQVMsRUFBSUMsTUFBTSxDQUFDQyxNQUF0RDtBQUE4RCxRQUFFLEVBQUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjs7QUFNQUMsRUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxHQUEyQixZQUFZO0FBQ25DLFdBQU9ELE1BQU0sQ0FBQ0UscUJBQVAsSUFBZ0NGLE1BQU0sQ0FBQ0csMkJBQXZDLElBQXNFSCxNQUFNLENBQUNJLHdCQUE3RSxJQUF5RyxVQUFVQyxRQUFWLEVBQW9CO0FBQ2hJTCxNQUFBQSxNQUFNLENBQUNNLFVBQVAsQ0FBa0JELFFBQWxCLEVBQTRCLE9BQU8sRUFBbkM7QUFDSCxLQUZEO0FBR0gsR0FKeUIsRUFBMUI7O0FBT0FFLEVBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQkYsSUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhRyxTQUFiLENBQXVCLFlBQVk7QUFDL0JDLE1BQUFBLFFBQVEsQ0FBQ0MsVUFBVCxJQUF1QixDQUF2QjtBQUVILEtBSEQsRUFHR0MsT0FISCxDQUdXLFlBQVk7QUFDbkJGLE1BQUFBLFFBQVEsQ0FBQ0MsVUFBVCxJQUF1QixDQUF2QjtBQUVILEtBTkQ7O0FBT0FFLElBQUFBLElBQUksR0FBRyxnQkFBWTtBQUNmLFdBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsV0FBS0MsQ0FBTCxHQUFTLENBQVQsRUFDQSxLQUFLQyxDQUFM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QTNPRDs7S0FBTTlDO0FBNk9OLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFydGljbGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFBhcnRpY2xlcyA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIDxjYW52YXMgaGVpZ2h0PVwiNTAwXCIgd2lkdGg9XCIxMDAwXCIgY2xhc3NOYW1lID0ge3N0eWxlcy5jYW52YXN9IGlkPVwiY2FudmFzXCI+PC9jYW52YXM+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcclxuICAgICAgICB9O1xyXG4gICAgfSkoKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnI2NhbnZhcycpLm1vdXNlZG93bihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzLnZlbG9jaXR5X3ggKz0gMjtcclxuICAgIFxyXG4gICAgICAgIH0pLm1vdXNldXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZXR0aW5ncy52ZWxvY2l0eV94IC09IDI7XHJcbiAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdGFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDAsXHJcbiAgICAgICAgICAgIHRoaXMueSA9IDAsXHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlfeDogMSxcclxuICAgICAgICAgICAgICAgIHZlbG9jaXR5X3k6IDEsXHJcbiAgICAgICAgICAgICAgICBvcGFjaWN0eTogMSxcclxuICAgICAgICAgICAgICAgIGxpZmV0aW1lOiAzLFxyXG4gICAgICAgICAgICAgICAgeF9vZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgICB5X29mZnNldDogMCxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogMCxcclxuICAgICAgICAgICAgICAgIGRlY2F5OiAwLFxyXG4gICAgICAgICAgICAgICAgZ3Jvd3RoOiAwLFxyXG4gICAgICAgICAgICAgICAgYW1wbGl0dWRlOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBwaGFzZXNoaWZ0OiAzNjAsXHJcbiAgICAgICAgICAgICAgICBmcmVxOiAwLjA1LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcyNTUsMjU1LDI1NSdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBzdGFyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL1JhbmRvbWl6ZVxyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5waGFzZXNoaWZ0ID0gKE1hdGgucmFuZG9tKCkgKiAwLjAxKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMuYW1wbGl0dWRlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiBzZXR0aW5ncy5hbXBsaXR1ZGVTZWVkKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMuZnJlcSA9IChNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MuZnJlcVNlZWQpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy54X29mZnNldCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLnlfb2Zmc2V0ID0gc2V0dGluZ3MueV9jZW50ZXIgKyBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIHNldHRpbmdzLnlfb2Zmc2V0U2VlZCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmxpZmV0aW1lID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMudmVsb2NpdHlfeCA9IChNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MudmVsb2NpdHlfeFNlZWQpXHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLnZlbG9jaXR5X3kgPSAoTWF0aC5yYW5kb20oKSAqIHNldHRpbmdzLnZlbG9jaXR5X3lTZWVkKVxyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5yYWRpdXMgPSAoTWF0aC5yYW5kb20oKSAqIHNldHRpbmdzLm1heHJhZGl1cyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLm9wYWNpdHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBzZXR0aW5ncy5vcGFjU2VlZCwgMikgLyAxMDA7XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5kZWNheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuZGVjYXkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxLjUpICogTWF0aC5yYW5kb20oKSAqIDAuMDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmdyb3d0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuZ3Jvd3RoID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMS4yKSAqIE1hdGgucmFuZG9tKCkgKiAwLjAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmlycmVnQ29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MuY29sb3JQY3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jb2xvciA9ICcyNTUsMCwwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jb2xvciA9ICcwLDI1NSwyNTUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNvbG9yID0gJzAsMjU1LDIwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuY29sb3IgPSAnMjU1LDAsMjU1JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuY29sb3IgPSAnMjU1LDI1NSwyNTUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnBhcmFtcy54X29mZnNldDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBzdGFyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgbmV3X3gpIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSAodGhpcy5vZmZzZXQgKyAxKTtcclxuICAgICAgICAgICAgdmFyIHQgPSAodGhpcy5wYXJhbXMueF9vZmZzZXQgKyB0aGlzLm9mZnNldCk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zLm9wYWNpdHkgPiBzZXR0aW5ncy5vcGFjTWF4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5kZWNheSAqPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmxpZmV0aW1lLS07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYXJhbXMub3BhY2l0eSA8PSBzZXR0aW5ncy5vcGFjTWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5saWZldGltZS0tO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuZGVjYXkgKj0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbXMucmFkaXVzID4gc2V0dGluZ3MubWF4cmFkaXVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5ncm93dGggKj0gLTE7XHJcbiAgICBcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhcmFtcy5yYWRpdXMgPD0gMC4yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5ncm93dGggKj0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5yYWRpdXMgPSAwLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMucmFkaXVzICs9IDIgKiAodGhpcy5wYXJhbXMuZ3Jvd3RoKTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5vcGFjaXR5ICs9IDIgKiAodGhpcy5wYXJhbXMuZGVjYXkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMucGFyYW1zLnlfb2Zmc2V0ICsgKHRoaXMucGFyYW1zLmFtcGxpdHVkZSAvIDQgKiBNYXRoLnNpbigoMiArIHQgKiBzZXR0aW5ncy52ZWxvY2l0eV95ICogMC4wMykgKiB0aGlzLnBhcmFtcy5mcmVxKSkgKiB0aGlzLnBhcmFtcy52ZWxvY2l0eV95ICogc2V0dGluZ3Muc2NhbGVfeVxyXG4gICAgICAgICAgICB0aGlzLnggKz0gKDEgKiB0aGlzLnBhcmFtcy52ZWxvY2l0eV94ICogc2V0dGluZ3MudmVsb2NpdHlfeCk7XHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYShcIiArIHRoaXMucGFyYW1zLmNvbG9yICsgXCIsXCIgKyBNYXRoLnJvdW5kKHRoaXMucGFyYW1zLm9wYWNpdHkgKiAxMDApIC8gMTAwICsgXCIpXCI7XHJcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucGFyYW1zLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIHNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICB2ZWxvY2l0eV94OiAxLFxyXG4gICAgICAgICAgICBzY2FsZV95OiAxLFxyXG4gICAgICAgICAgICB5X2NlbnRlcjogMjUwLFxyXG4gICAgICAgICAgICB5X29mZnNldFNlZWQ6IDAsXHJcbiAgICAgICAgICAgIHZlbG9jaXR5X3k6IDEsXHJcbiAgICAgICAgICAgIHBhcnRpY2xlczogMTEwMCxcclxuICAgICAgICAgICAgbWF4cmFkaXVzOiA3LFxyXG4gICAgICAgICAgICBpcnJlZ0NvbG9yczogdHJ1ZSxcclxuICAgICAgICAgICAgZGVjYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGdyb3d0aDogdHJ1ZSxcclxuICAgICAgICAgICAgZnJlcVNlZWQ6IDEuNCxcclxuICAgICAgICAgICAgYW1wbGl0dWRlU2VlZDogMjAwLFxyXG4gICAgICAgICAgICB2ZWxvY2l0eV94U2VlZDogMyxcclxuICAgICAgICAgICAgdmVsb2NpdHlfeVNlZWQ6IDMsXHJcbiAgICAgICAgICAgIG9wYWNNYXg6IDAuNjAxLFxyXG4gICAgICAgICAgICBvcGFjTWluOiAwLjAxLFxyXG4gICAgICAgICAgICBvcGFjU2VlZDogOTAsXHJcbiAgICAgICAgICAgIGNvbG9yUGN0OiAxMFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgdmFyIHN0YXJzID0gW107XHJcbiAgICAgICAgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNldHRpbmdzLnBhcnRpY2xlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFyc1tpXSA9IG5ldyBzdGFyKCk7XHJcbiAgICAgICAgICAgICAgICBzdGFyc1tpXS5pbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgdmFyIGd1aSA9IG5ldyBkYXQuR1VJKCk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ3ZlbG9jaXR5X3gnLCAtMTAuMSwgMTAuMSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ3ZlbG9jaXR5X3knLCAwLjAsIDEwLjExMSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ3NjYWxlX3knLCAtMTAuMSwgMTAuMSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ3lfb2Zmc2V0U2VlZCcsIDAsIDUwMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGd1aS5hZGQoc2V0dGluZ3MsICd5X2NlbnRlcicsIDAsIDUwMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGd1aS5hZGQoc2V0dGluZ3MsICdtYXhyYWRpdXMnLCAwLjIsIDEwMC4xKS5vbkNoYW5nZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGd1aS5hZGQoc2V0dGluZ3MsICdkZWNheScpLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ2NvbG9yUGN0JywgNCwgMTAwKS5vbkNoYW5nZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGd1aS5hZGQoc2V0dGluZ3MsICdncm93dGgnKS5vbkNoYW5nZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGd1aS5hZGQoc2V0dGluZ3MsICdpcnJlZ0NvbG9ycycpLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ3BhcnRpY2xlcycsIDEsIDkwMDApLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBndWkuYWRkKHNldHRpbmdzLCAnZnJlcVNlZWQnLCAwLjEsIDMwLjEpLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ2FtcGxpdHVkZVNlZWQnLCAxLCA1MDApLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ3ZlbG9jaXR5X3hTZWVkJywgMSwgMTApLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ3ZlbG9jaXR5X3lTZWVkJywgMSwgMTApLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ29wYWNNYXgnLCAwLjAxLCAxLjAwKS5vbkNoYW5nZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGd1aS5hZGQoc2V0dGluZ3MsICdvcGFjTWluJywgMC4wMSwgMS4wMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWkuYWRkKHNldHRpbmdzLCAnb3BhY1NlZWQnLCAxLCAxMDApLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBndWkub3BlbigpO1xyXG4gICAgXHJcbiAgICAgICAgdmFyIGRlZzJyYWQgPSBmdW5jdGlvbiAoYW5nbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFuZ2xlICogLjAxNzQ1MzI5MjUxOTk0MzI5NTsgLy8gKGFuZ2xlIC8gMTgwKSAqIE1hdGguUEk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgdmFyIGNvbG9yZnJlcSA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciBmcmVxdWVuY3kgPSAuMztcclxuICAgICAgICAgICAgaSA9IGkgJSAzMjtcclxuICAgICAgICAgICAgdmFyIHJlZCA9IE1hdGguY2VpbChNYXRoLnNpbihmcmVxdWVuY3kgKiBpICsgMCkgKiAxMjcgKyAxMjgpO1xyXG4gICAgICAgICAgICB2YXIgZ3JlZW4gPSBNYXRoLmNlaWwoTWF0aC5zaW4oZnJlcXVlbmN5ICogaSArIDIpICogMTI3ICsgMTI4KTtcclxuICAgICAgICAgICAgdmFyIGJsdWUgPSBNYXRoLmNlaWwoTWF0aC5zaW4oZnJlcXVlbmN5ICogaSArIDQpICogMTI3ICsgMTI4KTtcclxuICAgICAgICAgICAgcmV0dXJuIFwicmdiYShcIiArIHJlZCArIFwiLFwiICsgZ3JlZW4gKyBcIixcIiArIGJsdWUgKyBcIixcIiArIHNldHRpbmdzLmFscGhhICsgXCIpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgICAgIChmdW5jdGlvbiBhbmltbG9vcCgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZShhbmltbG9vcCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIDEwMDAsIDEwMDApO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2V0dGluZ3MucGFydGljbGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHN0YXJzW2ldLmRyYXcoY3R4KTtcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnNbaV0ueCA+IDk5OCB8fCAoc3RhcnNbaV0ucGFyYW1zLmxpZmV0aW1lIDwgMCAmJiBzdGFyc1tpXS5wYXJhbXMub3BhY2l0eSA8PSAwKSB8fCAoc3RhcnNbaV0ueSA8ICgwIC0gc2V0dGluZ3MubWF4cmFkaXVzKSkgfHwgKHN0YXJzW2ldLnggPCAoMCAtIHNldHRpbmdzLm1heHJhZGl1cykpIHx8IChzdGFyc1tpXS55ID4gKDUwMCArIHNldHRpbmdzLm1heHJhZGl1cykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnNbaV0gPSBuZXcgc3RhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJzW2ldLmluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFyc1tpXS5wYXJhbXMueF9vZmZzZXQgPSAoLTEpICogb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJzW2ldLnggLT0gTWF0aC5yYW5kb20oKSAqIDIwMDtcclxuICAgICAgICAgICAgICAgICAgICBzdGFyc1tpXS5wYXJhbXMub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFydGljbGVzIiwic3R5bGVzIiwiY2FudmFzIiwid2luZG93IiwicmVxdWVzdEFuaW1GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwibW91c2Vkb3duIiwic2V0dGluZ3MiLCJ2ZWxvY2l0eV94IiwibW91c2V1cCIsInN0YXIiLCJvZmZzZXQiLCJ4IiwieSIsInBhcmFtcyIsInZlbG9jaXR5X3kiLCJvcGFjaWN0eSIsImxpZmV0aW1lIiwieF9vZmZzZXQiLCJ5X29mZnNldCIsInJhZGl1cyIsImRlY2F5IiwiZ3Jvd3RoIiwiYW1wbGl0dWRlIiwicGhhc2VzaGlmdCIsImZyZXEiLCJjb2xvciIsInByb3RvdHlwZSIsImluaXQiLCJNYXRoIiwicmFuZG9tIiwiY2VpbCIsImFtcGxpdHVkZVNlZWQiLCJmcmVxU2VlZCIsInlfY2VudGVyIiwieV9vZmZzZXRTZWVkIiwidmVsb2NpdHlfeFNlZWQiLCJ2ZWxvY2l0eV95U2VlZCIsIm1heHJhZGl1cyIsIm9wYWNpdHkiLCJyb3VuZCIsIm9wYWNTZWVkIiwiaXJyZWdDb2xvcnMiLCJjb2xvclBjdCIsImRyYXciLCJjdHgiLCJuZXdfeCIsInQiLCJvcGFjTWF4Iiwib3BhY01pbiIsInNpbiIsInNjYWxlX3kiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJQSSIsImZpbGwiLCJwYXJ0aWNsZXMiLCJzdGFycyIsImkiLCJndWkiLCJkYXQiLCJHVUkiLCJhZGQiLCJvbkNoYW5nZSIsInZhbHVlIiwib3BlbiIsImRlZzJyYWQiLCJhbmdsZSIsImNvbG9yZnJlcSIsImZyZXF1ZW5jeSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiYW5pbWxvb3AiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=