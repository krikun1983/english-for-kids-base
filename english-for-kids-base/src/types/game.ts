export interface GameState {
  isBtnStart: boolean;
}

export interface GameAction {
  type: string;
  payload: boolean;
}

export enum GameActionTypes {
  GAME_START = 'START',
  GAME_STOP = 'STOP',
}

interface GameStartAction {
  type: GameActionTypes.GAME_START;
}

interface GameStopAction {
  type: GameActionTypes.GAME_STOP;
}

export type GameActionStartStop = GameStartAction | GameStopAction;
