import React from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute } from 'react-router'

import {
  App,
  Home
} from './components'

export default (store, history) => {
  return (
    <Router history={syncHistoryWithStore(history, store)}>
      <Route path='/'
             component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  )
}