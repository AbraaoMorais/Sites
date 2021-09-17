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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("canvas", {
      height: "500",
      width: "1000",
      className: styles.canvas,
      id: "canvas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 12
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 234,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svY29tcG9uZW50c19QYXJ0aWNsZXNfanMuMWE4NGMyZDUzNTQzZTY0Mjc2YjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQkMsRUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxHQUEyQixZQUFZO0FBQ25DLFdBQU9ELE1BQU0sQ0FBQ0UscUJBQVAsSUFBZ0NGLE1BQU0sQ0FBQ0csMkJBQXZDLElBQXNFSCxNQUFNLENBQUNJLHdCQUE3RSxJQUF5RyxVQUFVQyxRQUFWLEVBQW9CO0FBQ2hJTCxNQUFBQSxNQUFNLENBQUNNLFVBQVAsQ0FBa0JELFFBQWxCLEVBQTRCLE9BQU8sRUFBbkM7QUFDSCxLQUZEO0FBR0gsR0FKeUIsRUFBMUI7O0FBT0FFLEVBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQkYsSUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhRyxTQUFiLENBQXVCLFlBQVk7QUFDL0JDLE1BQUFBLFFBQVEsQ0FBQ0MsVUFBVCxJQUF1QixDQUF2QjtBQUVILEtBSEQsRUFHR0MsT0FISCxDQUdXLFlBQVk7QUFDbkJGLE1BQUFBLFFBQVEsQ0FBQ0MsVUFBVCxJQUF1QixDQUF2QjtBQUVILEtBTkQ7O0FBT0FFLElBQUFBLElBQUksR0FBRyxnQkFBWTtBQUNmLFdBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsV0FBS0MsQ0FBTCxHQUFTLENBQVQsRUFDQSxLQUFLQyxDQUFMLEdBQVMsQ0FEVCxFQUVBLEtBQUtDLE1BQUwsR0FBYztBQUNWTixRQUFBQSxVQUFVLEVBQUUsQ0FERjtBQUVWTyxRQUFBQSxVQUFVLEVBQUUsQ0FGRjtBQUdWQyxRQUFBQSxRQUFRLEVBQUUsQ0FIQTtBQUlWQyxRQUFBQSxRQUFRLEVBQUUsQ0FKQTtBQUtWQyxRQUFBQSxRQUFRLEVBQUUsQ0FMQTtBQU1W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QXpPRDs7S0FBTXJGO0FBMk9OLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFydGljbGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFBhcnRpY2xlcyA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG4gICAgICAgIH07XHJcbiAgICB9KSgpO1xyXG4gICAgXHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcjY2FudmFzJykubW91c2Vkb3duKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3MudmVsb2NpdHlfeCArPSAyO1xyXG4gICAgXHJcbiAgICAgICAgfSkubW91c2V1cChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzLnZlbG9jaXR5X3ggLT0gMjtcclxuICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0YXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgdGhpcy54ID0gMCxcclxuICAgICAgICAgICAgdGhpcy55ID0gMCxcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eV94OiAxLFxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlfeTogMSxcclxuICAgICAgICAgICAgICAgIG9wYWNpY3R5OiAxLFxyXG4gICAgICAgICAgICAgICAgbGlmZXRpbWU6IDMsXHJcbiAgICAgICAgICAgICAgICB4X29mZnNldDogMCxcclxuICAgICAgICAgICAgICAgIHlfb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAwLFxyXG4gICAgICAgICAgICAgICAgZGVjYXk6IDAsXHJcbiAgICAgICAgICAgICAgICBncm93dGg6IDAsXHJcbiAgICAgICAgICAgICAgICBhbXBsaXR1ZGU6IDEwMCxcclxuICAgICAgICAgICAgICAgIHBoYXNlc2hpZnQ6IDM2MCxcclxuICAgICAgICAgICAgICAgIGZyZXE6IDAuMDUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJzI1NSwyNTUsMjU1J1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIHN0YXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vUmFuZG9taXplXHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLnBoYXNlc2hpZnQgPSAoTWF0aC5yYW5kb20oKSAqIDAuMDEpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5hbXBsaXR1ZGUgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIHNldHRpbmdzLmFtcGxpdHVkZVNlZWQpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5mcmVxID0gKE1hdGgucmFuZG9tKCkgKiBzZXR0aW5ncy5mcmVxU2VlZCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLnhfb2Zmc2V0ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMueV9vZmZzZXQgPSBzZXR0aW5ncy55X2NlbnRlciArIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MueV9vZmZzZXRTZWVkKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMubGlmZXRpbWUgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy52ZWxvY2l0eV94ID0gKE1hdGgucmFuZG9tKCkgKiBzZXR0aW5ncy52ZWxvY2l0eV94U2VlZClcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMudmVsb2NpdHlfeSA9IChNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MudmVsb2NpdHlfeVNlZWQpXHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLnJhZGl1cyA9IChNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MubWF4cmFkaXVzKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMub3BhY2l0eSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHNldHRpbmdzLm9wYWNTZWVkLCAyKSAvIDEwMDtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmRlY2F5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5kZWNheSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEuNSkgKiBNYXRoLnJhbmRvbSgpICogMC4wMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuZ3Jvd3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5ncm93dGggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxLjIpICogTWF0aC5yYW5kb20oKSAqIDAuMDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuaXJyZWdDb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiBzZXR0aW5ncy5jb2xvclBjdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNvbG9yID0gJzI1NSwwLDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNvbG9yID0gJzAsMjU1LDI1NSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuY29sb3IgPSAnMCwyNTUsMjAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jb2xvciA9ICcyNTUsMCwyNTUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jb2xvciA9ICcyNTUsMjU1LDI1NSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMucGFyYW1zLnhfb2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHN0YXIucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4LCBuZXdfeCkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9ICh0aGlzLm9mZnNldCArIDEpO1xyXG4gICAgICAgICAgICB2YXIgdCA9ICh0aGlzLnBhcmFtcy54X29mZnNldCArIHRoaXMub2Zmc2V0KTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbXMub3BhY2l0eSA+IHNldHRpbmdzLm9wYWNNYXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmRlY2F5ICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMubGlmZXRpbWUtLTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhcmFtcy5vcGFjaXR5IDw9IHNldHRpbmdzLm9wYWNNaW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmxpZmV0aW1lLS07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5kZWNheSAqPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5yYWRpdXMgPiBzZXR0aW5ncy5tYXhyYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmdyb3d0aCAqPSAtMTtcclxuICAgIFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFyYW1zLnJhZGl1cyA8PSAwLjIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmdyb3d0aCAqPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnJhZGl1cyA9IDAuMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5yYWRpdXMgKz0gMiAqICh0aGlzLnBhcmFtcy5ncm93dGgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLm9wYWNpdHkgKz0gMiAqICh0aGlzLnBhcmFtcy5kZWNheSk7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5wYXJhbXMueV9vZmZzZXQgKyAodGhpcy5wYXJhbXMuYW1wbGl0dWRlIC8gNCAqIE1hdGguc2luKCgyICsgdCAqIHNldHRpbmdzLnZlbG9jaXR5X3kgKiAwLjAzKSAqIHRoaXMucGFyYW1zLmZyZXEpKSAqIHRoaXMucGFyYW1zLnZlbG9jaXR5X3kgKiBzZXR0aW5ncy5zY2FsZV95XHJcbiAgICAgICAgICAgIHRoaXMueCArPSAoMSAqIHRoaXMucGFyYW1zLnZlbG9jaXR5X3ggKiBzZXR0aW5ncy52ZWxvY2l0eV94KTtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKFwiICsgdGhpcy5wYXJhbXMuY29sb3IgKyBcIixcIiArIE1hdGgucm91bmQodGhpcy5wYXJhbXMub3BhY2l0eSAqIDEwMCkgLyAxMDAgKyBcIilcIjtcclxuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5wYXJhbXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIHZlbG9jaXR5X3g6IDEsXHJcbiAgICAgICAgICAgIHNjYWxlX3k6IDEsXHJcbiAgICAgICAgICAgIHlfY2VudGVyOiAyNTAsXHJcbiAgICAgICAgICAgIHlfb2Zmc2V0U2VlZDogMCxcclxuICAgICAgICAgICAgdmVsb2NpdHlfeTogMSxcclxuICAgICAgICAgICAgcGFydGljbGVzOiAxMTAwLFxyXG4gICAgICAgICAgICBtYXhyYWRpdXM6IDcsXHJcbiAgICAgICAgICAgIGlycmVnQ29sb3JzOiB0cnVlLFxyXG4gICAgICAgICAgICBkZWNheTogdHJ1ZSxcclxuICAgICAgICAgICAgZ3Jvd3RoOiB0cnVlLFxyXG4gICAgICAgICAgICBmcmVxU2VlZDogMS40LFxyXG4gICAgICAgICAgICBhbXBsaXR1ZGVTZWVkOiAyMDAsXHJcbiAgICAgICAgICAgIHZlbG9jaXR5X3hTZWVkOiAzLFxyXG4gICAgICAgICAgICB2ZWxvY2l0eV95U2VlZDogMyxcclxuICAgICAgICAgICAgb3BhY01heDogMC42MDEsXHJcbiAgICAgICAgICAgIG9wYWNNaW46IDAuMDEsXHJcbiAgICAgICAgICAgIG9wYWNTZWVkOiA5MCxcclxuICAgICAgICAgICAgY29sb3JQY3Q6IDEwXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICB2YXIgc3RhcnMgPSBbXTtcclxuICAgICAgICBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2V0dGluZ3MucGFydGljbGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHN0YXJzW2ldID0gbmV3IHN0YXIoKTtcclxuICAgICAgICAgICAgICAgIHN0YXJzW2ldLmluaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICB2YXIgZ3VpID0gbmV3IGRhdC5HVUkoKTtcclxuICAgICAgICBndWkuYWRkKHNldHRpbmdzLCAndmVsb2NpdHlfeCcsIC0xMC4xLCAxMC4xKTtcclxuICAgICAgICBndWkuYWRkKHNldHRpbmdzLCAndmVsb2NpdHlfeScsIDAuMCwgMTAuMTExKTtcclxuICAgICAgICBndWkuYWRkKHNldHRpbmdzLCAnc2NhbGVfeScsIC0xMC4xLCAxMC4xKTtcclxuICAgICAgICBndWkuYWRkKHNldHRpbmdzLCAneV9vZmZzZXRTZWVkJywgMCwgNTAwKS5vbkNoYW5nZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ3lfY2VudGVyJywgMCwgNTAwKS5vbkNoYW5nZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ21heHJhZGl1cycsIDAuMiwgMTAwLjEpLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ2RlY2F5Jykub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWkuYWRkKHNldHRpbmdzLCAnY29sb3JQY3QnLCA0LCAxMDApLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ2dyb3d0aCcpLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ2lycmVnQ29sb3JzJykub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWkuYWRkKHNldHRpbmdzLCAncGFydGljbGVzJywgMSwgOTAwMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGd1aS5hZGQoc2V0dGluZ3MsICdmcmVxU2VlZCcsIDAuMSwgMzAuMSkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWkuYWRkKHNldHRpbmdzLCAnYW1wbGl0dWRlU2VlZCcsIDEsIDUwMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWkuYWRkKHNldHRpbmdzLCAndmVsb2NpdHlfeFNlZWQnLCAxLCAxMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWkuYWRkKHNldHRpbmdzLCAndmVsb2NpdHlfeVNlZWQnLCAxLCAxMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWkuYWRkKHNldHRpbmdzLCAnb3BhY01heCcsIDAuMDEsIDEuMDApLm9uQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3VpLmFkZChzZXR0aW5ncywgJ29wYWNNaW4nLCAwLjAxLCAxLjAwKS5vbkNoYW5nZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGd1aS5hZGQoc2V0dGluZ3MsICdvcGFjU2VlZCcsIDEsIDEwMCkub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGd1aS5vcGVuKCk7XHJcbiAgICBcclxuICAgICAgICB2YXIgZGVnMnJhZCA9IGZ1bmN0aW9uIChhbmdsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYW5nbGUgKiAuMDE3NDUzMjkyNTE5OTQzMjk1OyAvLyAoYW5nbGUgLyAxODApICogTWF0aC5QSTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB2YXIgY29sb3JmcmVxID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgdmFyIGZyZXF1ZW5jeSA9IC4zO1xyXG4gICAgICAgICAgICBpID0gaSAlIDMyO1xyXG4gICAgICAgICAgICB2YXIgcmVkID0gTWF0aC5jZWlsKE1hdGguc2luKGZyZXF1ZW5jeSAqIGkgKyAwKSAqIDEyNyArIDEyOCk7XHJcbiAgICAgICAgICAgIHZhciBncmVlbiA9IE1hdGguY2VpbChNYXRoLnNpbihmcmVxdWVuY3kgKiBpICsgMikgKiAxMjcgKyAxMjgpO1xyXG4gICAgICAgICAgICB2YXIgYmx1ZSA9IE1hdGguY2VpbChNYXRoLnNpbihmcmVxdWVuY3kgKiBpICsgNCkgKiAxMjcgKyAxMjgpO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJyZ2JhKFwiICsgcmVkICsgXCIsXCIgKyBncmVlbiArIFwiLFwiICsgYmx1ZSArIFwiLFwiICsgc2V0dGluZ3MuYWxwaGEgKyBcIilcIjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgKGZ1bmN0aW9uIGFuaW1sb29wKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKGFuaW1sb29wKTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgMTAwMCwgMTAwMCk7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZXR0aW5ncy5wYXJ0aWNsZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc3RhcnNbaV0uZHJhdyhjdHgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFyc1tpXS54ID4gOTk4IHx8IChzdGFyc1tpXS5wYXJhbXMubGlmZXRpbWUgPCAwICYmIHN0YXJzW2ldLnBhcmFtcy5vcGFjaXR5IDw9IDApIHx8IChzdGFyc1tpXS55IDwgKDAgLSBzZXR0aW5ncy5tYXhyYWRpdXMpKSB8fCAoc3RhcnNbaV0ueCA8ICgwIC0gc2V0dGluZ3MubWF4cmFkaXVzKSkgfHwgKHN0YXJzW2ldLnkgPiAoNTAwICsgc2V0dGluZ3MubWF4cmFkaXVzKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFyc1tpXSA9IG5ldyBzdGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnNbaV0uaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJzW2ldLnBhcmFtcy54X29mZnNldCA9ICgtMSkgKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnNbaV0ueCAtPSBNYXRoLnJhbmRvbSgpICogMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJzW2ldLnBhcmFtcy5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICA8Y2FudmFzIGhlaWdodD1cIjUwMFwiIHdpZHRoPVwiMTAwMFwiIGNsYXNzTmFtZSA9IHtzdHlsZXMuY2FudmFzfSBpZD1cImNhbnZhc1wiPjwvY2FudmFzPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFydGljbGVzIiwid2luZG93IiwicmVxdWVzdEFuaW1GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwibW91c2Vkb3duIiwic2V0dGluZ3MiLCJ2ZWxvY2l0eV94IiwibW91c2V1cCIsInN0YXIiLCJvZmZzZXQiLCJ4IiwieSIsInBhcmFtcyIsInZlbG9jaXR5X3kiLCJvcGFjaWN0eSIsImxpZmV0aW1lIiwieF9vZmZzZXQiLCJ5X29mZnNldCIsInJhZGl1cyIsImRlY2F5IiwiZ3Jvd3RoIiwiYW1wbGl0dWRlIiwicGhhc2VzaGlmdCIsImZyZXEiLCJjb2xvciIsInByb3RvdHlwZSIsImluaXQiLCJNYXRoIiwicmFuZG9tIiwiY2VpbCIsImFtcGxpdHVkZVNlZWQiLCJmcmVxU2VlZCIsInlfY2VudGVyIiwieV9vZmZzZXRTZWVkIiwidmVsb2NpdHlfeFNlZWQiLCJ2ZWxvY2l0eV95U2VlZCIsIm1heHJhZGl1cyIsIm9wYWNpdHkiLCJyb3VuZCIsIm9wYWNTZWVkIiwiaXJyZWdDb2xvcnMiLCJjb2xvclBjdCIsImRyYXciLCJjdHgiLCJuZXdfeCIsInQiLCJvcGFjTWF4Iiwib3BhY01pbiIsInNpbiIsInNjYWxlX3kiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJQSSIsImZpbGwiLCJwYXJ0aWNsZXMiLCJzdGFycyIsImkiLCJndWkiLCJkYXQiLCJHVUkiLCJhZGQiLCJvbkNoYW5nZSIsInZhbHVlIiwib3BlbiIsImRlZzJyYWQiLCJhbmdsZSIsImNvbG9yZnJlcSIsImZyZXF1ZW5jeSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiYW5pbWxvb3AiLCJmaWxsUmVjdCIsInN0eWxlcyIsImNhbnZhcyJdLCJzb3VyY2VSb290IjoiIn0=