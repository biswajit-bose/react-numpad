"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _chevronLeft = _interopRequireDefault(require("react-icons/lib/md/chevron-left"));

var _ui = _interopRequireDefault(require("./ui"));

var _CalendarUI = require("./CalendarUI");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(intervalIterator);

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: white;\n  text-align: center;\n  padding: 5px;\n  &:hover {\n    color: ", ";\n    border-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-template: repeat(8, 1fr) / repeat(3, 1fr);\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TimeTable = _styledComponents["default"].div(_templateObject());

var Hour = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.body.highlightColor;
}, function (props) {
  return props.theme.body.highlightColor;
});

function intervalIterator(date, minutes) {
  var current, end;
  return regeneratorRuntime.wrap(function intervalIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          current = (0, _moment["default"])(date).startOf('day');
          end = (0, _moment["default"])(date).endOf('day');

        case 2:
          if (!current.isBefore(end)) {
            _context.next = 8;
            break;
          }

          _context.next = 5;
          return current.clone();

        case 5:
          current.add(minutes, 'minutes');
          _context.next = 2;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var times = function times(date, interval) {
  return Array.from(intervalIterator(date, interval));
};

var MINUTES_INTERVAL = 60;
/** TODO: allow to set minutes interval as props */

var TimeView =
/*#__PURE__*/
function (_Component) {
  _inherits(TimeView, _Component);

  function TimeView(props) {
    var _this;

    _classCallCheck(this, TimeView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeView).call(this, props));
    var date = _this.props.date;
    _this.state = {
      date: (0, _moment["default"])(date)
    };
    return _this;
  }

  _createClass(TimeView, [{
    key: "render",
    value: function render() {
      var date = this.state.date;
      var _this$props = this.props,
          onChange = _this$props.onChange,
          handleBackTime = _this$props.handleBackTime;

      if (!date) {
        return null;
      }

      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_CalendarUI.Header, null, _react["default"].createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }
      }, _react["default"].createElement(_ui["default"], {
        onClick: handleBackTime
      }, _react["default"].createElement(_chevronLeft["default"], null)))), _react["default"].createElement(TimeTable, null, times(date, MINUTES_INTERVAL).map(function (hour) {
        return _react["default"].createElement(Hour, {
          key: hour.format('HH:mm'),
          onClick: function onClick() {
            return onChange(hour);
          }
        }, hour.format('HH:mm'));
      })));
    }
  }]);

  return TimeView;
}(_react.Component);

TimeView.propTypes = {
  date: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  handleBackTime: _propTypes["default"].func.isRequired
};
var _default = TimeView;
exports["default"] = _default;