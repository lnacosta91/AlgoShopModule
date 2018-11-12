import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// icons
import SearchIcon from '@material-ui/icons/Search'

import { NavLink } from 'react-router-dom'



import { themeVariables, globalStyles } from '../theme'

const styles = theme => ({
  root: {
    padding: '25px 50px',
  }
})

class ShopAbout extends Component {
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant='h6'>Shop About</Typography>
      </div>
    )
  }
}

ShopAbout.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  match: PropTypes.object
}

export default withStyles(styles)(ShopAbout)
