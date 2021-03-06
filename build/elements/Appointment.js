"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _reactSwipeable = _interopRequireDefault(require("react-swipeable"));

var _chunk = _interopRequireDefault(require("lodash/chunk"));

var _chevronLeft = _interopRequireDefault(require("react-icons/lib/md/chevron-left"));

var _chevronRight = _interopRequireDefault(require("react-icons/lib/md/chevron-right"));

var _cancel = _interopRequireDefault(require("react-icons/lib/md/cancel"));

var _CalendarUI = require("./CalendarUI");

var _AppointmentUI = _interopRequireDefault(require("./AppointmentUI"));

var _ui = _interopRequireDefault(require("./ui"));

var _mediaTemplates = require("../styles/media-templates");

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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0.5em;\n  border-bottom: 1px solid #fff;\n  :nth-child(-n + 7) {\n    border-top: '1px solid #ddd';\n  }\n  &:active {\n    ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  overflow-y: auto;\n  flex: 1;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  background: white;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 0;\n  text-transform: capitalize;\n  line-height: 1;\n  .number {\n    font-size: 1.2em;\n  }\n  .name {\n    font-size: 0.8em;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-basis: 0;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-grow: 1;\n  flex-basis: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: 0.8em;\n  padding: 2px 0;\n  justify-content: center;\n  flex-grow: ", ";\n  flex-basis: 0;\n  background: ", ";\n  color: white;\n  border-top: 2px solid white;\n  text-transform: uppercase;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AppointmentHeader = (0, _styledComponents["default"])(_CalendarUI.Header)(_templateObject());

var HeaderMonth = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.widthHeader;
}, function (props) {
  return props.theme.header.backgroundColor;
});

var Days = _styledComponents["default"].div(_templateObject3());

var DayTimes = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.separator ? "border-left: 2px solid ".concat(props.theme.header.backgroundColor) : '';
});

var Day = _styledComponents["default"].div(_templateObject5());

var Times = _styledComponents["default"].div(_templateObject6());

var Time = _styledComponents["default"].div(_templateObject7(), function (props) {
  return "color: ".concat(props.theme.body.highlightColor, "; border-color: ").concat(props.theme.body.highlightColor);
});

var Appointment =
/*#__PURE__*/
function (_Component) {
  _inherits(Appointment, _Component);

  function Appointment(props) {
    var _this;

    _classCallCheck(this, Appointment);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Appointment).call(this, props));
    _this.state = {
      dayRange: (0, _mediaTemplates.isMobile)() ? 4 : 7,
      index: 0,
      orderedDates: Object.keys(props.dates).sort(function (a, b) {
        return (0, _moment["default"])(a, props.dateFormat) - (0, _moment["default"])(b, props.dateFormat);
      })
    }; // Moment.js hack to load locales when needed

    if (props.locale !== 'en') {
      try {
        // eslint-disable-next-line import/no-dynamic-require
        require("moment/locale/".concat(props.locale)); // eslint-disable-line global-require

      } catch (e) {
        console.warn("Wrong locale ".concat(props.locale, ", ").concat(e.message)); // eslint-disable-line no-console
      }
    }

    _this.swipingLeft = _this.swipingLeft.bind(_assertThisInitialized(_this));
    _this.swipingRight = _this.swipingRight.bind(_assertThisInitialized(_this));
    _this.handleNextDays = _this.handleNextDays.bind(_assertThisInitialized(_this));
    _this.handlePrevDays = _this.handlePrevDays.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Appointment, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document.body) {
        document.body.style.overflow = 'hidden';
      }

      window.addEventListener('resize', this.onResizeWindow.bind(this));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var dates = this.props.dates;

      if (nextProps.dates !== dates) {
        var dateFormat = nextProps.dateFormat;
        this.setState({
          orderedDates: Object.keys(nextProps.dates).sort(function (a, b) {
            return (0, _moment["default"])(a, dateFormat) - (0, _moment["default"])(b, dateFormat);
          })
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (document.body) {
        document.body.style.overflow = '';
      }

      window.removeEventListener('resize', this.onResizeWindow.bind(this));
    }
  }, {
    key: "onResizeWindow",
    value: function onResizeWindow() {
      var dayRange = this.state.dayRange;
      var testDayRange = (0, _mediaTemplates.isMobile)() ? 4 : 7;

      if (dayRange !== testDayRange) {
        this.setState({
          dayRange: dayRange
        });
      }
    }
  }, {
    key: "swipingLeft",
    value: function swipingLeft() {
      this.handleNextDays();
    }
  }, {
    key: "swipingRight",
    value: function swipingRight() {
      this.handlePrevDays();
    }
  }, {
    key: "handleNextDays",
    value: function handleNextDays() {
      var _this$state = this.state,
          orderedDates = _this$state.orderedDates,
          dayRange = _this$state.dayRange;
      this.setState(function (oldState) {
        return {
          index: Math.min(oldState.index + 1, Math.floor(orderedDates.length / dayRange))
        };
      });
    }
  }, {
    key: "handlePrevDays",
    value: function handlePrevDays() {
      this.setState(function (oldState) {
        return {
          index: Math.max(oldState.index - 1, 0)
        };
      });
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(evt) {
      var cancel = this.props.cancel;
      evt.preventDefault();
      evt.stopPropagation();
      cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dateFormat = _this$props.dateFormat,
          dates = _this$props.dates,
          cancel = _this$props.cancel,
          confirm = _this$props.confirm;
      var _this$state2 = this.state,
          dayRange = _this$state2.dayRange,
          index = _this$state2.index,
          orderedDates = _this$state2.orderedDates;
      var chunkDates = (0, _chunk["default"])(orderedDates, dayRange);
      var headerMonths = {};
      chunkDates[index].forEach(function (date) {
        var month = (0, _moment["default"])(date, dateFormat).format('MMMM');

        if (month in headerMonths) {
          headerMonths[month] += 1;
        } else {
          headerMonths[month] = 1;
        }
      });
      var isOdd;
      return _react["default"].createElement(_reactSwipeable["default"], {
        onSwipedLeft: this.swipingLeft,
        onSwipedRight: this.swipingRight
      }, _react["default"].createElement(_CalendarUI.Container, null, _react["default"].createElement(_AppointmentUI["default"], null, _react["default"].createElement(AppointmentHeader, null, _react["default"].createElement(_ui["default"], {
        onClick: this.handlePrevDays,
        disabled: index === 0
      }, _react["default"].createElement(_chevronLeft["default"], null)), _react["default"].createElement(_ui["default"], {
        onClick: cancel,
        style: {
          fontSize: '1em'
        }
      }, _react["default"].createElement(_cancel["default"], null)), _react["default"].createElement(_ui["default"], {
        onClick: this.handleNextDays,
        disabled: !chunkDates[index + 1]
      }, _react["default"].createElement(_chevronRight["default"], null))), _react["default"].createElement("div", {
        style: {
          display: 'flex'
        }
      }, Object.keys(headerMonths).map(function (month) {
        return _react["default"].createElement(HeaderMonth, {
          key: month,
          widthHeader: headerMonths[month]
        }, month);
      })), _react["default"].createElement(Days, null, chunkDates[index].map(function (day, nDay) {
        var separator = false;

        if (!nDay) {
          isOdd = (0, _moment["default"])(day, dateFormat).format('MM') % 2;
        } else if (isOdd !== (0, _moment["default"])(day, dateFormat).format('MM') % 2) {
          separator = true;
          isOdd = (0, _moment["default"])(day, dateFormat).format('MM') % 2;
        }

        return _react["default"].createElement(DayTimes, {
          key: "appointment-day-".concat(day),
          separator: separator
        }, _react["default"].createElement(Day, {
          isOdd: (0, _moment["default"])(day, dateFormat).format('MM') % 2
        }, _react["default"].createElement("div", {
          className: "number"
        }, (0, _moment["default"])(day, dateFormat).format('DD')), _react["default"].createElement("div", {
          className: "name"
        }, (0, _moment["default"])(day, dateFormat).format('ddd'))), _react["default"].createElement(Times, null, dates[day].map(function (time) {
          return _react["default"].createElement(Time, {
            onClick: function onClick() {
              confirm("".concat(day, " ").concat(time));
            },
            key: "appointment-".concat(day, " ").concat(time)
          }, time);
        })));
      })))));
    }
  }]);

  return Appointment;
}(_react.Component);

Appointment.propTypes = {
  confirm: _propTypes["default"].func.isRequired,
  cancel: _propTypes["default"].func.isRequired,
  dateFormat: _propTypes["default"].string,
  locale: _propTypes["default"].string.isRequired,
  dates: _propTypes["default"].objectOf(_propTypes["default"].array).isRequired
};
Appointment.defaultProps = {
  dateFormat: 'MM/DD/YYYY'
};

var _default = (0, _reactOnclickoutside["default"])(Appointment);

exports["default"] = _default;