"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _context = _interopRequireDefault(require("../SS4UForm/context"));

var _errorMessages = _interopRequireDefault(require("./errorMessages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexFlow: 'column',
      margin: '1em 0'
    },
    errorMessage: {
      fontSize: '.6em',
      color: 'rgba(255, 0, 0, .8)'
    }
  };
});

var SS4UTextField = function SS4UTextField(props) {
  var classes = useStyles();

  var options = _objectSpread({
    label: 'Input Text',
    name: 'inputText'
  }, props);

  var validations = {
    required: props.required,
    min: props.min,
    max: props.max,
    minLength: props.minLength,
    maxLength: props.maxLength,
    pattern: props.pattern,
    validate: props.validate
  };

  var context = _react.default.useContext(_context.default);

  if (!context) throw new Error('The SS4UTextField must be used inside the SS4UForm');

  var _React$useState = _react.default.useState({
    type: '',
    message: ''
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      validationError = _React$useState2[0],
      setValidationError = _React$useState2[1];

  var actions = context.actions;

  _react.default.useEffect(function () {
    var err = actions.errors[options.name];

    if (err) {
      setValidationError({
        type: err.type,
        message: getMessage(err, [actions.control.fieldsRef.current[options.name][err.type]])
      });
    }
  }, [actions.errors, options.name, actions.control.fieldsRef, options.value]);

  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_core.TextField, _extends({}, options, {
    inputRef: actions.register(validations)
  })), actions.errors[options.name] && validationError.type === actions.errors[options.name].type && _react.default.createElement("span", {
    className: classes.errorMessage
  }, " ", validationError.message, " "));
};

var getMessage = function getMessage(err, complement) {
  var message = _errorMessages.default[err.type];
  var qty = message.match(/{/gi) ? message.match(/{/gi).length : 0;

  for (var i = 0; i < qty; i++) {
    message = message.replace("{".concat(i, "}"), complement[i]);
  }

  return message;
};

var _default = SS4UTextField;
exports.default = _default;

//# sourceMappingURL=index.js.map