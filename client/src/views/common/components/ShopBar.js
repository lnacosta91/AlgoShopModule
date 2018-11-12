import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// icons
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import DescriptionIcon from '@material-ui/icons/Description'
import InfoIcon from '@material-ui/icons/Info'

import { NavLink, withRouter } from 'react-router-dom'

import log from '../../../utils/log'


import { themeVariables, globalStyles } from '../../theme'

const styles = theme => ({
  header: {
    height: 131,
    background: themeVariables.colors.darkBg,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toolbar: {
    padding: '5px 24px',
    color: themeVariables.colors.snow,
    fontWeight: 300,
    background: themeVariables.colors.primaryLight,
    boxShadow: '0 2px 10px 0 rgba(0,0,0,0.4)',
  },
  title: {
    color: themeVariables.colors.snow,
    padding: '0 20px',
    fontSize: 20,
  },
  navTabs: {
    paddingRight: 0,
  },
  navTabsBtn: {
    padding: 0,
  },
  navTabsItem: {
    fontSize: 14,
    padding: '5px 10px',
    textDecoration: 'none',
    color: themeVariables.colors.textDark,
  },
  navTabsItemActive: {
    color: themeVariables.colors.snow,
  },
  navTabsItemIcon: {
    height: 18,
    marginRight: 2,
  },
})



class ShopBar extends Component {
  render () {
    const { classes, user, match } = this.props;
    log.debug('ShopBar: ', user, match)
    const navLinks = [
      { icon: <HomeIcon className={classes.navTabsItemIcon} />, page: 'Home', link: '/home'},
      { icon: <DescriptionIcon className={classes.navTabsItemIcon} />, page: 'Directory', link: '/directory'},
      { icon: <SearchIcon className={classes.navTabsItemIcon} />, page: 'Search', link: '/search'},
      { icon: <InfoIcon className={classes.navTabsItemIcon} />, page: 'About', link: '/about'},
    ]
    return (
      <div className={classes.root}>
        <div className={classes.header}></div>
        <div className={classNames(classes.flexRow, classes.toolbar)}>
          <Typography variant='h5' className={classes.title}>Shop Module</Typography>
          <div className={classNames(classes.flexRow, classes.navTabs)}>
            {navLinks && navLinks.map((item, i) => (
              <Button key={i} className={classes.navTabsBtn}>
                <NavLink activeClassName={classes.navTabsItemActive} className={classNames(classes.flexRow, classes.navTabsItem)} to={match.url + item.link}>
                  {item.icon}
                  {item.page}
                </NavLink>
              </Button>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

ShopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  match: PropTypes.object
}

export default withStyles(styles)(withRouter(ShopBar))
