import axios from 'axios';
import { GET_USER, GET_ERRORS, USER_POSTS } from './types';
import {API} from '../constants';

export const getUser = (userId) => dispatch => {
  axios.get(API + '/users/' + userId, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.jwtToken
    }
  })
    .then(res =>
      dispatch({
        type: GET_USER,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      })
    );
}

export const getUserPosts = (userId) => dispatch => {
  axios.get(API + '/users/' + userId + '/posts', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.jwtToken
    }
  })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: USER_POSTS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.data);
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      })

    })
}