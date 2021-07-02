import { GameAction, GameActionTypes, GameState } from '../../types/game';

const initialState: GameState = {
  isBtnStart: false,
};

const gameReducer = (state = initialState, action: GameAction): GameState => {
  switch (action.type) {
    case GameActionTypes.GAME_STOP:
      return { ...state, isBtnStart: false };
    case GameActionTypes.GAME_START:
      return { ...state, isBtnStart: true };
    default:
      return state;
  }
};

export default gameReducer;
