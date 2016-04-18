// React
import React from 'react';
import { render } from 'react-dom';

// Redux
import { createStore } from 'redux'

// React Redux
import { Provider } from 'react-redux'

// React Router
import { Router, hashHistory } from 'react-router';

// reducers
import appStore from './reducers/index.jsx'

import routes from './routes/routes.jsx'

let store = createStore(appStore, {})

console.log(store.getState());

$(document).ready(function () {
  render((
    <Provider store={store}>
      <Router history={hashHistory} children={routes} />
    </Provider>
  ), document.getElementById('example'))
});
