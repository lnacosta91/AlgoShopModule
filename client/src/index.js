import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import LuxonUtils from '@date-io/luxon'

import Home from './components/Home'
import Buy from './components/Buy'
import History from './components/History'
import Support from './components/Support'

const App = () => (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
        <Switch>
            <Route exact path='/shop/' component={Home} />
            <Route path='/shop/buy' component={Buy} />
            <Route path='/shop/history' component={History} />
            <Route path='/shop/support' component={Support} />
        </Switch>
    </MuiPickersUtilsProvider>
)

export default App

