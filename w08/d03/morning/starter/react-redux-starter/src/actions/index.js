import * as types from '../constants/action_types';

export const selectUser = (user) => {
  console.log('You clicked on user: ', user);

  return {
    type: types.USER_SELECTED,
    payload: user
  }
};
