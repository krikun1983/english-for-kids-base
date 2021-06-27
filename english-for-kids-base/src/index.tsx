import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import './app.scss';

const App = () => (
  <>
    <Header />
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
