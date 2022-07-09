import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux'
import store from './store'
import { runOneSignal } from './views/dashboard/OneSignal'

runOneSignal();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)


serviceWorkerRegistration.register();


