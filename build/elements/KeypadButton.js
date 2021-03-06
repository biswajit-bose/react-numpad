"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  && {\n    font-size: 1.7em;\n    padding: 0px;\n    border-radius: 0;\n    width: 25%;\n    border: 3px solid #e0e0e0;\n    border-radius: 8px !important;\n    background: #fff;\n    font-weight: 300;\n    line-height: normal !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var KeypadButton = (0, _styledComponents["default"])(_Button["default"])(_templateObject());

var ButtonWrapper = function ButtonWrapper(_ref) {
  var value = _ref.value,
      click = _ref.click,
      disabled = _ref.disabled;
  return _react["default"].createElement(KeypadButton, {
    onClick: function onClick() {
      return click(value);
    },
    disabled: disabled
  }, value);
};

ButtonWrapper.defaultProps = {
  value: undefined,
  disabled: false
};
ButtonWrapper.propTypes = {
  click: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  disabled: _propTypes["default"].bool
};
var _default = ButtonWrapper;
exports["default"] = _default;