"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _context = _interopRequireDefault(require("./context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(props) {
  var _React$useContext = _react.default.useContext(_context.default),
      actions = _React$useContext.actions;

  return _react.default.createElement("form", {
    onSubmit: actions.handleSubmit(props.onSubmit),
    noValidate: true
  }, props.children);
};

var _default = Form;
exports.default = _default;

//# sourceMappingURL=form.js.map