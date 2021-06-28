import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';
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
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
