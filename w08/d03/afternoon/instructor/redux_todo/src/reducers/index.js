import {combineReducers} from 'redux';
import todoReducer from './todo_reducer';

const rootReducer = combineReducers({
  todos: todoReducer
});

export default rootReducer;
