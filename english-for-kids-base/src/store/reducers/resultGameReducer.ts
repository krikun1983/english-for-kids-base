import { ResultGameAction, ResultGameActionTypes, ResultGameState } from '../../types/result-game';

const initialState: ResultGameState = {
  isResultGame: false,
  isMain: false,
};

const resultGameReducer = (state = initialState, action: ResultGameAction): ResultGameState => {
  switch (action.type) {
    case ResultGameActionTypes.RESULT_GAME_SUCCESS:
      return { ...state, isResultGame: true };
    case ResultGameActionTypes.RESULT_GAME_ERROR:
      return { ...state, isResultGame: false };
    case ResultGameActionTypes.RESULT_MAIN_DEFAULT:
      return { ...state, isMain: false };
    case ResultGameActionTypes.RESULT_MAIN:
      return { ...state, isMain: true };
    default:
      return state;
  }
};

export default resultGameReducer;
