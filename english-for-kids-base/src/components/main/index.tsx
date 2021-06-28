import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ActionSetA from '../page/action-set-a/action-set-a';
import ActionSetB from '../page/action-set-b/action-set-b';
import ActionSetC from '../page/action-set-c/action-set-c';
import Adjective from '../page/adjective/adjective';
import AnimalA from '../page/animal-a/animal-a';
import AnimalB from '../page/animal-b/animal-b';
import Clothes from '../page/clothes/clothes';
import Emotion from '../page/emotion/emotion';
import MainPage from '../page/main-page/main-page';
import './main.scss';

const Main = (): JSX.Element => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/action_a" component={ActionSetA} />
        <Route exact path="/action_b" component={ActionSetB} />
        <Route exact path="/action_c" component={ActionSetC} />
        <Route exact path="/adjective" component={Adjective} />
        <Route exact path="/animal_a" component={AnimalA} />
        <Route exact path="/animal_b" component={AnimalB} />
        <Route exact path="/clothes" component={Clothes} />
        <Route exact path="/emotion" component={Emotion} />
        <Route exact path="/**" component={MainPage} />
      </Switch>
    </main>
  );
};

export default Main;
