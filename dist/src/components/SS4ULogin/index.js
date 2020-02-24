"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _SS4UForm = _interopRequireDefault(require("../SS4UForm"));

var _SS4UTextField = _interopRequireDefault(require("../SS4UTextField"));

var _SS4ULink = _interopRequireDefault(require("../SS4ULink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import SS4UForm from '@bit/smart-solution-4u.form.s-s4-u-form';
// import SS4UTextField from '@bit/smart-solution-4u.form.s-s4-u-text-field';
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      height: '100%'
    },
    form: {
      width: '20em'
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
      flexDirection: 'column',
      minHeight: '100%'
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    title: {
      color: theme.palette.primary.title.color,
      fontSize: '1.8em',
      letterSpacing: '.5rem',
      margin: '.2em 0',
      fontWeight: 'bold'
    },
    subtitle: {
      color: theme.palette.primary.subtitle.color
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: '2em'
    },
    forgotPass: {
      textAlign: 'center'
    }
  };
});

var SS4ULogin = function SS4ULogin(props) {
  var classes = useStyles();

  var handleSubmit = function handleSubmit(e) {
    console.log('a');
  };

  return _react.default.createElement(_core.Grid, {
    container: true,
    spacing: 0,
    className: classes.root
  }, _react.default.createElement(_core.Grid, {
    item: true,
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
  }, _react.default.createElement("div", {
    className: classes.titleContainer
  }, _react.default.createElement("span", {
    className: classes.title
  }, " ", process.env.REACT_APP_COMPANY_NAME, " "), _react.default.createElement("span", {
    className: classes.subtitle
  }, " Welcome back! Please login to your account. ")), _react.default.createElement(_SS4UForm.default, {
    className: classes.form,
    handlesubmit: handleSubmit
  }, _react.default.createElement(_SS4UTextField.default, {
    label: "Username",
    name: "username",
    required: true
  }), _react.default.createElement(_SS4UTextField.default, {
    label: "Password",
    name: "password",
    type: "password",
    required: true
  }), _react.default.createElement("div", {
    className: classes.forgotPass
  }, _react.default.createElement(_SS4ULink.default, {
    label: "Forgot Password",
    href: "#"
  })), _react.default.createElement("div", {
    className: classes.buttonsContainer
  }, _react.default.createElement(_core.Button, {
    variant: "contained",
    type: "submit"
  }, " Login "), _react.default.createElement(_core.Button, {
    variant: "outlined"
  }, " Sign up ")))));
};

var _default = SS4ULogin;
exports.default = _default;

//# sourceMappingURL=index.js.map