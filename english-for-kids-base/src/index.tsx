import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import './heading.scss';
import './content.scss';
import car from './assets/car.jpg';

const Heading = () => <h1 className="heading">My React and TypeScript App</h1>;

const Content = () => (
  <div>
    <img src={car} className="car" alt="" />
  </div>
);

const App = () => (
  <>
    <Heading />
    <Content />
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
