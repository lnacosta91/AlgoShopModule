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
  appBar: {
    position: 'relative'
  },
  toolbarTitle: {
    flex: 1
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2
    }
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`
  }
})

export default theme
