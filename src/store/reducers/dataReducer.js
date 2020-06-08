import { GET_ALL_DATA, CLEAR_DATA, GET_SUMMARY_DATA } from '../types';

const initialState = {};

export default function data(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DATA:
      return [...action.payload];
    case GET_SUMMARY_DATA:
      return { ...action.payload };
    case CLEAR_DATA:
      return initialState;
    default:
      return state;
  }
}
