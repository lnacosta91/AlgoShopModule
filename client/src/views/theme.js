import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
// import red from '@material-ui/core/colors/red'

export const themeVariables = {
  colors: {
    snow: '#ffffff',
    darkBg: '#303038',
    primary: '#ff4851',
    primaryLight: '#db4e26',
    textDark: '#333333',
    lightGrayBg: '#d1d1d1',
    errorBg: '#ffebeb',
    error: '#ff4851',
    medium: '#ffb800',
  }
}

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#303036' },
    secondary: indigo
  },
  typography: {
    fontFamily: '"Saira","Saira Condenses", sans-serif'
  },
  overrides: {
    Paper: {
      root: {
        backgroundColor: '#ffffff'
      },
      elevation: 0,
      square: true
    }
  }
})

export const globalStyles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
})

export default theme
