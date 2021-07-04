export interface StarsState {
  arrayStars: string[];
}

export interface StarsAction {
  type: string;
  payload: string;
}

export enum StarsActionTypes {
  ADD_STARS = 'ADD_STARS',
  ADD_STARS_MAX = 'ADD_STARS_MAX',
  REMOVE_STARS = 'REMOVE_STARS',
}

interface StarsSuccessAction {
  type: StarsActionTypes.ADD_STARS;
}

interface StarsErrorAction {
  type: StarsActionTypes.REMOVE_STARS;
}

export type StarsActionSuccess = StarsSuccessAction | StarsErrorAction;
