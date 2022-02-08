"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.positiveValidation = exports.integerValidation = exports.numberValidatior = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _elements = require("../elements");

var _NumPad = _interopRequireDefault(require("./NumPad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var positiveValidation = function positiveValidation(value) {
  return parseFloat(value) >= 0;
};

exports.positiveValidation = positiveValidation;

var integerValidation = function integerValidation(value) {
  return parseFloat(value) % 1 === 0;
};

exports.integerValidation = integerValidation;

var numberValidatior = function numberValidatior() {
  var decimal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var sign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return function (value) {
    if (Number.isNaN(Number(value))) {
      return false;
    }

    var testValue = parseFloat(value);

    if (!decimal && !integerValidation(testValue)) {
      return false;
    }

    if (typeof decimal === 'number' && decimal > 0) {
      if ((testValue.toString().split('.')[1] || '').length > decimal) {
        return false;
      }
    }

    if (!sign && !positiveValidation(testValue)) {
      return false;
    }

    return true;
  };
};

exports.numberValidatior = numberValidatior;
var defaultProps = {
  validation: function validation(value) {
    return numberValidatior(true, true)(value);
  },
  formatInputValue: function formatInputValue(value) {
    return value.toString();
  },
  keyValidator: function keyValidator(value) {
    return numberValidatior(true, true)(value);
  },
  keyValid: function keyValid() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var key = arguments.length > 1 ? arguments[1] : undefined;
    var keyValidator = arguments.length > 2 ? arguments[2] : undefined;

    if (key === '-') {
      return keyValidator(key + value + 1);
    }

    return keyValidator(key === '.' ? value + key + 1 : value + key);
  },
  displayRule: function displayRule(value) {
    return value.replace(/^(-)?0+(0\.|\d)/, '$1$2');
  } // remove leading zeros

};

var NumberEditor = function NumberEditor(props) {
  return _react.default.createElement(_NumPad.default, props, _react.default.createElement(_elements.KeyPad, _extends({}, defaultProps, props)));
};

var _default = NumberEditor;
exports.default = _default;