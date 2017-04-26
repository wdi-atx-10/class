import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';

// We combine all reducers into a single object before updated data is dispatched (sent) to store
//  Your entire applications state (store) is just whatever gets returned from all your reducers
const rootReducer = combineReducers({
  users: UsersReducer
});

export default rootReducer;
