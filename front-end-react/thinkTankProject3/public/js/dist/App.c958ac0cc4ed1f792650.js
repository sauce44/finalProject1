/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/team.js":
/*!************************!*\
  !*** ./models/team.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  model,\n  Schema\n} = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n\nconst teamSchema = new Schema([{\n  team: Boolean,\n  teamName: String,\n  users: [{\n    type: Schema.Types.ObjectId,\n    ref: 'User'\n  }]\n}]);\nconst Team = model('Team', teamSchema);\nmodule.exports = Team;\n\n//# sourceURL=webpack:///./models/team.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/styles.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/scss/styles.scss ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/styles.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _router_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router/routes */ \"./src/router/routes.js\");\n\n\n\n\nconst NavBar = props => {\n  // for (let i = 0; routes.length - 1; i++) {\n  // \tlet SortedRoutes = props.routes[i].key.sort();\n  // }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"NavBar\"\n  }, props.routes.map((_ref) => {\n    let {\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      key: key,\n      to: path\n    }, key);\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (NavBar);\n\n//# sourceURL=webpack:///./src/components/NavBar.js?");

/***/ }),

/***/ "./src/components/authentication-button.js":
/*!*************************************************!*\
  !*** ./src/components/authentication-button.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _login_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-button */ \"./src/components/login-button.js\");\n/* harmony import */ var _logout_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout-button */ \"./src/components/logout-button.js\");\n\n\n\n\nconst AuthenticationButton = props => {\n  return props.isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logout_button__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_button__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AuthenticationButton);\n\n//# sourceURL=webpack:///./src/components/authentication-button.js?");

/***/ }),

/***/ "./src/components/login-button.js":
/*!****************************************!*\
  !*** ./src/components/login-button.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction LoginButton(props) {\n  const [clicked, setClicked] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const handleClick = () => {\n    setClicked(true);\n  };\n\n  const handleSubmit = () => {\n    document.getElementsByClassName('login-button').style.display = 'none';\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"login-button\",\n    onClick: handleClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Log In\")), clicked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"login-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"email\"\n  }, \"Email:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"email\",\n    onChange: props.handleInput\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"password\"\n  }, \"Password:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"password\",\n    onChange: props.handleInput\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    value: \"Submit\",\n    type: \"submit\",\n    onClick: props.handleLogIn,\n    onSubmit: handleSubmit\n  })) : '');\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (LoginButton);\n\n//# sourceURL=webpack:///./src/components/login-button.js?");

/***/ }),

/***/ "./src/components/logout-button.js":
/*!*****************************************!*\
  !*** ./src/components/logout-button.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction LogoutButton(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Log Out\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    value: \"Log Out\",\n    type: \"submit\",\n    onClick: props.handleLogOut\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (LogoutButton);\n\n//# sourceURL=webpack:///./src/components/logout-button.js?");

/***/ }),

/***/ "./src/components/signup-button.js":
/*!*****************************************!*\
  !*** ./src/components/signup-button.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction SignUpButton(props) {\n  const [clicked, setClicked] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const handleClick = () => {\n    setClicked(true);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"signup-button\",\n    onClick: handleClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Sign Up\")), clicked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"email\"\n  }, \"Email:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"Email\",\n    onChange: props.handleInput\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"password\"\n  }, \"Password:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"Password\",\n    onChange: props.handleInput\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    value: \"Submit\",\n    type: \"submit\",\n    onClick: props.handleSignUp\n  })) : '');\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (SignUpButton);\n\n//# sourceURL=webpack:///./src/components/signup-button.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\n // import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null)), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nfunction App(props) {\n  console.log('props', props);\n  const [posts, setPosts] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const titleInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const bodyInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch('/api/posts');\n        const data = yield response.json();\n        yield setPosts([data]);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n\n  const handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* (e) {\n      e.preventDefault();\n      const titleValue = titleInput.current.value;\n      const bodyValue = bodyInput.current.value;\n      console.log('title input', titleValue);\n      console.log('bodyval', bodyValue);\n      console.log('json stringify', JSON.stringify({\n        title: titleValue,\n        body: bodyValue\n      }));\n\n      try {\n        const response = yield fetch('/api/posts/', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify({\n            title: titleValue,\n            body: bodyValue\n          }) // body: JSON.stringify({\n          // \ttitle: titleValue,\n          // \tbody: bodyValue\n          // })\n\n        });\n        const data = yield response.json();\n        console.log('data', data);\n        yield setPosts([...posts, data]);\n      } catch (error) {\n        console.log('errorrrrrrr', error);\n        console.error(error);\n      }\n\n      titleInput.current.value = '';\n      bodyInput.current.value = '';\n    });\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"FullPage\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"AppPage\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"newPost\",\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Post Title: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: titleInput\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Description: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: bodyInput\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"submit\",\n    type: \"submit\",\n    value: \"Create Tank\"\n  }))), posts && posts.map(post => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"posts\",\n      key: post._id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      to: \"/\".concat(post._id, \"/posts\")\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, post.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, post.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, post.comments && post.comments.length ? post.comments.map(comment => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"Comments\",\n        key: comment._id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, comment.name, \" says... \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, comment.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, comment.createdAt));\n    }) : ''));\n  }));\n}\n\n//# sourceURL=webpack:///./src/pages/App.js?");

/***/ }),

/***/ "./src/pages/Blue.js":
/*!***************************!*\
  !*** ./src/pages/Blue.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Blue; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _models_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/team */ \"./models/team.js\");\n/* harmony import */ var _models_team__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_team__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nfunction Blue(props) {\n  const [post, setPost] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const titleInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const bodyInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch('/api/teams');\n        const data = yield response.json();\n        setPost(data.fitler(team => team.users.teamName === 'blue'));\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  });\n\n  const handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* (e) {\n      e.preventDefault();\n      const titleValue = titleInput.current.value;\n      const bodyValue = bodyInput.current.value;\n\n      try {\n        const response = yield fetch('/api/posts', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify({\n            title: titleValue,\n            body: bodyValue\n          })\n        });\n        const data = yield response.json();\n        setPost([...post, data]);\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"BluePage\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"WelcomeHeaderBlue\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"Welcome\"\n  }, \"Welcome to the Blue Think Tank\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"tagLine\"\n  }, \"You will be placed with posts from the Blue team.\")), post.map(team => {\n    /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"Users\",\n      key: team.users._id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"Posts\",\n      key: team.users.posts._id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      to: \"/post/\".concat(team.users.posts._id)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, team.users.posts.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, team.users.posts.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, team.users.posts.comments && team.users.posts.comments.length ? team.users.posts.comments.map(comment => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"Comments\",\n        key: comment._id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, comment.name, \" says... \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, comment.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, comment.createdAt));\n    }) : '')));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"footer\",\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Title: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: titleInput\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Body: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: bodyInput\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Create Tank\"\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/Blue.js?");

/***/ }),

/***/ "./src/pages/Red.js":
/*!**************************!*\
  !*** ./src/pages/Red.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Red; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _models_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/team */ \"./models/team.js\");\n/* harmony import */ var _models_team__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_team__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nfunction Red(props) {\n  const [post, setPost] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const titleInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const bodyInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch('/api/teams');\n        const data = yield response.json();\n        setPost(data.filter(team => team.users.teamName === 'red'));\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n\n  const handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* (e) {\n      e.preventDefault();\n      const titleValue = titleInput.current.value;\n      const bodyValue = bodyInput.current.value;\n\n      try {\n        const response = yield fetch('/api/posts', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify({\n            title: titleValue,\n            body: bodyValue\n          })\n        });\n        const data = yield response.json();\n        setPost([...post, data]);\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"RedPage\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"WelcomeHeaderRed\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"Welcome\"\n  }, \"Welcome to the Red Think Tank\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"tagLine\"\n  }, \"You will be placed with posts from the Red team.\")), post.map(team => {\n    /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"Users\",\n      key: team.users._id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"Posts\",\n      key: team.users.posts._id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      to: \"/post/\".concat(team.users.posts._id)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, team.users.posts.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, team.users.posts.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, team.users.posts.comments && team.users.posts.comments.length ? team.users.posts.comments.map(comment => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"Comments\",\n        key: comment._id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, comment.name, \" says... \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, comment.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, comment.createdAt));\n    }) : '')));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"footer\",\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Title: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: titleInput\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Body: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: bodyInput\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Create Tank\"\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/Red.js?");

/***/ }),

/***/ "./src/pages/UserProfile.js":
/*!**********************************!*\
  !*** ./src/pages/UserProfile.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return useProfile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction useProfile(props) {\n  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [teamData, setTeamData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [joinedTeam, setJoinedTeam] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/users/\".concat(props.match.params.user.id));\n        const data = yield response.json();\n        setUser(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, [user]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/teams\");\n        const data = yield response.json();\n        setTeamData(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    /*#__PURE__*/\n    (function () {\n      var _ref3 = _asyncToGenerator(function* (e) {\n        e.preventDefault(); // while (user.team == false) {\n        // \tif (teamData.map(team => team.users.job.includes()) == false) {\n        // \t\tasync e => {\n        // \t\t\te.preventDefault();\n        // \t\t\ttry {\n        // \t\t\t\tconst response = await fetch(`/api/teams`, {\n        // \t\t\t\t\tmethod: 'POST',\n        // \t\t\t\t\theaders: {\n        // \t\t\t\t\t\t'Content-Type': 'application/json'\n        // \t\t\t\t\t},\n        // \t\t\t\t\tbody: body\n        // \t\t\t\t});\n        // \t\t\t} catch (error) {\n        // \t\t\t\tconsole.error(error);\n        // \t\t\t}\n        // \t\t};\n        // \t}\n        // }\n\n        try {\n          const response = yield fetch(\"/api/users/\".concat(props.match.params.user.id), {\n            method: 'POST',\n            headers: {\n              'Content-Type': 'application/json'\n            },\n            body: body\n          });\n          const data = yield response.json();\n          setUser(data);\n        } catch (error) {\n          console.error(error);\n        }\n      });\n\n      return function (_x) {\n        return _ref3.apply(this, arguments);\n      };\n    })();\n  }, [user]);\n\n  const selectJob = () => {\n    let e = document.querySelector('.Dropdown');\n    let output = e.options[e.selectedIndex].value;\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n      /*#__PURE__*/\n      (function () {\n        var _ref4 = _asyncToGenerator(function* (e) {\n          e.preventDefault();\n          const body = JSON.stringify({\n            users: {\n              job: output\n            }\n          });\n\n          try {\n            const response = yield fetch(\"/api/users/\".concat(props.match.params.user.id), {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: body\n            });\n            const data = yield response.json();\n            setUser(data);\n          } catch (error) {\n            console.error(error);\n          }\n        });\n\n        return function (_x2) {\n          return _ref4.apply(this, arguments);\n        };\n      })();\n    });\n  };\n\n  const joinTeam = () => {\n    if (user.team == false) {\n      for (i = 0; i < teamData.users.length; i++) {\n        if (teamData.users[i].jobs.includes(users => users.job == output) == false) {\n          Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n            /*#__PURE__*/\n            (function () {\n              var _ref5 = _asyncToGenerator(function* (e) {\n                e.preventDefault();\n                const body = JSON.stringify({\n                  users: {\n                    users: user\n                  }\n                });\n\n                try {\n                  const response = yield fetch(\"/api/teams/\".concat(props.match.params.user.id), {\n                    method: 'PUT',\n                    headers: {\n                      'Content-Type': 'application/json'\n                    },\n                    body: body\n                  });\n                  const data = yield response.json();\n                  setTeamData(...teamData, data);\n                } catch (error) {\n                  console.error(error);\n                }\n              });\n\n              return function (_x3) {\n                return _ref5.apply(this, arguments);\n              };\n            })();\n          });\n          setJoinedTeam(true);\n        } else {\n          alert(\"All Team's Are Full, Adding You To A New Team\");\n          Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n            /*#__PURE__*/\n            (function () {\n              var _ref6 = _asyncToGenerator(function* (e) {\n                e.preventDefault();\n                const body = JSON.stringify({\n                  users: {\n                    users: user\n                  }\n                });\n\n                try {\n                  const response = yield fetch(\"/api/teams\", {\n                    method: 'POST',\n                    headers: {\n                      'Content-Type': 'application/json'\n                    },\n                    body: body\n                  });\n                  const data = yield response.json();\n                  setTeamData(...teamData, data);\n                } catch (error) {\n                  console.error(error);\n                }\n              });\n\n              return function (_x4) {\n                return _ref6.apply(this, arguments);\n              };\n            })();\n          });\n          setJoinedTeam(true);\n        }\n      }\n    }\n  };\n\n  joinTeam();\n\n  if (props.isLoggedIn == true && joinedTeam == true) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"UserProfile\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"WelcomeHeader\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      className: \"Welcome\"\n    }, \"Think Tank\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      to: \"/\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"backHome\"\n    }, \"Back Home\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Email: \", user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Posts:\", ' ', user.map(post => {\n      /*#__PURE__*/\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"Posts\",\n        key: post.posts._id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"Card\",\n        key: post.posts._id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n        to: \"/post/\".concat(post.posts._id)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, post.posts.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, post.posts.body)));\n    })));\n  }\n\n  if (props.isLoggedIn == true && joinedTeam == false) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"UserProfile\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"WelcomeHeader\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      className: \"Welcome\"\n    }, \"Think Tank\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      to: \"/\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"backHome\"\n    }, \"Back Home\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Email: \", user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"job\"\n    }, \"It's Time To Sort You, Select Speciality\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n      className: \"Dropdown\",\n      onSelect: selectJob\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"Tech\"\n    }, \"Tech\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"Art\"\n    }, \"Art\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"Engineer\"\n    }, \"Engineer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"Farmer\"\n    }, \"Farmer\"))));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"UserProfile\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"WelcomeHeader\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"Welcome\"\n  }, \"Think Tank\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"backHome\"\n  }, \"Back Home\"))));\n}\n\n//# sourceURL=webpack:///./src/pages/UserProfile.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\n/* harmony import */ var _components_authentication_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/authentication-button */ \"./src/components/authentication-button.js\");\n/* harmony import */ var _components_signup_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/signup-button */ \"./src/components/signup-button.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst AppRouter = props => {\n  const [userData, setUserData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    Email: '',\n    Password: '',\n    isLoggedIn: false\n  });\n  const [isLoggedIn, setIsLoggedIn] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (localStorage.token) {\n      setIsLoggedIn(true);\n    } else {\n      setIsLoggedIn(false);\n    }\n  }, [isLoggedIn]);\n\n  const handleLogOut = () => {\n    setUserData({\n      Email: '',\n      Password: '',\n      isLoggedIn: false\n    });\n    localStorage.clear();\n  };\n\n  const handleInput = event => {\n    setUserData(_objectSpread(_objectSpread({}, userData), {}, {\n      [event.target.name]: event.target.value\n    }));\n  };\n\n  const handleSignUp = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (event) {\n      event.preventDefault();\n\n      try {\n        const response = yield axios.post('http://localhost:3001/register', {\n          Email: state.email,\n          Password: state.password\n        });\n        console.log(response);\n        localStorage.setItem('token', response.data.token);\n        setIsLoggedIn(true);\n      } catch (err) {\n        console.log(err);\n      }\n    });\n\n    return function handleSignUp(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  const handleLogIn = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* (event) {\n      event.preventDefault();\n\n      try {\n        const response = yield axios.post('http://localhost:3001/login', {\n          Email: state.email,\n          Password: state.password\n        });\n        localStorage.setItem('token', response.data.token);\n        setIsLoggedIn(true);\n      } catch (error) {\n        console.log(error);\n      }\n    });\n\n    return function handleLogIn(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pageWrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"WelcomeHeader\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"Welcome\"\n  }, \"Welcome to the Think Tank\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"tagLine\"\n  }, \"Popular Posts\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    routes: _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"],\n    isLoggedIn: isLoggedIn\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_authentication_button__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"], {\n    className: \"Login\",\n    props: isLoggedIn\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_signup_button__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    className: \"Signup\",\n    props: (handleSignUp, handleInput)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].map((_ref3) => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref3;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      component: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({\n        page: key\n      }, props, {\n        isLoggedIn: isLoggedIn,\n        handleInput: handleInput,\n        handleLogIn: handleLogIn,\n        handleLogOut: handleLogOut,\n        handleSignUp: handleSignUp\n      }))\n    });\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n/* harmony import */ var _pages_UserProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/UserProfile */ \"./src/pages/UserProfile.js\");\n/* harmony import */ var _pages_Red__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Red */ \"./src/pages/Red.js\");\n/* harmony import */ var _pages_Blue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Blue */ \"./src/pages/Blue.js\");\n// import React from 'react';\n // import About from '../pages/About';\n// import Home from '../pages/Home';\n// import Contact from '../pages/Contact';\n// import Post from '../pages/Post';\n// import UpdatePost from '../pages/UpdatePost';\n\n\n\n\nconst routes = [// {\n// \tComponent: Contact,\n// \tkey: 'Contact',\n// \tpath: '/contact'\n// },\n// {\n// \tComponent: Home,\n// \tkey: 'Home',\n// \tpath: '/home'\n// },\n// {\n// \tComponent: About,\n// \tkey: 'About',\n// \tpath: '/about'\n// },\n// {\n// \tComponent: UpdatePost,\n// \tkey: 'UpdatePost',\n// \tpath: '/:id/edit'\n// },\n// {\n// \tComponent: Post,\n// \tkey: 'Post',\n// \tpath: '/:id/post'\n// },\n{\n  Component: _pages_UserProfile__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'UserProfile',\n  path: '/users/:id'\n}, {\n  Component: _pages_Red__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'Red Tank',\n  path: '/red'\n}, {\n  Component: _pages_Blue__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"],\n  key: 'Blue Tank',\n  path: '/blue'\n}, {\n  Component: _pages_App__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"],\n  key: 'Home',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./styles.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/styles.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ })

/******/ });