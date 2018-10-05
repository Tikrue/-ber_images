import * as React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider } from 'mobx-react';

import './App.css'
import Images from './components/images/images'
import Albums from './components/albums/albums'
import Navigation from './components/navigation/navigation'
import { routes } from './utils/constants'
import Store from './store/store'

const store = new Store()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div className="routerWrapper">
              <Navigation routes={routes}/>
              <Switch>
                <Route path={routes.images} component={Images}/>
                <Route path={routes.albums} component={Albums}/>
                <Route
                  exact path={'/'}
                  render={
                    () => (<header className="App-header">
                      <h1 className="App-title">Über images</h1>
                    </header>)
                  }
                />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App

