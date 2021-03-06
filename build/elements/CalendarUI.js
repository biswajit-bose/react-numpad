"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VIEWS = exports.GridItemLink = exports.DayGridItem = exports.StyledGridItem = exports.WeekDays = exports.Days = exports.YearLabel = exports.YearSwitch = exports.MonthLabel = exports.MonthSwitch = exports.TwelveGridItem = exports.TwelveGrid = exports.Header = exports.Content = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("color"));

var _mediaTemplates = require("../styles/media-templates");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  ", " text-decoration: none !important;\n  cursor: pointer;\n  &:hover {\n    ", ";\n  }\n  ", " &[disabled] {\n    color: ", " !important;\n    pointer-events: none;\n    cursor: not-allowed;\n  }\n  position: relative;\n  ", ";\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  width: calc(100% * (1 / 7) - 1px - 0.5rem);\n  text-align: center;\n  border-right: none;\n  border-bottom: 1px solid #fff;\n  padding: 0.25rem;\n  ", " & {\n    border: none;\n    padding: 0.2em;\n    font-size: 0.8em;\n    :nth-child(-n + 7) {\n      border-top: none;\n    }\n  }\n  :nth-child(-n + 7) {\n    border-top: '1px solid #ddd';\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  background: white;\n  height: 26px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  flex-grow: 1;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  min-width: 40px;\n  text-align: center;\n  &:active {\n    ", ";\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  min-width: 83px;\n  text-align: center;\n  &:active {\n    ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  width: 25%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  text-transform: capitalize;\n  &:hover {\n    ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  min-height: 34px;\n  display: flex;\n  justify-content: space-between;\n  text-transform: capitalize;\n  color: white;\n  background: ", ";\n  svg:hover {\n    fill: #ffc107;\n  }\n  svg {\n    width: 1.5em;\n    height: 1.5em;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["width: 100vw;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  height: 300px;\n  width: 100vw;\n  ", " ", " transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n  background: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  user-select: none;\n  width: 100%;\n  *,\n  :after,\n  :before {\n    box-sizing: content-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Content = _styledComponents["default"].div(_templateObject2(), _mediaTemplates.media.mobile(_templateObject3()), function (props) {
  return props.theme.position === 'fullscreen' ? "\n  width: 100vw;\n  height: 100vh;\n  font-size: 1.2em;\n  " : "\n    max-width: ".concat(props.theme.coords ? '340px' : '768px', ";\n  ");
}, function (props) {
  return props.theme.body.backgroundColor;
});

exports.Content = Content;

var Header = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.header.backgroundColor;
});

exports.Header = Header;

var TwelveGridItem = _styledComponents["default"].div(_templateObject5(), function (props) {
  return "color: ".concat(props.theme.body.highlightColor, ";");
});

exports.TwelveGridItem = TwelveGridItem;

var TwelveGrid = _styledComponents["default"].div(_templateObject6());

exports.TwelveGrid = TwelveGrid;

var MonthSwitch = _styledComponents["default"].div(_templateObject7());

exports.MonthSwitch = MonthSwitch;

var MonthLabel = _styledComponents["default"].div(_templateObject8(), function (props) {
  return "color: ".concat(props.theme.body.highlightColor, ";");
});

exports.MonthLabel = MonthLabel;

var YearSwitch = _styledComponents["default"].div(_templateObject9());

exports.YearSwitch = YearSwitch;

var YearLabel = _styledComponents["default"].div(_templateObject10(), function (props) {
  return "color: ".concat(props.theme.body.highlightColor, ";");
});

exports.YearLabel = YearLabel;

var Days = _styledComponents["default"].div(_templateObject11());

exports.Days = Days;

var WeekDays = _styledComponents["default"].div(_templateObject12());

exports.WeekDays = WeekDays;

var StyledGridItem = _styledComponents["default"].div(_templateObject13(), WeekDays);

exports.StyledGridItem = StyledGridItem;
var GridItemLink = StyledGridItem.withComponent('a');
exports.GridItemLink = GridItemLink;
var DayGridItem = (0, _styledComponents["default"])(GridItemLink)(_templateObject14(), function (props) {
  return props.prevMonth || props.nextMonth ? "color: ".concat((0, _color["default"])(props.theme.body.primaryColor).alpha(0.8).string(), ";") : "color: ".concat(props.theme.body.primaryColor, ";");
}, function (props) {
  return props.active ? '' : "color: ".concat(props.theme.body.highlightColor, "; border-color: ").concat(props.theme.body.highlightColor);
}, function (props) {
  return props.active ? "\n        font-weight: 700;\n        border-color: ".concat(props.theme.body.primaryColor, ";\n        ") : "";
}, function (props) {
  return (0, _color["default"])(props.theme.body.primaryColor).alpha(0.5).string();
}, function (props) {
  return props.marker ? "\n    &::before,\n    &::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      padding: 0;\n      border-color: transparent;\n      border-style: solid;\n    }\n\n    &::after {\n      border-width: 0.5em;\n      border-right-color: ".concat(props.theme.body.highlightColor, ";\n      border-top-color: ").concat(props.theme.body.highlightColor, ";\n    }") : "";
});
exports.DayGridItem = DayGridItem;
var VIEWS = {
  TIME_VIEW: 'TIME_VIEW',
  DAY_VIEW: 'DAY_VIEW',
  MONTH_VIEW: 'MONTH_VIEW',
  YEAR_VIEW: 'YEAR_VIEW'
};
exports.VIEWS = VIEWS;