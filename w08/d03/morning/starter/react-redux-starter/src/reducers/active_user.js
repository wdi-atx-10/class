import * as types from '../constants/action_types';

export default (state=null, action) => {
  switch (action.type) {
    case types.USER_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
