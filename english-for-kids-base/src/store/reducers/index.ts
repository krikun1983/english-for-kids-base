import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import starsReducer from './starsReducer';
import toggleReducer from './toggleReducer';

const rootReducer = combineReducers({
  isToggle: toggleReducer,
  isBtnStart: gameReducer,
  arrayStars: starsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
