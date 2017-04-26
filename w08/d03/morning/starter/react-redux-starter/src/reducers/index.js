import { combineReducers } from 'redux';
import UsersReducer from './users';
import ActiveUserReducer from './active_user';

// We combine all reducers into a single object before updated data is dispatched (sent) to store
//  Your entire applications state (store) is just whatever gets returned from all your reducers
const rootReducer = combineReducers({
  users: UsersReducer,
  activeUser: ActiveUserReducer
});

/*
  {
    'users': [],
    'activeUser': {}
  }
*/

export default rootReducer;
