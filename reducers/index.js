import { combineReducers } from 'redux';
import apartmentsListReducer from './apartmentsListReducer';
import searchedListReducer from './searchedListReducer';
import favoriteListReducer from './favoriteListReducer';
import currentApartmentReducer from './currentApartmentReducer';

const rootReducer = combineReducers({
    searchedListReducer,
    apartmentsListReducer,
    favoriteListReducer,
    currentApartmentReducer,
});

export default rootReducer;
