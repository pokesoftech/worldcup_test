import { SET_MATCHES } from './types';
import axios from 'axios';

export function setMatches(markets) {
  return {
    type: SET_MATCHES,
    matches
  };
}

export function fetchMatches() {
  return dispatch => {
    return axios.get(process.env.API_URL + 'matches/country?fifa_code=USA').then(res => {
      if (res.status !== 200) {
        console.log(`There was a problem: ${res.status}`);
        return;
      }
      dispatch(setMatches(res.data.matches));
    }, err => {

    });
  }
}