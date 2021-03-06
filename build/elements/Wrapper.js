"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("color"));

var _mediaTemplates = require("../styles/media-templates");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["width: 100wv;"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["right: auto;"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["left: 0;"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["right: ", ";"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["left: ", ";"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  z-index: 10000;\n  ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  * {\n    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif, Helvetica;\n  }\n  display: flex;\n  width: 100%;\n  height: 100%;\n  font-size: 1em;\n  align-items: ", ";\n  * > ::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  /* Track */\n  * > ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n\n  /* Handle */\n  * > ::-webkit-scrollbar-thumb {\n    background: #546e7a;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BackgroundPanel = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.coords ? "" : "\n  position: fixed;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n";
});

var Container = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.position;
});

var Content = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.coords ? "\n    position: absolute;\n    top: ".concat(props.theme.coords.top, ";    \n    bottom: ").concat(props.theme.coords.bottom, ";    \n    height: 40vh;\n    ") : "\n    display: flex;    \n    width: 100%;\n    justify-content: center;\n    align-items: ".concat(props.theme.position, ";\n    height: ").concat(props.theme.position === 'center' ? '100vh' : '40vh', ";\n    background-color:#000 ");
}, _mediaTemplates.media.desktop(_templateObject4(), function (props) {
  return props.theme.coords ? props.theme.coords.left : 0;
}), _mediaTemplates.media.desktop(_templateObject5(), function (props) {
  return props.theme.coords ? props.theme.coords.right : 0;
}), _mediaTemplates.media.mobile(_templateObject6()), _mediaTemplates.media.mobile(_templateObject7()), _mediaTemplates.media.mobile(_templateObject8()));

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(BackgroundPanel, null, _react["default"].createElement(Container, null, _react["default"].createElement(Content, null, children)));
};

Wrapper.displayName = 'Wrapper';
Wrapper.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]).isRequired
};
var _default = Wrapper;
exports["default"] = _default;