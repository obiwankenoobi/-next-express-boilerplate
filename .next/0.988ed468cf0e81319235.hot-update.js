webpackHotUpdate(0,{

/***/ "./pages/signup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_is_email__ = __webpack_require__("./node_modules/is-email/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_is_email___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_is_email__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__server_config__ = __webpack_require__("./server/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__server_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__server_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
var _jsxFileName = "/Users/artiumsirchenko/Desktop/coding/learning/school_projects/react/commentspanel/pages/signup.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var SignupPage =
/*#__PURE__*/
function (_Component) {
  _inherits(SignupPage, _Component);

  function SignupPage(props) {
    var _this;

    _classCallCheck(this, SignupPage);

    _this = _possibleConstructorReturn(this, (SignupPage.__proto__ || Object.getPrototypeOf(SignupPage)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleInput", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        var inputs = _this.state.inputs;
        inputs[name] = value;

        _this.setState({
          inputs: inputs
        }, function () {
          return console.log(_this.state.inputs[name]);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "emailValitade", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(email) {
        return __WEBPACK_IMPORTED_MODULE_4_is_email___default()(email);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "signup", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var isEmail = _this.emailValitade(_this.state.email);

        console.log(isEmail);

        if (_this.state.email && isEmail && _this.state.password && _this.state.password.length >= 6) {
          __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post("".concat(__WEBPACK_IMPORTED_MODULE_5__server_config___default.a.server, "/signup"), {
            username: _this.state.inputs.email,
            password: _this.state.inputs.password
          }).then(function (res) {
            if (res.data.code == 11000) {
              console.log('email exist');
            } else {
              console.log(res.data);
            }
          }).catch(function (e) {
            return console.log(e);
          });
        } else {
          console.log('couldnt do it');
        }
      }
    });
    _this.state = {
      inputs: {}
    };
    return _this;
  }

  _createClass(SignupPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, style, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Input */], {
        onChange: function onChange(e) {
          return _this2.handleInput(e);
        },
        name: "email",
        placeholder: "email",
        className: "center-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Input */], {
        onChange: function onChange(e) {
          return _this2.handleInput(e);
        },
        name: "password",
        type: "password",
        placeholder: "password",
        className: "center-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button___default.a, {
        onClick: this.signup,
        className: "center-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Signup"))));
    }
  }]);

  return SignupPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var style = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
  jsx: "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  }
}, "\n            .center-input {\n                margin: 0 auto;\n                width:100%;\n                margin-top:0.5rem;\n            }\n            .center {\n                width:40%;\n                margin-left:auto;\n                margin-right:auto;\n                margin-top:5rem;\n            }\n        ");
/* harmony default export */ __webpack_exports__["default"] = (SignupPage);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/signup")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=0.988ed468cf0e81319235.hot-update.js.map