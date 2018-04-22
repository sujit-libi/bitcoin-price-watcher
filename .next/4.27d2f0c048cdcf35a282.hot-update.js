webpackHotUpdate(4,{

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\ProjectBackUp\\next\\nextapp\\pages\\about.js";


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var About = function About() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 2
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "ul",
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 3
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 4
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Link,
                    { href: "/", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 4
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "a",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 4
                            }
                        },
                        "Home"
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 5
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Link,
                    { href: "/about", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 5
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "a",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 5
                            }
                        },
                        "About"
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h1",
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            "About BitzPrice"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            "Application to view Bitcoin prices"
        )
    );
};

var _default = About;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(About, "About", "C:/ProjectBackUp/next/nextapp/pages/about.js");
    reactHotLoader.register(_default, "default", "C:/ProjectBackUp/next/nextapp/pages/about.js");
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.27d2f0c048cdcf35a282.hot-update.js.map