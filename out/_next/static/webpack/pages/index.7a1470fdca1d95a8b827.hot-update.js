webpackHotUpdate_N_E("pages/index",{

/***/ "./components/post_cards/card_1.tsx":
/*!******************************************!*\
  !*** ./components/post_cards/card_1.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_wp_context_app_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/wp_context/app_context */ \"./context/wp_context/app_context.tsx\");\n\n\nvar _jsxFileName = \"/home/diazwebapp/projects/diazwebapp/pwa-nextjs-ts/components/post_cards/card_1.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Card_1 = function Card_1(_ref) {\n  _s();\n\n  var post = _ref.post;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_context_wp_context_app_context__WEBPACK_IMPORTED_MODULE_4__[\"App_context\"]),\n      app = _useContext.app;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(_context_wp_context_app_context__WEBPACK_IMPORTED_MODULE_4__[\"default_file\"]),\n      image = _useState[0],\n      setImage = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var rs = app.files.find(function (file) {\n      return file.id == post.featured_media;\n    });\n    console.log(rs);\n    setImage(rs);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/blog/\".concat(post.slug),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: \"jsx-2958634247\" + \" \" + \"card_1\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: image === null || image === void 0 ? void 0 : image.source_url,\n        alt: \"\".concat(image === null || image === void 0 ? void 0 : image.slug),\n        className: \"jsx-2958634247\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        className: \"jsx-2958634247\",\n        children: post.title.rendered\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        id: \"2958634247\",\n        children: \"a.jsx-2958634247{width:100%;height:100%;background:lightgrey;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpYXp3ZWJhcHAvcHJvamVjdHMvZGlhendlYmFwcC9wd2EtbmV4dGpzLXRzL2NvbXBvbmVudHMvcG9zdF9jYXJkcy9jYXJkXzEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCd0IsQUFHdUMsV0FDQyxZQUNTLHFCQUN4QiIsImZpbGUiOiIvaG9tZS9kaWF6d2ViYXBwL3Byb2plY3RzL2RpYXp3ZWJhcHAvcHdhLW5leHRqcy10cy9jb21wb25lbnRzL3Bvc3RfY2FyZHMvY2FyZF8xLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBBcHBfY29udGV4dCwgZGVmYXVsdF9maWxlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvd3BfY29udGV4dC9hcHBfY29udGV4dFwiXG5pbXBvcnQgeyBGaWxlLCBQb3N0IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvYXBwX2ludGVyZmFjZXNcIlxuXG50eXBlIFByb3BzPXtcbiAgICBwb3N0OlBvc3Rcbn1cbmNvbnN0IENhcmRfMSA9ICh7cG9zdH06UHJvcHMpPT57XG4gICAgY29uc3Qge2FwcH0gPSB1c2VDb250ZXh0KEFwcF9jb250ZXh0KVxuICAgIGNvbnN0IFtpbWFnZSxzZXRJbWFnZV0gPSB1c2VTdGF0ZTxGaWxlIHwgdW5kZWZpbmVkPihkZWZhdWx0X2ZpbGUpXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHJzID0gYXBwLmZpbGVzLmZpbmQoKGZpbGU6RmlsZSk9PmZpbGUuaWQgPT0gcG9zdC5mZWF0dXJlZF9tZWRpYSlcbiAgICAgICAgY29uc29sZS5sb2cocnMpXG4gICAgICAgIHNldEltYWdlKHJzKVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7cG9zdC5zbHVnfWB9ID5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmRfMVwiID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2U/LnNvdXJjZV91cmx9IGFsdD17YCR7aW1hZ2U/LnNsdWd9YH0vPlxuICAgICAgICAgICAgICAgIDxiPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvYj5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmxpZ2h0Z3JleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRfMSJdfQ== */\\n/*@ sourceURL=/home/diazwebapp/projects/diazwebapp/pwa-nextjs-ts/components/post_cards/card_1.tsx */\"\n      }, void 0, false, void 0, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Card_1, \"BKPQZkCZpuDu+y9VhZoVrv4Lhq4=\");\n\n_c = Card_1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card_1);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card_1\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0X2NhcmRzL2NhcmRfMS50c3g/ZWNiNiJdLCJuYW1lcyI6WyJDYXJkXzEiLCJwb3N0IiwidXNlQ29udGV4dCIsIkFwcF9jb250ZXh0IiwiYXBwIiwidXNlU3RhdGUiLCJkZWZhdWx0X2ZpbGUiLCJpbWFnZSIsInNldEltYWdlIiwidXNlRWZmZWN0IiwicnMiLCJmaWxlcyIsImZpbmQiLCJmaWxlIiwiaWQiLCJmZWF0dXJlZF9tZWRpYSIsImNvbnNvbGUiLCJsb2ciLCJzbHVnIiwic291cmNlX3VybCIsInRpdGxlIiwicmVuZGVyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU1BLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsSUFBYyxRQUFkQSxJQUFjOztBQUFBLG9CQUNiQyx3REFBVSxDQUFDQywyRUFBRCxDQURHO0FBQUEsTUFDcEJDLEdBRG9CLGVBQ3BCQSxHQURvQjs7QUFBQSxrQkFFRkMsc0RBQVEsQ0FBbUJDLDRFQUFuQixDQUZOO0FBQUEsTUFFcEJDLEtBRm9CO0FBQUEsTUFFZEMsUUFGYzs7QUFHM0JDLHlEQUFTLENBQUMsWUFBSTtBQUNWLFFBQU1DLEVBQUUsR0FBR04sR0FBRyxDQUFDTyxLQUFKLENBQVVDLElBQVYsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsYUFBYUEsSUFBSSxDQUFDQyxFQUFMLElBQVdiLElBQUksQ0FBQ2MsY0FBN0I7QUFBQSxLQUFmLENBQVg7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlQLEVBQVo7QUFDQUYsWUFBUSxDQUFDRSxFQUFELENBQVI7QUFDSCxHQUpRLENBQVQ7QUFLQSxzQkFDSSxxRUFBQyxnREFBRDtBQUFNLFFBQUksa0JBQVdULElBQUksQ0FBQ2lCLElBQWhCLENBQVY7QUFBQSwyQkFDSTtBQUFBLDBDQUFhLFFBQWI7QUFBQSw4QkFDSTtBQUFLLFdBQUcsRUFBRVgsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVZLFVBQWpCO0FBQTZCLFdBQUcsWUFBS1osS0FBTCxhQUFLQSxLQUFMLHVCQUFLQSxLQUFLLENBQUVXLElBQVosQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUE7QUFBQSxrQkFBSWpCLElBQUksQ0FBQ21CLEtBQUwsQ0FBV0M7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0JILENBNUJEOztHQUFNckIsTTs7S0FBQUEsTTtBQThCU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RfY2FyZHMvY2FyZF8xLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBBcHBfY29udGV4dCwgZGVmYXVsdF9maWxlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvd3BfY29udGV4dC9hcHBfY29udGV4dFwiXG5pbXBvcnQgeyBGaWxlLCBQb3N0IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvYXBwX2ludGVyZmFjZXNcIlxuXG50eXBlIFByb3BzPXtcbiAgICBwb3N0OlBvc3Rcbn1cbmNvbnN0IENhcmRfMSA9ICh7cG9zdH06UHJvcHMpPT57XG4gICAgY29uc3Qge2FwcH0gPSB1c2VDb250ZXh0KEFwcF9jb250ZXh0KVxuICAgIGNvbnN0IFtpbWFnZSxzZXRJbWFnZV0gPSB1c2VTdGF0ZTxGaWxlIHwgdW5kZWZpbmVkPihkZWZhdWx0X2ZpbGUpXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHJzID0gYXBwLmZpbGVzLmZpbmQoKGZpbGU6RmlsZSk9PmZpbGUuaWQgPT0gcG9zdC5mZWF0dXJlZF9tZWRpYSlcbiAgICAgICAgY29uc29sZS5sb2cocnMpXG4gICAgICAgIHNldEltYWdlKHJzKVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7cG9zdC5zbHVnfWB9ID5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmRfMVwiID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2U/LnNvdXJjZV91cmx9IGFsdD17YCR7aW1hZ2U/LnNsdWd9YH0vPlxuICAgICAgICAgICAgICAgIDxiPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvYj5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmxpZ2h0Z3JleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRfMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/post_cards/card_1.tsx\n");

/***/ })

})