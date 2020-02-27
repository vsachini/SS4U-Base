import { createMuiTheme } from '@material-ui/core';

const theme = {
  primaryColor: '#52D8DD',
  secondaryColor: '#52D8DD',
  textColor: '#2B2B2B',
  menu: {
    drawer: {
      background: '#2B2B2B',
      text: '#FFF',
      icon: '#FFF'
    },
    appBar: {
      background: '#FFF',
      text: '#2B2B2B'
    }
  }
}

export default createMuiTheme({
  palette: {
    primary: {
      main: theme.primaryColor,
    },
    secondary: {
      main: theme.secondaryColor
    },
    title: theme.primaryColor,
    subtitle: 'rgba(77, 79, 92, .5)',
    font: theme.textColor,
    menu: {
      drawer: {
        background: theme.menu.drawer.background,
        text: theme.menu.drawer.text,
        icon: theme.menu.drawer.icon,
        selected: theme.secondaryColor
      },
      appBar: {
        background: theme.menu.appBar.background,
        text: theme.menu.appBar.text
      },
    },
    action: {
      selected: 'rgba(0,0,0,.2)'
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
    }
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