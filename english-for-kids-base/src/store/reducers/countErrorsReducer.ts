import { CountErrorAction, CountErrorActionTypes, CountErrorState } from '../../types/count-error';

const initialState: CountErrorState = {
  count: 0,
};

const CountErrorReducer = (state = initialState, action: CountErrorAction): CountErrorState => {
  switch (action.type) {
    case CountErrorActionTypes.ADD_COUNT:
      return { ...state, count: state.count + action.payload };
    case CountErrorActionTypes.REMOVE_COUNT:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default CountErrorReducer;
