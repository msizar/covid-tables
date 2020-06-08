import { START_LOADING, STOP_LOADING } from '../types';

const loadingActions = {
  startLoader,
  stopLoader,
};

function startLoader() {
  return { type: START_LOADING };
}

function stopLoader() {
  return { type: STOP_LOADING };
}

export default loadingActions;
