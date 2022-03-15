"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NButton = exports.SbmtButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nposition: fixed;\n  color: ", ";\n  &:hover {\n    color: ", ";\n  }\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  font-size: 1.6em;\n  padding: 0px 0px 2px 0px;\n  :active,\n  :focus {\n    outline: none;\n  }\n  :disabled {\n    pointer-events: none;\n    cursor: now-allowed;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ncolor: ", ";\ndisplay: inline-block;\ncursor: pointer;\nmin-width: 180px;\ntext-align: center;\nmargin: 5px auto;\nheight: auto ;\ntext-shadow: none !important;\nfont-weight: 600 !important;\nfont-size: 16px !important;\npadding: 7px !important;\nborder-radius: 6px;\n\n\nborder:0px solid #34740e; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:12px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;\n background-color: #4ba614; background-image: -webkit-gradient(linear, left top, left bottom, from(#4ba614), to(#008c00));\n background-image: -webkit-linear-gradient(top, #4ba614, #008c00);\n background-image: -moz-linear-gradient(top, #4ba614, #008c00);\n background-image: -ms-linear-gradient(top, #4ba614, #008c00);\n background-image: -o-linear-gradient(top, #4ba614, #008c00);\n background-image: linear-gradient(to bottom, #4ba614, #008c00);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#4ba614, endColorstr=#008c00);\n\n &:hover {\n  border:0px solid #224b09;\n  background-color: #36780f; background-image: -webkit-gradient(linear, left top, left bottom, from(#36780f), to(#005900));\n  background-image: -webkit-linear-gradient(top, #36780f, #005900);\n  background-image: -moz-linear-gradient(top, #36780f, #005900);\n  background-image: -ms-linear-gradient(top, #36780f, #005900);\n  background-image: -o-linear-gradient(top, #36780f, #005900);\n  background-image: linear-gradient(to bottom, #36780f, #005900);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#36780f, endColorstr=#005900);\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SbmtButton = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.theme.header.secondaryColor;
});

exports.SbmtButton = SbmtButton;

var NButton = _styledComponents["default"].button(_templateObject2(), function (props) {
  return props.theme.header.secondaryColor;
}, function (props) {
  return props.theme.header.highlightColor;
}, function (props) {
  //return (0, _color["default"])(props.theme.header.secondaryColor).darken(0.4).string();
  return props.theme.header.secondaryColor;
});

exports.NButton = NButton;