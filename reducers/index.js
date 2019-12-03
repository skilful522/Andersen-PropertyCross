import { counterReducer } from './counter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export { rootReducer };
