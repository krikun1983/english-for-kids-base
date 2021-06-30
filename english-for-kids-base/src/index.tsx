import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header';
import Main from './components/main';
import store from './store';
import './app.scss';

const App = () => (
  <>
    <Router>
      <Header />
      <Main />
    </Router>
  </>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
