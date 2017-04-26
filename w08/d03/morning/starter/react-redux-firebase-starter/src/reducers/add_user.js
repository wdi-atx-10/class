import * as types from '../constants/action_types';

export default (state=null, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return action.user;
    default:
      return state;
  }
}
