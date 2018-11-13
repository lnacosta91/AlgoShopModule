import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import { withStyles } from '@material-ui/core/styles'
import {
  ShopBar,
  ShopHome,
  ShopSearch,
  ShopDirectory,
  ShopAbout,
  globalStyles,
} from './views'

import { getItem } from './utils/local-storage'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }

  async componentDidMount () {
    let user = await getItem('user')

    if (user !== null && user !== undefined && user !== 'undefined') {
      user = JSON.parse(user)
      this.setState({ user: user })
    }
  }

  render () {
    const { match, auth } = this.props;
    return (
      <div className='App'>
        <ShopBar />
        <Switch>
          <Route exact path={`${match.url}/home`} render={(props) => <ShopHome auth={auth} {...props} />}/>
          <Route exact path={`${match.url}/directory`} component={ShopDirectory} />
          <Route exact path={`${match.url}/search`} component={ShopSearch} />
          <Route exact path={`${match.url}/about`} component={ShopAbout} />
          <Redirect to={`${match.url}/home`} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  auth: PropTypes.object,
  match: PropTypes.object
}

const StyledApp = withStyles(globalStyles)(App)
export default hot(module)(StyledApp)
