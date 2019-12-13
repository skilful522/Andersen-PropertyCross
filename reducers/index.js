import { combineReducers } from 'redux';
import searchedListReducer from './searchedListReducer';
import apartmentsListReducer from './apartmentsListReducer';

const rootReducer = combineReducers({
    searchedListReducer,
    apartmentsListReducer,
});

export default rootReducer;
