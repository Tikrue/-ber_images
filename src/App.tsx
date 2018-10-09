import * as React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css'
import './loader.css'
import Images from './components/images/images'
import Albums from './components/albums/albums'
import Navigation from './components/navigation/navigation'
import Home from './components/home/home'
import { routes } from './utils/constants'

class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="routerWrapper">
            <Navigation routes={routes} />
            <Switch>
              <Route path={routes.images} component={Images} />
              <Route path={routes.albums} component={Albums} />
              <Route exact path={'/'} component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App

