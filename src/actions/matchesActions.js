import { SET_MATCHES } from './types';
import axios from 'axios';

export function setMatches(matches) {
  return {
    type: SET_MATCHES,
    matches
  };
}

export function fetchMatches(country_code) {
  return dispatch => {
    return axios.get(process.env.API_URL + '/matches/country?fifa_code='+country_code).then(res => {
      if (res.status !== 200) {
        console.log(`There was a problem: ${res.status}`);
        return;
      }
      dispatch(setMatches(res.data));
    }, err => {

    });
  }
}
