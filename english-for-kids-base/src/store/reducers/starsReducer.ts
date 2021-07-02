import { StarsAction, StarsActionTypes, StarsState } from '../../types/stars';

const initialState: StarsState = {
  arrayStars: [],
};

const starsReducer = (state = initialState, action: StarsAction): StarsState => {
  switch (action.type) {
    case StarsActionTypes.ADD_STARS:
      return { ...state, arrayStars: [...state.arrayStars, action.payload] };
    case StarsActionTypes.REMOVE_STARS:
      return { ...state, arrayStars: [] };
    default:
      return state;
  }
};

export default starsReducer;
