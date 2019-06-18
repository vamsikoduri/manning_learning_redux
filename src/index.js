import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

import * as FLAVORS from './constants/flavors';
import { actions } from './ducks/freezer';
import store from './store';
import { Provider } from 'react-redux';

setTimeout(function () {
  store.dispatch(actions.addProductToFreezer(FLAVORS.STRAWBERRY, 20));
}, 1500);

ReactDOM.render(

  (
    <Provider store={store}>
      <App />
    </Provider>

  ),
  document.getElementById('root')
);
