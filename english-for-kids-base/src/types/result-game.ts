export interface ResultGameState {
  isResultGame: boolean;
  isMain: boolean;
}

export interface ResultGameAction {
  type: string;
  payload: boolean;
}

export enum ResultGameActionTypes {
  RESULT_GAME_SUCCESS = 'RESULT_GAME_SUCCESS',
  RESULT_GAME_ERROR = 'RESULT_GAME_ERROR',
  RESULT_MAIN = 'RESULT_MAIN',
}

interface ResultGameResultGameSuccessAction {
  type: ResultGameActionTypes.RESULT_GAME_SUCCESS;
}

interface ResultGameResultGameErrorAction {
  type: ResultGameActionTypes.RESULT_GAME_ERROR;
}

export type ResultGameActionSuccessError = ResultGameResultGameSuccessAction | ResultGameResultGameErrorAction;
