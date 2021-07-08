import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header';
import Main from './components/main';
import store from './store';
import Footer from './components/footer';
import './app.scss';

const App = (): JSX.Element => (
  <>
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  </>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
