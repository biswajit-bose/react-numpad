"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InputField =
/*#__PURE__*/
function (_Component) {
  _inherits(InputField, _Component);

  function InputField(props) {
    var _this;

    _classCallCheck(this, InputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputField).call(this, props));
    _this.onShowKeyPad = _this.onShowKeyPad.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputField, [{
    key: "onShowKeyPad",
    value: function onShowKeyPad() {
      var showKeyPad = this.props.showKeyPad;

      if (this.input) {
        this.input.blur();
      }

      var inputCoords = this.inputWrapper ? this.inputWrapper.getBoundingClientRect() : undefined;
      showKeyPad(inputCoords);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          inputValue = _this$props.inputValue,
          label = _this$props.label,
          disabled = _this$props.disabled,
          buttonContent = _this$props.buttonContent,
          customInput = _this$props.customInput;
      return _react["default"].createElement(_react.Fragment, null, label && _react["default"].createElement("label", {
        disabled: disabled
      }, label), _react["default"].createElement("span", {
        onClick: this.onShowKeyPad,
        onKeyPress: this.onShowKeyPad,
        role: "button",
        tabIndex: 0,
        ref: function ref(wrapper) {
          _this2.inputWrapper = wrapper;
        }
      }, customInput ? _react["default"].Children.map(customInput, function (child) {
        return _react["default"].cloneElement(child, child.type === 'input' ? {
          placeholder: placeholder,
          value: inputValue,
          disabled: disabled,
          tabIndex: -1,
          readOnly: true,
          ref: function ref(input) {
            _this2.input = input;
          }
        } : {});
      }) : _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("input", {
        style: {
          outline: 'none'
        },
        ref: function ref(input) {
          _this2.input = input;
        },
        placeholder: placeholder,
        value: inputValue,
        disabled: disabled,
        tabIndex: -1,
        readOnly: true
      }), buttonContent && _react["default"].createElement("button", {
        type: "button",
        tabIndex: -1
      }, buttonContent))));
    }
  }]);

  return InputField;
}(_react.Component);

InputField.displayName = 'InputField';
InputField.defaultProps = {
  placeholder: '',
  inputValue: '',
  label: '',
  disabled: false,
  buttonContent: undefined,
  customInput: undefined
};
InputField.propTypes = {
  showKeyPad: _propTypes["default"].func.isRequired,
  inputValue: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  buttonContent: _propTypes["default"].element,
  customInput: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].arrayOf(_propTypes["default"].element)])
};
var _default = InputField;
exports["default"] = _default;