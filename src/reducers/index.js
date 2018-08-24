import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import postReducer from './postReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    form: formReducer,
    user: userReducer,
    post: postReducer
});
