import axios from 'axios';
import { GET_ERRORS } from './types';
import { API } from '../constants';
import { getUserPosts } from './userActions';

export const createPost = (userId, postText) => dispatch => {
  axios.post(API + '/users/posts', { "content": postText }, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.jwtToken
    }
  })
    .then(res => dispatch(getUserPosts(userId)))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      })
    );
}

export const editPost = (postId, userId, editText) => dispatch => {
  axios.put(API + '/posts/' + postId, { "content": editText }, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.jwtToken
    }
  })
    .then(res => dispatch(getUserPosts(userId)))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      })
    );
}

export const deletePost = (postId, userId) => dispatch => {
  axios.delete(API + '/posts/' + postId, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.jwtToken
    }
  })
  .then(res => dispatch(getUserPosts(userId)))
  .catch(err => 
    dispatch({
      type: GET_ERRORS,
      payload: err.data
    }))
}