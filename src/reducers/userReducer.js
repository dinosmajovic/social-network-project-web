import { GET_USER, USER_POSTS } from '../actions/types';
import _ from 'lodash';

const initialState = {
    userPayload: {},
    userPosts: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_POSTS:
            return {
                ...state,
                userPosts: _.reverse(action.payload)
            }
        case GET_USER:
            return {
                ...state,
                userPayload: action.payload
            };
        default:
            return state;
    }
}