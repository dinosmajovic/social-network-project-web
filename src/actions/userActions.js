import axios from 'axios';
import { GET_USER, GET_ERRORS, USER_POSTS, USER_FEED } from './types';
import { API } from '../constants';
import store from '../store';

export const getUser = (userId) => dispatch => {
  if (userId === null) {
    dispatch({
      type: GET_USER,
      payload: {}
    })
  }

  axios.get(API + '/users/' + userId, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.jwtToken
    }
  })
    .then(res => {
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data ? err.data : null
      })
    );
}

export const getFeed = (userId) => dispatch => {
  axios.get(API + '/users/feed', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.jwtToken
    }
  })
    .then(res => {
      dispatch({
        type: USER_FEED,
        payload: res.data
      })
    })
    .catch(err => console.log(err.data))
}

export const getUserPosts = (userId) => dispatch => {
  if (userId === null) {
    dispatch({
      type: USER_POSTS,
      payload: {}
    })
  }
  axios.get(API + '/users/' + userId + '/posts', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.jwtToken
    }
  })
    .then(res => {
      dispatch({
        type: USER_POSTS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.data ? err.data : null
      })

    })
}

export const uploadProfilePhoto = (userId, photo) => dispatch => {
  const data = new FormData();
  data.append('File', photo[0]);

  axios.post(API + '/users/' + userId + '/photos', data, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.jwtToken
    }
  })
    .then(res => {
      dispatch(getUser(userId))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data ? err.data : null
      }))
}

export const followUser = (userId, id) => dispatch => {
  axios.post(API + '/users/' + userId + '/follow/' + id, null, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.jwtToken
    }
  })
    .then(res => console.log("You followed user: " + id))
    .catch(err =>
      console.log(err))
}

export const unfollowUser = (userId, id) => dispatch => {
  axios.post(API + '/users/' + userId + '/unfollow/' + id, null, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.jwtToken
    }
  })
    .then(res => console.log("You unfollowed user: " + id))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data ? err.data : null
      }))
}

