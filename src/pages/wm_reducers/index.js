import { combineReducers } from 'redux';
import errors from './errors'
import auth from './auth'
import messages from './messages'
import posts from './posts';
import connects from './connects';

// import leads from '.'
export default combineReducers({
    errors,
    auth,
    messages,
    posts,
    connects
});