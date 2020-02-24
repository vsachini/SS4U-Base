"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _context = require("./context");

var _form = _interopRequireDefault(require("./form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SS4UForm = function SS4UForm(props) {
  return _react.default.createElement(_context.SS4UFormProvider, null, _react.default.createElement(_form.default, {
    onSubmit: props.onSubmit
  }, props.children));
};

var _default = SS4UForm;
exports.default = _default;

//# sourceMappingURL=index.js.map