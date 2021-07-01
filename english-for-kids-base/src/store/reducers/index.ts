import { combineReducers } from 'redux';
import toggleReducer from './toggleReducer';

const rootReducer = combineReducers({
  isToggle: toggleReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
