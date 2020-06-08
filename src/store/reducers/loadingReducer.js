import { START_LOADING, STOP_LOADING } from '../types';

const initialState = false;

export default function load(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
}
