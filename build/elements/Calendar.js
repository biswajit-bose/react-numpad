"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _moment = _interopRequireDefault(require("moment"));

var _reactSwipeable = _interopRequireDefault(require("react-swipeable"));

var _CalendarYearView = _interopRequireDefault(require("./CalendarYearView"));

var _CalendarMonthView = _interopRequireDefault(require("./CalendarMonthView"));

var _CalendarDayView = _interopRequireDefault(require("./CalendarDayView"));

var _CalendarUI = require("./CalendarUI");

var _TimeView = _interopRequireDefault(require("./TimeView"));

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

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props)); // Moment.js hack to load locales when needed

    if (props.locale !== 'en') {
      try {
        // eslint-disable-next-line import/no-dynamic-require
        require("moment/locale/".concat(props.locale)); // eslint-disable-line global-require

      } catch (e) {
        console.warn("Wrong locale ".concat(props.locale, ", ").concat(e.message)); // eslint-disable-line no-console
      }
    }

    _this.currentDate = props.value ? (0, _moment["default"])(props.value, props.dateFormat).startOf('day') : (0, _moment["default"])().startOf('day');
    _this.state = {
      date: _this.currentDate.clone().startOf('day'),
      calendarMonth: _this.currentDate.clone().startOf('month'),
      calendarView: _CalendarUI.VIEWS.DAY_VIEW
    };
    _this.handleNextMonth = _this.handleNextMonth.bind(_assertThisInitialized(_this));
    _this.handlePrevMonth = _this.handlePrevMonth.bind(_assertThisInitialized(_this));
    _this.handleChangeMonth = _this.handleChangeMonth.bind(_assertThisInitialized(_this));
    _this.handleNextYear = _this.handleNextYear.bind(_assertThisInitialized(_this));
    _this.handlePrevYear = _this.handlePrevYear.bind(_assertThisInitialized(_this));
    _this.handleChangeYear = _this.handleChangeYear.bind(_assertThisInitialized(_this));
    _this.updateCalendarView = _this.updateCalendarView.bind(_assertThisInitialized(_this));
    _this.swipingLeft = _this.swipingLeft.bind(_assertThisInitialized(_this));
    _this.swipingRight = _this.swipingRight.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onTime = _this.onTime.bind(_assertThisInitialized(_this));
    _this.handleBackTime = _this.handleBackTime.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Calendar, [{
    key: "onTime",
    value: function onTime(date) {
      var _this$props = this.props,
          confirm = _this$props.confirm,
          dateFormat = _this$props.dateFormat,
          timeFormat = _this$props.timeFormat;
      confirm(date.format("".concat(dateFormat).concat(timeFormat)));
    }
  }, {
    key: "onChange",
    value: function onChange(date) {
      var _this$props2 = this.props,
          confirm = _this$props2.confirm,
          dateFormat = _this$props2.dateFormat,
          timeFormat = _this$props2.timeFormat;
      var calendarView = this.state.calendarView;

      if (calendarView === _CalendarUI.VIEWS.DAY_VIEW && timeFormat) {
        this.setState({
          calendarView: _CalendarUI.VIEWS.TIME_VIEW,
          date: date.clone()
        });
      } else {
        confirm(date.format(dateFormat));
      }
    }
  }, {
    key: "updateCalendarView",
    value: function updateCalendarView(view) {
      this.setState({
        calendarView: view
      });
    }
  }, {
    key: "swipingLeft",
    value: function swipingLeft() {
      this.handleNextMonth();
    }
  }, {
    key: "swipingRight",
    value: function swipingRight() {
      this.handlePrevMonth();
    }
  }, {
    key: "handleNextMonth",
    value: function handleNextMonth() {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.clone().add(1, 'months').startOf('month')
        };
      });
    }
  }, {
    key: "handlePrevMonth",
    value: function handlePrevMonth() {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.clone().subtract(1, 'months').startOf('month')
        };
      });
    }
  }, {
    key: "handleChangeMonth",
    value: function handleChangeMonth(month) {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.clone().month(month).startOf('month'),
          calendarView: _CalendarUI.VIEWS.DAY_VIEW
        };
      });
    }
  }, {
    key: "handleBackTime",
    value: function handleBackTime() {
      this.setState({
        calendarView: _CalendarUI.VIEWS.DAY_VIEW
      });
    }
  }, {
    key: "handleNextYear",
    value: function handleNextYear() {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.clone().add(1, 'year')
        };
      });
    }
  }, {
    key: "handlePrevYear",
    value: function handlePrevYear() {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.clone().subtract(1, 'year')
        };
      });
    }
  }, {
    key: "handleChangeYear",
    value: function handleChangeYear(year) {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.clone().year(year),
          calendarView: _CalendarUI.VIEWS.DAY_VIEW
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
      var _this$props3 = this.props,
          locale = _this$props3.locale,
          weekOffset = _this$props3.weekOffset,
          keyValid = _this$props3.keyValid,
          min = _this$props3.min,
          max = _this$props3.max,
          dateFormat = _this$props3.dateFormat,
          markers = _this$props3.markers;
      var _this$state = this.state,
          date = _this$state.date,
          calendarMonth = _this$state.calendarMonth,
          calendarView = _this$state.calendarView;
      return _react["default"].createElement(_reactSwipeable["default"], {
        onSwipedLeft: this.swipingLeft,
        onSwipedRight: this.swipingRight
      }, _react["default"].createElement(_CalendarUI.Container, null, _react["default"].createElement(_CalendarUI.Content, null, calendarView === _CalendarUI.VIEWS.DAY_VIEW && _react["default"].createElement(_CalendarDayView["default"], {
        handlePrevMonth: this.handlePrevMonth,
        handleNextMonth: this.handleNextMonth,
        handlePrevYear: this.handlePrevYear,
        handleNextYear: this.handleNextYear,
        updateCalendarView: this.updateCalendarView,
        weekOffset: weekOffset,
        locale: locale,
        calendarMonth: calendarMonth,
        onChange: this.onChange,
        min: min,
        date: date,
        keyValid: keyValid,
        max: max,
        dateFormat: dateFormat,
        markers: markers
      }), calendarView === _CalendarUI.VIEWS.TIME_VIEW && _react["default"].createElement(_TimeView["default"], {
        locale: locale,
        onChange: this.onTime,
        date: date.format(),
        handleBackTime: this.handleBackTime
      }), calendarView === _CalendarUI.VIEWS.MONTH_VIEW && _react["default"].createElement(_CalendarMonthView["default"], {
        locale: locale,
        handleChangeMonth: this.handleChangeMonth
      }), calendarView === _CalendarUI.VIEWS.YEAR_VIEW && _react["default"].createElement(_CalendarYearView["default"], {
        handleChangeYear: this.handleChangeYear,
        date: date
      }))));
    }
  }]);

  return Calendar;
}(_react.Component);

Calendar.propTypes = {
  confirm: _propTypes["default"].func.isRequired,
  cancel: _propTypes["default"].func.isRequired,
  weekOffset: _propTypes["default"].number,
  value: _propTypes["default"].string,
  dateFormat: _propTypes["default"].string,
  timeFormat: _propTypes["default"].string,
  locale: _propTypes["default"].string.isRequired,
  keyValid: _propTypes["default"].func.isRequired,
  min: _propTypes["default"].string,
  max: _propTypes["default"].string,
  markers: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired
};
Calendar.defaultProps = {
  weekOffset: 0,
  value: undefined,
  dateFormat: 'MM/DD/YYYY',
  timeFormat: undefined,
  min: undefined,
  max: undefined
};

var _default = (0, _reactOnclickoutside["default"])(Calendar);

exports["default"] = _default;