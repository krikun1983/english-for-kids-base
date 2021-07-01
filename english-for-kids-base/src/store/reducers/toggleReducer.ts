import { ToggleAction, ToggleActionTypes, ToggleState } from '../../types/toggle';

const initialState: ToggleState = {
  isToggle: false,
};

const toggleReducer = (state = initialState, action: ToggleAction): ToggleState => {
  switch (action.type) {
    case ToggleActionTypes.TOGGLE_TRAIN:
      return { ...state, isToggle: false };
    case ToggleActionTypes.TOGGLE_PLAY:
      return { ...state, isToggle: true };
    default:
      return state;
  }
};

export default toggleReducer;
