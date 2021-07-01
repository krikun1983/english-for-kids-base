export interface ToggleState {
  isToggle: boolean;
}

export interface ToggleAction {
  type: string;
  payload: boolean;
}

export enum ToggleActionTypes {
  TOGGLE_TRAIN = 'TRAIN',
  TOGGLE_PLAY = 'PLAY',
}

interface ToggleTrainAction {
  type: ToggleActionTypes.TOGGLE_TRAIN;
}

interface TogglePlayAction {
  type: ToggleActionTypes.TOGGLE_PLAY;
}

export type ToggleActionTrainPlay = ToggleTrainAction | TogglePlayAction;
