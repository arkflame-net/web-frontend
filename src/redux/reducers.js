 
import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';

const reducers = {
    session: sessionReducer,
};

export default combineReducers(reducers);