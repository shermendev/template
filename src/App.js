import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '~store/store'
import { homeRoute } from '~config/home-route'
import { Header } from '~components'
import { Home, NotFound } from '~pages'

const App = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Route component={Header} path={homeRoute} />
        <Switch>
          <Route exact component={Home} path={homeRoute} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </>
)

export default hot(App)
