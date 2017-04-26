import * as types from '../constants/action_types';

export default function UsersReducer(state=[], action) {
  switch(action.type) {
    case types.GET_USERS_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case types.GET_USERS_REJECTED: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting users',
      });
    }
    case types.GET_USERS_FULFILLED: {
      const users = action.users;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got users from Firebase'
      });
      // @todo Look into making copy of array instead of using Object.assign
      newState.users = [];
      if (users) {
        newState.users = users;
      }
      return newState.users;
    }

    default:
      return state;
  }
}
