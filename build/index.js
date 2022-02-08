"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SpecialNumpad = _interopRequireDefault(require("./components/SpecialNumpad"));

var _DigitNumpad = _interopRequireDefault(require("./components/DigitNumpad"));

var _HalfDigitNumpad = _interopRequireDefault(require("./components/HalfDigitNumpad"));

var _HalfSpecialNumpad = _interopRequireDefault(require("./components/HalfSpecialNumpad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  SpecialNumpad: _SpecialNumpad.default,
  DigitNumpad: _DigitNumpad.default,
  HalfDigitNumpad: _HalfDigitNumpad.default,
  HalfSpecialNumpad: _HalfSpecialNumpad.default
};
exports.default = _default;