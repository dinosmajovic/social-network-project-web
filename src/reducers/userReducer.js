import { GET_USER, USER_POSTS, USER_FEED } from '../actions/types';
import _ from 'lodash';

const initialState = {
    userPayload: {},
    userPosts: {},
    userFeed: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_FEED:
            return {
                ...state,
                userFeed: _.reverse(_.sortBy(action.payload, function (dateObj) {
                    return new Date(dateObj.datePublished);
                }))
            }
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