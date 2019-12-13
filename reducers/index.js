import { combineReducers } from 'redux';
import searchedListReducer from './searchedListReducer';

const rootReducer = combineReducers({
    searchedListReducer,
});

export default rootReducer;
