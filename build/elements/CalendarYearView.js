"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _chevronLeft = _interopRequireDefault(require("react-icons/lib/md/chevron-left"));

var _chevronRight = _interopRequireDefault(require("react-icons/lib/md/chevron-right"));

var _CalendarUI = require("./CalendarUI");

var _ui = _interopRequireDefault(require("./ui"));

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

var YearView =
/*#__PURE__*/
function (_Component) {
  _inherits(YearView, _Component);

  function YearView(props) {
    var _this;

    _classCallCheck(this, YearView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(YearView).call(this, props));
    _this.state = {
      year: props.date.year()
    };
    _this.prev = _this.prev.bind(_assertThisInitialized(_this));
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(YearView, [{
    key: "prev",
    value: function prev() {
      this.setState(function (oldState) {
        return {
          year: oldState.year - 12
        };
      });
    }
  }, {
    key: "next",
    value: function next() {
      this.setState(function (oldState) {
        return {
          year: oldState.year + 12
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var handleChangeYear = this.props.handleChangeYear;
      var year = this.state.year;
      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_CalendarUI.Header, null, _react["default"].createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }
      }, _react["default"].createElement(_ui["default"], {
        onClick: this.prev
      }, _react["default"].createElement(_chevronLeft["default"], null)), _react["default"].createElement(_ui["default"], {
        onClick: this.next
      }, _react["default"].createElement(_chevronRight["default"], null)))), _react["default"].createElement(_CalendarUI.TwelveGrid, null, Array(12).fill().map(function (_, i) {
        return _react["default"].createElement(_CalendarUI.TwelveGridItem, {
          onClick: function onClick() {
            return handleChangeYear(year - 5 + i);
          },
          key: "month-".concat(year - 5 + i)
        }, year - 5 + i);
      })));
    }
  }]);

  return YearView;
}(_react.Component);

YearView.propTypes = {
  handleChangeYear: _propTypes["default"].func.isRequired,
  date: _propTypes["default"].object.isRequired // eslint-disable-line react/forbid-prop-types

};
var _default = YearView;
exports["default"] = _default;