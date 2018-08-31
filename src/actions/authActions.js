import axios from 'axios'
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { API } from '../constants';
import { getUser, getUserPosts } from '../actions/userActions';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

export const registerUser = (userData, history) => dispatch => {
    axios.post(API + '/auth/register', userData)
        .then(res => {
            dispatch(loginUser(userData));
            history.push('/');
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.data ? err.data : null
            })
        );
};

export const loginUser = userData => dispatch => {
    axios.post(API + '/auth/login', userData)
        .then(res => {
            const token = res.data.tokenString;
            localStorage.setItem('jwtToken', token);
            const user = res.data.user;
            localStorage.setItem('user', JSON.stringify(user));
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(user));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.data ? err.data : null
            })
        );
};

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    dispatch(getUser(null));
    dispatch(getUserPosts(null));
};