import axios from 'axios';
import { GET_ALL_DATA_URL, GET_SUMMARY } from '../constants';

const covidData = {
  getAllData,
  getSummaryData,
};

function getAllData(country) {
  const url = `${GET_ALL_DATA_URL}${country}`;
  return axios.get(url);
}

function getSummaryData() {
  const url = `${GET_SUMMARY}`;
  return axios.get(url);
}

export default covidData;
