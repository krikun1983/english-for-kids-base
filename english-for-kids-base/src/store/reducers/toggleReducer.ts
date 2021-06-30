import {
  ToggleAction,
  ToggleActionTypes,
  ToggleState,
} from '../../types/toggle';

const initialState: ToggleState = {
  toggle: false,
};

const toggleReducer = (
  state = initialState,
  action: ToggleAction,
): ToggleState => {
  switch (action.type) {
    case ToggleActionTypes.TOGGLE_TRAIN:
      return { ...state, toggle: false };
    case ToggleActionTypes.TOGGLE_PLAY:
      return { ...state, toggle: true };
    default:
      return state;
  }
};

export default toggleReducer;
