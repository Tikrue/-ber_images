import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { configure } from 'mobx'

import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import store from './store/store'

configure({
  enforceActions: 'always'
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
