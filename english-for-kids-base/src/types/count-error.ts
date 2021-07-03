export interface CountErrorState {
  count: number;
}

export interface CountErrorAction {
  type: string;
  payload: number;
}

export enum CountErrorActionTypes {
  ADD_COUNT = 'ADD_COUNT',
  REMOVE_COUNT = 'REMOVE_COUNT',
}
