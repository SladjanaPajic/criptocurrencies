import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Currency from './pages/Currency'

export default class App extends Component {
  render () {
    return (
      <div id='App'>
        <React.Fragment>
          <Navigation />
          <Switch>
            <Route exact path='/settings' component={Settings} />
            <Route
              exact
              path='/:id'
              render={(props) => <Currency {...props} />}
            />
            <Route exact path='/' render={(props) => <Home {...props} />} />
          </Switch>
        </React.Fragment>
      </div>
    )
  }
}
