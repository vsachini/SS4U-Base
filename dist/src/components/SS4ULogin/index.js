"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _smartSolution4uForm = _interopRequireDefault(require("@bit/smart-solution-4u.form.s-s4-u-form"));

var _smartSolution4uForm2 = _interopRequireDefault(require("@bit/smart-solution-4u.form.s-s4-u-text-field"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      height: '100%'
    },
    leftColumn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100%',
      background: "linear-gradient(".concat(theme.palette.primary.login.primary, ", ").concat(theme.palette.primary.login.secondary, ")")
    },
    rightColumn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100%'
    },
    errorMessage: {
      fontSize: '.6em',
      color: 'rgba(255, 0, 0, .8)'
    }
  };
});

var SS4ULogin = function SS4ULogin(props) {
  var classes = useStyles();
  return _react.default.createElement(_core.Grid, {
    container: true,
    spacing: 0,
    className: classes.root
  }, _react.default.createElement(_core.Grid, {
    item: true,
    xs: 0,
    sm: 6,
    className: classes.leftColumn
  }, _react.default.createElement("img", {
    src: "assets/img/logo.png",
    alt: "logo"
  })), _react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    className: classes.rightColumn
  }, _react.default.createElement(_smartSolution4uForm.default, null, _react.default.createElement(_smartSolution4uForm2.default, {
    label: "Username",
    required: true
  }), _react.default.createElement(_smartSolution4uForm2.default, {
    label: "Password",
    type: "password",
    required: true
  }))));
};

var _default = SS4ULogin;
exports.default = _default;

//# sourceMappingURL=index.js.map