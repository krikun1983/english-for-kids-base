import { combineReducers } from 'redux';
import CountErrorReducer from './countErrorsReducer';
import gameReducer from './gameReducer';
import resultGameReducer from './resultGameReducer';
import starsReducer from './starsReducer';
import toggleReducer from './toggleReducer';

const rootReducer = combineReducers({
  isToggle: toggleReducer,
  isBtnStart: gameReducer,
  arrayStars: starsReducer,
  isResultGame: resultGameReducer,
  count: CountErrorReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
