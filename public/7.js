(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/common/jwt.service.js":
/*!********************************************!*\
  !*** ./resources/js/common/jwt.service.js ***!
  \********************************************/
/*! exports provided: JSON_HEADERS, getToken, setToken, getTypeUser, getUser, setAuthStorge, unsetAuthStorge, refreshToken, unsetToken, chkeckedAuthApi, logout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSON_HEADERS", function() { return JSON_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeUser", function() { return getTypeUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthStorge", function() { return setAuthStorge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetAuthStorge", function() { return unsetAuthStorge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshToken", function() { return refreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetToken", function() { return unsetToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chkeckedAuthApi", function() { return chkeckedAuthApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! awesome-notifications */ "./node_modules/awesome-notifications/dist/index.js");
/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(awesome_notifications__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var ID_API_TOKEN = 'token';
var JSON_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Authorization': "bearer ".concat(getToken()),
  'X-CSRF-TOKEN': jquery__WEBPACK_IMPORTED_MODULE_3___default()('meta[name="csrf-token"]').attr('content')
};
function getToken() {
  return localStorage.getItem(ID_API_TOKEN);
}
var setToken = function setToken(token) {
  localStorage.setItem(ID_API_TOKEN, token);
};
var getTypeUser = function getTypeUser() {
  var user = JSON.parse(localStorage.getItem('user'));
  return user.type;
};
var getUser = function getUser() {
  var user = JSON.parse(localStorage.getItem('user'));
  return user;
};
var setAuthStorge = function setAuthStorge(data) {
  unsetAuthStorge();
  localStorage.setItem('token', data.access_token);
  localStorage.setItem('token_type', data.token_type);
  localStorage.setItem('expires_in', data.expires_in);
  localStorage.setItem('user', JSON.stringify(data.user));
};
var unsetAuthStorge = function unsetAuthStorge() {
  localStorage.removeItem('token');
  localStorage.removeItem('token_type');
  localStorage.removeItem('expires_in');
  localStorage.removeItem('user');
};
function refreshToken() {
  return _refreshToken.apply(this, arguments);
}

function _refreshToken() {
  _refreshToken = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var data, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = {
              _method: "POST",
              _token: jquery__WEBPACK_IMPORTED_MODULE_3___default()('meta[name="csrf-token"]').attr('content')
            };
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/auth/refresh', {
              headers: JSON_HEADERS,
              data: data
            }).then(function (_ref) {
              var data = _ref.data;
              setAuthStorge(data);
              return true;
            }).then(function (res) {
              return false;
            });

          case 3:
            response = _context.sent;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _refreshToken.apply(this, arguments);
}

var unsetToken = function unsetToken() {
  localStorage.removeItem(ID_API_TOKEN);
};
function chkeckedAuthApi(_x) {
  return _chkeckedAuthApi.apply(this, arguments);
}

function _chkeckedAuthApi() {
  _chkeckedAuthApi = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(response) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(response.data.code == 601)) {
              _context2.next = 7;
              break;
            }

            if (!refreshToken()) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", true);

          case 3:
            ;
            _router__WEBPACK_IMPORTED_MODULE_4__["default"].push({
              'name': 'login'
            });
            _context2.next = 13;
            break;

          case 7:
            if (!(response.data.code == 602 || response.data.code == 600 || response.data.code == 500)) {
              _context2.next = 11;
              break;
            }

            _router__WEBPACK_IMPORTED_MODULE_4__["default"].push({
              'name': 'login'
            });
            _context2.next = 13;
            break;

          case 11:
            new awesome_notifications__WEBPACK_IMPORTED_MODULE_1___default.a().warning('sumthing error', {
              durations: {
                warning: 0
              }
            });
            return _context2.abrupt("return", false);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _chkeckedAuthApi.apply(this, arguments);
}

var logout = function logout() {
  localStorage.removeItem("expires_in");
  localStorage.removeItem("token_type");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  _router__WEBPACK_IMPORTED_MODULE_4__["default"].push({
    name: 'login'
  });
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getToken: getToken,
  logout: logout,
  setToken: setToken,
  unsetToken: unsetToken,
  JSON_HEADERS: JSON_HEADERS,
  chkeckedAuthApi: chkeckedAuthApi,
  setAuthStorge: setAuthStorge,
  unsetAuthStorge: unsetAuthStorge
});

/***/ }),

/***/ "./resources/js/globals.js":
/*!*********************************!*\
  !*** ./resources/js/globals.js ***!
  \*********************************/
/*! exports provided: site_url, api_url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "site_url", function() { return site_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api_url", function() { return api_url; });
var site_url = "http://localhost:8080";
var api_url = "http://localhost:8080/api";

/***/ }),

/***/ "./resources/js/services/clients.js":
/*!******************************************!*\
  !*** ./resources/js/services/clients.js ***!
  \******************************************/
/*! exports provided: get_all, create, update, get_one, _delete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_all", function() { return get_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_one", function() { return get_one; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_delete", function() { return _delete; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./resources/js/globals.js");
/* harmony import */ var _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/jwt.service */ "./resources/js/common/jwt.service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function get_all() {
  return _get_all.apply(this, arguments);
}

function _get_all() {
  _get_all = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var page,
        keywords,
        options,
        response,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
            keywords = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            options = {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"],
              params: {
                page: page,
                keywords: keywords
              }
            };
            _context.next = 5;
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_3__["api_url"], "/clients"), options);

          case 5:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _get_all.apply(this, arguments);
}

function create(_x) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(client) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            response = axios.post("".concat(_globals__WEBPACK_IMPORTED_MODULE_3__["api_url"], "/clients"), client, {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"]
            });
            return _context2.abrupt("return", response);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _create.apply(this, arguments);
}

function update(_x2, _x3) {
  return _update.apply(this, arguments);
}

function _update() {
  _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(client, id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            response = axios.put("".concat(_globals__WEBPACK_IMPORTED_MODULE_3__["api_url"], "/clients/") + id, client, {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"]
            });
            return _context3.abrupt("return", response);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _update.apply(this, arguments);
}

function get_one(_x4) {
  return _get_one.apply(this, arguments);
}

function _get_one() {
  _get_one = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_3__["api_url"], "/clients/").concat(id), {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"]
            });

          case 2:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _get_one.apply(this, arguments);
}

function _delete(_x5) {
  return _delete2.apply(this, arguments);
}

function _delete2() {
  _delete2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios["delete"]("".concat(_globals__WEBPACK_IMPORTED_MODULE_3__["api_url"], "/clients/").concat(id), {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"]
            });

          case 2:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _delete2.apply(this, arguments);
}

/***/ })

}]);