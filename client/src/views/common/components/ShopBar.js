import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'

// icons
import SearchIcon from '@material-ui/icons/Search'

import { Link, withRouter } from 'react-router-dom'

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
    padding: '5px 20px',
    color: themeVariables.colors.snow,
    fontWeight: 300,
    background: themeVariables.colors.primaryLight,
    boxShadow: '0 2px 10px 0 rgba(0,0,0,0.4)',
  },
  title: {
    padding: '0 20px',
    fontSize: 18,
  },
  navTabs: {
    paddingRight: 0,
  },
  navTabsItem: {
    color: themeVariables.colors.textDark,
  },
  navTabsItemActive: {
    color: themeVariables.colors.snow,
  },
})

const navLinks = [
  { icon: SearchIcon, page: 'Home', link: '/home'},
  { icon: SearchIcon, page: 'Directory', link: '/directory'},
  { icon: SearchIcon, page: 'Search', link: '/search'},
  { icon: SearchIcon, page: 'About', link: '/about'},
];

class ShopBar extends Component {
  render () {
    const { classes, user, match } = this.props
    log.debug('ShopBar: ', user, match)
    return (
      <div className={classes.root}>
        <div className={classes.header}></div>
        <div className={classNames(classes.flexRow, classes.toolbar)}>
          <div className={classes.title}>Shop Module</div>
          <div className={classNames(classes.flexRow, classes.navTabs)}>
            {navLinks && navLinks.map((item, i) => (
              <Button key={i} className={classes.navTabsBtn}>
                <Link activeClassName={classes.navTabsItemActive} className={classes.navTabsItem} to={match.url + item.link}>
                  {item.icon}
                  {item.page && <span>{item.page}</span>}
                </Link>
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
