"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPortal = require("react-portal");

var _styledComponents = require("styled-components");

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _edit = _interopRequireDefault(require("react-icons/lib/md/edit"));

var _elements = require("../elements");

var _globalCss = _interopRequireDefault(require("../styles/global-css"));

var _styles = _interopRequireDefault(require("../styles"));

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

var getTransition = function getTransition(show, position) {
  var transition = _Slide["default"];
  var transitionProps = {
    "in": show,
    direction: 'up',
    mountOnEnter: true,
    unmountOnExit: true
  };

  if (position === 'flex-start') {
    transitionProps.direction = 'down';
  }

  if (position !== 'flex-start' && position !== 'flex-end') {
    transition = 'span';
    transitionProps = {};
  }

  return {
    transition: transition,
    transitionProps: transitionProps
  };
};

var updateCoords = {
  startBottomLeft: function startBottomLeft(coords) {
    return {
      top: "".concat(coords.bottom + window.pageYOffset, "px"),
      left: "".concat(coords.left + window.pageXOffset, "px")
    };
  },
  startBottomRight: function startBottomRight(coords) {
    return {
      top: "".concat(coords.bottom + window.pageYOffset, "px"),
      right: "".concat(window.innerWidth - coords.right + window.pageXOffset, "px")
    };
  },
  startTopLeft: function startTopLeft(coords) {
    return {
      top: "".concat(coords.top + window.pageYOffset - 300, "px"),
      left: "".concat(coords.left + window.pageXOffset, "px")
    };
  },
  startTopRight: function startTopRight(coords) {
    return {
      top: "".concat(coords.top + window.pageYOffset - 300, "px"),
      right: "".concat(window.innerWidth - coords.right + window.pageXOffset, "px")
    };
  }
};

var inputButtonContent = _react["default"].createElement(_edit["default"], null); // const inputButtonContent2 = <IconClock />;
// const inputButtonContent3 = <MdCalendar />;


var NumPad =
/*#__PURE__*/
function (_Component) {
  _inherits(NumPad, _Component);

  function NumPad(props) {
    var _this;

    _classCallCheck(this, NumPad);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumPad).call(this, props));
    var v = '';
    if (!props.value || props.value == '') v = '';else if (props.value == 0 || props.value == '0') v = '0';else v = props.value.toString();
    _this.state = {
      show: false,
      value: v
    };
    _this.toggleKeyPad = _this.toggleKeyPad.bind(_assertThisInitialized(_this));
    _this.confirm = _this.confirm.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.saveClick = _this.saveClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NumPad, [{
    key: "toggleKeyPad",
    value: function toggleKeyPad() {
      var coords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var position = this.props.position;
      var show = this.state.show;
      var inputCoords = !show && updateCoords[position] ? updateCoords[position](coords) : undefined;
      this.setState(function (prevState) {
        return {
          show: !prevState.show,
          inputCoords: inputCoords
        };
      });
    }
  }, {
    key: "update",
    value: function update(value) {
      var _this2 = this;

      var onChange = this.props.onChange;

      if (value == undefined) {
        setTimeout(function () {
          _this2.setState({
            value: ''
          });
        }, 400);
      }

      console.log(value);
      onChange(value);
    }
  }, {
    key: "confirm",
    value: function confirm(value) {
      var show = this.state.show;
      var updateValue = {};

      if (show) {
        updateValue = {
          value: value
        };
        this.update(value);
      }

      this.setState(function (prevState) {
        return Object.assign({}, {
          show: !prevState.show
        }, updateValue);
      });
    }
  }, {
    key: "saveClick",
    value: function saveClick() {
      var saveClick = this.props.saveClick;
      saveClick();
      this.setState(function (prevState) {
        return Object.assign({}, {
          show: !prevState.show
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          show = _this$state.show,
          value = _this$state.value,
          inputCoords = _this$state.inputCoords;
      var _this$props = this.props,
          children = _this$props.children,
          placeholder = _this$props.placeholder,
          label = _this$props.label,
          theme = _this$props.theme,
          locale = _this$props.locale,
          markers = _this$props.markers,
          position = _this$props.position,
          sync = _this$props.sync,
          customInput = _this$props.customInput;
      var customTheme = _typeof(theme) === 'object' ? theme : (0, _styles["default"])(theme);
      customTheme.position = position;
      customTheme.coords = inputCoords;
      var display = position !== 'flex-start' && position !== 'flex-end' ? show : true;

      var _getTransition = getTransition(show, position),
          transition = _getTransition.transition,
          transitionProps = _getTransition.transitionProps;

      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_globalCss["default"], null), _react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: customTheme
      }, _react["default"].createElement(_elements.InputField, {
        placeholder: placeholder,
        showKeyPad: this.toggleKeyPad,
        inputValue: value,
        label: label,
        disabled: show,
        buttonContent: inputButtonContent,
        customInput: customInput
      })), _react["default"].createElement(_reactPortal.Portal, null, display && _react["default"].createElement(transition, transitionProps, _react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: customTheme
      }, _react["default"].createElement(_elements.Wrapper, {
        show: true
      }, _react["default"].cloneElement(children, {
        cancel: this.toggleKeyPad,
        confirm: this.confirm,
        saveClick: this.saveClick,
        update: this.update,
        eventTypes: ['click', 'touchend'],
        value: value,
        label: label,
        locale: locale,
        markers: markers,
        sync: sync
      }))))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.value && props.value !== state.value) {
        return {
          value: (props.value || '').toString()
        };
      }

      return null;
    }
  }]);

  return NumPad;
}(_react.Component);

NumPad.defaultProps = {
  children: undefined,
  customInput: undefined,
  placeholder: undefined,
  position: 'flex-end',
  label: undefined,
  theme: undefined,
  locale: 'en',
  value: '',
  sync: false,
  markers: []
};
NumPad.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  saveClick: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].arrayOf(_propTypes["default"].element)]),
  customInput: _propTypes["default"].element,
  placeholder: _propTypes["default"].string,
  position: _propTypes["default"].string,
  label: _propTypes["default"].string,
  locale: _propTypes["default"].string,
  theme: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  markers: _propTypes["default"].arrayOf(_propTypes["default"].string),
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  sync: _propTypes["default"].bool
};
var _default = NumPad;
exports["default"] = _default;