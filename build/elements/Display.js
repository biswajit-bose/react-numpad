"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _backspace = _interopRequireDefault(require("react-icons/lib/md/backspace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  padding: 4px;\n  display:none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  &:read-only {\n    cursor: not-allowed;\n  }\n  border-radius: 0px;\n  cursor: default;\n  background: transparent;\n  font-size: 1.3em;\n  outline: none;\n  border: none;\n  width: 100%;\n  text-align: center;\n  display:none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  cursor: default;\n  outline: none;\n  font-size: 1.7em;\n  padding: 0px;\n    border-radius: 0;\n    width: 25%;\n    border: 3px solid #e0e0e0;\n    border-radius: 8px !important;\n    background: #fff;\n    font-weight: 300;\n\n\n\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 2px 5px 5px 8px;\n  align-items: center;\n  border: none;\n  background: white;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

var Backspace = _styledComponents.default.button(_templateObject2(), function (props) {
  return props.theme.header.primaryColor;
});

var Input = _styledComponents.default.input(_templateObject3());

var Display = _styledComponents.default.div(_templateObject4());

var DisplayWrapper = function DisplayWrapper(_ref) {
  var value = _ref.value,
      displayRule = _ref.displayRule,
      dateFormat = _ref.dateFormat,
      cancel = _ref.cancel;
  return _react.default.createElement(Wrapper, null, _react.default.createElement(Display, null, _react.default.createElement(Input, {
    value: displayRule(value, dateFormat),
    readOnly: true,
    autoFocus: true
  })));
};

DisplayWrapper.propTypes = {
  value: _propTypes.default.string.isRequired,
  displayRule: _propTypes.default.func.isRequired,
  dateFormat: _propTypes.default.string,
  cancel: _propTypes.default.func
};
DisplayWrapper.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  cancel: function cancel() {}
};
var _default = DisplayWrapper;
exports.default = _default;