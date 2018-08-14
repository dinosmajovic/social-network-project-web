import { GET_USER, USER_POSTS } from '../actions/types';

const initialState = {
    userPayload: {},
    userPosts: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_POSTS:
            return {
                ...state,
                userPosts: action.payload
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