module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/signup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_is_email__ = __webpack_require__("is-email");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_is_email___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_is_email__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__server_config__ = __webpack_require__("./server/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__server_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__server_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("axios");
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

        _this.cleanErrors(name);

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
    Object.defineProperty(_assertThisInitialized(_this), "cleanErrors", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name) {
        var errors = _this.state.errors;
        errors[name] = false;

        _this.setState({
          errors: errors
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "isInputEmpty", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state = _this.state,
            inputs = _this$state.inputs,
            errors = _this$state.errors;

        for (var key in inputs) {
          if (inputs[key].length == 0) {
            errors[key] = true;
          }
        }

        _this.setState({
          errors: errors
        }, function () {
          return console.log(_this.state.errors);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "signup", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var isEmail = _this.emailValitade(_this.state.inputs.email);

        _this.isInputEmpty();

        console.log(isEmail);

        if (_this.state.inputs.email && isEmail && _this.state.inputs.password && _this.state.inputs.password.length >= 6) {
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
      inputs: {
        password: '',
        email: ''
      },
      errors: {}
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
          lineNumber: 78
        }
      }, style, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Input"], {
        error: this.state.errors.email ? true : false,
        onChange: function onChange(e) {
          return _this2.handleInput(e);
        },
        name: "email",
        placeholder: "email",
        className: "center-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Input"], {
        error: this.state.errors.password ? true : false,
        onChange: function onChange(e) {
          return _this2.handleInput(e);
        },
        name: "password",
        type: "password",
        placeholder: "password",
        className: "center-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button___default.a, {
        onClick: this.signup,
        className: "center-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
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
    lineNumber: 102
  }
}, "\n            .center-input {\n                margin: 0 auto;\n                width:100%;\n                margin-top:0.5rem;\n            }\n            .center {\n                width:40%;\n                margin-left:auto;\n                margin-right:auto;\n                margin-top:5rem;\n            }\n        ");
/* harmony default export */ __webpack_exports__["default"] = (SignupPage);

/***/ }),

/***/ "./server/config.js":
/***/ (function(module, exports) {

var config = {
  cookieParserSecret: process.env.cookieParserSecret || "<SECRET>",
  // secret for cookie parser
  JWTsecret: process.env.JWTsecret || "<SECRET>",
  // secret for JWT 
  nodemailerEmail: process.env.nodemailerEmail || "office@cbsns.me",
  // your email client
  nodemailerPw: process.env.nodemailerPw || "Tryhuo1212131!",
  // your email password client
  smtp: "smtp.domain.com",
  // i.e 'smtp.domain.com'
  mongoUsername: process.env.mongoUsername || "<mongo username>",
  // if you have your db
  mongoPw: process.env.mongoPw || "<mongo pw>",
  // if you have your db
  mongoUrl: process.env.mongoUrl || "<mongo remote server url>",
  server: process.env.server || "http://localhost:3010",
  // your frontend server
  frontEndServer: process.env.frontEndServer || "http://localhost:3000" // your front end server

};
module.exports = config;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/signup.js");


/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "is-email":
/***/ (function(module, exports) {

module.exports = require("is-email");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map