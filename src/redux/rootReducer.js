import { combineReducers } from 'redux';
//import { operationsReducer } from './todoapp/reducer/operation';
import { operationsReducer } from './todoapp/reducer/operation';
export const rootReducer = combineReducers({
    operationsReducer,
}) 