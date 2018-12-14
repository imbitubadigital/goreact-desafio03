import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/reactotron';
import GlobalStyle from './styles/global';
import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </Fragment>
  </Provider>
);

export default App;
