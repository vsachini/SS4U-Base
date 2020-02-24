"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SS4UFormConsumer = exports.SS4UFormProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHookForm = require("react-hook-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SS4UFormContext = _react.default.createContext();

var SS4UFormProvider = function SS4UFormProvider(props) {
  // const [ state, setState ] = useState({ form: useForm() });
  var actions = (0, _reactHookForm.useForm)(); // const actions = React.useMemo(() => ({
  //   setForm: form => setState(st => ({
  //     ...st,
  //     form
  //   }))
  // }), [ setState ])

  return _react.default.createElement(SS4UFormContext.Provider, {
    value: {
      actions: actions
    }
  }, " ", props.children, " ");
};

exports.SS4UFormProvider = SS4UFormProvider;
var SS4UFormConsumer = SS4UFormContext.Consumer;
exports.SS4UFormConsumer = SS4UFormConsumer;
var _default = SS4UFormContext;
exports.default = _default;

//# sourceMappingURL=context.js.map