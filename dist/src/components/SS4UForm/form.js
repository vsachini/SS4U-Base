"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _context = _interopRequireDefault(require("./context"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      marginBottom: '2em'
    }
  };
});

var Form = function Form(props) {
  var classes = useStyles();

  var _React$useContext = _react.default.useContext(_context.default),
      actions = _React$useContext.actions;

  return _react.default.createElement("form", _extends({
    onSubmit: actions.handleSubmit(props.handlesubmit),
    noValidate: true
  }, props, {
    className: "".concat(classes.root, " ").concat(props.className)
  }), props.children);
};

var _default = Form;
exports.default = _default;

//# sourceMappingURL=form.js.map