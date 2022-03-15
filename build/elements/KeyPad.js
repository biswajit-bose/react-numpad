"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _deleteSweep = _interopRequireDefault(require("react-icons/lib/md/delete-sweep"));

var _close = _interopRequireDefault(require("react-icons/lib/md/close"));

var _KeypadButton = _interopRequireDefault(require("./KeypadButton"));

var _Display = _interopRequireDefault(require("./Display"));

var _mediaTemplates = require("../styles/media-templates");

var _ui = require("./ui");

var _backspace = _interopRequireDefault(require("react-icons/lib/md/backspace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  button {\n    border-bottom: 2px solid #ddd;\n    border-right: 2px solid #ddd;\n  }\n  button:nth-child(4n) {\n    border-right: none;\n  }\n  button:nth-child(-n + 4) {\n    border-top: 2px solid #ddd;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding: 2px 5px;\n  align-items: center;\n  color: ", ";\n  background: ", ";\n  user-select: none;\n  box-shadow:0 0 0 4px #e0e0e0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  font-size: 1.3em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["width: 100%;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 264px;\n  ", " height: 40vh;\n  background: ", ";\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: default;\n  outline: none;\n  font-size: 1.7em;\n  padding: 0px;\n    width: 25%;\n    border: 3px solid #e0e0e0;\n    border-radius: 8px !important;\n    background: #fff;\n    font-weight: 300;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Backspace = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.theme.header.primaryColor;
});

var Content = _styledComponents["default"].div(_templateObject2(), _mediaTemplates.media.mobile(_templateObject3()), function (props) {
  return props.theme.body.backgroundColor;
});

var Label = _styledComponents["default"].div(_templateObject4());

var Header = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.header.secondaryColor;
}, function (props) {
  return props.theme.header.backgroundColor;
});

var Keys = _styledComponents["default"].div(_templateObject6());

var KeyPad =
/*#__PURE__*/
function (_Component) {
  _inherits(KeyPad, _Component);

  function KeyPad(props) {
    var _this;

    _classCallCheck(this, KeyPad);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KeyPad).call(this, props));
    _this.state = {
      input: props.formatInputValue(props.value)
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.keyDown = _this.keyDown.bind(_assertThisInitialized(_this));
    _this.cancelLastInsert = _this.cancelLastInsert.bind(_assertThisInitialized(_this));
    _this.cancelInsert = _this.cancelInsert.bind(_assertThisInitialized(_this));
    _this.numericKeys = _toConsumableArray(Array(10).keys());
    return _this;
  }

  _createClass(KeyPad, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.keyDown);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      var input = this.state.input;
      var _this$props = this.props,
          sync = _this$props.sync,
          displayRule = _this$props.displayRule,
          validation = _this$props.validation,
          dateFormat = _this$props.dateFormat,
          update = _this$props.update;

      if (sync && nextState.input !== input && validation(nextState.input, dateFormat)) {
        update(displayRule(nextState.input, dateFormat));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.keyDown);
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var _this$props2 = this.props,
          validation = _this$props2.validation,
          dateFormat = _this$props2.dateFormat,
          confirm = _this$props2.confirm,
          displayRule = _this$props2.displayRule,
          cancel = _this$props2.cancel; // const { input } = this.state;

      cancel(); // if (validation(input, dateFormat)) {
      //   ,(displayRule(input, dateFormat));
      // } else {
      //   cancel();
      // }
    }
  }, {
    key: "cancelLastInsert",
    value: function cancelLastInsert() {
      var _this2 = this;

      this.setState(function (prevState) {
        return {
          input: prevState.input.slice(0, -1)
        };
      });
      setTimeout(function () {
        if (_this2.state.input == '') {
          _this2.props.update();
        }
      }, 400);
    }
  }, {
    key: "cancelInsert",
    value: function cancelInsert() {
      var _this3 = this;

      this.setState(function (prevState) {
        return {
          input: ''
        };
      });
      setTimeout(function () {
        if (_this3.state.input == '') {
          _this3.props.update();
        }
      }, 400);
    }
  }, {
    key: "keyDown",
    value: function keyDown(event) {
      event.preventDefault();
      var key = event.key;
      var _this$props3 = this.props,
          confirm = _this$props3.confirm,
          displayRule = _this$props3.displayRule,
          dateFormat = _this$props3.dateFormat,
          cancel = _this$props3.cancel,
          validation = _this$props3.validation;
      var input = this.state.input;

      if (['Enter', 'Tab'].includes(key) && validation(input, dateFormat)) {
        confirm(displayRule(input, dateFormat));
      } else if (key === 'Backspace') {
        this.cancelLastInsert();
      } else if (['Escape', 'Tab'].includes(key)) {
        cancel();
      } else if (this.numericKeys.includes(parseInt(key, 10)) || key === '.' || key === '1' || key === '-') {
        this.handleClick(key);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(key) {
      var _this$props4 = this.props,
          keyValid = _this$props4.keyValid,
          dateFormat = _this$props4.dateFormat,
          keyValidator = _this$props4.keyValidator;
      var input = this.state.input;

      if (keyValid(input, key, keyValidator || dateFormat)) {
        if (key === '-') {
          this.setState(function (prevState) {
            return {
              input: prevState.input.charAt(0) === '-' ? prevState.input.substr(1) : "-".concat(prevState.input)
            };
          });
        } else {
          this.setState(function (prevState) {
            return {
              input: prevState.input + key
            };
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props5 = this.props,
          displayRule = _this$props5.displayRule,
          validation = _this$props5.validation,
          label = _this$props5.label,
          confirm = _this$props5.confirm,
          update = _this$props5.update,
          saveClick = _this$props5.saveClick,
          clearClick = _this$props5.clearClick,
          cancel = _this$props5.cancel,
          theme = _this$props5.theme,
          keyValid = _this$props5.keyValid,
          keyValidator = _this$props5.keyValidator,
          dateFormat = _this$props5.dateFormat;
      var input = this.state.input;
      return _react["default"].createElement(Content, null, _react["default"].createElement(Header, null, _react["default"].createElement(_ui.NButton, {
        onClick: cancel
      }, _react["default"].createElement(_close["default"], null)), _react["default"].createElement(_ui.SbmtButton, {
        onClick: function onClick() {
          return saveClick();
        },
        disabled: !validation(input, dateFormat)
      }, validation(input, dateFormat) ? 'Enter Guess' : 'Enter Valid Guess'), _react["default"].createElement(_ui.NButton, {
        className: "clearBtn",
        onClick: function onClick() {
          return _this4.cancelInsert();
        }
      }, _react["default"].createElement(_deleteSweep["default"], null))), _react["default"].createElement(_Display["default"], {
        value: input,
        displayRule: displayRule,
        dateFormat: dateFormat,
        cancel: this.cancelLastInsert
      }), _react["default"].createElement(Keys, null, [1, 2, 3, 'BCK', 4, 5, 6, ' ', 7, 8, 9, '.', ' ', 0, ' ', ' '].map(function (key, index) {
        return (// eslint-disable-next-line no-nested-ternary
          key !== undefined && String(key).trim() && key !== 'BCK' ? _react["default"].createElement(_KeypadButton["default"], {
            key: "button-".concat(key),
            theme: theme,
            click: function click(clickedKey) {
              return _this4.handleClick(clickedKey);
            },
            value: key,
            disabled: !keyValid(input, key, keyValidator || dateFormat)
          }) : key !== undefined && key !== 'BCK' ? _react["default"].createElement(_KeypadButton["default"] // eslint-disable-next-line react/no-array-index-key
          , {
            key: "button-disabled-".concat(index),
            theme: theme,
            click: function click() {},
            value: key || ' ',
            disabled: true
          }) : _react["default"].createElement(Backspace, {
            key: "bck_key",
            onClick: _this4.cancelLastInsert
          }, _react["default"].createElement(_backspace["default"], null))
        );
      })));
    }
  }]);

  return KeyPad;
}(_react.Component);

KeyPad.displayName = 'KeyPad';
KeyPad.propTypes = {
  label: _propTypes["default"].string,
  theme: _propTypes["default"].object,
  confirm: _propTypes["default"].func.isRequired,
  saveClick: _propTypes["default"].func.isRequired,
  clearClick: _propTypes["default"].func.isRequired,
  update: _propTypes["default"].func.isRequired,
  cancel: _propTypes["default"].func.isRequired,
  displayRule: _propTypes["default"].func.isRequired,
  validation: _propTypes["default"].func.isRequired,
  keyValid: _propTypes["default"].func.isRequired,
  keyValidator: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  dateFormat: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  sync: _propTypes["default"].bool.isRequired,
  formatInputValue: _propTypes["default"].func.isRequired
};
KeyPad.defaultProps = {
  label: undefined,
  theme: undefined,
  dateFormat: '',
  keyValidator: undefined,
  value: ''
};

var _default = (0, _reactOnclickoutside["default"])(KeyPad);

exports["default"] = _default;