"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _chevronLeft = _interopRequireDefault(require("react-icons/lib/md/chevron-left"));

var _chevronRight = _interopRequireDefault(require("react-icons/lib/md/chevron-right"));

var _CalendarUI = require("./CalendarUI");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var GridItem = function GridItem(_ref) {
  var _onClick = _ref.onClick,
      day = _ref.day,
      date = _ref.date,
      children = _ref.children,
      disabled = _ref.disabled,
      marker = _ref.marker;
  return _react["default"].createElement(_CalendarUI.DayGridItem, {
    active: day.day.isSame(date),
    onClick: function onClick() {
      return _onClick(day.day);
    },
    nextMonth: day.nextMonth,
    prevMonth: day.prevMonth,
    disabled: disabled,
    marker: marker
  }, children);
};

GridItem.propTypes = {
  onClick: _propTypes["default"].func.isRequired,
  day: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  date: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  children: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool.isRequired,
  marker: _propTypes["default"].bool.isRequired
};

var createDateObjects = function createDateObjects(startOfMonth, weekOffset) {
  var diff = startOfMonth.isoWeekday() - weekOffset;
  if (diff < 0) diff += 7;
  var prevMonthDays = [];

  for (var _i = 0; _i < diff; _i += 1) {
    prevMonthDays.push({
      day: startOfMonth.clone().subtract(diff - _i, 'days'),
      prevMonth: true
    });
  }

  var currentMonthDays = [];

  for (var _i2 = 1; _i2 < startOfMonth.daysInMonth() + 1; _i2 += 1) {
    currentMonthDays.push({
      day: (0, _moment["default"])([startOfMonth.year(), startOfMonth.month(), _i2])
    });
  }

  var daysAdded = prevMonthDays.length + currentMonthDays.length - 1;
  var nextMonthDays = [];
  var i = 1;

  while (daysAdded + i < 42) {
    nextMonthDays.push({
      day: currentMonthDays[currentMonthDays.length - 1].day.clone().add(i, 'days'),
      nextMonth: true
    });
    i += 1;
  }

  return [].concat(prevMonthDays, currentMonthDays, nextMonthDays);
};

var DayView = function DayView(_ref2) {
  var weekOffset = _ref2.weekOffset,
      locale = _ref2.locale,
      calendarMonth = _ref2.calendarMonth,
      onChange = _ref2.onChange,
      min = _ref2.min,
      max = _ref2.max,
      dateFormat = _ref2.dateFormat,
      markers = _ref2.markers,
      date = _ref2.date,
      keyValid = _ref2.keyValid,
      handlePrevMonth = _ref2.handlePrevMonth,
      handleNextMonth = _ref2.handleNextMonth,
      handlePrevYear = _ref2.handlePrevYear,
      handleNextYear = _ref2.handleNextYear,
      updateCalendarView = _ref2.updateCalendarView;
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_CalendarUI.Header, null, _react["default"].createElement(_CalendarUI.MonthSwitch, null, _react["default"].createElement(_chevronLeft["default"], {
    onClick: handlePrevMonth
  }), _react["default"].createElement(_CalendarUI.MonthLabel, {
    onClick: function onClick() {
      return updateCalendarView(_CalendarUI.VIEWS.MONTH_VIEW);
    }
  }, calendarMonth.locale(locale).format('MMMM')), _react["default"].createElement(_chevronRight["default"], {
    onClick: handleNextMonth
  })), _react["default"].createElement(_CalendarUI.YearSwitch, null, _react["default"].createElement(_chevronLeft["default"], {
    onClick: handlePrevYear
  }), _react["default"].createElement(_CalendarUI.YearLabel, {
    onClick: function onClick() {
      return updateCalendarView(_CalendarUI.VIEWS.YEAR_VIEW);
    }
  }, calendarMonth.locale(locale).format('YYYY')), _react["default"].createElement(_chevronRight["default"], {
    onClick: handleNextYear
  }))), _react["default"].createElement(_CalendarUI.WeekDays, null, Array(7).fill().map(function (_, i) {
    return i + weekOffset;
  }).map(function (weekDay) {
    return _react["default"].createElement(_CalendarUI.StyledGridItem, {
      key: "week-day-".concat(weekDay)
    }, (0, _moment["default"])().isoWeekday(weekDay).locale(locale).format('dd'));
  })), _react["default"].createElement(_CalendarUI.Days, null, createDateObjects(calendarMonth, weekOffset).map(function (day) {
    return _react["default"].createElement(GridItem, {
      key: "day-".concat(day.day.format('DD.MM')),
      day: day,
      date: date,
      onClick: onChange,
      disabled: !keyValid(day.day, min, max, dateFormat),
      marker: markers.includes(day.day.format(dateFormat))
    }, day.day.format('D'));
  })));
};

DayView.propTypes = {
  weekOffset: _propTypes["default"].number.isRequired,
  locale: _propTypes["default"].string.isRequired,
  min: _propTypes["default"].string,
  max: _propTypes["default"].string,
  dateFormat: _propTypes["default"].string.isRequired,
  markers: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  keyValid: _propTypes["default"].func.isRequired,
  calendarMonth: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  onChange: _propTypes["default"].func.isRequired,
  date: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  handlePrevMonth: _propTypes["default"].func.isRequired,
  handleNextMonth: _propTypes["default"].func.isRequired,
  handlePrevYear: _propTypes["default"].func.isRequired,
  handleNextYear: _propTypes["default"].func.isRequired,
  updateCalendarView: _propTypes["default"].func.isRequired
};
DayView.defaultProps = {
  min: undefined,
  max: undefined
};
var _default = DayView;
exports["default"] = _default;