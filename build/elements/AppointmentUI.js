"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mediaTemplates = require("../styles/media-templates");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["width: 100vw;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  height: 300px;\n  width: 100vw;\n  ", " ", " transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n  background: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = _styledComponents["default"].div(_templateObject(), _mediaTemplates.media.mobile(_templateObject2()), function (props) {
  return props.theme.position === 'fullscreen' ? "\n  width: 100vw;\n  height: 100vh;\n  font-size: 1.2em;\n  " : "\n    max-width: ".concat(props.theme.coords ? '440px' : '768px', ";\n  ");
}, function (props) {
  return props.theme.body.backgroundColor;
});

var _default = Content;
exports["default"] = _default;