import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pages from '../../constants/pages';
import { initStatisticPage } from '../../utils';
import MainPage from '../page/main-page/main-page';
import PagesCards from '../page/pages/pagesCards';
import StatisticPage from '../page/statistic-page/statistic-page';
import './main.scss';

const Main = (): JSX.Element => {
  return (
    <main className="main" onClick={initStatisticPage} role="presentation">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/action_a" render={(): JSX.Element => <PagesCards src={Pages.actionSetA} />} />
        <Route path="/action_b" render={(): JSX.Element => <PagesCards src={Pages.actionSetB} />} />
        <Route path="/action_c" render={(): JSX.Element => <PagesCards src={Pages.actionSetC} />} />
        <Route path="/adjective" render={(): JSX.Element => <PagesCards src={Pages.adjective} />} />
        <Route path="/animal_a" render={(): JSX.Element => <PagesCards src={Pages.animalA} />} />
        <Route path="/animal_b" render={(): JSX.Element => <PagesCards src={Pages.animalB} />} />
        <Route path="/clothes" render={(): JSX.Element => <PagesCards src={Pages.clothes} />} />
        <Route path="/emotion" render={(): JSX.Element => <PagesCards src={Pages.emotion} />} />
        <Route path="/statistic" component={StatisticPage} />
        <Route path="/**" component={MainPage} />
      </Switch>
    </main>
  );
};

export default Main;
