import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Pages, Path } from '../../constants/pages';
import { initStatisticPage } from '../../utils';
import ErrorWordsPage from '../page/errors-words-page/errors-words-page';
import MainPage from '../page/main-page/main-page';
import PagesCards from '../page/pages/pagesCards';
import StatisticPage from '../page/statistic-page/statistic-page';
import './main.scss';

const Main = (): JSX.Element => {
  return (
    <main className="main" onClick={initStatisticPage} role="presentation">
      <Switch>
        <Route exact path={Path.main} component={MainPage} />
        <Route path={Path.actionSetA} render={(): JSX.Element => <PagesCards src={Pages.actionSetA} />} />
        <Route path={Path.actionSetB} render={(): JSX.Element => <PagesCards src={Pages.actionSetB} />} />
        <Route path={Path.actionSetC} render={(): JSX.Element => <PagesCards src={Pages.actionSetC} />} />
        <Route path={Path.adjective} render={(): JSX.Element => <PagesCards src={Pages.adjective} />} />
        <Route path={Path.animalA} render={(): JSX.Element => <PagesCards src={Pages.animalA} />} />
        <Route path={Path.animalB} render={(): JSX.Element => <PagesCards src={Pages.animalB} />} />
        <Route path={Path.clothes} render={(): JSX.Element => <PagesCards src={Pages.clothes} />} />
        <Route path={Path.emotion} render={(): JSX.Element => <PagesCards src={Pages.emotion} />} />
        <Route path={Path.statistic} component={StatisticPage} />
        <Route path={Path.errorsWords} component={ErrorWordsPage} />
        <Route path={Path.errorsPath} component={MainPage} />
      </Switch>
    </main>
  );
};

export default Main;
