import './assets/index.css'//customer style


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, hashHistory, browserHistory, IndexRoute } from 'react-router';

import store from 'ROOTSTORE'
import routes from './routes'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();// Needed for onTouchTap
console.log('oooooooooooooo')

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} children={routes}/>
  </Provider>,
  document.getElementById('app')
);
