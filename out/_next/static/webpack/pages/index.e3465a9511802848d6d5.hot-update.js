webpackHotUpdate_N_E("pages/index",{

/***/ "./controlers/app_controller.ts":
/*!**************************************!*\
  !*** ./controlers/app_controller.ts ***!
  \**************************************/
/*! exports provided: get_app_info, get_all_posts, get_post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_app_info\", function() { return get_app_info; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_all_posts\", function() { return get_all_posts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_post\", function() { return get_post; });\n/* harmony import */ var _home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _context_wp_context_app_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/wp_context/app_context */ \"./context/wp_context/app_context.tsx\");\n\n\n\nvar get_app_info = /*#__PURE__*/function () {\n  var _ref = Object(_home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var req, res;\n    return _home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(\"\".concat(\"http://localhost:5000/wp-json\"));\n\n          case 3:\n            req = _context.sent;\n            _context.next = 6;\n            return req.json();\n\n          case 6:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res);\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(_context.t0);\n            return _context.abrupt(\"return\", _context_wp_context_app_context__WEBPACK_IMPORTED_MODULE_2__[\"initialApp\"]);\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 10]]);\n  }));\n\n  return function get_app_info() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar get_all_posts = /*#__PURE__*/function () {\n  var _ref3 = Object(_home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2) {\n    var post_type, req, res;\n    return _home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            post_type = _ref2.post_type;\n            _context2.prev = 1;\n            _context2.next = 4;\n            return fetch(\"\".concat(\"http://localhost:5000/wp-json\", \"/wp/v2/\").concat(post_type ? post_type : 'posts'));\n\n          case 4:\n            req = _context2.sent;\n            _context2.next = 7;\n            return req.json();\n\n          case 7:\n            res = _context2.sent;\n            return _context2.abrupt(\"return\", res);\n\n          case 11:\n            _context2.prev = 11;\n            _context2.t0 = _context2[\"catch\"](1);\n            console.error(_context2.t0);\n            return _context2.abrupt(\"return\", []);\n\n          case 15:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[1, 11]]);\n  }));\n\n  return function get_all_posts(_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar get_post = /*#__PURE__*/function () {\n  var _ref5 = Object(_home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref4) {\n    var post_type, slug, req, res;\n    return _home_diazwebapp_projects_diazwebapp_pwa_nextjs_ts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            post_type = _ref4.post_type, slug = _ref4.slug;\n            _context3.prev = 1;\n            _context3.next = 4;\n            return fetch(\"\".concat(\"http://localhost:5000/wp-json\", \"/wp/v2/\").concat(post_type ? post_type : 'posts').concat(slug ? \"?slug=\".concat(slug) : ''));\n\n          case 4:\n            req = _context3.sent;\n            _context3.next = 7;\n            return req.json();\n\n          case 7:\n            res = _context3.sent;\n            return _context3.abrupt(\"return\", res[0]);\n\n          case 11:\n            _context3.prev = 11;\n            _context3.t0 = _context3[\"catch\"](1);\n            console.log(_context3.t0);\n            return _context3.abrupt(\"return\", _context_wp_context_app_context__WEBPACK_IMPORTED_MODULE_2__[\"default_post\"]);\n\n          case 15:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[1, 11]]);\n  }));\n\n  return function get_post(_x2) {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udHJvbGVycy9hcHBfY29udHJvbGxlci50cz9jOWEyIl0sIm5hbWVzIjpbImdldF9hcHBfaW5mbyIsImZldGNoIiwicHJvY2VzcyIsInJlcSIsImpzb24iLCJyZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJpbml0aWFsQXBwIiwiZ2V0X2FsbF9wb3N0cyIsInBvc3RfdHlwZSIsImdldF9wb3N0Iiwic2x1ZyIsImxvZyIsImRlZmF1bHRfcG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBRU8sSUFBTUEsWUFBWTtBQUFBLDRUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFRkMsS0FBSyxXQUFJQywrQkFBSixFQUZIOztBQUFBO0FBRWRDLGVBRmM7QUFBQTtBQUFBLG1CQUdFQSxHQUFHLENBQUNDLElBQUosRUFIRjs7QUFBQTtBQUdkQyxlQUhjO0FBQUEsNkNBSWJBLEdBSmE7O0FBQUE7QUFBQTtBQUFBO0FBTXBCQyxtQkFBTyxDQUFDQyxLQUFSO0FBTm9CLDZDQU9iQywwRUFQYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFaUixZQUFZO0FBQUE7QUFBQTtBQUFBLEdBQWxCO0FBY0EsSUFBTVMsYUFBYTtBQUFBLDZUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPQyxxQkFBUCxTQUFPQSxTQUFQO0FBQUE7QUFBQTtBQUFBLG1CQUVIVCxLQUFLLFdBQUlDLCtCQUFKLG9CQUE2QlEsU0FBUyxHQUFDQSxTQUFELEdBQVcsT0FBakQsRUFGRjs7QUFBQTtBQUVmUCxlQUZlO0FBQUE7QUFBQSxtQkFHSUEsR0FBRyxDQUFDQyxJQUFKLEVBSEo7O0FBQUE7QUFHZkMsZUFIZTtBQUFBLDhDQUlkQSxHQUpjOztBQUFBO0FBQUE7QUFBQTtBQU1yQkMsbUJBQU8sQ0FBQ0MsS0FBUjtBQU5xQiw4Q0FPZCxFQVBjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJFLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7QUFXQSxJQUFNRSxRQUFRO0FBQUEsNlRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU9ELHFCQUFQLFNBQU9BLFNBQVAsRUFBaUJFLElBQWpCLFNBQWlCQSxJQUFqQjtBQUFBO0FBQUE7QUFBQSxtQkFFRVgsS0FBSyxXQUFJQywrQkFBSixvQkFBNkJRLFNBQVMsR0FBQ0EsU0FBRCxHQUFXLE9BQWpELFNBQTJERSxJQUFJLG1CQUFVQSxJQUFWLElBQWlCLEVBQWhGLEVBRlA7O0FBQUE7QUFFVlQsZUFGVTtBQUFBO0FBQUEsbUJBR1NBLEdBQUcsQ0FBQ0MsSUFBSixFQUhUOztBQUFBO0FBR1ZDLGVBSFU7QUFBQSw4Q0FJVEEsR0FBRyxDQUFDLENBQUQsQ0FKTTs7QUFBQTtBQUFBO0FBQUE7QUFNaEJDLG1CQUFPLENBQUNPLEdBQVI7QUFOZ0IsOENBT1RDLDRFQVBTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVJILFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZCIsImZpbGUiOiIuL2NvbnRyb2xlcnMvYXBwX2NvbnRyb2xsZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHAsIFBvc3QgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9hcHBfaW50ZXJmYWNlc1wiXG5pbXBvcnQge2luaXRpYWxBcHAsZGVmYXVsdF9wb3N0fSBmcm9tICcuLi9jb250ZXh0L3dwX2NvbnRleHQvYXBwX2NvbnRleHQnXG5cbmV4cG9ydCBjb25zdCBnZXRfYXBwX2luZm8gPSBhc3luYygpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJfWApXG4gICAgICAgIGNvbnN0IHJlczpBcHAgPSBhd2FpdCByZXEuanNvbigpXG4gICAgICAgIHJldHVybiByZXNcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICByZXR1cm4gaW5pdGlhbEFwcFxuICAgIH1cbn1cbnR5cGUgR2V0UG9zdFBhcmFtcz17XG4gICAgcG9zdF90eXBlPzpzdHJpbmcsXG4gICAgc2x1Zz86c3RyaW5nXG59XG5leHBvcnQgY29uc3QgZ2V0X2FsbF9wb3N0cyA9IGFzeW5jKHtwb3N0X3R5cGV9OkdldFBvc3RQYXJhbXMpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJfS93cC92Mi8ke3Bvc3RfdHlwZT9wb3N0X3R5cGU6J3Bvc3RzJ31gKVxuICAgICAgICBjb25zdCByZXM6UG9zdFtdID0gYXdhaXQgcmVxLmpzb24oKVxuICAgICAgICByZXR1cm4gcmVzXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0X3Bvc3QgPSBhc3luYyh7cG9zdF90eXBlLHNsdWd9OkdldFBvc3RQYXJhbXMpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJfS93cC92Mi8ke3Bvc3RfdHlwZT9wb3N0X3R5cGU6J3Bvc3RzJ30ke3NsdWc/YD9zbHVnPSR7c2x1Z31gOicnfWApXG4gICAgICAgIGNvbnN0IHJlczpQb3N0W10gPSBhd2FpdCByZXEuanNvbigpXG4gICAgICAgIHJldHVybiByZXNbMF1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRfcG9zdFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./controlers/app_controller.ts\n");

/***/ })

})