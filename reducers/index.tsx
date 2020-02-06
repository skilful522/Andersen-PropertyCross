import { combineReducers } from 'redux';
import searchedListReducer from './searchedListReducer';
import apartmentsListReducer from './apartmentsListReducer';
import favoriteListReducer from './favoriteListReducer';
import currentApartmentReducer from './currentApartmentReducer';

const rootReducer = combineReducers({
    searchedListReducer,
    apartmentsListReducer,
    favoriteListReducer,
    currentApartmentReducer,
});

export default rootReducer;
