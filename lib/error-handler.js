'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = errorHandler;

var _feathersErrors = require('feathers-errors');

var _feathersErrors2 = _interopRequireDefault(_feathersErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function errorHandler(error) {
  var feathersError = error;
  if (error.name === 'CouchError') {
    var MyError = error.code === 404 || error.headers.status === 404 ? _feathersErrors2.default.NotFound : _feathersErrors2.default.GeneralError;
    feathersError = new MyError(error, {
      ok: error.ok,
      code: error.code
    });
  }

  throw feathersError;
}
module.exports = exports['default'];