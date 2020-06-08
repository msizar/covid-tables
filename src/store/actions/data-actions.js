import covidData from '../../providers/data';
import { GET_ALL_DATA, CLEAR_DATA, GET_SUMMARY_DATA } from '../types';
import loadingActions from './loading-actions';

const dataActions = {
  getAllData,
  getSummaryData,
  clearData,
};

function getAllData(country) {
  return (dispatch) => {
    dispatch(loadingActions.startLoader());
    covidData
      .getAllData(country)
      .then((response) => {
        dispatch(loadingActions.stopLoader());
        // check if there response has data
        if (response && response.status === 200) {
          dispatch(saveAllData(response.data));
          return;
        }
      })
      .catch((error) => {
        dispatch(loadingActions.stopLoader());
        console.log(error);
      });
  };
}

function getSummaryData() {
  return (dispatch) => {
    dispatch(loadingActions.startLoader());
    covidData
      .getSummaryData()
      .then((response) => {
        dispatch(loadingActions.stopLoader());
        // check if there response has data
        if (response && response.status === 200) {
          dispatch(saveSummaryData(response.data));
          return;
        }
      })
      .catch((error) => {
        dispatch(loadingActions.stopLoader());
        console.log(error);
      });
  };
}

function clearData() {
  return (dispatch) => dispatch({ type: CLEAR_DATA });
}

function saveAllData(data) {
  return { type: GET_ALL_DATA, payload: data };
}

function saveSummaryData(data) {
  return { type: GET_SUMMARY_DATA, payload: data };
}

export default dataActions;
