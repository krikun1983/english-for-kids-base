import { StarsAction, StarsActionTypes, StarsState } from '../../types/stars';

const initialState: StarsState = {
  arrayStars: [],
};
/// return [...array.slice(-n), ...array.slice(0, array.length - n)];
/// const moveToStart = (arr, n) => [...arr.splice(-n), ...arr];
const starsReducer = (state = initialState, action: StarsAction): StarsState => {
  switch (action.type) {
    case StarsActionTypes.ADD_STARS:
      return { ...state, arrayStars: [...state.arrayStars, action.payload] };
    case StarsActionTypes.ADD_STARS_MAX:
      return { ...state, arrayStars: [...state.arrayStars.slice(1, state.arrayStars.length - 1), action.payload] };
    case StarsActionTypes.REMOVE_STARS:
      return { ...state, arrayStars: [] };
    default:
      return state;
  }
};

export default starsReducer;
