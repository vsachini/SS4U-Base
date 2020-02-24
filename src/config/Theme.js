import { createMuiTheme } from '@material-ui/core';

const theme = {
  primaryColor: '#242348',
  secondaryColor: '#5A55AA',
  textColor: '#2B2B2B'
}

export default createMuiTheme({
  palette: {
    primary: {
      main: theme.primaryColor,
      login: {
        primary: theme.primaryColor,
        secondary: theme.secondaryColor
      },
      title: {
        color: theme.primaryColor,
      },
      subtitle: {
        color: 'rgba(77, 79, 92, .5)'
      },
      text: {
        color: theme.textColor
      }
    },
    secondary: {
      main: theme.secondaryColor
    }
  },
  overrides: {
    MuiButton: {
      outlined: {
        border: `1px solid ${ theme.primaryColor }`,
      },
      contained: {
        backgroundColor: theme.primaryColor,
        color: '#fff',
        '&:hover': {
          color: '#fff',
          backgroundColor: theme.secondaryColor
        }
      }
    },
  //   MuiTypography: {
  //     body1: {
  //       fontSize: 'unset',
  //       fontFamily: 'Gotham-Book'
  //     }
  //   },
  //   MuiFormLabel: {
  //     root: {
  //       color: 'black',
  //       fontFamily: 'Gotham-Book',
  //       fontSize: 'unset'
  //     }
  //   },
  //   MuiInput: {
  //     underline: {
  //       '&::before': {
  //         borderBottom: '1px solid black'
  //       }
  //     }
  //   },
  //   MuiIconButton: {
  //     root: {
  //       color: 'unset'
  //     }
  //   }
  }
});