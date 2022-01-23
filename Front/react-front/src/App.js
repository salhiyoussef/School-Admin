/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { store, history } from './redux/store';
import RoutesApp from './routes/routes'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
          <RoutesApp />
      </Router>
    </Provider>
  );
}

export default App;
