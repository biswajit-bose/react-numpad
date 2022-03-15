"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NumPad = _interopRequireDefault(require("./NumPad"));

var _date = require("../utils/date");

var _elements = require("../elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = function defaultProps(props) {
  return _objectSpread({
    validation: function validation() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!value || !value.length) {
        return false;
      }

      var parts = value.split('.');
      var num = parts[0] ? parts[0] : '0';
      var frac = parts[1] ? parts[1] : null;

      switch (props.gameType) {
        case 0:
          if (frac) {
            return false;
          }

          if (!num || num > 999) {
            return false;
          }

          break;

        case 1:
          if (num > 999) {
            return false;
          }

          if (frac >= 10) {
            return false;
          }

          break;

        case 2:
          if (num > 999) {
            return false;
          }

          if (frac >= 100) {
            return false;
          }

          break;

        default:
          break;
      }

      return true;
    },
    formatInputValue: function formatInputValue(value) {
      return value.toString();
    },
    keyValid: function keyValid(value, key) {
      var parts = value ? value.split('.') : [];
      var num = parts[0] ? parts[0] : '0';
      var frac = parts[1] ? parts[1] : '';
      var isFrac = value && value.indexOf('.') >= 0;

      switch (key) {
        case '-':
          return false;
          break;

        case '.':
          if (props.gameType === 0) {
            return false;
          }

          if (isFrac) {
            return false;
          }

          break;

        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          if (props.gameType === 0) {
            if (String(num).length >= 3) {
              return false;
            }
          } else if (props.gameType === 1) {
            if (String(num).length >= 3 && !isFrac) {
              return false;
            }

            if (isFrac && String(frac).length == 1) {
              return false;
            }
          } else if (props.gameType === 2) {
            if (String(num).length >= 3 && !isFrac) {
              return false;
            }

            if (isFrac && String(frac).length == 2) {
              return false;
            }
          }

          break;

        default:
          break;
      }

      return true;
    },
    displayRule: function displayRule(value) {
      return value.replace(/^(-)?0+(0\.|\d)/, '$1$2');
    }
  }, props);
};

var DigitNumpad = function DigitNumpad(props) {
  return _react["default"].createElement(_NumPad["default"], _extends({}, props, {
    customInput: props.children
  }), _react["default"].createElement(_elements.KeyPad, defaultProps(props)));
};

DigitNumpad.propsType = {
  gameType: _propTypes["default"].number
};
DigitNumpad.defaultProps = {
  gameType: 0
};
var _default = DigitNumpad;
exports["default"] = _default;