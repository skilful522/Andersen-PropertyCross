import { combineReducers } from 'redux';
import apartmentsListReducer from './apartmentsListReducer';
import searchedListReducer from './searchedListReducer';
import favoriteListReducer from './favoriteListReducer';

const rootReducer = combineReducers({
    searchedListReducer,
    apartmentsListReducer,
    favoriteListReducer,
});

export default rootReducer;
